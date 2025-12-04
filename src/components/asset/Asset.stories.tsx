import type { Meta, StoryObj } from '@storybook/react';
import { Asset } from './Asset';
import {
  BitcoinAssetIcon,
  EthereumAssetIcon,
  BitcoinCashAssetIcon,
  StellarAssetIcon,
  VerseAssetIcon,
  USDcAssetIcon,
  USDtAssetIcon,
  AAVEAssetIcon,
  UNIAssetIcon,
  LINKAssetIcon,
} from '../asset-icons';
import { Card } from '../card';
import { Table, type TableColumn } from '../table';

const meta = {
  title: 'Components/Elements/Asset',
  component: Asset,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
      description: 'The size variant of the asset display',
    },
    name: {
      control: 'text',
      description: 'The full name of the asset',
    },
    ticker: {
      control: 'text',
      description: 'The ticker/symbol of the asset',
    },
    icon: {
      control: false,
      description: 'The asset icon component (SVG)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Asset>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story - Bitcoin Large
export const Default: Story = {
  args: {
    icon: BitcoinAssetIcon,
    name: 'Bitcoin',
    ticker: 'BTC',
    size: 'lg',
  },
};

// Size Variants
export const Large: Story = {
  args: {
    icon: BitcoinAssetIcon,
    name: 'Bitcoin',
    ticker: 'BTC',
    size: 'lg',
  },
};

export const Medium: Story = {
  args: {
    icon: EthereumAssetIcon,
    name: 'Ethereum',
    ticker: 'ETH',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    icon: BitcoinCashAssetIcon,
    name: 'Bitcoin Cash',
    ticker: 'BCH',
    size: 'sm',
  },
};

export const ExtraSmall: Story = {
  args: {
    icon: StellarAssetIcon,
    name: 'Stellar',
    ticker: 'XLM',
    size: 'xs',
  },
};

// With Network Icon
export const WithNetworkIcon: Story = {
  args: {
    icon: USDcAssetIcon,
    name: 'USD Coin',
    ticker: 'USDC',
    size: 'lg',
    networkIcon: EthereumAssetIcon,
  },
};

// Without Ticker (Small)
export const WithoutTickerSmall: Story = {
  args: {
    icon: BitcoinAssetIcon,
    name: 'Bitcoin',
    size: 'sm',
  },
};

// Without Ticker (Extra Small)
export const WithoutTickerExtraSmall: Story = {
  args: {
    icon: EthereumAssetIcon,
    name: 'Ethereum',
    size: 'xs',
  },
};

// All Sizes Comparison
export const AllSizes: Story = {
  args: {} as any,
  render: () => (
    <div className="flex flex-col gap-l">
      <div className="flex flex-col gap-s">
        <h3 className="text-heading-sm font-display uppercase text-shades-black dark:text-shades-white">
          Large (40px icon)
        </h3>
        <Asset icon={BitcoinAssetIcon} name="Bitcoin" ticker="BTC" size="lg" />
      </div>
      <div className="flex flex-col gap-s">
        <h3 className="text-heading-sm font-display uppercase text-shades-black dark:text-shades-white">
          Medium (32px icon)
        </h3>
        <Asset icon={EthereumAssetIcon} name="Ethereum" ticker="ETH" size="md" />
      </div>
      <div className="flex flex-col gap-s">
        <h3 className="text-heading-sm font-display uppercase text-shades-black dark:text-shades-white">
          Small (24px icon)
        </h3>
        <Asset icon={BitcoinCashAssetIcon} name="Bitcoin Cash" ticker="BCH" size="sm" />
      </div>
      <div className="flex flex-col gap-s">
        <h3 className="text-heading-sm font-display uppercase text-shades-black dark:text-shades-white">
          Extra Small (20px icon)
        </h3>
        <Asset icon={StellarAssetIcon} name="Stellar" ticker="XLM" size="xs" />
      </div>
    </div>
  ),
};

// Multiple Assets Gallery
export const AssetsGallery: Story = {
  args: {} as any,
  render: () => (
    <div className="flex flex-col gap-xl">
      {/* Large size row */}
      <div className="flex flex-col gap-m">
        <h3 className="text-heading-sm font-display uppercase text-shades-black dark:text-shades-white">
          Large Size
        </h3>
        <div className="flex flex-wrap gap-l">
          <Asset icon={BitcoinAssetIcon} name="Bitcoin" ticker="BTC" size="lg" />
          <Asset icon={EthereumAssetIcon} name="Ethereum" ticker="ETH" size="lg" />
          <Asset icon={VerseAssetIcon} name="Verse" ticker="VERSE" size="lg" />
          <Asset icon={USDcAssetIcon} name="USD Coin" ticker="USDC" size="lg" networkIcon={EthereumAssetIcon} />
        </div>
      </div>

      {/* Medium size row */}
      <div className="flex flex-col gap-m">
        <h3 className="text-heading-sm font-display uppercase text-shades-black dark:text-shades-white">
          Medium Size
        </h3>
        <div className="flex flex-wrap gap-l">
          <Asset icon={BitcoinAssetIcon} name="Bitcoin" ticker="BTC" size="md" />
          <Asset icon={EthereumAssetIcon} name="Ethereum" ticker="ETH" size="md" />
          <Asset icon={USDcAssetIcon} name="USD Coin" ticker="USDC" size="md" />
          <Asset icon={USDtAssetIcon} name="Tether" ticker="USDT" size="md" networkIcon={EthereumAssetIcon} />
        </div>
      </div>

      {/* Small size row */}
      <div className="flex flex-col gap-m">
        <h3 className="text-heading-sm font-display uppercase text-shades-black dark:text-shades-white">
          Small Size
        </h3>
        <div className="flex flex-wrap gap-l">
          <Asset icon={BitcoinAssetIcon} name="Bitcoin" ticker="BTC" size="sm" />
          <Asset icon={EthereumAssetIcon} name="Ethereum" size="sm" />
          <Asset icon={AAVEAssetIcon} name="Aave" ticker="AAVE" size="sm" />
          <Asset icon={UNIAssetIcon} name="Uniswap" ticker="UNI" size="sm" networkIcon={EthereumAssetIcon} />
          <Asset icon={LINKAssetIcon} name="Chainlink" ticker="LINK" size="sm" />
        </div>
      </div>

      {/* Extra small size row */}
      <div className="flex flex-col gap-m">
        <h3 className="text-heading-sm font-display uppercase text-shades-black dark:text-shades-white">
          Extra Small Size
        </h3>
        <div className="flex flex-wrap gap-m">
          <Asset icon={BitcoinAssetIcon} name="Bitcoin" ticker="BTC" size="xs" />
          <Asset icon={EthereumAssetIcon} name="Ethereum" size="xs" />
          <Asset icon={AAVEAssetIcon} name="Aave" ticker="AAVE" size="xs" />
          <Asset icon={UNIAssetIcon} name="Uniswap" size="xs" />
          <Asset icon={LINKAssetIcon} name="Chainlink" ticker="LINK" size="xs" networkIcon={EthereumAssetIcon} />
          <Asset icon={StellarAssetIcon} name="Stellar" ticker="XLM" size="xs" />
        </div>
      </div>
    </div>
  ),
};

// Dark Mode Example
export const DarkMode: Story = {
  args: {
    icon: BitcoinAssetIcon,
    name: 'Bitcoin',
    ticker: 'BTC',
    size: 'lg',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};

// In a List Context
export const InListContext: Story = {
  args: {} as any,
  render: () => (
    <Card variant="default" padding="md" className="w-80">
      <Card.Header>
        <Card.Title variant="heading-sm">Your Assets</Card.Title>
      </Card.Header>
      <Card.Content>
        <div className="flex flex-col gap-s">
          <div className="flex items-center justify-between p-s rounded hover:bg-shades-extra-light dark:hover:bg-shades-extra-dark transition-colors">
            <Asset icon={BitcoinAssetIcon} name="Bitcoin" ticker="BTC" size="sm" />
            <span className="font-['IBMPlexSans'] font-medium text-shades-black dark:text-shades-white">
              0.0234 BTC
            </span>
          </div>
          <div className="flex items-center justify-between p-s rounded hover:bg-shades-extra-light dark:hover:bg-shades-extra-dark transition-colors">
            <Asset icon={EthereumAssetIcon} name="Ethereum" ticker="ETH" size="sm" />
            <span className="font-['IBMPlexSans'] font-medium text-shades-black dark:text-shades-white">
              1.5 ETH
            </span>
          </div>
          <div className="flex items-center justify-between p-s rounded hover:bg-shades-extra-light dark:hover:bg-shades-extra-dark transition-colors">
            <Asset icon={USDcAssetIcon} name="USD Coin" ticker="USDC" size="sm" />
            <span className="font-['IBMPlexSans'] font-medium text-shades-black dark:text-shades-white">
              1,250.00 USDC
            </span>
          </div>
        </div>
      </Card.Content>
    </Card>
  ),
};

// Network Icon Showcase
export const NetworkIconShowcase: Story = {
  args: {} as any,
  render: () => (
    <div className="flex flex-col gap-xl">
      <div className="flex flex-col gap-m">
        <h3 className="text-heading-sm font-display uppercase text-shades-black dark:text-shades-white">
          Cross-Chain Assets with Network Icons
        </h3>
        <p className="text-body-sm text-shades-semi-dark dark:text-shades-semi-light">
          Network icons appear in the bottom-right corner of the main asset icon to indicate the blockchain network.
        </p>
      </div>

      {/* Large with network */}
      <div className="flex flex-col gap-m">
        <h3 className="text-label font-sans font-medium text-shades-semi-dark dark:text-shades-semi-light uppercase">
          Large Size
        </h3>
        <div className="flex flex-wrap gap-l">
          <Asset icon={USDcAssetIcon} name="USD Coin" ticker="USDC" size="lg" networkIcon={EthereumAssetIcon} />
          <Asset icon={USDtAssetIcon} name="Tether" ticker="USDT" size="lg" networkIcon={EthereumAssetIcon} />
        </div>
      </div>

      {/* Medium with network */}
      <div className="flex flex-col gap-m">
        <h3 className="text-label font-sans font-medium text-shades-semi-dark dark:text-shades-semi-light uppercase">
          Medium Size
        </h3>
        <div className="flex flex-wrap gap-l">
          <Asset icon={USDcAssetIcon} name="USD Coin" ticker="USDC" size="md" networkIcon={EthereumAssetIcon} />
          <Asset icon={USDtAssetIcon} name="Tether" ticker="USDT" size="md" networkIcon={StellarAssetIcon} />
        </div>
      </div>

      {/* Small with network */}
      <div className="flex flex-col gap-m">
        <h3 className="text-label font-sans font-medium text-shades-semi-dark dark:text-shades-semi-light uppercase">
          Small Size
        </h3>
        <div className="flex flex-wrap gap-l">
          <Asset icon={USDcAssetIcon} name="USD Coin" ticker="USDC" size="sm" networkIcon={EthereumAssetIcon} />
          <Asset icon={UNIAssetIcon} name="Uniswap" ticker="UNI" size="sm" networkIcon={EthereumAssetIcon} />
          <Asset icon={AAVEAssetIcon} name="Aave" size="sm" networkIcon={EthereumAssetIcon} />
        </div>
      </div>

      {/* Extra small with network */}
      <div className="flex flex-col gap-m">
        <h3 className="text-label font-sans font-medium text-shades-semi-dark dark:text-shades-semi-light uppercase">
          Extra Small Size
        </h3>
        <div className="flex flex-wrap gap-m">
          <Asset icon={USDcAssetIcon} name="USD Coin" ticker="USDC" size="xs" networkIcon={EthereumAssetIcon} />
          <Asset icon={LINKAssetIcon} name="Chainlink" ticker="LINK" size="xs" networkIcon={EthereumAssetIcon} />
          <Asset icon={AAVEAssetIcon} name="Aave" size="xs" networkIcon={EthereumAssetIcon} />
        </div>
      </div>
    </div>
  ),
};

// In a Table Context
export const InTableContext: Story = {
  args: {} as any,
  render: () => {
    interface AssetData {
      name: string;
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      networkIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      price: string;
      change: string;
      changePositive: boolean;
      balance: string;
    }

    const assetData: AssetData[] = [
      {
        name: 'Bitcoin',
        icon: BitcoinAssetIcon,
        price: '$43,250.00',
        change: '+2.5%',
        changePositive: true,
        balance: '0.0234 BTC',
      },
      {
        name: 'Ethereum',
        icon: EthereumAssetIcon,
        price: '$2,285.50',
        change: '-1.2%',
        changePositive: false,
        balance: '1.5 ETH',
      },
      {
        name: 'USD Coin',
        icon: USDcAssetIcon,
        networkIcon: EthereumAssetIcon,
        price: '$1.00',
        change: '0.0%',
        changePositive: true,
        balance: '1,250.00 USDC',
      },
      {
        name: 'Tether',
        icon: USDtAssetIcon,
        networkIcon: EthereumAssetIcon,
        price: '$1.00',
        change: '+0.01%',
        changePositive: true,
        balance: '500.00 USDT',
      },
    ];

    const columns: TableColumn<AssetData>[] = [
      {
        id: 'asset',
        label: 'Asset',
        accessor: (row) => (
          <Asset 
            icon={row.icon} 
            name={row.name} 
            size="sm"
            networkIcon={row.networkIcon}
          />
        ),
        type: 'custom',
        align: 'left',
      },
      {
        id: 'price',
        label: 'Price',
        accessor: 'price',
        type: 'numeric',
        align: 'right',
      },
      {
        id: 'change',
        label: '24h Change',
        accessor: (row) => (
          <span className={row.changePositive && row.change !== '0.0%' ? 'text-success-100' : row.change === '0.0%' ? 'text-shades-semi-dark dark:text-shades-semi-light' : 'text-alerts-100'}>
            {row.change}
          </span>
        ),
        type: 'custom',
        align: 'right',
      },
      {
        id: 'balance',
        label: 'Balance',
        accessor: 'balance',
        type: 'numeric',
        align: 'right',
      },
    ];

    return (
      <div className="w-full max-w-3xl">
        <Table columns={columns} data={assetData} variant="default" />
      </div>
    );
  },
};

