import type { Meta, StoryObj } from '@storybook/react';
import { TreeMap } from './TreeMap';
import type { TreeMapDataPoint } from './TreeMap.types';

const meta: Meta<typeof TreeMap> = {
  title: 'Components/Charts/Tree Map',
  component: TreeMap,
  parameters: {
    layout: 'centered',
    actions: {
      argTypesRegex: '^on.*'
    },
    docs: {
      description: {
        component: `

A hierarchical data visualization component using rectangles, built with Recharts.
Perfect for showing proportional data and compositions.

## Features
- Hierarchical data visualization using nested rectangles
- Customizable colors using design system palette
- Hover states with custom tooltips
- Automatic layout optimization
- Custom formatters for values
- Light/dark theme support
- Satoshi font for labels, IBM Plex Sans for numbers
- Responsive sizing
- Animation support

## Usage
\`\`\`tsx
import { TreeMap } from '@bitcoin/react-component-library';

<TreeMap 
  data={chartData}
  showTooltip
  showLabels
/>

// With custom formatting
<TreeMap 
  data={portfolioData}
  tooltipFormatter={(value) => \`$\${value.toLocaleString()}\`}
  labelFormatter={(value) => \`$\${(value / 1000).toFixed(0)}K\`}
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
      description: 'Array of colors for nodes (default: design system palette)'
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
    animate: {
      control: 'boolean',
      description: 'Enable animation'
    },
    showLabels: {
      control: 'boolean',
      description: 'Show labels on nodes'
    },
    aspectRatio: {
      control: 'number',
      description: 'Aspect ratio of rectangles (width/height)'
    },
    strokeColor: {
      control: 'color',
      description: 'Stroke color for borders'
    },
    strokeWidth: {
      control: 'number',
      description: 'Stroke width for borders'
    },
    minLabelSize: {
      control: 'number',
      description: 'Minimum size to show label'
    },
    dataLabel: {
      control: 'text',
      description: 'Label for the data series'
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
        type: { summary: 'TreeMapDataPoint[]' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof TreeMap>;

// Sample data sets
const cryptoPortfolioData: TreeMapDataPoint[] = [
  { name: 'Bitcoin', size: 45000 },
  { name: 'Ethereum', size: 28000 },
  { name: 'Bitcoin Cash', size: 15000 },
  { name: 'Litecoin', size: 12000 },
  { name: 'Ripple', size: 8500 },
  { name: 'Cardano', size: 6200 },
  { name: 'Polkadot', size: 4800 },
  { name: 'Chainlink', size: 3500 },
  { name: 'Stellar', size: 2200 },
  { name: 'Others', size: 1800 }
];

const marketCapData: TreeMapDataPoint[] = [
  { name: 'BTC', size: 850000000000, label: 'Bitcoin' },
  { name: 'ETH', size: 380000000000, label: 'Ethereum' },
  { name: 'BNB', size: 45000000000, label: 'Binance Coin' },
  { name: 'XRP', size: 28000000000, label: 'Ripple' },
  { name: 'ADA', size: 18000000000, label: 'Cardano' },
  { name: 'SOL', size: 15000000000, label: 'Solana' },
  { name: 'DOGE', size: 12000000000, label: 'Dogecoin' },
  { name: 'DOT', size: 8500000000, label: 'Polkadot' }
];

const tradingVolumeData: TreeMapDataPoint[] = [
  { name: 'Spot Trading', size: 125000 },
  { name: 'Futures', size: 98000 },
  { name: 'Options', size: 45000 },
  { name: 'Margin', size: 32000 },
  { name: 'P2P', size: 18000 },
  { name: 'Staking', size: 12000 }
];

const assetAllocationData: TreeMapDataPoint[] = [
  { name: 'Crypto', size: 40 },
  { name: 'Stocks', size: 30 },
  { name: 'Bonds', size: 15 },
  { name: 'Real Estate', size: 10 },
  { name: 'Cash', size: 5 }
];

const revenueSourcesData: TreeMapDataPoint[] = [
  { name: 'Trading Fees', size: 12500000 },
  { name: 'Listing Fees', size: 8900000 },
  { name: 'Staking Rewards', size: 5600000 },
  { name: 'Margin Interest', size: 3200000 },
  { name: 'Premium Subscriptions', size: 2100000 },
  { name: 'API Access', size: 1800000 },
  { name: 'Data Services', size: 900000 }
];

const userSegmentsData: TreeMapDataPoint[] = [
  { name: 'Retail Traders', size: 58 },
  { name: 'Institutional', size: 22 },
  { name: 'Whales', size: 12 },
  { name: 'Market Makers', size: 5 },
  { name: 'Miners', size: 3 }
];

// Stories

/**
 * Default tree map with crypto portfolio data
 */
export const Default: Story = {
  args: {
    data: cryptoPortfolioData,
    showTooltip: true,
    showLabels: true,
    height: 400,
    width: 700
  }
};

/**
 * Market cap visualization
 */
export const MarketCap: Story = {
  args: {
    data: marketCapData,
    showTooltip: true,
    showLabels: true,
    dataLabel: 'Market Cap',
    tooltipFormatter: (value: number) => `$${(value / 1000000000).toFixed(1)}B`,
    labelFormatter: (value: number) => `$${(value / 1000000000).toFixed(0)}B`,
    height: 450,
    width: 700
  }
};

/**
 * Trading volume breakdown
 */
export const TradingVolume: Story = {
  args: {
    data: tradingVolumeData,
    showTooltip: true,
    showLabels: true,
    dataLabel: 'Volume (24h)',
    tooltipFormatter: (value: number) => `$${value.toLocaleString()}`,
    labelFormatter: (value: number) => `$${(value / 1000).toFixed(0)}K`,
    height: 400,
    width: 650
  }
};

/**
 * Revenue sources
 */
export const RevenueSources: Story = {
  args: {
    data: revenueSourcesData,
    showTooltip: true,
    showLabels: true,
    dataLabel: 'Revenue',
    tooltipFormatter: (value: number) => `$${(value / 1000000).toFixed(2)}M`,
    labelFormatter: (value: number) => `$${(value / 1000000).toFixed(1)}M`,
    minLabelSize: 500000,
    height: 450,
    width: 700
  }
};

/**
 * Asset allocation
 */
export const AssetAllocation: Story = {
  args: {
    data: assetAllocationData,
    showTooltip: true,
    showLabels: true,
    dataLabel: 'Allocation',
    tooltipFormatter: (value: number) => `${value}%`,
    labelFormatter: (value: number) => `${value}%`,
    minLabelSize: 0,
    height: 350,
    width: 600
  }
};

/**
 * User segments
 */
export const UserSegments: Story = {
  args: {
    data: userSegmentsData,
    showTooltip: true,
    showLabels: true,
    dataLabel: 'Users',
    tooltipFormatter: (value: number) => `${value}%`,
    labelFormatter: (value: number) => `${value}%`,
    minLabelSize: 0,
    height: 350,
    width: 600
  }
};

/**
 * Custom colors
 */
export const CustomColors: Story = {
  args: {
    data: tradingVolumeData,
    colors: ['#5b3de2', '#ff9500', '#4c9de5', '#2fb790', '#fac431', '#e5527a'],
    showTooltip: true,
    showLabels: true,
    height: 400,
    width: 650
  }
};

/**
 * No labels
 */
export const NoLabels: Story = {
  args: {
    data: cryptoPortfolioData,
    showLabels: false,
    showTooltip: true,
    height: 400,
    width: 700
  }
};

/**
 * Custom aspect ratio (wider rectangles)
 */
export const WideAspectRatio: Story = {
  args: {
    data: cryptoPortfolioData,
    aspectRatio: 5 / 2,
    showTooltip: true,
    showLabels: true,
    height: 400,
    width: 700
  }
};

/**
 * Custom aspect ratio (taller rectangles)
 */
export const TallAspectRatio: Story = {
  args: {
    data: cryptoPortfolioData,
    aspectRatio: 3 / 4,
    showTooltip: true,
    showLabels: true,
    height: 500,
    width: 600
  }
};

/**
 * No borders (strokeWidth = 0)
 */
export const NoBorders: Story = {
  args: {
    data: cryptoPortfolioData,
    strokeWidth: 0,
    showTooltip: true,
    showLabels: true,
    height: 400,
    width: 700
  }
};

/**
 * Thick borders
 */
export const ThickBorders: Story = {
  args: {
    data: cryptoPortfolioData,
    strokeWidth: 4,
    strokeColor: '#ffffff',
    showTooltip: true,
    showLabels: true,
    height: 400,
    width: 700
  }
};

/**
 * Dark stroke color
 */
export const DarkStroke: Story = {
  args: {
    data: cryptoPortfolioData,
    strokeColor: '#27272a',
    strokeWidth: 2,
    showTooltip: true,
    showLabels: true,
    height: 400,
    width: 700
  }
};

/**
 * Small treemap
 */
export const Small: Story = {
  args: {
    data: assetAllocationData,
    showTooltip: true,
    showLabels: true,
    minLabelSize: 0,
    height: 250,
    width: 400
  }
};

/**
 * Large treemap
 */
export const Large: Story = {
  args: {
    data: marketCapData,
    showTooltip: true,
    showLabels: true,
    tooltipFormatter: (value: number) => `$${(value / 1000000000).toFixed(1)}B`,
    labelFormatter: (value: number) => `$${(value / 1000000000).toFixed(0)}B`,
    height: 600,
    width: 900
  }
};

/**
 * No animation
 */
export const NoAnimation: Story = {
  args: {
    data: cryptoPortfolioData,
    animate: false,
    showTooltip: true,
    showLabels: true,
    height: 400,
    width: 700
  }
};

/**
 * Responsive width
 */
export const Responsive: Story = {
  args: {
    data: marketCapData,
    showTooltip: true,
    showLabels: true,
    width: '100%',
    height: 450,
    tooltipFormatter: (value: number) => `$${(value / 1000000000).toFixed(1)}B`,
    labelFormatter: (value: number) => `$${(value / 1000000000).toFixed(0)}B`
  },
  decorators: [
    (Story) => (
      <div className="w-full" style={{ maxWidth: '900px' }}>
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
    data: marketCapData,
    showTooltip: true,
    showLabels: true,
    dataLabel: 'Market Cap',
    tooltipFormatter: (value: number) => `$${(value / 1000000000).toFixed(1)}B`,
    labelFormatter: (value: number) => `$${(value / 1000000000).toFixed(0)}B`,
    strokeColor: '#1c1c1c',
    height: 450,
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
 * Multiple treemaps
 */
export const MultipleTreemaps: Story = {
  render: () => (
    <div className="flex flex-col gap-xl p-l">
      <div>
        <h3 className="font-['Elza_Narrow'] text-heading-sm mb-m text-shades-almost-black dark:text-shades-white uppercase">
          Portfolio Distribution
        </h3>
        <TreeMap
          data={cryptoPortfolioData}
          showTooltip
          showLabels
          height={300}
          width={700}
        />
      </div>
      <div>
        <h3 className="font-['Elza_Narrow'] text-heading-sm mb-m text-shades-almost-black dark:text-shades-white uppercase">
          Trading Volume by Type
        </h3>
        <TreeMap
          data={tradingVolumeData}
          showTooltip
          showLabels
          tooltipFormatter={(value) => `$${value.toLocaleString()}`}
          labelFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
          height={300}
          width={700}
        />
      </div>
    </div>
  )
};

/**
 * Comparison of different aspect ratios
 */
export const AspectRatioComparison: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-l p-l">
      <div>
        <h3 className="font-['Elza_Narrow'] text-heading-sm mb-s text-shades-almost-black dark:text-shades-white uppercase">
          Wide (5:2)
        </h3>
        <TreeMap
          data={assetAllocationData}
          aspectRatio={5 / 2}
          showTooltip
          showLabels
          minLabelSize={0}
          height={280}
          width={400}
        />
      </div>
      <div>
        <h3 className="font-['Elza_Narrow'] text-heading-sm mb-s text-shades-almost-black dark:text-shades-white uppercase">
          Tall (3:4)
        </h3>
        <TreeMap
          data={assetAllocationData}
          aspectRatio={3 / 4}
          showTooltip
          showLabels
          minLabelSize={0}
          height={380}
          width={280}
        />
      </div>
      <div>
        <h3 className="font-['Elza_Narrow'] text-heading-sm mb-s text-shades-almost-black dark:text-shades-white uppercase">
          Square (1:1)
        </h3>
        <TreeMap
          data={assetAllocationData}
          aspectRatio={1}
          showTooltip
          showLabels
          minLabelSize={0}
          height={320}
          width={320}
        />
      </div>
      <div>
        <h3 className="font-['Elza_Narrow'] text-heading-sm mb-s text-shades-almost-black dark:text-shades-white uppercase">
          Default (4:3)
        </h3>
        <TreeMap
          data={assetAllocationData}
          showTooltip
          showLabels
          minLabelSize={0}
          height={280}
          width={380}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen'
  }
};

/**
 * Interactive playground
 */
export const Playground: Story = {
  args: {
    data: cryptoPortfolioData,
    showTooltip: true,
    showLabels: true,
    aspectRatio: 4 / 3,
    strokeColor: '#ffffff',
    strokeWidth: 2,
    minLabelSize: 1000,
    height: 450,
    width: 700
  }
};


