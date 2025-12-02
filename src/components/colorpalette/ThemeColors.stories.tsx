import type { Meta, StoryObj } from '@storybook/react';

import { designTokens } from '../../tokens';

const { themes } = designTokens;

interface ThemeColorSwatchProps {
  name: string;
  description: string;
  lightValue: string;
  darkValue: string;
}

const ThemeColorSwatch = ({
  name,
  description,
  lightValue,
  darkValue
}: ThemeColorSwatchProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <h3 className="text-label-lg font-medium text-text-primary">{name}</h3>
        <p className="text-label-sm text-text-secondary">{description}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Light Mode */}
        <div className="space-y-2">
          <div className="text-xs font-medium text-text-secondary uppercase tracking-wide">
            Light Mode
          </div>
          <div
            className="h-20 rounded-sm border border-border flex items-end justify-start p-3"
            style={{ backgroundColor: lightValue }}
          >
            <span
              className="text-xs font-mono px-2 py-1 rounded bg-white/95 backdrop-blur-sm"
              style={{ color: lightValue }}
            >
              {lightValue}
            </span>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="space-y-2">
          <div className="text-xs font-medium text-text-secondary uppercase tracking-wide">
            Dark Mode
          </div>
          <div
            className="h-20 rounded-sm border border-border-strong flex items-end justify-start p-3"
            style={{ backgroundColor: darkValue }}
          >
            <span
              className="text-xs font-mono px-2 py-1 rounded bg-black/95 backdrop-blur-sm"
              style={{ color: darkValue }}
            >
              {darkValue}
            </span>
          </div>
        </div>
      </div>

      {/* Visual Indicator */}
      <div className="flex items-center gap-2 text-xs text-text-secondary">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
        <span>Automatically switches based on theme</span>
      </div>
    </div>
  );
};

const ThemeColorsShowcase = () => {
  const themeColors: ThemeColorSwatchProps[] = [
    {
      name: 'Background',
      description: 'Main application background color',
      lightValue: themes.light.background,
      darkValue: themes.dark.background
    },
    {
      name: 'Surface',
      description: 'Card and panel backgrounds',
      lightValue: themes.light.surface,
      darkValue: themes.dark.surface
    },
    {
      name: 'Surface Muted',
      description: 'Secondary surface backgrounds',
      lightValue: themes.light.surfaceMuted,
      darkValue: themes.dark.surfaceMuted
    },
    {
      name: 'Border',
      description: 'Default border color',
      lightValue: themes.light.border,
      darkValue: themes.dark.border
    },
    {
      name: 'Border Strong',
      description: 'Emphasized border color',
      lightValue: themes.light.borderStrong,
      darkValue: themes.dark.borderStrong
    },
    {
      name: 'Text Primary',
      description: 'Primary text and headings',
      lightValue: themes.light.textPrimary,
      darkValue: themes.dark.textPrimary
    },
    {
      name: 'Text Secondary',
      description: 'Secondary text and descriptions',
      lightValue: themes.light.textSecondary,
      darkValue: themes.dark.textSecondary
    },
    {
      name: 'Icon',
      description: 'Icon colors',
      lightValue: themes.light.icon,
      darkValue: themes.dark.icon
    },
    {
      name: 'Field Background',
      description: 'Input field backgrounds',
      lightValue: themes.light.fieldBackground,
      darkValue: themes.dark.fieldBackground
    },
    {
      name: 'Field Border',
      description: 'Input field borders',
      lightValue: themes.light.fieldBorder,
      darkValue: themes.dark.fieldBorder
    },
    {
      name: 'Field Border Active',
      description: 'Focused input field borders',
      lightValue: themes.light.fieldBorderActive,
      darkValue: themes.dark.fieldBorderActive
    },
    {
      name: 'Field Placeholder',
      description: 'Placeholder text in inputs',
      lightValue: themes.light.fieldPlaceholder,
      darkValue: themes.dark.fieldPlaceholder
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="space-y-4 pb-8 border-b border-border">
        <h1 className="text-heading-lg font-display text-text-primary">Theme Colors</h1>
        <p className="text-body text-text-secondary max-w-3xl">
          These colors automatically adapt between light and dark modes. They are defined as CSS
          variables that change based on the <code className="px-2 py-1 bg-surface-muted rounded text-xs">data-theme</code> attribute.
        </p>
        
        <div className="flex items-start gap-3 p-4 bg-primary-10 rounded-sm">
          <svg className="w-5 h-5 text-primary-100 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <div className="space-y-1">
            <p className="text-sm font-medium text-text-primary">Usage</p>
            <p className="text-sm text-text-secondary">
              Use these theme-aware colors for UI elements that should adapt to the user's theme
              preference. For static brand colors, use the color palette instead.
            </p>
          </div>
        </div>
      </div>

      {/* Theme Colors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {themeColors.map((color) => (
          <ThemeColorSwatch
            key={color.name}
            name={color.name}
            description={color.description}
            lightValue={color.lightValue}
            darkValue={color.darkValue}
          />
        ))}
      </div>

      {/* Usage Example */}
      <div className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-heading-md font-display text-text-primary">Usage Examples</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-label-lg font-medium text-text-primary">CSS/Tailwind</h3>
            <div className="bg-surface-muted rounded-sm p-4 font-mono text-sm">
              <div className="text-text-secondary">/* Using Tailwind */</div>
              <div className="text-text-primary">
                className=<span className="text-success-100">"bg-surface text-text-primary"</span>
              </div>
              <div className="mt-3 text-text-secondary">/* Using CSS Variables */</div>
              <div className="text-text-primary">
                background: <span className="text-success-100">rgb(var(--color-surface))</span>;
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-label-lg font-medium text-text-primary">JavaScript/TypeScript</h3>
            <div className="bg-surface-muted rounded-sm p-4 font-mono text-sm">
              <div className="text-text-secondary">// Import tokens</div>
              <div className="text-text-primary">
                <span className="text-extra-violet-100">import</span> {`{ designTokens }`}{' '}
                <span className="text-extra-violet-100">from</span>{' '}
                <span className="text-success-100">'./tokens'</span>;
              </div>
              <div className="mt-3 text-text-secondary">// Access theme colors</div>
              <div className="text-text-primary">
                designTokens.themes.light.background
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Design System/Theme Colors',
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

export const Overview: Story = {
  render: () => <ThemeColorsShowcase />
};

export const LightMode: Story = {
  render: () => <ThemeColorsShowcase />,
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
};


