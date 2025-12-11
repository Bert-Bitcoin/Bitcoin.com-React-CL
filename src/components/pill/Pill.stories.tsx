import type { Meta, StoryObj } from '@storybook/react';

import { Pill } from './Pill';

const meta = {
  title: 'Components/Elements/Pill',
  component: Pill,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A compact pill component for displaying tags, labels, and status indicators. Supports multiple color variants and fill/outline styles.'
      }
    }
  },
  tags: ['autodocs'],
  args: {
    children: 'Pill Label',
    type: 'default',
    style: 'fill'
  },
  argTypes: {
    type: {
      description: 'The visual type/color variant of the pill',
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'green', 'purple', 'red']
    },
    style: {
      description: 'The style variant - filled or outlined',
      control: { type: 'radio' },
      options: ['fill', 'outline']
    },
    children: {
      description: 'The text content to display in the pill',
      control: { type: 'text' }
    },
    className: {
      description: 'Optional CSS class name',
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default filled pill with dark background
 */
export const Default: Story = {
  args: {
    type: 'default',
    style: 'fill'
  }
};

/**
 * Primary filled pill with brand blue color
 */
export const Primary: Story = {
  args: {
    type: 'primary',
    style: 'fill'
  }
};

/**
 * Secondary filled pill with orange color
 */
export const Secondary: Story = {
  args: {
    type: 'secondary',
    style: 'fill'
  }
};

/**
 * Green filled pill
 */
export const Green: Story = {
  args: {
    type: 'green',
    style: 'fill'
  }
};

/**
 * Purple filled pill
 */
export const Purple: Story = {
  args: {
    type: 'purple',
    style: 'fill'
  }
};

/**
 * Red filled pill for errors and alerts
 */
export const Red: Story = {
  args: {
    type: 'red',
    style: 'fill'
  }
};

/**
 * Default outlined pill
 */
export const DefaultOutline: Story = {
  args: {
    type: 'default',
    style: 'outline'
  }
};

/**
 * Primary outlined pill
 */
export const PrimaryOutline: Story = {
  args: {
    type: 'primary',
    style: 'outline'
  }
};

/**
 * Secondary outlined pill
 */
export const SecondaryOutline: Story = {
  args: {
    type: 'secondary',
    style: 'outline'
  }
};

/**
 * Green outlined pill
 */
export const GreenOutline: Story = {
  args: {
    type: 'green',
    style: 'outline'
  }
};

/**
 * Purple outlined pill
 */
export const PurpleOutline: Story = {
  args: {
    type: 'purple',
    style: 'outline'
  }
};

/**
 * Red outlined pill
 */
export const RedOutline: Story = {
  args: {
    type: 'red',
    style: 'outline'
  }
};

/**
 * All fill variants displayed together
 */
export const AllFillVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-m">
      <Pill type="default" style="fill">Default</Pill>
      <Pill type="primary" style="fill">Primary</Pill>
      <Pill type="secondary" style="fill">Secondary</Pill>
      <Pill type="green" style="fill">Green</Pill>
      <Pill type="purple" style="fill">Purple</Pill>
      <Pill type="red" style="fill">Red</Pill>
    </div>
  )
};

/**
 * All outline variants displayed together
 */
export const AllOutlineVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-m">
      <Pill type="default" style="outline">Default</Pill>
      <Pill type="primary" style="outline">Primary</Pill>
      <Pill type="secondary" style="outline">Secondary</Pill>
      <Pill type="green" style="outline">Green</Pill>
      <Pill type="purple" style="outline">Purple</Pill>
      <Pill type="red" style="outline">Red</Pill>
    </div>
  )
};

/**
 * All variants (fill and outline) displayed in a grid
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-l">
      <div>
        <h3 className="text-label-sm mb-m text-shades-semi-dark">Fill Style</h3>
        <div className="flex flex-wrap gap-m">
          <Pill type="default" style="fill">Default</Pill>
          <Pill type="primary" style="fill">Primary</Pill>
          <Pill type="secondary" style="fill">Secondary</Pill>
          <Pill type="green" style="fill">Green</Pill>
          <Pill type="purple" style="fill">Purple</Pill>
          <Pill type="red" style="fill">Red</Pill>
        </div>
      </div>
      <div>
        <h3 className="text-label-sm mb-m text-shades-semi-dark">Outline Style</h3>
        <div className="flex flex-wrap gap-m">
          <Pill type="default" style="outline">Default</Pill>
          <Pill type="primary" style="outline">Primary</Pill>
          <Pill type="secondary" style="outline">Secondary</Pill>
          <Pill type="green" style="outline">Green</Pill>
          <Pill type="purple" style="outline">Purple</Pill>
          <Pill type="red" style="outline">Red</Pill>
        </div>
      </div>
    </div>
  )
};

/**
 * Usage examples with realistic content
 */
export const UsageExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-l">
      <div className="flex flex-wrap gap-m items-center">
        <span className="text-body text-shades-extra-dark">Status:</span>
        <Pill type="green" style="fill">Active</Pill>
        <Pill type="red" style="fill">Inactive</Pill>
        <Pill type="purple" style="fill">Pending</Pill>
      </div>
      
      <div className="flex flex-wrap gap-m items-center">
        <span className="text-body text-shades-extra-dark">Categories:</span>
        <Pill type="primary" style="outline">Crypto</Pill>
        <Pill type="secondary" style="outline">Bitcoin</Pill>
        <Pill type="default" style="outline">Trading</Pill>
      </div>
      
      <div className="flex flex-wrap gap-m items-center">
        <span className="text-body text-shades-extra-dark">Tags:</span>
        <Pill type="default" style="fill">New</Pill>
        <Pill type="primary" style="fill">Featured</Pill>
        <Pill type="secondary" style="fill">Sale</Pill>
      </div>
    </div>
  )
};

/**
 * Dark mode support - pills adapt to dark theme
 */
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-shades-black p-l rounded-md" data-theme="dark">
      <div className="flex flex-col gap-l">
        <div>
          <h3 className="text-label-sm mb-m text-shades-semi-light">Fill Style</h3>
          <div className="flex flex-wrap gap-m">
            <Pill type="default" style="fill">Default</Pill>
            <Pill type="primary" style="fill">Primary</Pill>
            <Pill type="secondary" style="fill">Secondary</Pill>
            <Pill type="green" style="fill">Green</Pill>
            <Pill type="purple" style="fill">Purple</Pill>
            <Pill type="red" style="fill">Red</Pill>
          </div>
        </div>
        <div>
          <h3 className="text-label-sm mb-m text-shades-semi-light">Outline Style</h3>
          <div className="flex flex-wrap gap-m">
            <Pill type="default" style="outline">Default</Pill>
            <Pill type="primary" style="outline">Primary</Pill>
            <Pill type="secondary" style="outline">Secondary</Pill>
            <Pill type="green" style="outline">Green</Pill>
            <Pill type="purple" style="outline">Purple</Pill>
            <Pill type="red" style="outline">Red</Pill>
          </div>
        </div>
      </div>
    </div>
  )
};

