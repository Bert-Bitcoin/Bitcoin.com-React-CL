# Header Component

A responsive website header component with dynamic breakpoint adjustment based on the number of navigation items.

## Features

- **Dynamic Breakpoints**: Automatically adjusts the mobile/desktop breakpoint based on the number of menu items
- **Three Style Variants**: Light, gray, and dark styles with automatic dark mode support
- **Responsive Layouts**: Desktop, tablet, and mobile layouts
- **Mobile Menu**: Full-screen mobile navigation overlay
- **Action Button**: Configurable CTA button

## Dynamic Breakpoint System

The Header component intelligently adjusts its responsive breakpoints based on the number of navigation items:

### Breakpoint Rules

| Menu Items | Mobile Breakpoint | Description |
|------------|------------------|-------------|
| 1-4 items  | `<768px` (md)   | Standard breakpoint - suitable for short navigation lists |
| 5-6 items  | `<1024px` (lg)  | Larger breakpoint - provides more horizontal space |
| 7+ items   | `<1280px` (xl)  | Maximum breakpoint - ensures all items fit comfortably |

This ensures that navigation items always have enough space to display without wrapping or overlapping, providing a better user experience across all screen sizes.

## Props

### `style`
- Type: `'light' | 'gray' | 'dark'`
- Default: `'light'`
- Description: Visual style variant of the header

### `menuItems`
- Type: `HeaderMenuItem[]`
- Description: Array of navigation menu items

```typescript
interface HeaderMenuItem {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}
```

### `actionLabel`
- Type: `string`
- Default: `'Action'`
- Description: Label for the action button

### `onActionClick`
- Type: `() => void`
- Description: Callback when the action button is clicked

### `onMenuToggle`
- Type: `() => void`
- Description: Callback when the mobile menu is toggled

### `className`
- Type: `string`
- Description: Additional CSS classes to apply

## Style Variants

### Light
- White background
- Dark navigation pill with white text for inactive items
- Dark text on white pill for active items
- Supports dark mode with automatic color inversion

### Gray
- Light gray background
- Dark navigation pill with white text for inactive items
- Dark text on white pill for active items
- Supports dark mode with automatic color inversion

### Dark
- Dark background
- Light navigation pill with dark text for inactive items
- Dark text on light pill for active items
- Supports dark mode with automatic color inversion

## Usage Examples

### Basic Usage

```tsx
import { Header } from '@/components/header';

<Header
  style="light"
  menuItems={[
    { label: 'Home', href: '/', active: true },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' }
  ]}
  actionLabel="Get Started"
  onActionClick={() => console.log('Action clicked')}
/>
```

### With Many Items (Automatic Breakpoint Adjustment)

```tsx
<Header
  style="gray"
  menuItems={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact', active: true }
  ]}
  actionLabel="Sign Up"
/>
```

With 8 menu items, the header will automatically use the xl breakpoint (1280px) to ensure all items fit properly.

### Dark Style

```tsx
<Header
  style="dark"
  menuItems={[
    { label: 'Home', href: '/', active: true },
    { label: 'Products', href: '/products' }
  ]}
  actionLabel="Join Now"
/>
```

## Responsive Behavior

### Desktop Layout (>= breakpoint)
- Full logo on the left
- Centered navigation pill with all menu items
- Action button on the right

### Tablet Layout (between mobile and desktop breakpoint)
- Logo mark (icon only) on the left
- Centered navigation pill (may wrap if needed)
- Action button on the right

### Mobile Layout (< mobile breakpoint)
- Full logo on the left
- Hamburger menu button on the right
- Full-screen overlay menu when opened

## Accessibility

- Semantic HTML5 `<header>` and `<nav>` elements
- Proper ARIA labels for icon buttons
- Keyboard navigation support
- Focus management for mobile menu

## Design System Integration

The Header component uses semantic design tokens from the project's design system:
- Color tokens: `shades-white`, `shades-black`, `shades-extra-light`, etc.
- Spacing tokens: `px-m`, `px-xl`, `py-l`, etc.
- Typography: System fonts with proper sizing
- Automatic dark mode support through CSS variables

