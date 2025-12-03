import type { Meta, StoryObj } from '@storybook/react';
import { CompactLineChart } from './CompactLineChart';
import { CardWithSubComponents as Card } from '../card/Card';
import { BitcoinCashAssetIcon } from '../asset-icons/BitcoinCashAssetIcon';
import { BitcoinAssetIcon } from '../asset-icons/BitcoinAssetIcon';
import { EthereumAssetIcon } from '../asset-icons/EthereumAssetIcon';

const meta = {
  title: 'Components/Charts/Compact Line Chart',
  component: CompactLineChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A compact sparkline chart component for displaying trends. Designed to be used as decoration on cards and other UI elements.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    trend: {
      control: 'select',
      options: ['positive', 'negative'],
      description: 'Trend direction - determines color scheme',
      table: {
        type: { summary: 'positive | negative' },
        defaultValue: { summary: 'positive' }
      }
    },
    width: {
      control: { type: 'number', min: 100, max: 500, step: 10 },
      description: 'Custom width of the chart (in pixels)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '220' }
      }
    },
    height: {
      control: { type: 'number', min: 30, max: 200, step: 10 },
      description: 'Custom height of the chart (in pixels)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' }
      }
    },
    data: {
      control: 'object',
      description: 'Data points for the chart',
      table: {
        type: { summary: 'DataPoint[]' }
      }
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
} satisfies Meta<typeof CompactLineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default positive trend chart
 */
export const PositiveTrend: Story = {
  args: {
    trend: 'positive'
  }
};

/**
 * Negative trend chart using the alerts color scheme
 */
export const NegativeTrend: Story = {
  args: {
    trend: 'negative'
  }
};

/**
 * Custom sized chart - wider format
 */
export const CustomSize: Story = {
  args: {
    trend: 'positive',
    width: 300,
    height: 80
  }
};

/**
 * Compact mini chart
 */
export const CompactSize: Story = {
  args: {
    trend: 'positive',
    width: 150,
    height: 40
  }
};

/**
 * Custom data - volatile pattern
 */
export const CustomData: Story = {
  args: {
    trend: 'positive',
    data: [
      { value: 10 },
      { value: 40 },
      { value: 20 },
      { value: 50 },
      { value: 15 },
      { value: 55 },
      { value: 25 },
      { value: 60 },
      { value: 35 },
      { value: 70 }
    ]
  }
};

/**
 * Example: Charts in cards
 */
export const InCardExample: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card padding="md" className="w-64">
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
      
      <Card padding="md" className="w-64">
        <Card.Content>
          <div className="flex items-center justify-between mb-2">
            <span className="text-text-secondary text-sm">Ethereum</span>
            <span className="text-text-primary font-['IBMPlexSans'] font-semibold">$2,891</span>
          </div>
          <Card.Footer spaceBetween>
            <span className="text-alerts-100 text-sm font-['IBMPlexSans']">-2.1%</span>
            <CompactLineChart trend="negative" width={100} height={30} />
          </Card.Footer>
        </Card.Content>
      </Card>
    </div>
  )
};

/**
 * Example: Multiple charts comparison
 */
export const ComparisonView: Story = {
  render: () => (
    <Card padding="lg" className="w-96">
      <Card.Header>
        <Card.Title variant="heading-md">Portfolio Performance</Card.Title>
      </Card.Header>
      
      <Card.Content className="space-y-4 mt-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-text-primary font-medium mb-1">Total Value</div>
            <div className="flex items-center gap-2">
              <span className="text-text-primary font-['IBMPlexSans'] text-lg font-semibold">$127,456</span>
              <span className="text-success-100 text-sm font-['IBMPlexSans']">+12.5%</span>
            </div>
          </div>
          <CompactLineChart trend="positive" width={120} height={40} />
        </div>

        <Card.Divider />
        
        <div>
          <div className="text-text-secondary text-sm mb-2">Asset Performance</div>
          <div className="space-y-3">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2"  >
                <BitcoinAssetIcon className="w-4 h-4"/>
                <span className="text-text-primary text-sm">BTC</span>
              </div>
              <CompactLineChart trend="positive" width={80} height={25} />
            </div>
               
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2"  >
               <EthereumAssetIcon className="w-4 h-4"/>
                <span className="text-text-primary text-sm">ETH</span>
              </div>
              <CompactLineChart trend="negative" width={80} height={25} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2"  >
                <BitcoinCashAssetIcon className="w-4 h-4"/>
                <span className="text-text-primary text-sm">BCH</span>
              </div>
              <CompactLineChart trend="positive" width={80} height={25} />
            </div>
          </div>
        </div>
      </Card.Content>
    </Card>
  )
};

/**
 * All trends side by side
 */
export const AllTrends: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <div>
        <div className="text-text-secondary text-sm mb-2">Positive Trend</div>
        <CompactLineChart trend="positive" />
      </div>
      <div>
        <div className="text-text-secondary text-sm mb-2">Negative Trend</div>
        <CompactLineChart trend="negative" />
      </div>
    </div>
  )
};

/**
 * Dark theme example
 */
export const DarkTheme: Story = {
  render: () => (
    <div data-theme="dark" className="bg-background p-8 rounded-lg">
      <div className="flex gap-8">
        <Card padding="md" className="w-64">
          <Card.Content>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2"  >
                <BitcoinAssetIcon className="w-4 h-4"/>
                <span className="text-text-primary text-lg">Bitcoin</span>
                </div>
              <span className="text-text-primary font-['IBMPlexSans'] font-semibold">$45,231</span>
            </div>
            <Card.Footer spaceBetween>
              <span className="text-success-100 text-sm font-['IBMPlexSans']">+5.4%</span>
              <CompactLineChart trend="positive" width={100} height={30} />
            </Card.Footer>
          </Card.Content>
        </Card>
        
        <Card padding="md" className="w-64">
          <Card.Content>
            <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2"  >
            <EthereumAssetIcon className="w-4 h-4"/>
              <span className="text-text-primary text-lg">Ethereum</span>
              </div>
              <span className="text-text-primary font-['IBMPlexSans'] font-semibold">$2,891</span>
            </div>
            <Card.Footer spaceBetween>
              <span className="text-alerts-100 text-sm font-['IBMPlexSans']">-2.1%</span>
              <CompactLineChart trend="negative" width={100} height={30} />
            </Card.Footer>
          </Card.Content>
        </Card>
      </div>
    </div>
  )
};

/**
 * Asset Card with Chart - Complete Example
 */
export const AssetCardComplete: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Card padding="md" className="w-80">

        <div className="flex items-center gap-4 mb-4">
            <BitcoinAssetIcon className="w-10 h-10"/>
            <Card.Header>
              <Card.Title variant="heading-sm" className="-mb-2">Bitcoin</Card.Title>
              <Card.Description className="text-[14px]">BTC</Card.Description>
            </Card.Header>
        </div>
        <Card.Divider />
        
        <Card.Content className="mt-3">
          <div className="flex items-end justify-between mb-3">
            <Card.Amount 
              amount={45231.50}
              currency="$"
              secondaryAmount="0.5 BTC"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-success-100 text-lg font-['IBMPlexSans'] font-semibold">+5.4%</span>
              <span className="text-text-secondary text-xs">Last 24h</span>
            </div>
            <CompactLineChart trend="positive" width={140} height={40} />
          </div>
        </Card.Content>
      </Card>

      <Card padding="md" className="w-80">

        <div className="flex items-center gap-4 mb-4">
          <EthereumAssetIcon className="w-10 h-10"/>
          <Card.Header>
            <Card.Title variant="heading-sm" className="-mb-2">Ethereum</Card.Title>
            <Card.Description className="text-[14px]">ETH</Card.Description>
          </Card.Header>
        </div>
        <Card.Divider />
        
        <Card.Content className="mt-3">
          <div className="flex items-end justify-between mb-3">
            <Card.Amount 
              amount={2891.23}
              currency="$"
              secondaryAmount="1.2 ETH"
            />
          </div>
        
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-alerts-100 text-lg font-['IBMPlexSans'] font-semibold">-2.1%</span>
              <span className="text-text-secondary text-xs">Last 24h</span>
            </div>
            <CompactLineChart trend="negative" width={140} height={40} />
          </div>
        </Card.Content>
      </Card>
    </div>
  )
};
