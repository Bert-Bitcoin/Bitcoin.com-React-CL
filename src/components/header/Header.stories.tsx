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
  argTypes: {
    style: {
      control: 'select',
      options: ['light', 'gray', 'dark'],
      description: 'Style variant of the header'
    },
    menuItems: {
      control: 'object',
      description: 'Menu items to display in the navigation'
    },
    actionLabel: {
      control: 'text',
      description: 'Label for the action button'
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LightStyle: Story = {
  args: {
    style: 'light'
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
};

export const GrayStyle: Story = {
  args: {
    style: 'gray'
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
};

export const DarkStyle: Story = {
  args: {
    style: 'dark'
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    backgrounds: {
      default: 'Dark'
    }
  }
};

export const Desktop: Story = {
  args: {
    style: 'light'
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
};

export const Tablet: Story = {
  args: {
    style: 'light'
  },
  parameters: {
    viewport: {
      defaultViewport: 'ipad'
    }
  }
};

export const Mobile: Story = {
  args: {
    style: 'light'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

export const CustomMenu: Story = {
  args: {
    style: 'light',
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

export const FourItems: Story = {
  name: '4 Items (md breakpoint)',
  args: {
    style: 'light',
    menuItems: [
      { label: 'Home', href: '/', active: true },
      { label: 'Products', href: '/products' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    actionLabel: 'Sign Up'
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      description: {
        story: 'With 1-4 menu items, the header switches to mobile layout at <768px (md breakpoint).'
      }
    }
  }
};

export const SixItems: Story = {
  name: '6 Items (lg breakpoint)',
  args: {
    style: 'light',
    menuItems: [
      { label: 'Home', href: '/', active: true },
      { label: 'Products', href: '/products' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' }
    ],
    actionLabel: 'Get Started'
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      description: {
        story: 'With 5-6 menu items, the header switches to mobile layout at <1024px (lg breakpoint) to provide more space.'
      }
    }
  }
};

export const EightItems: Story = {
  name: '8 Items (xl breakpoint)',
  args: {
    style: 'light',
    menuItems: [
      { label: 'Home', href: '/', active: true },
      { label: 'Products', href: '/products' },
      { label: 'Services', href: '/services' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Resources', href: '/resources' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' }
    ],
    actionLabel: 'Get Started'
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      description: {
        story: 'With 7+ menu items, the header switches to mobile layout at <1280px (xl breakpoint) to ensure all items fit comfortably.'
      }
    }
  }
};

