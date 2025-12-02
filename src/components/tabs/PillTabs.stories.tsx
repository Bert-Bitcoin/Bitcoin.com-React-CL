import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { PillTabs } from './PillTabs';
import type { PillTab } from './PillTabs.types';

const meta: Meta<typeof PillTabs> = {
  title: 'Components/Tabs/PillTabs',
  component: PillTabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A pill-style tabs component for navigation and content switching. Features include active/inactive states, icons, disabled tabs, and full dark mode support.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    activeTab: {
      control: 'text',
      description: 'ID of the currently active tab'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether tabs should take full width'
    }
  }
};

export default meta;
type Story = StoryObj<typeof PillTabs>;

/**
 * Default tabs with multiple options
 */
export const Default: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('tab1');

    const tabs: PillTab[] = [
      { id: 'tab1', label: 'Active Tab' },
      { id: 'tab2', label: 'Tab' },
      { id: 'tab3', label: 'Tab' },
      { id: 'tab4', label: 'Tab' },
      { id: 'tab5', label: 'Tab' }
    ];

    return (
      <div className="w-full max-w-2xl">
        <PillTabs {...args} tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>
    );
  }
};

/**
 * Tabs with many options (scrollable)
 */
export const ManyTabs: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('tab1');

    const tabs: PillTab[] = [
      { id: 'tab1', label: 'Active Tab' },
      { id: 'tab2', label: 'Tab' },
      { id: 'tab3', label: 'Tab' },
      { id: 'tab4', label: 'Tab' },
      { id: 'tab5', label: 'Tab' },
      { id: 'tab6', label: 'Tab' },
      { id: 'tab7', label: 'Tab' },
      { id: 'tab8', label: 'Tab' },
      { id: 'tab9', label: 'Tab' },
      { id: 'tab10', label: 'Tab' }
    ];

    return (
      <div className="w-full max-w-2xl">
        <PillTabs {...args} tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>
    );
  }
};

/**
 * Tabs with custom labels
 */
export const CustomLabels: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs: PillTab[] = [
      { id: 'overview', label: 'Overview' },
      { id: 'transactions', label: 'Transactions' },
      { id: 'analytics', label: 'Analytics' },
      { id: 'settings', label: 'Settings' }
    ];

    return (
      <div className="w-full max-w-2xl">
        <PillTabs {...args} tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>
    );
  }
};

/**
 * Tabs with disabled state
 */
export const WithDisabledTabs: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('tab1');

    const tabs: PillTab[] = [
      { id: 'tab1', label: 'Active' },
      { id: 'tab2', label: 'Available' },
      { id: 'tab3', label: 'Disabled', disabled: true },
      { id: 'tab4', label: 'Available' },
      { id: 'tab5', label: 'Disabled', disabled: true }
    ];

    return (
      <div className="w-full max-w-2xl">
        <PillTabs {...args} tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>
    );
  }
};

/**
 * Full width tabs that stretch to fill container
 */
export const FullWidth: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('tab1');

    const tabs: PillTab[] = [
      { id: 'tab1', label: 'Overview' },
      { id: 'tab2', label: 'Details' },
      { id: 'tab3', label: 'Settings' }
    ];

    return (
      <div className="w-full max-w-2xl">
        <PillTabs {...args} tabs={tabs} activeTab={activeTab} onChange={setActiveTab} fullWidth />
      </div>
    );
  }
};

/**
 * Tabs with content panels
 */
export const WithContent: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('home');

    const tabs: PillTab[] = [
      { id: 'home', label: 'Home' },
      { id: 'profile', label: 'Profile' },
      { id: 'messages', label: 'Messages' },
      { id: 'settings', label: 'Settings' }
    ];

    const content: Record<string, string> = {
      home: 'Welcome to the home page! This is where you can find an overview of your dashboard.',
      profile: 'Your profile information is displayed here. You can edit your details and preferences.',
      messages: 'Check your messages and communicate with other users from this panel.',
      settings: 'Adjust your account settings, notifications, and preferences from here.'
    };

    return (
      <div className="w-full max-w-2xl flex flex-col gap-4">
        <PillTabs {...args} tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        <div className="p-6 bg-surface border border-border rounded-md">
          <p className="text-text-primary">{content[activeTab]}</p>
        </div>
      </div>
    );
  }
};

/**
 * Theme comparison showing light and dark modes
 */
export const ThemeComparison: Story = {
  render: () => {
    const [activeTab1, setActiveTab1] = useState('tab1');
    const [activeTab2, setActiveTab2] = useState('tab1');

    const tabs: PillTab[] = [
      { id: 'tab1', label: 'Active Tab' },
      { id: 'tab2', label: 'Tab' },
      { id: 'tab3', label: 'Tab' },
      { id: 'tab4', label: 'Tab' },
      { id: 'tab5', label: 'Tab' }
    ];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 w-full">
        {/* Light Theme */}
        <div className="flex flex-col gap-6">
          <h3 className="text-heading-sm font-bold text-text-primary">Light Theme</h3>
          <PillTabs tabs={tabs} activeTab={activeTab1} onChange={setActiveTab1} />
        </div>

        {/* Dark Theme */}
        <div data-theme="dark" className="flex flex-col gap-6 bg-background p-6 rounded-md">
          <h3 className="text-heading-sm font-bold text-text-primary">Dark Theme</h3>
          <PillTabs tabs={tabs} activeTab={activeTab2} onChange={setActiveTab2} />
        </div>
      </div>
    );
  }
};

/**
 * Two tabs (common pattern)
 */
export const TwoTabs: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('buy');

    const tabs: PillTab[] = [
      { id: 'buy', label: 'Buy' },
      { id: 'sell', label: 'Sell' }
    ];

    return (
      <div className="w-full max-w-md">
        <PillTabs {...args} tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>
    );
  }
};

/**
 * Three tabs (common pattern)
 */
export const ThreeTabs: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('all');

    const tabs: PillTab[] = [
      { id: 'all', label: 'All' },
      { id: 'active', label: 'Active' },
      { id: 'completed', label: 'Completed' }
    ];

    return (
      <div className="w-full max-w-md">
        <PillTabs {...args} tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>
    );
  }
};

