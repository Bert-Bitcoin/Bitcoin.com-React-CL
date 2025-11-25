import type { Meta, StoryObj } from '@storybook/react';

import { WebAppLayout } from './WebAppLayout';
import type { SidebarMenuItem } from '../../components/sidebar/Sidebar.types';
import { CardWithSubComponents as Card } from '../../components/card/Card';

const meta = {
  title: 'Layouts/Web Apps',
  component: WebAppLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A responsive web application layout component that provides a consistent structure for web apps.

## Features
- **Responsive Design**: Adapts to desktop, tablet, and mobile breakpoints
- **Desktop Layout**: Full sidebar with logo and labels (lg+ screens)
- **Tablet Layout**: Collapsed sidebar with icon-only navigation (md-lg screens)
- **Mobile Layout**: Fixed bottom tab bar for easy thumb access (<md screens)
- **Full Height**: Uses full viewport height for app-like experience
- **Scrollable Content**: Content area scrolls independently while navigation stays fixed
- **Footer Integration**: Includes footer on desktop and tablet (hidden on mobile)
- **Dark Mode**: Full theme support for light and dark modes

## Usage
Use this layout as the root component for your web application pages. Pass in navigation items,
page content as children, and optional footer configuration.
        `
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof WebAppLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample menu items for stories
const sampleMenuItems: SidebarMenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: 'icon-home',
    isActive: true
  },
  {
    id: 'wallet',
    label: 'Wallet',
    icon: 'icon-wallet-3',
    isActive: false
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: 'icon-notification',
    isActive: false,
    badgeCount: 10
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'icon-setting-2',
    isActive: false
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: 'icon-profile-circle',
    isActive: false
  }
];

// Sample content component
const SampleContent = ({ title = 'Page Content' }: { title?: string }) => (
  <div className="p-l space-y-m">
    <h1 className="font-['Elza_Narrow'] text-heading-xl text-text-primary uppercase font-bold">{title}</h1>
    <div className="space-y-s">
      <p className="text-body-lg text-text-secondary">
        This is the main content area. It scrolls independently while the navigation remains fixed.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-m mt-m">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i}>
            <Card.Header>
              <Card.Title>Card {i}</Card.Title>
              <Card.Description className='text-sm'>
                Sample content card demonstrating the layout's content area.
              </Card.Description>
            </Card.Header>
          </Card>
        ))}
      </div>
      {/* Add more content to demonstrate scrolling */}
      <div className="mt-xl space-y-m">
        <h2 className="font-['Elza_Narrow'] text-heading-lg text-text-primary uppercase font-bold">More Content</h2>
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i}>
            <Card.Header>
              <Card.Title>Section {i}</Card.Title>
              <Card.Description className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </Card.Description>
            </Card.Header>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

/**
 * Default layout with sample content and navigation
 */
export const Default: Story = {
  args: {
    menuItems: sampleMenuItems,
    children: <SampleContent />
  }
};

/**
 * Layout with custom footer links
 */
export const WithCustomFooter: Story = {
  args: {
    menuItems: sampleMenuItems,
    footerLinks: [
      { label: 'About', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Contact', href: '#' }
    ],
    copyrightText: '© 2025 Bitcoin.com. All rights reserved.',
    children: <SampleContent title="Custom Footer Example" />
  }
};

/**
 * Layout without logo in sidebar
 */
export const WithoutLogo: Story = {
  args: {
    menuItems: sampleMenuItems,
    showLogo: false,
    children: <SampleContent title="No Logo Example" />
  }
};

/**
 * Layout with minimal content
 */
export const MinimalContent: Story = {
  args: {
    menuItems: sampleMenuItems,
    children: (
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-m p-l">
          <h1 className="font-['Elza_Narrow'] text-heading-xl text-text-primary uppercase font-bold">
            Welcome
          </h1>
          <p className="text-body-lg text-text-secondary">
            This page has minimal content to show the layout structure.
          </p>
        </div>
      </div>
    )
  }
};

/**
 * Layout with scrollable content
 */
export const ScrollableContent: Story = {
  args: {
    menuItems: sampleMenuItems,
    children: (
      <div className="p-l space-y-m">
        <h1 className="font-['Elza_Narrow'] text-heading-xl text-text-primary uppercase font-bold">
          Scrollable Content
        </h1>
        <p className="text-body-lg text-text-secondary">
          Scroll down to see how the navigation remains fixed while content scrolls.
        </p>
        <div className="space-y-m">
          {Array.from({ length: 20 }, (_, i) => (
                <Card key={i}>
                    <Card.Header>
                    <Card.Title>Content Block {i + 1}</Card.Title>
                    <Card.Description className='text-sm'>
                        This is content block number {i + 1}. The content area is scrollable while the
                        navigation stays fixed in place.
                    </Card.Description>
                    </Card.Header>
                </Card>
          ))}
        </div>
      </div>
    )
  }
};

/**
 * Layout for a dashboard page
 */
export const DashboardExample: Story = {
  args: {
    menuItems: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'icon-chart',
        isActive: true
      },
      {
        id: 'transactions',
        label: 'Transactions',
        icon: 'icon-transaction-minus',
        isActive: false
      },
      {
        id: 'wallet',
        label: 'Wallet',
        icon: 'icon-wallet-3',
        isActive: false
      },
      {
        id: 'exchange',
        label: 'Exchange',
        icon: 'icon-convert',
        isActive: false
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: 'icon-setting-2',
        isActive: false
      }
    ],
    children: (
      <div className="p-l space-y-l">
        <div>
          <h1 className="font-['Elza_Narrow'] text-heading-xl text-text-primary uppercase font-bold mb-s">Dashboard</h1>
          <p className="text-body-lg text-text-secondary">
            Welcome back! Here's your portfolio overview.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-m">
          {[
            { label: 'Total Balance', value: '$24,567.89', change: '+12.5%' },
            { label: 'Bitcoin', value: '0.5432 BTC', change: '+5.2%' },
            { label: 'Ethereum', value: '3.21 ETH', change: '-2.1%' },
            { label: 'Transactions', value: '127', change: '+8' }
          ].map((stat, i) => (
            <Card key={i}>
              <Card.Content className="gap-xs">
                <p className="text-label text-text-secondary">{stat.label}</p>
                <p className="text-heading-md text-text-primary uppercase font-bold">
                  {stat.value}
                </p>
                <p className="text-label-sm text-success-100">{stat.change}</p>
              </Card.Content>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <Card.Header>
            <Card.Title variant="heading-md">Recent Activity</Card.Title>
          </Card.Header>
          <Card.Content className="gap-s mt-m">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-s bg-surface-muted rounded-lg"
              >
                <div className="flex items-center gap-s">
                  <div className="w-10 h-10 bg-primary-10 rounded-full flex items-center justify-center">
                    <span className="text-primary-100 font-bold">₿</span>
                  </div>
                  <div>
                    <p className="text-body font-medium text-text-primary">
                      Bitcoin Transfer
                    </p>
                    <p className="text-label-sm text-text-secondary">
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <p className="text-body font-bold text-text-primary font-['IBMPlexSans']">
                  +0.0125 BTC
                </p>
              </div>
            ))}
          </Card.Content>
        </Card>
      </div>
    )
  }
};

/**
 * Dark mode layout example
 */
export const DarkMode: Story = {
  args: {
    menuItems: sampleMenuItems,
    children: <SampleContent title="Dark Mode Layout" />
  },
  parameters: {
    backgrounds: { default: 'Dark' }
  },
  decorators: [
    (Story) => (
      <div data-theme="dark">
        <Story />
      </div>
    )
  ]
};

