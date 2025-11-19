import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Assets/Logos/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The full Bitcoin.com logo component with automatic theme switching. Includes both light (black text) and dark (white text) variants. Maintains aspect ratio across all sizes.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the logo'
    },
    theme: {
      control: 'select',
      options: ['auto', 'light', 'dark'],
      description: 'Theme mode - auto follows current theme, light/dark forces specific variant'
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for screen readers'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Logo>;

/**
 * Default logo with automatic theme switching
 */
export const Default: Story = {
  args: {
    size: 'md',
    theme: 'auto'
  }
};

/**
 * All available sizes displayed together
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-l">
      <div className="flex flex-col gap-xs">
        <Logo size="xs" />
        <span className="text-label-xs text-text-secondary">XS (16px height)</span>
      </div>
      <div className="flex flex-col gap-xs">
        <Logo size="sm" />
        <span className="text-label-xs text-text-secondary">SM (24px height)</span>
      </div>
      <div className="flex flex-col gap-xs">
        <Logo size="md" />
        <span className="text-label-xs text-text-secondary">MD (32px height)</span>
      </div>
      <div className="flex flex-col gap-xs">
        <Logo size="lg" />
        <span className="text-label-xs text-text-secondary">LG (48px height)</span>
      </div>
      <div className="flex flex-col gap-xs">
        <Logo size="xl" />
        <span className="text-label-xs text-text-secondary">XL (64px height)</span>
      </div>
      <div className="flex flex-col gap-xs">
        <Logo size="2xl" />
        <span className="text-label-xs text-text-secondary">2XL (80px height)</span>
      </div>
    </div>
  )
};

/**
 * Extra small size (16px height)
 */
export const ExtraSmall: Story = {
  args: {
    size: 'xs'
  }
};

/**
 * Small size (24px height)
 */
export const Small: Story = {
  args: {
    size: 'sm'
  }
};

/**
 * Medium size (32px height)
 */
export const Medium: Story = {
  args: {
    size: 'md'
  }
};

/**
 * Large size (48px height)
 */
export const Large: Story = {
  args: {
    size: 'lg'
  }
};

/**
 * Extra large size (64px height)
 */
export const ExtraLarge: Story = {
  args: {
    size: 'xl'
  }
};

/**
 * 2XL size (80px height)
 */
export const TwoXL: Story = {
  args: {
    size: '2xl'
  }
};

/**
 * Auto theme - follows the current light/dark mode
 */
export const AutoTheme: Story = {
  render: () => (
    <div className="flex flex-col gap-l w-full">
      <div className="p-l bg-surface border border-border rounded-m">
        <Logo size="lg" theme="auto" />
        <p className="text-body-sm text-text-secondary mt-m">
          This logo automatically switches between light and dark variants based on the current
          theme
        </p>
      </div>
    </div>
  )
};

/**
 * Always light theme (black text)
 */
export const LightTheme: Story = {
  args: {
    size: 'lg',
    theme: 'light'
  }
};

/**
 * Always dark theme (white text)
 */
export const DarkTheme: Story = {
  args: {
    size: 'lg',
    theme: 'dark'
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

/**
 * Theme comparison showing all three modes
 */
export const ThemeComparison: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8 w-full">
      {/* Auto Theme - Light Background */}
      <div className="flex flex-col gap-m p-l bg-surface border border-border rounded-m">
        <h3 className="text-heading-sm font-bold text-text-primary">Auto Theme (Light Mode)</h3>
        <Logo size="lg" theme="auto" />
        <p className="text-body-sm text-text-secondary">Automatically adapts to light mode</p>
      </div>

      {/* Auto Theme - Dark Background */}
      <div data-theme="dark" className="flex flex-col gap-m p-l bg-surface border border-border rounded-m">
        <h3 className="text-heading-sm font-bold text-text-primary">Auto Theme (Dark Mode)</h3>
        <Logo size="lg" theme="auto" />
        <p className="text-body-sm text-text-secondary">Automatically adapts to dark mode</p>
      </div>

      {/* Forced Light Theme */}
      <div className="flex flex-col gap-m p-l bg-surface border border-border rounded-m">
        <h3 className="text-heading-sm font-bold text-text-primary">
          Forced Light (Black Text)
        </h3>
        <Logo size="lg" theme="light" />
        <p className="text-body-sm text-text-secondary">
          Always shows black text regardless of theme
        </p>
      </div>

      {/* Forced Dark Theme */}
      <div
        data-theme="dark"
        className="flex flex-col gap-m p-l bg-shades-almost-black border border-shades-dark rounded-m"
      >
        <h3 className="text-heading-sm font-bold text-shades-off-white">
          Forced Dark (White Text)
        </h3>
        <Logo size="lg" theme="dark" />
        <p className="text-body-sm text-shades-mid">
          Always shows white text regardless of theme
        </p>
      </div>
    </div>
  )
};

/**
 * Logo in different contexts
 */
export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-l w-full max-w-3xl">
      {/* Navigation Header */}
      <div className="flex items-center justify-between p-m bg-surface border border-border rounded-m">
        <Logo size="sm" />
        <nav className="flex gap-m">
          <button
            type="button"
            className="text-label-md text-text-primary hover:text-primary-100"
          >
            Buy
          </button>
          <button
            type="button"
            className="text-label-md text-text-primary hover:text-primary-100"
          >
            Sell
          </button>
          <button
            type="button"
            className="text-label-md text-text-primary hover:text-primary-100"
          >
            Wallet
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center gap-m p-xl bg-surface border border-border rounded-m text-center">
        <Logo size="xl" />
        <div>
          <h1 className="text-heading-xl font-bold text-text-primary mb-xs">
            Welcome to Bitcoin.com
          </h1>
          <p className="text-body-lg text-text-secondary">
            Your trusted platform for buying, selling, and managing Bitcoin
          </p>
        </div>
        <button
          type="button"
          className="px-l py-m bg-primary-100 text-white rounded-m hover:bg-primary-80 transition-colors"
        >
          Get Started
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-m bg-surface border border-border rounded-m">
        <Logo size="xs" />
        <p className="text-label-sm text-text-secondary">
          © 2024 Bitcoin.com. All rights reserved.
        </p>
      </div>
    </div>
  )
};

/**
 * Logo with custom background colors
 */
export const CustomBackgrounds: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-m">
      <div className="flex flex-col items-center gap-s p-l bg-primary-10 rounded-m">
        <Logo size="md" theme="light" />
        <span className="text-label-xs text-text-secondary">Light on Primary BG</span>
      </div>
      <div className="flex flex-col items-center gap-s p-l bg-secondary-10 rounded-m">
        <Logo size="md" theme="light" />
        <span className="text-label-xs text-text-secondary">Light on Secondary BG</span>
      </div>
      <div className="flex flex-col items-center gap-s p-l bg-shades-almost-black rounded-m">
        <Logo size="md" theme="dark" />
        <span className="text-label-xs text-shades-mid">Dark on Black BG</span>
      </div>
      <div className="flex flex-col items-center gap-s p-l bg-shades-extra-dark rounded-m">
        <Logo size="md" theme="dark" />
        <span className="text-label-xs text-shades-mid">Dark on Dark BG</span>
      </div>
    </div>
  )
};

/**
 * Responsive logo sizing
 */
export const Responsive: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <div className="p-l bg-surface border border-border rounded-m">
        <Logo size="sm" className="md:h-10 lg:h-12" />
        <p className="text-body-sm text-text-secondary mt-m">
          This logo uses responsive sizing: sm on mobile, md on tablet, lg on desktop
        </p>
      </div>
    </div>
  )
};

