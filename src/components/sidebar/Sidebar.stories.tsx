import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Sidebar } from './Sidebar';
import type { SidebarMenuItem } from './Sidebar.types';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A responsive sidebar navigation component with three variants: desktop (full sidebar with labels), tablet (narrow sidebar with icons only), and mobile (bottom navigation bar).'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// Sample menu items
const sampleItems: SidebarMenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: 'icon-home',
    isActive: true
  },
  {
    id: 'wallet',
    label: 'Wallet',
    icon: 'icon-wallet-3'
  },
  {
    id: 'transactions',
    label: 'Transactions',
    icon: 'icon-transaction-minus',
    badgeCount: 10
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'icon-setting-2'
  },
  {
    id: 'help',
    label: 'Help',
    icon: 'icon-message-question'
  }
];

// Interactive wrapper component
const InteractiveSidebar = ({ variant }: { variant: 'desktop' | 'tablet' | 'mobile' }) => {
  const [items, setItems] = useState<SidebarMenuItem[]>(sampleItems);

  const handleItemClick = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        isActive: item.id === id
      }))
    );
  };

  const itemsWithHandlers = items.map((item) => ({
    ...item,
    onClick: () => handleItemClick(item.id)
  }));

  return <Sidebar variant={variant} items={itemsWithHandlers} />;
};

export const Desktop: Story = {
  args: {
    variant: 'desktop',
    items: sampleItems,
    showLogo: true
  },
  render: () => (
    <div style={{ height: '600px', width: '220px' }}>
      <InteractiveSidebar variant="desktop" />
    </div>
  )
};

export const Tablet: Story = {
  args: {
    variant: 'tablet',
    items: sampleItems,
    showLogo: true
  },
  render: () => (
    <div style={{ height: '600px', width: '88px' }}>
      <InteractiveSidebar variant="tablet" />
    </div>
  )
};

export const Mobile: Story = {
  args: {
    variant: 'mobile',
    items: sampleItems
  },
  render: () => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <InteractiveSidebar variant="mobile" />
    </div>
  )
};

export const DesktopWithoutLogo: Story = {
  args: {
    variant: 'desktop',
    items: sampleItems,
    showLogo: false
  },
  render: (args) => (
    <div style={{ height: '600px', width: '220px' }}>
      <Sidebar {...args} />
    </div>
  )
};

export const TabletWithoutLogo: Story = {
  args: {
    variant: 'tablet',
    items: sampleItems,
    showLogo: false
  },
  render: (args) => (
    <div style={{ height: '600px', width: '88px' }}>
      <Sidebar {...args} />
    </div>
  )
};

export const DesktopDarkMode: Story = {
  args: {
    variant: 'desktop',
    items: sampleItems,
    showLogo: true
  },
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: () => (
    <div style={{ height: '600px', width: '220px' }} className="dark">
      <InteractiveSidebar variant="desktop" />
    </div>
  )
};

export const TabletDarkMode: Story = {
  args: {
    variant: 'tablet',
    items: sampleItems,
    showLogo: true
  },
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: () => (
    <div style={{ height: '600px', width: '88px' }} className="dark">
      <InteractiveSidebar variant="tablet" />
    </div>
  )
};

export const MobileDarkMode: Story = {
  args: {
    variant: 'mobile',
    items: sampleItems
  },
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: () => (
    <div style={{ width: '100%', maxWidth: '600px' }} className="dark">
      <InteractiveSidebar variant="mobile" />
    </div>
  )
};

// All three variants side by side for comparison
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Desktop</h3>
        <div style={{ height: '600px', width: '220px', border: '1px solid #e7e7ef' }}>
          <InteractiveSidebar variant="desktop" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Tablet</h3>
        <div style={{ height: '600px', width: '88px', border: '1px solid #e7e7ef' }}>
          <InteractiveSidebar variant="tablet" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Mobile</h3>
        <div style={{ width: '100%', maxWidth: '600px', border: '1px solid #e7e7ef' }}>
          <InteractiveSidebar variant="mobile" />
        </div>
      </div>
    </div>
  )
};

