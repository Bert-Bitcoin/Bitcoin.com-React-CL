import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import containerQueries from '@tailwindcss/container-queries';

import { designTokens, tailwindTheme } from './src/tokens';

const toRgb = (hex: string) => {
  const normalized = hex.replace('#', '');
  const bigint = parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r} ${g} ${b}`;
};

const { themes } = designTokens;

const surfaceColors = {
  background: 'rgb(var(--color-background) / <alpha-value>)',
  surface: 'rgb(var(--color-surface) / <alpha-value>)',
  'surface-muted': 'rgb(var(--color-surface-muted) / <alpha-value>)',
  border: 'rgb(var(--color-border) / <alpha-value>)',
  'border-strong': 'rgb(var(--color-border-strong) / <alpha-value>)',
  'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
  'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
  icon: 'rgb(var(--color-icon) / <alpha-value>)',
  'field-background': 'rgb(var(--color-field-background) / <alpha-value>)',
  'field-border': 'rgb(var(--color-field-border) / <alpha-value>)',
  'field-border-active': 'rgb(var(--color-field-border-active) / <alpha-value>)',
  'field-placeholder': 'rgb(var(--color-field-placeholder) / <alpha-value>)'
};

const shadeColors = {
  'shades-black': 'rgb(var(--color-shades-black) / <alpha-value>)',
  'shades-almost-black': 'rgb(var(--color-shades-almost-black) / <alpha-value>)',
  'shades-extra-dark': 'rgb(var(--color-shades-extra-dark) / <alpha-value>)',
  'shades-dark': 'rgb(var(--color-shades-dark) / <alpha-value>)',
  'shades-semi-dark': 'rgb(var(--color-shades-semi-dark) / <alpha-value>)',
  'shades-mid': 'rgb(var(--color-shades-mid) / <alpha-value>)',
  'shades-semi-light': 'rgb(var(--color-shades-semi-light) / <alpha-value>)',
  'shades-light': 'rgb(var(--color-shades-light) / <alpha-value>)',
  'shades-extra-light': 'rgb(var(--color-shades-extra-light) / <alpha-value>)',
  'shades-off-white': 'rgb(var(--color-shades-off-white) / <alpha-value>)',
  'shades-white': 'rgb(var(--color-shades-white) / <alpha-value>)'
};

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './storybook/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '800px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        ...tailwindTheme.colors,
        ...surfaceColors,
        ...shadeColors
      },
      spacing: tailwindTheme.spacing,
      borderRadius: tailwindTheme.borderRadius,
      borderWidth: tailwindTheme.borderWidth,
      boxShadow: tailwindTheme.boxShadow,
      opacity: tailwindTheme.opacity,
      fontFamily: tailwindTheme.fontFamily,
      fontSize: tailwindTheme.fontSize,
      fontWeight: tailwindTheme.fontWeight,
      lineHeight: tailwindTheme.lineHeight,
      letterSpacing: tailwindTheme.letterSpacing,
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-8px)' }
        },
        bounceIn: {
          '0%': { transform: 'scale(0.6)', opacity: '0' },
          '50%': { transform: 'scale(1.01)', opacity: '1' },
          '70%': { transform: 'scale(0.9)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        bounceOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.8)', opacity: '0' }
        }
      },
      animation: {
        slideIn: 'slideIn 0.2s ease-out',
        slideOut: 'slideOut 0.2s ease-in',
        fadeIn: 'fadeIn 0.15s ease-out',
        fadeOut: 'fadeOut 0.15s ease-in',
        bounceIn: 'bounceIn 0.5s ease-out',
        bounceOut: 'bounceOut 0.2s ease-in'
      }
    }
  },
  plugins: [
    containerQueries,
    plugin(({ addBase }) => {
      addBase({
        ':root': {
          '--color-background': toRgb(themes.light.background),
          '--color-surface': toRgb(themes.light.surface),
          '--color-surface-muted': toRgb(themes.light.surfaceMuted),
          '--color-border': toRgb(themes.light.border),
          '--color-border-strong': toRgb(themes.light.borderStrong),
          '--color-text-primary': toRgb(themes.light.textPrimary),
          '--color-text-secondary': toRgb(themes.light.textSecondary),
          '--color-icon': toRgb(themes.light.icon),
          '--color-field-background': toRgb(themes.light.fieldBackground),
          '--color-field-border': toRgb(themes.light.fieldBorder),
          '--color-field-border-active': toRgb(themes.light.fieldBorderActive),
          '--color-field-placeholder': toRgb(themes.light.fieldPlaceholder),
          '--color-shades-black': toRgb(designTokens.colors['shades-black']),
          '--color-shades-almost-black': toRgb(designTokens.colors['shades-almost-black']),
          '--color-shades-extra-dark': toRgb(designTokens.colors['shades-extra-dark']),
          '--color-shades-dark': toRgb(designTokens.colors['shades-dark']),
          '--color-shades-semi-dark': toRgb(designTokens.colors['shades-semi-dark']),
          '--color-shades-mid': toRgb(designTokens.colors['shades-mid']),
          '--color-shades-semi-light': toRgb(designTokens.colors['shades-semi-light']),
          '--color-shades-light': toRgb(designTokens.colors['shades-light']),
          '--color-shades-extra-light': toRgb(designTokens.colors['shades-extra-light']),
          '--color-shades-off-white': toRgb(designTokens.colors['shades-off-white']),
          '--color-shades-white': toRgb(designTokens.colors['shades-white'])
        },
        '[data-theme="dark"]': {
          '--color-background': toRgb(themes.dark.background),
          '--color-surface': toRgb(themes.dark.surface),
          '--color-surface-muted': toRgb(themes.dark.surfaceMuted),
          '--color-border': toRgb(themes.dark.border),
          '--color-border-strong': toRgb(themes.dark.borderStrong),
          '--color-text-primary': toRgb(themes.dark.textPrimary),
          '--color-text-secondary': toRgb(themes.dark.textSecondary),
          '--color-icon': toRgb(themes.dark.icon),
          '--color-field-background': toRgb(themes.dark.fieldBackground),
          '--color-field-border': toRgb(themes.dark.fieldBorder),
          '--color-field-border-active': toRgb(themes.dark.fieldBorderActive),
          '--color-field-placeholder': toRgb(themes.dark.fieldPlaceholder),
          '--color-shades-black': '255 255 255',
          '--color-shades-almost-black': '237 237 243',
          '--color-shades-extra-dark': '203 203 220',
          '--color-shades-dark': '170 166 181',
          '--color-shades-semi-dark': '125 123 132',
          '--color-shades-mid': '96 95 99',
          '--color-shades-semi-light': '75 73 80',
          '--color-shades-light': '47 46 51',
          '--color-shades-extra-light': '36 36 36',
          '--color-shades-off-white': '28 28 28',
          '--color-shades-white': '0 0 0'
        }
      });
    })
  ]
};

export default config;


