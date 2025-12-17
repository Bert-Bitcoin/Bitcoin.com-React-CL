import type { Meta, StoryObj } from '@storybook/react';

import { MiniIllustration } from './MiniIllustration';
import type { MiniIllustrationProps } from './MiniIllustration';
import {
  FlameStreakIllustration,
  BitcoinHandsWalletIllustration,
  SuccessCoinIllustration,
  GemsIllustration,
  ExperiencePointsIllustration,
  BtcEthZanoIllustration
} from '.';

const meta: Meta<typeof MiniIllustration> = {
  title: 'Assets/Mini Illustrations/Mini Illustration',
  component: MiniIllustration,
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
    illustration: FlameStreakIllustration,
    size: 'md'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'xl']
    },
    illustration: {
      control: false
    }
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof MiniIllustration>;

export const Default: Story = {};

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

export const CustomSize: Story = {
  args: {
    illustration: BitcoinHandsWalletIllustration,
    className: 'w-48 h-48'
  }
};

export const MultipleIllustrations: Story = {
  render: (args: MiniIllustrationProps) => (
    <div className="flex gap-m items-center">
      <MiniIllustration illustration={FlameStreakIllustration} size="md" />
      <MiniIllustration illustration={BitcoinHandsWalletIllustration} size="md" />
      <MiniIllustration illustration={BtcEthZanoIllustration} size="md" />
      <MiniIllustration illustration={SuccessCoinIllustration} size="md" />
      <MiniIllustration illustration={GemsIllustration} size="md" />
      <MiniIllustration illustration={ExperiencePointsIllustration} size="md" />
    </div>
  )
};

export const InCard: Story = {
  render: (args: MiniIllustrationProps) => (
    <div className="max-w-sm rounded-sm border border-border bg-surface p-l space-y-m">
      <div className="flex justify-center">
        <MiniIllustration illustration={SuccessCoinIllustration} size="lg" />
      </div>
      <div className="space-y-s text-center">
        <h3 className="text-heading-md font-display text-text-primary">
          Transaction Successful
        </h3>
        <p className="text-body text-text-secondary">
          Your Bitcoin transaction has been completed successfully.
        </p>
      </div>
    </div>
  )
};

export const BtcEthZano: Story = {
  args: {
    illustration: BtcEthZanoIllustration,
    size: 'lg'
  },
  render: (args: MiniIllustrationProps) => (
    <div className="flex flex-col items-center gap-m">
      <MiniIllustration illustration={BtcEthZanoIllustration} size="xl" />
      <div className="text-center space-y-xs">
        <h4 className="text-heading-sm font-display text-text-primary">
          BTC, ETH & ZANO
        </h4>
        <p className="text-body-xs text-text-secondary">
          Multi-cryptocurrency illustration
        </p>
      </div>
    </div>
  )
};

