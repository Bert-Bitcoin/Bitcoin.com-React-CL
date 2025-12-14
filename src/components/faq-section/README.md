# FAQSection Component

A responsive FAQ section component that displays frequently asked questions using an accordion layout.

## Features

- **Responsive Layout**: Desktop shows heading and accordion side-by-side, mobile stacks them vertically
- **Accordion Integration**: Uses the existing Accordion component for collapsible FAQ items
- **Style Variants**: Three background styles (light, gray, dark)
- **Theme Support**: Auto, light, or dark theme modes
- **Customizable**: Configurable heading, expandable items, and multi-expand behavior
- **Website Section Rules**: Follows responsive padding and heading typography standards

## Usage

```tsx
import { FAQSection } from '@bitcoin-portal/design-system';

const faqItems = [
  {
    id: '1',
    title: 'How do I buy Bitcoin?',
    content: 'You can buy Bitcoin through our platform by...'
  },
  {
    id: '2',
    title: 'What is self-custody?',
    content: 'Self-custody means you control your own private keys...'
  }
];

function MyPage() {
  return (
    <FAQSection
      style="light"
      heading="FAQ"
      items={faqItems}
      defaultExpanded={['1']}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `themeMode` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Theme mode for the section |
| `style` | `'light' \| 'gray' \| 'dark'` | `'light'` | Background style variant |
| `heading` | `string` | `'FAQ'` | Section heading text |
| `items` | `AccordionItemData[]` | required | Array of FAQ items |
| `defaultExpanded` | `string[]` | `[]` | Initially expanded item IDs |
| `allowMultiple` | `boolean` | `true` | Allow multiple items expanded |
| `className` | `string` | `undefined` | Additional CSS classes |

## Style Variants

### Light
White background with black text - ideal for standard page sections.

### Gray
Light gray background with black text - provides visual separation between sections.

### Dark
Black background with white text - creates high contrast and modern aesthetic.

## Responsive Behavior

- **Mobile**: Heading and accordion stack vertically
- **Tablet**: Similar to mobile with increased padding
- **Desktop**: Heading on left, accordion on right (max-width: 800px for accordion)

## Accessibility

- Uses semantic `<section>` element
- Heading uses proper `<h2>` with Elza Narrow font
- Inherits accordion accessibility features (keyboard navigation, ARIA attributes)

## Design System Integration

This component follows the project's design system rules:
- Uses Elza Narrow font for heading with uppercase transformation
- Applies responsive section padding (32px mobile → 80px desktop)
- Integrates with existing Accordion component
- Uses semantic color tokens from the design system
- No manual dark mode classes needed (handled by tokens)

## Related Components

- [Accordion](../accordion/README.md) - The underlying accordion component
- [NewsSection](../news-section/README.md) - Similar section component pattern
- [CardsSection](../cards-section/README.md) - Another website section component
