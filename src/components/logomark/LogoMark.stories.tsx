import type { Meta, StoryObj } from '@storybook/react';

import { LogoMark } from './LogoMark';

const meta: Meta<typeof LogoMark> = {
  title: 'Assets/Logos/LogoMark',
  component: LogoMark,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The Bitcoin.com logo mark component. Maintains a 1:1 aspect ratio across all sizes and can be used throughout the application for branding purposes.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the logo mark'
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for screen readers'
    }
  }
};

export default meta;
type Story = StoryObj<typeof LogoMark>;

/**
 * Default logo mark at medium size
 */
export const Default: Story = {
  args: {
    size: 'md'
  }
};

/**
 * All available sizes displayed together
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-l">
      <div className="flex flex-col items-center gap-s">
        <LogoMark size="xs" />
        <span className="text-label-xs text-text-secondary">XS (16px)</span>
      </div>
      <div className="flex flex-col items-center gap-s">
        <LogoMark size="sm" />
        <span className="text-label-xs text-text-secondary">SM (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-s">
        <LogoMark size="md" />
        <span className="text-label-xs text-text-secondary">MD (32px)</span>
      </div>
      <div className="flex flex-col items-center gap-s">
        <LogoMark size="lg" />
        <span className="text-label-xs text-text-secondary">LG (48px)</span>
      </div>
      <div className="flex flex-col items-center gap-s">
        <LogoMark size="xl" />
        <span className="text-label-xs text-text-secondary">XL (64px)</span>
      </div>
      <div className="flex flex-col items-center gap-s">
        <LogoMark size="2xl" />
        <span className="text-label-xs text-text-secondary">2XL (96px)</span>
      </div>
    </div>
  )
};

/**
 * Extra small size (16x16)
 */
export const ExtraSmall: Story = {
  args: {
    size: 'xs'
  }
};

/**
 * Small size (24x24)
 */
export const Small: Story = {
  args: {
    size: 'sm'
  }
};

/**
 * Medium size (32x32)
 */
export const Medium: Story = {
  args: {
    size: 'md'
  }
};

/**
 * Large size (48x48)
 */
export const Large: Story = {
  args: {
    size: 'lg'
  }
};

/**
 * Extra large size (64x64)
 */
export const ExtraLarge: Story = {
  args: {
    size: 'xl'
  }
};

/**
 * 2XL size (96x96)
 */
export const TwoXL: Story = {
  args: {
    size: '2xl'
  }
};

/**
 * Logo mark with custom styling
 */
export const CustomStyling: Story = {
  render: () => (
    <div className="flex items-center gap-l">
      <LogoMark size="lg" className="opacity-80" />
      <LogoMark size="lg" className="opacity-60" />
      <LogoMark size="lg" className="opacity-40" />
      <LogoMark size="lg" className="opacity-20" />
    </div>
  )
};

/**
 * Logo mark in different contexts
 */
export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-l w-full max-w-2xl">
      {/* Header context */}
      <div className="flex items-center gap-m p-m bg-surface border border-border rounded-m">
        <LogoMark size="md" />
        <span className="text-heading-sm font-bold text-text-primary">Bitcoin.com</span>
      </div>

      {/* Card context */}
      <div className="p-l bg-surface border border-border rounded-m flex flex-col items-center gap-m">
        <LogoMark size="xl" />
        <div className="text-center">
          <h3 className="text-heading-md font-bold text-text-primary mb-xs">
            Welcome to Bitcoin.com
          </h3>
          <p className="text-body-md text-text-secondary">
            Your trusted platform for Bitcoin transactions
          </p>
        </div>
      </div>

      {/* Button context */}
      <button
        type="button"
        className="flex items-center gap-s px-m py-s bg-primary-100 text-white rounded-m hover:bg-primary-80 transition-colors"
      >
        <LogoMark size="sm" />
        <span className="text-label-md font-medium">Connect Wallet</span>
      </button>
    </div>
  )
};

/**
 * Theme comparison showing light and dark modes
 */
export const ThemeComparison: Story = {
  render: () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 w-full">
      {/* Light Theme */}
      <div className="flex flex-col gap-6">
        <h3 className="text-heading-sm font-bold text-text-primary">Light Theme</h3>
        <div className="flex items-center gap-m p-l bg-surface border border-border rounded-m">
          <LogoMark size="lg" />
          <div>
            <h4 className="text-heading-md font-bold text-text-primary">Bitcoin.com</h4>
            <p className="text-body-sm text-text-secondary">Logo Mark Component</p>
          </div>
        </div>
      </div>

      {/* Dark Theme */}
      <div data-theme="dark" className="flex flex-col gap-6 bg-background p-6 rounded-m">
        <h3 className="text-heading-sm font-bold text-text-primary">Dark Theme</h3>
        <div className="flex items-center gap-m p-l bg-surface border border-border rounded-m">
          <LogoMark size="lg" />
          <div>
            <h4 className="text-heading-md font-bold text-text-primary">Bitcoin.com</h4>
            <p className="text-body-sm text-text-secondary">Logo Mark Component</p>
          </div>
        </div>
      </div>
    </div>
  )
};

