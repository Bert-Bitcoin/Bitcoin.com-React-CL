import type { Meta, StoryObj } from '@storybook/react';

import { AssetIcon } from './AssetIcon';
import type { AssetIconProps } from './AssetIcon';
import {
  BitcoinAssetIcon,
  EthereumAssetIcon,
  VerseAssetIcon,
  StellarAssetIcon,
  USDcAssetIcon
} from '.';

const meta: Meta<typeof AssetIcon> = {
  title: 'Assets/Asset Icons/Asset Icon',
  component: AssetIcon,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'Canvas',
      values: [
        { name: 'Canvas', value: '#f9f9fb' },
        { name: 'Dark', value: '#1c1c1c' }
      ]
    }
  },
  args: {
    asset: BitcoinAssetIcon,
    size: 'md'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    asset: {
      control: false
    }
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof AssetIcon>;

export const Default: Story = {};

export const ExtraSmall: Story = {
  args: {
    size: 'xs'
  }
};

export const Small: Story = {
  args: {
    size: 'sm'
  }
};

export const Medium: Story = {
  args: {
    size: 'md'
  }
};

export const Large: Story = {
  args: {
    size: 'lg'
  }
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl'
  }
};

export const Bitcoin: Story = {
  args: {
    asset: BitcoinAssetIcon,
    size: 'lg'
  }
};

export const Ethereum: Story = {
  args: {
    asset: EthereumAssetIcon,
    size: 'lg'
  }
};

export const Verse: Story = {
  args: {
    asset: VerseAssetIcon,
    size: 'lg'
  }
};

export const CustomSize: Story = {
  args: {
    asset: BitcoinAssetIcon,
    className: 'w-20 h-20'
  }
};

export const MultipleAssets: Story = {
  render: (args: AssetIconProps) => (
    <div className="flex gap-m items-center">
      <AssetIcon asset={BitcoinAssetIcon} size="md" />
      <AssetIcon asset={EthereumAssetIcon} size="md" />
      <AssetIcon asset={VerseAssetIcon} size="md" />
      <AssetIcon asset={StellarAssetIcon} size="md" />
      <AssetIcon asset={USDcAssetIcon} size="md" />
    </div>
  )
};

export const InCard: Story = {
  render: (args: AssetIconProps) => (
    <div className="max-w-sm rounded-s border border-border bg-surface p-l space-y-m">
      <div className="flex items-center gap-m">
        <AssetIcon asset={BitcoinAssetIcon} size="lg" />
        <div className="space-y-xs">
          <h3 className="text-heading-sm font-display text-text-primary uppercase">
            Bitcoin
          </h3>
          <p className="text-body-sm text-text-secondary">
            BTC
          </p>
        </div>
      </div>
      <div className="space-y-xs">
        <div className="flex justify-between">
          <span className="text-body-sm text-text-secondary">Balance</span>
          <span className="text-body-sm font-medium text-text-primary">0.05234 BTC</span>
        </div>
        <div className="flex justify-between">
          <span className="text-body-sm text-text-secondary">Value</span>
          <span className="text-body-sm font-medium text-text-primary">$2,345.67</span>
        </div>
      </div>
    </div>
  )
};

