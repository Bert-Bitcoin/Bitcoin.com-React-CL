import type { Meta, StoryObj } from '@storybook/react';

import { DescriptionList } from './DescriptionList';
import type { DescriptionListItem } from './DescriptionList.types';

const meta = {
  title: 'Components/Content/Description List',
  component: DescriptionList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A component for displaying labeled data in key-value pairs. Automatically switches between large (side-by-side) and compact (stacked) layouts based on container width. Based on the Bitcoin.com design system.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of description list items to display',
      control: { type: 'object' }
    },
    variant: {
      description:
        "Layout variant - 'large' for side-by-side, 'compact' for stacked, 'responsive' for automatic",
      control: { type: 'select' },
      options: ['large', 'compact', 'responsive']
    },
    breakpoint: {
      description: 'Breakpoint width (in pixels) for responsive mode',
      control: { type: 'number' }
    },
    className: {
      description: 'Optional CSS class name',
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleItems: DescriptionListItem[] = [
  {
    id: '1',
    label: 'Full name',
    value: 'Margot Foster'
  },
  {
    id: '2',
    label: 'Application for',
    value: 'Backend Developer'
  },
  {
    id: '3',
    label: 'About',
    value:
      'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.'
  },
  {
    id: '4',
    label: 'Salary expectation',
    value: '82,896.56 USD',
    isNumeric: true
  }
];

const shortItems: DescriptionListItem[] = [
  {
    id: '1',
    label: 'Email',
    value: 'margot.foster@example.com'
  },
  {
    id: '2',
    label: 'Phone',
    value: '+1 (555) 123-4567'
  },
  {
    id: '3',
    label: 'Location',
    value: 'San Francisco, CA'
  }
];

const financialItems: DescriptionListItem[] = [
  {
    id: '1',
    label: 'Bitcoin Balance',
    value: '0.00125 BTC',
    isNumeric: true
  },
  {
    id: '2',
    label: 'USD Value',
    value: '$52,345.67 USD',
    isNumeric: true
  },
  {
    id: '3',
    label: 'Percent Change (24h)',
    value: '+5.23%',
    isNumeric: true
  },
  {
    id: '4',
    label: 'Transaction Fee',
    value: '0.00001 BTC',
    isNumeric: true
  }
];

/**
 * Default responsive layout - automatically switches between large and compact based on width
 */
export const Default: Story = {
  args: {
    items: sampleItems,
    variant: 'responsive',
    breakpoint: 500
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '653px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Large layout - side-by-side label and value
 */
export const Large: Story = {
  args: {
    items: sampleItems,
    variant: 'large'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '653px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Compact layout - stacked label and value
 */
export const Compact: Story = {
  args: {
    items: sampleItems,
    variant: 'compact'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Short content with fewer items
 */
export const ShortContent: Story = {
  args: {
    items: shortItems,
    variant: 'responsive'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '653px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Financial data with numeric values
 */
export const FinancialData: Story = {
  args: {
    items: financialItems,
    variant: 'responsive'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '653px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Responsive demo - resize browser to see layout change
 */
export const ResponsiveDemo: Story = {
  args: {
    items: sampleItems,
    variant: 'responsive',
    breakpoint: 500
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '800px', resize: 'horizontal', overflow: 'auto', border: '1px dashed #ccc', padding: '20px' }}>
        <div style={{ minWidth: '300px' }}>
          <Story />
        </div>
        <p style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
          Resize this container to see the layout change at 500px width
        </p>
      </div>
    )
  ]
};

/**
 * Custom breakpoint - switches at 400px
 */
export const CustomBreakpoint: Story = {
  args: {
    items: sampleItems,
    variant: 'responsive',
    breakpoint: 400
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '653px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Full width container
 */
export const FullWidth: Story = {
  args: {
    items: sampleItems,
    variant: 'large',
    className: 'max-w-none'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    )
  ]
};

