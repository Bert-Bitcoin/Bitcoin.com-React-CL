import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './HeroSection';
import { Input } from '../input';
import { Button } from '../button';
import { Pill } from '../pill';

const meta = {
  title: 'Sections/Website/Hero',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    themeMode: {
      control: 'select',
      options: ['auto', 'light', 'dark'],
      description: 'Theme mode for the section'
    },
    style: {
      control: 'select',
      options: ['light', 'gray', 'dark'],
      description: 'Style variant of the section'
    },
    layout: {
      control: 'select',
      options: ['left', 'centered', 'left-illustration', 'right-illustration'],
      description: 'Layout variant of the hero section'
    },
    aboveTitle: {
      control: false,
      description: 'Custom HTML/React content to display above the main heading'
    },
    heading: {
      control: 'text',
      description: 'Main heading text (will be uppercase)'
    },
    description: {
      control: 'text',
      description: 'Subheading or description text (optional)'
    },
    primaryButtonText: {
      control: 'text',
      description: 'Text for the primary CTA button'
    },
    secondaryButtonText: {
      control: 'text',
      description: 'Text for the secondary CTA button'
    },
    illustrationName: {
      control: 'text',
      description: 'Name of the illustration file'
    },
    reducedTopPadding: {
      control: 'boolean',
      description: 'Reduce top padding by half (useful below header navigation)'
    },
    customActions: {
      control: false,
      description: 'Custom HTML/React content to replace the default buttons'
    },
    belowActions: {
      control: false,
      description: 'Custom HTML/React content to display below the action buttons'
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with left layout
export const Left: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    layout: 'left',
    heading: 'Your Gateway to Democratized Finance',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn more',
  },
};

// Centered layout
export const Centered: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    layout: 'centered',
    heading: 'Your Gateway to Democratized Finance',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn more',
  },
};

// Left layout with illustration
export const LeftWithIllustration: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    layout: 'left-illustration',
    heading: 'Your Gateway to Finance',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn more',
    illustrationName: 'Illustration-Platform-Alt.svg',
  },
};

// Right layout with illustration
export const RightWithIllustration: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    layout: 'right-illustration',
    heading: 'Your Gateway to Finance',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn more',
    illustrationName: 'Illustration-Platform-Alt.svg',
  },
};

// Gray style variant
export const GrayStyle: Story = {
  args: {
    themeMode: 'auto',
    style: 'gray',
    layout: 'left-illustration',
    heading: 'Your Gateway to Finance',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn more',
    illustrationName: 'Illustration-Platform-Alt.svg',
  },
};

// Dark style variant
export const DarkStyle: Story = {
  args: {
    themeMode: 'auto',
    style: 'dark',
    layout: 'left-illustration',
    heading: 'Your Gateway to Finance',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn more',
    illustrationName: 'Illustration-Platform-Alt.svg',
  },
};

// Interactive example with click handlers
export const Interactive: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    layout: 'left-illustration',
    heading: 'Your Gateway to Finance',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn more',
    illustrationName: 'Illustration-Platform-Alt.svg',
  },
  render: (args) => (
    <HeroSection
      {...args}
      onPrimaryClick={() => alert('Primary button clicked!')}
      onSecondaryClick={() => alert('Secondary button clicked!')}
    />
  ),
};

// With reduced top padding (for use below header)
export const BelowHeader: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    layout: 'left-illustration',
    heading: 'Your Gateway to Finance',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn more',
    illustrationName: 'Illustration-Platform-Alt.svg',
    reducedTopPadding: true,
  },
};

// With custom email input action
export const WithEmailInput: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    layout: 'centered',
    heading: 'Get Early Access',
    description: 'Join the waitlist to be the first to know when we launch our new cryptocurrency platform.',
  },
  render: (args) => (
    <HeroSection
      {...args}
      customActions={
        <div className="flex flex-col sm:flex-row gap-s items-stretch">
          <Input
            placeholder="Enter your email"
            type="email"
            className="flex-1"
          />
          <Button variant="secondary" size="md" className="w-full sm:w-auto">
            Join Waitlist
          </Button>
        </div>
      }
    />
  ),
};
// With custom CTA combination
export const WithCustomCTA: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    layout: 'left',
    heading: 'Start Trading Today',
    description: 'Trade Bitcoin, Ethereum, and 100+ cryptocurrencies with low fees and instant execution.',
  },
  render: (args) => (
    <HeroSection
      {...args}
      customActions={
        <div className="flex flex-col gap-m">
          <div className="flex gap-m flex-wrap">
            <Button variant="secondary" size="lg">
              Create Free Account
            </Button>
            <Button variant="default" size="lg">
              View Demo
            </Button>
          </div>
          <p className="text-sm text-shades-semi-dark">
            No credit card required • 2-minute setup • Bank-level security
          </p>
        </div>
      }
    />
  ),
};

// With content above title (badge/pill)
export const WithAboveTitle: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    layout: 'centered',
    heading: 'Your Gateway to Democratized Finance',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn more',
  },
  render: (args) => (
    <HeroSection
      {...args}
      aboveTitle={
        <div className="flex justify-center">
          <Pill type="primary" style="fill">
            New Platform Launch
          </Pill>
        </div>
      }
    />
  ),
};

// Without description (optional description)
export const WithoutDescription: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    layout: 'left-illustration',
    heading: 'The Future of Digital Finance',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn more',
    illustrationName: 'Illustration-Platform-Alt.svg',
  },
};

// With below actions content (trust signals, disclaimers)
export const WithBelowActions: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    layout: 'centered',
    heading: 'Join Millions of Crypto Users',
    description: 'Start your cryptocurrency journey with the most trusted platform in the industry.',
    primaryButtonText: 'Create Free Account',
    secondaryButtonText: 'View Demo',
  },
  render: (args) => (
    <HeroSection
      {...args}
      belowActions={
        <div className="flex flex-col gap-s items-center text-center">
          <p className="text-sm text-shades-semi-dark">
            ✓ No credit card required • ✓ 2-minute setup • ✓ Bank-level security
          </p>
          <p className="text-xs text-shades-semi-dark">
            Trusted by over 10 million users worldwide
          </p>
        </div>
      }
    />
  ),
};

// Combination of all new features
export const AllNewFeatures: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    layout: 'right-illustration',
    heading: 'Bitcoin Rewards Platform',
    illustrationName: 'Illustration-Platform-Alt.svg',
    primaryButtonText: 'Start Earning',
    secondaryButtonText: 'How It Works',
  },
  render: (args) => (
    <HeroSection
      {...args}
      aboveTitle={
        <Pill type="secondary" style="fill">
          Earn Bitcoin on Every Purchase
        </Pill>
      }
      belowActions={
        <div className="flex flex-col gap-s text-left">
          <p className="text-sm text-shades-semi-dark font-medium">
            Join 500,000+ users earning crypto rewards daily
          </p>
          <div className="flex gap-m items-center text-xs text-shades-semi-dark">
            <span>✓ No fees</span>
            <span>✓ Instant rewards</span>
            <span>✓ 100+ merchants</span>
          </div>
        </div>
      }
    />
  ),
};

// Kitchen sink - all features combined with custom actions
export const KitchenSink: Story = {
  args: {
    themeMode: 'auto',
    style: 'gray',
    layout: 'centered',
    heading: 'Launch Your Crypto Journey',
  },
  render: (args) => (
    <HeroSection
      {...args}
      aboveTitle={
        <div className="flex justify-center">
          <Pill type="purple" style="fill">
            Limited Time Offer
          </Pill>
        </div>
      }
      customActions={
        <div className="flex flex-col sm:flex-row gap-s items-stretch">
          <Input
            placeholder="Enter your email"
            type="email"
            className="flex-1"
          />
          <Button variant="secondary" size="md" className="w-full sm:w-auto">
            Get $50 Bonus
          </Button>
        </div>
      }
      belowActions={
        <div className="flex flex-col gap-s items-center text-center">
          <p className="text-sm text-shades-semi-dark font-medium">
            💰 Get $50 in Bitcoin when you sign up and make your first trade
          </p>
          <p className="text-xs text-shades-semi-dark">
            Offer expires Dec 31, 2025. Terms and conditions apply.
          </p>
        </div>
      }
    />
  ),
};

