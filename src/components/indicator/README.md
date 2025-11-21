# Indicator Component

A status indicator component for displaying various states with icons and labels.

## Features

- **7 Predefined Variants**: approved, pending, rejected, viewed, new, neutral, and featured
- **Icon Integration**: Each variant includes an appropriate icon from the design system
- **Custom Labels**: Override default labels with custom text
- **Custom Icons**: Override default icons with any icon from the library
- **Design System Colors**: Uses color tokens from the Bitcoin.com design system
- **Light/Dark Theme Support**: Automatically adapts to theme changes with proper contrast
- **Flexible Styling**: Accepts custom className for additional styling

## Usage

```tsx
import { Indicator } from '@bitcoin.com/react-cl';

// Basic usage with default labels
<Indicator variant="approved" />
<Indicator variant="pending" />
<Indicator variant="rejected" />

// Custom labels
<Indicator variant="approved" label="Completed" />
<Indicator variant="pending" label="Processing" />
<Indicator variant="rejected" label="Failed" />
```

## Variants

### Approved
- **Icon**: Circular Checkmark
- **Colors**: Green background (success-10), green icon (success-100)
- **Use Case**: Successful operations, approved status

### Pending
- **Icon**: Pending/Clock
- **Colors**: Orange background (warning-10), orange icon (warning-100)
- **Use Case**: In-progress operations, pending approval

### Rejected
- **Icon**: Circular Close
- **Colors**: Red background (alerts-10), red icon (alerts-100)
- **Use Case**: Failed operations, rejected status

### Viewed
- **Icon**: Show/Eye
- **Colors**: Gray background (extra-gray-10), dark icon (shades-extra-dark)
- **Use Case**: Read content, viewed items

### New
- **Icon**: Star
- **Colors**: Purple background (extra-purple-10), purple icon (extra-purple-100)
- **Use Case**: New content, unread items, featured items

### Neutral
- **Icon**: Send
- **Colors**: Blue background (primary-10), blue icon (primary-100)
- **Use Case**: Incoming transactions, neutral status

### Featured
- **Icon**: Flash
- **Colors**: Orange solid background (secondary-100), white text and icon
- **Use Case**: Highlighted items, premium features, featured content

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'approved' \| 'pending' \| 'rejected' \| 'viewed' \| 'new' \| 'neutral' \| 'featured'` | `'approved'` | The variant/state of the indicator |
| `label` | `string` | Variant-based | Custom label text to display |
| `icon` | `string` | Variant-based | Custom icon name to display (any icon from the icon library) |
| `className` | `string` | `''` | Optional CSS class name |

## Examples

### Transaction Status
```tsx
// In a transaction table
<Indicator variant="approved" label="Completed" />
<Indicator variant="pending" label="Pending" />
<Indicator variant="rejected" label="Failed" />
```

### Content Status
```tsx
// In a notification list
<Indicator variant="new" />
<Indicator variant="viewed" />
```

### Custom Icon
```tsx
// Override the default icon
<Indicator variant="approved" icon="icon-tick-circle" label="Verified" />
<Indicator variant="pending" icon="icon-clock" label="Processing" />
```

### Custom Styling
```tsx
// Add custom classes
<Indicator variant="featured" className="shadow-lg" />
```

### Dark Mode
The component automatically supports dark mode. Text colors adjust for optimal contrast:
- Light mode: Dark text on light backgrounds
- Dark mode: Light text on dark backgrounds

```tsx
// Works seamlessly in dark mode
<div className="dark">
  <Indicator variant="approved" label="Completed" />
  <Indicator variant="pending" label="Processing" />
</div>
```

## Accessibility

- Uses semantic HTML with proper text labels
- Icons are decorative and do not require alt text
- Text maintains sufficient color contrast in all variants

## Design System Integration

This component follows the Bitcoin.com design system:
- Uses design tokens for colors and spacing
- Integrates with the Icon component
- Uses Satoshi Variable font family
- Supports both light and dark themes

