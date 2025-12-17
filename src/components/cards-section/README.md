# CardsSection Component

A responsive website section component that displays cards with icons, titles, optional descriptions, and optional action buttons. Supports both 3-card and 6-card grid layouts with three visual styles.

## Features

- **Responsive Grid Layout**: Automatically adjusts from 1 column (mobile) to 2 columns (tablet, 6-card layout) to 3 columns (desktop)
- **Three Visual Styles**: Light, Gray, and Black background styles
- **Flexible Content**: Each card can have optional descriptions and action buttons
- **Custom Content Injection**: Add custom HTML/components at the start or end of each card
- **Customizable Button Variants**: Choose from multiple button styles per card
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
| `description` | `string` | `undefined` | Optional description text displayed under the heading |
| `cards` | `CardItem[]` | `[]` | Array of cards to display |
| `layout` | `3 \| 6` | `3` | Number of cards per row on desktop |
| `className` | `string` | `undefined` | Additional CSS classes |
| `id` | `string` | `undefined` | Optional ID for the section element (useful for anchor links and SEO) |
| `removeTopPadding` | `boolean` | `false` | Remove top padding - useful when stacking sections with the same style |

## Card Item Structure

Each card in the `cards` array has the following structure:

```typescript
interface CardItem {
  id: string;
  icon?: ReactNode;
  title: string;
  description?: string;
  customContentStart?: ReactNode;
  customContentEnd?: ReactNode;
  action?: {
    label: string;
    onClick: () => void;
    variant?: ButtonVariant; // 'primary' | 'secondary' | 'default' | 'text' | 'link' | 'strong'
  };
}
```

- **id**: Unique identifier for the card (required)
- **icon**: Icon/illustration component to display (optional)
- **title**: Card title displayed in uppercase using Elza Narrow (required)
- **description**: Optional descriptive text using Satoshi Variable
- **customContentStart**: Optional custom content to inject at the start of the card (before icon)
- **customContentEnd**: Optional custom content to inject at the end of the card (after button)
- **action**: Optional action button configuration
  - **label**: Button text (required)
  - **onClick**: Click handler (required)
  - **variant**: Button style variant (optional, defaults to 'secondary')

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
- **Tablet**: 2 columns (2 cards on row 1, 1 card on row 2)
- **Desktop**: 3 columns (all cards in one row)

### 6-Card Layout
- **Mobile**: 1 column
- **Tablet**: 2 columns (3 rows of 2 cards each)
- **Desktop**: 3 columns (2 rows of 3 cards each)

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

### Cards with Custom Content at Start

```tsx
import { Pill } from '@/components/pill';

const cardsWithBadges = [
  {
    id: '1',
    icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
    title: 'Premium Credit Cards',
    description: 'Exclusive benefits and rewards',
    customContentStart: (
      <div className="flex justify-end">
        <Pill type="green">Popular</Pill>
      </div>
    ),
    action: {
      label: 'Learn More',
      onClick: handleClick
    }
  }
  // ... more cards
];

<CardsSection
  style="light"
  heading="Featured Services"
  cards={cardsWithBadges}
  layout={3}
/>
```

### Cards with Custom Content at End

```tsx
const cardsWithStats = [
  {
    id: '1',
    icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
    title: 'Free Crypto Credit Cards',
    description: 'A short summary',
    action: {
      label: 'Learn More',
      onClick: handleClick
    },
    customContentEnd: (
      <div className="text-sm text-shades-semi-dark pt-s border-t">
        <div className="flex justify-between">
          <span>Active Users:</span>
          <span className="font-['IBMPlexSans'] font-semibold">10,234</span>
        </div>
      </div>
    )
  }
  // ... more cards
];

<CardsSection
  style="gray"
  heading="Service Statistics"
  cards={cardsWithStats}
  layout={3}
/>
```

### Cards with Different Button Variants

```tsx
const cardsWithVariants = [
  {
    id: '1',
    icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
    title: 'Basic Plan',
    description: 'Perfect for getting started',
    action: {
      label: 'Get Started',
      onClick: handleClick,
      variant: 'default' // Gray/default button
    }
  },
  {
    id: '2',
    icon: <BitcoinGambleIllustration className="w-full h-full" />,
    title: 'Pro Plan',
    description: 'Advanced features',
    action: {
      label: 'Upgrade Now',
      onClick: handleClick,
      variant: 'primary' // Primary/accent button
    }
  },
  {
    id: '3',
    icon: <BitcoinHandsWalletIllustration className="w-full h-full" />,
    title: 'Enterprise Plan',
    description: 'Complete solution',
    action: {
      label: 'Contact Sales',
      onClick: handleClick,
      variant: 'strong' // Strong/emphasized button
    }
  }
];

<CardsSection
  style="light"
  heading="Choose Your Plan"
  cards={cardsWithVariants}
  layout={3}
/>
```

### Cards with Placeholder Images

```tsx
const articlesWithImages = [
  {
    id: '1',
    title: 'Getting Started with Bitcoin',
    description: 'Learn the fundamentals of Bitcoin',
    customContentStart: (
      <div className="w-full aspect-[360/200] bg-gradient-to-br from-[#0052FF] to-[#0041CC] rounded-[8px] overflow-hidden mb-s flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-[48px] mb-2">₿</div>
          <div className="font-['Satoshi_Variable'] font-semibold text-sm">Bitcoin Basics</div>
        </div>
      </div>
    ),
    action: {
      label: 'Read Article',
      onClick: handleClick,
      variant: 'secondary'
    }
  }
  // ... more cards
];

<CardsSection
  style="light"
  heading="Featured Articles"
  description="Explore our latest articles with featured images"
  cards={articlesWithImages}
  layout={3}
/>
```

### Stacked Sections Without Top Padding

When stacking multiple sections with the same style, use `removeTopPadding` on subsequent sections to eliminate the gap:

```tsx
// First section - normal padding
<CardsSection
  style="light"
  heading="First Section"
  cards={firstCards}
  layout={3}
/>

// Second section - remove top padding to eliminate gap
<CardsSection
  style="light"
  heading="Second Section"
  cards={secondCards}
  layout={3}
  removeTopPadding={true}  // Removes top padding
/>
```

**When to use:**
- Stacking sections with the same background style
- Creating continuous content flow
- Reducing visual gaps between related sections

**When NOT to use:**
- Sections with different background styles (the gap helps separate them)
- First section on a page (should have normal top padding)

### Cards with All Custom Features Combined

```tsx
const premiumCards = [
  {
    id: '1',
    icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
    title: 'Premium Credit Cards',
    description: 'Exclusive benefits and rewards',
    customContentStart: (
      <div className="flex justify-between items-center">
        <Pill type="green">Best Value</Pill>
        <span className="text-xs">Save 20%</span>
      </div>
    ),
    action: {
      label: 'Subscribe Now',
      onClick: handleClick,
      variant: 'primary'
    },
    customContentEnd: (
      <div className="text-xs text-shades-semi-light pt-s border-t">
        ⭐ 4.8/5 rating from 2,345 users
      </div>
    )
  }
  // ... more cards
];

<CardsSection
  style="black"
  heading="Premium Features"
  cards={premiumCards}
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

