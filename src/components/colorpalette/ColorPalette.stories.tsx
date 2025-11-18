import type { Meta, StoryObj } from '@storybook/react';

import { designTokens } from '../../tokens';

const { colors } = designTokens;

interface ColorSwatchProps {
  name: string;
  lightColor: string;
  darkColor?: string;
  showBoth?: boolean;
}

const ColorSwatch = ({ name, lightColor, darkColor, showBoth = true }: ColorSwatchProps) => {
  const formatColorName = (colorName: string) => {
    return colorName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="grid grid-cols-2 gap-4">
        {/* Light Mode */}
        <div className="flex flex-col gap-2">
          <div
            className="h-24 rounded-s border border-border flex items-center justify-center"
            style={{ backgroundColor: lightColor }}
          >
            <span
              className="text-xs font-medium px-2 py-1 rounded bg-white/90 backdrop-blur-sm"
              style={{
                color: lightColor
              }}
            >
              {lightColor.toUpperCase()}
            </span>
          </div>
          <div className="text-sm">
            <div className="font-medium text-text-primary">{formatColorName(name)}</div>
            <div className="text-xs text-text-secondary">Light Mode</div>
          </div>
        </div>

        {/* Dark Mode */}
        {showBoth && darkColor && (
          <div className="flex flex-col gap-2">
            <div
              className="h-24 rounded-s border border-border flex items-center justify-center"
              style={{ backgroundColor: darkColor }}
            >
              <span
                className="text-xs font-medium px-2 py-1 rounded bg-black/90 backdrop-blur-sm"
                style={{
                  color: darkColor
                }}
              >
                {darkColor.toUpperCase()}
              </span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-text-primary">{formatColorName(name)}</div>
              <div className="text-xs text-text-secondary">Dark Mode</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ColorPaletteShowcase = () => {
  const colorGroups = {
    main: [
      { name: 'primary-100', light: colors['primary-100'], dark: '#6387f2' },
      { name: 'primary-50', light: colors['primary-50'], dark: '#3657ba' },
      { name: 'primary-10', light: colors['primary-10'], dark: '#061037' }
    ],
    secondary: [
      { name: 'secondary-100', light: colors['secondary-100'], dark: '#ff9500' },
      { name: 'secondary-50', light: colors['secondary-50'], dark: '#cc7700' },
      { name: 'secondary-10', light: colors['secondary-10'], dark: '#663b00' }
    ],
    success: [
      { name: 'success-100', light: colors['success-100'], dark: '#2fb790' },
      { name: 'success-50', light: colors['success-50'], dark: '#248e70' },
      { name: 'success-10', light: colors['success-10'], dark: '#155140' }
    ],
    warning: [
      { name: 'warning-100', light: colors['warning-100'], dark: '#ff9500' },
      { name: 'warning-50', light: colors['warning-50'], dark: '#cc7700' },
      { name: 'warning-10', light: colors['warning-10'], dark: '#663b00' }
    ],
    alerts: [
      { name: 'alerts-100', light: colors['alerts-100'], dark: '#e84142' },
      { name: 'alerts-50', light: colors['alerts-50'], dark: '#bf3017' },
      { name: 'alerts-10', light: colors['alerts-10'], dark: '#451108' }
    ],
    extra: [
      { name: 'extra-cyan-100', light: colors['extra-cyan-100'], dark: '#4c9de5' },
      { name: 'extra-cyan-50', light: colors['extra-cyan-50'], dark: '#1f709d' },
      { name: 'extra-cyan-10', light: colors['extra-cyan-10'], dark: '#0f384f' },
      {
        name: 'extra-violet-100',
        light: colors['extra-violet-100'],
        dark: '#8868e8'
      },
      {
        name: 'extra-violet-50',
        light: colors['extra-violet-50'],
        dark: '#5636bf'
      },
      {
        name: 'extra-violet-10',
        light: colors['extra-violet-10'],
        dark: '#120b28'
      },
      { name: 'extra-navy-100', light: colors['extra-navy-100'], dark: '#5f66dd' },
      { name: 'extra-navy-50', light: colors['extra-navy-50'], dark: '#1d27c3' },
      { name: 'extra-navy-10', light: colors['extra-navy-10'], dark: '#090b2a' },
      { name: 'extra-gold-100', light: colors['extra-gold-100'], dark: '#ff9500' },
      { name: 'extra-gold-50', light: colors['extra-gold-50'], dark: '#cc7700' },
      { name: 'extra-gold-10', light: colors['extra-gold-10'], dark: '#663b00' },
      {
        name: 'extra-yellow-100',
        light: colors['extra-yellow-100'],
        dark: '#fac431'
      },
      {
        name: 'extra-yellow-50',
        light: colors['extra-yellow-50'],
        dark: '#f4b406'
      },
      {
        name: 'extra-yellow-10',
        light: colors['extra-yellow-10'],
        dark: '#906b04'
      },
      { name: 'extra-pink-100', light: colors['extra-pink-100'], dark: '#e5527a' },
      { name: 'extra-pink-50', light: colors['extra-pink-50'], dark: '#c31d4a' },
      { name: 'extra-pink-10', light: colors['extra-pink-10'], dark: '#590d22' },
      { name: 'extra-gray-100', light: colors['extra-gray-100'], dark: '#cbcbdc' },
      { name: 'extra-gray-50', light: colors['extra-gray-50'], dark: '#afafba' },
      { name: 'extra-gray-10', light: colors['extra-gray-10'], dark: '#7f7f8d' },
      {
        name: 'extra-green-100',
        light: colors['extra-green-100'],
        dark: '#2aa5a5'
      },
      { name: 'extra-green-50', light: colors['extra-green-50'], dark: '#218282' },
      { name: 'extra-green-10', light: colors['extra-green-10'], dark: '#134949' },
      {
        name: 'extra-purple-100',
        light: colors['extra-purple-100'],
        dark: '#a395cc'
      },
      {
        name: 'extra-purple-50',
        light: colors['extra-purple-50'],
        dark: '#63558d'
      },
      { name: 'extra-purple-10', light: colors['extra-purple-10'], dark: '#3f3758' }
    ],
    shades: [
      { name: 'shades-black', light: colors['shades-black'], dark: '#ffffff' },
      {
        name: 'shades-almost-black',
        light: colors['shades-almost-black'],
        dark: '#ededf3'
      },
      {
        name: 'shades-extra-dark',
        light: colors['shades-extra-dark'],
        dark: '#cbcbdc'
      },
      { name: 'shades-dark', light: colors['shades-dark'], dark: '#aaa6b5' },
      {
        name: 'shades-semi-dark',
        light: colors['shades-semi-dark'],
        dark: '#7d7b84'
      },
      { name: 'shades-mid', light: colors['shades-mid'], dark: '#605f63' },
      {
        name: 'shades-semi-light',
        light: colors['shades-semi-light'],
        dark: '#4b4950'
      },
      { name: 'shades-light', light: colors['shades-light'], dark: '#2f2e33' },
      {
        name: 'shades-extra-light',
        light: colors['shades-extra-light'],
        dark: '#242424'
      },
      {
        name: 'shades-off-white',
        light: colors['shades-off-white'],
        dark: '#1c1c1c'
      },
      { name: 'shades-white', light: colors['shades-white'], dark: '#000000' }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-heading-lg font-display text-text-primary">Design Tokens</h1>
        <p className="text-body text-text-secondary">
          Complete color palette showing light and dark mode variants
        </p>
      </div>

      {/* Main Colors */}
      <section className="space-y-6">
        <div className="border-b border-border pb-2">
          <h2 className="text-heading-md font-display text-text-primary">MAIN</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {colorGroups.main.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              lightColor={color.light}
              darkColor={color.dark}
              showBoth={true}
            />
          ))}
        </div>
      </section>

      {/* Secondary Colors */}
      <section className="space-y-6">
        <div className="border-b border-border pb-2">
          <h2 className="text-heading-md font-display text-text-primary">SECONDARY</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {colorGroups.secondary.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              lightColor={color.light}
              darkColor={color.dark}
              showBoth={true}
            />
          ))}
        </div>
      </section>

      {/* Success Colors */}
      <section className="space-y-6">
        <div className="border-b border-border pb-2">
          <h2 className="text-heading-md font-display text-text-primary">SUCCESS</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {colorGroups.success.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              lightColor={color.light}
              darkColor={color.dark}
              showBoth={true}
            />
          ))}
        </div>
      </section>

      {/* Warning Colors */}
      <section className="space-y-6">
        <div className="border-b border-border pb-2">
          <h2 className="text-heading-md font-display text-text-primary">WARNING</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {colorGroups.warning.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              lightColor={color.light}
              darkColor={color.dark}
              showBoth={true}
            />
          ))}
        </div>
      </section>

      {/* Alert Colors */}
      <section className="space-y-6">
        <div className="border-b border-border pb-2">
          <h2 className="text-heading-md font-display text-text-primary">ALERTS</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {colorGroups.alerts.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              lightColor={color.light}
              darkColor={color.dark}
              showBoth={true}
            />
          ))}
        </div>
      </section>

      {/* Extra Colors */}
      <section className="space-y-6">
        <div className="border-b border-border pb-2">
          <h2 className="text-heading-md font-display text-text-primary">EXTRA</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {colorGroups.extra.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              lightColor={color.light}
              darkColor={color.dark}
              showBoth={true}
            />
          ))}
        </div>
      </section>

      {/* Shades */}
      <section className="space-y-6">
        <div className="border-b border-border pb-2">
          <h2 className="text-heading-md font-display text-text-primary">SHADES</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {colorGroups.shades.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              lightColor={color.light}
              darkColor={color.dark}
              showBoth={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: 'Design System/Color Palette',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Canvas'
    }
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj;

export const AllColors: Story = {
  render: () => <ColorPaletteShowcase />
};

export const LightMode: Story = {
  render: () => <ColorPaletteShowcase />,
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
};


