# LineChart Component

A full-featured line chart component with gradient area fill, built on Recharts and aligned with the Bitcoin.com design system.

## Features

- **Three Color Variants**: Positive (green), negative (red), and custom (orange)
- **Interactive Tooltips**: Hover to see detailed data points with Satoshi font
- **Customizable Axes**: Toggle X-axis, Y-axis, and grid lines
- **Legend Control**: Show/hide legend with interactive toggle
- **Area Fill**: Beautiful gradient fills under the line
- **Enhanced Features**: Zoom, brush control, and custom formatters
- **Responsive**: Flexible width and height options
- **Theme Support**: Works in both light and dark modes
- **Accessibility**: Semantic HTML and ARIA attributes

## Usage

### Basic Example

```tsx
import { LineChart } from '@bitcoin/react-component-library';

const data = [
  { date: 'Jan', value: 100 },
  { date: 'Feb', value: 150 },
  { date: 'Mar', value: 120 },
];

<LineChart 
  variant="positive"
  data={data}
  showTooltip
/>
```

### With Y-Axis and Grid

```tsx
<LineChart 
  variant="positive"
  data={data}
  showTooltip
  showYAxis
  showGrid
  height={300}
/>
```

### Interactive Chart with Custom Formatting

```tsx
<LineChart 
  variant="positive"
  data={cryptoData}
  showTooltip
  showYAxis
  showGrid
  enableInteractive
  dataLabel="BTC Price"
  yAxisFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
  tooltipFormatter={(value) => `$${value.toLocaleString()}`}
/>
```

### Custom Color

```tsx
<LineChart 
  customColor="#5b3de2"
  data={data}
  showArea
  showTooltip
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `LineChartDataPoint[]` | Default sample data | Array of data points with `date` and `value` |
| `variant` | `'positive' \| 'negative' \| 'custom'` | `'positive'` | Color scheme variant |
| `customColor` | `string` | - | Custom hex color (overrides variant) |
| `width` | `number \| string` | `'100%'` | Chart container width |
| `height` | `number` | `260` | Chart height in pixels |
| `showTooltip` | `boolean` | `true` | Show tooltip on hover |
| `showGrid` | `boolean` | `false` | Show grid lines |
| `showYAxis` | `boolean` | `false` | Show Y-axis |
| `showXAxis` | `boolean` | `true` | Show X-axis |
| `showLegend` | `boolean` | `false` | Show legend |
| `animate` | `boolean` | `true` | Enable animation |
| `showArea` | `boolean` | `true` | Show gradient area fill |
| `strokeWidth` | `number` | `2` | Line stroke width |
| `enableInteractive` | `boolean` | `false` | Enable interactive controls (brush, legend toggle) |
| `yAxisFormatter` | `(value: number) => string` | - | Custom Y-axis value formatter |
| `tooltipFormatter` | `(value: number) => string` | - | Custom tooltip value formatter |
| `dataLabel` | `string` | `'Value'` | Label for data series |
| `className` | `string` | - | Custom CSS class |

## Data Format

```typescript
interface LineChartDataPoint {
  date: string;        // X-axis label
  value: number;       // Y-axis value
  label?: string;      // Optional custom tooltip label
}
```

## Color Variants

- **Positive**: Green (`#2fb790`) - for growth, success, positive trends
- **Negative**: Red (`#e84142`) - for decline, alerts, negative trends  
- **Custom**: Orange (`#ff9500`) - for neutral or custom data

## Interactive Features

When `enableInteractive` is enabled:

- **Toggle Legend**: Button to show/hide the legend
- **Brush Control**: Interactive brush at the bottom to zoom into specific date ranges
- **Custom Tooltips**: Rich tooltips with formatted values

## Theming

The component automatically adapts to light and dark themes:

```tsx
// Light theme (default)
<LineChart variant="positive" data={data} />

// Dark theme (wrap in dark class)
<div className="dark">
  <LineChart variant="positive" data={data} />
</div>
```

## Accessibility

- All text uses Satoshi font as specified in design system
- Semantic HTML structure
- Proper color contrast for both light and dark themes
- Interactive elements are keyboard accessible

## Examples

See the Storybook documentation for comprehensive examples:

- Basic variants (positive, negative, custom)
- With axes and grid
- Interactive mode with brush
- Cryptocurrency price charts
- Custom formatters
- Responsive layouts
- Dark theme

## Design Reference

Based on Figma design: [Web Component Library - LineChart](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18059-801)

