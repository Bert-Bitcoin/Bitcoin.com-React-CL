# Pill Component

A compact pill component for displaying tags, labels, and status indicators. The Pill component supports multiple color variants and both filled and outlined styles.

## Features

- **6 Color Variants**: Default, Primary, Secondary, Green, Purple, and Red
- **2 Style Options**: Fill (solid background) or Outline (border only)
- **Uppercase Text**: Automatically transforms text to uppercase
- **Semantic Tokens**: Uses design system tokens for consistent theming
- **Dark Mode Support**: Automatically adapts to dark theme via CSS variables
- **Compact Size**: Perfect for tags, labels, and status indicators

## Usage

```tsx
import { Pill } from '@/components/pill';

// Basic usage
<Pill>New</Pill>

// With type variant
<Pill type="primary">Featured</Pill>

// Outline style
<Pill type="green" style="outline">Active</Pill>

// Status indicators
<Pill type="green">Approved</Pill>
<Pill type="red">Rejected</Pill>
<Pill type="purple">Pending</Pill>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'default' \| 'primary' \| 'secondary' \| 'green' \| 'purple' \| 'red'` | `'default'` | The visual type/color variant |
| `style` | `'fill' \| 'outline'` | `'fill'` | The style variant |
| `children` | `React.ReactNode` | Required | The text content to display |
| `className` | `string` | `undefined` | Optional CSS class name |

## Color Variants

### Fill Style

- **Default**: Dark gray background with light text
- **Primary**: Blue background with white text (brand color)
- **Secondary**: Orange background with dark text
- **Green**: Teal background with light green text
- **Purple**: Purple background with light purple text
- **Red**: Red background with light red text (alerts)

### Outline Style

All outline variants use a colored border with dark text on transparent background.

## Examples

### Status Indicators

```tsx
<Pill type="green">Active</Pill>
<Pill type="red">Inactive</Pill>
<Pill type="purple">Pending</Pill>
```

### Category Tags

```tsx
<Pill type="primary" style="outline">Crypto</Pill>
<Pill type="secondary" style="outline">Bitcoin</Pill>
<Pill type="default" style="outline">Trading</Pill>
```

### Content Labels

```tsx
<Pill type="default">New</Pill>
<Pill type="primary">Featured</Pill>
<Pill type="secondary">Sale</Pill>
```

## Design System

This component follows the Bitcoin.com design system and uses:

- **Spacing**: `px-s py-xs` (8px horizontal, 4px vertical padding)
- **Border Radius**: `rounded-md` (16px)
- **Typography**: Satoshi font, bold weight, 9px size, uppercase
- **Colors**: Semantic color tokens from design system
- **Border Width**: 1.4px for outline variants

## Accessibility

- Uses semantic `<span>` element
- Text is automatically uppercase for visual consistency
- High contrast colors for readability
- Supports keyboard navigation when used within interactive elements

## Figma Design

Based on the Figma component: [Web component library - Pill](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18078-886)

## Related Components

- **Indicator**: For status indicators with icons
- **Button**: For interactive actions
- **Badge**: For notification counts (if available)

