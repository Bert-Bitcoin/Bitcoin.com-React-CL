import type { Meta, StoryObj } from '@storybook/react';

import { ListItem } from './ListItem';
import { Button } from '../button';
import { Icon } from '../icon';
import { CoinsIllustration } from '../mini-illustrations/CoinsIllustration';
import { BitcoinIllustration } from '../mini-illustrations/BitcoinIllustration';
import { BackupWalletIllustration } from '../mini-illustrations/BackupWalletIllustration';
import { CreateWalletIllustration } from '../mini-illustrations/CreateWalletIllustration';
import { HowToButBtcIllustration } from '../mini-illustrations/HowToButBtcIllustration';
import { Secure1Illustration } from '../mini-illustrations/Secure1Illustration';
import { BitcoinAssetIcon } from '../asset-icons/BitcoinAssetIcon';
import { EthereumAssetIcon } from '../asset-icons/EthereumAssetIcon';
import { BitcoinCashAssetIcon } from '../asset-icons/BitcoinCashAssetIcon';
import { USDcAssetIcon } from '../asset-icons/USDcAssetIcon';

const meta: Meta<typeof ListItem> = {
  title: 'Components/Content/Lists',
  component: ListItem,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible list item component that provides a solid boilerplate for creating consistent list items. Supports numbered badges, various types of illustrations, customizable content areas, indicators, and button areas.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'The size variant of the list item'
    },
    number: {
      control: 'object',
      description: 'Optional numbered badge configuration'
    },
    illustration: {
      control: 'object',
      description: 'Optional illustration/icon configuration'
    },
    illustrationType: {
      control: 'select',
      options: ['mini-illustration', 'icon', 'asset-icon'],
      description: 'The type of illustration being used'
    },
    leftContent: {
      control: 'object',
      description: 'Left content area (title, description, or custom HTML)'
    },
    rightContent: {
      control: 'object',
      description: 'Optional right content area (title, description, or custom HTML)'
    },
    indicator: {
      control: 'object',
      description: 'Optional indicator configuration'
    },
    buttonArea: {
      control: false,
      description: 'Optional button area content'
    },
    showDivider: {
      control: 'boolean',
      description: 'Whether to show the divider at the bottom'
    },
    showHover: {
      control: 'boolean',
      description: 'Whether to show hover state with primary-10 background'
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for the entire list item'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ListItem>;

// Basic Examples
export const Default: Story = {
  args: {
    size: 'default',
    number: {
      value: 1,
      backgroundColor: 'primary-100'
    },
    illustration: {
      illustration: CoinsIllustration
    },
    illustrationType: 'mini-illustration',
    leftContent: {
      title: 'Large Title',
      description: 'Description'
    },
    rightContent: {
      title: 'Large Title',
      description: 'Description'
    },
    indicator: {
      variant: 'approved'
    },
    buttonArea: <Button size="md">Label</Button>,
    showDivider: true,
    showHover: true
  }
};

export const Compact: Story = {
  args: {
    size: 'compact',
    number: {
      value: 1,
      backgroundColor: 'primary-100'
    },
    illustration: {
      illustration: CoinsIllustration
    },
    illustrationType: 'mini-illustration',
    leftContent: {
      title: 'Large Title',
      description: 'Description'
    },
    rightContent: {
      title: 'Large Title',
      description: 'Description'
    },
    indicator: {
      variant: 'approved'
    },
    buttonArea: <Button size="sm">Label</Button>,
    showDivider: true
  }
};

// Minimal Configuration
export const MinimalWithTitleOnly: Story = {
  args: {
    leftContent: {
      title: 'Simple list item'
    },
    showDivider: true
  }
};

export const WithTitleAndDescription: Story = {
  args: {
    leftContent: {
      title: 'Transaction Complete',
      description: 'Your payment was processed successfully'
    },
    showDivider: true
  }
};

// Number Badge Variations
export const WithNumberBadge: Story = {
  args: {
    number: {
      value: 1,
      backgroundColor: 'primary-100'
    },
    leftContent: {
      title: 'First Step',
      description: 'Complete your profile'
    }
  }
};

export const NumberBadgeColors: Story = {
  render: () => (
    <div className="space-y-0">
      <ListItem
        number={{ value: 1, backgroundColor: 'primary-100' }}
        leftContent={{ title: 'Primary Blue' }}
      />
      <ListItem
        number={{ value: 2, backgroundColor: 'secondary-100' }}
        leftContent={{ title: 'Secondary Orange' }}
      />
      <ListItem
        number={{ value: 3, backgroundColor: 'success-100' }}
        leftContent={{ title: 'Success Green' }}
      />
      <ListItem
        number={{ value: 4, backgroundColor: 'extra-cyan-100' }}
        leftContent={{ title: 'Extra Cyan' }}
      />
      <ListItem
        number={{ value: 5, backgroundColor: 'extra-navy-100' }}
        leftContent={{ title: 'Extra Navy' }}
      />
      <ListItem
        number={{ value: 6, backgroundColor: 'extra-violet-100' }}
        leftContent={{ title: 'Extra Violet' }}
      />
      <ListItem
        number={{ value: 7, backgroundColor: 'extra-gold-100' }}
        leftContent={{ title: 'Extra Gold' }}
      />
      <ListItem
        number={{ value: 8, backgroundColor: 'extra-pink-100' }}
        leftContent={{ title: 'Extra Pink' }}
      />
      <ListItem
        number={{ value: 9, backgroundColor: 'extra-green-100' }}
        leftContent={{ title: 'Extra Green' }}
      />
      <ListItem
        number={{ value: 10, backgroundColor: 'extra-purple-100' }}
        leftContent={{ title: 'Extra Purple' }}
        showDivider={false}
      />
    </div>
  )
};

// Illustration Variations
export const WithMiniIllustration: Story = {
  args: {
    illustration: {
      illustration: BitcoinIllustration
    },
    illustrationType: 'mini-illustration',
    leftContent: {
      title: 'Bitcoin Wallet',
      description: 'Secure your BTC assets'
    }
  }
};

export const WithBasicIcon: Story = {
  args: {
    illustration: {
      iconName: 'icon-wallet',
      color: 'primary-100'
    },
    illustrationType: 'icon',
    leftContent: {
      title: 'Wallet',
      description: 'Manage your funds'
    }
  }
};

export const IconColorVariations: Story = {
  render: () => (
    <div className="space-y-0">
      <ListItem
        illustration={{ iconName: 'icon-wallet', color: 'primary-100' }}
        illustrationType="icon"
        leftContent={{ title: 'Primary Blue Icon' }}
      />
      <ListItem
        illustration={{ iconName: 'icon-send', color: 'secondary-100' }}
        illustrationType="icon"
        leftContent={{ title: 'Secondary Orange Icon' }}
      />
      <ListItem
        illustration={{ iconName: 'icon-circular-checkmark', color: 'success-100' }}
        illustrationType="icon"
        leftContent={{ title: 'Success Green Icon' }}
      />
      <ListItem
        illustration={{ iconName: 'icon-star', color: 'extra-cyan-100' }}
        illustrationType="icon"
        leftContent={{ title: 'Extra Cyan Icon' }}
      />
      <ListItem
        illustration={{ iconName: 'icon-flash', color: 'extra-navy-100' }}
        illustrationType="icon"
        leftContent={{ title: 'Extra Navy Icon' }}
      />
      <ListItem
        illustration={{ iconName: 'icon-shield-tick', color: 'extra-violet-100' }}
        illustrationType="icon"
        leftContent={{ title: 'Extra Violet Icon' }}
      />
      <ListItem
        illustration={{ iconName: 'icon-triangle', color: 'extra-gold-100' }}
        illustrationType="icon"
        leftContent={{ title: 'Extra Gold Icon' }}
      />
      <ListItem
        illustration={{ iconName: 'icon-heart', color: 'extra-pink-100' }}
        illustrationType="icon"
        leftContent={{ title: 'Extra Pink Icon' }}
      />
      <ListItem
        illustration={{ iconName: 'icon-pet', color: 'extra-green-100' }}
        illustrationType="icon"
        leftContent={{ title: 'Extra Green Icon' }}
      />
      <ListItem
        illustration={{ iconName: 'icon-reward', color: 'extra-purple-100' }}
        illustrationType="icon"
        leftContent={{ title: 'Extra Purple Icon' }}
        showDivider={false}
      />
    </div>
  )
};

export const WithAssetIcon: Story = {
  args: {
    illustration: {
      asset: BitcoinAssetIcon
    },
    illustrationType: 'asset-icon',
    leftContent: {
      title: 'Bitcoin (BTC)',
      description: '0.00245 BTC'
    },
    rightContent: {
      title: '$125.50',
      description: '+2.5%'
    }
  }
};

export const CryptoAssetsList: Story = {
  render: () => (
    <div className="space-y-0">
      <ListItem
        illustration={{ asset: BitcoinAssetIcon }}
        illustrationType="asset-icon"
        leftContent={{ title: 'Bitcoin', description: '0.00245 BTC' }}
        rightContent={{ title: '$125.50', description: '+2.5%' }}
        showHover={true}
      />
      <ListItem
        illustration={{ asset: EthereumAssetIcon }}
        illustrationType="asset-icon"
        leftContent={{ title: 'Ethereum', description: '1.543 ETH' }}
        rightContent={{ title: '$2,543.20', description: '+5.2%' }}
        showHover={true}
      />
      <ListItem
        illustration={{ asset: BitcoinCashAssetIcon }}
        illustrationType="asset-icon"
        leftContent={{ title: 'Bitcoin Cash', description: '12.5 BCH' }}
        rightContent={{ title: '$3,125.00', description: '-1.3%' }}
        showHover={true}
      />
      <ListItem
        illustration={{ asset: USDcAssetIcon }}
        illustrationType="asset-icon"
        leftContent={{ title: 'USD Coin', description: '5,000 USDC' }}
        rightContent={{ title: '$5,000.00', description: '0.0%' }}
        showHover={true}
        showDivider={false}
      />
    </div>
  )
};

// Indicator Variations
export const WithIndicators: Story = {
  render: () => (
    <div className="space-y-0">
      <ListItem
        leftContent={{ title: 'Transaction Approved' }}
        indicator={{ variant: 'approved' }}
      />
      <ListItem leftContent={{ title: 'Pending Review' }} indicator={{ variant: 'pending' }} />
      <ListItem leftContent={{ title: 'Request Rejected' }} indicator={{ variant: 'rejected' }} />
      <ListItem leftContent={{ title: 'Viewed by User' }} indicator={{ variant: 'viewed' }} />
      <ListItem leftContent={{ title: 'New Notification' }} indicator={{ variant: 'new' }} />
      <ListItem leftContent={{ title: 'Neutral Status' }} indicator={{ variant: 'neutral' }} />
      <ListItem
        leftContent={{ title: 'Featured Item' }}
        indicator={{ variant: 'featured' }}
        showDivider={false}
      />
    </div>
  )
};

// Button Area Variations
export const WithButton: Story = {
  args: {
    leftContent: {
      title: 'Complete Setup',
      description: 'Finish configuring your account'
    },
    buttonArea: (
      <Button size="md" variant="primary">
        Complete
      </Button>
    )
  }
};

export const WithIconButton: Story = {
  args: {
    leftContent: {
      title: 'Settings',
      description: 'Configure your preferences'
    },
    buttonArea: <Icon type="icon-chevron-right" size="sm" className="text-shades-mid" />
  }
};

export const ButtonAreaVariations: Story = {
  render: () => (
    <div className="space-y-0">
      <ListItem
        leftContent={{ title: 'With Primary Button' }}
        buttonArea={<Button size="md">Action</Button>}
      />
      <ListItem
        leftContent={{ title: 'With Secondary Button' }}
        buttonArea={
          <Button size="md" variant="secondary">
            Action
          </Button>
        }
      />
      <ListItem
        leftContent={{ title: 'With Default Button' }}
        buttonArea={
          <Button size="md" variant="default">
            Action
          </Button>
        }
      />
      <ListItem
        leftContent={{ title: 'With Chevron Icon' }}
        buttonArea={<Icon type="icon-chevron-right" size="sm" className="text-shades-mid" />}
      />
      <ListItem
        leftContent={{ title: 'With Menu Icon' }}
        buttonArea={<Icon type="icon-more-vertical" size="sm" className="text-shades-mid" />}
        showDivider={false}
      />
    </div>
  )
};

// Custom Content
export const WithCustomLeftContent: Story = {
  args: {
    leftContent: {
      customContent: (
        <div className="flex items-center gap-2">
          <Icon type="icon-flash" className="text-secondary-100" />
          <div>
            <div className="font-bold text-secondary-100">FLASH SALE</div>
            <div className="text-sm text-shades-dark">Limited time offer</div>
          </div>
        </div>
      )
    }
  }
};

export const WithCustomRightContent: Story = {
  args: {
    leftContent: {
      title: 'Transaction Amount'
    },
    rightContent: {
      customContent: (
        <div className="text-right">
          <div className="font-['IBMPlexSans'] text-lg font-bold text-success-100">+$1,234.56</div>
          <div className="text-sm text-shades-dark">Received</div>
        </div>
      )
    }
  }
};

// Complex Combinations
export const FullyLoaded: Story = {
  args: {
    size: 'default',
    number: {
      value: 1,
      backgroundColor: 'secondary-100'
    },
    illustration: {
      illustration: BitcoinIllustration
    },
    illustrationType: 'mini-illustration',
    leftContent: {
      title: 'Complete KYC Verification',
      description: 'Upload your documents to verify your identity'
    },
    rightContent: {
      title: 'Required',
      description: '2 of 3 steps'
    },
    indicator: {
      variant: 'pending',
      label: 'In Progress'
    },
    buttonArea: <Button size="md">Start</Button>
  }
};

export const CompactFullyLoaded: Story = {
  args: {
    size: 'compact',
    number: {
      value: 1,
      backgroundColor: 'secondary-100'
    },
    illustration: {
      iconName: 'icon-wallet',
      color: 'secondary-100'
    },
    illustrationType: 'icon',
    leftContent: {
      title: 'Verify Account',
      description: 'Complete verification'
    },
    rightContent: {
      title: 'Required',
      description: '2/3'
    },
    indicator: {
      variant: 'pending'
    },
    buttonArea: <Button size="sm">Start</Button>
  }
};

// Interactive List
export const InteractiveList: Story = {
  render: () => {
    const handleClick = (item: string) => {
      alert(`Clicked: ${item}`);
    };

    return (
      <div className="space-y-0">
        <ListItem
          illustration={{ asset: BitcoinAssetIcon }}
          illustrationType="asset-icon"
          leftContent={{ title: 'Bitcoin', description: 'BTC' }}
          rightContent={{ title: '$125.50', description: '+2.5%' }}
          buttonArea={<Icon type="icon-chevron-right" className="text-shades-mid" size="sm" />}
          showHover={true}
          onClick={() => handleClick('Bitcoin')}
        />
        <ListItem
          illustration={{ asset: EthereumAssetIcon }}
          illustrationType="asset-icon"
          leftContent={{ title: 'Ethereum', description: 'ETH' }}
          rightContent={{ title: '$2,543.20', description: '+5.2%' }}
          buttonArea={<Icon type="icon-chevron-right" className="text-shades-mid" size="sm"/>}
          showHover={true}
          onClick={() => handleClick('Ethereum')}
        />
        <ListItem
          illustration={{ asset: USDcAssetIcon }}
          illustrationType="asset-icon"
          leftContent={{ title: 'USD Coin', description: 'USDC' }}
          rightContent={{ title: '$5,000.00', description: '0.0%' }}
          buttonArea={<Icon type="icon-chevron-right" className="text-shades-mid" size="sm" />}
          showHover={true}
          onClick={() => handleClick('USD Coin')}
          showDivider={false}
        />
      </div>
    );
  }
};

// Real-World Examples
export const TransactionHistory: Story = {
  render: () => (
    <div className="space-y-0">
      <ListItem
        illustration={{ iconName: 'icon-send', color: 'primary-100' }}
        illustrationType="icon"
        leftContent={{ title: 'Sent Bitcoin', description: 'Jan 15, 2024 - 14:32' }}
        rightContent={{
          customContent: (
            <div className="text-right">
              <div className="font-['IBMPlexSans'] text-[16px] text-alerts-100">-0.0025 BTC</div>
              <div className="text-[14px] text-shades-dark">-$125.50</div>
            </div>
          )
        }}
        indicator={{ variant: 'approved' }}
      />
      <ListItem
        illustration={{ iconName: 'icon-receive', color: 'primary-100' }}
        illustrationType="icon"
        leftContent={{ title: 'Received Ethereum', description: 'Jan 14, 2024 - 09:15' }}
        rightContent={{
          customContent: (
            <div className="text-right">
              <div className="font-['IBMPlexSans'] text-[16px] text-success-100">+1.5 ETH</div>
              <div className="text-[14px] text-shades-dark">+$2,543.20</div>
            </div>
          )
        }}
        indicator={{ variant: 'approved' }}
      />
      <ListItem
        illustration={{ iconName: 'icon-trade', color: 'primary-100' }}
        illustrationType="icon"
        leftContent={{ title: 'Swapped BCH to BTC', description: 'Jan 13, 2024 - 16:45' }}
        rightContent={{
          customContent: (
            <div className="text-right">
              <div className="font-['IBMPlexSans'] text-[16px]">0.015 BTC</div>
              <div className="text-[14px] text-shades-dark">$750.00</div>
            </div>
          )
        }}
        indicator={{ variant: 'approved' }}
        showDivider={false}
      />
    </div>
  )
};

export const StepByStepGuide: Story = {
  render: () => (
    <div className="space-y-0">
      <ListItem
        size="default"
        number={{ value: 1, backgroundColor: 'success-100' }}
        illustration={{ illustration: CreateWalletIllustration }}
        illustrationType="mini-illustration"
        leftContent={{ title: 'Create Your Wallet', description: 'Set up a secure wallet in minutes' }}
        indicator={{ variant: 'approved', label: 'Completed' }}
      />
      <ListItem
        size="default"
        number={{ value: 2, backgroundColor: 'success-100' }}
        illustration={{ illustration: BackupWalletIllustration }}
        illustrationType="mini-illustration"
        leftContent={{
          title: 'Backup Your Wallet',
          description: 'Save your recovery phrase securely'
        }}
        indicator={{ variant: 'approved', label: 'Completed' }}
      />
      <ListItem
        size="default"
        number={{ value: 3, backgroundColor: 'secondary-100' }}
        illustration={{ illustration: HowToButBtcIllustration }}
        illustrationType="mini-illustration"
        leftContent={{ title: 'Buy Bitcoin', description: 'Purchase your first cryptocurrency' }}
        indicator={{ variant: 'pending', label: 'In Progress' }}
        buttonArea={<Button size="md">Continue</Button>}
      />
      <ListItem
        size="default"
        number={{ value: 4, backgroundColor: 'primary-100' }}
        illustration={{ illustration: Secure1Illustration }}
        illustrationType="mini-illustration"
        leftContent={{
          title: 'Enable Security Features',
          description: 'Add extra protection to your account'
        }}
        indicator={{ variant: 'new', label: 'Not Started' }}
        showDivider={false}
      />
    </div>
  )
};

// Size Comparison
export const SizeComparison: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-[18px] font-bold mb-4">Default Size</h3>
        <div className="space-y-0">
          <ListItem
            size="default"
            number={{ value: 1 }}
            illustration={{ illustration: BitcoinIllustration }}
            illustrationType="mini-illustration"
            leftContent={{ title: 'Default Size Example', description: 'This is the default size' }}
            rightContent={{ title: '$125.50', description: '+2.5%' }}
            indicator={{ variant: 'approved' }}
            buttonArea={<Button size="md">Action</Button>}
            showDivider={false}
          />
        </div>
      </div>
      <div>
        <h3 className="text-[18px] font-bold mb-4">Compact Size</h3>
        <div className="space-y-0">
          <ListItem
            size="compact"
            number={{ value: 1 }}
            illustration={{ illustration: BitcoinIllustration }}
            illustrationType="mini-illustration"
            leftContent={{ title: 'Compact Size Example', description: 'This is the compact size' }}
            rightContent={{ title: '$125.50', description: '+2.5%' }}
            indicator={{ variant: 'approved' }}
            buttonArea={<Button size="sm">Action</Button>}
            showDivider={false}
          />
        </div>
      </div>
    </div>
  )
};

