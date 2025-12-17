import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../card';
import { Icon } from '../icon';
import { Illustration } from './Illustration';

// Import illustration paths
const illustrations = {
  account: '/src/illustrations/Illustration-Account.svg',
  bitcoinAgreement: '/src/illustrations/Illustration-Bitcoin-Agreement.svg',
  bitcoinAirdrop: '/src/illustrations/Illustration-Bitcoin-Airdrop.svg',
  bitcoinCashCoin: '/src/illustrations/Illustration-bitcoin-cash-coin.svg',
  bitcoinCheckmark: '/src/illustrations/Illustration-Bitcoin-Checkmark.svg',
  bitcoinCloud: '/src/illustrations/Illustration-Bitcoin-Cloud.svg',
  bitcoinCoin: '/src/illustrations/Illustration-bitcoin-coin.svg',
  bitcoinDisplay: '/src/illustrations/Illustration-Bitcoin-display.svg',
  bitcoinEthereum: '/src/illustrations/Illustration-Bitcoin-Ethereum.svg',
  bitcoinGamble: '/src/illustrations/Illustration-bitcoin-gamble.svg',
  bitcoinGold: '/src/illustrations/Illustration-Bitcoin-gold.svg',
  bitcoinIllustration: '/src/illustrations/Illustration-Bitcoin-illustration.svg',
  bitcoinMachine: '/src/illustrations/Illustration-Bitcoin-Machine.svg',
  bitcoins: '/src/illustrations/Illustration-Bitcoins.svg',
  blockchain: '/src/illustrations/Illustration-Blockchain.svg',
  buySell: '/src/illustrations/Illustration-Buy & Sell.svg',
  coinDisplay: '/src/illustrations/Illustration-coin-display.svg',
  earn: '/src/illustrations/Illustration-Earn.svg',
  ethereumCoin: '/src/illustrations/Illustration-Ethereum-coin.svg',
  ethereumMachine: '/src/illustrations/Illustration-Ethereum-Machine.svg',
  gaming: '/src/illustrations/Illustration-Gaming.svg',
  layers: '/src/illustrations/Illustration-layers.svg',
  learn: '/src/illustrations/Illustration-Learn.svg',
  maps: '/src/illustrations/Illustration-Maps.svg',
  platform: '/src/illustrations/Illustration-Platform.svg',
  platformAlt: '/src/illustrations/Illustration-Platform-Alt.svg',
  rewards: '/src/illustrations/Illustration-Rewards.svg',
  rewardsMachine: '/src/illustrations/Illustration-Rewards-Machine.svg',
  rocket: '/src/illustrations/Illustration-Rocket.svg',
  secureBitcoin: '/src/illustrations/Illustration-secure-bitcoin.svg',
  sendBitcoin: '/src/illustrations/Illustration-Send-Bitcoin.svg',
  sendEthereum: '/src/illustrations/Illustration-Send-Ethereum.svg',
  swap: '/src/illustrations/Illustration-Swap.svg',
  swapping: '/src/illustrations/Illustration-Swapping.svg',
  verseEthereum: '/src/illustrations/Illustration-Verse-Ethereum.svg',
  walletCoins: '/src/illustrations/Illustration-Wallet-coins.svg',
  wallet: '/src/illustrations/Illustration-Wallet.svg'
};

const meta: Meta<typeof Illustration> = {
  title: 'Assets/Illustrations',
  component: Illustration,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A flexible component for displaying SVG illustrations with various sizing and fit options.

## 📚 Available Illustrations

This library includes **37 illustrations** covering various Bitcoin and cryptocurrency concepts. Browse through the stories below to see all available illustrations.

## 🎨 Need More Illustrations?

If you can't find the right illustration here, explore our full collection in Figma:

**[View Full Illustration Library in Figma →](https://www.figma.com/design/bTmqzTpaNHPopxW2j7nb53/GET-STARTED?node-id=669-58)**

The Figma library contains additional illustrations and variations that you can export and add to this component library.
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'URL or path to the illustration'
    },
    alt: {
      control: 'text',
      description: 'Alt text for accessibility'
    },
    objectFit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      description: 'How the image fits within its container'
    },
    aspectRatio: {
      control: 'select',
      options: ['1/1', '4/3', '16/9', '21/9', 'auto'],
      description: 'Aspect ratio of the container'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Predefined size'
    },
    withBorder: {
      control: 'boolean',
      description: 'Whether to add a border'
    },
    rounded: {
      control: 'boolean',
      description: 'Whether to add rounded corners'
    },
    centered: {
      control: 'boolean',
      description: 'Whether to center the image'
    },
    padding: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Internal padding around the image'
    },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
      description: 'Loading behavior'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Illustration>;

// ========================================
// Basic Examples
// ========================================

export const Default: Story = {
  args: {
    src: illustrations.rocket,
    alt: 'Bitcoin Rocket Illustration',
    size: 'md'
  }
};

export const WithBorder: Story = {
  args: {
    src: illustrations.wallet,
    alt: 'Bitcoin Wallet Illustration',
    size: 'md',
    withBorder: true,
    rounded: true
  }
};

// ========================================
// Object Fit Examples
// ========================================

export const ObjectFitOptions: Story = {
  render: () => (
    <div className="flex flex-col gap-l max-w-6xl">
      <div>
        <h3 className="text-heading-sm uppercase mb-s">All Object Fit Modes</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-m">
          <div className="flex flex-col gap-xs">
            <Illustration
              src={illustrations.earn}
              alt="Contain example"
              objectFit="contain"
              aspectRatio="1/1"
              withBorder
              rounded
              backgroundColor="rgb(var(--color-surface-muted))"
            />
            <p className="text-label-xs text-text-secondary text-center uppercase">Contain (Default)</p>
            <p className="text-label-xs text-text-tertiary text-center">Fits entirely, keeps ratio</p>
          </div>
          <div className="flex flex-col gap-xs">
            <Illustration
              src={illustrations.earn}
              alt="Cover example"
              objectFit="cover"
              aspectRatio="1/1"
              withBorder
              rounded
              backgroundColor="rgb(var(--color-surface-muted))"
            />
            <p className="text-label-xs text-text-secondary text-center uppercase">Cover</p>
            <p className="text-label-xs text-text-tertiary text-center">Fills container, keeps ratio, may crop</p>
          </div>
          <div className="flex flex-col gap-xs">
            <Illustration
              src={illustrations.earn}
              alt="Fill example"
              objectFit="fill"
              aspectRatio="1/1"
              withBorder
              rounded
              backgroundColor="rgb(var(--color-surface-muted))"
            />
            <p className="text-label-xs text-text-secondary text-center uppercase">Fill</p>
            <p className="text-label-xs text-text-tertiary text-center">Stretches to fill, ignores ratio</p>
          </div>
          <div className="flex flex-col gap-xs">
            <Illustration
              src={illustrations.earn}
              alt="None example"
              objectFit="none"
              aspectRatio="1/1"
              withBorder
              rounded
              backgroundColor="rgb(var(--color-surface-muted))"
            />
            <p className="text-label-xs text-text-secondary text-center uppercase">None</p>
            <p className="text-label-xs text-text-tertiary text-center">Original size</p>
          </div>
          <div className="flex flex-col gap-xs">
            <Illustration
              src={illustrations.earn}
              alt="Scale-down example"
              objectFit="scale-down"
              aspectRatio="1/1"
              withBorder
              rounded
              backgroundColor="rgb(var(--color-surface-muted))"
            />
            <p className="text-label-xs text-text-secondary text-center uppercase">Scale-Down</p>
            <p className="text-label-xs text-text-tertiary text-center">Smaller of none/contain</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-heading-sm uppercase mb-s">Cover vs Fill Comparison</h3>
        <p className="text-body-xs text-text-secondary mb-m">
          Using a 16:9 image in a 1:1 container to show the difference
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-m max-w-2xl">
          <div className="flex flex-col gap-xs">
            <Illustration
              src={illustrations.platformAlt}
              alt="Cover: maintains aspect ratio"
              objectFit="cover"
              aspectRatio="1/1"
              withBorder
              rounded
              backgroundColor="rgb(var(--color-primary-10))"
            />
            <p className="text-label-xs text-text-secondary text-center uppercase">Cover</p>
            <p className="text-label-xs text-text-tertiary text-center">
              Maintains aspect ratio, crops edges to fill
            </p>
          </div>
          <div className="flex flex-col gap-xs">
            <Illustration
              src={illustrations.platformAlt}
              alt="Fill: stretches to fit"
              objectFit="fill"
              aspectRatio="1/1"
              withBorder
              rounded
              backgroundColor="rgb(var(--color-primary-10))"
            />
            <p className="text-label-xs text-text-secondary text-center uppercase">Fill</p>
            <p className="text-label-xs text-text-tertiary text-center">
              Stretches image to fit container, may distort
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

// ========================================
// Size Examples
// ========================================

export const SizeOptions: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-l max-w-6xl">
      <div className="flex flex-col gap-xs items-center">
        <Illustration
          src={illustrations.gaming}
          alt="Small illustration"
          size="sm"
          withBorder
          rounded
        />
        <p className="text-label-xs text-text-secondary uppercase">Small (96px)</p>
      </div>
      <div className="flex flex-col gap-xs items-center">
        <Illustration
          src={illustrations.gaming}
          alt="Medium illustration"
          size="md"
          withBorder
          rounded
        />
        <p className="text-label-xs text-text-secondary uppercase">Medium (160px)</p>
      </div>
      <div className="flex flex-col gap-xs items-center">
        <Illustration
          src={illustrations.gaming}
          alt="Large illustration"
          size="lg"
          withBorder
          rounded
        />
        <p className="text-label-xs text-text-secondary uppercase">Large (256px)</p>
      </div>
      <div className="flex flex-col gap-xs items-center">
        <Illustration
          src={illustrations.gaming}
          alt="Extra large illustration"
          size="xl"
          withBorder
          rounded
        />
        <p className="text-label-xs text-text-secondary uppercase">X-Large (384px)</p>
      </div>
    </div>
  )
};

// ========================================
// Aspect Ratio Examples
// ========================================

export const AspectRatioOptions: Story = {
  render: () => (
    <div className="flex flex-col gap-m max-w-2xl">
      <div className="flex flex-col gap-xs">
        <Illustration
          src={illustrations.platform}
          alt="1:1 aspect ratio"
          aspectRatio="1/1"
          withBorder
          rounded
          backgroundColor="rgb(var(--color-surface-muted))"
        />
        <p className="text-label-xs text-text-secondary text-center uppercase">Square (1:1)</p>
      </div>
      <div className="flex flex-col gap-xs">
        <Illustration
          src={illustrations.platform}
          alt="4:3 aspect ratio"
          aspectRatio="4/3"
          withBorder
          rounded
          backgroundColor="rgb(var(--color-surface-muted))"
        />
        <p className="text-label-xs text-text-secondary text-center uppercase">Standard (4:3)</p>
      </div>
      <div className="flex flex-col gap-xs">
        <Illustration
          src={illustrations.platform}
          alt="16:9 aspect ratio"
          aspectRatio="16/9"
          withBorder
          rounded
          backgroundColor="rgb(var(--color-surface-muted))"
        />
        <p className="text-label-xs text-text-secondary text-center uppercase">Widescreen (16:9)</p>
      </div>
      <div className="flex flex-col gap-xs">
        <Illustration
          src={illustrations.platform}
          alt="21:9 aspect ratio"
          aspectRatio="21/9"
          withBorder
          rounded
          backgroundColor="rgb(var(--color-surface-muted))"
        />
        <p className="text-label-xs text-text-secondary text-center uppercase">Ultra-wide (21:9)</p>
      </div>
    </div>
  )
};

// ========================================
// Custom Dimensions
// ========================================

export const CustomDimensions: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-m max-w-4xl">
      <div className="flex flex-col gap-xs">
        <Illustration
          src={illustrations.rewards}
          alt="Custom width"
          width={300}
          withBorder
          rounded
          backgroundColor="rgb(var(--color-surface-muted))"
        />
        <p className="text-label-xs text-text-secondary text-center uppercase">
          Custom Width (300px)
        </p>
      </div>
      <div className="flex flex-col gap-xs">
        <Illustration
          src={illustrations.rewards}
          alt="Custom width and height"
          width={400}
          height={200}
          withBorder
          rounded
          backgroundColor="rgb(var(--color-surface-muted))"
        />
        <p className="text-label-xs text-text-secondary text-center uppercase">
          Custom Width & Height (400x200px)
        </p>
      </div>
    </div>
  )
};

// ========================================
// Padding Options
// ========================================

export const PaddingOptions: Story = {
  render: () => (
    <div className="flex flex-col gap-m max-w-4xl">
      <div>
        <h3 className="text-heading-sm uppercase mb-s">Internal Padding</h3>
        <p className="text-body-xs text-text-secondary mb-m">
          Add space between the image and container edges
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-m">
        <div className="flex flex-col gap-xs">
          <Illustration
            src={illustrations.rocket}
            alt="No padding"
            padding="none"
            size="md"
            withBorder
            rounded
            backgroundColor="rgb(var(--color-primary-10))"
          />
          <p className="text-label-xs text-text-secondary text-center uppercase">None (Default)</p>
        </div>
        <div className="flex flex-col gap-xs">
          <Illustration
            src={illustrations.rocket}
            alt="Extra small padding"
            padding="xs"
            size="md"
            withBorder
            rounded
            backgroundColor="rgb(var(--color-primary-10))"
          />
          <p className="text-label-xs text-text-secondary text-center uppercase">XS Padding</p>
        </div>
        <div className="flex flex-col gap-xs">
          <Illustration
            src={illustrations.rocket}
            alt="Small padding"
            padding="sm"
            size="md"
            withBorder
            rounded
            backgroundColor="rgb(var(--color-primary-10))"
          />
          <p className="text-label-xs text-text-secondary text-center uppercase">Small Padding</p>
        </div>
        <div className="flex flex-col gap-xs">
          <Illustration
            src={illustrations.rocket}
            alt="Medium padding"
            padding="md"
            size="md"
            withBorder
            rounded
            backgroundColor="rgb(var(--color-success-10))"
          />
          <p className="text-label-xs text-text-secondary text-center uppercase">Medium Padding</p>
        </div>
        <div className="flex flex-col gap-xs">
          <Illustration
            src={illustrations.rocket}
            alt="Large padding"
            padding="lg"
            size="md"
            withBorder
            rounded
            backgroundColor="rgb(var(--color-success-10))"
          />
          <p className="text-label-xs text-text-secondary text-center uppercase">Large Padding</p>
        </div>
        <div className="flex flex-col gap-xs">
          <Illustration
            src={illustrations.rocket}
            alt="Extra large padding"
            padding="xl"
            size="md"
            withBorder
            rounded
            backgroundColor="rgb(var(--color-success-10))"
          />
          <p className="text-label-xs text-text-secondary text-center uppercase">XL Padding</p>
        </div>
      </div>
    </div>
  )
};

// ========================================
// Background Colors
// ========================================

export const WithBackgroundColors: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-m max-w-4xl">
      <Illustration
        src={illustrations.swap}
        alt="Primary background"
        size="md"
        rounded
        padding="sm"
        backgroundColor="rgb(var(--color-primary-10))"
      />
      <Illustration
        src={illustrations.swap}
        alt="Secondary background"
        size="md"
        rounded
        padding="sm"
        backgroundColor="rgb(var(--color-secondary-10))"
      />
      <Illustration
        src={illustrations.swap}
        alt="Success background"
        size="md"
        rounded
        padding="sm"
        backgroundColor="rgb(var(--color-success-10))"
      />
      <Illustration
        src={illustrations.swap}
        alt="Warning background"
        size="md"
        rounded
        padding="sm"
        backgroundColor="rgb(var(--color-warning-10))"
      />
      <Illustration
        src={illustrations.swap}
        alt="Error background"
        size="md"
        rounded
        padding="sm"
        backgroundColor="rgb(var(--color-error-10))"
      />
      <Illustration
        src={illustrations.swap}
        alt="Surface muted background"
        size="md"
        rounded
        padding="sm"
        backgroundColor="rgb(var(--color-surface-muted))"
      />
    </div>
  )
};

// ========================================
// Real-world Examples
// ========================================

export const InCardExample: Story = {
  name: 'Used in Card',
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-m max-w-5xl">
      <Card>
        <div className="flex flex-col gap-m">
          <Illustration
            src={illustrations.buySell}
            alt="Buy & Sell Bitcoin"
            aspectRatio="16/9"
            size="full"
          />
          <Card.Header>
            <Card.Title variant="heading-md">BUY & SELL</Card.Title>
            <Card.Description>
              Trade Bitcoin and other cryptocurrencies with ease
            </Card.Description>
          </Card.Header>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col gap-m">
          <Illustration
            src={illustrations.earn}
            alt="Earn Bitcoin Rewards"
            aspectRatio="16/9"
            size="full"
          />
          <Card.Header>
            <Card.Title variant="heading-md">EARN REWARDS</Card.Title>
            <Card.Description>
              Earn Bitcoin rewards on your purchases and transactions
            </Card.Description>
          </Card.Header>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col gap-m">
          <Illustration
            src={illustrations.maps}
            alt="Bitcoin Maps"
            aspectRatio="16/9"
            size="full"
          />
          <Card.Header>
            <Card.Title variant="heading-md">BITCOIN MAPS</Card.Title>
            <Card.Description>
              Find Bitcoin-friendly businesses near you
            </Card.Description>
          </Card.Header>
        </div>
      </Card>
    </div>
  )
};

export const IllustrationGallery: Story = {
  name: 'All Illustrations',
  render: () => (
    <div className="flex flex-col gap-l max-w-6xl">
      <div className="p-m bg-surface-muted rounded-md border border-border">
        <h3 className="text-heading-sm uppercase mb-s">📚 Illustration Library</h3>
        <p className="text-body text-text-secondary mb-m">
          Browse all {Object.keys(illustrations).length} available illustrations in our component library.
        </p>
        <div className="flex items-start gap-s p-s bg-surface rounded-sm border border-border">
          <Icon type="info" size="sm" className="text-primary-100 mt-[2px]" />
          <div className="flex-1">
            <p className="text-label font-semibold text-text-primary mb-xs">
              Need more illustrations?
            </p>
            <p className="text-body-xs text-text-secondary mb-s">
              Can't find what you're looking for? Visit our Figma library for the complete collection
              with additional variations and concepts.
            </p>
            <a
              href="https://www.figma.com/design/bTmqzTpaNHPopxW2j7nb53/GET-STARTED?node-id=669-58"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-xs text-label-xs font-bold text-primary-100 hover:text-primary-50 transition-colors uppercase"
            >
              View Full Library in Figma
              <Icon type="arrow-right" size="xs" className="text-current" />
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-m">
        {Object.entries(illustrations).map(([key, path]) => (
          <Card key={key} padding="sm">
            <div className="flex flex-col gap-xs">
              <Illustration
                src={path}
                alt={key}
                aspectRatio="1/1"
                size="full"
                rounded
                backgroundColor="rgb(var(--color-surface-muted))"
              />
              <p className="text-label-xs text-text-secondary text-center uppercase">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
};

// ========================================
// Full Width Example
// ========================================

export const FullWidthBanner: Story = {
  name: 'Full Width Banner',
  render: () => (
    <div className="w-full max-w-6xl">
      <Card padding="none">
        <Illustration
          src={illustrations.platformAlt}
          alt="Bitcoin Platform"
          aspectRatio="21/9"
          size="full"
          backgroundColor="rgb(var(--color-background))"
        />
      </Card>
    </div>
  )
};

