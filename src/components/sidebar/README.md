# Sidebar Component

A responsive sidebar navigation component with three variants optimized for different screen sizes.

## Features

- **Three Variants**: Desktop (full sidebar), Tablet (narrow sidebar), Mobile (bottom bar)
- **Active States**: Visual indication of the currently active menu item
- **Badge Support**: Show notification counts (numbers on desktop, dots on tablet/mobile)
- **Dark Mode**: Full support for light and dark themes
- **Accessible**: Semantic HTML with proper ARIA labels
- **Interactive**: Click handlers for navigation
- **Reusable**: Built with existing design system components (Logo, LogoMark, Icon)

## Usage

```tsx
import { Sidebar } from '@bitcoin.com/react-cl';

const menuItems = [
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
  }
];

// Desktop variant
<Sidebar variant="desktop" items={menuItems} />

// Tablet variant
<Sidebar variant="tablet" items={menuItems} />

// Mobile variant (bottom bar)
<Sidebar variant="mobile" items={menuItems} />
```

## Props

### SidebarProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'desktop' \| 'tablet' \| 'mobile'` | `'desktop'` | The variant of the sidebar |
| `items` | `SidebarMenuItem[]` | required | Array of menu items to display |
| `className` | `string` | `undefined` | Custom className for styling |
| `showLogo` | `boolean` | `true` | Whether to show the logo/logomark |

### SidebarMenuItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | required | Unique identifier for the menu item |
| `label` | `string` | required | Label text for the menu item |
| `icon` | `IconName` | required | Icon name from the icon library |
| `isActive` | `boolean` | `false` | Whether this menu item is currently active |
| `badgeCount` | `number` | `undefined` | Optional badge count (number on desktop, dot on tablet/mobile) |
| `onClick` | `() => void` | `undefined` | Click handler for the menu item |

## Variants

### Desktop
- **Width**: 220px
- **Features**: Full logo, icon + label, numeric badges
- **Use case**: Desktop applications and wide screens

### Tablet
- **Width**: 88px
- **Features**: Logo mark only, icon only, notification dots
- **Use case**: Tablets and medium-width screens

### Mobile
- **Width**: Full width (bottom bar)
- **Height**: 56px
- **Features**: No logo, icon + label stacked, notification dots
- **Use case**: Mobile devices and bottom navigation

## Design Tokens Used

- **Colors**: `warning-100`, `warning-10`, `shades-*`
- **Spacing**: `xs`, `s`, `m`, `l`
- **Border Radius**: `s` (8px)
- **Fonts**: Satoshi Variable (labels), IBM Plex Sans (badges)

## Responsive Recommendations

```tsx
// Example with responsive breakpoints
<div className="hidden lg:block">
  <Sidebar variant="desktop" items={menuItems} />
</div>

<div className="hidden md:block lg:hidden">
  <Sidebar variant="tablet" items={menuItems} />
</div>

<div className="block md:hidden">
  <Sidebar variant="mobile" items={menuItems} />
</div>
```

## State Management

The component is controlled, meaning you need to manage the `isActive` state externally:

```tsx
const [activeId, setActiveId] = useState('home');

const items = menuItems.map(item => ({
  ...item,
  isActive: item.id === activeId,
  onClick: () => setActiveId(item.id)
}));

<Sidebar variant="desktop" items={items} />
```

## Accessibility

- All icons have appropriate `aria-label` attributes
- Badge counts have `aria-label` for screen readers
- Semantic `<button>` elements for interactive items
- Proper `<nav>` landmark for navigation region

## Dark Mode

The component automatically adapts to dark mode when the `dark` class is applied to a parent element:

```tsx
<div className="dark">
  <Sidebar variant="desktop" items={menuItems} />
</div>
```

