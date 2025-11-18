export interface TextStyleToken {
  fontFamily: string;
  fontSize: string;
  fontWeight: number | string;
  lineHeight: string;
  letterSpacing?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
}

export interface TypographyTokens {
  fontFamily: Record<string, string[]>;
  fontSize: Record<string, string>;
  fontWeight: Record<string, number | string>;
  lineHeight: Record<string, string>;
  letterSpacing: Record<string, string>;
  textStyles: Record<string, TextStyleToken>;
}

export interface ThemeColorSet {
  background: string;
  surface: string;
  surfaceMuted: string;
  border: string;
  borderStrong: string;
  textPrimary: string;
  textSecondary: string;
  icon: string;
  fieldBackground: string;
  fieldBorder: string;
  fieldBorderActive: string;
  fieldPlaceholder: string;
}

export interface ThemeTokens {
  light: ThemeColorSet;
  dark: ThemeColorSet;
}

export interface DesignTokens {
  colors: Record<string, string>;
  spacing: Record<string, string>;
  radii: Record<string, string>;
  borderWidth: Record<string, string>;
  shadows: Record<string, string>;
  opacity: Record<string, string>;
  typography: TypographyTokens;
  themes: ThemeTokens;
}

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Record<string, any>
    ? DeepPartial<T[K]>
    : T[K];
};


