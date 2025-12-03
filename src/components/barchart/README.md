# BarChart Component

A full-featured bar chart component built on Recharts and aligned with the Bitcoin.com design system.

## Features

- **Customizable Colors**: Use any color (default: primary blue)
- **Interactive Tooltips**: Hover to see detailed data points with Satoshi font
- **Customizable Axes**: Toggle X-axis, Y-axis, and grid lines
- **Legend Control**: Show/hide legend with interactive toggle
- **Rounded Corners**: Adjustable bar border radius
- **Horizontal Mode**: Support for horizontal bar charts
- **Enhanced Features**: Custom formatters and interactive controls
- **Responsive**: Flexible width and height options
- **Theme Support**: Works in both light and dark modes
- **Accessibility**: Semantic HTML and ARIA attributes

## Usage

### Basic Example

```tsx
import { BarChart } from '@bitcoin/react-component-library';

const data = [
  { category: 'Jan', value: 100 },
  { category: 'Feb', value: 150 },
  { category: 'Mar', value: 120 },
];

// Default blue bars
<BarChart 
  data={data}
  showTooltip
/>

// Custom color
<BarChart 
  color="#2fb790"
  data={data}
  showTooltip
/>
```

### With Grid and Axes

```tsx
<BarChart 
  data={data}
  showTooltip
  showYAxis
  showGrid
  height={320}
/>
```

### Horizontal Bar Chart

```tsx
<BarChart 
  color="#2fb790"
  data={data}
  horizontal
  showTooltip
  showYAxis
  showGrid
/>
```

### With Custom Formatting

```tsx
<BarChart 
  color="#ff9500"
  data={cryptoData}
  showTooltip
  showYAxis
  showGrid
  dataLabel="Trading Volume"
  yAxisFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
  tooltipFormatter={(value) => `$${value.toLocaleString()}`}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `BarChartDataPoint[]` | Default sample data | Array of data points with `category` and `value` |
| `color` | `string` | `'#4169e1'` | Bar color (primary-100 blue) |
| `width` | `number \| string` | `'100%'` | Chart container width |
| `height` | `number` | `300` | Chart height in pixels |
| `showTooltip` | `boolean` | `true` | Show tooltip on hover |
| `showGrid` | `boolean` | `false` | Show grid lines |
| `showYAxis` | `boolean` | `true` | Show Y-axis |
| `showXAxis` | `boolean` | `true` | Show X-axis |
| `showLegend` | `boolean` | `false` | Show legend |
| `animate` | `boolean` | `true` | Enable animation |
| `barRadius` | `number` | `4` | Border radius of bars |
| `enableInteractive` | `boolean` | `false` | Enable interactive controls |
| `horizontal` | `boolean` | `false` | Horizontal orientation |
| `yAxisFormatter` | `(value: number) => string` | - | Custom Y-axis value formatter |
| `tooltipFormatter` | `(value: number) => string` | - | Custom tooltip value formatter |
| `dataLabel` | `string` | `'Value'` | Label for data series |
| `className` | `string` | - | Custom CSS class |

## Data Format

```typescript
interface BarChartDataPoint {
  category: string;    // X-axis label (required)
  value: number;       // Y-axis value (required)
  label?: string;      // Optional custom tooltip label
}
```

## Colors

The component uses **solid fill colors** (no gradients) with customizable options:

- **Default**: Blue (`#4169e1`) - primary-100 from design system
- **Green**: (`#2fb790`) - success-100, for growth/positive metrics
- **Orange**: (`#ff9500`) - secondary-100, for highlights
- **Purple**: (`#5b3de2`) - extra-violet-100, for custom data
- **Any custom color**: Pass any hex value via `color` prop

## Interactive Features

When `enableInteractive` is enabled:

- **Toggle Legend**: Button to show/hide the legend
- **Custom Tooltips**: Rich tooltips with formatted values

## Theming

The component automatically adapts to light and dark themes:

```tsx
// Light theme (default)
<BarChart data={data} />

// Dark theme (wrap in dark class)
<div className="dark">
  <BarChart data={data} />
</div>
```

## Accessibility

- All text uses Satoshi font as specified in design system
- Semantic HTML structure
- Proper color contrast for both light and dark themes
- Interactive elements are keyboard accessible

## Examples

See the Storybook documentation for comprehensive examples:

- Default blue bars
- Different colors (green, orange, purple)
- With grid and axes
- Interactive mode
- Cryptocurrency volume charts
- Custom formatters
- Horizontal orientation
- Responsive layouts
- Dark theme

