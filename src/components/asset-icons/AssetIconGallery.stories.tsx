import type { Meta, StoryObj } from '@storybook/react';
import { AssetIcon } from './AssetIcon';
import * as AssetIcons from '.';

const meta: Meta = {
  title: 'Assets/Asset Icon Gallery',
  parameters: {
    layout: 'padded'
  }
};

export default meta;

type Story = StoryObj;

export const AllAssetIcons: Story = {
  render: () => {
    // Filter out the AssetIcon wrapper component and types
    const assetIconComponents = Object.entries(AssetIcons)
      .filter(([name]) => name.endsWith('AssetIcon') && name !== 'AssetIcon')
      .sort(([a], [b]) => a.localeCompare(b));

    return (
      <div className="space-y-l">
        <div>
          <h2 className="text-heading-lg font-display text-text-primary mb-m uppercase">
            All Asset Icons
          </h2>
          <p className="text-body text-text-secondary mb-l">
            A complete gallery of {assetIconComponents.length} cryptocurrency and asset icons.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-m">
          {assetIconComponents.map(([name, Component]) => {
            // Extract the asset name from the component name
            const assetName = name.replace('AssetIcon', '');
            
            return (
              <div
                key={name}
                className="flex flex-col items-center gap-s p-m rounded-s border border-border bg-surface hover:border-border-hover transition-colors"
              >
                <AssetIcon
                  asset={Component as React.ComponentType<React.SVGProps<SVGSVGElement>>}
                  size="lg"
                />
                <div className="text-center">
                  <p className="text-body-sm font-medium text-text-primary">
                    {assetName}
                  </p>
                  <p className="text-caption text-text-secondary">
                    {name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export const AssetIconsBySize: Story = {
  render: () => {
    const sampleAssets = [
      ['Bitcoin', AssetIcons.BitcoinAssetIcon],
      ['Ethereum', AssetIcons.EthereumAssetIcon],
      ['Verse', AssetIcons.VerseAssetIcon],
      ['Stellar', AssetIcons.StellarAssetIcon],
      ['USDC', AssetIcons.USDcAssetIcon],
      ['USDT', AssetIcons.USDtAssetIcon]
    ] as const;

    const sizes = [
      { name: 'Extra Small', value: 'xs' as const, description: '16px (w-4 h-4)' },
      { name: 'Small', value: 'sm' as const, description: '24px (w-6 h-6)' },
      { name: 'Medium', value: 'md' as const, description: '32px (w-8 h-8)' },
      { name: 'Large', value: 'lg' as const, description: '48px (w-12 h-12)' },
      { name: 'Extra Large', value: 'xl' as const, description: '64px (w-16 h-16)' }
    ];

    return (
      <div className="space-y-2xl">
        <div>
          <h2 className="text-heading-lg font-display text-text-primary mb-m uppercase">
            Asset Icons by Size
          </h2>
          <p className="text-body text-text-secondary">
            Asset icons are available in 5 different sizes.
          </p>
        </div>

        {sizes.map(({ name, value, description }) => (
          <div key={value} className="space-y-m">
            <div>
              <h3 className="text-heading-sm font-display text-text-primary uppercase">
                {name}
              </h3>
              <p className="text-body-sm text-text-secondary">{description}</p>
            </div>
            <div className="flex gap-m items-center flex-wrap">
              {sampleAssets.map(([assetName, Component]) => (
                <div
                  key={assetName}
                  className="flex flex-col items-center gap-xs p-s rounded-s border border-border bg-surface"
                >
                  <AssetIcon
                    asset={Component as React.ComponentType<React.SVGProps<SVGSVGElement>>}
                    size={value}
                  />
                  <p className="text-caption text-text-secondary">{assetName}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  },
  render: () => {
    const assetIconComponents = Object.entries(AssetIcons)
      .filter(([name]) => name.endsWith('AssetIcon') && name !== 'AssetIcon')
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(0, 12); // Show first 12 for dark mode demo

    return (
      <div className="dark space-y-l">
        <div>
          <h2 className="text-heading-lg font-display text-text-primary mb-m uppercase">
            Asset Icons in Dark Mode
          </h2>
          <p className="text-body text-text-secondary">
            Sample of asset icons rendered in dark mode.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-m">
          {assetIconComponents.map(([name, Component]) => {
            const assetName = name.replace('AssetIcon', '');
            
            return (
              <div
                key={name}
                className="flex flex-col items-center gap-s p-m rounded-s border border-border bg-surface hover:border-border-hover transition-colors"
              >
                <AssetIcon
                  asset={Component as React.ComponentType<React.SVGProps<SVGSVGElement>>}
                  size="lg"
                />
                <p className="text-body-sm font-medium text-text-primary text-center">
                  {assetName}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

