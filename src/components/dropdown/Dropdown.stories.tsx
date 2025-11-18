import type { Meta, StoryObj } from '@storybook/react';

import { SearchIcon } from '../icons';
import { Dropdown } from './Dropdown';

const sampleOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' }
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Forms/Dropdown',
  component: Dropdown,
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
    options: sampleOptions,
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

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[300px]">
      <Dropdown {...args} />
    </div>
  )
};

export const WithLabel: Story = {
  args: {
    label: 'Select an option'
  },
  render: (args) => (
    <div className="w-[300px]">
      <Dropdown {...args} />
    </div>
  )
};

export const WithHelperText: Story = {
  args: {
    label: 'Country',
    helperText: 'Select your country',
    options: [
      { label: 'United States', value: 'us' },
      { label: 'Canada', value: 'ca' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'Germany', value: 'de' }
    ]
  },
  render: (args) => (
    <div className="w-[300px]">
      <Dropdown {...args} />
    </div>
  )
};

export const WithLeadingIcon: Story = {
  args: {
    label: 'Search',
    leadingIcon: <SearchIcon className="size-4 text-icon" />,
    options: [
      { label: 'All Items', value: 'all' },
      { label: 'Documents', value: 'docs' },
      { label: 'Images', value: 'images' },
      { label: 'Videos', value: 'videos' }
    ]
  },
  render: (args) => (
    <div className="w-[300px]">
      <Dropdown {...args} />
    </div>
  )
};

export const Error: Story = {
  args: {
    label: 'Required field',
    error: true,
    helperText: 'Please select an option',
    defaultValue: ''
  },
  render: (args) => (
    <div className="w-[300px]">
      <Dropdown {...args} />
    </div>
  )
};

export const Complete: Story = {
  args: {
    label: 'Status',
    complete: true,
    helperText: 'Selection confirmed',
    defaultValue: '2'
  },
  render: (args) => (
    <div className="w-[300px]">
      <Dropdown {...args} />
    </div>
  )
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large dropdown'
  },
  render: (args) => (
    <div className="w-[300px]">
      <Dropdown {...args} />
    </div>
  )
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true
  },
  render: (args) => (
    <div className="w-[300px]">
      <Dropdown {...args} />
    </div>
  )
};


