import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './HeroSection';
import { Input } from '../input';
import { Button } from '../button';

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
    heading: {
      control: 'text',
      description: 'Main heading text (will be uppercase)'
    },
    description: {
      control: 'text',
      description: 'Subheading or description text'
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

