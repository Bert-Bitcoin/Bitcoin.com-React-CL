# Description List Component

A component for displaying labeled data in key-value pairs, based on the Bitcoin.com design system.

## Features

- ✅ Responsive layout switching (side-by-side ↔ stacked)
- ✅ Automatic layout adjustment based on container width
- ✅ Support for numeric values with IBM Plex Sans font
- ✅ Light dividers between items
- ✅ Customizable breakpoint
- ✅ TypeScript support
- ✅ Design system aligned

## Usage

```tsx
import { DescriptionList } from '@bitcoin-com/react-component-library';

const items = [
  {
    id: '1',
    label: 'Full name',
    value: 'Margot Foster'
  },
  {
    id: '2',
    label: 'Salary expectation',
    value: '82,896.56 USD',
    isNumeric: true
  }
];

function MyComponent() {
  return (
    <DescriptionList 
      items={items}
      variant="responsive"
      breakpoint={500}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `DescriptionListItem[]` | required | Array of description list items to display |
| `variant` | `'large' \| 'compact' \| 'responsive'` | `'responsive'` | Layout variant |
| `breakpoint` | `number` | `500` | Breakpoint width (in pixels) for responsive mode |
| `className` | `string` | - | Optional CSS class name |

## DescriptionListItem

```tsx
interface DescriptionListItem {
  id: string;
  label: string;
  value: ReactNode;
  isNumeric?: boolean; // Use IBM Plex Sans font for numeric values
}
```

## Layout Variants

### Large (Side-by-Side)
- Label on the left (220px fixed width)
- Value on the right (flexible width)
- Best for wider containers (≥ 500px)

### Compact (Stacked)
- Label above value
- Both full width
- Best for narrow containers (< 500px)

### Responsive (Default)
- Automatically switches between large and compact
- Based on container width and breakpoint

## Design System Integration

This component follows the Bitcoin.com design system:
- **Font**: Satoshi Variable Medium (14px) for labels and regular text
- **Font**: IBM Plex Sans SemiBold (14px) for numeric values (when `isNumeric: true`)
- **Colors**: Black (#000000) for labels, Dark (#504e55) for values
- **Background**: White (#ffffff)
- **Divider**: Extra light (#f0f0f5)
- **Spacing**: 16px padding (m), 4px gap (xs)
- **Line height**: 100% for labels, normal for values

## Responsive Behavior

The component uses `ResizeObserver` to detect container width changes and automatically switches layout:

```tsx
// Switch to compact when container is less than 400px
<DescriptionList 
  items={items}
  variant="responsive"
  breakpoint={400}
/>
```

## Numeric Values

Use `isNumeric: true` for financial data, percentages, or any numeric content:

```tsx
const items = [
  {
    id: '1',
    label: 'Bitcoin Balance',
    value: '0.00125 BTC',
    isNumeric: true // Uses IBM Plex Sans font
  }
];
```

## Storybook

View examples in Storybook under `Components/Content/Description List`

## Examples

### Contact Information
```tsx
const contactItems = [
  { id: '1', label: 'Email', value: 'user@example.com' },
  { id: '2', label: 'Phone', value: '+1 (555) 123-4567' },
  { id: '3', label: 'Location', value: 'San Francisco, CA' }
];

<DescriptionList items={contactItems} />
```

### Financial Data
```tsx
const financialItems = [
  { id: '1', label: 'USD Value', value: '$52,345.67', isNumeric: true },
  { id: '2', label: 'Percent Change', value: '+5.23%', isNumeric: true }
];

<DescriptionList items={financialItems} />
```

