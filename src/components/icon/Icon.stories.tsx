import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Icon, getAvailableIcons } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Assets/Icons',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A unified icon component that dynamically loads SVG icons from the design system. Supports multiple sizes and full theming with currentColor.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: getAvailableIcons(),
      description: 'The icon name/type to display'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the icon'
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for screen readers'
    },
    ariaHidden: {
      control: 'boolean',
      description: 'Whether the icon is decorative'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Icon>;

/**
 * Default icon at medium size
 */
export const Default: Story = {
  args: {
    type: 'icon-search',
    size: 'md'
  }
};

/**
 * All available sizes
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-l">
      <div className="flex flex-col items-center gap-s">
        <Icon type="icon-heart" size="xs" />
        <span className="text-label-xs text-text-secondary">XS (12px)</span>
      </div>
      <div className="flex flex-col items-center gap-s">
        <Icon type="icon-heart" size="sm" />
        <span className="text-label-xs text-text-secondary">SM (16px)</span>
      </div>
      <div className="flex flex-col items-center gap-s">
        <Icon type="icon-heart" size="md" />
        <span className="text-label-xs text-text-secondary">MD (20px)</span>
      </div>
      <div className="flex flex-col items-center gap-s">
        <Icon type="icon-heart" size="lg" />
        <span className="text-label-xs text-text-secondary">LG (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-s">
        <Icon type="icon-heart" size="xl" />
        <span className="text-label-xs text-text-secondary">XL (32px)</span>
      </div>
      <div className="flex flex-col items-center gap-s">
        <Icon type="icon-heart" size="2xl" />
        <span className="text-label-xs text-text-secondary">2XL (40px)</span>
      </div>
    </div>
  )
};

/**
 * Icons with custom colors
 */
export const CustomColors: Story = {
  render: () => (
    <div className="flex items-center gap-m">
      <Icon type="icon-heart" size="xl" className="text-primary-100" />
      <Icon type="icon-star-1" size="xl" className="text-secondary-100" />
      <Icon type="icon-like" size="xl" className="text-success-100" />
      <Icon type="icon-danger" size="xl" className="text-danger-100" />
      <Icon type="icon-info-circle" size="xl" className="text-info-100" />
    </div>
  )
};

/**
 * Theme support - icons adapt to light/dark mode
 */
export const ThemeSupport: Story = {
  render: () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 w-full">
      {/* Light Theme */}
      <div className="flex flex-col gap-6">
        <h3 className="text-heading-sm font-bold text-text-primary">Light Theme</h3>
        <div className="flex items-center gap-m p-l bg-surface border border-border rounded-md">
          <Icon type="icon-sun-1" size="xl" className="text-text-primary" />
          <Icon type="icon-search" size="xl" className="text-text-secondary" />
          <Icon type="icon-user" size="xl" className="text-icon" />
        </div>
      </div>

      {/* Dark Theme */}
      <div data-theme="dark" className="flex flex-col gap-6 bg-background p-6 rounded-md">
        <h3 className="text-heading-sm font-bold text-text-primary">Dark Theme</h3>
        <div className="flex items-center gap-m p-l bg-surface border border-border rounded-md">
          <Icon type="icon-moon" size="xl" className="text-text-primary" />
          <Icon type="icon-search" size="xl" className="text-text-secondary" />
          <Icon type="icon-user" size="xl" className="text-icon" />
        </div>
      </div>
    </div>
  )
};

/**
 * Common UI icons
 */
export const CommonIcons: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-m">
      {[
        'icon-search',
        'icon-close-circle',
        'icon-add',
        'icon-arrow-right',
        'icon-arrow-left',
        'icon-arrow-down',
        'icon-arrow-up',
        'icon-calendar',
        'icon-user',
        'icon-setting-2',
        'icon-notification',
        'icon-heart',
        'icon-star-1',
        'icon-eye',
        'icon-trash',
        'icon-edit'
      ].map(icon => (
        <div key={icon} className="flex flex-col items-center gap-s p-s">
          <Icon type={icon as any} size="lg" className="text-text-primary" />
          <span className="text-label-xs text-text-secondary text-center">
            {icon.replace('icon-', '')}
          </span>
        </div>
      ))}
    </div>
  )
};

/**
 * Interactive gallery to browse all available icons
 */
export const IconGallery: Story = {
  render: () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg'>('md');

    const allIcons = getAvailableIcons();
    const filteredIcons = allIcons.filter(icon =>
      icon.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="space-y-m w-full max-w-6xl">
        {/* Header */}
        <div className="space-y-s">
          <h1 className="text-heading-lg font-bold text-text-primary">Icon Gallery</h1>
          <p className="text-body text-text-secondary">
            {filteredIcons.length} of {allIcons.length} icons available
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-s">
          <input
            type="text"
            placeholder="Search icons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-s py-s border border-field-border rounded-sm bg-field-background text-text-primary placeholder:text-field-placeholder focus:outline-none focus:border-field-border-active"
          />
          <div className="flex gap-xs">
            <button
              onClick={() => setSelectedSize('sm')}
              className={`px-s py-s rounded-sm border transition-colors ${
                selectedSize === 'sm'
                  ? 'bg-primary-100 text-white border-primary-100'
                  : 'bg-field-background text-text-primary border-field-border hover:border-field-border-active'
              }`}
            >
              Small
            </button>
            <button
              onClick={() => setSelectedSize('md')}
              className={`px-s py-s rounded-sm border transition-colors ${
                selectedSize === 'md'
                  ? 'bg-primary-100 text-white border-primary-100'
                  : 'bg-field-background text-text-primary border-field-border hover:border-field-border-active'
              }`}
            >
              Medium
            </button>
            <button
              onClick={() => setSelectedSize('lg')}
              className={`px-s py-s rounded-sm border transition-colors ${
                selectedSize === 'lg'
                  ? 'bg-primary-100 text-white border-primary-100'
                  : 'bg-field-background text-text-primary border-field-border hover:border-field-border-active'
              }`}
            >
              Large
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredIcons.length > 0 ? (
          <div className="grid gap-s grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {filteredIcons.map(icon => (
              <div
                key={icon}
                className="flex flex-col items-center gap-xs p-s rounded-sm border border-border bg-surface hover:border-field-border-active transition-colors cursor-pointer"
                title={icon}
              >
                <Icon type={icon} size={selectedSize} className="text-text-primary" />
                <span className="text-label-xs text-text-secondary text-center truncate w-full">
                  {icon.replace('icon-', '')}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-xl">
            <p className="text-label text-text-secondary">
              No icons found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    );
  },
  parameters: {
    layout: 'padded'
  }
};

