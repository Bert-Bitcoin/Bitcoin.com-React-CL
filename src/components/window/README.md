# Window Component

A flexible overlay component that displays content in a centered dialog with a header, close button, and scrollable content area.

## Features

- **Overlay Display**: Appears on top of page content with a semi-transparent backdrop
- **Scrollable Content**: Content area automatically becomes scrollable when content exceeds available height
- **Responsive**: Maximum height of 90vh on desktop and tablet, centered on screen
- **Keyboard Support**: Press ESC to close the window
- **Backdrop Click**: Optional closing when clicking outside the window
- **Animations**: Smooth bounce-in animation on open
- **Accessibility**: Full ARIA support with proper dialog roles
- **Theme Support**: Works seamlessly with light and dark themes
- **Customizable**: Support for custom styling via className props

## Usage

```tsx
import { Window } from '@bitcoin.com/components';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Window</button>
      <Window
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Window Title"
      >
        <div className="p-m">
          <p>Your content goes here</p>
        </div>
      </Window>
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controls whether the window is visible |
| `onClose` | `() => void` | - | Callback function when the window should close |
| `title` | `string` | - | The title text displayed in the window header |
| `children` | `ReactNode` | - | The content to be displayed in the scrollable content area |
| `showCloseButton` | `boolean` | `true` | Whether to show the close button in the header |
| `closeOnBackdropClick` | `boolean` | `true` | Whether clicking the backdrop should close the window |
| `className` | `string` | - | Additional CSS classes for the window container |
| `contentClassName` | `string` | - | Additional CSS classes for the content area |

## Examples

### Basic Window

```tsx
<Window
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Basic Window"
>
  <div className="p-m">
    <p>Simple content</p>
  </div>
</Window>
```

### Window with Long Scrollable Content

```tsx
<Window
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Scrollable Content"
>
  <div className="p-m">
    {Array.from({ length: 20 }, (_, i) => (
      <p key={i} className="mb-4">
        Paragraph {i + 1}: Lorem ipsum...
      </p>
    ))}
  </div>
</Window>
```

### Window with Form

```tsx
<Window
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Contact Form"
>
  <div className="p-m">
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message" />
      <button type="submit">Submit</button>
    </form>
  </div>
</Window>
```

### Window Without Close Button

```tsx
<Window
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmation Required"
  showCloseButton={false}
  closeOnBackdropClick={false}
>
  <div className="p-m">
    <p>You must confirm or cancel to close this window.</p>
    <button onClick={() => setIsOpen(false)}>Cancel</button>
    <button onClick={handleConfirm}>Confirm</button>
  </div>
</Window>
```

### Custom Styled Window

```tsx
<Window
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Custom Window"
  className="max-w-[600px]"
  contentClassName="bg-shades-off-white dark:bg-shades-extra-dark"
>
  <div className="p-l">
    <p>Content with custom background</p>
  </div>
</Window>
```

## Behavior

### Opening and Closing

- The window is controlled via the `open` prop
- Use the `onClose` callback to handle close events
- Window can be closed via:
  - Close button (X) in header
  - ESC key
  - Clicking the backdrop (if `closeOnBackdropClick` is true)

### Scrolling

- The window has a maximum height of 90vh
- When content exceeds this height, the content area becomes scrollable
- The header remains fixed at the top

### Body Scroll Lock

- When the window is open, body scrolling is disabled to prevent background scroll
- Scrolling is restored when the window closes

### Animations

The window features a smooth bounce-in entrance animation:

```css
@keyframes bounceIn {
  0% { transform: scale(0.6); opacity: 0; }
  50% { transform: scale(1.01); opacity: 1; }
  70% { transform: scale(0.9); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
```

## Accessibility

- Uses proper ARIA dialog roles
- Includes `aria-modal="true"` for screen readers
- ESC key support for keyboard users
- Focus management
- Descriptive aria-label for close button

## Design Tokens

The window uses the following design system tokens:

- **Colors**: `shades-white`, `shades-black`, `shades-light`, `shades-dark`
- **Spacing**: `s` (8px), `m` (16px), `l` (24px)
- **Border Radius**: `md` (16px)
- **Typography**: Elza Narrow font for title (16px, uppercase)
- **Shadow**: `shadow-xl` for elevation

## Responsive Behavior

- Mobile: Full width with padding, max-width 800px
- Tablet: Centered, max-width 800px, 90vh max height
- Desktop: Centered, max-width 800px, 90vh max height

## Dark Mode

The window automatically adapts to dark mode:
- Background: `dark:bg-shades-black`
- Border: `dark:border-shades-extra-light`
- Text: `dark:text-shades-white`
- Close button: `dark:text-shades-mid`

## Best Practices

1. **Always provide an onClose handler** - Users expect to be able to close windows
2. **Use descriptive titles** - Help users understand the window's purpose
3. **Manage state properly** - Use React state to control open/closed state
4. **Consider mobile** - Ensure content works well on small screens
5. **Provide actions** - Include clear actions (buttons) within the window content
6. **Don't nest windows** - Avoid opening windows within windows
7. **Use appropriate content** - Keep content focused and relevant

## Related Components

- **Modal**: For simple confirmation dialogs with pre-defined layouts
- **Notification**: For toast-style notifications
- **Sidebar**: For slide-in side panels
- **Table**: Can be used within window content for displaying tabular data

