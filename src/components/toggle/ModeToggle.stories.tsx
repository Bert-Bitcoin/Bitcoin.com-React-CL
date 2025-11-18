import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ModeToggle } from './ModeToggle';

const meta: Meta<typeof ModeToggle> = {
  title: 'Components/Toggles/Mode Toggle',
  component: ModeToggle,
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
    checked: false
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the toggle is in dark mode (checked) or light mode (unchecked)'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled'
    }
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.checked ?? false);
    return (
      <ModeToggle
        {...args}
        checked={value}
        onCheckedChange={(next) => {
          setValue(next);
          args.onCheckedChange?.(next);
        }}
      />
    );
  }
};

export const LightMode: Story = {
  args: {
    checked: false
  },
  parameters: {
    backgrounds: {
      default: 'Canvas'
    }
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};


