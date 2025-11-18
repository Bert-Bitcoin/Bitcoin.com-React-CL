import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Toggle } from './Toggle';
import type { ToggleProps } from './Toggle.types';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggles/Toggle',
  component: Toggle,
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
    label: 'Notifications',
    size: 'md',
    checked: false
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['md', 'lg']
    }
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args: ToggleProps) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Toggle
        {...args}
        checked={checked}
        onCheckedChange={(value) => {
          setChecked(value);
          args.onCheckedChange?.(value);
        }}
      />
    );
  }
};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Enabled'
  }
};

export const WithDescription: Story = {
  args: {
    description: 'Receive product announcements via email.',
    label: 'Email updates'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    description: 'Unavailable while syncing data.',
    checked: false
  }
};

export const Large: Story = {
  args: {
    size: 'lg',
    checked: true,
    label: 'Automation'
  }
};



