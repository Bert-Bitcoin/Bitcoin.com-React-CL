import 'dotenv/config';

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import defaultTokens from '../src/tokens/defaultTokens';
import type { DeepPartial, DesignTokens } from '../src/tokens/types';
import { deepMerge } from '../src/utils/deepMerge';

type VariableResolvedType = 'COLOR' | 'FLOAT' | 'STRING' | 'BOOLEAN';

interface FigmaVariable {
  id: string;
  name: string;
  resolvedType: VariableResolvedType;
  variableCollectionId: string;
  valuesByMode: Record<string, any>;
  description?: string;
}

interface SyncSummary {
  colors: number;
  spacing: number;
  radii: number;
  borderWidth: number;
  opacity: number;
  unresolved: number;
  modeId?: string;
  modeName?: string;
}

interface EnvConfig {
  personalAccessToken?: string;
  fileKey?: string;
  baseUrl: string;
  variableCollectionId?: string;
  modeId?: string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const tokensDir = path.resolve(projectRoot, 'tokens');
const cacheDir = path.resolve(tokensDir, '.cache');
const generatedJsonPath = path.resolve(tokensDir, 'figma-tokens.json');
const generatedTsPath = path.resolve(projectRoot, 'src', 'tokens', 'generated.ts');

async function main() {
  const env = loadEnv();

  if (!env.personalAccessToken || !env.fileKey) {
    console.warn(
      '[sync:tokens] Skipping Figma fetch because FIGMA_PERSONAL_ACCESS_TOKEN or FIGMA_FILE_KEY is missing. Falling back to default tokens.'
    );
    await writeOutputs({}, defaultSummary());
    return;
  }

  await mkdir(tokensDir, { recursive: true });
  await mkdir(cacheDir, { recursive: true });

  try {
    const { tokens, summary } = await fetchDesignTokens(env);
    await writeOutputs(tokens, summary);
    logSummary(summary, true);
  } catch (error) {
    console.error('[sync:tokens] Failed to sync tokens from Figma.');
    console.error(error instanceof Error ? error.message : error);
    console.warn('[sync:tokens] Writing empty generated token file instead.');
    await writeOutputs({}, defaultSummary());
    process.exitCode = 1;
  }
}

function loadEnv(): EnvConfig {
  return {
    personalAccessToken: process.env.FIGMA_PERSONAL_ACCESS_TOKEN,
    fileKey: process.env.FIGMA_FILE_KEY,
    variableCollectionId: process.env.FIGMA_VARIABLE_COLLECTION_ID,
    modeId: process.env.FIGMA_MODE_ID,
    baseUrl: process.env.FIGMA_MPC_BASE_URL ?? 'https://api.figma.com/v1'
  };
}

async function fetchDesignTokens(
  env: EnvConfig
): Promise<{ tokens: DeepPartial<DesignTokens>; summary: SyncSummary }> {
  const response = await fetch(
    `${env.baseUrl}/files/${env.fileKey}/variables`,
    {
      headers: {
        'X-Figma-Token': env.personalAccessToken!,
        'Content-Type': 'application/json'
      }
    }
  );

  if (!response.ok) {
    throw new Error(
      `Figma API request failed with status ${response.status} ${response.statusText}`
    );
  }

  const payload = await response.json();
  const variables: FigmaVariable[] = payload.meta?.variables ?? [];
  const collections: Array<{
    id: string;
    defaultModeId: string;
    name?: string;
    modes?: Array<{ modeId: string; name: string }>;
  }> = payload.meta?.variableCollections ?? [];

  const availableModes: Record<string, { name: string }> = {};
  for (const collection of collections) {
    for (const mode of collection.modes ?? []) {
      availableModes[mode.modeId] = { name: mode.name };
    }
  }

  const activeCollection =
    collections.find((collection) =>
      env.variableCollectionId
        ? collection.id === env.variableCollectionId
        : true
    ) ?? collections[0];

  const activeModeId =
    env.modeId ??
    activeCollection?.defaultModeId ??
    Object.keys(availableModes)[0];

  if (!activeModeId) {
    throw new Error('No variable modes were found for the provided file.');
  }

  const summary = defaultSummary({
    modeId: activeModeId,
    modeName: availableModes[activeModeId]?.name
  });

  const tokens: DeepPartial<DesignTokens> = {
    colors: {},
    spacing: {},
    radii: {},
    borderWidth: {},
    opacity: {}
  };

  for (const variable of variables) {
    if (
      env.variableCollectionId &&
      variable.variableCollectionId !== env.variableCollectionId
    ) {
      continue;
    }

    const value = resolveValueForMode(variable, activeModeId);

    if (value === undefined) {
      summary.unresolved += 1;
      continue;
    }

    const normalisedName = normaliseName(variable.name);

    switch (variable.resolvedType) {
      case 'COLOR': {
        const colorValue = normaliseColor(value);
        if (colorValue) {
          tokens.colors![normalisedName] = colorValue;
          summary.colors += 1;
        }
        break;
      }
      case 'FLOAT': {
        const floatOutcome = mapFloatToken(normalisedName, value);
        if (!floatOutcome) {
          summary.unresolved += 1;
          break;
        }

        const [category, formattedValue] = floatOutcome;

        if (category === 'spacing') {
          (tokens.spacing ??= {})[normalisedName] = formattedValue;
          summary.spacing += 1;
        } else if (category === 'radii') {
          (tokens.radii ??= {})[normalisedName] = formattedValue;
          summary.radii += 1;
        } else if (category === 'borderWidth') {
          (tokens.borderWidth ??= {})[normalisedName] = formattedValue;
          summary.borderWidth += 1;
        } else if (category === 'opacity') {
          (tokens.opacity ??= {})[normalisedName] = formattedValue;
          summary.opacity += 1;
        } else {
          summary.unresolved += 1;
        }
        break;
      }
      default: {
        summary.unresolved += 1;
      }
    }
  }

  const cleanedTokens = pruneEmptyTokens(tokens);
  return { tokens: cleanedTokens, summary };
}

function resolveValueForMode(
  variable: FigmaVariable,
  modeId: string
): any | undefined {
  if (variable.valuesByMode?.[modeId] !== undefined) {
    return variable.valuesByMode[modeId];
  }

  const fallbackValue = Object.values(variable.valuesByMode ?? {})[0];
  return fallbackValue;
}

function normaliseName(name: string): string {
  return name
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[/\\]+/g, '-')
    .replace(/_{2,}/g, '_')
    .replace(/-+/g, '-')
    .toLowerCase();
}

function normaliseColor(value: any): string | undefined {
  if (!value || typeof value !== 'object') {
    return undefined;
  }

  const { r, g, b, a = 1 } = value as {
    r: number;
    g: number;
    b: number;
    a?: number;
  };

  if ([r, g, b].some((channel) => typeof channel !== 'number')) {
    return undefined;
  }

  const red = clamp(Math.round(r * 255), 0, 255);
  const green = clamp(Math.round(g * 255), 0, 255);
  const blue = clamp(Math.round(b * 255), 0, 255);
  const alpha = clamp(Number.isFinite(a) ? a : 1, 0, 1);

  if (alpha === 1) {
    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
  }

  return `rgba(${red}, ${green}, ${blue}, ${round(alpha, 3)})`;
}

type FloatCategory = 'spacing' | 'radii' | 'borderWidth' | 'opacity';

function mapFloatToken(
  tokenName: string,
  rawValue: unknown
): [FloatCategory, string] | null {
  if (typeof rawValue !== 'number') {
    return null;
  }

  const value = Number(rawValue);
  if (!Number.isFinite(value)) {
    return null;
  }

  const mappers: Array<{
    pattern: RegExp;
    category: FloatCategory;
    formatter: (val: number) => string;
  }> = [
    {
      pattern: /(radius|corner|round|pill)/i,
      category: 'radii',
      formatter: toPx
    },
    {
      pattern: /(border|stroke|divider|outline|line)/i,
      category: 'borderWidth',
      formatter: toPx
    },
    {
      pattern: /(opacity|alpha|transparency)/i,
      category: 'opacity',
      formatter: toOpacity
    },
    {
      pattern: /(gap|spacing|space|stack|inset|padding|margin|layout)/i,
      category: 'spacing',
      formatter: toRem
    }
  ];

  for (const mapper of mappers) {
    if (mapper.pattern.test(tokenName)) {
      return [mapper.category, mapper.formatter(value)];
    }
  }

  // Default to spacing if no matcher hits but value is positive.
  if (value >= 0) {
    return ['spacing', toRem(value)];
  }

  return null;
}

function toHex(channel: number): string {
  return channel.toString(16).padStart(2, '0');
}

function toPx(value: number): string {
  return `${round(value, 3)}px`;
}

function toRem(value: number): string {
  const remValue = value / 16;
  return `${round(remValue, 4)}rem`;
}

function toOpacity(value: number): string {
  return `${round(value / 100, 3)}`;
}

function round(value: number, precision: number): number {
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function hasOverrides(value: unknown): boolean {
  if (!value || typeof value !== 'object') {
    return false;
  }

  return Object.values(value).some((entry) => {
    if (!entry) {
      return false;
    }

    if (typeof entry === 'object') {
      return hasOverrides(entry);
    }

    return true;
  });
}

async function writeOutputs(
  tokens: DeepPartial<DesignTokens>,
  summary: SyncSummary
): Promise<void> {
  const mergedTokens = deepMerge(defaultTokens, tokens);
  const payload = {
    generatedAt: new Date().toISOString(),
    summary,
    tokens
  };
  const hasOverridesFlag = hasOverrides(tokens);

  await writeFile(
    generatedJsonPath,
    JSON.stringify(payload, null, 2),
    'utf-8'
  );

  const serializedTokens = JSON.stringify(tokens, null, 2);
  const tsTemplate = `import type { DeepPartial, DesignTokens } from './types';

export const generatedTokens: DeepPartial<DesignTokens> = ${serializedTokens};
export const hasGeneratedTokenOverrides = ${hasOverridesFlag};

export default generatedTokens;
`;
  await writeFile(generatedTsPath, tsTemplate, 'utf-8');

  const mergedJsonPath = path.resolve(cacheDir, 'tailwind-theme.json');
  await writeFile(
    mergedJsonPath,
    JSON.stringify(mergedTokens, null, 2),
    'utf-8'
  );
}

function pruneEmptyTokens(
  tokens: DeepPartial<DesignTokens>
): DeepPartial<DesignTokens> {
  const result: DeepPartial<DesignTokens> = {};

  for (const [key, value] of Object.entries(tokens)) {
    if (!value) {
      continue;
    }

    if (
      typeof value === 'object' &&
      !Array.isArray(value) &&
      Object.keys(value).length === 0
    ) {
      continue;
    }

    (result as Record<string, unknown>)[key] = value;
  }

  return result;
}

function defaultSummary(
  overrides: Partial<SyncSummary> = {}
): SyncSummary {
  return {
    colors: 0,
    spacing: 0,
    radii: 0,
    borderWidth: 0,
    opacity: 0,
    unresolved: 0,
    modeId: overrides.modeId,
    modeName: overrides.modeName
  };
}

function logSummary(summary: SyncSummary, success: boolean): void {
  const status = success ? 'SUCCESS' : 'WARNING';
  const modeLabel = summary.modeName
    ? `${summary.modeName} (${summary.modeId})`
    : summary.modeId ?? 'default';

  console.info(
    `[sync:tokens] ${status} | mode=${modeLabel} | colors=${summary.colors} spacing=${summary.spacing} radii=${summary.radii} borderWidth=${summary.borderWidth} opacity=${summary.opacity} unresolved=${summary.unresolved}`
  );
}

await main();


