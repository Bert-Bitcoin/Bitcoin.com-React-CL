import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './BarChart';
import type { BarChartDataPoint } from './BarChart.types';

const meta: Meta<typeof BarChart> = {
  title: 'Components/Charts/Bar Chart',
  component: BarChart,
  parameters: {
    layout: 'centered',
    actions: {
      argTypesRegex: '^on.*'
    },
    docs: {
      description: {
        component: `

A full-featured bar chart component built with Recharts.
Based on the design system with enhanced interactive functionality.

## Features
- Customizable bar colors
- Hover states with custom tooltips
- Optional Y-axis and grid lines
- Toggle legend visibility
- Horizontal or vertical orientation
- Interactive features
- Custom formatters for values
- Light/dark theme support
- Satoshi font for all labels

## Usage
\`\`\`tsx
import { BarChart } from '@bitcoin/react-component-library';

<BarChart 
  data={chartData}
  showTooltip
  showYAxis
/>

// With custom color
<BarChart 
  color="#2fb790"
  data={chartData}
  showTooltip
/>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
      description: 'Bar color (default: primary-100 #4169e1)'
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
    barRadius: {
      control: 'number',
      description: 'Border radius of bars'
    },
    enableInteractive: {
      control: 'boolean',
      description: 'Enable interactive controls'
    },
    horizontal: {
      control: 'boolean',
      description: 'Horizontal orientation'
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
        type: { summary: 'BarChartDataPoint[]' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof BarChart>;

// Sample data sets
const weeklyData: BarChartDataPoint[] = [
  { category: 'Mon', value: 400 },
  { category: 'Tue', value: 300 },
  { category: 'Wed', value: 600 },
  { category: 'Thu', value: 450 },
  { category: 'Fri', value: 700 },
  { category: 'Sat', value: 350 },
  { category: 'Sun', value: 500 }
];

const monthlyData: BarChartDataPoint[] = [
  { category: 'Jan', value: 4000 },
  { category: 'Feb', value: 3000 },
  { category: 'Mar', value: 5000 },
  { category: 'Apr', value: 2780 },
  { category: 'May', value: 1890 },
  { category: 'Jun', value: 2390 },
  { category: 'Jul', value: 3490 },
  { category: 'Aug', value: 4000 },
  { category: 'Sep', value: 3800 },
  { category: 'Oct', value: 4300 },
  { category: 'Nov', value: 5100 },
  { category: 'Dec', value: 6200 }
];

const cryptoVolumeData: BarChartDataPoint[] = [
  { category: 'BTC', value: 12500000, label: 'Bitcoin' },
  { category: 'ETH', value: 8900000, label: 'Ethereum' },
  { category: 'BCH', value: 2100000, label: 'Bitcoin Cash' },
  { category: 'XRP', value: 5600000, label: 'Ripple' },
  { category: 'LTC', value: 1800000, label: 'Litecoin' }
];

const revenueData: BarChartDataPoint[] = [
  { category: 'Q1', value: 125000 },
  { category: 'Q2', value: 156000 },
  { category: 'Q3', value: 142000 },
  { category: 'Q4', value: 198000 }
];

const negativeData: BarChartDataPoint[] = [
  { category: 'Mon', value: 700 },
  { category: 'Tue', value: 600 },
  { category: 'Wed', value: 300 },
  { category: 'Thu', value: 450 },
  { category: 'Fri', value: 200 },
  { category: 'Sat', value: 550 },
  { category: 'Sun', value: 400 }
];

// Stories

/**
 * Default bar chart with primary blue color
 */
export const Default: Story = {
  args: {
    data: weeklyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: false,
    height: 300,
    width: 700
  }
};

/**
 * Bright red bars for debugging visibility
 */
export const DebugRed: Story = {
  args: {
    color: '#ff0000', // Bright red
    data: [
      { category: 'A', value: 100 },
      { category: 'B', value: 200 },
      { category: 'C', value: 150 },
      { category: 'D', value: 250 }
    ],
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    height: 300,
    width: 500
  }
};

/**
 * Green bars for positive metrics
 */
export const GreenBars: Story = {
  args: {
    color: '#2fb790', // success-100
    data: weeklyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: false,
    height: 300,
    width: 700
  }
};

/**
 * Orange bars for custom data
 */
export const OrangeBars: Story = {
  args: {
    color: '#ff9500', // secondary-100
    data: weeklyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: false,
    height: 300,
    width: 700
  }
};

/**
 * Chart with grid lines
 */
export const WithGrid: Story = {
  args: {
    data: monthlyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    height: 320,
    width: 700
  }
};

/**
 * Chart with legend
 */
export const WithLegend: Story = {
  args: {
    data: revenueData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showLegend: true,
    dataLabel: 'Quarterly Revenue',
    height: 340,
    width: 700
  }
};

/**
 * Interactive chart with controls
 */
export const Interactive: Story = {
  args: {
    data: monthlyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    enableInteractive: true,
    dataLabel: 'Monthly Sales',
    height: 360,
    width: 700
  }
};

/**
 * Cryptocurrency volume chart with custom formatting
 */
export const CryptoVolume: Story = {
  args: {
    color: '#ff9500', // secondary-100 (orange)
    data: cryptoVolumeData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    dataLabel: 'Volume (24h)',
    yAxisFormatter: (value: number) => `$${(value / 1000000).toFixed(1)}M`,
    tooltipFormatter: (value: number) => `$${value.toLocaleString()}`,
    height: 320,
    width: 700
  }
};

/**
 * Purple bars with custom color
 */
export const PurpleBars: Story = {
  args: {
    color: '#5b3de2', // extra-violet-100
    data: weeklyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    height: 300,
    width: 700
  }
};

/**
 * Rounded bars
 */
export const RoundedBars: Story = {
  args: {
    color: '#2fb790', // success-100
    data: weeklyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: false,
    barRadius: 8,
    height: 300,
    width: 700
  }
};

/**
 * No animation (static chart)
 */
export const NoAnimation: Story = {
  args: {
    data: weeklyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    animate: false,
    height: 300,
    width: 700
  }
};

/**
 * Horizontal orientation
 */
export const Horizontal: Story = {
  args: {
    color: '#2fb790', // success-100
    data: cryptoVolumeData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    horizontal: true,
    yAxisFormatter: (value: number) => `$${(value / 1000000).toFixed(1)}M`,
    tooltipFormatter: (value: number) => `$${value.toLocaleString()}`,
    height: 350,
    width: 700
  }
};

/**
 * Compact chart
 */
export const Compact: Story = {
  args: {
    data: weeklyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: false,
    showGrid: false,
    height: 200,
    width: 400
  }
};

/**
 * Responsive width
 */
export const Responsive: Story = {
  args: {
    data: monthlyData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    width: '100%',
    height: 320
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
 * Dark theme
 */
export const DarkTheme: Story = {
  args: {
    data: cryptoVolumeData,
    showTooltip: true,
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    dataLabel: 'Trading Volume',
    yAxisFormatter: (value: number) => `$${(value / 1000000).toFixed(1)}M`,
    tooltipFormatter: (value: number) => `$${value.toLocaleString()}`,
    height: 320,
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
 * Multiple color examples side by side
 */
export const MultipleColors: Story = {
  render: () => (
    <div className="flex flex-col gap-l p-l">
      <div>
        <h3 className="font-sans text-heading-sm mb-m text-shades-almost-black dark:text-shades-white uppercase">
          Blue (Default)
        </h3>
        <BarChart
          data={weeklyData}
          showTooltip
          showXAxis
          showYAxis
          height={280}
          width={700}
        />
      </div>
      <div>
        <h3 className="font-sans text-heading-sm mb-m text-shades-almost-black dark:text-shades-white uppercase">
          Green
        </h3>
        <BarChart
          color="#2fb790"
          data={weeklyData}
          showTooltip
          showXAxis
          showYAxis
          height={280}
          width={700}
        />
      </div>
      <div>
        <h3 className="font-sans text-heading-sm mb-m text-shades-almost-black dark:text-shades-white uppercase">
          Orange
        </h3>
        <BarChart
          color="#ff9500"
          data={weeklyData}
          showTooltip
          showXAxis
          showYAxis
          height={280}
          width={700}
        />
      </div>
    </div>
  )
};

