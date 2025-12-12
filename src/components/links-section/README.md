# LinksSection Component

A website section component for displaying a grid of link cards with icons, titles, descriptions, and "Read More" links.

## Features

- **Flexible Layouts**: Supports 3, 4, or 6 link items with responsive grid layouts
- **Visual Styles**: Three pre-configured styles (light, gray, dark)
- **Icon Integration**: Uses mini-illustrations from the design system
- **Responsive Design**: Optimized layouts for mobile, tablet, and desktop
- **Semantic HTML**: Proper use of anchor tags and buttons
- **Theme Support**: Auto, light, and dark theme modes

## Usage

```tsx
import { LinksSection } from '@bitcoin-portal/design-system';
import { BitcoinCreditCardsIllustration } from '@bitcoin-portal/design-system/mini-illustrations';

const links = [
  {
    id: '1',
    icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
    title: 'Bitcoin Credit Cards',
    description: 'A short article summary of an article and why you should read.',
    href: '/credit-cards'
  },
  // ... more links
];

function MyPage() {
  return (
    <LinksSection
      style="light"
      heading="Useful Links"
      links={links}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `themeMode` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Theme mode override |
| `style` | `'light' \| 'gray' \| 'dark'` | `'light'` | Visual style of the section |
| `heading` | `string` | `'Links'` | Section heading text |
| `links` | `LinkItem[]` | `[]` | Array of link items to display |
| `className` | `string` | - | Additional CSS classes |

## LinkItem Type

```tsx
interface LinkItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
}
```

## Layout Behavior

The component automatically adjusts the grid layout based on the number of links:

- **3 links**: Single row on desktop (3 columns)
- **4 links**: 2x2 grid on desktop (2 columns)
- **6 links**: 2x3 grid on desktop (3 columns)

### Responsive Breakpoints

- **Mobile**: Single column layout
- **Tablet (md)**: 1-2 columns depending on link count
- **Desktop (lg)**: 2-3 columns depending on link count

## Styling

The component uses three pre-configured visual styles:

### Light Style
- White background
- Light gray link cards
- Black text

### Gray Style
- Light gray background
- White link cards
- Black text

### Dark Style
- Black background
- Dark gray link cards
- White text

## Accessibility

- Semantic HTML with proper `<a>` and `<button>` elements
- Proper heading hierarchy (`<h2>` for section title, `<h3>` for link titles)
- Icon includes `aria-hidden` attribute
- Interactive elements have appropriate hover states

## Design Tokens

The component uses semantic design tokens from the design system:

- **Typography**: Elza Narrow for headings, Satoshi Variable for body text
- **Spacing**: `m`, `l`, `s`, `xs` tokens for consistent spacing
- **Colors**: Semantic color tokens from the shades and primary palettes
- **Border Radius**: `m` token for rounded corners

## Examples

### With Click Handlers

```tsx
<LinksSection
  style="light"
  heading="Interactive Links"
  links={[
    {
      id: '1',
      icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
      title: 'Credit Cards',
      description: 'Learn about crypto credit cards.',
      onClick: () => handleLinkClick('credit-cards')
    }
  ]}
/>
```

### Dark Theme

```tsx
<LinksSection
  themeMode="dark"
  style="dark"
  heading="Resources"
  links={myLinks}
/>
```

### Custom Heading

```tsx
<LinksSection
  style="light"
  heading="Explore More Topics"
  links={myLinks}
/>
```
