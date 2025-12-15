import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Sections/Website/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Canvas',
      values: [
        { name: 'Canvas', value: '#f9f9fb' },
        { name: 'Dark', value: '#1c1c1c' }
      ]
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad'
    }
  }
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

export const CustomMenu: Story = {
  args: {
    menuItems: [
      { label: 'Home', href: '/', active: true },
      { label: 'Products', href: '/products' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Learn', href: '/learn' }
    ],
    actionLabel: 'Sign Up'
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
};

