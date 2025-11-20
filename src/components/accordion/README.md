# Accordion Component

A collapsible content component based on the Bitcoin.com design system.

## Features

- ✅ Multiple or single item expansion modes
- ✅ Keyboard navigation support (Enter/Space to toggle)
- ✅ Customizable with design tokens
- ✅ Accessible ARIA attributes
- ✅ Smooth animations
- ✅ TypeScript support

## Usage

```tsx
import { Accordion } from '@bitcoin-com/react-component-library';

const items = [
  {
    id: '1',
    title: 'Buy Bitcoin',
    content: 'Your content here...'
  },
  {
    id: '2',
    title: 'Self-Custody',
    content: 'Your content here...'
  }
];

function MyComponent() {
  return (
    <Accordion 
      items={items}
      defaultExpanded={['1']}
      allowMultiple={true}
      allowToggle={true}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccordionItemData[]` | required | Array of accordion items to display |
| `defaultExpanded` | `string[]` | `[]` | Array of initially expanded item IDs |
| `allowMultiple` | `boolean` | `true` | Allow multiple items to be expanded at once |
| `allowToggle` | `boolean` | `true` | Allow all items to be collapsed |
| `className` | `string` | - | Optional CSS class name |
| `onChange` | `(expandedIds: string[]) => void` | - | Callback when an item is expanded/collapsed |

## AccordionItemData

```tsx
interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
}
```

## Design System Integration

This component follows the Bitcoin.com design system:
- Uses `secondary-100` (#ff9500) for icon buttons
- Uses Satoshi Variable font (Medium weight)
- Title: 16px font size
- Content: 12px font size
- Spacing: Design tokens (m=16px, xs=4px)
- Border radius: 40px for icon buttons
- Divider: Extra light shade (#f0f0f5)

## Icons

- Add icon (`icon-add`) - for collapsed items
- Remove icon (`icon-remove`) - for expanded items

## Storybook

View examples in Storybook under `Components/Content/Accordion`

## Styling

The component uses consistent colors from the design system in both light and dark modes.

