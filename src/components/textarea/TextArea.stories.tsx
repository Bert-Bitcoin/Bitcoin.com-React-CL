import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/Forms/Text Area',
  component: TextArea,
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
    placeholder: 'Placeholder',
    size: 'md'
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

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[300px]">
      <TextArea {...args} />
    </div>
  )
};

export const WithLabel: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...'
  },
  render: (args) => (
    <div className="w-[300px]">
      <TextArea {...args} />
    </div>
  )
};

export const WithValue: Story = {
  args: {
    label: 'Bio',
    defaultValue: 'This is some text content that has been entered by the user.'
  },
  render: (args) => (
    <div className="w-[300px]">
      <TextArea {...args} />
    </div>
  )
};

export const WithHelperText: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    helperText: 'Maximum 500 characters'
  },
  render: (args) => (
    <div className="w-[300px]">
      <TextArea {...args} />
    </div>
  )
};

export const Error: Story = {
  args: {
    label: 'Comment',
    defaultValue: 'Invalid text',
    error: true,
    helperText: 'This field is required'
  },
  render: (args) => (
    <div className="w-[300px]">
      <TextArea {...args} />
    </div>
  )
};

export const Complete: Story = {
  args: {
    label: 'Feedback',
    defaultValue: 'Thank you for your feedback!',
    complete: true,
    helperText: 'Successfully submitted'
  },
  render: (args) => (
    <div className="w-[300px]">
      <TextArea {...args} />
    </div>
  )
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Message',
    placeholder: 'Enter your message...'
  },
  render: (args) => (
    <div className="w-[300px]">
      <TextArea {...args} />
    </div>
  )
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    placeholder: 'Cannot edit',
    disabled: true
  },
  render: (args) => (
    <div className="w-[300px]">
      <TextArea {...args} />
    </div>
  )
};


