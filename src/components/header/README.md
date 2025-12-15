# Header Component

A responsive website header component with dynamic breakpoint adjustment based on the number of navigation items.

## Features

- **Dynamic Breakpoints**: Automatically adjusts the mobile/desktop breakpoint based on the number of menu items
- **Three Style Variants**: Light, gray, and dark styles with automatic dark mode support
- **Responsive Layouts**: Desktop, tablet, and mobile layouts
- **Mobile Menu**: Full-screen mobile navigation overlay
- **Action Button**: Configurable CTA button with custom HTML support
- **Custom Logo**: Replace default logo with custom images for light and dark modes
- **Flexible Customization**: Full control over action buttons and branding

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

### `customActionButton`
- Type: `React.ReactNode`
- Description: Custom React node to replace the action button (applies to desktop, tablet, and mobile menu)
- Note: When provided, this overrides `actionLabel` and `onActionClick`

### `customLogo`
- Type: `{ light: string; dark: string }`
- Description: Custom logo URLs for light and dark modes. When provided, replaces the default Logo/LogoMark components
- Properties:
  - `light`: URL/path to the logo image for light mode
  - `dark`: URL/path to the logo image for dark mode
- **Automatic Dark Mode**: When `themeMode` is not provided, both logo variants are rendered and CSS automatically shows the correct one based on the `dark` class on a parent element. This ensures the logo responds to theme changes automatically.
- **Full Size on All Layouts**: Custom logos maintain their full dimensions (167x35px) on desktop, tablet, and mobile layouts (unlike the default logo which uses a logomark on tablet).

### `themeMode`
- Type: `'light' | 'dark'`
- Default: `undefined` (automatic dark mode detection via CSS)
- Description: Optional explicit theme mode for logo switching when using `customLogo`. When provided, this forces a specific logo variant to be shown, overriding automatic dark mode detection. Use this when you need explicit control over which logo is displayed, independent of CSS-based theme switching.

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

### With Custom Action Button

```tsx
<Header
  style="light"
  menuItems={[
    { label: 'Home', href: '/', active: true },
    { label: 'Products', href: '/products' }
  ]}
  customActionButton={
    <div className="flex items-center gap-xs">
      <button className="px-m py-s bg-primary-100 text-white rounded-[8px]">
        Sign In
      </button>
      <button className="px-m py-s bg-secondary-100 text-white rounded-[8px]">
        Sign Up
      </button>
    </div>
  }
/>
```

### With Custom Logo (Using Image Files)

```tsx
import LogoLight from './assets/logo-light.svg';
import LogoDark from './assets/logo-dark.svg';

<Header
  style="light"
  menuItems={[
    { label: 'Home', href: '/', active: true },
    { label: 'Products', href: '/products' }
  ]}
  actionLabel="Get Started"
  customLogo={{
    light: LogoLight,
    dark: LogoDark
  }}
/>
```

**Note**: The custom logo will automatically switch between light and dark variants when the `dark` class is applied to a parent element (typically the `<html>` or `<body>` tag). No additional configuration needed!

### With Custom Logo (Using Data URIs)

```tsx
<Header
  style="light"
  menuItems={[
    { label: 'Home', href: '/', active: true },
    { label: 'Products', href: '/products' }
  ]}
  actionLabel="Get Started"
  customLogo={{
    light: 'data:image/svg+xml,%3Csvg...',
    dark: 'data:image/svg+xml,%3Csvg...'
  }}
/>
```

### With Theme Mode Control

```tsx
// Example: Respond to application's theme state
const [appTheme, setAppTheme] = useState<'light' | 'dark'>('light');

<Header
  style="light"
  themeMode={appTheme} // Logo switches based on app theme, not header style
  menuItems={[
    { label: 'Home', href: '/', active: true },
    { label: 'Products', href: '/products' }
  ]}
  actionLabel="Get Started"
  customLogo={{
    light: LogoLight,
    dark: LogoDark
  }}
/>
```

### Fully Customized

```tsx
<Header
  style="light"
  menuItems={[
    { label: 'Dashboard', href: '/dashboard', active: true },
    { label: 'Wallet', href: '/wallet' }
  ]}
  customActionButton={
    <div className="w-[35px] h-[35px] rounded-full bg-primary-20">
      <span className="text-primary-100">JD</span>
    </div>
  }
  customLogo={{
    light: '/logos/brand-light.svg',
    dark: '/logos/brand-dark.svg'
  }}
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

