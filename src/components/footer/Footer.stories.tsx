import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Navigation/Footer',
  component: Footer,
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
type Story = StoryObj<typeof Footer>;

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

export const CustomLinks: Story = {
  args: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Legal', href: '/legal' },
      { label: 'Contact', href: '/contact' }
    ]
  }
};

