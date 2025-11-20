import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../icon';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'Canvas',
      values: [
        { name: 'Canvas', value: '#f9f9fb' },
        { name: 'Dark', value: '#1c1c1c' }
      ]
    }
  },
  args: {
    icon: <Icon type="icon-about" />,
    'aria-label': 'About',
    variant: 'primary',
    size: 'md'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'default', 'text', 'link', 'strong']
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg']
    },
    icon: {
      control: false
    }
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
};

export const Default: Story = {
  args: {
    variant: 'default'
  }
};

export const Text: Story = {
  args: {
    variant: 'text'
  }
};

export const Link: Story = {
  args: {
    variant: 'link'
  }
};

export const Strong: Story = {
  args: {
    variant: 'strong'
  }
};

export const Small: Story = {
  args: {
    size: 'sm'
  }
};

export const Medium: Story = {
  args: {
    size: 'md'
  }
};

export const Large: Story = {
  args: {
    size: 'lg'
  }
};

export const Loading: Story = {
  args: {
    loading: true
  }
};

export const LoadingSecondary: Story = {
  args: {
    variant: 'secondary',
    loading: true
  }
};

export const LoadingDefault: Story = {
  args: {
    variant: 'default',
    loading: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const DisabledSecondary: Story = {
  args: {
    variant: 'secondary',
    disabled: true
  }
};

export const DisabledDefault: Story = {
  args: {
    variant: 'default',
    disabled: true
  }
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-s items-center">
      <IconButton icon={<Icon type="icon-about" />} aria-label="About" variant="primary" />
      <IconButton icon={<Icon type="icon-about" />} aria-label="About" variant="secondary" />
      <IconButton icon={<Icon type="icon-about" />} aria-label="About" variant="default" />
      <IconButton icon={<Icon type="icon-about" />} aria-label="About" variant="text" />
      <IconButton icon={<Icon type="icon-about" />} aria-label="About" variant="link" />
      <IconButton icon={<Icon type="icon-about" />} aria-label="About" variant="strong" />
    </div>
  )
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-s items-center">
      <IconButton icon={<Icon type="icon-about" />} aria-label="About" size="sm" />
      <IconButton icon={<Icon type="icon-about" />} aria-label="About" size="md" />
      <IconButton icon={<Icon type="icon-about" />} aria-label="About" size="lg" />
    </div>
  )
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-m">
      <div className="flex gap-s items-center">
        <IconButton icon={<Icon type="icon-about" />} aria-label="About" />
        <IconButton icon={<Icon type="icon-about" />} aria-label="About" loading />
        <IconButton icon={<Icon type="icon-about" />} aria-label="About" disabled />
      </div>
      <div className="flex gap-s items-center">
        <IconButton icon={<Icon type="icon-about" />} aria-label="About" variant="secondary" />
        <IconButton icon={<Icon type="icon-about" />} aria-label="About" variant="secondary" loading />
        <IconButton icon={<Icon type="icon-about" />} aria-label="About" variant="secondary" disabled />
      </div>
      <div className="flex gap-s items-center">
        <IconButton icon={<Icon type="icon-about" />} aria-label="About" variant="default" />
        <IconButton icon={<Icon type="icon-about" />} aria-label="About" variant="default" loading />
        <IconButton icon={<Icon type="icon-about" />} aria-label="About" variant="default" disabled />
      </div>
    </div>
  )
};

