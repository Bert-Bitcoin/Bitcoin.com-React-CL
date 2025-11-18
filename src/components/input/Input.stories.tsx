import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useRef } from 'react';

import { AboutIcon, CircularCloseIcon } from '../icons';
import { Input } from './Input';
import type { InputProps } from './Input.types';

const meta: Meta<typeof Input> = {
  title: 'Components/Forms/Input',
  component: Input,
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
    label: 'Label'
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Focused: Story = {
  render: (args: InputProps) => {
    const ref = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
      ref.current?.focus();
    }, []);

    return <Input {...args} ref={ref} />;
  },
  args: {
    helperText: 'Focus state'
  }
};

export const WithIcons: Story = {
  args: {
    startIcon: <AboutIcon className="h-4 w-4" />,
    endIcon: <CircularCloseIcon className="h-4 w-4" />,
    helperText: 'Icons can frame the value'
  }
};

export const Error: Story = {
  args: {
    status: 'error',
    helperText: 'Something went wrong'
  }
};

export const Success: Story = {
  args: {
    status: 'success',
    helperText: 'Looks good!'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    helperText: 'Disabled state',
    value: 'Input value'
  }
};

export const Playground: Story = {
  render: (args: InputProps) => <Input {...args} />,
  args: {
    helperText: 'Try different combinations',
    startIcon: <AboutIcon className="h-4 w-4" />
  }
};


