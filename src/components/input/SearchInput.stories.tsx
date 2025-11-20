import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Icon } from '../icon';
import { SearchInput } from './SearchInput';
import type { SearchInputProps } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/Forms/Search Input',
  component: SearchInput,
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
    placeholder: 'Search'
  },
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'success', 'error']
    },
    size: {
      control: 'inline-radio',
      options: ['md', 'lg']
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {};

export const WithValue: Story = {
  render: (args: SearchInputProps) => {
    const [value, setValue] = useState('Bitcoin');
    return (
      <SearchInput
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onClear={() => setValue('')}
      />
    );
  },
  args: {
    helperText: 'Value filled (complete state)'
  }
};

export const Success: Story = {
  args: {
    status: 'success',
    value: 'Completed query'
  }
};

export const Error: Story = {
  args: {
    status: 'error',
    value: 'Invalid',
    helperText: 'No results found'
  }
};

export const WithCustomIcons: Story = {
  args: {
    startIcon: <Icon type="icon-filter-search" className="h-4 w-4" />,
    helperText: 'Using a different leading icon'
  }
};


