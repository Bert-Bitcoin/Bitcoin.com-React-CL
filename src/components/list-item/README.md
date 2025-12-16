# ListItem Component

A flexible and comprehensive list item component that provides a solid boilerplate for creating consistent list items across the application. Designed to accommodate various use cases while maintaining consistency.

## Features

- **Two Size Variants**: Default and Compact
- **Optional Numbered Badge**: With 10 color options
- **Flexible Illustrations**: Support for mini-illustrations, icons, and asset icons
- **Dual Content Areas**: Left and right content zones with title/description or custom HTML
- **Optional Indicator**: Built-in indicator component support
- **Optional Button Area**: Space for buttons, icons, or custom actions
- **Interactive Support**: Built-in onClick handler for clickable list items
- **Divider Control**: Optional bottom divider

## Basic Usage

```tsx
import { ListItem } from '@/components/list-item';

// Minimal example
<ListItem
  leftContent={{
    title: 'Simple List Item',
    description: 'Basic description'
  }}
/>
```

## Size Variants

### Default Size
```tsx
<ListItem
  size="default"
  leftContent={{ title: 'Default Size Item' }}
/>
```

### Compact Size
```tsx
<ListItem
  size="compact"
  leftContent={{ title: 'Compact Size Item' }}
/>
```

## Numbered Badge

Add a numbered badge with customizable background color:

```tsx
<ListItem
  number={{
    value: 1,
    backgroundColor: 'primary-100' // or any other color option
  }}
  leftContent={{ title: 'Step 1' }}
/>
```

### Available Badge Colors
- `primary-100` (default)
- `secondary-100`
- `success-100`
- `extra-cyan-100`
- `extra-navy-100`
- `extra-violet-100`
- `extra-gold-100`
- `extra-pink-100`
- `extra-green-100`
- `extra-purple-100`

## Illustrations

### Mini Illustration
```tsx
import { BitcoinIllustration } from '@/components/mini-illustrations/BitcoinIllustration';

<ListItem
  illustration={{ illustration: BitcoinIllustration }}
  illustrationType="mini-illustration"
  leftContent={{ title: 'Bitcoin Wallet' }}
/>
```

### Icon with Color
```tsx
<ListItem
  illustration={{
    iconName: 'icon-wallet',
    color: 'primary-100'
  }}
  illustrationType="icon"
  leftContent={{ title: 'Wallet' }}
/>
```

### Asset Icon
```tsx
import { BitcoinAssetIcon } from '@/components/asset-icons/BitcoinAssetIcon';

<ListItem
  illustration={{ asset: BitcoinAssetIcon }}
  illustrationType="asset-icon"
  leftContent={{ title: 'Bitcoin' }}
/>
```

## Content Areas

### Left Content (Required)

The left content area is required and supports two modes:

#### Title & Description Mode
```tsx
<ListItem
  leftContent={{
    title: 'Transaction Complete',
    description: 'Your payment was processed'
  }}
/>
```

#### Custom HTML Mode
```tsx
<ListItem
  leftContent={{
    customContent: (
      <div className="flex items-center gap-2">
        <Icon type="icon-flash" className="text-secondary-100" />
        <div>
          <div className="font-bold">Custom Content</div>
          <div className="text-sm">Any HTML structure</div>
        </div>
      </div>
    )
  }}
/>
```

### Right Content (Optional)

The right content area is optional and follows the same pattern:

#### Title & Description Mode
```tsx
<ListItem
  leftContent={{ title: 'Bitcoin' }}
  rightContent={{
    title: '$125.50',
    description: '+2.5%'
  }}
/>
```

#### Custom HTML Mode
```tsx
<ListItem
  leftContent={{ title: 'Amount' }}
  rightContent={{
    customContent: (
      <div className="text-right">
        <div className="font-['IBMPlexSans'] text-lg text-success-100">
          +$1,234.56
        </div>
        <div className="text-sm">Received</div>
      </div>
    )
  }}
/>
```

## Indicator

Add a status indicator using the built-in Indicator component:

```tsx
<ListItem
  leftContent={{ title: 'Transaction' }}
  indicator={{
    variant: 'approved',
    label: 'Completed' // optional custom label
  }}
/>
```

### Available Indicator Variants
- `approved`
- `pending`
- `rejected`
- `viewed`
- `new`
- `neutral`
- `featured`

## Button Area

Add buttons, icons, or custom HTML to the right side:

### With Button
```tsx
<ListItem
  leftContent={{ title: 'Complete Setup' }}
  buttonArea={
    <Button size="md" variant="primary">
      Complete
    </Button>
  }
/>
```

### With Icon
```tsx
<ListItem
  leftContent={{ title: 'Settings' }}
  buttonArea={
    <Icon type="icon-chevron-right" className="text-shades-mid" />
  }
/>
```

### With Custom HTML
```tsx
<ListItem
  leftContent={{ title: 'Custom Action' }}
  buttonArea={
    <div className="flex gap-2">
      <Button size="sm">Edit</Button>
      <Button size="sm" variant="default">Delete</Button>
    </div>
  }
/>
```

## Interactive List Items

### With Hover State

Add an optional hover state with `primary-10` background:

```tsx
<ListItem
  leftContent={{ title: 'Hover over me' }}
  showHover={true}
/>
```

### With Click Handler

Make list items clickable:

```tsx
<ListItem
  leftContent={{ title: 'Click me' }}
  buttonArea={<Icon type="icon-chevron-right" />}
  showHover={true}
  onClick={() => console.log('Item clicked')}
/>
```

## Divider Control

Control the bottom divider:

```tsx
<ListItem
  leftContent={{ title: 'First Item' }}
  showDivider={true} // default
/>
<ListItem
  leftContent={{ title: 'Last Item' }}
  showDivider={false} // no divider for last item
/>
```

## Real-World Examples

### Crypto Asset List
```tsx
import { BitcoinAssetIcon } from '@/components/asset-icons/BitcoinAssetIcon';
import { EthereumAssetIcon } from '@/components/asset-icons/EthereumAssetIcon';

<div className="space-y-0">
  <ListItem
    illustration={{ asset: BitcoinAssetIcon }}
    illustrationType="asset-icon"
    leftContent={{ title: 'Bitcoin', description: '0.00245 BTC' }}
    rightContent={{ title: '$125.50', description: '+2.5%' }}
  />
  <ListItem
    illustration={{ asset: EthereumAssetIcon }}
    illustrationType="asset-icon"
    leftContent={{ title: 'Ethereum', description: '1.543 ETH' }}
    rightContent={{ title: '$2,543.20', description: '+5.2%' }}
    showDivider={false}
  />
</div>
```

### Transaction History
```tsx
<div className="space-y-0">
  <ListItem
    illustration={{ iconName: 'icon-arrow-up', color: 'alerts-100' }}
    illustrationType="icon"
    leftContent={{
      title: 'Sent Bitcoin',
      description: 'Jan 15, 2024 - 14:32'
    }}
    rightContent={{
      customContent: (
        <div className="text-right">
          <div className="font-['IBMPlexSans'] text-alerts-100">
            -0.0025 BTC
          </div>
          <div className="text-sm">-$125.50</div>
        </div>
      )
    }}
    indicator={{ variant: 'approved' }}
  />
</div>
```

### Step-by-Step Guide
```tsx
import { CreateWalletIllustration } from '@/components/mini-illustrations/CreateWalletIllustration';
import { BackupWalletIllustration } from '@/components/mini-illustrations/BackupWalletIllustration';
import { Button } from '@/components/button';

<div className="space-y-0">
  <ListItem
    number={{ value: 1, backgroundColor: 'success-100' }}
    illustration={{ illustration: CreateWalletIllustration }}
    illustrationType="mini-illustration"
    leftContent={{
      title: 'Create Your Wallet',
      description: 'Set up a secure wallet'
    }}
    indicator={{ variant: 'approved', label: 'Completed' }}
  />
  <ListItem
    number={{ value: 2, backgroundColor: 'secondary-100' }}
    illustration={{ illustration: BackupWalletIllustration }}
    illustrationType="mini-illustration"
    leftContent={{
      title: 'Backup Your Wallet',
      description: 'Save your recovery phrase'
    }}
    indicator={{ variant: 'pending', label: 'In Progress' }}
    buttonArea={<Button size="md">Continue</Button>}
  />
</div>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'default' \| 'compact'` | `'default'` | Size variant of the list item |
| `number` | `ListItemNumberConfig` | `undefined` | Optional numbered badge configuration |
| `illustration` | `ListItemIconConfig \| ListItemAssetIconConfig \| ListItemMiniIllustrationConfig` | `undefined` | Optional illustration/icon configuration |
| `illustrationType` | `'mini-illustration' \| 'icon' \| 'asset-icon'` | `undefined` | Type of illustration being used (required if illustration is provided) |
| `leftContent` | `ListItemContent` | **required** | Left content area (title, description, or custom HTML) |
| `rightContent` | `ListItemContent` | `undefined` | Optional right content area |
| `indicator` | `{ variant: IndicatorVariant, label?: string }` | `undefined` | Optional indicator configuration |
| `buttonArea` | `ReactNode` | `undefined` | Optional button area content |
| `showDivider` | `boolean` | `true` | Whether to show the divider at the bottom |
| `showHover` | `boolean` | `false` | Whether to show hover state with primary-10 background |
| `onClick` | `() => void` | `undefined` | Click handler for the entire list item |
| `className` | `string` | `''` | Additional CSS classes |

## Design Tokens

The component uses semantic design tokens from the design system:

- **Colors**: All colors use semantic tokens (e.g., `bg-primary-100`, `text-shades-dark`)
- **Spacing**: Uses token-based spacing (e.g., `gap-m`, `p-s`)
- **Typography**: Uses Satoshi Variable font for text and IBM Plex Sans for numbers
- **Borders**: Uses `border-shades-light` for dividers

## Best Practices

1. **Always provide left content** - It's the only required prop
2. **Use appropriate sizes** - Default for main lists, Compact for dense information
3. **Match button sizes to list item size** - Use `md` buttons with default size, `sm` with compact
4. **Set showDivider={false} on last items** - Prevents extra divider at the end of lists
5. **Use semantic colors** - Follow the design system color palette for number badges and icons
6. **Keep content aligned** - Left content is left-aligned, right content is right-aligned
7. **Use IBM Plex Sans for numbers** - Especially in custom content for financial/numeric data

## Accessibility

- Uses semantic HTML structure
- Clickable items have proper `role="button"` and `tabIndex`
- Dividers have `aria-hidden="true"`
- Icon buttons should have proper `aria-label` attributes

## AI Agent Guidelines

When using this component to build new UI:

1. **Choose the right size** based on information density needs
2. **Use illustrations consistently** within the same list (all icons, or all mini-illustrations)
3. **Leverage custom content** for unique layouts while maintaining structure
4. **Combine with other components** - Use existing Button, Icon, Indicator components
5. **Consider interactivity** - Add onClick handlers for navigable items
6. **Follow color semantics** - Use appropriate colors that convey meaning (green for success, red for alerts, etc.)
7. **Test both themes** - Ensure content works in both light and dark modes

