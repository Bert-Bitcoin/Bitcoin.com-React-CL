import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';

import { WebAppLayout } from './WebAppLayout';
import type { SidebarMenuItem } from '../../components/sidebar/Sidebar.types';
import { CardWithSubComponents as Card } from '../../components/card/Card';
import { LineChart } from '../../components/linechart/LineChart';
import { Tabs } from '../../components/tabs/Tabs';
import { Table } from '../../components/table/Table';
import { Indicator } from '../../components/indicator/Indicator';
import { Icon } from '../../components/icon/Icon';
import { ModeToggle } from '../../components/toggle/ModeToggle';

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

/**
 * Comprehensive crypto wallet home dashboard example
 * Showcases real-world use of multiple components: charts, tabs, tables, cards, indicators
 */
export const CryptoWalletDashboard: Story = {
  args: {
    menuItems: [
      {
        id: 'home',
        label: 'Home',
        icon: 'icon-home',
        isActive: true
      },
      {
        id: 'portfolio',
        label: 'Portfolio',
        icon: 'icon-chart',
        isActive: false
      },
      {
        id: 'wallets',
        label: 'Wallets',
        icon: 'icon-wallet',
        isActive: false
      },
      {
        id: 'exchange',
        label: 'Exchange',
        icon: 'icon-trade',
        isActive: false
      },
      {
        id: 'rewards',
        label: 'Rewards',
        icon: 'icon-reward',
        isActive: false,
        badgeCount: 3
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: 'icon-setting-2',
        isActive: false
      }
    ],
    children: <CryptoWalletDashboardContent />
  }
};

// Crypto Wallet Dashboard Content Component
function CryptoWalletDashboardContent() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode class when state changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
  };

  // Chart data for different timeframes
  const chartData = {
    '24h': [
      { date: '00:00', value: 42150 },
      { date: '04:00', value: 42300 },
      { date: '08:00', value: 42050 },
      { date: '12:00', value: 42500 },
      { date: '16:00', value: 42800 },
      { date: '20:00', value: 42650 },
      { date: '23:59', value: 42890 }
    ],
    '7d': [
      { date: 'Mon', value: 40500 },
      { date: 'Tue', value: 41200 },
      { date: 'Wed', value: 40800 },
      { date: 'Thu', value: 42100 },
      { date: 'Fri', value: 41800 },
      { date: 'Sat', value: 42500 },
      { date: 'Sun', value: 42890 }
    ],
    '30d': [
      { date: 'Week 1', value: 38500 },
      { date: 'Week 2', value: 40200 },
      { date: 'Week 3', value: 41500 },
      { date: 'Week 4', value: 42890 }
    ],
    '1y': [
      { date: 'Jan', value: 35000 },
      { date: 'Feb', value: 38000 },
      { date: 'Mar', value: 42000 },
      { date: 'Apr', value: 40000 },
      { date: 'May', value: 43000 },
      { date: 'Jun', value: 41500 },
      { date: 'Jul', value: 44000 },
      { date: 'Aug', value: 42500 },
      { date: 'Sep', value: 41000 },
      { date: 'Oct', value: 42500 },
      { date: 'Nov', value: 42000 },
      { date: 'Dec', value: 42890 }
    ]
  };

  const timeframeTabs = [
    { id: '24h', label: '24H' },
    { id: '7d', label: '7D' },
    { id: '30d', label: '30D' },
    { id: '1y', label: '1Y' }
  ];

  // Transaction data
  const transactionData = [
    {
      type: 'Received',
      asset: 'Bitcoin',
      amount: '+0.0245 BTC',
      usd: '+$1,050.65',
      date: 'Dec 3, 2025',
      status: 'approved' as const,
      icon: 'icon-receive'
    },
    {
      type: 'Sent',
      asset: 'Ethereum',
      amount: '-1.5 ETH',
      usd: '-$3,250.00',
      date: 'Dec 2, 2025',
      status: 'approved' as const,
      icon: 'icon-send'
    },
    {
      type: 'Exchange',
      asset: 'BTC → ETH',
      amount: '0.015 BTC',
      usd: '$642.50',
      date: 'Dec 2, 2025',
      status: 'approved' as const,
      icon: 'icon-trade'
    },
    {
      type: 'Received',
      asset: 'USDT',
      amount: '+500 USDT',
      usd: '+$500.00',
      date: 'Dec 1, 2025',
      status: 'approved' as const,
      icon: 'icon-receive'
    },
    {
      type: 'Pending',
      asset: 'Bitcoin',
      amount: '+0.005 BTC',
      usd: '+$214.45',
      date: 'Dec 1, 2025',
      status: 'pending' as const,
      icon: 'icon-pending'
    }
  ];

  // News items
  const newsItems = [
    {
      title: 'Bitcoin Rewards Program Extended',
      description: 'Earn up to 5% back on all Bitcoin purchases through December.',
      date: '2 hours ago',
      tag: 'New'
    },
    {
      title: 'Security Update Available',
      description: 'Enhanced two-factor authentication now supports biometric login.',
      date: '1 day ago',
      tag: 'Featured'
    },
    {
      title: 'New Trading Pairs Added',
      description: 'Trade BTC/EUR and ETH/GBP with zero fees for the first 30 days.',
      date: '2 days ago',
      tag: 'New'
    }
  ];

  return (
    <div className="p-l space-y-l">
      {/* Header Section with Dark Mode Toggle */}
      <div className="flex items-start justify-between gap-m">
        <div>
          <h1 className="font-['Elza_Narrow'] text-heading-xl text-text-primary uppercase font-bold mb-xs">
            Welcome Back
          </h1>
          <p className="text-body-lg text-text-secondary">
            Here's your portfolio overview and recent activity
          </p>
        </div>
        
        {/* Dark Mode Toggle */}
        <ModeToggle
          checked={isDarkMode}
          onCheckedChange={toggleDarkMode}
        />
      </div>

      {/* Portfolio Balance Card */}
      <Card>
        <Card.Header>
          <div className="flex items-start justify-between w-full">
            <div className="space-y-xs">
              <p className="text-label text-text-secondary">Total Portfolio Value</p>
              <div className="flex items-baseline gap-s">
                <span className="font-['IBMPlexSans'] font-bold text-[40px] leading-none text-text-primary">
                  $42,890.45
                </span>
                <div className="flex items-center gap-xs">
                  <Icon type="icon-arrow-up-1" size="sm" className="text-success-100" />
                  <span className="font-['IBMPlexSans'] font-semibold text-body text-success-100">
                    +5.8%
                  </span>
                </div>
              </div>
              <p className="text-label-sm text-text-secondary">
                Last updated: {new Date().toLocaleTimeString()}
              </p>
            </div>
            <Indicator variant="approved" label="Verified" />
          </div>
        </Card.Header>
        
        {/* Chart Section with Tabs */}
        <Card.Content className="gap-m mt-m">
          <Tabs
            tabs={timeframeTabs}
            activeTab={selectedTimeframe}
            onChange={setSelectedTimeframe}
            align="left"
          />
          <LineChart
            data={chartData[selectedTimeframe as keyof typeof chartData]}
            variant="positive"
            height={240}
            showTooltip
            showXAxis
            showArea
            dataLabel="Value"
            tooltipFormatter={(value) => `$${value.toLocaleString()}`}
          />
        </Card.Content>
      </Card>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-m">
        <Card>
          <Card.Content className="gap-xs">
            <div className="flex items-center gap-s text-text-secondary">
              <Icon type="icon-wallet-3" size="md" />
              <span className="text-label">Total Assets</span>
            </div>
            <p className="font-['IBMPlexSans'] font-bold text-heading-lg text-text-primary uppercase">
              12
            </p>
            <p className="text-label-sm text-text-secondary">
              Across 5 blockchains
            </p>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content className="gap-xs">
            <div className="flex items-center gap-s text-text-secondary">
              <Icon type="icon-transaction-minus" size="md" />
              <span className="text-label">Transactions (30d)</span>
            </div>
            <p className="font-['IBMPlexSans'] font-bold text-heading-lg text-text-primary uppercase">
              127
            </p>
            <div className="flex items-center gap-xs">
              <Icon type="icon-arrow-up-1" size="xs" className="text-success-100" />
              <p className="text-label-sm text-success-100 font-['IBMPlexSans']">
                +12% from last month
              </p>
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content className="gap-xs">
            <div className="flex items-center gap-s text-text-secondary">
              <Icon type="icon-reward" size="md" />
              <span className="text-label">Rewards Earned</span>
            </div>
            <p className="font-['IBMPlexSans'] font-bold text-heading-lg text-text-primary uppercase">
              $284.50
            </p>
            <p className="text-label-sm text-text-secondary">
              This month
            </p>
          </Card.Content>
        </Card>
      </div>

      {/* Recent Transactions Table */}
      <Card>
        <Card.Header>
          <div className="flex items-center justify-between w-full gap-m">
            <h3 className="font-['Elza_Narrow'] text-heading-md text-text-primary uppercase font-bold">
              Recent Transactions
            </h3>
            <button className="text-primary-100 font-satoshi font-medium text-body hover:underline whitespace-nowrap flex-shrink-0">
              View All
            </button>
          </div>
        </Card.Header>
        <Card.Content className="gap-0 mt-m">
          <Table
            columns={[
              {
                id: 'type',
                label: 'Type',
                accessor: (row) => (
                  <div className="flex items-center gap-s">
                    <Icon type={row.icon} size="md" className="text-primary-100" />
                    <span>{row.type}</span>
                  </div>
                )
              },
              {
                id: 'asset',
                label: 'Asset',
                accessor: 'asset'
              },
              {
                id: 'amount',
                label: 'Amount',
                accessor: 'amount',
                type: 'numeric',
                align: 'right'
              },
              {
                id: 'usd',
                label: 'USD Value',
                accessor: 'usd',
                type: 'numeric',
                align: 'right'
              },
              {
                id: 'date',
                label: 'Date',
                accessor: 'date'
              },
              {
                id: 'status',
                label: 'Status',
                accessor: (row) => <Indicator variant={row.status} />,
                align: 'center'
              }
            ]}
            data={transactionData}
          />
        </Card.Content>
      </Card>

      {/* News & Updates */}
      <div>
        <h2 className="font-['Elza_Narrow'] text-heading-lg text-text-primary uppercase font-bold mb-m">
          News & Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-m">
          {newsItems.map((item, index) => (
            <Card key={index}>
              <Card.Header>
                <div className="flex items-start justify-between gap-s mb-xs">
                  <Card.Title className="flex-1">{item.title}</Card.Title>
                  <Indicator 
                    variant={item.tag === 'New' ? 'new' : 'featured'}
                    label={item.tag}
                  />
                </div>
                <Card.Description className="text-sm">
                  {item.description}
                </Card.Description>
              </Card.Header>
              <Card.Content className="gap-0 mt-s">
                <div className="flex items-center gap-xs text-text-secondary">
                  <Icon type="icon-clock" size="xs" />
                  <span className="text-label-sm">{item.date}</span>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

