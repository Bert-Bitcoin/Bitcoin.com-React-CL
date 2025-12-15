# Illustration Component

A flexible component for displaying illustrations with various fit and sizing options.

## Features

- **Multiple Object Fit Options**: Cover, contain, fill, or none
- **Flexible Sizing**: Predefined sizes (sm, md, lg, xl, full) or custom dimensions
- **Aspect Ratio Control**: Square, standard, widescreen, ultra-wide, or auto
- **Error Handling**: Fallback content for failed image loads
- **Customizable Styling**: Border, rounded corners, background colors
- **Accessibility**: Proper alt text and semantic HTML
- **Performance**: Lazy loading support
- **Theme Support**: Automatic light/dark mode support via semantic tokens

## Basic Usage

```tsx
import { Illustration } from '@/components/illustration';

function MyComponent() {
  return (
    <Illustration
      src="/path/to/illustration.svg"
      alt="Bitcoin Rocket"
      size="md"
    />
  );
}
```

## Object Fit Options

Control how the image fits within its container:

```tsx
// Contain - Fits completely within container (default)
// Best for: Most illustrations, maintains aspect ratio
<Illustration
  src="/illustration.svg"
  alt="Illustration"
  objectFit="contain"
  aspectRatio="1/1"
/>

// Cover - Fills entire container, maintains aspect ratio, may crop
// Best for: Backgrounds, when you want to fill the space completely
<Illustration
  src="/illustration.svg"
  alt="Illustration"
  objectFit="cover"
  aspectRatio="1/1"
/>

// Fill - Stretches to fill container, ignores aspect ratio
// Best for: When exact container fill is needed, may distort
<Illustration
  src="/illustration.svg"
  alt="Illustration"
  objectFit="fill"
  aspectRatio="1/1"
/>

// None - Maintains original size
// Best for: Pixel-perfect layouts
<Illustration
  src="/illustration.svg"
  alt="Illustration"
  objectFit="none"
  aspectRatio="1/1"
/>

// Scale-down - Uses smaller of 'none' or 'contain' (prevents upscaling)
// Best for: Small images that shouldn't be enlarged
<Illustration
  src="/illustration.svg"
  alt="Illustration"
  objectFit="scale-down"
  aspectRatio="1/1"
/>
```

### Cover vs Fill - What's the Difference?

**`cover`**: Maintains the image's aspect ratio while filling the container. May crop edges.
- ✅ No distortion
- ❌ May crop parts of the image

**`fill`**: Stretches the image to fill the container completely, ignoring aspect ratio.
- ✅ Fills entire container
- ❌ May distort the image

## Size Options

Use predefined sizes or custom dimensions:

```tsx
// Predefined sizes
<Illustration src="/illustration.svg" alt="Small" size="sm" />   // 96x96px
<Illustration src="/illustration.svg" alt="Medium" size="md" />  // 160x160px
<Illustration src="/illustration.svg" alt="Large" size="lg" />   // 256x256px
<Illustration src="/illustration.svg" alt="XL" size="xl" />      // 384x384px
<Illustration src="/illustration.svg" alt="Full" size="full" />  // 100% width & height

// Custom dimensions
<Illustration
  src="/illustration.svg"
  alt="Custom"
  width={300}
  height={200}
/>

// Custom width with auto height
<Illustration
  src="/illustration.svg"
  alt="Custom width"
  width="400px"
/>
```

## Aspect Ratios

Set container aspect ratios:

```tsx
<Illustration src="/illustration.svg" alt="Square" aspectRatio="1/1" />
<Illustration src="/illustration.svg" alt="Standard" aspectRatio="4/3" />
<Illustration src="/illustration.svg" alt="Widescreen" aspectRatio="16/9" />
<Illustration src="/illustration.svg" alt="Ultra-wide" aspectRatio="21/9" />
<Illustration src="/illustration.svg" alt="Auto" aspectRatio="auto" />
```

## Styling Options

```tsx
// With border and rounded corners
<Illustration
  src="/illustration.svg"
  alt="Styled"
  withBorder
  rounded
/>

// With background color (useful for transparent images)
<Illustration
  src="/illustration.svg"
  alt="With background"
  backgroundColor="rgb(var(--color-primary-10))"
  rounded
/>

// With padding (space between image and container edges)
<Illustration
  src="/illustration.svg"
  alt="With padding"
  padding="md"
  backgroundColor="rgb(var(--color-success-10))"
  rounded
/>

// Custom classes
<Illustration
  src="/illustration.svg"
  alt="Custom"
  className="shadow-lg"
  containerClassName="border-2 border-primary-100"
/>
```

## Padding Options

Add internal spacing between the image and container edges:

```tsx
<Illustration src="/illustration.svg" alt="No padding" padding="none" />   // Default
<Illustration src="/illustration.svg" alt="XS padding" padding="xs" />     // 4px
<Illustration src="/illustration.svg" alt="Small padding" padding="sm" />  // 8px
<Illustration src="/illustration.svg" alt="Medium padding" padding="md" /> // 16px
<Illustration src="/illustration.svg" alt="Large padding" padding="lg" />  // 24px
<Illustration src="/illustration.svg" alt="XL padding" padding="xl" />     // 32px
```

## Error Handling

Provide fallback content for failed image loads:

```tsx
import { Icon } from '@/components/icon';

<Illustration
  src="/might-not-exist.svg"
  alt="Illustration"
  size="md"
  withBorder
  fallback={
    <div className="flex flex-col items-center justify-center gap-xs p-m bg-surface-muted">
      <Icon type="image" size="lg" className="text-text-secondary" />
      <p className="text-label-xs text-text-secondary">Image not found</p>
    </div>
  }
/>
```

## Real-world Examples

### In a Card

```tsx
import { Card } from '@/components/card';
import { Illustration } from '@/components/illustration';

<Card>
  <div className="flex flex-col gap-m">
    <Illustration
      src="/illustrations/earn.svg"
      alt="Earn Bitcoin"
      aspectRatio="16/9"
      rounded
      backgroundColor="rgb(var(--color-success-10))"
    />
    <Card.Header>
      <Card.Title variant="heading-md">EARN REWARDS</Card.Title>
      <Card.Description>
        Earn Bitcoin rewards on your purchases
      </Card.Description>
    </Card.Header>
  </div>
</Card>
```

### Hero Section

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-l items-center">
  <div className="flex flex-col gap-m">
    <h1 className="text-heading-lg uppercase">Your Bitcoin Journey</h1>
    <p className="text-body text-text-secondary">
      Start trading, earning, and learning today
    </p>
  </div>
  <Illustration
    src="/illustrations/rocket.svg"
    alt="Bitcoin Rocket"
    size="full"
    aspectRatio="4/3"
  />
</div>
```

### Full Width Banner

```tsx
<Illustration
  src="/illustrations/platform.svg"
  alt="Bitcoin Platform"
  aspectRatio="21/9"
  size="full"
  backgroundColor="rgb(var(--color-background))"
/>
```

## Available Illustrations

The project includes **36 illustrations** in `src/illustrations/`:

### Core Features
- `Illustration-Account.svg` - Account management
- `Illustration-Buy & Sell.svg` - Trading functionality
- `Illustration-Earn.svg` - Rewards and earning
- `Illustration-Gaming.svg` - Gaming features
- `Illustration-Learn.svg` - Educational content
- `Illustration-Maps.svg` - Location services
- `Illustration-Swap.svg` - Token swapping
- `Illustration-Swapping.svg` - Exchange features
- `Illustration-Wallet.svg` - Wallet management
- `Illustration-Wallet-coins.svg` - Wallet with coins

### Bitcoin Illustrations
- `Illustration-Bitcoin-Agreement.svg` - Agreements and contracts
- `Illustration-Bitcoin-Airdrop.svg` - Airdrop campaigns
- `Illustration-bitcoin-cash-coin.svg` - Bitcoin Cash coin
- `Illustration-Bitcoin-Checkmark.svg` - Confirmation/verification
- `Illustration-Bitcoin-Cloud.svg` - Cloud services
- `Illustration-bitcoin-coin.svg` - Bitcoin coin
- `Illustration-Bitcoin-display.svg` - Bitcoin display screen
- `Illustration-Bitcoin-Ethereum.svg` - Multi-crypto trading
- `Illustration-bitcoin-gamble.svg` - Gaming/betting
- `Illustration-Bitcoin-gold.svg` - Bitcoin Gold
- `Illustration-Bitcoin-illustration.svg` - General Bitcoin concept
- `Illustration-Bitcoin-Machine.svg` - ATM/machines
- `Illustration-Bitcoins.svg` - Multiple Bitcoin coins
- `Illustration-Send-Bitcoin.svg` - Bitcoin transfers

### Ethereum Illustrations
- `Illustration-Ethereum-coin.svg` - Ethereum coin
- `Illustration-Ethereum-Machine.svg` - Ethereum ATM
- `Illustration-Send-Ethereum.svg` - Ethereum transfers
- `Illustration-Verse-Ethereum.svg` - Verse/Ethereum integration

### Technology & Platform
- `Illustration-Blockchain.svg` - Blockchain technology
- `Illustration-coin-display.svg` - Coin display interface
- `Illustration-layers.svg` - Layered architecture
- `Illustration-Platform.svg` - Platform overview
- `Illustration-Platform-Alt.svg` - Alternative platform view

### Growth & Rewards
- `Illustration-Rewards.svg` - Rewards program
- `Illustration-Rewards-Machine.svg` - Rewards system
- `Illustration-Rocket.svg` - Growth and launch

## Need More Illustrations?

If you can't find the right illustration here, explore the full collection in Figma:

**[View Full Illustration Library in Figma →](https://www.figma.com/design/bTmqzTpaNHPopxW2j7nb53/GET-STARTED?node-id=669-58)**

The Figma library contains additional illustrations and variations that you can export and add to this component library.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | Required | Image source URL or path |
| `alt` | `string` | Required | Alt text for accessibility |
| `objectFit` | `'cover' \| 'contain' \| 'fill' \| 'none' \| 'scale-down'` | `'contain'` | How the image fits within container |
| `aspectRatio` | `'1/1' \| '4/3' \| '16/9' \| '21/9' \| 'auto'` | `'auto'` | Aspect ratio of the container |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | - | Predefined size |
| `width` | `string \| number` | - | Custom width |
| `height` | `string \| number` | - | Custom height |
| `backgroundColor` | `string` | - | Container background color |
| `withBorder` | `boolean` | `false` | Whether to add a border |
| `rounded` | `boolean` | `false` | Whether to add rounded corners |
| `centered` | `boolean` | `true` | Whether to center the image |
| `padding` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'none'` | Internal padding around image |
| `loading` | `'lazy' \| 'eager'` | `'lazy'` | Image loading behavior |
| `onLoad` | `() => void` | - | Callback when image loads |
| `onError` | `() => void` | - | Callback when image fails |
| `fallback` | `ReactNode` | - | Fallback content on error |
| `className` | `string` | - | Additional CSS classes for image |
| `containerClassName` | `string` | - | Additional CSS classes for container |
| `style` | `CSSProperties` | - | Inline styles for image |

## Accessibility

- Always provide meaningful `alt` text
- Use semantic HTML (`<img>` element)
- Supports keyboard navigation when interactive
- Works with screen readers

## Performance

- Uses lazy loading by default (`loading="lazy"`)
- Set `loading="eager"` for above-the-fold images
- Optimized for both light and dark themes

## Design System Integration

This component follows the project's design system:

- Uses semantic color tokens for backgrounds and borders
- Supports automatic light/dark theme switching
- Follows spacing and sizing conventions
- Integrates seamlessly with other components like Card

## Notes

- For small decorative icons, use the `Icon` component instead
- For mini illustrations (simpler graphics), use the `MiniIllustrations` component
- SVG format is recommended for illustrations for best quality and performance
- Use semantic token colors for backgrounds: `rgb(var(--color-primary-10))`, `rgb(var(--color-surface-muted))`, etc.
