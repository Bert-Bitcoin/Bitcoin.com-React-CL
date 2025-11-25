# Web App Layout

A responsive web application layout component that provides a consistent structure for building web apps. Built with React, TypeScript, and Tailwind CSS, following the Bitcoin.com design system.

## Features

- ✅ **Responsive Design** - Adapts seamlessly across desktop, tablet, and mobile
- ✅ **Desktop Layout** - Full sidebar (220px) with logo and navigation labels
- ✅ **Tablet Layout** - Collapsed sidebar (88px) with icon-only navigation
- ✅ **Mobile Layout** - Fixed bottom tab bar for thumb-friendly navigation
- ✅ **Full Height** - Uses full viewport height for app-like experience
- ✅ **Scrollable Content** - Content area scrolls while navigation stays fixed
- ✅ **Footer Integration** - Includes footer on desktop/tablet (hidden on mobile)
- ✅ **Dark Mode** - Full theme support with automatic color switching
- ✅ **TypeScript** - Fully typed with comprehensive type definitions
- ✅ **Accessible** - Built with semantic HTML and ARIA attributes

## Breakpoints

- **Mobile**: < 800px - Fixed bottom tab bar
- **Tablet**: 800px - 1024px - Collapsed icon-only sidebar
- **Desktop**: ≥ 1024px - Full sidebar with labels

## Usage

### Basic Layout

```tsx
import { WebAppLayout } from '@/layout/webapplayout';
import type { SidebarMenuItem } from '@/components/sidebar/Sidebar.types';

function MyApp() {
  const menuItems: SidebarMenuItem[] = [
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
      id: 'settings',
      label: 'Settings',
      icon: 'icon-setting-2',
      isActive: false
    }
  ];

  return (
    <WebAppLayout menuItems={menuItems}>
      {/* Your page content goes here */}
      <div className="p-l">
        <h1 className="text-heading-xl uppercase">Welcome</h1>
        <p className="text-body-lg">Your app content here</p>
      </div>
    </WebAppLayout>
  );
}
```

### With Custom Footer

```tsx
<WebAppLayout
  menuItems={menuItems}
  footerLinks={[
    { label: 'About', href: '/about' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Contact', href: '/contact' }
  ]}
  copyrightText="© 2025 Bitcoin.com. All rights reserved."
>
  {/* Your content */}
</WebAppLayout>
```

### With Navigation Handlers

```tsx
const menuItems: SidebarMenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: 'icon-home',
    isActive: activeTab === 'home',
    onClick: () => setActiveTab('home')
  },
  {
    id: 'wallet',
    label: 'Wallet',
    icon: 'icon-wallet-3',
    isActive: activeTab === 'wallet',
    onClick: () => setActiveTab('wallet')
  }
];

<WebAppLayout menuItems={menuItems}>
  {activeTab === 'home' && <HomePage />}
  {activeTab === 'wallet' && <WalletPage />}
</WebAppLayout>
```

### With Badge Notifications

```tsx
const menuItems: SidebarMenuItem[] = [
  {
    id: 'notifications',
    label: 'Notifications',
    icon: 'icon-notification',
    isActive: false,
    badgeCount: 10 // Shows number on desktop, dot on tablet/mobile
  }
];
```

### Without Logo

```tsx
<WebAppLayout menuItems={menuItems} showLogo={false}>
  {/* Your content */}
</WebAppLayout>
```

## Props

### WebAppLayoutProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Page content to render in the main content area |
| `menuItems` | `SidebarMenuItem[]` | - | Navigation items for sidebar/tab bar |
| `footerLinks` | `FooterLink[]` | `undefined` | Optional footer links |
| `copyrightText` | `string` | `"© {year} Bitcoin.com. All rights reserved."` | Copyright text for footer |
| `showLogo` | `boolean` | `true` | Whether to show logo in sidebar |
| `className` | `string` | `undefined` | Custom className for layout wrapper |
| `contentClassName` | `string` | `undefined` | Custom className for content area |

### SidebarMenuItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Unique identifier |
| `label` | `string` | - | Display label |
| `icon` | `IconName` | - | Icon from icon library |
| `isActive` | `boolean` | `false` | Whether item is active |
| `badgeCount` | `number` | `undefined` | Badge notification count |
| `onClick` | `() => void` | `undefined` | Click handler |

### FooterLink

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Link text |
| `href` | `string` | Link URL |
| `onClick` | `() => void` | Optional click handler |

## Layout Structure

### Desktop (≥ 1024px)
```
┌─────────────┬──────────────────────┐
│             │                      │
│   Sidebar   │    Content Area      │
│   (220px)   │    (scrollable)      │
│             │                      │
│             ├──────────────────────┤
│             │      Footer          │
└─────────────┴──────────────────────┘
```

### Tablet (800px - 1024px)
```
┌───┬──────────────────────────────┐
│   │                              │
│ S │    Content Area              │
│ i │    (scrollable)              │
│ d │                              │
│ e ├──────────────────────────────┤
│   │      Footer                  │
└───┴──────────────────────────────┘
```

### Mobile (< 800px)
```
┌──────────────────────────────────┐
│                                  │
│    Content Area (scrollable)     │
│    + Footer                      │
│                                  │
├──────────────────────────────────┤
│    Bottom Tab Bar (fixed)        │
└──────────────────────────────────┘
```

## Layout Behavior

### Content Scrolling
- The content area is independently scrollable
- Navigation (sidebar/tab bar) remains fixed
- Footer scrolls with content on mobile
- Footer is fixed at bottom on desktop/tablet

### Mobile Considerations
- Bottom tab bar is `position: fixed` to the bottom
- Content area has `padding-bottom: 56px` (14 * 4px) to prevent overlap
- Tab bar is always visible for easy thumb access
- Footer is embedded in scrollable content area

### Responsive Breakpoints
Uses Tailwind's configured breakpoints:
- `md`: 800px (tablet)
- `lg`: 1024px (desktop)

## Design System Integration

### Colors
Uses design system color tokens that adapt to theme:
- `bg-background` - Main background
- `bg-surface` - Content surface
- `bg-border` - Divider lines
- `text-text-primary` - Primary text
- `text-text-secondary` - Secondary text

### Spacing
Uses design system spacing tokens:
- `p-l` - Large padding (24px)
- `p-m` - Medium padding (16px)
- `gap-m` - Medium gap (16px)

### Typography
Uses design system typography classes:
- `text-heading-xl` - Extra large headings
- `text-heading-lg` - Large headings
- `text-body-lg` - Large body text
- `text-body` - Regular body text

## Examples

### Dashboard Page
```tsx
<WebAppLayout menuItems={dashboardMenuItems}>
  <div className="p-l space-y-l">
    <h1 className="text-heading-xl uppercase">Dashboard</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-m">
      {stats.map(stat => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </div>
    
    <RecentActivity />
  </div>
</WebAppLayout>
```

### Settings Page
```tsx
<WebAppLayout menuItems={settingsMenuItems}>
  <div className="p-l max-w-2xl">
    <h1 className="text-heading-xl uppercase mb-l">Settings</h1>
    
    <div className="space-y-m">
      <SettingsSection title="Account">
        {/* Settings controls */}
      </SettingsSection>
      
      <SettingsSection title="Preferences">
        {/* Settings controls */}
      </SettingsSection>
    </div>
  </div>
</WebAppLayout>
```

### With React Router
```tsx
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems: SidebarMenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: 'icon-home',
      isActive: location.pathname === '/',
      onClick: () => navigate('/')
    },
    {
      id: 'wallet',
      label: 'Wallet',
      icon: 'icon-wallet-3',
      isActive: location.pathname === '/wallet',
      onClick: () => navigate('/wallet')
    }
  ];
  
  return (
    <WebAppLayout menuItems={menuItems}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
    </WebAppLayout>
  );
}
```

## Best Practices

### Content Area
- Use appropriate padding (`p-l` or `p-m`) for content
- Use spacing utilities (`space-y-l`, `gap-m`) for consistent spacing
- Consider max-width for reading content (`max-w-2xl`, `max-w-4xl`)

### Navigation
- Always mark one item as `isActive`
- Use meaningful icon names that match your icon library
- Keep labels short and descriptive (1-2 words)
- Use badge counts sparingly for important notifications

### Performance
- Memoize menu items if they don't change often
- Use React.memo for heavy content components
- Lazy load page content with React.lazy()

### Accessibility
- Ensure content has proper heading hierarchy
- Use semantic HTML elements
- Provide alt text for images
- Test with keyboard navigation

## Figma Reference

This component is based on the Web App Layout design in Figma:
- [Web App Layout - Figma Design](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18015-5586)

The layout includes three responsive variants (Desktop, Tablet, Mobile) that are implemented using Tailwind's responsive utilities.

## Related Components

- **Sidebar** - Navigation component used in the layout
- **Footer** - Footer component integrated into the layout
- **Logo** - Logo component shown in desktop sidebar
- **LogoMark** - Logo mark shown in tablet sidebar
- **Icon** - Icons used in navigation items

## When to Use

### Use WebAppLayout when:
- Building a full web application
- Creating a dashboard or admin interface
- Need consistent navigation across pages
- Want responsive layout out of the box
- Building SaaS or cryptocurrency apps

### Consider alternatives when:
- Building a marketing website (use regular layouts)
- Creating a simple landing page
- Need highly custom layout structure
- Building embedded widgets or components

