# LineChart Component - Usage Examples

## Quick Start

```tsx
import { LineChart } from '@bitcoin/react-component-library';

// Basic usage with default positive variant
<LineChart />
```

## Variants

### Positive (Green)
Use for growth, success, or positive trends.

```tsx
const positiveData = [
  { date: 'Mon', value: 100 },
  { date: 'Tue', value: 150 },
  { date: 'Wed', value: 120 },
  { date: 'Thu', value: 180 },
  { date: 'Fri', value: 200 }
];

<LineChart 
  variant="positive"
  data={positiveData}
  showTooltip
/>
```

### Negative (Red)
Use for decline, alerts, or negative trends.

```tsx
const negativeData = [
  { date: 'Mon', value: 200 },
  { date: 'Tue', value: 150 },
  { date: 'Wed', value: 180 },
  { date: 'Thu', value: 120 },
  { date: 'Fri', value: 100 }
];

<LineChart 
  variant="negative"
  data={negativeData}
  showTooltip
/>
```

### Custom (Orange)
Use for neutral or custom data.

```tsx
<LineChart 
  variant="custom"
  data={customData}
  showTooltip
/>
```

## Advanced Features

### With Y-Axis and Grid

```tsx
<LineChart 
  variant="positive"
  data={data}
  showYAxis
  showGrid
  showTooltip
  height={300}
/>
```

### Interactive Mode with Brush Control

```tsx
<LineChart 
  variant="positive"
  data={largeDataset}
  showYAxis
  showGrid
  showTooltip
  enableInteractive
  dataLabel="Revenue"
  height={380}
/>
```

### Cryptocurrency Price Chart

```tsx
const btcPriceData = [
  { date: '00:00', value: 42350, label: 'Midnight' },
  { date: '04:00', value: 43120, label: '4 AM' },
  { date: '08:00', value: 41890, label: '8 AM' },
  { date: '12:00', value: 44200, label: 'Noon' },
  { date: '16:00', value: 43560, label: '4 PM' },
  { date: '20:00', value: 45100, label: '8 PM' }
];

<LineChart 
  variant="positive"
  data={btcPriceData}
  showYAxis
  showGrid
  dataLabel="BTC Price (USD)"
  yAxisFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
  tooltipFormatter={(value) => `$${value.toLocaleString()}`}
  height={300}
/>
```

### Compact Sparkline

```tsx
<LineChart 
  variant="positive"
  data={weeklyData}
  showXAxis={false}
  showYAxis={false}
  showTooltip
  height={100}
  width={300}
/>
```

### Line Only (No Area Fill)

```tsx
<LineChart 
  variant="positive"
  data={data}
  showArea={false}
  strokeWidth={3}
  showTooltip
/>
```

### Custom Color

```tsx
<LineChart 
  customColor="#5b3de2"  // Purple
  data={data}
  showTooltip
/>
```

### With Legend

```tsx
<LineChart 
  variant="positive"
  data={data}
  showLegend
  dataLabel="Monthly Sales"
  showYAxis
  showGrid
/>
```

### Thick Stroke Line

```tsx
<LineChart 
  variant="positive"
  data={data}
  strokeWidth={4}
  showTooltip
/>
```

### No Animation

```tsx
<LineChart 
  variant="positive"
  data={data}
  animate={false}
  showTooltip
/>
```

### Responsive Width

```tsx
<div style={{ width: '100%', maxWidth: '1200px' }}>
  <LineChart 
    variant="positive"
    data={data}
    width="100%"
    height={300}
    showYAxis
    showGrid
  />
</div>
```

### Dark Theme

```tsx
<div className="dark p-4 bg-shades-almost-black">
  <LineChart 
    variant="positive"
    data={data}
    showYAxis
    showGrid
    showTooltip
  />
</div>
```

## Real-World Use Cases

### Portfolio Performance Tracker

```tsx
const portfolioData = [
  { date: 'Jan', value: 10000 },
  { date: 'Feb', value: 12500 },
  { date: 'Mar', value: 11800 },
  { date: 'Apr', value: 15600 },
  { date: 'May', value: 14200 },
  { date: 'Jun', value: 18900 }
];

<LineChart 
  variant="positive"
  data={portfolioData}
  showYAxis
  showGrid
  enableInteractive
  dataLabel="Portfolio Value"
  yAxisFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
  tooltipFormatter={(value) => `$${value.toLocaleString()}`}
  height={400}
/>
```

### Trading Volume Chart

```tsx
const volumeData = [
  { date: '9:00', value: 1250000 },
  { date: '10:00', value: 2100000 },
  { date: '11:00', value: 1890000 },
  { date: '12:00', value: 3200000 },
  { date: '13:00', value: 2750000 },
  { date: '14:00', value: 1980000 },
  { date: '15:00', value: 2450000 }
];

<LineChart 
  variant="custom"
  data={volumeData}
  showYAxis
  showGrid
  dataLabel="Trading Volume"
  yAxisFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
  tooltipFormatter={(value) => `${value.toLocaleString()} trades`}
  height={320}
/>
```

### Price Change Indicator (Negative)

```tsx
const priceDropData = [
  { date: 'Week 1', value: 50000 },
  { date: 'Week 2', value: 48000 },
  { date: 'Week 3', value: 45500 },
  { date: 'Week 4', value: 42000 }
];

<LineChart 
  variant="negative"
  data={priceDropData}
  showYAxis
  showTooltip
  dataLabel="BTC Price"
  yAxisFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
  height={280}
/>
```

### User Activity Metrics

```tsx
const activityData = [
  { date: 'Mon', value: 1250, label: 'Monday' },
  { date: 'Tue', value: 1890, label: 'Tuesday' },
  { date: 'Wed', value: 2100, label: 'Wednesday' },
  { date: 'Thu', value: 1950, label: 'Thursday' },
  { date: 'Fri', value: 2350, label: 'Friday' },
  { date: 'Sat', value: 1100, label: 'Saturday' },
  { date: 'Sun', value: 980, label: 'Sunday' }
];

<LineChart 
  variant="custom"
  data={activityData}
  showYAxis
  showGrid
  dataLabel="Active Users"
  tooltipFormatter={(value) => `${value} users`}
  height={300}
/>
```

## Integration with Other Components

### Inside a Card

```tsx
import { Card, LineChart } from '@bitcoin/react-component-library';

<Card>
  <div className="p-l">
    <h3 className="font-sans text-heading-md mb-m uppercase">
      Bitcoin Price (7 Days)
    </h3>
    <LineChart 
      variant="positive"
      data={btcWeeklyData}
      showTooltip
      height={200}
    />
  </div>
</Card>
```

### Dashboard Widget

```tsx
<div className="grid grid-cols-2 gap-l">
  <div className="bg-shades-white dark:bg-shades-extra-dark rounded-md p-l">
    <h4 className="font-sans text-body-lg font-semiBold mb-m">
      Revenue
    </h4>
    <LineChart 
      variant="positive"
      data={revenueData}
      showTooltip
      height={150}
    />
  </div>
  
  <div className="bg-shades-white dark:bg-shades-extra-dark rounded-md p-l">
    <h4 className="font-sans text-body-lg font-semiBold mb-m">
      Expenses
    </h4>
    <LineChart 
      variant="negative"
      data={expenseData}
      showTooltip
      height={150}
    />
  </div>
</div>
```

## Custom Formatters

### Percentage Formatter

```tsx
<LineChart 
  variant="positive"
  data={data}
  showYAxis
  yAxisFormatter={(value) => `${value}%`}
  tooltipFormatter={(value) => `${value.toFixed(2)}%`}
/>
```

### Abbreviated Numbers

```tsx
const formatLargeNumber = (value: number) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toString();
};

<LineChart 
  variant="positive"
  data={data}
  showYAxis
  yAxisFormatter={formatLargeNumber}
  tooltipFormatter={(value) => value.toLocaleString()}
/>
```

### Crypto Amount

```tsx
<LineChart 
  variant="positive"
  data={data}
  showYAxis
  yAxisFormatter={(value) => `${value.toFixed(8)} BTC`}
  tooltipFormatter={(value) => `${value.toFixed(8)} BTC`}
/>
```

## Data Format

```typescript
interface LineChartDataPoint {
  date: string;        // X-axis label (required)
  value: number;       // Y-axis value (required)
  label?: string;      // Optional tooltip label
}
```

## Tips & Best Practices

1. **Use appropriate variants**: 
   - Green for positive/growth
   - Red for negative/decline
   - Orange for neutral/custom

2. **Enable Y-axis for precise values**: When users need exact numbers

3. **Use grid for complex data**: Helps users track values across the chart

4. **Format large numbers**: Use abbreviations (K, M, B) for readability

5. **Add custom labels**: Provide context in tooltips with the `label` property

6. **Enable interactive mode for large datasets**: Brush control helps users zoom

7. **Match height to content**: 
   - 100-150px for compact sparklines
   - 260-300px for standard charts
   - 350-400px for detailed analysis

8. **Use Satoshi font**: Already applied by default for consistency

9. **Test in both themes**: Ensure charts look good in light and dark modes

10. **Consider mobile**: Use responsive width for mobile layouts

