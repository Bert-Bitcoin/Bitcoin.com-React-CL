# LogoMark Component

The Bitcoin.com logo mark component for branding and visual identity.

## Features

- **Multiple Sizes**: Six predefined sizes (xs, sm, md, lg, xl, 2xl)
- **1:1 Aspect Ratio**: Always maintains square proportions
- **Accessibility**: Built-in ARIA labels for screen readers
- **Customizable**: Accepts custom className for additional styling
- **Responsive**: Scales perfectly at any size
- **Theme Support**: Works seamlessly in both light and dark modes

## Usage

```tsx
import { LogoMark } from '@/components/logomark';

// Basic usage
<LogoMark size="md" />

// Different sizes
<LogoMark size="xs" />
<LogoMark size="sm" />
<LogoMark size="md" />
<LogoMark size="lg" />
<LogoMark size="xl" />
<LogoMark size="2xl" />

// With custom styling
<LogoMark size="lg" className="opacity-80" />

// Custom accessibility label
<LogoMark size="md" ariaLabel="Company Logo" />

// In a header
<div className="flex items-center gap-m">
  <LogoMark size="md" />
  <span className="text-heading-sm font-bold">Bitcoin.com</span>
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Size of the logo mark |
| `className` | `string` | `undefined` | Custom className for additional styling |
| `ariaLabel` | `string` | `'Bitcoin.com Logo'` | Accessibility label for screen readers |

## Size Reference

| Size | Dimensions |
|------|-----------|
| `xs` | 16x16px |
| `sm` | 24x24px |
| `md` | 32x32px |
| `lg` | 48x48px |
| `xl` | 64x64px |
| `2xl` | 96x96px |

## Design System

The LogoMark component is part of the Design System category in Storybook. It uses the official Bitcoin.com logo SVG and maintains brand consistency across the application.

### Colors
- Background: `#FF9500` (Orange)
- Bitcoin Symbol: `white`

### Accessibility
- Includes `role="img"` for proper semantics
- Provides customizable `aria-label` for screen readers
- Maintains sufficient color contrast

## Examples

### Navigation Header
```tsx
<header className="flex items-center justify-between p-m">
  <div className="flex items-center gap-m">
    <LogoMark size="md" />
    <span className="text-heading-sm font-bold">Bitcoin.com</span>
  </div>
  {/* ... navigation items */}
</header>
```

### Loading State
```tsx
<div className="flex items-center justify-center p-xl">
  <LogoMark size="xl" className="animate-pulse" />
</div>
```

### Card Header
```tsx
<div className="p-l bg-surface rounded-m">
  <div className="flex items-center gap-s mb-m">
    <LogoMark size="sm" />
    <h3 className="text-heading-sm font-bold">Bitcoin Wallet</h3>
  </div>
  {/* ... card content */}
</div>
```

## Storybook

View all variations and examples in Storybook under:
**Design System → LogoMark**

## Related Components

- Button (can be used with LogoMark in icon buttons)
- Typography (pairs well with brand text)
- Asset Icons (complementary icon system)

