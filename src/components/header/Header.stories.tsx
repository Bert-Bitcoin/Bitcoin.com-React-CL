import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Button } from '../button';

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

export const CustomActionButton: Story = {
  name: 'Custom Action Button',
  args: {
    style: 'light',
    menuItems: [
      { label: 'Home', href: '/', active: true },
      { label: 'Products', href: '/products' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Learn', href: '/learn' }
    ],
    customActionButton: (
      <div className="flex items-center gap-xs">
        <Button variant="primary" size="md">
          Sign In
        </Button>
        <Button variant="secondary" size="md">
          Sign Up
        </Button>
      </div>
    )
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      description: {
        story: 'Replace the default action button with custom HTML/React components for more flexibility. This custom button will be used on desktop, tablet, and mobile menu.'
      }
    }
  }
};

export const CustomLogo: Story = {
  name: 'Custom Logo (SVG Data URI)',
  args: {
    style: 'light',
    menuItems: [
      { label: 'Home', href: '/', active: true },
      { label: 'Products', href: '/products' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    actionLabel: 'Get Started',
    customLogo: {
      light: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="167" height="35" viewBox="0 0 167 35"%3E%3Crect width="167" height="35" rx="4" fill="%234A90E2"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold"%3ECustom Logo Light%3C/text%3E%3C/svg%3E',
      dark: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="167" height="35" viewBox="0 0 167 35"%3E%3Crect width="167" height="35" rx="4" fill="%232C3E50"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold"%3ECustom Logo Dark%3C/text%3E%3C/svg%3E'
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      description: {
        story: 'Replace the default logo with custom logo images using SVG data URIs. This example shows inline SVG logos that will always work.'
      }
    }
  }
};

export const CustomLogoWithFiles: Story = {
  name: 'Custom Logo (Image Files)',
  args: {
    style: 'light',
    menuItems: [
      { label: 'Home', href: '/', active: true },
      { label: 'Products', href: '/products' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    actionLabel: 'Get Started',
    customLogo: {
      light: '/src/images/Logo-Light.svg',
      dark: '/src/images/Logo-Dark.svg'
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      description: {
        story: 'Example using actual logo image files from the project. In production, you would import these or use public URLs.'
      }
    }
  }
};

export const FullyCustomized: Story = {
  name: 'Fully Customized',
  args: {
    style: 'light',
    menuItems: [
      { label: 'Dashboard', href: '/dashboard', active: true },
      { label: 'Wallet', href: '/wallet' },
      { label: 'Exchange', href: '/exchange' },
      { label: 'Settings', href: '/settings' }
    ],
    customActionButton: (
      <div className="flex items-center gap-xs">
        <div className="w-[35px] h-[35px] rounded-full bg-primary-20 flex items-center justify-center">
          <span className="text-primary-100 font-bold text-[14px]">JD</span>
        </div>
      </div>
    ),
    customLogo: {
      light: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="167" height="35" viewBox="0 0 167 35"%3E%3Crect width="167" height="35" rx="4" fill="%2300B8D4"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold"%3EMyApp Light%3C/text%3E%3C/svg%3E',
      dark: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="167" height="35" viewBox="0 0 167 35"%3E%3Crect width="167" height="35" rx="4" fill="%231A1A1A"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold"%3EMyApp Dark%3C/text%3E%3C/svg%3E'
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      description: {
        story: 'Example combining both custom logo and custom action button for maximum flexibility.'
      }
    }
  }
};
