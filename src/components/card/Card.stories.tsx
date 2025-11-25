import type { Meta, StoryObj } from '@storybook/react';

import { BitcoinAssetIcon } from '../asset-icons';
import { Button } from '../button';
import { Icon } from '../icon';
import { Input } from '../input';
import { BitcoinBoltIllustration, LaptopChartBitcoinMagnifierIllustration, TransactionsHistoryIllustration, WalletTypesIllustration } from '../mini-illustrations';
import { Toggle } from '../toggle';
import { CardWithSubComponents as Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Content/Card',
  component: Card,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'interactive'],
      description: 'Visual variant of the card'
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Padding size inside the card'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the card should span full width'
    },
    interactive: {
      control: 'boolean',
      description: 'Whether the card is clickable/hoverable'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

// ========================================
// Basic Examples
// ========================================

export const Default: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>This is a simple card with a title and description.</Card.Description>
      </Card.Header>
    </Card>
  )
};

// ========================================
// Variant Examples
// ========================================

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-m max-w-4xl">
      <Card variant="default">
        <Card.Header>
          <Card.Title variant="heading-sm">Default</Card.Title>
          <Card.Description>Standard card with border</Card.Description>
        </Card.Header>
      </Card>
      <Card variant="outlined">
        <Card.Header>
          <Card.Title variant="heading-sm">Outlined</Card.Title>
          <Card.Description>Card with stronger border</Card.Description>
        </Card.Header>
      </Card>
      <Card variant="interactive" onClick={() => alert('Card clicked!')}>
        <Card.Header>
          <Card.Title variant="heading-sm">Interactive</Card.Title>
          <Card.Description>Clickable card with hover effects</Card.Description>
        </Card.Header>
      </Card>
    </div>
  )
};

// ========================================
// Padding Examples
// ========================================

export const PaddingOptions: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-m max-w-4xl">
      <Card padding="none">
        <div className="p-s">
          <Card.Title variant="heading-sm">No Padding</Card.Title>
          <Card.Description>padding="none" (manual padding added)</Card.Description>
        </div>
      </Card>
      <Card padding="sm">
        <Card.Title variant="heading-sm">Small Padding</Card.Title>
        <Card.Description>padding="sm"</Card.Description>
      </Card>
      <Card padding="md">
        <Card.Title variant="heading-sm">Medium Padding</Card.Title>
        <Card.Description>padding="md" (default)</Card.Description>
      </Card>
      <Card padding="lg">
        <Card.Title variant="heading-sm">Large Padding</Card.Title>
        <Card.Description>padding="lg"</Card.Description>
      </Card>
    </div>
  )
};

export const WithAction: Story = {
  name: 'Default Card',
  render: () => (
    <div className="max-w-sm">
      <Card>
        <Card.Header>
          <Card.Title>LARGE TITLE</Card.Title>
          <Card.Description>Small description</Card.Description>
        </Card.Header>
        <Card.Footer>
          <Button variant="primary" size="sm">
            Label
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
};

// ========================================
// Amount Card 
// ========================================

export const AmountCard: Story = {
  name: 'Amount Card',
  render: () => (
    <div className="max-w-sm">
      <Card>
        <Card.Header>
          <p className="text-label text-text-secondary uppercase font-bold pb-xs">LARGE AMOUNT</p>
        </Card.Header>
        <Card.Amount
          amount="12,867,594.69"
          currency="$"
          secondaryAmount="12,867,594.69 BTC"
          secondaryIcon={<BitcoinAssetIcon className="w-4 h-4" />}
        />
      </Card>
    </div>
  )
};

// ========================================
// Feature Card
// ========================================

export const FeatureCard: Story = {
  name: 'Feature Card',
  render: () => (
    <div className="max-w-[240px]">
      <Card>
        <div className="flex flex-col items-start gap-s">
          <Card.Icon size="lg">
            <BitcoinBoltIllustration className="w-15 h-15" />
          </Card.Icon>
          <Card.Header>
            <Card.Title variant="heading-md">TITLE</Card.Title>
            <Card.Description>Small description</Card.Description>
          </Card.Header>
        </div>
      </Card>
    </div>
  )
};

// ========================================
// Account Card (Figma)
// ========================================

export const AccountCard: Story = {
  name: 'Account Card',
  render: () => (
    <div className="max-w-sm">
      <Card>
        <div className="flex flex-col gap-m">
          <Card.Header>
            <Card.Title variant="heading-md">CREATE ACCOUNT</Card.Title>
            <Card.Description>Enter your email below to create your account</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="flex flex-col gap-m">
              <Input label="Email" placeholder="example@example.com" fullWidth />
              <Input
                label="Password"
                helperText="Minimal 5 characters"
                type="password"
                placeholder="••••••••"
                fullWidth
              />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button variant="secondary" fullWidth>
              Create Account
            </Button>
          </Card.Footer>
          <div className="text-center">
            <p className="text-body-xs text-text-secondary">
              Already have an account?{' '}
              <button className="text-primary-100 hover:text-primary-50 transition-colors">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
};

// ========================================
// Settings Card
// ========================================

export const SettingsCard: Story = {
  name: 'Settings Card',
  render: () => (
    <div className="max-w-sm">
      <Card>
        <div className="flex flex-col gap-m">
          <Card.Header>
            <Card.Title variant="heading-md">COOKIE SETTINGS</Card.Title>
            <Card.Description>Manage your cookie settings here</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="flex flex-col gap-m">
              <Toggle
                checked={true}
                label="Strictly Necessary Cookies"
                fullWidth
                onCheckedChange={() => {}}
              />
              <Toggle
                checked={false}
                label="Functional Cookies"
                fullWidth
                onCheckedChange={() => {}}
              />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button variant="default" fullWidth>
              Save Preferences
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  )
};

// ========================================
// File Input Card (Figma)
// ========================================

export const FileInputCard: Story = {
  name: 'File Input Card',
  render: () => (
    <div className="max-w-xl">
      <Card>
        <div className="flex flex-col gap-m">
          <Card.Header>
            <Card.Title variant="heading-md">SHARE THIS DOCUMENT</Card.Title>
            <Card.Description>Anyone with the link can view this document.</Card.Description>
          </Card.Header>
          <Card.Footer spaceBetween>
            <Input
              placeholder="http://example.com/link/to/document"
              fullWidth
              className="flex-1"
            />
            <Button variant="strong" className="ml-s">
              Copy link
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  )
};

// ========================================
// News Card 
// ========================================

export const NewsCard: Story = {
  name: 'News Card',
  render: () => (
    <div className="max-w-sm">
      <Card padding="none">
        <Card.Media
          src="https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&auto=format&fit=crop"
          alt="Bitcoin investment"
          aspectRatio="16/9"
          className="mb-0"
        />
        <div className="p-m flex flex-col gap-s">
          <Card.Header>
            <Card.Title variant="heading-md" className="leading-6">BITCOIN: THE FUTURE'S MOST PROMISING INVESTMENT OPPORTUNITY</Card.Title>
            <Card.Description className="text-sm">
              In an era of economic uncertainty and inflation, Bitcoin stands out as a resilient and
              revolutionary investment. Its decentralized nature and limited supply make it an
              attractive hedge against traditional financial systems.
            </Card.Description>
          </Card.Header>
          <Card.Footer>
            <button className="flex items-center gap-xs text-primary-100 hover:text-primary-50 transition-colors text-label font-bold">
              Read More
              <Icon type="arrow-right" size="sm" className="text-current" />
            </button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  )
};

// ========================================
// Composable Examples 
// ========================================

export const DataDashboardCard: Story = {
  name: 'Dashboard Card',
  render: () => (
    <div className="max-w-sm">
      <Card>
        <div className="flex flex-col gap-s">
          <Card.Header
            action={
              <Button variant="text" size="sm" trailingIcon={<Icon type="icon-arrow-down" />}>
                Options
              </Button>
            }
          >
            <Card.Title variant="heading-sm">TOTAL BALANCE</Card.Title>
          </Card.Header>
          <Card.Amount
            amount={45789.23}
            currency="$"
            secondaryAmount="1.2345 BTC"
            secondaryIcon={<BitcoinAssetIcon className="w-4 h-4" />}
          />
          <Card.Divider />
          <div className="grid grid-cols-2 gap-m">
            <div>
              <p className="text-label-xs text-text-secondary font-semibold">Today</p>
              <p className="text-numeric-sm font-bold text-success-100">
                +$234.56
              </p>
            </div>
            <div>
              <p className="text-label-xs text-text-secondary font-semibold">7 Days</p>
              <p className="text-numeric-sm font-bold text-success-100">
                +$1,892.42
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
};

export const TransactionCard: Story = {
  name: 'Transaction Card',
  render: () => (
    <div className="max-w-md">
      <Card interactive>
        <div className="flex items-center gap-s">
          <Card.Icon size="md">
            <BitcoinAssetIcon className="w-10 h-10" />
          </Card.Icon>
          <div className="flex-1 min-w-0">
            <p className="text-label font-medium text-text-primary text-sm">Bitcoin Purchase</p>
            <p className="text-label-xs text-text-secondary text-xs">Today at 2:34 PM</p>
          </div>
          <div className="text-right pr-3">
            <p className="text-numeric-sm font-bold text-text-primary text-sm">
              +0.00234 BTC
            </p>
            <p className="text-numeric-sm text-text-secondary text-xs">$123.45</p>
          </div>
        </div>
      </Card>
    </div>
  )
};

export const StatCard: Story = {
  name: 'Stat Card',
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-m max-w-4xl">
      <Card>
        <div className="flex items-center gap-m">
          <Card.Icon size="md">
                <WalletTypesIllustration className="w-15 h-15" />
          </Card.Icon>
          <div>
            <p className="text-label-xs text-text-secondary">Active Wallets</p>
            <p className="text-numeric-sm font-bold text-text-primary">
              1,234
            </p>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex items-center gap-m">
          <Card.Icon size="md">
          <LaptopChartBitcoinMagnifierIllustration className="w-15 h-15" />
          </Card.Icon>
          <div>
            <p className="text-label-xs text-text-secondary">Total Volume</p>
            <p className="text-numeric-sm font-bold text-text-primary">
              $2.4M
            </p>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex items-center gap-m">
          <Card.Icon size="md">
          <TransactionsHistoryIllustration className="w-15 h-15" />
          </Card.Icon>
          <div>
            <p className="text-label-xs text-text-secondary">Transactions</p>
            <p className="text-numeric-sm font-bold text-text-primary">
              5,678
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
};

export const ProfileCard: Story = {
  name: 'Profile Card',
  render: () => (
    <div className="max-w-sm">
      <Card>
        <div className="flex flex-col gap-m">
          <div className="flex items-center gap-m">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
              <span className="text-heading-sm text-white">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <Card.Title variant="body-lg">John Doe</Card.Title>
              <Card.Description>john.doe@bitcoin.com</Card.Description>
            </div>
          </div>
          <Card.Divider />
          <div className="grid grid-cols-3 gap-m text-center my--10">
            <div>
              <p className="text-numeric-sm font-bold text-text-primary">
                24
              </p>
              <p className="text-label-xs text-text-secondary">Trades</p>
            </div>
            <div>
              <p className="text-numeric-sm font-bold text-text-primary">
                12.5K
              </p>
              <p className="text-label-xs text-text-secondary">Followers</p>
            </div>
            <div>
              <p className="text-numeric-sm font-bold text-text-primary">
                89%
              </p>
              <p className="text-label-xs text-text-secondary">Win Rate</p>
            </div>
          </div>
          <Card.Footer className='pt-0'>
            <Button variant="primary" fullWidth>
              View Profile
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  )
};

export const PricingCard: Story = {
  name: 'Pricing Card',
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-m max-w-5xl">
      <Card className="h-full">
        <div className="flex flex-col gap-m h-full">
          <Card.Header>
            <Card.Title variant="heading-md">BASIC</Card.Title>
            <Card.Description>For individuals getting started</Card.Description>
          </Card.Header>
          <div className="flex items-baseline gap-xs">
            <span className="text-numeric-lg text-text-primary" style={{ fontSize: '3rem' }}>
              $9
            </span>
            <span className="text-label text-text-secondary">/month</span>
          </div>
          <Card.Divider />
          <ul className="flex flex-col gap-s text-body-xs flex-1">
            <li className="flex items-start gap-s">
              <Icon type="check" size="sm" className="text-success-100 mt-[2px]" />
              <span>Up to 10 transactions</span>
            </li>
            <li className="flex items-start gap-s">
              <Icon type="check" size="sm" className="text-success-100 mt-[2px]" />
              <span>Basic analytics</span>
            </li>
            <li className="flex items-start gap-s">
              <Icon type="check" size="sm" className="text-success-100 mt-[2px]" />
              <span>Email support</span>
            </li>
          </ul>
          <Card.Footer className="mt-auto">
            <Button variant="default" fullWidth>
              Get Started
            </Button>
          </Card.Footer>
        </div>
      </Card>
      <Card variant="outlined" className="h-full">
        <div className="flex flex-col gap-m h-full">
          <Card.Header>
            <div className="flex items-center gap-s">
              <Card.Title variant="heading-md">PRO</Card.Title>
              <span className="px-s py-xs bg-primary-10 text-primary-100 text-label-xs rounded-pill">
                Popular
              </span>
            </div>
            <Card.Description>For professionals and teams</Card.Description>
          </Card.Header>
          <div className="flex items-baseline gap-xs">
            <span className="text-numeric-lg text-text-primary" style={{ fontSize: '3rem' }}>
              $29
            </span>
            <span className="text-label text-text-secondary">/month</span>
          </div>
          <Card.Divider />
          <ul className="flex flex-col gap-s text-body-xs flex-1">
            <li className="flex items-start gap-s">
              <Icon type="check" size="sm" className="text-success-100 mt-[2px]" />
              <span>Unlimited transactions</span>
            </li>
            <li className="flex items-start gap-s">
              <Icon type="check" size="sm" className="text-success-100 mt-[2px]" />
              <span>Advanced analytics</span>
            </li>
            <li className="flex items-start gap-s">
              <Icon type="check" size="sm" className="text-success-100 mt-[2px]" />
              <span>Priority support</span>
            </li>
            <li className="flex items-start gap-s">
              <Icon type="check" size="sm" className="text-success-100 mt-[2px]" />
              <span>API access</span>
            </li>
          </ul>
          <Card.Footer className="mt-auto">
            <Button variant="primary" fullWidth>
              Get Started
            </Button>
          </Card.Footer>
        </div>
      </Card>
      <Card className="h-full">
        <div className="flex flex-col gap-m h-full">
          <Card.Header>
            <Card.Title variant="heading-md">ENTERPRISE</Card.Title>
            <Card.Description>For large organizations</Card.Description>
          </Card.Header>
          <div className="flex items-baseline gap-xs">
            <span className="text-heading-sm text-text-primary">Custom</span>
          </div>
          <Card.Divider />
          <ul className="flex flex-col gap-s text-body-xs flex-1">
            <li className="flex items-start gap-s">
              <Icon type="check" size="sm" className="text-success-100 mt-[2px]" />
              <span>Everything in Pro</span>
            </li>
            <li className="flex items-start gap-s">
              <Icon type="check" size="sm" className="text-success-100 mt-[2px]" />
              <span>Custom integrations</span>
            </li>
            <li className="flex items-start gap-s">
              <Icon type="check" size="sm" className="text-success-100 mt-[2px]" />
              <span>Dedicated support</span>
            </li>
            <li className="flex items-start gap-s">
              <Icon type="check" size="sm" className="text-success-100 mt-[2px]" />
              <span>SLA guarantee</span>
            </li>
          </ul>
          <Card.Footer className="mt-auto">
            <Button variant="default" fullWidth>
              Contact Sales
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  )
};

