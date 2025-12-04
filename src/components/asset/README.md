# Asset Component

A reusable component for displaying cryptocurrency and token assets with their icons, names, and tickers. This component is designed to be used consistently across lists, tables, and other UI contexts.

## Features

- **Four Size Variants**: Large (40px), Medium (32px), Small (24px), and Extra Small (20px)
- **Network Icon Support**: Display blockchain network icons for cross-chain assets
- **Optional Ticker**: Ticker can be omitted for compact displays in small and extra-small sizes
- **Dark Mode Support**: Automatic theming with light and dark mode support
- **Semantic Tokens**: Uses design system tokens for consistent styling
- **Flexible Integration**: Works seamlessly in lists, tables, cards, and more
- **Typography Compliance**: Follows the design system typography rules (Elza for large headings, Satoshi for labels)
- **Icon Integration**: Reuses existing asset icon components from the design system

## Installation

```tsx
import { Asset } from '@/components/asset';
import { BitcoinAssetIcon } from '@/components/asset-icons';
```

## Basic Usage

```tsx
<Asset 
  icon={BitcoinAssetIcon} 
  name="Bitcoin" 
  ticker="BTC" 
  size="lg" 
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ComponentType<SVGProps<SVGSVGElement>>` | - | The asset icon component (required) |
| `name` | `string` | - | The full name of the asset (required) |
| `ticker` | `string` | - | The ticker/symbol of the asset (optional for 'sm' and 'xs' sizes) |
| `size` | `'lg' \| 'md' \| 'sm' \| 'xs'` | `'lg'` | The size variant |
| `networkIcon` | `React.ComponentType<SVGProps<SVGSVGElement>>` | - | Optional network icon for cross-chain assets |
| `className` | `string` | `''` | Additional CSS classes |

## Size Variants

### Large (`lg`)
- **Icon Size**: 40px
- **Typography**: Elza Narrow Black (uppercase) for name, Satoshi Medium for ticker
- **Layout**: Vertical (stacked)
- **Use Case**: Featured assets, hero sections, primary displays

```tsx
<Asset icon={BitcoinAssetIcon} name="Bitcoin" ticker="BTC" size="lg" />
```

### Medium (`md`)
- **Icon Size**: 32px
- **Typography**: Satoshi Medium for both name and ticker
- **Layout**: Vertical (stacked)
- **Use Case**: Cards, secondary displays

```tsx
<Asset icon={EthereumAssetIcon} name="Ethereum" ticker="ETH" size="md" />
```

### Small (`sm`)
- **Icon Size**: 24px
- **Typography**: Satoshi Medium for both name and ticker
- **Layout**: Horizontal (inline)
- **Use Case**: Lists, tables, compact displays

```tsx
<Asset icon={USDcAssetIcon} name="USD Coin" ticker="USDC" size="sm" />
```

### Extra Small (`xs`)
- **Icon Size**: 20px
- **Typography**: Satoshi Medium for both name and ticker
- **Layout**: Horizontal (inline)
- **Use Case**: Dense lists, badges, compact UI elements

```tsx
<Asset icon={StellarAssetIcon} name="Stellar" ticker="XLM" size="xs" />
```

## Examples

### In a List

```tsx
<div className="flex flex-col gap-s">
  <Asset icon={BitcoinAssetIcon} name="Bitcoin" ticker="BTC" size="sm" />
  <Asset icon={EthereumAssetIcon} name="Ethereum" ticker="ETH" size="sm" />
  <Asset icon={USDcAssetIcon} name="USD Coin" ticker="USDC" size="sm" />
</div>
```

### In a Table

```tsx
<table>
  <thead>
    <tr>
      <th>Asset</th>
      <th>Price</th>
      <th>Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <Asset icon={BitcoinAssetIcon} name="Bitcoin" ticker="BTC" size="sm" />
      </td>
      <td>$43,250.00</td>
      <td>0.0234 BTC</td>
    </tr>
  </tbody>
</table>
```

### With Custom Styling

```tsx
<Asset 
  icon={BitcoinAssetIcon} 
  name="Bitcoin" 
  ticker="BTC" 
  size="md"
  className="p-m rounded-md border border-shades-light hover:bg-shades-extra-light"
/>
```

### With Network Icon (Cross-Chain Assets)

For assets that exist on multiple blockchains, use the `networkIcon` prop to indicate the network:

```tsx
<Asset 
  icon={USDcAssetIcon} 
  name="USD Coin" 
  ticker="USDC" 
  size="lg"
  networkIcon={EthereumAssetIcon}
/>
```

The network icon will appear in the bottom-right corner of the main asset icon, with size adjusted automatically:
- **Large**: 16px network icon
- **Medium**: 13px network icon
- **Small**: 10px network icon
- **Extra Small**: 8px network icon

### Without Ticker (Compact Mode)

For small and extra-small sizes, you can omit the ticker to save space:

```tsx
{/* Small size without ticker */}
<Asset 
  icon={BitcoinAssetIcon} 
  name="Bitcoin" 
  size="sm"
/>

{/* Extra small size without ticker */}
<Asset 
  icon={EthereumAssetIcon} 
  name="Ethereum" 
  size="xs"
/>
```

## Available Asset Icons

The component works with all asset icon components from `@/components/asset-icons`:

- `BitcoinAssetIcon`
- `EthereumAssetIcon`
- `BitcoinCashAssetIcon`
- `StellarAssetIcon`
- `VerseAssetIcon`
- `USDcAssetIcon`
- `USDtAssetIcon`
- `AAVEAssetIcon`
- `UNIAssetIcon`
- `LINKAssetIcon`
- And many more...

See the asset-icons component documentation for the complete list.

## Dark Mode

The Asset component automatically adapts to dark mode using Tailwind's `dark:` variant. Text colors adjust based on the theme:

**Light Mode:**
- Name: `shades-black`
- Ticker: `shades-dark` or `shades-semi-dark`

**Dark Mode:**
- Name: `shades-white`
- Ticker: `shades-semi-light`

```tsx
// Will automatically switch between light and dark themes
<div className="dark">
  <Asset icon={BitcoinAssetIcon} name="Bitcoin" ticker="BTC" size="lg" />
</div>
```

## Typography Rules

The Asset component follows the design system's typography guidelines:

1. **Large size** uses Elza Narrow Black font (uppercase) for the asset name
2. All other sizes use Satoshi Variable font for consistent readability
3. Ticker symbols always use Satoshi Variable Medium
4. All text uses semantic color tokens for proper theming

## Use Cases

### Cross-Chain Assets

Display assets that exist on multiple blockchain networks with the network icon overlay:

```tsx
{/* USDC on Ethereum */}
<Asset 
  icon={USDcAssetIcon} 
  name="USD Coin" 
  ticker="USDC" 
  size="md"
  networkIcon={EthereumAssetIcon}
/>

{/* USDT on Stellar */}
<Asset 
  icon={USDtAssetIcon} 
  name="Tether" 
  ticker="USDT" 
  size="md"
  networkIcon={StellarAssetIcon}
/>
```

### Compact Lists

For tight spaces, use small or extra-small sizes without tickers:

```tsx
<div className="flex gap-xs">
  <Asset icon={BitcoinAssetIcon} name="Bitcoin" size="xs" />
  <Asset icon={EthereumAssetIcon} name="Ethereum" size="xs" />
  <Asset icon={USDcAssetIcon} name="USDC" size="xs" networkIcon={EthereumAssetIcon} />
</div>
```

## Design System Compliance

This component adheres to all project design system rules:

- ✅ **Semantic Tokens Only**: No hardcoded colors or arbitrary values
- ✅ **Typography Mapping**: Proper font usage (Elza for headings, Satoshi for body)
- ✅ **Dark Mode Support**: Full theme support with `dark:` variants
- ✅ **Component Reuse**: Leverages existing asset icon components
- ✅ **Color Palette**: Only uses approved design system colors
- ✅ **Figma Alignment**: Matches Figma component structure and variations
- ✅ **Network Icon Support**: Implements cross-chain asset display per Figma design

## Accessibility

- Uses semantic HTML structure
- Proper text contrast ratios in both light and dark modes
- Icon and text are properly associated for screen readers
- Hover states provide visual feedback when used in interactive contexts

## Performance

- Lightweight component with minimal re-renders
- Reuses existing asset icon components (no duplication)
- Optimized Tailwind classes for efficient CSS generation

## Related Components

- [AssetIcon](../asset-icons/README.md) - Standalone asset icon component
- [Table](../table/README.md) - Table component for displaying asset data
- [Card](../card/README.md) - Card component for asset cards

## Figma Reference

Based on the Figma design: [Asset Component](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18067-332)

