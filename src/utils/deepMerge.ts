export type Mergeable = Record<string, any>;

export function deepMerge<T extends Mergeable, U extends Mergeable>(
  target: T,
  source: U
): T & U {
  const output: Mergeable = { ...target };

  for (const [key, value] of Object.entries(source ?? {})) {
    if (value === undefined || value === null) {
      continue;
    }

    if (Array.isArray(value)) {
      output[key] = value.slice();
      continue;
    }

    if (isPlainObject(value)) {
      const targetValue = isPlainObject(output[key]) ? output[key] : {};
      output[key] = deepMerge(targetValue, value);
      continue;
    }

    output[key] = value;
  }

  return output as T & U;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}


