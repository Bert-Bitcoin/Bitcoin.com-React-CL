import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import type { AvatarBackgroundColor } from './Avatar.types';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Elements/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large', 'extra-large'],
      description: 'Size variant of the avatar'
    },
    type: {
      control: 'select',
      options: ['image', 'initials', 'placeholder'],
      description: 'Type of avatar display'
    },
    src: {
      control: 'text',
      description: 'Image source URL (required when type is "image")'
    },
    alt: {
      control: 'text',
      description: 'Alt text for the image'
    },
    initials: {
      control: 'text',
      description: 'Initials to display (required when type is "initials")'
    },
    backgroundColor: {
      control: 'select',
      options: [
        'primary-50',
        'secondary-50',
        'success-50',
        'alerts-50',
        'extra-cyan-50',
        'extra-violet-50',
        'extra-navy-50',
        'extra-gold-50',
        'extra-yellow-50',
        'extra-pink-50',
        'extra-green-50',
        'extra-purple-50'
      ],
      description: 'Background color for initials and placeholder types'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Default story - Placeholder
export const Placeholder: Story = {
  args: {
    size: 'default',
    type: 'placeholder',
    backgroundColor: 'primary-50'
  }
};

// Initials story
export const Initials: Story = {
  args: {
    size: 'default',
    type: 'initials',
    initials: 'JB',
    backgroundColor: 'primary-50'
  }
};

// Image story
export const Image: Story = {
  args: {
    size: 'default',
    type: 'image',
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'User avatar'
  }
};

// All sizes with placeholder
export const AllSizesPlaceholder: Story = {
  render: () => (
    <div className="flex items-center gap-m">
      <Avatar size="small" type="placeholder" backgroundColor="primary-50" />
      <Avatar size="default" type="placeholder" backgroundColor="primary-50" />
      <Avatar size="large" type="placeholder" backgroundColor="primary-50" />
      <Avatar size="extra-large" type="placeholder" backgroundColor="primary-50" />
    </div>
  )
};

// All sizes with initials
export const AllSizesInitials: Story = {
  render: () => (
    <div className="flex items-center gap-m">
      <Avatar size="small" type="initials" initials="JB" backgroundColor="secondary-50" />
      <Avatar size="default" type="initials" initials="JB" backgroundColor="secondary-50" />
      <Avatar size="large" type="initials" initials="JB" backgroundColor="secondary-50" />
      <Avatar size="extra-large" type="initials" initials="JB" backgroundColor="secondary-50" />
    </div>
  )
};

// All sizes with images
export const AllSizesImages: Story = {
  render: () => (
    <div className="flex items-center gap-m">
      <Avatar size="small" type="image" src="https://i.pravatar.cc/150?img=12" alt="User" />
      <Avatar size="default" type="image" src="https://i.pravatar.cc/150?img=12" alt="User" />
      <Avatar size="large" type="image" src="https://i.pravatar.cc/150?img=12" alt="User" />
      <Avatar size="extra-large" type="image" src="https://i.pravatar.cc/150?img=12" alt="User" />
    </div>
  )
};

// All background colors with initials
export const AllBackgroundColorsInitials: Story = {
  render: () => {
    const colors: AvatarBackgroundColor[] = [
      'primary-50',
      'secondary-50',
      'success-50',
      'alerts-50',
      'extra-cyan-50',
      'extra-violet-50',
      'extra-navy-50',
      'extra-gold-50',
      'extra-yellow-50',
      'extra-pink-50',
      'extra-green-50',
      'extra-purple-50'
    ];

    return (
      <div className="grid grid-cols-4 gap-m">
        {colors.map((color) => (
          <div key={color} className="flex flex-col items-center gap-s">
            <Avatar type="initials" initials="JB" backgroundColor={color} size="large" />
            <span className="text-label-sm text-shades-mid">{color}</span>
          </div>
        ))}
      </div>
    );
  }
};

// All background colors with placeholder
export const AllBackgroundColorsPlaceholder: Story = {
  render: () => {
    const colors: AvatarBackgroundColor[] = [
      'primary-50',
      'secondary-50',
      'success-50',
      'alerts-50',
      'extra-cyan-50',
      'extra-violet-50',
      'extra-navy-50',
      'extra-gold-50',
      'extra-yellow-50',
      'extra-pink-50',
      'extra-green-50',
      'extra-purple-50'
    ];

    return (
      <div className="grid grid-cols-4 gap-m">
        {colors.map((color) => (
          <div key={color} className="flex flex-col items-center gap-s">
            <Avatar type="placeholder" backgroundColor={color} size="large" />
            <span className="text-label-sm text-shades-mid">{color}</span>
          </div>
        ))}
      </div>
    );
  }
};

// Playground - Interactive
export const Playground: Story = {
  args: {
    size: 'default',
    type: 'initials',
    initials: 'AB',
    backgroundColor: 'primary-50'
  }
};

// Example usage in a list
export const InList: Story = {
  render: () => (
    <div className="flex flex-col gap-s max-w-md">
      <div className="flex items-center gap-m p-m bg-shades-off-white rounded-md">
        <Avatar type="image" src="https://i.pravatar.cc/150?img=5" size="large" />
        <div className="flex flex-col">
          <span className="text-label font-medium">John Smith</span>
          <span className="text-body-sm text-shades-mid">john@example.com</span>
        </div>
      </div>

      <div className="flex items-center gap-m p-m bg-shades-off-white rounded-md">
        <Avatar type="initials" initials="AB" backgroundColor="secondary-50" size="large" />
        <div className="flex flex-col">
          <span className="text-label font-medium">Alice Brown</span>
          <span className="text-body-sm text-shades-mid">alice@example.com</span>
        </div>
      </div>

      <div className="flex items-center gap-m p-m bg-shades-off-white rounded-md">
        <Avatar type="placeholder" backgroundColor="success-50" size="large" />
        <div className="flex flex-col">
          <span className="text-label font-medium">Guest User</span>
          <span className="text-body-sm text-shades-mid">guest@example.com</span>
        </div>
      </div>
    </div>
  )
};

// Example with different types in a row
export const MixedTypes: Story = {
  render: () => (
    <div className="flex items-center gap-m">
      <Avatar type="image" src="https://i.pravatar.cc/150?img=7" size="large" />
      <Avatar type="initials" initials="MJ" backgroundColor="extra-violet-50" size="large" />
      <Avatar type="initials" initials="SK" backgroundColor="extra-pink-50" size="large" />
      <Avatar type="placeholder" backgroundColor="extra-cyan-50" size="large" />
      <Avatar type="image" src="https://i.pravatar.cc/150?img=9" size="large" />
    </div>
  )
};

