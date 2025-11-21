# Pagination Component

A pagination component for navigating through pages of content with support for different sizes and customization.

## Features

- **Two Size Variants**: Default (35px) and Small (24px)
- **Smart Page Display**: Automatically shows relevant page numbers based on current page
- **Arrow Navigation**: Previous/Next buttons using IconButton component
- **Keyboard Accessible**: Full keyboard navigation support
- **Disabled States**: Arrow buttons disabled at first/last pages
- **Active State**: Clear visual indication of current page
- **Light/Dark Theme Support**: Automatically adapts to theme changes
- **Customizable**: Control max page buttons, show/hide arrows

## Usage

```tsx
import { Pagination } from '@bitcoin.com/react-cl';
import { useState } from 'react';

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | Required | Current active page (1-indexed) |
| `totalPages` | `number` | Required | Total number of pages |
| `onPageChange` | `(page: number) => void` | Required | Callback when page changes |
| `size` | `'default' \| 'small'` | `'default'` | Size variant |
| `maxPageButtons` | `number` | `7` | Maximum number of page buttons to show |
| `showArrows` | `boolean` | `true` | Whether to show previous/next arrow buttons |
| `className` | `string` | `''` | Optional CSS class name |

## Examples

### Basic Usage

```tsx
const [page, setPage] = useState(1);

<Pagination
  currentPage={page}
  totalPages={6}
  onPageChange={setPage}
/>
```

### Small Size

```tsx
<Pagination
  currentPage={page}
  totalPages={6}
  onPageChange={setPage}
  size="small"
/>
```

### Without Arrow Buttons

```tsx
<Pagination
  currentPage={page}
  totalPages={6}
  onPageChange={setPage}
  showArrows={false}
/>
```

### Custom Max Page Buttons

```tsx
<Pagination
  currentPage={page}
  totalPages={20}
  onPageChange={setPage}
  maxPageButtons={5}
/>
```

### With Content

```tsx
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;
const totalItems = 100;
const totalPages = Math.ceil(totalItems / itemsPerPage);

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentItems = allItems.slice(startIndex, endIndex);

return (
  <div>
    <div className="content">
      {currentItems.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
    
    <div className="flex justify-center mt-l">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  </div>
);
```

## Size Variants

### Default (35px)
- Button size: 35x35px
- Icon size: Medium (18px)
- Font size: 16px
- Best for desktop interfaces

### Small (24px)
- Button size: 24x24px
- Icon size: Small (12px)
- Font size: 12px
- Best for compact spaces and mobile

## Behavior

### Smart Page Display
When there are more pages than `maxPageButtons`, the component intelligently shows:
- Pages around the current page
- Keeps current page centered when possible
- Adjusts range at the beginning and end

Example with `maxPageButtons={7}` and `totalPages={20}`:
- Current page 1: Shows 1, 2, 3, 4, 5, 6, 7
- Current page 5: Shows 2, 3, 4, 5, 6, 7, 8
- Current page 10: Shows 7, 8, 9, 10, 11, 12, 13
- Current page 20: Shows 14, 15, 16, 17, 18, 19, 20

### Navigation
- **Previous button**: Disabled on first page
- **Next button**: Disabled on last page
- **Page buttons**: Current page is styled as active and disabled
- **Click handling**: Only triggers `onPageChange` if page number changes

## Accessibility

- **ARIA labels**: Previous/Next buttons have descriptive labels
- **aria-current**: Active page marked with `aria-current="page"`
- **Keyboard navigation**: All buttons are keyboard accessible
- **Disabled states**: Proper disabled attributes on buttons
- **Semantic HTML**: Uses native button elements

## Design System Integration

This component follows the Bitcoin.com design system:
- Uses IconButton component for arrow buttons
- Uses design tokens for colors and spacing
- Uses Satoshi Variable font family
- Supports both light and dark themes
- Matches Figma design specifications

## Dark Mode

The component automatically supports dark mode through CSS variables:
- Background colors adjust via theme tokens
- Border colors adapt automatically
- Text colors use shade tokens that invert in dark mode
- Arrow buttons inherit dark mode from IconButton component

```tsx
<div className="dark" data-theme="dark">
  <Pagination
    currentPage={page}
    totalPages={10}
    onPageChange={setPage}
  />
</div>
```

## Performance

- Efficient page number calculation
- Memoization opportunities with React.memo if needed
- No unnecessary re-renders
- Lightweight with minimal dependencies

