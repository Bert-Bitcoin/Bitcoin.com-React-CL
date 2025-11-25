# Card Component

A versatile, composable card component designed for AI agents to build rich data applications. The Card component provides a flexible foundation for displaying content in a contained, elevated surface.

## Overview

The Card component follows a composable architecture with sub-components that can be mixed and matched to create various card layouts. This design makes it especially suitable for AI agents that need to generate dynamic UI based on data requirements.

## Features

- **Fully Composable**: Use sub-components to build any card layout
- **Multiple Variants**: default, outlined, interactive
- **Flexible Padding**: Control spacing with none, sm, md, lg options
- **Dark Mode Support**: Automatic theme switching using design tokens
- **Interactive States**: Built-in hover, focus, and click handling
- **Accessible**: Semantic HTML and ARIA attributes
- **TypeScript**: Fully typed for excellent developer experience

## Sub-Components

### Card (Container)
The main wrapper component that provides the card structure.

### Card.Header
Container for title, description, and optional action buttons.

### Card.Title
Heading element with proper typography hierarchy.

### Card.Description
Secondary descriptive text with optional size control.

### Card.Content
Main content area for any child elements.

### Card.Footer
Bottom area typically used for actions or metadata.

### Card.Media
Image or media display with aspect ratio control.

### Card.Amount
Specialized component for displaying monetary values with primary and secondary amounts.

### Card.Icon
Icon container with optional background styling.

### Card.Divider
Visual separator between card sections.

## Usage Examples

### Basic Card
\`\`\`tsx
import { Card } from '@bitcoin-com/components';

<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
    <Card.Description>Description text</Card.Description>
  </Card.Header>
</Card>
\`\`\`

### Card with Smaller Description
\`\`\`tsx
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
    <Card.Description size="sm">Larger description text for more prominence</Card.Description>
  </Card.Header>
</Card>
\`\`\`

### Amount Card (Financial Data)
\`\`\`tsx
import { Card } from '@bitcoin-com/components';
import { BitcoinAssetIcon } from '@bitcoin-com/components';

<Card>
  <Card.Header>
    <p className="text-label text-text-secondary uppercase">Total Balance</p>
  </Card.Header>
  <Card.Amount
    amount={12867594.69}
    currency="$"
    secondaryAmount="12,867,594.69 BTC"
    secondaryIcon={<BitcoinAssetIcon size="sm" />}
  />
</Card>
\`\`\`

### Feature Card (Icon + Text)
\`\`\`tsx
import { Card } from '@bitcoin-com/components';
import { CoffeeMiniIllustration } from '@bitcoin-com/components';

<Card>
  <div className="flex flex-col items-start gap-s">
    <Card.Icon size="lg" withBackground>
      <CoffeeMiniIllustration className="w-10 h-10" />
    </Card.Icon>
    <Card.Header>
      <Card.Title variant="heading-md">Feature Name</Card.Title>
      <Card.Description>Feature description</Card.Description>
    </Card.Header>
  </div>
</Card>
\`\`\`

### Form Card
\`\`\`tsx
import { Card, Button, Input } from '@bitcoin-com/components';

<Card>
  <div className="flex flex-col gap-m">
    <Card.Header>
      <Card.Title variant="heading-md">Create Account</Card.Title>
      <Card.Description>Enter your email below</Card.Description>
    </Card.Header>
    <Card.Content>
      <div className="flex flex-col gap-m">
        <Input label="Email" placeholder="email@example.com" fullWidth />
        <Input label="Password" type="password" fullWidth />
      </div>
    </Card.Content>
    <Card.Footer>
      <Button variant="secondary" fullWidth>Create Account</Button>
    </Card.Footer>
  </div>
</Card>
\`\`\`

### Settings Card (With Toggles)
\`\`\`tsx
import { Card, Button, Toggle } from '@bitcoin-com/components';

<Card>
  <div className="flex flex-col gap-m">
    <Card.Header>
      <Card.Title variant="heading-md">Settings</Card.Title>
      <Card.Description>Manage your preferences</Card.Description>
    </Card.Header>
    <Card.Content>
      <div className="flex flex-col gap-m">
        <Toggle label="Notifications" checked={true} fullWidth />
        <Toggle label="Dark Mode" checked={false} fullWidth />
      </div>
    </Card.Content>
    <Card.Footer>
      <Button variant="default" fullWidth>Save</Button>
    </Card.Footer>
  </div>
</Card>
\`\`\`

### News/Media Card
\`\`\`tsx
import { Card, Button, Icon } from '@bitcoin-com/components';

<Card padding="none">
  <Card.Media
    src="/image.jpg"
    alt="Article image"
    aspectRatio="16/9"
  />
  <div className="p-m flex flex-col gap-s">
    <Card.Header>
      <Card.Title variant="heading-md">Article Title</Card.Title>
      <Card.Description>Article summary...</Card.Description>
    </Card.Header>
    <Card.Footer>
      <button className="flex items-center gap-xs text-primary-100">
        Read More
        <Icon type="arrow-right" size="sm" />
      </button>
    </Card.Footer>
  </div>
</Card>
\`\`\`

### Interactive/Clickable Card
\`\`\`tsx
import { Card } from '@bitcoin-com/components';

<Card 
  interactive 
  onClick={() => console.log('Card clicked')}
>
  <Card.Header>
    <Card.Title>Clickable Card</Card.Title>
    <Card.Description>This card is interactive</Card.Description>
  </Card.Header>
</Card>
\`\`\`

### Dashboard Stat Card
\`\`\`tsx
import { Card, Icon } from '@bitcoin-com/components';

<Card>
  <div className="flex items-center gap-s">
    <Card.Icon size="md" withBackground backgroundColor="#e8edfa">
      <Icon type="wallet" size="lg" className="text-primary-100" />
    </Card.Icon>
    <div>
      <p className="text-label-xs text-text-secondary">Active Wallets</p>
      <p className="text-numeric-sm font-bold text-text-primary">
        1,234
      </p>
    </div>
  </div>
</Card>
\`\`\`

### Transaction Card
\`\`\`tsx
import { Card } from '@bitcoin-com/components';
import { BitcoinAssetIcon } from '@bitcoin-com/components';

<Card interactive>
  <div className="flex items-center gap-m">
    <Card.Icon size="md" withBackground>
      <BitcoinAssetIcon size="md" />
    </Card.Icon>
    <div className="flex-1 min-w-0">
      <p className="text-label font-medium">Bitcoin Purchase</p>
      <p className="text-label-xs text-text-secondary">Today at 2:34 PM</p>
    </div>
    <div className="text-right">
      <p className="text-numeric-sm font-bold">+0.00234 BTC</p>
      <p className="text-numeric-xs text-text-secondary">$123.45</p>
    </div>
  </div>
</Card>
\`\`\`

## AI Agent Guidelines

When building card-based UIs with AI agents, follow these patterns:

### 1. **Data Display Cards**
Use `Card.Amount` for financial data, numeric values with IBM Plex Sans font.

### 2. **List Items**
Use interactive cards with `Card.Icon` for list-based layouts (transactions, activities, etc.).

### 3. **Forms**
Combine with `Input`, `Button`, `Toggle`, `Checkbox` components inside `Card.Content`.

### 4. **Statistics**
Use `Card.Icon` with background and numeric displays for dashboard metrics.

### 5. **Media Content**
Use `Card.Media` with `padding="none"` and manual padding in inner divs.

### 6. **Actions**
Place primary actions in `Card.Footer`, secondary actions in `Card.Header` action prop.

### 7. **Composition**
Mix and match sub-components freely. The Card is designed to be flexible.

## Props Reference

### Card
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'default' \| 'outlined' \| 'interactive' | 'default' | Visual style |
| padding | 'none' \| 'sm' \| 'md' \| 'lg' | 'md' | Internal padding |
| fullWidth | boolean | false | Span full width |
| interactive | boolean | false | Enable hover/focus states |
| onClick | () => void | - | Click handler |

### Card.Amount
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| amount | string \| number | - | Primary amount |
| currency | string | '$' | Currency symbol |
| secondaryAmount | string | - | Secondary amount (e.g., crypto) |
| secondaryIcon | ReactNode | - | Icon for secondary amount |

### Card.Media
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | string | - | Image URL |
| alt | string | - | Alt text |
| aspectRatio | '1/1' \| '4/3' \| '16/9' \| '21/9' \| 'auto' | '16/9' | Aspect ratio |
| objectFit | 'cover' \| 'contain' \| 'fill' \| 'none' | 'cover' | Object fit |
| position | 'top' \| 'bottom' \| 'left' \| 'right' | 'top' | Position in card |

### Card.Icon
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' | Icon container size |
| withBackground | boolean | false | Add background shape |
| backgroundColor | string | - | Custom background color |

### Card.Title
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| as | 'h1'-'h6' \| 'div' | 'h3' | HTML element |
| variant | Typography variant | 'heading-sm' | Text style |

### Card.Description
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'xs' \| 'sm' | 'xs' | Text size variant |

## Design Tokens

The Card component uses semantic design tokens:

- **Colors**: `surface`, `border`, `border-strong`, `text-primary`, `text-secondary`
- **Spacing**: `s`, `m`, `l` from design tokens
- **Radii**: `m` (medium) for rounded corners
- **Shadows**: `md` for elevated variant
- **Typography**: Proper heading and body styles, IBM Plex Sans for numbers

## Accessibility

- Semantic HTML elements (`<article>`, headings)
- Keyboard navigation for interactive cards (Enter/Space)
- Focus visible states
- ARIA attributes for roles
- Alt text for images

## Dark Mode

All colors automatically adapt to dark mode using the design system's theme tokens. No additional configuration needed.

