import defaultTokens from './defaultTokens';
import generatedTokens, {
  hasGeneratedTokenOverrides
} from './generated';
import type { DesignTokens } from './types';
import { deepMerge } from '../utils/deepMerge';

const designTokenSource = hasGeneratedTokenOverrides
  ? deepMerge(defaultTokens, generatedTokens)
  : defaultTokens;

export const designTokens: DesignTokens = designTokenSource as DesignTokens;

const fontWeight = Object.fromEntries(
  Object.entries(designTokens.typography.fontWeight).map(([key, value]) => [
    key,
    value.toString()
  ])
);

export const tailwindTheme = {
  colors: designTokens.colors,
  spacing: designTokens.spacing,
  borderRadius: designTokens.radii,
  borderWidth: designTokens.borderWidth,
  boxShadow: designTokens.shadows,
  opacity: designTokens.opacity,
  fontFamily: designTokens.typography.fontFamily,
  fontSize: designTokens.typography.fontSize,
  fontWeight,
  lineHeight: designTokens.typography.lineHeight,
  letterSpacing: designTokens.typography.letterSpacing
};

export * from './types';


