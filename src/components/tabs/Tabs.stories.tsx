import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Tabs } from './Tabs';
import type { Tab } from './Tabs.types';

const meta = {
  title: 'Components/Tabs/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A versatile tabs component supporting icons, badges, and multiple alignment options. Automatically enables horizontal scrolling on small screens when tab content exceeds container width.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'select',
      options: ['left', 'center', 'stretch'],
      description: 'Alignment of tabs within the container'
    },
    activeTab: {
      control: 'text',
      description: 'ID of the currently active tab'
    },
    tabs: {
      control: 'object',
      description: 'Array of tab items'
    },
    onChange: {
      action: 'tab changed',
      description: 'Callback function when tab is clicked'
    }
  }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper component
const TabsWrapper = ({ tabs, align, initialTab }: { tabs: Tab[]; align?: 'left' | 'center' | 'stretch'; initialTab?: string }) => {
  const [activeTab, setActiveTab] = useState(initialTab || tabs[0].id);
  
  return (
    <div className="w-full max-w">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
        align={align}
        ariaLabel="Example tabs"
      />
      <div className="mt-m p-m bg-surface border border-shades-semi-light rounded-md">
        <p className="text-sm text-shades-dark">
          Active tab: <strong className="text-primary-100">{tabs.find(t => t.id === activeTab)?.label}</strong>
        </p>
      </div>
    </div>
  );
};

/**
 * Default tabs with left alignment
 */
export const Default: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { id: '1', label: 'Active Tab' },
        { id: '2', label: 'Tab' },
        { id: '3', label: 'Tab' },
        { id: '4', label: 'Tab' }
      ]}
      align="left"
    />
  )
};

/**
 * Tabs with icons
 */
export const WithIcons: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { id: 'home', label: 'Home', icon: 'icon-home' },
        { id: 'wallets', label: 'Wallets', icon: 'icon-wallet' },
        { id: 'rewards', label: 'Rewards', icon: 'icon-reward' },
        { id: 'earn', label: 'Earn', icon: 'icon-earn' }
      ]}
      align="left"
    />
  )
};

/**
 * Tabs with badge counts
 */
export const WithBadges: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { id: 'incoming', label: 'Incoming', badge: 10 },
        { id: 'scheduled', label: 'Scheduled', badge: 10 },
        { id: 'progress', label: 'In Progress' },
        { id: 'done', label: 'Done', badge: 10 }
      ]}
      align="left"
    />
  )
};

/**
 * Centered alignment
 */
export const CenteredAlignment: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { id: '1', label: 'Active Tab' },
        { id: '2', label: 'Tab' },
        { id: '3', label: 'Tab' },
        { id: '4', label: 'Tab' }
      ]}
      align="center"
    />
  )
};

/**
 * Centered with icons
 */
export const CenteredWithIcons: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { id: 'home', label: 'Home', icon: 'icon-home' },
        { id: 'wallets', label: 'Wallets', icon: 'icon-wallet' },
        { id: 'rewards', label: 'Rewards', icon: 'icon-reward' },
        { id: 'earn', label: 'Earn', icon: 'icon-earn' }
      ]}
      align="center"
    />
  )
};

/**
 * Centered with badges
 */
export const CenteredWithBadges: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { id: 'incoming', label: 'Incoming', badge: 10 },
        { id: 'scheduled', label: 'Scheduled', badge: 10 },
        { id: 'progress', label: 'In Progress' },
        { id: 'done', label: 'Done', badge: 10 }
      ]}
      align="center"
    />
  )
};

/**
 * Stretched alignment - tabs take full width evenly
 */
export const StretchedAlignment: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { id: '1', label: 'Active Tab' },
        { id: '2', label: 'Tab' },
        { id: '3', label: 'Tab' },
        { id: '4', label: 'Tab' }
      ]}
      align="stretch"
    />
  )
};

/**
 * Stretched with icons
 */
export const StretchedWithIcons: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { id: 'home', label: 'Home', icon: 'icon-home' },
        { id: 'wallets', label: 'Wallets', icon: 'icon-wallet' },
        { id: 'rewards', label: 'Rewards', icon: 'icon-reward' },
        { id: 'earn', label: 'Earn', icon: 'icon-earn' }
      ]}
      align="stretch"
    />
  )
};

/**
 * Stretched with badges
 */
export const StretchedWithBadges: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { id: 'incoming', label: 'Incoming', badge: 10 },
        { id: 'scheduled', label: 'Scheduled', badge: 10 },
        { id: 'progress', label: 'In Progress' },
        { id: 'done', label: 'Done', badge: 10 }
      ]}
      align="stretch"
    />
  )
};

/**
 * Many tabs demonstrating horizontal scroll on small screens
 */
export const HorizontalScroll: Story = {
  render: () => (
    <div className="w-full max-w-[400px]">
      <TabsWrapper
        tabs={[
          { id: '1', label: 'Dashboard', icon: 'icon-home' },
          { id: '2', label: 'Transactions', icon: 'icon-wallet' },
          { id: '3', label: 'Portfolio', icon: 'icon-reward' },
          { id: '4', label: 'Analytics', icon: 'icon-earn' },
          { id: '5', label: 'Settings' },
          { id: '6', label: 'Profile' },
          { id: '7', label: 'Notifications', badge: 5 }
        ]}
        align="left"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'When tabs overflow the container width, horizontal scrolling is automatically enabled. Try resizing your browser window to see the effect.'
      }
    }
  }
};

/**
 * With disabled tabs
 */
export const WithDisabledTabs: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { id: 'home', label: 'Home', icon: 'icon-home' },
        { id: 'wallets', label: 'Wallets', icon: 'icon-wallet', disabled: true },
        { id: 'rewards', label: 'Rewards', icon: 'icon-reward' },
        { id: 'earn', label: 'Earn', icon: 'icon-earn', disabled: true }
      ]}
      align="left"
    />
  )
};

/**
 * Dark mode example
 */
export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="p-l bg-shades-off-white min-h-[300px]">
      <TabsWrapper
        tabs={[
          { id: 'home', label: 'Home', icon: 'icon-home' },
          { id: 'wallets', label: 'Wallets', icon: 'icon-wallet' },
          { id: 'rewards', label: 'Rewards', icon: 'icon-reward', badge: 5 },
          { id: 'earn', label: 'Earn', icon: 'icon-earn' }
        ]}
        align="left"
      />
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

/**
 * Combined features - icons, badges, and stretch
 */
export const AllFeatures: Story = {
  render: () => (
    <TabsWrapper
      tabs={[
        { id: 'home', label: 'Home', icon: 'icon-home', badge: 2 },
        { id: 'wallets', label: 'Wallets', icon: 'icon-wallet' },
        { id: 'rewards', label: 'Rewards', icon: 'icon-reward', badge: 15 },
        { id: 'earn', label: 'Earn', icon: 'icon-earn', badge: 3 }
      ]}
      align="stretch"
    />
  )
};

