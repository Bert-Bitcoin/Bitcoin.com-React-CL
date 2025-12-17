# TreeMap Component

A hierarchical data visualization component using rectangles, built with Recharts and following the Bitcoin.com design system.

## Overview

The TreeMap component uses nested rectangles to visualize hierarchical or proportional data. Each rectangle's area is proportional to its value, making it perfect for showing compositions, distributions, and relative sizes at a glance.

## Features

- ✅ **Hierarchical Visualization**: Display data using proportional rectangles
- ✅ **Design System Colors**: Uses approved color palette from design tokens
- ✅ **Interactive Tooltips**: Rich tooltips with Satoshi font for labels and IBM Plex Sans for numbers
- ✅ **Flexible Layout**: Adjustable aspect ratio for different layouts
- ✅ **Custom Labels**: Show values directly on rectangles
- ✅ **Custom Formatters**: Format values and labels however you need
- ✅ **Customizable Borders**: Control stroke color and width
- ✅ **Light/Dark Theme**: Full support for both themes
- ✅ **Responsive**: Adapts to container size
- ✅ **Animations**: Smooth entrance animations
- ✅ **Accessible**: Semantic markup and tooltips

## Basic Usage

```tsx
import { TreeMap } from '@bitcoin/react-component-library';

const data = [
  { name: 'Bitcoin', size: 40000 },
  { name: 'Ethereum', size: 25000 },
  { name: 'Bitcoin Cash', size: 15000 },
  { name: 'Litecoin', size: 12000 },
  { name: 'Other', size: 8000 }
];

function MyComponent() {
  return (
    <TreeMap 
      data={data}
      showTooltip
      showLabels
    />
  );
}
```

## Examples

### Market Cap Visualization

```tsx
const marketCapData = [
  { name: 'BTC', size: 850000000000, label: 'Bitcoin' },
  { name: 'ETH', size: 380000000000, label: 'Ethereum' },
  { name: 'BNB', size: 45000000000, label: 'Binance Coin' }
];

<TreeMap 
  data={marketCapData}
  tooltipFormatter={(value) => `$${(value / 1000000000).toFixed(1)}B`}
  labelFormatter={(value) => `$${(value / 1000000000).toFixed(0)}B`}
  dataLabel="Market Cap"
/>
```

### Revenue Breakdown

```tsx
const revenueData = [
  { name: 'Trading Fees', size: 12500000 },
  { name: 'Listing Fees', size: 8900000 },
  { name: 'Staking', size: 5600000 }
];

<TreeMap 
  data={revenueData}
  tooltipFormatter={(value) => `$${(value / 1000000).toFixed(2)}M`}
  labelFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
  minLabelSize={500000}
/>
```

### Custom Colors

```tsx
<TreeMap 
  data={data}
  colors={['#4169e1', '#ff9500', '#2fb790', '#5b3de2', '#4c9de5']}
  showTooltip
  showLabels
/>
```

### Custom Aspect Ratio

```tsx
// Wider rectangles
<TreeMap 
  data={data}
  aspectRatio={5 / 2}
  showTooltip
  showLabels
/>

// Taller rectangles
<TreeMap 
  data={data}
  aspectRatio={3 / 4}
  showTooltip
  showLabels
/>
```

### No Borders

```tsx
<TreeMap 
  data={data}
  strokeWidth={0}
  showTooltip
  showLabels
/>
```

### Thick Borders

```tsx
<TreeMap 
  data={data}
  strokeWidth={4}
  strokeColor="#ffffff"
  showTooltip
  showLabels
/>
```

### Responsive Width

```tsx
<TreeMap 
  data={data}
  width="100%"
  height={400}
  showTooltip
  showLabels
/>
```

## Props

### Data Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `TreeMapDataPoint[]` | Default sample data | Array of data points to display |

### Appearance Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `colors` | `string[]` | Design system palette | Array of colors for rectangles |
| `aspectRatio` | `number` | `4 / 3` | Aspect ratio of rectangles (width/height) |
| `strokeColor` | `string` | `'#ffffff'` | Border color for rectangles |
| `strokeWidth` | `number` | `2` | Border width in pixels |
| `width` | `number \| string` | `'100%'` | Width of chart container |
| `height` | `number` | `400` | Height of chart container |

### Display Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showTooltip` | `boolean` | `true` | Show tooltip on hover |
| `showLabels` | `boolean` | `true` | Show labels on rectangles |
| `animate` | `boolean` | `true` | Enable animations |
| `minLabelSize` | `number` | `1000` | Minimum size to show label |

### Label & Format Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `dataLabel` | `string` | `'Value'` | Label for data series in tooltip |
| `tooltipFormatter` | `(value: number) => string` | `undefined` | Custom tooltip value formatter |
| `labelFormatter` | `(value: number) => string` | `undefined` | Custom label value formatter |

### Advanced Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `nestingDepth` | `number` | `1` | Nesting depth for hierarchical data |
| `customContent` | `(props: any) => ReactElement` | `undefined` | Custom content renderer |
| `className` | `string` | `undefined` | Additional CSS classes |

## Data Structure

```typescript
interface TreeMapDataPoint {
  /** Name/label for the tree node */
  name: string;
  /** Value/size of the node */
  size?: number;
  /** Value (alternative to size) */
  value?: number;
  /** Children nodes (for nested treemaps) */
  children?: TreeMapDataPoint[];
  /** Optional custom color for this node */
  color?: string;
  /** Optional label for custom tooltip display */
  label?: string;
}
```

**Note**: You can use either `size` or `value` for the data value. The component will check for both.

## Default Colors

The component uses the following default color palette from the design system:

1. `#4169e1` - primary-100 (blue)
2. `#ff9500` - secondary-100 (orange)
3. `#2fb790` - success-100 (green)
4. `#5b3de2` - extra-violet-100 (purple)
5. `#4c9de5` - extra-cyan-100 (cyan)
6. `#fac431` - extra-yellow-100 (yellow)
7. `#e5527a` - extra-pink-100 (pink)
8. `#5f66dd` - extra-navy-100 (navy)
9. `#2aa5a5` - extra-green-100 (teal)
10. `#a395cc` - extra-purple-100 (lavender)

Colors are applied in order and cycle if there are more data points than colors.

## Typography

Following the design system rules:

- **Labels and category names**: Satoshi font (white text on colored backgrounds)
- **Numbers and values**: IBM Plex Sans font (white text on colored backgrounds)
- **Tooltips**: Satoshi for labels, IBM Plex Sans for numbers

## Theming

The component fully supports light and dark themes:

```tsx
// Light theme (default)
<TreeMap data={data} />

// Dark theme (wrap in dark container)
<div className="dark bg-shades-almost-black p-l">
  <TreeMap 
    data={data} 
    strokeColor="#1c1c1c"
  />
</div>
```

**Tip**: In dark mode, consider using darker stroke colors for better visual harmony.

## Accessibility

- Tooltips provide context for each rectangle
- Semantic SVG structure
- Proper color contrast for readability
- Hover states for interaction feedback

## Performance

- Efficient rendering with Recharts
- Animations can be disabled if needed
- Handles large datasets well
- Responsive without performance degradation

## Common Use Cases

### Portfolio Distribution

```tsx
const portfolioData = [
  { name: 'Bitcoin', size: 45000 },
  { name: 'Ethereum', size: 28000 },
  { name: 'Bitcoin Cash', size: 15000 },
  { name: 'Other', size: 12000 }
];

<TreeMap 
  data={portfolioData}
  showTooltip
  showLabels
/>
```

### Trading Volume by Type

```tsx
const volumeData = [
  { name: 'Spot', size: 125000 },
  { name: 'Futures', size: 98000 },
  { name: 'Options', size: 45000 }
];

<TreeMap 
  data={volumeData}
  tooltipFormatter={(value) => `$${value.toLocaleString()}`}
  labelFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
/>
```

### User Segments

```tsx
const segmentsData = [
  { name: 'Retail', size: 58 },
  { name: 'Institutional', size: 22 },
  { name: 'Whales', size: 12 },
  { name: 'Market Makers', size: 5 },
  { name: 'Miners', size: 3 }
];

<TreeMap 
  data={segmentsData}
  tooltipFormatter={(value) => `${value}%`}
  labelFormatter={(value) => `${value}%`}
  minLabelSize={0}
/>
```

### Asset Allocation

```tsx
const allocationData = [
  { name: 'Crypto', size: 40 },
  { name: 'Stocks', size: 30 },
  { name: 'Bonds', size: 15 },
  { name: 'Real Estate', size: 10 },
  { name: 'Cash', size: 5 }
];

<TreeMap 
  data={allocationData}
  tooltipFormatter={(value) => `${value}%`}
  labelFormatter={(value) => `${value}%`}
  minLabelSize={0}
/>
```

## Best Practices

1. **Use meaningful names**: Keep rectangle labels short and descriptive
2. **Format large numbers**: Use `tooltipFormatter` and `labelFormatter` to make large numbers readable
3. **Adjust minLabelSize**: Set this to prevent labels on very small rectangles
4. **Choose aspect ratio wisely**: Use wider rectangles for horizontal layouts, taller for vertical
5. **Limit data points**: For best readability, keep the number of rectangles under 15-20
6. **Use consistent units**: Ensure all values use the same unit of measurement
7. **Adjust stroke for dark mode**: Use darker strokes in dark mode for better visual harmony
8. **Show percentages for comparisons**: Use percentage formatters when comparing relative sizes

## Tips

- **Small rectangles**: Adjust `minLabelSize` to hide labels on small rectangles
- **Custom colors**: Use `color` property on individual data points for specific coloring
- **Aspect ratio**: Experiment with different ratios to find what works best for your data
- **Borders**: Use `strokeWidth={0}` for a seamless look, or increase for clear separation
- **Responsive design**: Use `width="100%"` and wrap in a max-width container for responsive layouts

## Dependencies

- `recharts` - Charting library
- `tailwind-merge` - CSS class merging
- `react` - UI framework

## Related Components

- `PieChart` - For circular proportion visualization
- `BarChart` - For comparing values across categories
- `LineChart` - For showing trends over time

## Support

For issues, questions, or contributions, please refer to the main project repository.



