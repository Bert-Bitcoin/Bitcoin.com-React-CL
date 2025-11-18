import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Option } from './Option';

const meta: Meta<typeof Option> = {
  title: 'Components/Forms/Option',
  component: Option,
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
    description: 'Description',
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

type Story = StoryObj<typeof Option>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return (
      <div className="w-[200px]">
        <Option
          {...args}
          checked={checked}
          onCheckedChange={(value) => {
            setChecked(value);
            args.onCheckedChange?.(value);
          }}
        />
      </div>
    );
  }
};

export const Selected: Story = {
  args: {
    checked: true
  },
  render: (args) => (
    <div className="w-[200px]">
      <Option {...args} />
    </div>
  )
};

export const WithoutDescription: Story = {
  args: {
    description: undefined
  },
  render: (args) => (
    <div className="w-[200px]">
      <Option {...args} />
    </div>
  )
};

export const Large: Story = {
  args: {
    size: 'lg',
    checked: true
  },
  render: (args) => (
    <div className="w-[200px]">
      <Option {...args} />
    </div>
  )
};

export const Disabled: Story = {
  args: {
    disabled: true,
    checked: false
  },
  render: (args) => (
    <div className="w-[200px]">
      <Option {...args} />
    </div>
  )
};

export const DisabledSelected: Story = {
  args: {
    disabled: true,
    checked: true
  },
  render: (args) => (
    <div className="w-[200px]">
      <Option {...args} />
    </div>
  )
};

export const OptionGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');
    return (
      <div className="flex flex-col gap-m w-[200px]">
        <Option
          label="Basic Plan"
          description="Perfect for individuals"
          name="plan"
          value="option1"
          checked={selected === 'option1'}
          onCheckedChange={() => setSelected('option1')}
        />
        <Option
          label="Pro Plan"
          description="Best for teams"
          name="plan"
          value="option2"
          checked={selected === 'option2'}
          onCheckedChange={() => setSelected('option2')}
        />
        <Option
          label="Enterprise"
          description="For large organizations"
          name="plan"
          value="option3"
          checked={selected === 'option3'}
          onCheckedChange={() => setSelected('option3')}
        />
      </div>
    );
  }
};


