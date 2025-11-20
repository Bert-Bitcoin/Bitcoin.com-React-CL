# Icon Component

A unified icon component that dynamically loads SVG icons from `src/icons/`. This replaces the previous approach of generating individual icon components for each SVG.

## Features

- **Single Component API**: Use `<Icon type="icon-name" />` instead of importing individual icon components
- **763+ Icons**: All icons from the design system available through one component
- **Fully Typed**: TypeScript autocomplete for all icon names
- **Theme Support**: Icons respect `currentColor` for automatic light/dark mode adaptation
- **Multiple Sizes**: Six predefined sizes (xs, sm, md, lg, xl, 2xl)
- **Customizable**: Accepts `className` for custom styling
- **Accessibility**: Built-in ARIA support

## Usage

```tsx
import { Icon } from '@/components/icon';

// Basic usage
<Icon type="icon-search" />

// With size
<Icon type="icon-heart" size="lg" />

// With custom color
<Icon type="icon-star-1" className="text-primary-100" />

// With accessibility label
<Icon type="icon-user" ariaLabel="User profile" />

// Decorative icon (hidden from screen readers)
<Icon type="icon-arrow-right" ariaHidden />

// In a button
<button className="flex items-center gap-s">
  <Icon type="icon-add" size="sm" />
  <span>Add Item</span>
</button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `IconName` | required | The icon name (e.g., `"icon-search"`) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Size of the icon |
| `className` | `string` | `undefined` | Custom className for styling |
| `ariaLabel` | `string` | `undefined` | Accessibility label |
| `ariaHidden` | `boolean` | `false` | Hide from screen readers |

## Size Reference

| Size | Dimensions |
|------|-----------|
| `xs` | 12x12px |
| `sm` | 16x16px |
| `md` | 20x20px |
| `lg` | 24x24px |
| `xl` | 32x32px |
| `2xl` | 40x40px |

## Adding New Icons

1. Add your SVG file to `src/icons/`
2. Run `npm run generate:icons` to regenerate the icon map
3. The icon will be available as `<Icon type="your-icon-name" />`

## Getting All Available Icons

```tsx
import { getAvailableIcons, iconNames } from '@/components/icon';

// Get array of all icon names
const allIcons = getAvailableIcons();

// Or use the exported constant
console.log(iconNames);
```

## Theme Support

Icons automatically adapt to the current theme by using `currentColor`:

```tsx
// Light mode: black text, dark mode: white text
<div className="text-text-primary">
  <Icon type="icon-sun-1" size="lg" />
</div>

// Custom theme colors
<div className="text-primary-100">
  <Icon type="icon-heart" size="lg" />
</div>
```

## Examples

### Navigation Icons
```tsx
<nav className="flex gap-m">
  <Icon type="icon-home" size="md" />
  <Icon type="icon-search" size="md" />
  <Icon type="icon-user" size="md" />
  <Icon type="icon-setting-2" size="md" />
</nav>
```

### Button with Icon
```tsx
<button className="flex items-center gap-s px-m py-s bg-primary-100 text-white rounded-m">
  <Icon type="icon-add-circle" size="sm" />
  <span>Add New</span>
</button>
```

### Input with Icon
```tsx
<div className="relative">
  <Icon 
    type="icon-search" 
    size="sm" 
    className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" 
  />
  <input className="pl-10 ..." />
</div>
```

### Status Icons with Colors
```tsx
<div className="flex gap-m">
  <Icon type="icon-tick-circle" size="lg" className="text-success-100" />
  <Icon type="icon-danger" size="lg" className="text-danger-100" />
  <Icon type="icon-info-circle" size="lg" className="text-info-100" />
  <Icon type="icon-warning-2" size="lg" className="text-warning-100" />
</div>
```

## Storybook

View all icons and examples in Storybook:
- **Foundation → Icon** - Component documentation
- **Foundation → Icon → Icon Gallery** - Browse all 763+ icons

## Migration from Old Icon Components

If you were using the old generated icon components:

```tsx
// Old approach ❌
import { SearchIcon, HeartIcon } from '@/components/icons';
<SearchIcon className="w-5 h-5" />
<HeartIcon className="w-5 h-5" />

// New approach ✅
import { Icon } from '@/components/icon';
<Icon type="icon-search" size="md" />
<Icon type="icon-heart" size="md" />
```

## Performance

Icons are loaded synchronously from the icon map, with no additional HTTP requests. The icon map is tree-shakeable, so only the icons you use will be included in your bundle.

