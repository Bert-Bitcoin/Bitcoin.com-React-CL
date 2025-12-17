# Notification Component

A flexible and accessible notification component for displaying alerts, confirmations, and status updates. Built with React, TypeScript, and Tailwind CSS, supporting multiple variants, positions, animations, and full dark mode theming.

## Features

- **4 Variants**: Basic, Condensed, Actions, and Full (with primary action button)
- **3 Positions**: Top-right, bottom-left, and top-center (responsive: mobile always shows top-center full-width)
- **3 Animations**: Slide, fade, and bounce entrance animations
- **Dark Mode**: Full support for light and dark themes
- **Auto-hide**: Optional automatic dismissal after a specified duration
- **Accessible**: Proper ARIA attributes and semantic HTML
- **Customizable**: Icons, colors, actions, and positioning

## Usage

```tsx
import { Notification } from '@/components/notification';

// Basic notification
<Notification
  variant="basic"
  title="Success!"
  description="Your action was completed successfully."
  icon="icon-checkmark"
  iconColor="text-success-100"
  position="top-right"
  animation="slide"
  onClose={() => console.log('Notification closed')}
/>

// Condensed with action
<Notification
  variant="condensed"
  title="Wallet archived"
  primaryAction={{
    label: 'Undo',
    onClick: () => console.log('Undo clicked')
  }}
  onClose={() => console.log('Notification closed')}
/>

// With multiple actions
<Notification
  variant="actions"
  title="Wallet moved"
  description="Your wallet has been moved to a new location."
  icon="icon-wallet"
  iconColor="text-primary-100"
  primaryAction={{
    label: 'Undo',
    onClick: () => console.log('Undo clicked')
  }}
  secondaryAction={{
    label: 'Dismiss',
    onClick: () => console.log('Dismiss clicked')
  }}
  onClose={() => console.log('Notification closed')}
/>

// Full variant with primary action button
<Notification
  variant="full"
  title="Transaction received"
  description="You have received a new transaction."
  icon="icon-received"
  iconColor="text-primary-100"
  primaryAction={{
    label: 'View Details',
    onClick: () => console.log('View Details clicked')
  }}
  secondaryAction={{
    label: 'Dismiss',
    onClick: () => console.log('Dismiss clicked')
  }}
  position="top-right"
  animation="bounce"
  autoHideDuration={5000}
  onClose={() => console.log('Notification closed')}
/>
```

## Variants

### Basic
- Icon, title, and description
- Close button
- No action buttons in content area

### Condensed
- Title only (no icon or description)
- Inline action button (if provided)
- Close button
- More compact height

### Actions
- Icon, title, and description
- Two text-style action buttons (Undo/Dismiss)
- Close button

### Full
- Icon, title, and description
- Primary action button (filled style)
- Secondary action button (text style)
- Close button

## Positions

### Desktop/Tablet
- **top-right**: Fixed to top-right corner with margin
- **bottom-left**: Fixed to bottom-left corner with margin
- **top-center**: Centered at the top of the screen

### Mobile
All positions adapt to **top-center** on mobile, with:
- Full width minus 16px margins on left and right
- Fixed to the top with 16px margin

## Animations

### Slide
Slides in from the right side with opacity transition.

### Fade
Fades in smoothly with a subtle upward movement.

### Bounce
Bounces in with a spring effect for attention-grabbing notifications.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'basic' \| 'condensed' \| 'actions' \| 'full'` | `'basic'` | Visual variant of the notification |
| `title` | `string` | Required | Notification title (displayed uppercase) |
| `description` | `string` | - | Optional description text |
| `icon` | `string` | - | Icon name from icon library |
| `iconColor` | `string` | `'text-primary-100'` | Tailwind color class for icon |
| `position` | `'top-right' \| 'bottom-left' \| 'top-center'` | `'top-right'` | Position on screen |
| `animation` | `'slide' \| 'fade' \| 'bounce'` | `'slide'` | Entrance animation type |
| `visible` | `boolean` | `true` | Controls visibility |
| `onClose` | `() => void` | - | Callback when close button is clicked |
| `primaryAction` | `NotificationAction` | - | Primary action button configuration |
| `secondaryAction` | `NotificationAction` | - | Secondary action button configuration |
| `autoHideDuration` | `number` | `0` | Auto-hide timeout in ms (0 = no auto-hide) |
| `className` | `string` | - | Additional CSS classes |
| `testId` | `string` | `'notification'` | Test ID for testing |

### NotificationAction

```tsx
interface NotificationAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'text';
}
```

## Accessibility

- Uses semantic `role="alert"` for screen readers
- `aria-live="polite"` for non-intrusive announcements
- Keyboard accessible close button
- Proper focus management
- Accessible button labels

## Theming

The component uses design tokens from the project's design system and automatically supports both light and dark themes:

- Background: `bg-surface`
- Border: `border-border`
- Title: `text-text-primary` (with Elza Narrow font, uppercase)
- Description: `text-text-secondary`
- Icons: Customizable via `iconColor` prop

## Examples

### Success Notification (Auto-hide)
```tsx
<Notification
  variant="basic"
  title="Success!"
  description="Your action was completed successfully."
  icon="icon-checkmark"
  iconColor="text-success-100"
  animation="bounce"
  autoHideDuration={3000}
  onClose={() => setShowNotification(false)}
/>
```

### Warning Notification
```tsx
<Notification
  variant="basic"
  title="Warning"
  description="Please review this information before proceeding."
  icon="icon-danger"
  iconColor="text-warning-100"
  position="top-center"
  animation="slide"
  onClose={() => setShowNotification(false)}
/>
```

### Error with Retry
```tsx
<Notification
  variant="actions"
  title="Error Occurred"
  description="An error occurred while processing your request."
  icon="icon-info-circle"
  iconColor="text-alerts-100"
  primaryAction={{
    label: 'Retry',
    onClick: handleRetry
  }}
  secondaryAction={{
    label: 'Dismiss',
    onClick: handleDismiss
  }}
  onClose={() => setShowNotification(false)}
/>
```

## Design System Compliance

This component follows all project design system rules:

- ✅ Uses semantic color tokens (no raw hex values)
- ✅ Typography: Elza Narrow (uppercase) for headings, Satoshi for body text
- ✅ Supports both light and dark themes
- ✅ Uses project's icon system
- ✅ Follows spacing and border radius tokens
- ✅ Matches Figma component design exactly
- ✅ Fully responsive with mobile-first approach



