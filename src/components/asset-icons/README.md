# Asset Icons

Asset icons for cryptocurrencies and digital assets used throughout the application.

## Overview

This directory contains React components for asset icons. The icons are automatically generated from SVG files located in `src/assets-icons/` using the `scripts/generate-asset-icons.ts` script.

## Usage

### Basic Usage

```tsx
import { AssetIcon, BitcoinAssetIcon } from '@/components/asset-icons';

function MyComponent() {
  return <AssetIcon asset={BitcoinAssetIcon} size="md" />;
}
```

### Available Sizes

Asset icons support 5 size variants:

- `xs` - 16px (w-4 h-4)
- `sm` - 24px (w-6 h-6)
- `md` - 32px (w-8 h-8) - default
- `lg` - 48px (w-12 h-12)
- `xl` - 64px (w-16 h-16)

```tsx
<AssetIcon asset={BitcoinAssetIcon} size="xs" />
<AssetIcon asset={EthereumAssetIcon} size="sm" />
<AssetIcon asset={VerseAssetIcon} size="md" />
<AssetIcon asset={StellarAssetIcon} size="lg" />
<AssetIcon asset={USDCAssetIcon} size="xl" />
```

### Custom Styling

You can pass custom className for additional styling:

```tsx
<AssetIcon 
  asset={BitcoinAssetIcon} 
  size="md" 
  className="opacity-50 hover:opacity-100 transition-opacity" 
/>
```

### Using Icons Directly

You can also use the asset icon components directly without the wrapper:

```tsx
import { BitcoinAssetIcon } from '@/components/asset-icons';

function MyComponent() {
  return <BitcoinAssetIcon className="w-10 h-10 text-primary" />;
}
```

### Note on Component Names

Component names are generated from the SVG filenames. Some icons have specific casing:
- `USDcAssetIcon` (not USDCAssetIcon) - lowercase 'c'
- `USDtAssetIcon` (not USDTAssetIcon) - lowercase 't'

## Available Asset Icons

The following asset icons are available:

- AAVEAssetIcon
- AQUAAssetIcon
- AVAXAssetIcon
- BitcoinAssetIcon
- BitcoinCashAssetIcon
- BLNDAssetIcon
- BNBAssetIcon
- COMPAssetIcon
- DaiAssetIcon
- EthereumAssetIcon
- FUSDAssetIcon
- HAPIAssetIcon
- LINKAssetIcon
- MATICAssetIcon
- SHIBAssetIcon
- SmartBCHAssetIcon
- SOLAssetIcon
- StellarAssetIcon
- SUSHIAssetIcon
- TBTCAssetIcon
- UNIAssetIcon
- USDcAssetIcon
- USDtAssetIcon
- VerseAssetIcon
- VerseXAssetIcon
- WBTCAssetIcon
- YFIAssetIcon
- ZanoAssetIcon

## Regenerating Icons

To regenerate the asset icon components after adding or modifying SVG files:

```bash
npm run generate:asset-icons
# or
npx tsx scripts/generate-asset-icons.ts
```

## Design System Integration

Asset icons follow the design system specifications defined in Figma:
[Asset Icons in Figma](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18011-2096&t=fCYrU0ejGmjVXf4L-1)

## Theming

Asset icons support both light and dark themes automatically based on your Tailwind dark mode configuration.

## File Structure

```
src/components/asset-icons/
├── README.md
├── AssetIcon.tsx              # Wrapper component
├── AssetIcon.stories.tsx      # Main Storybook stories
├── AssetIconGallery.stories.tsx  # Gallery view stories
├── index.ts                   # Barrel exports
├── BitcoinAssetIcon.tsx       # Generated component
├── EthereumAssetIcon.tsx      # Generated component
└── ...                        # Other generated components
```

## Component API

### AssetIcon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asset` | `React.ComponentType<React.SVGProps<SVGSVGElement>>` | required | The asset icon component to render |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size variant |
| `className` | `string` | `undefined` | Additional CSS classes |

## Examples

### Asset List

```tsx
import { AssetIcon, BitcoinAssetIcon, EthereumAssetIcon, VerseAssetIcon } from '@/components/asset-icons';

function AssetList() {
  const assets = [
    { icon: BitcoinAssetIcon, name: 'Bitcoin', symbol: 'BTC' },
    { icon: EthereumAssetIcon, name: 'Ethereum', symbol: 'ETH' },
    { icon: VerseAssetIcon, name: 'Verse', symbol: 'VERSE' },
  ];

  return (
    <div className="space-y-s">
      {assets.map((asset) => (
        <div key={asset.symbol} className="flex items-center gap-m">
          <AssetIcon asset={asset.icon} size="md" />
          <div>
            <p className="text-body font-medium">{asset.name}</p>
            <p className="text-body-sm text-text-secondary">{asset.symbol}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Asset Card

```tsx
import { AssetIcon, BitcoinAssetIcon } from '@/components/asset-icons';

function AssetCard() {
  return (
    <div className="rounded-sm border border-border bg-surface p-l">
      <div className="flex items-center gap-m mb-m">
        <AssetIcon asset={BitcoinAssetIcon} size="lg" />
        <div>
          <h3 className="text-heading-sm uppercase">Bitcoin</h3>
          <p className="text-body-sm text-text-secondary">BTC</p>
        </div>
      </div>
      <div className="space-y-xs">
        <div className="flex justify-between">
          <span className="text-body-sm text-text-secondary">Balance</span>
          <span className="text-body-sm font-medium">0.05234 BTC</span>
        </div>
        <div className="flex justify-between">
          <span className="text-body-sm text-text-secondary">Value</span>
          <span className="text-body-sm font-medium">$2,345.67</span>
        </div>
      </div>
    </div>
  );
}
```

