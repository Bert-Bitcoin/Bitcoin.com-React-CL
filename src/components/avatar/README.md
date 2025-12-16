# Avatar Component

A flexible avatar component that displays user profile images, initials, or placeholder icons. Built according to the Figma design specifications with full support for all size and type variations.

## Features

- **Three Display Types**: Image, Initials, or Placeholder icon
- **Four Sizes**: Small (24px), Default (35px), Large (38px), Extra Large (43px)
- **12 Background Colors**: For initials and placeholder variants
- **Semantic Design Tokens**: Uses design system colors
- **Fully Accessible**: Proper ARIA labels and semantic HTML

## Usage

```tsx
import { Avatar } from '@bitcoin-design/react-component-library';

// Image avatar
<Avatar
  type="image"
  src="https://example.com/avatar.jpg"
  alt="John Doe"
  size="large"
/>

// Initials avatar
<Avatar
  type="initials"
  initials="JB"
  backgroundColor="primary-50"
  size="default"
/>

// Placeholder avatar
<Avatar
  type="placeholder"
  backgroundColor="secondary-50"
  size="large"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'default' \| 'large' \| 'extra-large'` | `'default'` | Size variant of the avatar |
| `type` | `'image' \| 'initials' \| 'placeholder'` | `'placeholder'` | Type of avatar display |
| `src` | `string` | - | Image source URL (required when type is 'image') |
| `alt` | `string` | `'Avatar'` | Alt text for the image |
| `initials` | `string` | - | Initials to display (required when type is 'initials') |
| `backgroundColor` | `AvatarBackgroundColor` | `'primary-50'` | Background color for initials and placeholder types |
| `className` | `string` | - | Additional CSS classes |

## Background Colors

The following background colors are available for `initials` and `placeholder` types:

- `primary-50`
- `secondary-50`
- `success-50`
- `alerts-50`
- `extra-cyan-50`
- `extra-violet-50`
- `extra-navy-50`
- `extra-gold-50`
- `extra-yellow-50`
- `extra-pink-50`
- `extra-green-50`
- `extra-purple-50`

All initials and placeholder icons use white (`#fff`) text/icon color as specified in the design system.

## Sizes

| Size | Dimensions | Use Case |
|------|------------|----------|
| `small` | 24px | Compact lists, small UI elements |
| `default` | 35px | Standard usage, forms |
| `large` | 38px | Emphasis in lists, cards |
| `extra-large` | 43px | Profile headers, prominent displays |

## Examples

### All Sizes

```tsx
<div className="flex items-center gap-m">
  <Avatar size="small" type="placeholder" />
  <Avatar size="default" type="placeholder" />
  <Avatar size="large" type="placeholder" />
  <Avatar size="extra-large" type="placeholder" />
</div>
```

### Different Colors

```tsx
<div className="flex items-center gap-m">
  <Avatar type="initials" initials="AB" backgroundColor="primary-50" />
  <Avatar type="initials" initials="CD" backgroundColor="secondary-50" />
  <Avatar type="initials" initials="EF" backgroundColor="success-50" />
  <Avatar type="initials" initials="GH" backgroundColor="alerts-50" />
</div>
```

### In a User List

```tsx
<div className="flex items-center gap-m p-m bg-shades-off-white rounded-md">
  <Avatar type="image" src="/user.jpg" size="large" />
  <div className="flex flex-col">
    <span className="text-label font-medium">John Smith</span>
    <span className="text-body-sm text-shades-mid">john@example.com</span>
  </div>
</div>
```

## Design Specifications

This component follows the Figma design:
[Avatar Component - Figma](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18099-8540)

### Typography
- **Initials**: Satoshi Variable Medium font
- **Text Color**: Always white (#fff) for initials and placeholder icons

### Border Radius
- All sizes use `rounded-[58px]` for a circular appearance

### Icon
- Uses the `icon-user` from the design system icon library
- Icon size scales proportionally with avatar size

## Accessibility

- Image avatars include proper `alt` attributes
- Placeholder icons have `aria-label="User placeholder"`
- All interactive elements are keyboard accessible
- Proper semantic HTML structure

## Notes

- When using `type="image"`, the `src` prop is required
- When using `type="initials"`, the `initials` prop is required (typically 1-2 uppercase letters)
- The `backgroundColor` prop only applies to `initials` and `placeholder` types
- Background colors use design system tokens for consistency across light/dark themes

