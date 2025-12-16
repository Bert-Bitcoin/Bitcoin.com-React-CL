# ListItem Avatar Integration

## Overview

The `ListItem` component has been updated to support `Avatar` instances in the illustration area, allowing for user profile displays with images, initials, or placeholder icons.

## Changes Made

### 1. Type Definitions (`ListItem.types.ts`)

**Added:**
- Import of `AvatarProps` type
- New `ListItemAvatarConfig` interface
- Added `'avatar'` to the `ListItemIllustrationType` union type
- Updated `illustration` prop to accept `ListItemAvatarConfig`

```typescript
export interface ListItemAvatarConfig {
  avatarProps: Omit<AvatarProps, 'size'>;
}

export type ListItemIllustrationType = 
  | 'mini-illustration' 
  | 'icon' 
  | 'asset-icon' 
  | 'avatar';
```

**Note:** The `size` prop is omitted from `avatarProps` because the ListItem automatically sets the appropriate avatar size based on its own size prop:
- `size="default"` → Avatar size `"large"` (38px) - fits in 40px container
- `size="compact"` → Avatar size `"small"` (24px) - fits in 28px container

### 2. Component Implementation (`ListItem.tsx`)

**Added:**
- Import of `Avatar` component
- Import of `ListItemAvatarConfig` type
- New rendering case for `illustrationType === 'avatar'`

```typescript
{illustrationType === 'avatar' && (
  <Avatar
    {...(illustration as ListItemAvatarConfig).avatarProps}
    size={size === 'default' ? 'large' : 'default'}
  />
)}
```

### 3. Exports (`index.ts`)

**Added:**
- Export of `ListItemAvatarConfig` type

### 4. Storybook Stories (`ListItem.stories.tsx`)

**Added 4 new comprehensive stories:**

1. **WithAvatarImages** - Demonstrates user list with profile photos
2. **WithAvatarInitials** - Shows team members with colored initial avatars
3. **WithAvatarPlaceholders** - Contact list with placeholder avatars in various colors
4. **WithAvatarCompact** - Mixed avatar types in compact size variant

## Usage Examples

### Image Avatar

```tsx
<ListItem
  illustration={{
    avatarProps: {
      type: 'image',
      src: 'https://example.com/photo.jpg',
      alt: 'John Smith'
    }
  }}
  illustrationType="avatar"
  leftContent={{
    title: 'John Smith',
    description: 'john@example.com'
  }}
/>
```

### Initials Avatar

```tsx
<ListItem
  illustration={{
    avatarProps: {
      type: 'initials',
      initials: 'JD',
      backgroundColor: 'primary-50'
    }
  }}
  illustrationType="avatar"
  leftContent={{
    title: 'Jane Doe',
    description: 'Product Manager'
  }}
/>
```

### Placeholder Avatar

```tsx
<ListItem
  illustration={{
    avatarProps: {
      type: 'placeholder',
      backgroundColor: 'extra-cyan-50'
    }
  }}
  illustrationType="avatar"
  leftContent={{
    title: 'Guest User',
    description: 'guest@example.com'
  }}
/>
```

### Compact Size

```tsx
<ListItem
  size="compact"
  illustration={{
    avatarProps: {
      type: 'initials',
      initials: 'TM',
      backgroundColor: 'extra-gold-50'
    }
  }}
  illustrationType="avatar"
  leftContent={{
    title: 'Tom Martinez',
    description: 'Away'
  }}
/>
```

## Size Mapping

The ListItem automatically maps its size to the appropriate Avatar size:

| ListItem Size | Container Size | Avatar Size | Avatar Dimensions |
|---------------|----------------|-------------|-------------------|
| `default`     | 40px           | `large`     | 38px              |
| `compact`     | 28px           | `small`     | 24px              |

This ensures avatars remain perfectly circular and fit properly within the list item layout.

## Available Avatar Configurations

### Type Options
- `'image'` - Display a profile photo (requires `src` prop)
- `'initials'` - Show user initials (requires `initials` prop)
- `'placeholder'` - Show user icon placeholder

### Background Colors (for initials and placeholder)
All 12 design system 50-shade colors:
- `primary-50`, `secondary-50`, `success-50`, `alerts-50`
- `extra-cyan-50`, `extra-violet-50`, `extra-navy-50`, `extra-gold-50`
- `extra-yellow-50`, `extra-pink-50`, `extra-green-50`, `extra-purple-50`

## Use Cases

The avatar integration is perfect for:

- **User Lists** - Display team members, contacts, or participants
- **Contact Management** - Show user profiles with various states
- **Activity Feeds** - Show who performed actions
- **Chat/Messaging** - Display conversation participants
- **Team Dashboards** - Show team member information
- **Admin Panels** - User management interfaces

## Compatibility

✅ Works with all ListItem features:
- Number badges
- Indicators
- Button areas
- Right content
- Custom content
- Hover states
- Click handlers
- Dividers

✅ Works with both size variants:
- Default
- Compact

✅ Fully typed with TypeScript
✅ No breaking changes to existing ListItem API
✅ Builds successfully
✅ No linter errors

## Testing

The integration has been verified with:
- ✅ All three avatar types (image, initials, placeholder)
- ✅ Both ListItem sizes (default, compact)
- ✅ Multiple background colors
- ✅ Combined with indicators and buttons
- ✅ TypeScript compilation
- ✅ Linter checks
- ✅ Build process

## Notes

- The `size` prop is intentionally omitted from `avatarProps` to prevent size conflicts
- Avatar sizes are optimized for list item layouts
- All avatar types maintain consistent alignment and spacing
- The integration follows the existing ListItem pattern for other illustration types

