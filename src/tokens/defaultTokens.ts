import type { DesignTokens } from './types';

const rem = (value: number) => `${value / 16}rem`;

export const defaultTokens: DesignTokens = {
  colors: {
    'primary-100': '#4169e1',
    'primary-50': '#9db6fb',
    'primary-10': '#e8edfa',
    'secondary-100': '#ff9500',
    'secondary-50': '#ffc794',
    'secondary-10': '#faf2e8',
    'warning-100': '#ff9500',
    'warning-50': '#ffc794',
    'warning-10': '#faf2e8',
    'success-100': '#2fb790',
    'success-50': '#93d7b5',
    'success-10': '#e6f7ec',
    'alerts-100': '#e84142',
    'alerts-50': '#f9b09a',
    'alerts-10': '#faece8',
    'extra-cyan-100': '#4c9de5',
    'extra-cyan-50': '#9accf2',
    'extra-cyan-10': '#e9f4fc',
    'extra-violet-100': '#5b3de2',
    'extra-violet-50': '#a998f0',
    'extra-violet-10': '#ede9fb',
    'extra-navy-100': '#252cad',
    'extra-navy-50': '#8a8ed4',
    'extra-navy-10': '#e7e7f6',
    'extra-gold-100': '#ff9500',
    'extra-gold-50': '#ffc794',
    'extra-gold-10': '#faf2e8',
    'extra-yellow-100': '#f4b406',
    'extra-yellow-50': '#fcd979',
    'extra-yellow-10': '#feefc8',
    'extra-pink-100': '#e13463',
    'extra-pink-50': '#eb7a99',
    'extra-pink-10': '#fbe4eb',
    'extra-gray-100': '#cbcbdc',
    'extra-gray-50': '#e0e0eb',
    'extra-gray-10': '#f0f0f5',
    'extra-green-100': '#2aa5a5',
    'extra-green-50': '#54c6ba',
    'extra-green-10': '#d5e7e7',
    'extra-purple-100': '#a395cc',
    'extra-purple-50': '#c0b7dc',
    'extra-purple-10': '#eeebf4',
    'shades-black': '#000000',
    'shades-almost-black': '#1c1c1c',
    'shades-extra-dark': '#323135',
    'shades-dark': '#504e55',
    'shades-semi-dark': '#67666b',
    'shades-mid': '#87858e',
    'shades-semi-light': '#cac7d1',
    'shades-light': '#e7e7ef',
    'shades-extra-light': '#f0f0f5',
    'shades-off-white': '#f9f9fb',
    'shades-white': '#ffffff'
  },
  spacing: {
    '0': '0px',
    px: '1px',
    xs: rem(4),
    s: rem(8),
    m: rem(16),
    l: rem(24),
    xl: rem(32),
    xxl: rem(40)
  },
  radii: {
    none: '0px',
    xs: rem(4),
    s: rem(8),
    m: rem(16),
    l: rem(24),
    xl: rem(32),
    xxl: rem(40),
    pill: '9999px'
  },
  borderWidth: {
    none: '0px',
    hairline: '1px',
    sm: '2px',
    lg: '4px'
  },
  shadows: {
    none: 'none',
    sm: '0 4px 12px rgba(50, 49, 53, 0.08)',
    md: '0 8px 24px rgba(50, 49, 53, 0.12)',
    lg: '0 16px 40px rgba(50, 49, 53, 0.16)'
  },
  opacity: {
    '0': '0',
    '10': '0.1',
    '20': '0.2',
    '40': '0.4',
    '60': '0.6',
    '80': '0.8',
    '100': '1'
  },
  typography: {
    fontFamily: {
      sans: [
        '"Satoshi Variable"',
        '"Satoshi"',
        '"Inter"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'system-ui',
        'sans-serif'
      ],
      display: [
        '"Elza Narrow"',
        '"Elza"',
        '"Elza Text"',
        '"Satoshi Variable"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'system-ui',
        'sans-serif'
      ],
      mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'monospace']
    },
    fontSize: {
      'display-xl': rem(56),
      'heading-xl': rem(40),
      'heading-lg': rem(32),
      'heading-md': rem(24),
      'heading-sm': rem(20),
      'body-lg': rem(18),
      body: rem(16),
      'body-sm': rem(14),
      'label-lg': rem(16),
      label: rem(14),
      'label-sm': rem(12),
      caption: rem(12),
      'numeric-lg': rem(28),
      numeric: rem(24),
      'numeric-sm': rem(20)
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      black: 900
    },
    lineHeight: {
      compact: '1',
      snug: '1.1',
      normal: '1.4',
      relaxed: '1.6'
    },
    letterSpacing: {
      tight: '-0.01em',
      normal: '0em',
      wide: '0.02em'
    },
    textStyles: {
      'display-xl': {
        fontFamily:
          '"Elza Narrow", "Elza", "Satoshi Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(56),
        fontWeight: 900,
        lineHeight: '1.05',
        letterSpacing: '-0.01em',
        textTransform: 'uppercase'
      },
      'heading-xl': {
        fontFamily:
          '"Elza Narrow", "Elza", "Satoshi Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(40),
        fontWeight: 900,
        lineHeight: '1.1',
        letterSpacing: '-0.01em',
        textTransform: 'uppercase'
      },
      'heading-lg': {
        fontFamily:
          '"Elza Narrow", "Elza", "Satoshi Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(32),
        fontWeight: 900,
        lineHeight: '1.1',
        textTransform: 'uppercase'
      },
      'heading-md': {
        fontFamily:
          '"Elza Narrow", "Elza", "Satoshi Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(24),
        fontWeight: 900,
        lineHeight: '1.15',
        textTransform: 'uppercase'
      },
      'heading-sm': {
        fontFamily:
          '"Elza Narrow", "Elza", "Satoshi Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(20),
        fontWeight: 900,
        lineHeight: '1.15',
        textTransform: 'uppercase'
      },
      'body-lg': {
        fontFamily:
          '"Satoshi Variable", "Satoshi", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(18),
        fontWeight: 400,
        lineHeight: '1.6'
      },
      body: {
        fontFamily:
          '"Satoshi Variable", "Satoshi", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(16),
        fontWeight: 400,
        lineHeight: '1.6'
      },
      'body-sm': {
        fontFamily:
          '"Satoshi Variable", "Satoshi", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(14),
        fontWeight: 400,
        lineHeight: '1.5'
      },
      'label-lg': {
        fontFamily:
          '"Satoshi Variable", "Satoshi", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(16),
        fontWeight: 500,
        lineHeight: '1'
      },
      label: {
        fontFamily:
          '"Satoshi Variable", "Satoshi", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(14),
        fontWeight: 500,
        lineHeight: '1'
      },
      'label-sm': {
        fontFamily:
          '"Satoshi Variable", "Satoshi", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(12),
        fontWeight: 500,
        lineHeight: '1'
      },
      caption: {
        fontFamily:
          '"Satoshi Variable", "Satoshi", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(12),
        fontWeight: 500,
        lineHeight: '1.2',
        letterSpacing: '0.02em',
        textTransform: 'uppercase'
      },
      'numeric-lg': {
        fontFamily:
          '"IBMPlexSans", "Satoshi Variable", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(28),
        fontWeight: 700,
        lineHeight: '1'
      },
      numeric: {
        fontFamily:
          '"IBMPlexSans", "Satoshi Variable", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(24),
        fontWeight: 700,
        lineHeight: '1'
      },
      'numeric-sm': {
        fontFamily:
          '"IBMPlexSans", "Satoshi Variable", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(20),
        fontWeight: 700,
        lineHeight: '1'
      },
      button: {
        fontFamily:
          '"Satoshi Variable", "Satoshi", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: rem(14),
        fontWeight: 500,
        lineHeight: '1'
      }
    }
  },
  themes: {
    light: {
      background: '#f9f9fb',
      surface: '#ffffff',
      surfaceMuted: '#f0f0f5',
      border: '#cac7d1',
      borderStrong: '#87858e',
      textPrimary: '#1c1c1c',
      textSecondary: '#67666b',
      icon: '#67666b',
      fieldBackground: '#f9f9fb',
      fieldBorder: '#87858e',
      fieldBorderActive: '#4169e1',
      fieldPlaceholder: '#87858e'
    },
    dark: {
      background: '#1c1c1c',
      surface: '#232326',
      surfaceMuted: '#323135',
      border: '#504e55',
      borderStrong: '#67666b',
      textPrimary: '#f9f9fb',
      textSecondary: '#cac7d1',
      icon: '#87858e',
      fieldBackground: '#323135',
      fieldBorder: '#504e55',
      fieldBorderActive: '#cac7d1',
      fieldPlaceholder: '#87858e'
    }
  }
};

export default defaultTokens;


