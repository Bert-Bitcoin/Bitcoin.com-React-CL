# CardsSection Component

A responsive website section component that displays cards with icons, titles, optional descriptions, and optional action buttons. Supports both 3-card and 6-card grid layouts with three visual styles.

## Features

- **Responsive Grid Layout**: Automatically adjusts from 1 column (mobile) to 2 columns (tablet, 6-card layout) to 3 columns (desktop)
- **Three Visual Styles**: Light, Gray, and Black background styles
- **Flexible Content**: Each card can have optional descriptions and action buttons
- **Icon Support**: Integrates with the mini-illustrations component library
- **Accessible**: Semantic HTML and proper heading hierarchy
- **Design System Compliant**: Uses semantic tokens and follows project typography rules

## Usage

```tsx
import { CardsSection } from '@/components/cards-section';
import { BitcoinCreditCardsIllustration } from '@/components/mini-illustrations';

function MyPage() {
  const cards = [
    {
      id: '1',
      icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
      title: 'Free Crypto Credit Cards',
      description: 'A short summary of what this card is about',
      action: {
        label: 'Learn More',
        onClick: () => console.log('Card clicked')
      }
    },
    // ... more cards
  ];

  return (
    <CardsSection
      style="light"
      heading="Our Services"
      cards={cards}
      layout={3}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `themeMode` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Theme mode override for the section wrapper |
| `style` | `'light' \| 'gray' \| 'black'` | `'light'` | Visual style of the section |
| `heading` | `string` | `'Cards'` | Section heading (displayed in uppercase using Elza Narrow) |
| `cards` | `CardItem[]` | `[]` | Array of cards to display |
| `layout` | `3 \| 6` | `3` | Number of cards per row on desktop |
| `className` | `string` | `undefined` | Additional CSS classes |

## Card Item Structure

Each card in the `cards` array has the following structure:

```typescript
interface CardItem {
  id: string;
  icon: ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}
```

- **id**: Unique identifier for the card (required)
- **icon**: Icon/illustration component to display (required)
- **title**: Card title displayed in uppercase using Elza Narrow (required)
- **description**: Optional descriptive text using Satoshi Variable
- **action**: Optional action button configuration

### Important: Consistent Card Configuration

**All cards within a CardsSection should have the same structure.** Either all cards have descriptions or none do, and either all cards have action buttons or none do. Mixed configurations (where some cards have descriptions/actions and others don't) are not supported and will result in inconsistent layouts.

## Styles

### Light Style
- Background: White (`bg-shades-white`)
- Cards: Extra Light background (`bg-shades-extra-light`)
- Text: Black titles, semi-dark descriptions

### Gray Style
- Background: Extra Light (`bg-shades-extra-light`)
- Cards: Extra Light background (`bg-shades-extra-light`)
- Text: Black titles, semi-dark descriptions

### Black Style
- Background: Black (`bg-shades-black`)
- Cards: White background (`bg-shades-white`)
- Text: Black titles, semi-dark descriptions
- Heading: White

## Layouts

### 3-Card Layout
- **Mobile**: 1 column
- **Tablet**: 1 column
- **Desktop**: 3 columns

### 6-Card Layout
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns

## Responsive Behavior

The component follows the project's website section standards:

- **Vertical Padding**:
  - Mobile: `32px`
  - Small: `40px`
  - Medium: `60px`
  - Large: `80px`

- **Horizontal Padding**:
  - Mobile: `m` token (`16px`)
  - Medium+: `xl` token (`80px`)

- **Content Width**:
  - Maximum: `1240px`
  - Centered with auto margins

## Typography

- **Section Heading**: 
  - Font: Elza Narrow
  - Sizes: 32px (mobile) → 44px (tablet) → 70px (desktop)
  - Transform: Uppercase
  - Line height: None

- **Card Titles**:
  - Font: Elza Narrow
  - Sizes: 28px (mobile) → 32px (tablet) → 40px (desktop)
  - Transform: Uppercase
  - Line height: None

- **Card Descriptions**:
  - Font: Satoshi Variable Medium
  - Size: 18px
  - Line height: Snug

## Examples

### Basic 3-Card Layout

```tsx
<CardsSection
  style="light"
  heading="Our Services"
  cards={threeCards}
  layout={3}
/>
```

### 6-Card Layout with Gray Background

```tsx
<CardsSection
  style="gray"
  heading="Features"
  cards={sixCards}
  layout={6}
/>
```

### Cards Without Descriptions

```tsx
const simpleCards = [
  {
    id: '1',
    icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
    title: 'Free Crypto Credit Cards',
    action: {
      label: 'Learn More',
      onClick: handleClick
    }
  }
  // ... more cards
];

<CardsSection
  style="light"
  heading="Quick Links"
  cards={simpleCards}
  layout={3}
/>
```

### Cards Without Action Buttons

```tsx
const infoCards = [
  {
    id: '1',
    icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
    title: 'Free Crypto Credit Cards',
    description: 'Learn about our credit card offerings'
  }
  // ... more cards (all without action buttons)
];

<CardsSection
  style="light"
  heading="Information"
  cards={infoCards}
  layout={3}
/>
```

## Design System Compliance

This component follows all project rules:

✅ Uses semantic tokens only (no hardcoded colors)  
✅ Elza Narrow font with uppercase for headings  
✅ Responsive padding and layout  
✅ Maximum content width: 1240px  
✅ Reuses existing Button component  
✅ Supports theme modes  
✅ Semantic HTML structure  
✅ Proper TypeScript typing  

## Accessibility

- Uses semantic `<section>` element
- Proper heading hierarchy (`<h2>` for section, `<h3>` for cards)
- Button elements for actions
- Responsive and keyboard-accessible

## Integration with Figma

Based on the Figma design:
- [Cards Section Design](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18082-3099)

The component implements all variations defined in the Figma file including different sizes (Desktop, Tablet, Mobile), styles (Light, Gray, Black), and layouts (3 cards, 6 cards).
