import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/Forms/Radio Button',
  component: RadioButton,
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

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return (
      <RadioButton
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

export const Selected: Story = {
  args: {
    checked: true
  }
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
    'aria-label': 'Radio button without label'
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

export const DisabledSelected: Story = {
  args: {
    disabled: true,
    checked: true
  }
};

export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');
    return (
      <div className="flex flex-col gap-m">
        <RadioButton
          label="Option 1"
          name="demo"
          value="option1"
          checked={selected === 'option1'}
          onCheckedChange={() => setSelected('option1')}
        />
        <RadioButton
          label="Option 2"
          name="demo"
          value="option2"
          checked={selected === 'option2'}
          onCheckedChange={() => setSelected('option2')}
        />
        <RadioButton
          label="Option 3"
          name="demo"
          value="option3"
          checked={selected === 'option3'}
          onCheckedChange={() => setSelected('option3')}
        />
      </div>
    );
  }
};


