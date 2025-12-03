# Tabs Component

A versatile tabs component based on the Bitcoin.com design system, supporting icons, badges, multiple alignment options, and responsive horizontal scrolling.

## Features

- ✅ **Multiple Alignment Options**: Left, center, or stretched tabs
- ✅ **Icon Support**: Display icons alongside tab labels
- ✅ **Badge Support**: Show notification counts or status badges
- ✅ **Responsive**: Automatic horizontal scrolling on small screens
- ✅ **Accessible**: Full keyboard navigation and ARIA support
- ✅ **Themeable**: Light and dark mode support
- ✅ **Customizable**: Custom className support for container and tabs
- ✅ **Disabled State**: Support for disabled tabs

## Design Reference

Based on the Figma design: [Web Component Library - Tabs](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18063-664)

## Usage

```tsx
import { Tabs } from '@bitcoin-portal/bdc-components';
import type { Tab } from '@bitcoin-portal/bdc-components';

function MyComponent() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs: Tab[] = [
    { id: 'home', label: 'Home', icon: 'icon-home' },
    { id: 'wallets', label: 'Wallets', icon: 'icon-wallet' },
    { id: 'rewards', label: 'Rewards', icon: 'icon-reward', badge: 5 },
    { id: 'earn', label: 'Earn', icon: 'icon-earn' }
  ];

  return (
    <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onChange={setActiveTab}
      align="left"
      ariaLabel="Main navigation"
    />
  );
}
```

## Props

### TabsProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `Tab[]` | *required* | Array of tab items |
| `activeTab` | `string` | *required* | ID of the currently active tab |
| `onChange` | `(tabId: string) => void` | *required* | Callback when a tab is clicked |
| `align` | `'left' \| 'center' \| 'stretch'` | `'left'` | Alignment of tabs within the container |
| `className` | `string` | `undefined` | Custom className for the container |
| `tabClassName` | `string` | `undefined` | Custom className for individual tabs |
| `ariaLabel` | `string` | `undefined` | Aria label for the tablist |

### Tab Interface

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `string` | ✅ | Unique identifier for the tab |
| `label` | `string` | ✅ | Label text for the tab |
| `icon` | `IconName` | ❌ | Optional icon name from the icon library |
| `badge` | `number \| string` | ❌ | Optional badge count or label |
| `disabled` | `boolean` | ❌ | Whether the tab is disabled |

## Alignment Options

### Left (default)
Tabs align to the left side of the container.

```tsx
<Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} align="left" />
```

### Center
Tabs are centered within the container.

```tsx
<Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} align="center" />
```

### Stretch
Tabs expand to fill the full width evenly.

```tsx
<Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} align="stretch" />
```

## Examples

### Basic Tabs

```tsx
const tabs = [
  { id: '1', label: 'Active Tab' },
  { id: '2', label: 'Tab' },
  { id: '3', label: 'Tab' },
  { id: '4', label: 'Tab' }
];

<Tabs tabs={tabs} activeTab="1" onChange={handleChange} />
```

### Tabs with Icons

```tsx
const tabs = [
  { id: 'home', label: 'Home', icon: 'icon-home' },
  { id: 'wallets', label: 'Wallets', icon: 'icon-wallet' },
  { id: 'rewards', label: 'Rewards', icon: 'icon-reward' },
  { id: 'earn', label: 'Earn', icon: 'icon-earn' }
];

<Tabs tabs={tabs} activeTab="home" onChange={handleChange} />
```

### Tabs with Badges

```tsx
const tabs = [
  { id: 'incoming', label: 'Incoming', badge: 10 },
  { id: 'scheduled', label: 'Scheduled', badge: 10 },
  { id: 'progress', label: 'In Progress' },
  { id: 'done', label: 'Done', badge: 10 }
];

<Tabs tabs={tabs} activeTab="incoming" onChange={handleChange} />
```

### Combined Features

```tsx
const tabs = [
  { id: 'home', label: 'Home', icon: 'icon-home', badge: 2 },
  { id: 'wallets', label: 'Wallets', icon: 'icon-wallet' },
  { id: 'rewards', label: 'Rewards', icon: 'icon-reward', badge: 15 },
  { id: 'earn', label: 'Earn', icon: 'icon-earn', disabled: true }
];

<Tabs tabs={tabs} activeTab="home" onChange={handleChange} align="stretch" />
```

## Responsive Behavior

The Tabs component automatically detects when tab content exceeds the container width and enables horizontal scrolling. This ensures usability on small screens and mobile devices without breaking the layout.

### Mobile-First Design

- Horizontal scrolling activates automatically when needed
- Scrollbar is hidden for a clean appearance
- Smooth scroll behavior for better UX
- Touch-friendly tap targets

## Accessibility

The component follows WAI-ARIA best practices:

- **Keyboard Navigation**: Full keyboard support
- **ARIA Attributes**: Proper `role="tablist"`, `role="tab"`, `aria-selected`, and `aria-disabled`
- **Focus Management**: Visible focus indicators
- **Screen Reader Support**: Descriptive labels and states

## Design Tokens

The component uses semantic design tokens from the Bitcoin.com design system:

### Colors
- **Active Tab**: `primary-100` (#4169e1)
- **Inactive Tab**: `shades-dark` (#504e55)
- **Border**: `shades-semi-light` (#cac7d1)
- **Active Badge**: `primary-50` (#9db6fb)
- **Inactive Badge**: `shades-semi-light` (#cac7d1)

### Typography
- **Font**: Satoshi Variable (Medium weight)
- **Size**: 16px
- **Badge Font**: IBM Plex Sans (SemiBold weight)
- **Badge Size**: 10px

### Spacing
- **Padding**: 16px horizontal, 12px vertical
- **Gap**: 8px between icon/text/badge

## Dark Mode

The component fully supports dark mode through the `data-theme="dark"` attribute or `dark:` class modifier:

```tsx
<div data-theme="dark">
  <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Related Components

- **PillTabs**: Alternative pill-style tabs for different UI contexts
- **Icon**: Icon component used for tab icons
- **Button**: For similar interactive elements

## Changelog

### v1.0.0
- Initial release
- Support for icons, badges, and multiple alignment options
- Responsive horizontal scrolling
- Full accessibility support
- Dark mode support
