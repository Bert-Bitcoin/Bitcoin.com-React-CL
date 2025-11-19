# Logo Component

The full Bitcoin.com logo component with text and branding mark.

## Features

- **Multiple Sizes**: Six predefined sizes (xs, sm, md, lg, xl, 2xl)
- **Theme Modes**: Auto, light (black text), or dark (white text)
- **Auto Theme Switching**: Automatically adapts to light/dark mode when `theme="auto"`
- **Aspect Ratio Preserved**: Maintains 336:71 ratio (~4.73:1)
- **Accessibility**: Built-in ARIA labels for screen readers
- **Customizable**: Accepts custom className for additional styling
- **Responsive**: Scales perfectly at any size

## Usage

```tsx
import { Logo } from '@/components/logo';

// Auto theme switching (default)
<Logo size="md" />
<Logo size="md" theme="auto" />

// Always show light version (black text)
<Logo size="md" theme="light" />

// Always show dark version (white text)
<Logo size="md" theme="dark" />

// Different sizes
<Logo size="xs" />
<Logo size="sm" />
<Logo size="md" />
<Logo size="lg" />
<Logo size="xl" />
<Logo size="2xl" />

// With custom styling
<Logo size="lg" className="opacity-80" />

// Responsive sizing
<Logo size="sm" className="md:h-10 lg:h-12" />

// Custom accessibility label
<Logo size="md" ariaLabel="Bitcoin.com Company Logo" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Size of the logo |
| `theme` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Theme mode for the logo |
| `className` | `string` | `undefined` | Custom className for additional styling |
| `ariaLabel` | `string` | `'Bitcoin.com'` | Accessibility label for screen readers |

## Size Reference

| Size | Height | Approximate Width |
|------|--------|-------------------|
| `xs` | 16px | ~76px |
| `sm` | 24px | ~113px |
| `md` | 32px | ~151px |
| `lg` | 48px | ~227px |
| `xl` | 64px | ~303px |
| `2xl` | 80px | ~378px |

## Theme Modes

### Auto (Default)
Automatically switches between light and dark variants based on the current theme:
- **Light mode**: Shows black text
- **Dark mode**: Shows white text

```tsx
<Logo size="md" theme="auto" />
```

### Light
Always shows the light variant (black text) regardless of the current theme:

```tsx
<Logo size="md" theme="light" />
```

### Dark
Always shows the dark variant (white text) regardless of the current theme:

```tsx
<Logo size="md" theme="dark" />
```

## Design System

The Logo component is part of the Design System category in Storybook. It uses the official Bitcoin.com logo SVGs with proper theme support.

### Colors
- **Logo Mark Background**: `#FF9500` (Orange)
- **Logo Mark Bitcoin Symbol**: `white`
- **Light Text**: `black` (for light backgrounds)
- **Dark Text**: `white` (for dark backgrounds)

### Accessibility
- Includes `role="img"` for proper semantics
- Provides customizable `aria-label` for screen readers
- Maintains sufficient color contrast in both themes

## Examples

### Navigation Header
```tsx
<header className="flex items-center justify-between p-m">
  <Logo size="sm" />
  <nav>{/* navigation items */}</nav>
</header>
```

### Hero Section
```tsx
<section className="flex flex-col items-center gap-m p-xl text-center">
  <Logo size="xl" />
  <h1 className="text-heading-xl font-bold">Welcome to Bitcoin.com</h1>
  <p className="text-body-lg">Your trusted platform for Bitcoin</p>
</section>
```

### Footer
```tsx
<footer className="flex items-center justify-between p-m">
  <Logo size="xs" />
  <p className="text-label-sm">© 2024 Bitcoin.com. All rights reserved.</p>
</footer>
```

### Dark Background
```tsx
<div className="bg-shades-almost-black p-l">
  <Logo size="md" theme="dark" />
</div>
```

### Responsive
```tsx
{/* Small on mobile, medium on tablet, large on desktop */}
<Logo size="sm" className="md:h-10 lg:h-12" />
```

## When to Use

### Use Logo when:
- Building navigation headers
- Creating hero sections
- Designing footers
- Building authentication pages
- Creating branded components

### Use LogoMark instead when:
- Space is limited (mobile views)
- Creating app icons or favicons
- Building compact UI elements
- Needing a square/icon version

## Best Practices

1. **Choose the right size**: Use smaller sizes (xs, sm) for headers/footers, larger sizes (lg, xl, 2xl) for hero sections
2. **Theme appropriately**: Use `theme="auto"` for most cases to ensure proper contrast
3. **Force theme when needed**: Use `theme="light"` or `theme="dark"` when you need consistent branding regardless of user theme
4. **Maintain contrast**: Ensure sufficient contrast between logo and background
5. **Don't distort**: Never manually set both width and height - let the aspect ratio be maintained
6. **Accessibility**: Keep the default `ariaLabel` or provide a descriptive one

## Storybook

View all variations and examples in Storybook under:
**Design System → Logo**

## Related Components

- **LogoMark** (square icon version of the logo)
- **Button** (can include logo in branded buttons)
- **Typography** (pairs well with logo in headers)

