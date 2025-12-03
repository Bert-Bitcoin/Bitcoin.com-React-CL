# CompactLineChart Component

A compact sparkline chart component for displaying trends. Designed to be used as decoration on cards and other UI elements.

## Features

- **Positive/Negative Trends**: Automatically styled with success (green) or alert (red) colors from the design system
- **Customizable Size**: Set custom width and height to fit any layout
- **Gradient Fill**: Smooth gradient fill under the line for visual appeal
- **Theme Support**: Works in both light and dark modes
- **Lightweight**: Built with Recharts for optimal performance
- **Responsive**: Uses ResponsiveContainer for flexible sizing

## Usage

```tsx
import { CompactLineChart } from '@/components/compact-linechart';

// Basic positive trend
<CompactLineChart trend="positive" />

// Negative trend with custom size
<CompactLineChart trend="negative" width={300} height={80} />

// Custom data points
<CompactLineChart 
  trend="positive"
  data={[
    { value: 10 },
    { value: 20 },
    { value: 15 },
    { value: 30 }
  ]}
/>
```

## Use Cases

### In Card Components
Perfect for showing quick performance indicators:

```tsx
import { Card } from '@/components/card';
import { CompactLineChart } from '@/components/compact-linechart';

<Card padding="md">
  <Card.Content>
    <div className="flex items-center justify-between mb-2">
      <span className="text-text-secondary text-sm">Bitcoin</span>
      <span className="text-text-primary font-['IBMPlexSans'] font-semibold">$45,231</span>
    </div>
    <Card.Footer spaceBetween>
      <span className="text-success-100 text-sm font-['IBMPlexSans']">+5.4%</span>
      <CompactLineChart trend="positive" width={100} height={30} />
    </Card.Footer>
  </Card.Content>
</Card>
```

### Dashboard Widgets
Show multiple asset trends:

```tsx
<Card padding="lg">
  <Card.Header>
    <Card.Title>Portfolio Performance</Card.Title>
  </Card.Header>
  <Card.Content className="space-y-3">
    <div className="flex items-center justify-between">
      <span>BTC</span>
      <CompactLineChart trend="positive" width={80} height={25} />
    </div>
    <div className="flex items-center justify-between">
      <span>ETH</span>
      <CompactLineChart trend="negative" width={80} height={25} />
    </div>
  </Card.Content>
</Card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trend` | `'positive' \| 'negative'` | `'positive'` | Trend direction - determines color scheme |
| `data` | `DataPoint[]` | Auto-generated | Data points for the chart |
| `width` | `number` | `220` | Custom width of the chart (in pixels) |
| `height` | `number` | `50` | Custom height of the chart (in pixels) |
| `className` | `string` | - | Additional CSS classes |

## Design Tokens

The component uses the following design tokens from the color palette:

- **Positive Trend**: `success-100` (#2fb790)
- **Negative Trend**: `alerts-100` (#e84142)

## Accessibility

- The component is purely decorative and doesn't include interactive elements
- For accessibility, pair with descriptive text labels indicating the trend value
- Consider adding `aria-label` descriptions when used in important contexts

## Performance

- No animations by default for better performance
- Minimal DOM nodes using Recharts' optimized rendering
- Responsive sizing without re-renders

## Related Components

- **Card**: Often used together for data presentation
- **DescriptionList**: For detailed statistics
- **Table**: For tabular data with trends
