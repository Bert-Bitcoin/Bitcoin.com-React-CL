# Modal Component

A flexible modal dialog component for confirmations, alerts, and important messages. Supports multiple layouts, sizes, and themes.

## Features

- **Multiple Types**: `confirm` (with cancel) or `alert` (confirm only)
- **Flexible Layouts**: Portrait (vertical) or landscape (horizontal) styles
- **Responsive**: Automatically switches to portrait layout on mobile devices
- **Multiple Sizes**: Default and compact sizes
- **Smooth Animations**: Scale-up entrance with a subtle bounce effect
- **Dark Mode**: Full support for light and dark themes
- **Accessibility**: Keyboard navigation (ESC to close), ARIA attributes, focus management
- **Customizable**: Support for custom illustrations, text, and callbacks

## Usage

```tsx
import { Modal } from '@/components/modal';
import { CoinsIllustration } from '@/components/mini-illustrations';
import { useState } from 'react';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        type="confirm"
        style="portrait"
        size="default"
        title="Confirm Action"
        description="Are you sure you want to proceed with this action?"
        illustration={<CoinsIllustration className="w-full h-full" />}
        confirmText="Confirm"
        cancelText="Cancel"
        onConfirm={() => {
          console.log('Confirmed!');
          setOpen(false);
        }}
        onCancel={() => {
          console.log('Cancelled');
          setOpen(false);
        }}
      />
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | **Required.** Whether the modal is open |
| `onClose` | `() => void` | - | Callback when modal should close (ESC key or backdrop click) |
| `type` | `'confirm' \| 'alert'` | `'confirm'` | Modal type - `confirm` shows both buttons, `alert` shows only confirm |
| `style` | `'portrait' \| 'landscape'` | `'portrait'` | Layout style - switches to portrait on mobile |
| `size` | `'default' \| 'compact'` | `'default'` | Modal size |
| `title` | `string` | - | **Required.** Modal title (displayed in uppercase) |
| `description` | `string` | - | **Required.** Modal description text |
| `illustration` | `ReactNode` | - | Mini illustration component to display |
| `confirmText` | `string` | `'Confirm'` | Text for the confirm button |
| `cancelText` | `string` | `'Cancel'` | Text for the cancel button (only shown for `confirm` type) |
| `onConfirm` | `() => void` | - | Callback when confirm button is clicked |
| `onCancel` | `() => void` | - | Callback when cancel button is clicked |
| `showCloseButton` | `boolean` | `true` | Show close button (X) in landscape mode |
| `className` | `string` | - | Custom className for the modal container |
| `closeOnBackdropClick` | `boolean` | `true` | Whether clicking the backdrop closes the modal |

## Variants

### Type Variants

#### Confirm
Shows both Cancel and Confirm buttons. Use for actions that require explicit user confirmation.

```tsx
<Modal
  type="confirm"
  title="Delete Account"
  description="This action cannot be undone."
  confirmText="Delete"
  cancelText="Keep Account"
/>
```

#### Alert
Shows only a Confirm button. Use for informational messages or single-action confirmations.

```tsx
<Modal
  type="alert"
  title="Success"
  description="Your action was completed successfully."
  confirmText="OK"
/>
```

### Style Variants

#### Portrait
Vertical layout with illustration on top. Best for mobile-first designs.

```tsx
<Modal
  style="portrait"
  title="Portrait Modal"
  description="Illustration appears above the content."
/>
```

#### Landscape
Horizontal layout with illustration on the side. Buttons appear below the description text, aligned to the left. Close button (X) appears in the top-right corner. Automatically switches to portrait on mobile devices.

```tsx
<Modal
  style="landscape"
  title="Landscape Modal"
  description="Illustration appears on the left side on larger screens."
  showCloseButton={true}
/>
```

### Size Variants

#### Default
Standard modal size suitable for most use cases.

```tsx
<Modal
  size="default"
  // ... other props
/>
```

#### Compact
Smaller modal for simple confirmations or limited space.

```tsx
<Modal
  size="compact"
  // ... other props
/>
```

## Illustrations

Use any mini-illustration component from the design system:

```tsx
import {
  CoinsIllustration,
  BitcoinIllustration,
  SuccessCoinIllustration
} from '@/components/mini-illustrations';

<Modal
  illustration={<CoinsIllustration className="w-full h-full" />}
  // ... other props
/>
```

## Accessibility

- **Keyboard Navigation**: Press ESC to close the modal
- **ARIA Attributes**: Proper `role="dialog"`, `aria-modal`, `aria-labelledby`, and `aria-describedby`
- **Focus Management**: Body scroll is prevented when modal is open
- **Screen Reader Support**: All interactive elements have proper labels

## Responsive Behavior

The modal automatically adjusts its layout based on screen size:

- **Portrait Mode**: Single column layout on all screen sizes
- **Landscape Mode**: 
  - Mobile (< 640px): Switches to portrait layout with vertical button stacking
  - Desktop (≥ 640px): Horizontal layout with illustration on the left, content and buttons on the right, close button absolutely positioned in top-right corner

## Animation

The modal features a smooth scale-up entrance animation with a subtle bounce effect using the `bounceIn` keyframe:
- Starts at 30% scale with 0 opacity
- Scales to 105% at the midpoint for a slight overshoot
- Settles at 90% before reaching final 100% scale
- Duration: 0.5s with a smooth cubic-bezier easing function (0.34, 1.56, 0.64, 1) for a gentle, natural bounce feel

## Dark Mode

The modal fully supports dark mode through Tailwind's `dark:` variants:

```tsx
// Dark mode is automatically applied based on the `dark` class on parent elements
<div className="dark">
  <Modal
    // ... props
  />
</div>
```

## Design System

This component follows the [Figma design specifications](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18057-965).

- **Typography**: Elza Narrow (title) and Satoshi (description)
- **Colors**: Uses semantic tokens from the design system
- **Spacing**: Uses standardized spacing tokens (xs, s, m, l)
- **Border Radius**: Uses design system border radius tokens

## Examples

### Success Modal

```tsx
<Modal
  type="alert"
  style="portrait"
  title="Success"
  description="Your transaction has been completed successfully."
  illustration={<SuccessCoinIllustration className="w-full h-full" />}
  confirmText="Great!"
  onConfirm={handleClose}
/>
```

### Destructive Action

```tsx
<Modal
  type="confirm"
  style="portrait"
  title="Delete Wallet"
  description="Are you sure you want to delete this wallet? This action cannot be undone."
  illustration={<BitcoinIllustration className="w-full h-full" />}
  confirmText="Delete"
  cancelText="Cancel"
  onConfirm={handleDelete}
  onCancel={handleClose}
/>
```

### Landscape with Close Button

```tsx
<Modal
  type="alert"
  style="landscape"
  title="Information"
  description="Here's some important information you should know."
  illustration={<CoinsIllustration className="w-full h-full" />}
  showCloseButton={true}
  confirmText="Got it"
  onConfirm={handleClose}
/>
```

