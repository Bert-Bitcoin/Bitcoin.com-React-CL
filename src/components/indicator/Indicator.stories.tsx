import type { Meta, StoryObj } from '@storybook/react';

import { Indicator } from './Indicator';

const meta = {
  title: 'Components/Elements/Indicator',
  component: Indicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A status indicator component for displaying various states with icons and labels. Based on the Bitcoin.com design system.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant/state of the indicator',
      control: { type: 'select' },
      options: ['approved', 'pending', 'rejected', 'viewed', 'new', 'neutral', 'featured']
    },
    label: {
      description: 'Custom label text (defaults to variant name)',
      control: { type: 'text' }
    },
    icon: {
      description: 'Custom icon name (defaults to variant icon)',
      control: { type: 'text' }
    },
    className: {
      description: 'Optional CSS class name',
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Indicator>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Approved state indicator with checkmark icon
 */
export const Approved: Story = {
  args: {
    variant: 'approved'
  }
};

/**
 * Pending state indicator with pending/clock icon
 */
export const Pending: Story = {
  args: {
    variant: 'pending'
  }
};

/**
 * Rejected state indicator with close icon
 */
export const Rejected: Story = {
  args: {
    variant: 'rejected'
  }
};

/**
 * Viewed state indicator with eye icon
 */
export const Viewed: Story = {
  args: {
    variant: 'viewed'
  }
};

/**
 * New state indicator with star icon
 */
export const New: Story = {
  args: {
    variant: 'new'
  }
};

/**
 * Neutral/Incoming state indicator with send icon
 */
export const Neutral: Story = {
  args: {
    variant: 'neutral'
  }
};

/**
 * Featured state indicator with flash icon and bold styling
 */
export const Featured: Story = {
  args: {
    variant: 'featured'
  }
};

/**
 * Custom label text
 */
export const CustomLabel: Story = {
  args: {
    variant: 'approved',
    label: 'Completed'
  }
};

/**
 * Custom icon
 */
export const CustomIcon: Story = {
  args: {
    variant: 'approved',
    label: 'Verified',
    icon: 'icon-tick-circle'
  }
};

/**
 * All variants displayed together
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-m">
      <Indicator variant="approved" />
      <Indicator variant="pending" />
      <Indicator variant="rejected" />
      <Indicator variant="viewed" />
      <Indicator variant="new" />
      <Indicator variant="neutral" />
      <Indicator variant="featured" />
    </div>
  )
};

/**
 * Transaction status examples
 */
export const TransactionStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-m">
      <Indicator variant="approved" label="Completed" />
      <Indicator variant="pending" label="Pending" />
      <Indicator variant="rejected" label="Failed" />
      <Indicator variant="neutral" label="Sent" />
    </div>
  )
};

/**
 * Content status examples
 */
export const ContentStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-m">
      <Indicator variant="new" label="New" />
      <Indicator variant="viewed" label="Read" />
      <Indicator variant="featured" label="Featured" />
    </div>
  )
};

/**
 * Dark mode support - all variants adapt to dark theme
 * Text colors automatically adjust via CSS variables
 */
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-shades-black p-l rounded-m" data-theme="dark">
      <div className="flex flex-col gap-m">
        <Indicator variant="approved" />
        <Indicator variant="pending" />
        <Indicator variant="rejected" />
        <Indicator variant="viewed" />
        <Indicator variant="new" />
        <Indicator variant="neutral" />
        <Indicator variant="featured" />
      </div>
    </div>
  )
};

