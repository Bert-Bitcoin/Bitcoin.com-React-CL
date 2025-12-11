import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from './PieChart';
import type { PieChartDataPoint } from './PieChart.types';

const meta: Meta<typeof PieChart> = {
  title: 'Components/Charts/Pie Chart',
  component: PieChart,
  parameters: {
    layout: 'centered',
    actions: {
      argTypesRegex: '^on.*'
    },
    docs: {
      description: {
        component: `

A full-featured pie/donut chart component built with Recharts.
Based on the design system with enhanced interactive functionality.

## Features
- Customizable slice colors using design system palette
- Hover states with custom tooltips
- Optional legend with multiple positions
- Interactive slice selection
- Donut chart variant (adjustable inner radius)
- Percentage or value display
- Custom formatters for values
- Light/dark theme support
- Satoshi font for labels, IBM Plex Sans for numbers
- Center labels for donut charts
- Padding between slices
- Animation support

## Usage
\`\`\`tsx
import { PieChart } from '@bitcoin/react-component-library';

<PieChart 
  data={chartData}
  showTooltip
  showLegend
/>

// Donut chart with custom colors
<PieChart 
  data={chartData}
  innerRadius={60}
  outerRadius={100}
  colors={['#4169e1', '#ff9500', '#2fb790']}
  showPercentage
/>

// With center label
<PieChart 
  data={chartData}
  innerRadius={70}
  centerLabel="Total Value"
  centerValue="$12,500"
/>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    colors: {
      control: 'object',
      description: 'Array of colors for slices (default: design system palette)'
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
    showLegend: {
      control: 'boolean',
      description: 'Show legend'
    },
    animate: {
      control: 'boolean',
      description: 'Enable animation'
    },
    innerRadius: {
      control: 'number',
      description: 'Inner radius (0 = full pie, > 0 = donut chart)'
    },
    outerRadius: {
      control: 'number',
      description: 'Outer radius'
    },
    showLabels: {
      control: 'boolean',
      description: 'Show labels on slices'
    },
    enableInteractive: {
      control: 'boolean',
      description: 'Enable interactive controls and slice selection'
    },
    showPercentage: {
      control: 'boolean',
      description: 'Show percentage values instead of raw values'
    },
    paddingAngle: {
      control: 'number',
      description: 'Padding angle between slices in degrees'
    },
    legendPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the legend'
    },
    dataLabel: {
      control: 'text',
      description: 'Label for the data series'
    },
    centerLabel: {
      control: 'text',
      description: 'Center label (for donut charts)'
    },
    centerValue: {
      control: 'text',
      description: 'Center value (for donut charts)'
    },
    tooltipFormatter: {
      control: false,
      description: 'Custom formatter for tooltip values',
      table: {
        type: { summary: '(value: number) => string' }
      }
    },
    labelFormatter: {
      control: false,
      description: 'Custom formatter for label values',
      table: {
        type: { summary: '(value: number) => string' }
      }
    },
    data: {
      control: false,
      description: 'Array of data points',
      table: {
        type: { summary: 'PieChartDataPoint[]' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof PieChart>;

// Sample data sets
const cryptoPortfolioData: PieChartDataPoint[] = [
  { name: 'Bitcoin', value: 40, label: 'Bitcoin (BTC)' },
  { name: 'Ethereum', value: 25, label: 'Ethereum (ETH)' },
  { name: 'Bitcoin Cash', value: 15, label: 'Bitcoin Cash (BCH)' },
  { name: 'Litecoin', value: 12, label: 'Litecoin (LTC)' },
  { name: 'Other', value: 8, label: 'Other Assets' }
];

const marketShareData: PieChartDataPoint[] = [
  { name: 'Desktop', value: 45 },
  { name: 'Mobile', value: 35 },
  { name: 'Tablet', value: 15 },
  { name: 'Other', value: 5 }
];

const revenueData: PieChartDataPoint[] = [
  { name: 'Trading Fees', value: 12500000 },
  { name: 'Subscriptions', value: 8900000 },
  { name: 'Staking', value: 5600000 },
  { name: 'Lending', value: 3200000 },
  { name: 'Other', value: 1800000 }
];

const budgetData: PieChartDataPoint[] = [
  { name: 'Development', value: 35 },
  { name: 'Marketing', value: 25 },
  { name: 'Operations', value: 20 },
  { name: 'Support', value: 12 },
  { name: 'Research', value: 8 }
];

const transactionTypeData: PieChartDataPoint[] = [
  { name: 'Send', value: 42 },
  { name: 'Receive', value: 38 },
  { name: 'Exchange', value: 15 },
  { name: 'Stake', value: 5 }
];

const twoSliceData: PieChartDataPoint[] = [
  { name: 'Active Users', value: 68 },
  { name: 'Inactive Users', value: 32 }
];

// Stories

/**
 * Default pie chart with crypto portfolio distribution
 */
export const Default: Story = {
  args: {
    data: cryptoPortfolioData,
    showTooltip: true,
    showLegend: true,
    height: 400,
    width: 600
  }
};

/**
 * Donut chart variant with inner radius
 */
export const DonutChart: Story = {
  args: {
    data: cryptoPortfolioData,
    innerRadius: 70,
    outerRadius: 120,
    showTooltip: true,
    showLegend: true,
    height: 400,
    width: 600
  }
};

/**
 * Donut chart with center label and value
 */
export const DonutWithCenterLabel: Story = {
  args: {
    data: revenueData,
    innerRadius: 80,
    outerRadius: 130,
    showTooltip: true,
    showLegend: true,
    centerLabel: 'Total Revenue',
    centerValue: '$32.0M',
    height: 450,
    width: 600,
    tooltipFormatter: (value: number) => `$${(value / 1000000).toFixed(1)}M`
  }
};

/**
 * Pie chart with percentage labels on slices
 */
export const WithLabels: Story = {
  args: {
    data: marketShareData,
    showLabels: true,
    showPercentage: true,
    showTooltip: true,
    showLegend: true,
    outerRadius: 130,
    height: 400,
    width: 600
  }
};

/**
 * Pie chart with padding between slices
 */
export const WithPadding: Story = {
  args: {
    data: budgetData,
    paddingAngle: 5,
    showTooltip: true,
    showLegend: true,
    outerRadius: 120,
    height: 400,
    width: 600
  }
};

/**
 * Interactive pie chart with slice selection
 */
export const Interactive: Story = {
  args: {
    data: cryptoPortfolioData,
    enableInteractive: true,
    showTooltip: true,
    showLegend: true,
    showPercentage: true,
    height: 450,
    width: 600
  }
};

/**
 * Chart with legend on top
 */
export const LegendTop: Story = {
  args: {
    data: transactionTypeData,
    legendPosition: 'top',
    showTooltip: true,
    showLegend: true,
    height: 450,
    width: 600
  }
};

/**
 * Chart with legend on the right
 */
export const LegendRight: Story = {
  args: {
    data: cryptoPortfolioData,
    legendPosition: 'right',
    showTooltip: true,
    showLegend: true,
    height: 400,
    width: 700
  }
};

/**
 * Chart with legend on the left
 */
export const LegendLeft: Story = {
  args: {
    data: marketShareData,
    legendPosition: 'left',
    showTooltip: true,
    showLegend: true,
    height: 400,
    width: 700
  }
};

/**
 * Chart without legend
 */
export const NoLegend: Story = {
  args: {
    data: cryptoPortfolioData,
    showLegend: false,
    showTooltip: true,
    showLabels: true,
    showPercentage: true,
    height: 400,
    width: 500
  }
};

/**
 * Simple two-slice pie chart
 */
export const TwoSlices: Story = {
  args: {
    data: twoSliceData,
    showTooltip: true,
    showLegend: true,
    showPercentage: true,
    height: 400,
    width: 500,
    colors: ['#2fb790', '#e7e7ef']
  }
};

/**
 * Custom color palette
 */
export const CustomColors: Story = {
  args: {
    data: budgetData,
    colors: ['#5b3de2', '#ff9500', '#4c9de5', '#2fb790', '#fac431'],
    showTooltip: true,
    showLegend: true,
    height: 400,
    width: 600
  }
};

/**
 * Revenue breakdown with custom formatting
 */
export const RevenueBreakdown: Story = {
  args: {
    data: revenueData,
    innerRadius: 70,
    outerRadius: 120,
    showTooltip: true,
    showLegend: true,
    dataLabel: 'Revenue',
    tooltipFormatter: (value: number) => `$${(value / 1000000).toFixed(1)}M`,
    height: 450,
    width: 650
  }
};

/**
 * Small donut chart
 */
export const SmallDonut: Story = {
  args: {
    data: transactionTypeData,
    innerRadius: 40,
    outerRadius: 70,
    showTooltip: true,
    showLegend: true,
    showPercentage: true,
    height: 300,
    width: 400
  }
};

/**
 * Large pie chart
 */
export const LargePie: Story = {
  args: {
    data: cryptoPortfolioData,
    outerRadius: 160,
    showTooltip: true,
    showLegend: true,
    showLabels: true,
    showPercentage: true,
    height: 500,
    width: 700
  }
};

/**
 * Chart without animation
 */
export const NoAnimation: Story = {
  args: {
    data: marketShareData,
    animate: false,
    showTooltip: true,
    showLegend: true,
    height: 400,
    width: 600
  }
};

/**
 * Compact chart
 */
export const Compact: Story = {
  args: {
    data: budgetData,
    innerRadius: 50,
    outerRadius: 80,
    showTooltip: true,
    showLegend: true,
    height: 300,
    width: 400
  }
};

/**
 * Chart with individual slice colors
 */
export const IndividualColors: Story = {
  args: {
    data: [
      { name: 'Bitcoin', value: 40, color: '#ff9500' },
      { name: 'Ethereum', value: 25, color: '#4169e1' },
      { name: 'Bitcoin Cash', value: 15, color: '#2fb790' },
      { name: 'Litecoin', value: 12, color: '#5b3de2' },
      { name: 'Other', value: 8, color: '#87858e' }
    ],
    showTooltip: true,
    showLegend: true,
    height: 400,
    width: 600
  }
};

/**
 * Dark theme
 */
export const DarkTheme: Story = {
  args: {
    data: cryptoPortfolioData,
    innerRadius: 70,
    outerRadius: 120,
    showTooltip: true,
    showLegend: true,
    centerLabel: 'Total Portfolio',
    centerValue: '100%',
    height: 450,
    width: 600
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
 * Responsive width
 */
export const Responsive: Story = {
  args: {
    data: marketShareData,
    showTooltip: true,
    showLegend: true,
    width: '100%',
    height: 400
  },
  decorators: [
    (Story) => (
      <div className="w-full" style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'padded'
  }
};

/**
 * Multiple charts showing different data
 */
export const MultipleCharts: Story = {
  render: () => (
    <div className="flex flex-col gap-xl p-l">
      <div>
        <h3 className="font-['Elza_Narrow'] text-heading-sm mb-m text-shades-almost-black dark:text-shades-white uppercase">
          Portfolio Distribution
        </h3>
        <PieChart
          data={cryptoPortfolioData}
          innerRadius={60}
          outerRadius={100}
          showTooltip
          showLegend
          showPercentage
          height={350}
          width={600}
        />
      </div>
      <div>
        <h3 className="font-['Elza_Narrow'] text-heading-sm mb-m text-shades-almost-black dark:text-shades-white uppercase">
          Transaction Types
        </h3>
        <PieChart
          data={transactionTypeData}
          showTooltip
          showLegend
          showLabels
          showPercentage
          height={350}
          width={600}
        />
      </div>
    </div>
  )
};

/**
 * All variants side by side
 */
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-l p-l">
      <div>
        <h3 className="font-['Elza_Narrow'] text-heading-sm mb-s text-shades-almost-black dark:text-shades-white uppercase">
          Pie Chart
        </h3>
        <PieChart
          data={budgetData}
          showTooltip
          showLegend
          height={320}
          width={400}
        />
      </div>
      <div>
        <h3 className="font-['Elza_Narrow'] text-heading-sm mb-s text-shades-almost-black dark:text-shades-white uppercase">
          Donut Chart
        </h3>
        <PieChart
          data={budgetData}
          innerRadius={60}
          showTooltip
          showLegend
          height={320}
          width={400}
        />
      </div>
      <div>
        <h3 className="font-['Elza_Narrow'] text-heading-sm mb-s text-shades-almost-black dark:text-shades-white uppercase">
          With Labels
        </h3>
        <PieChart
          data={budgetData}
          showLabels
          showPercentage
          showTooltip
          showLegend
          height={320}
          width={400}
        />
      </div>
      <div>
        <h3 className="font-['Elza_Narrow'] text-heading-sm mb-s text-shades-almost-black dark:text-shades-white uppercase">
          With Padding
        </h3>
        <PieChart
          data={budgetData}
          paddingAngle={5}
          innerRadius={60}
          showTooltip
          showLegend
          height={320}
          width={400}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen'
  }
};

/**
 * Interactive example with controls
 */
export const Playground: Story = {
  args: {
    data: cryptoPortfolioData,
    innerRadius: 0,
    outerRadius: 120,
    showTooltip: true,
    showLegend: true,
    showLabels: false,
    showPercentage: false,
    paddingAngle: 0,
    enableInteractive: false,
    legendPosition: 'bottom',
    height: 450,
    width: 600
  }
};


