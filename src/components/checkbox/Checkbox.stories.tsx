import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
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
    label: 'Label',
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

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return (
      <Checkbox
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
    checked: true
  }
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
    'aria-label': 'Checkbox without label'
  }
};

export const Large: Story = {
  args: {
    size: 'lg',
    checked: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    checked: false
  }
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true
  }
};


