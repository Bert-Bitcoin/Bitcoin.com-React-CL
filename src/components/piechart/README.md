# PieChart Component

A full-featured, accessible pie and donut chart component built with Recharts, following the Bitcoin.com design system.

## Overview

The PieChart component provides a beautiful, interactive way to visualize proportional data. It supports both traditional pie charts and donut charts (with configurable inner radius), and includes comprehensive customization options.

## Features

- ✅ **Multiple Chart Types**: Traditional pie or donut chart variants
- ✅ **Design System Colors**: Uses approved color palette from design tokens
- ✅ **Interactive Mode**: Click to select slices, hover for details
- ✅ **Flexible Legends**: Position legend on any side (top, bottom, left, right)
- ✅ **Custom Tooltips**: Rich tooltips with Satoshi font for labels and IBM Plex Sans for numbers
- ✅ **Center Labels**: Display total or summary in the center of donut charts
- ✅ **Slice Labels**: Show values or percentages directly on slices
- ✅ **Padding**: Add spacing between slices for better visual separation
- ✅ **Animations**: Smooth entrance animations
- ✅ **Custom Formatters**: Format values and labels however you need
- ✅ **Light/Dark Theme**: Full support for both themes
- ✅ **Responsive**: Adapts to container size
- ✅ **Accessible**: Semantic markup and keyboard navigation

## Basic Usage

```tsx
import { PieChart } from '@bitcoin/react-component-library';

const data = [
  { name: 'Bitcoin', value: 40 },
  { name: 'Ethereum', value: 25 },
  { name: 'Bitcoin Cash', value: 15 },
  { name: 'Litecoin', value: 12 },
  { name: 'Other', value: 8 }
];

function MyComponent() {
  return (
    <PieChart 
      data={data}
      showTooltip
      showLegend
    />
  );
}
```

## Examples

### Donut Chart

```tsx
<PieChart 
  data={data}
  innerRadius={70}
  outerRadius={120}
  showTooltip
  showLegend
/>
```

### Donut Chart with Center Label

```tsx
<PieChart 
  data={data}
  innerRadius={80}
  outerRadius={130}
  centerLabel="Total Value"
  centerValue="$12,500"
  showTooltip
  showLegend
/>
```

### With Percentage Labels

```tsx
<PieChart 
  data={data}
  showLabels
  showPercentage
  showTooltip
  showLegend
/>
```

### With Padding Between Slices

```tsx
<PieChart 
  data={data}
  paddingAngle={5}
  innerRadius={60}
  showTooltip
  showLegend
/>
```

### Interactive Mode

```tsx
<PieChart 
  data={data}
  enableInteractive
  showTooltip
  showLegend
/>
```

### Custom Colors

```tsx
<PieChart 
  data={data}
  colors={['#4169e1', '#ff9500', '#2fb790', '#5b3de2', '#4c9de5']}
  showTooltip
  showLegend
/>
```

### Individual Slice Colors

```tsx
const data = [
  { name: 'Bitcoin', value: 40, color: '#ff9500' },
  { name: 'Ethereum', value: 25, color: '#4169e1' },
  { name: 'Bitcoin Cash', value: 15, color: '#2fb790' }
];

<PieChart 
  data={data}
  showTooltip
  showLegend
/>
```

### Legend Positioning

```tsx
// Legend on right
<PieChart 
  data={data}
  legendPosition="right"
  showLegend
/>

// Legend on top
<PieChart 
  data={data}
  legendPosition="top"
  showLegend
/>
```

### Custom Formatting

```tsx
<PieChart 
  data={revenueData}
  tooltipFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
  labelFormatter={(value) => `$${value.toLocaleString()}`}
  dataLabel="Revenue"
  showTooltip
  showLegend
/>
```

### Responsive Width

```tsx
<PieChart 
  data={data}
  width="100%"
  height={400}
  showTooltip
  showLegend
/>
```

## Props

### Data Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `PieChartDataPoint[]` | Default sample data | Array of data points to display |

### Appearance Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `colors` | `string[]` | Design system palette | Array of colors for slices |
| `innerRadius` | `number` | `0` | Inner radius (0 = pie, > 0 = donut) |
| `outerRadius` | `number` | `120` | Outer radius of the chart |
| `paddingAngle` | `number` | `0` | Padding between slices in degrees |
| `width` | `number \| string` | `'100%'` | Width of chart container |
| `height` | `number` | `400` | Height of chart container |

### Display Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showTooltip` | `boolean` | `true` | Show tooltip on hover |
| `showLegend` | `boolean` | `true` | Show legend |
| `showLabels` | `boolean` | `false` | Show labels on slices |
| `showPercentage` | `boolean` | `false` | Show percentage instead of values |
| `animate` | `boolean` | `true` | Enable animations |

### Interactive Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enableInteractive` | `boolean` | `false` | Enable interactive controls |

### Legend Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `legendPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Position of legend |
| `legendVerticalAlign` | `'top' \| 'middle' \| 'bottom'` | `'middle'` | Vertical alignment of legend |

### Label Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `dataLabel` | `string` | `'Value'` | Label for data series |
| `centerLabel` | `string` | `undefined` | Center label (for donut charts) |
| `centerValue` | `string` | `undefined` | Center value (for donut charts) |

### Formatter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tooltipFormatter` | `(value: number) => string` | `undefined` | Custom tooltip value formatter |
| `labelFormatter` | `(value: number) => string` | `undefined` | Custom label value formatter |

### Other Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |

## Data Structure

```typescript
interface PieChartDataPoint {
  /** Name/label for the pie slice */
  name: string;
  /** Value for the slice */
  value: number;
  /** Optional custom color for this slice */
  color?: string;
  /** Optional label for custom tooltip display */
  label?: string;
}
```

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

- **Labels and category names**: Satoshi font
- **Numbers and values**: IBM Plex Sans font
- **Tooltips**: Satoshi for labels, IBM Plex Sans for numbers

## Theming

The component fully supports light and dark themes:

```tsx
// Light theme (default)
<PieChart data={data} />

// Dark theme (wrap in dark container)
<div className="dark bg-shades-almost-black p-l">
  <PieChart data={data} />
</div>
```

## Accessibility

- Uses semantic SVG structure
- Tooltips provide additional context
- Interactive elements are keyboard accessible
- Proper color contrast in both themes

## Performance

- Smooth animations powered by Recharts
- Can disable animations with `animate={false}`
- Handles large datasets efficiently
- Responsive without performance degradation

## Common Use Cases

### Portfolio Distribution

```tsx
const portfolioData = [
  { name: 'Bitcoin', value: 40 },
  { name: 'Ethereum', value: 25 },
  { name: 'Bitcoin Cash', value: 15 },
  { name: 'Other', value: 20 }
];

<PieChart 
  data={portfolioData}
  innerRadius={70}
  centerLabel="Total"
  centerValue="100%"
/>
```

### Budget Allocation

```tsx
const budgetData = [
  { name: 'Development', value: 35 },
  { name: 'Marketing', value: 25 },
  { name: 'Operations', value: 20 },
  { name: 'Support', value: 12 },
  { name: 'Research', value: 8 }
];

<PieChart 
  data={budgetData}
  showPercentage
  showLabels
/>
```

### Revenue Breakdown

```tsx
const revenueData = [
  { name: 'Trading Fees', value: 12500000 },
  { name: 'Subscriptions', value: 8900000 },
  { name: 'Staking', value: 5600000 }
];

<PieChart 
  data={revenueData}
  innerRadius={80}
  tooltipFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
  centerLabel="Total Revenue"
  centerValue="$27.0M"
/>
```

## Best Practices

1. **Use donut charts for totals**: When you want to display a total value, use a donut chart with `centerLabel` and `centerValue`
2. **Limit slices**: For readability, try to keep the number of slices under 7-8. Group smaller values into "Other"
3. **Use percentages for comparisons**: Enable `showPercentage` when comparing relative proportions
4. **Choose appropriate colors**: Use colors from the design system palette for consistency
5. **Add padding for clarity**: Use `paddingAngle` to separate slices visually when needed
6. **Position legends wisely**: Use `legendPosition` to optimize space based on your layout
7. **Format large numbers**: Use `tooltipFormatter` to make large numbers more readable (e.g., "12.5M" instead of "12500000")

## Dependencies

- `recharts` - Charting library
- `tailwind-merge` - CSS class merging
- `react` - UI framework

## Related Components

- `BarChart` - For comparing values across categories
- `LineChart` - For showing trends over time
- `CompactLineChart` - For small inline trend visualizations

## Support

For issues, questions, or contributions, please refer to the main project repository.



