# Mini Illustrations

A collection of 200+ mini-illustrations from the Figma design system, available as React components.

## Overview

The mini-illustrations are SVG-based React components that can be easily integrated into your application. Each illustration maintains its original design from Figma and can be customized with standard SVG props.

## Usage

### Basic Usage

```tsx
import { MiniIllustration, FlameStreakIllustration } from 'bitcoin-react-component-library';

function MyComponent() {
  return (
    <MiniIllustration 
      illustration={FlameStreakIllustration} 
      size="md" 
    />
  );
}
```

### Direct Usage (Without Wrapper)

You can also use illustrations directly without the wrapper component:

```tsx
import { FlameStreakIllustration } from 'bitcoin-react-component-library';

function MyComponent() {
  return (
    <FlameStreakIllustration className="w-24 h-24" />
  );
}
```

### Sizes

The `MiniIllustration` component supports predefined sizes:

- `sm`: 64px × 64px (4rem)
- `md`: 96px × 96px (6rem) - default
- `lg`: 128px × 128px (8rem)
- `xl`: 160px × 160px (10rem)

### Custom Styling

```tsx
<MiniIllustration 
  illustration={BitcoinHandsWalletIllustration} 
  className="w-48 h-48 opacity-80" 
/>
```

### In Cards or Layouts

```tsx
function SuccessCard() {
  return (
    <div className="rounded-s border border-border bg-surface p-l space-y-m">
      <div className="flex justify-center">
        <MiniIllustration illustration={SuccessCoinIllustration} size="lg" />
      </div>
      <div className="space-y-s text-center">
        <h3 className="text-heading-md">Transaction Successful</h3>
        <p className="text-body text-text-secondary">
          Your transaction has been completed.
        </p>
      </div>
    </div>
  );
}
```

## Available Illustrations

All 202 illustrations are available in the Storybook gallery. Some examples include:

- `FlameStreakIllustration`
- `BitcoinHandsWalletIllustration`
- `SuccessCoinIllustration`
- `GemsIllustration`
- `ExperiencePointsIllustration`
- `PolygonWalletIllustration`
- `LendBitcoinIllustration`
- `PoolStellarIllustration`
- And many more...

Browse the full gallery in Storybook under **Foundations > Mini Illustrations**.

## Generating Illustrations

If you add new SVG files to `src/mini-illustrations/`, run the generation script:

```bash
npm run illustrations:generate
```

This will:
1. Convert all SVG files to React components
2. Generate TypeScript types
3. Update the index file with exports

## Design Source

All illustrations are sourced from the Figma design system:
[View in Figma](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18011-2692)

## Props

### MiniIllustration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `illustration` | `ComponentType<SVGProps<SVGSVGElement>>` | - | The illustration component to render |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Predefined size |
| `className` | `string` | - | Additional CSS classes |
| ...SVGProps | `SVGProps<SVGSVGElement>` | - | Any valid SVG attributes |

## Notes

- All illustrations maintain their original colors and design from Figma
- Illustrations are 102×102px by default with a 4.5px border radius
- Each illustration includes proper TypeScript types
- Components are tree-shakeable for optimal bundle size

