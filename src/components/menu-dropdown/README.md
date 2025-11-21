# MenuDropdown Component

A dropdown menu component with smart positioning, keyboard navigation, and mobile support.

## Features

- **Smart Positioning**: Automatically positions the menu to stay within viewport bounds
- **Mobile-Friendly**: Adapts positioning for mobile devices  
- **Icon Support**: Optional icons for menu items
- **Sections with Dividers**: Group menu items into logical sections
- **Keyboard Navigation**: Close menu with Escape key
- **Click Outside to Close**: Automatically closes when clicking outside
- **Custom Trigger**: Use any element as the trigger button
- **Disabled Items**: Support for disabled menu items
- **Danger Variant**: Special styling for destructive actions (e.g., delete)
- **Light/Dark Theme Support**: Automatically adapts to theme changes

## Usage

```tsx
import { MenuDropdown } from '@bitcoin.com/react-cl';

// Basic usage with icons
<MenuDropdown
  sections={[
    {
      items: [
        {
          id: 'read',
          label: 'Read',
          icon: 'icon-book-saved',
          onClick: () => console.log('Read')
        },
        {
          id: 'duplicate',
          label: 'Duplicate',
          icon: 'icon-copy',
          onClick: () => console.log('Duplicate')
        }
      ]
    },
    {
      items: [
        {
          id: 'delete',
          label: 'Delete',
          icon: 'icon-delete',
          variant: 'danger',
          onClick: () => console.log('Delete')
        }
      ]
    }
  ]}
/>
```

## Props

### MenuDropdownProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sections` | `MenuDropdownSection[]` | Required | Array of menu sections |
| `trigger` | `ReactNode` | Default button | Custom trigger element |
| `position` | `'auto' \| 'bottom-left' \| 'bottom-right' \| 'top-left' \| 'top-right'` | `'auto'` | Menu position |
| `className` | `string` | `''` | CSS class for trigger container |
| `menuClassName` | `string` | `''` | CSS class for menu |
| `onOpen` | `() => void` | - | Callback when menu opens |
| `onClose` | `() => void` | - | Callback when menu closes |

### MenuDropdownItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | Required | Unique identifier |
| `label` | `string` | Required | Label text |
| `icon` | `string` | - | Optional icon name |
| `disabled` | `boolean` | `false` | Whether item is disabled |
| `onClick` | `() => void` | - | Click handler |
| `variant` | `'default' \| 'danger'` | `'default'` | Visual variant |

### MenuDropdownSection

| Prop | Type | Description |
|------|------|-------------|
| `items` | `MenuDropdownItem[]` | Items in the section |

## Examples

### Without Icons

```tsx
<MenuDropdown
  sections={[
    {
      items: [
        { id: 'edit', label: 'Edit', onClick: () => {} },
        { id: 'duplicate', label: 'Duplicate', onClick: () => {} },
        { id: 'share', label: 'Share', onClick: () => {} }
      ]
    }
  ]}
/>
```

### Custom Trigger

```tsx
import { Button, Icon } from '@bitcoin.com/react-cl';

<MenuDropdown
  trigger={
    <Button variant="secondary" size="md">
      <Icon type="icon-more" size="sm" />
    </Button>
  }
  sections={[
    {
      items: [
        { id: 'settings', label: 'Settings', icon: 'icon-setting' },
        { id: 'profile', label: 'Profile', icon: 'icon-profile' }
      ]
    }
  ]}
/>
```

### With Disabled Items

```tsx
<MenuDropdown
  sections={[
    {
      items: [
        { id: 'available', label: 'Available', onClick: () => {} },
        { id: 'disabled', label: 'Disabled', disabled: true },
        { id: 'another', label: 'Another', onClick: () => {} }
      ]
    }
  ]}
/>
```

### Fixed Position

```tsx
<MenuDropdown
  position="bottom-right"
  sections={[
    {
      items: [
        { id: 'option1', label: 'Option 1', icon: 'icon-star' },
        { id: 'option2', label: 'Option 2', icon: 'icon-heart' }
      ]
    }
  ]}
/>
```

### Danger Actions

```tsx
<MenuDropdown
  sections={[
    {
      items: [
        { id: 'edit', label: 'Edit', icon: 'icon-edit' },
        { id: 'share', label: 'Share', icon: 'icon-share' }
      ]
    },
    {
      items: [
        {
          id: 'delete',
          label: 'Delete',
          icon: 'icon-trash',
          variant: 'danger',
          onClick: () => window.confirm('Are you sure?')
        }
      ]
    }
  ]}
/>
```

## Smart Positioning

The `position="auto"` prop (default) intelligently positions the menu based on:

1. **Available viewport space**: Checks space above, below, left, and right
2. **Mobile optimization**: Prefers right-aligned on small screens
3. **Fallback logic**: Uses the side with the most available space

Manual positions:
- `bottom-left`: Menu opens below trigger, aligned to left edge
- `bottom-right`: Menu opens below trigger, aligned to right edge  
- `top-left`: Menu opens above trigger, aligned to left edge
- `top-right`: Menu opens above trigger, aligned to right edge

## Mobile Support

The component includes mobile-friendly features:

- Touch-optimized hit areas (minimum 44x44px)
- Automatic positioning to stay within small viewports
- Proper z-index layering
- Click outside to close (works with touch events)

## Keyboard Navigation

- **Escape**: Close the menu
- **Click outside**: Close the menu
- **Enter/Space**: Trigger menu items

## Accessibility

- Semantic button elements
- Disabled state support
- Keyboard navigation
- Focus management
- ARIA-friendly structure

## Design System Integration

This component follows the Bitcoin.com design system:
- Uses design tokens for colors and spacing
- Integrates with the Icon component
- Uses Satoshi Variable font family
- Supports both light and dark themes
- Matches Figma design specifications

