import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from './LineChart';
import type { LineChartDataPoint } from './LineChart.types';

const meta: Meta<typeof LineChart> = {
  title: 'Components/Charts/Line Chart',
  component: LineChart,
  parameters: {
    layout: 'centered',
    actions: {
      argTypesRegex: '^on.*'
    },
    docs: {
      description: {
        component: `

A full-featured line chart component with gradient area fill, built with Recharts.
Based on the Figma design system with enhanced interactive functionality.

## Features
- Three color variants: positive (green), negative (red), custom (orange)
- Hover states with custom tooltips
- Optional Y-axis and grid lines
- Toggle legend visibility
- Gradient area fill
- Interactive features: zoom, brush control
- Custom formatters for values
- Light/dark theme support
- Satoshi font for all labels

## Usage
\`\`\`tsx
import { LineChart } from '@bitcoin/react-component-library';

<LineChart 
  variant="positive"
  data={chartData}
  showTooltip
  showYAxis
/>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['positive', 'negative', 'custom'],
      description: 'Color variant of the chart'
    },
    customColor: {
      control: 'color',
      description: 'Custom color (overrides variant)'
    },
    width: {
      control: 'text',
      description: 'Width of the chart (number or CSS value)'
    },
    height: {
      control: 'number',
      description: 'Height of the chart in pixels'
    },
    showTooltip: {
      control: 'boolean',
      description: 'Show tooltip on hover'
    },
    showGrid: {
      control: 'boolean',
      description: 'Show grid lines'
    },
    showYAxis: {
      control: 'boolean',
      description: 'Show Y-axis'
    },
    showXAxis: {
      control: 'boolean',
      description: 'Show X-axis'
    },
    showLegend: {
      control: 'boolean',
      description: 'Show legend'
    },
    animate: {
      control: 'boolean',
      description: 'Enable animation'
    },
    showArea: {
      control: 'boolean',
      description: 'Show area fill gradient'
    },
    strokeWidth: {
      control: 'number',
      description: 'Width of the line stroke'
    },
    enableInteractive: {
      control: 'boolean',
      description: 'Enable interactive controls (legend toggle, brush)'
    },
    dataLabel: {
      control: 'text',
      description: 'Label for the data series'
    },
    yAxisFormatter: {
      control: false,
      description: 'Custom formatter for Y-axis values',
      table: {
        type: { summary: '(value: number) => string' }
      }
    },
    tooltipFormatter: {
      control: false,
      description: 'Custom formatter for tooltip values',
      table: {
        type: { summary: '(value: number) => string' }
      }
    },
    data: {
      control: false,
      description: 'Array of data points',
      table: {
        type: { summary: 'LineChartDataPoint[]' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof LineChart>;

// Sample data sets
const weeklyData: LineChartDataPoint[] = [
  { date: 'Jun.5', value: 20 },
  { date: 'Jun.6', value: 35 },
  { date: 'Jun.7', value: 25 },
  { date: 'Jun.8', value: 45 },
  { date: 'Jun.9', value: 30 },
  { date: 'Jun.10', value: 50 },
  { date: 'Jun.12', value: 40 }
];

const monthlyData: LineChartDataPoint[] = [
  { date: 'Jan', value: 4000 },
  { date: 'Feb', value: 3000 },
  { date: 'Mar', value: 5000 },
  { date: 'Apr', value: 2780 },
  { date: 'May', value: 1890 },
  { date: 'Jun', value: 2390 },
  { date: 'Jul', value: 3490 },
  { date: 'Aug', value: 4000 },
  { date: 'Sep', value: 3800 },
  { date: 'Oct', value: 4300 },
  { date: 'Nov', value: 5100 },
  { date: 'Dec', value: 6200 }
];

const cryptoPriceData: LineChartDataPoint[] = [
  { date: '00:00', value: 42350, label: 'Midnight' },
  { date: '04:00', value: 43120, label: '4 AM' },
  { date: '08:00', value: 41890, label: '8 AM' },
  { date: '12:00', value: 44200, label: 'Noon' },
  { date: '16:00', value: 43560, label: '4 PM' },
  { date: '20:00', value: 45100, label: '8 PM' },
  { date: '24:00', value: 44890, label: 'Midnight' }
];

const volatileData: LineChartDataPoint[] = [
  { date: 'Mon', value: 100 },
  { date: 'Tue', value: 250 },
  { date: 'Wed', value: 150 },
  { date: 'Thu', value: 400 },
  { date: 'Fri', value: 200 },
  { date: 'Sat', value: 350 },
  { date: 'Sun', value: 180 }
];

const negativeData: LineChartDataPoint[] = [
  { date: 'Jun.5', value: 70 },
  { date: 'Jun.6', value: 55 },
  { date: 'Jun.7', value: 60 },
  { date: 'Jun.8', value: 40 },
  { date: 'Jun.9', value: 50 },
  { date: 'Jun.10', value: 30 },
  { date: 'Jun.12', value: 45 }
];

// Stories

/**
 * Default positive variant with green color scheme
 */
export const PositiveColor: Story = {
  args: {
    variant: 'positive',
    data: weeklyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: false,
    showGrid: false,
    showArea: true,
    height: 260,
    width: 700
  }
};

/**
 * Negative variant with red color scheme for declining trends
 */
export const NegativeColor: Story = {
  args: {
    variant: 'negative',
    data: negativeData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: false,
    showGrid: false,
    showArea: true,
    height: 260,
    width: 700
  }
};

/**
 * Custom variant with orange/gold color scheme
 */
export const CustomColor: Story = {
  args: {
    variant: 'custom',
    data: weeklyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: false,
    showGrid: false,
    showArea: true,
    height: 260,
    width: 700
  }
};

/**
 * Chart with Y-axis enabled for value reference
 */
export const WithYAxis: Story = {
  args: {
    variant: 'positive',
    data: monthlyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: false,
    showArea: true,
    height: 300,
    width: 700
  }
};

/**
 * Chart with grid lines for better readability
 */
export const WithGrid: Story = {
  args: {
    variant: 'positive',
    data: monthlyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showArea: true,
    height: 300,
    width: 700
  }
};

/**
 * Line chart without area fill
 */
export const LineOnly: Story = {
  args: {
    variant: 'positive',
    data: weeklyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: false,
    showGrid: false,
    showArea: false,
    strokeWidth: 3,
    height: 260,
    width: 700
  }
};

/**
 * Chart with legend enabled
 */
export const WithLegend: Story = {
  args: {
    variant: 'positive',
    data: cryptoPriceData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showLegend: true,
    showArea: true,
    dataLabel: 'BTC Price (USD)',
    height: 320,
    width: 700
  }
};

/**
 * Interactive chart with toggle controls and brush
 */
export const Interactive: Story = {
  args: {
    variant: 'positive',
    data: monthlyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showLegend: false,
    showArea: true,
    enableInteractive: true,
    dataLabel: 'Revenue',
    height: 380,
    width: 700
  }
};

/**
 * Cryptocurrency price chart with custom formatting
 */
export const CryptoPriceChart: Story = {
  args: {
    variant: 'positive',
    data: cryptoPriceData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showArea: true,
    dataLabel: 'BTC',
    yAxisFormatter: (value: number) => `$${(value / 1000).toFixed(1)}k`,
    tooltipFormatter: (value: number) => `$${value.toLocaleString()}`,
    height: 300,
    width: 700
  }
};

/**
 * Volatile data with custom purple color
 */
export const CustomColorHex: Story = {
  args: {
    variant: 'positive',
    customColor: '#5b3de2', // extra-violet-100
    data: volatileData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showArea: true,
    dataLabel: 'Activity',
    height: 300,
    width: 700
  }
};

/**
 * Large dataset with monthly revenue
 */
export const MonthlyRevenue: Story = {
  args: {
    variant: 'custom',
    data: monthlyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showArea: true,
    enableInteractive: true,
    dataLabel: 'Revenue ($)',
    yAxisFormatter: (value: number) => `$${(value / 1000).toFixed(0)}k`,
    tooltipFormatter: (value: number) => `$${value.toLocaleString()}`,
    height: 380,
    width: 800
  }
};

/**
 * Compact chart without axes
 */
export const Compact: Story = {
  args: {
    variant: 'positive',
    data: weeklyData,
    showTooltip: true,
    showXAxis: false,
    showYAxis: false,
    showGrid: false,
    showArea: true,
    strokeWidth: 2,
    height: 100,
    width: 300
  }
};

/**
 * No animation (static chart)
 */
export const NoAnimation: Story = {
  args: {
    variant: 'positive',
    data: weeklyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: false,
    showGrid: false,
    showArea: true,
    animate: false,
    height: 260,
    width: 700
  }
};

/**
 * Thick stroke line
 */
export const ThickStroke: Story = {
  args: {
    variant: 'negative',
    data: negativeData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: false,
    showArea: true,
    strokeWidth: 4,
    height: 280,
    width: 700
  }
};

/**
 * Responsive width (100%)
 */
export const Responsive: Story = {
  args: {
    variant: 'positive',
    data: monthlyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showArea: true,
    width: '100%',
    height: 300
  },
  decorators: [
    (Story) => (
      <div className="w-full" style={{ maxWidth: '1200px' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'padded'
  }
};

/**
 * Dark theme example
 */
export const DarkTheme: Story = {
  args: {
    variant: 'positive',
    data: cryptoPriceData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showArea: true,
    dataLabel: 'BTC Price',
    yAxisFormatter: (value: number) => `$${(value / 1000).toFixed(1)}k`,
    tooltipFormatter: (value: number) => `$${value.toLocaleString()}`,
    height: 300,
    width: 700
  },
  decorators: [
    (Story) => (
      <div className="dark p-l bg-shades-almost-black">
        <Story />
      </div>
    )
  ]
};

/**
 * Multiple variants side by side
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-l p-l">
      <div>
        <h3 className="font-sans text-heading-sm mb-m text-shades-almost-black dark:text-shades-white uppercase">
          Positive Color
        </h3>
        <LineChart
          variant="positive"
          data={weeklyData}
          showTooltip
          showXAxis
          height={260}
          width={700}
        />
      </div>
      <div>
        <h3 className="font-sans text-heading-sm mb-m text-shades-almost-black dark:text-shades-white uppercase">
          Negative Color
        </h3>
        <LineChart
          variant="negative"
          data={negativeData}
          showTooltip
          showXAxis
          height={260}
          width={700}
        />
      </div>
      <div>
        <h3 className="font-sans text-heading-sm mb-m text-shades-almost-black dark:text-shades-white uppercase">
          Custom Color
        </h3>
        <LineChart
          variant="custom"
          data={weeklyData}
          showTooltip
          showXAxis
          height={260}
          width={700}
        />
      </div>
    </div>
  )
};

