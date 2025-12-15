import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './HeroSection';

const meta = {
  title: 'Sections/Website/Hero Section',
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
    layout: 'right-illustration',
    heading: 'Your Gateway to Finance',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn more',
    illustrationName: 'Illustration-Platform-Alt.svg',
  },
};

// Light theme example
export const LightTheme: Story = {
  args: {
    themeMode: 'light',
    layout: 'left-illustration',
    heading: 'Your Gateway to Finance',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn more',
    illustrationName: 'Illustration-Platform-Alt.svg',
  },
};

// Dark theme example
export const DarkTheme: Story = {
  args: {
    themeMode: 'dark',
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
    layout: 'left-illustration',
    heading: 'Your Gateway to Finance',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn more',
    illustrationName: 'Illustration-Platform-Alt.svg',
    reducedTopPadding: true,
  },
};

