import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import type { ButtonProps } from './Button.types';
import { Icon } from '../icon';

const iconOptions = {
  None: undefined,
  WalletAdd: <Icon type="icon-wallet-add" />
} as const;

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
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
    children: 'Label',
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
    leadingIcon: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: { type: 'radio' }
    },
    trailingIcon: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: { type: 'radio' }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

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

export const WithIcons: Story = {
  args: {
    variant: 'primary',
    leadingIcon: iconOptions.WalletAdd,
    trailingIcon: iconOptions.WalletAdd,
    children: 'Launch Sequence'
  }
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true
  }
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full width'
  },
  parameters: {
    layout: 'padded'
  }
};

export const Sizes: Story = {
  render: (args: ButtonProps) => (
    <div className="flex flex-col gap-s">
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
    </div>
  )
};

export const Playground: Story = {
  render: (args: ButtonProps) => <Button {...args} />
};


