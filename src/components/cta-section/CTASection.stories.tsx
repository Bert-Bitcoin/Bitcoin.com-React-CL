import type { Meta, StoryObj } from '@storybook/react';
import { CTASection } from './CTASection';
import { Pill } from '../pill';
import { Button } from '../button';
import { AppButton } from '../app-button';
import { Icon } from '../icon';
import { Input } from '../input';

const meta = {
  title: 'Sections/Website/CTA',
  component: CTASection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# CTASection Component

A flexible Call-to-Action (CTA) section component designed for marketing pages and conversion-focused layouts.

## Features

- **4 Style Variations**: light, gray, dark, and highlight (with customizable colors)
- **Flexible Content**: Optional title, description, and buttons
- **Custom Slots**: Add custom HTML above title and below buttons
- **Responsive**: Mobile-first design with responsive button sizes and typography
- **Alignment Options**: Left, center, or right alignment
- **SEO-Friendly**: Includes optional ID prop for anchor linking

## Style Variations

### 1. Light
Clean white background, suitable for main content areas.

### 2. Gray
Subtle gray background for visual separation.

### 3. Dark
Dark background for high-contrast CTAs.

### 4. Highlight
Customizable highlight color background. Choose from:
- primary-100 (Orange)
- secondary-100 (Blue)
- success-100 (Green)
- extra-cyan-100
- extra-navy-100
- extra-violet-100
- extra-gold-100
- extra-pink-100
- extra-green-100
- extra-purple-100

## Usage Examples

\`\`\`tsx
// Basic centered CTA
<CTASection
  title="Start Your Bitcoin Journey"
  description="Join millions of users worldwide"
  primaryButtonText="Get Started"
  onPrimaryClick={() => console.log('Get Started')}
/>

// Highlight color with custom content
<CTASection
  style="highlight"
  highlightColor="secondary-100"
  aboveTitle={<Pill type="blue">New Feature</Pill>}
  title="Experience the Future"
  customActions={
    <Input 
      placeholder="Enter your email"
      type="email"
    />
  }
/>

// Email signup CTA
<CTASection
  style="dark"
  title="Subscribe to Newsletter"
  description="Get the latest crypto news and updates"
  customActions={
    <div className="flex gap-s">
      <Input placeholder="Your email" type="email" />
      <Button variant="secondary">Subscribe</Button>
    </div>
  }
/>
\`\`\`

## Best Practices

1. **Keep titles concise** - Use clear, action-oriented language
2. **Limit description length** - 1-2 sentences for better conversion
3. **Use highlight colors strategically** - Match the emotion/action you want to evoke
4. **Test alignment** - Center works best for most CTAs, left for content-heavy sections
5. **Mobile-first** - Test on mobile devices to ensure readability
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    themeMode: {
      control: 'select',
      options: ['auto', 'light', 'dark'],
      description: 'Theme mode for the section',
      table: {
        defaultValue: { summary: 'auto' },
      },
    },
    style: {
      control: 'select',
      options: ['light', 'gray', 'dark', 'highlight'],
      description: 'Visual style variant',
      table: {
        defaultValue: { summary: 'light' },
      },
    },
    highlightColor: {
      control: 'select',
      options: [
        'primary-100',
        'secondary-100',
        'success-100',
        'extra-cyan-100',
        'extra-navy-100',
        'extra-violet-100',
        'extra-gold-100',
        'extra-pink-100',
        'extra-green-100',
        'extra-purple-100'
      ],
      description: 'Background color when style is "highlight"',
      table: {
        defaultValue: { summary: 'primary-100' },
      },
    },
    alignment: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text and content alignment',
      table: {
        defaultValue: { summary: 'center' },
      },
    },
    title: {
      control: 'text',
      description: 'Main heading text (optional)',
    },
    description: {
      control: 'text',
      description: 'Description text (optional)',
    },
    primaryButtonText: {
      control: 'text',
      description: 'Primary button label (optional)',
    },
    secondaryButtonText: {
      control: 'text',
      description: 'Secondary button label (optional)',
    },
    id: {
      control: 'text',
      description: 'HTML id attribute for anchor linking',
    },
  },
} satisfies Meta<typeof CTASection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default centered CTA with both primary and secondary buttons
 */
export const Default: Story = {
  args: {
    style: 'light',
    alignment: 'center',
    title: 'Ready to Get Started?',
    description: 'Join thousands of users who are already using our platform to manage their Bitcoin securely.',
    primaryButtonText: 'Create Account',
    secondaryButtonText: 'Learn More',
    onPrimaryClick: () => console.log('Primary clicked'),
    onSecondaryClick: () => console.log('Secondary clicked'),
  },
};

/**
 * Light style with centered alignment (default)
 */
export const LightStyle: Story = {
  args: {
    style: 'light',
    title: 'Start Your Crypto Journey',
    description: 'Buy, sell, and manage your cryptocurrency portfolio with confidence.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'View Features',
  },
};

/**
 * Gray style with subtle background
 */
export const GrayStyle: Story = {
  args: {
    style: 'gray',
    title: 'Need Help Getting Started?',
    description: 'Our support team is available 24/7 to help you with any questions.',
    primaryButtonText: 'Contact Support',
    secondaryButtonText: 'View FAQ',
  },
};

/**
 * Dark style with high contrast
 */
export const DarkStyle: Story = {
  args: {
    style: 'dark',
    title: 'Join the Revolution',
    description: 'Be part of the future of finance with Bitcoin and cryptocurrency.',
    primaryButtonText: 'Sign Up Now',
    secondaryButtonText: 'Watch Demo',
  },
};

/**
 * Highlight style with primary color (Orange)
 */
export const HighlightPrimary: Story = {
  args: {
    style: 'highlight',
    highlightColor: 'primary-100',
    title: 'Limited Time Offer',
    description: 'Get 0% fees on your first Bitcoin purchase. Offer expires soon!',
    primaryButtonText: 'Claim Offer',
  },
};

/**
 * Highlight style with secondary color (Blue)
 */
export const HighlightSecondary: Story = {
  args: {
    style: 'highlight',
    highlightColor: 'secondary-100',
    title: 'Secure Your Future',
    description: 'Start investing in Bitcoin with bank-level security and peace of mind.',
    primaryButtonText: 'Start Investing',
  },
};

/**
 * Highlight style with success color (Green)
 */
export const HighlightSuccess: Story = {
  args: {
    style: 'highlight',
    highlightColor: 'success-100',
    title: 'Account Verified',
    description: "You're all set! Start buying Bitcoin now.",
    primaryButtonText: 'Buy Bitcoin',
  },
};

/**
 * All highlight color variations
 */
export const AllHighlightColors: Story = {
  render: () => (
    <div className="flex flex-col">
      <CTASection
        style="highlight"
        highlightColor="primary-100"
        title="Primary Color"
        description="Orange highlight background"
        primaryButtonText="Get Started"
      />
      <CTASection
        style="highlight"
        highlightColor="secondary-100"
        title="Secondary Color"
        description="Blue highlight background"
        primaryButtonText="Get Started"
      />
      <CTASection
        style="highlight"
        highlightColor="success-100"
        title="Success Color"
        description="Green highlight background"
        primaryButtonText="Get Started"
      />
      <CTASection
        style="highlight"
        highlightColor="extra-cyan-100"
        title="Cyan Color"
        description="Cyan highlight background"
        primaryButtonText="Get Started"
      />
      <CTASection
        style="highlight"
        highlightColor="extra-navy-100"
        title="Navy Color"
        description="Navy highlight background"
        primaryButtonText="Get Started"
      />
      <CTASection
        style="highlight"
        highlightColor="extra-violet-100"
        title="Violet Color"
        description="Violet highlight background"
        primaryButtonText="Get Started"
      />
      <CTASection
        style="highlight"
        highlightColor="extra-gold-100"
        title="Gold Color"
        description="Gold highlight background"
        primaryButtonText="Get Started"
      />
      <CTASection
        style="highlight"
        highlightColor="extra-pink-100"
        title="Pink Color"
        description="Pink highlight background"
        primaryButtonText="Get Started"
      />
      <CTASection
        style="highlight"
        highlightColor="extra-green-100"
        title="Green Color"
        description="Green highlight background"
        primaryButtonText="Get Started"
      />
      <CTASection
        style="highlight"
        highlightColor="extra-purple-100"
        title="Purple Color"
        description="Purple highlight background"
        primaryButtonText="Get Started"
      />
    </div>
  ),
};

/**
 * Left-aligned CTA
 */
export const LeftAligned: Story = {
  args: {
    style: 'light',
    alignment: 'left',
    title: 'Start Building Today',
    description: 'Get access to powerful APIs and developer tools to build the next generation of crypto applications.',
    primaryButtonText: 'View Docs',
    secondaryButtonText: 'Get API Key',
  },
};

/**
 * With custom content above title (badge/pill)
 */
export const WithAboveTitle: Story = {
  args: {
    style: 'light',
    aboveTitle: (
      <div className="flex justify-center">
        <Pill type="secondary" style="outline">
          New Feature
        </Pill>
      </div>
    ),
    title: 'Introducing Bitcoin Rewards',
    description: 'Earn Bitcoin rewards on every purchase with our new rewards program.',
    primaryButtonText: 'Learn More',
  },
};

/**
 * With custom content below actions (disclaimer/fine print)
 */
export const WithBelowActions: Story = {
  args: {
    style: 'light',
    title: 'Start Trading Today',
    description: 'No hidden fees. No minimum deposit. Get started in minutes.',
    primaryButtonText: 'Create Account',
    belowActions: (
      <p className="text-sm text-shades-semi-dark font-['Satoshi_Variable']">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </p>
    ),
  },
};

/**
 * Email signup CTA with custom action
 */
export const EmailSignup: Story = {
  args: {
    style: 'dark',
    alignment: 'center',
    title: 'Stay in the Loop',
    description: 'Get the latest crypto news, updates, and exclusive offers delivered to your inbox.',
    customActions: (
      <div className="flex justify-center w-full">
        <div className="flex flex-col sm:flex-row gap-s w-full max-w-[500px]">
          <Input 
            placeholder="Enter your email"
            type="email"
            className="flex-1"
          />
          <Button variant="secondary" size="sm">
            Subscribe
          </Button>
        </div>
      </div>
    ),
    belowActions: (
      <p className="text-sm text-shades-semi-light font-['Satoshi_Variable']">
        No spam. Unsubscribe anytime.
      </p>
    ),
  },
};

/**
 * App download CTA with AppButtons
 */
export const AppDownload: Story = {
  args: {
    style: 'highlight',
    highlightColor: 'secondary-100',
    title: 'Download Our App',
    description: 'Trade crypto on the go with our mobile app. Available on iOS and Android.',
    customActions: (
      <div className="flex flex-wrap gap-m justify-center">
        <AppButton platform="appstore" variant="dark" size="lg" href="https://apps.apple.com" />
        <AppButton platform="googleplay" variant="dark" size="lg" href="https://play.google.com" />
      </div>
    ),
  },
};

/**
 * Single primary button only
 */
export const SingleButton: Story = {
  args: {
    style: 'light',
    title: 'Ready When You Are',
    description: "Let's build something amazing together.",
    primaryButtonText: 'Get Started',
  },
};

/**
 * Title only, no description or buttons
 */
export const TitleOnly: Story = {
  args: {
    style: 'gray',
    title: 'The Future of Finance',
  },
};

/**
 * Description and buttons only, no title
 */
export const NoTitle: Story = {
  args: {
    style: 'light',
    description: 'Experience the simplest way to buy, sell, and manage your cryptocurrency.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn More',
  },
};

/**
 * Minimal CTA with just custom content
 */
export const MinimalCustom: Story = {
  args: {
    style: 'light',
    customActions: (
      <div className="flex flex-col items-center gap-m">
        <h3 className="font-['Satoshi_Variable'] font-bold text-2xl text-shades-black">
          Have Questions?
        </h3>
        <Button variant="secondary" size="lg">
          Chat with Support
        </Button>
      </div>
    ),
  },
};

/**
 * Complex CTA with all slots filled
 */
export const ComplexExample: Story = {
  args: {
    style: 'highlight',
    highlightColor: 'extra-violet-100',
    id: 'get-started-cta',
    alignment: 'center',
    aboveTitle: (
      <div className="flex justify-center">
        <Pill type="primary" style="fill">
          🎉 Launch Week Special
        </Pill>
      </div>
    ),
    title: 'Join 10 Million Users',
    description: 'Start your crypto journey with the most trusted platform. Get started in under 3 minutes.',
    customActions: (
      <div className="flex flex-col sm:flex-row gap-s justify-center">
        <Button variant="strong" size="lg" leadingIcon={<Icon type="icon-send" size="lg" />}>
          Sign Up with Email
        </Button>
        <Button variant="default" size="lg" leadingIcon={<Icon type="icon-google" size="lg" />}>
          Continue with Google
        </Button>
      </div>
    ),
    belowActions: (
      <div className="flex flex-col items-center gap-s">
        <div className="flex items-center gap-s">
          <Icon type="icon-shield-check" size="sm" className="text-success-100" />
          <p className="text-sm text-[#FFFFFF] font-['Satoshi_Variable']">
            Bank-level security • Insured up to $250,000
          </p>
        </div>
        <p className="text-xs text-[#FFFFFF] font-['Satoshi_Variable']">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    ),
  },
};

/**
 * Mobile preview
 */
export const MobileView: Story = {
  args: {
    style: 'light',
    title: 'Start Trading',
    description: 'Buy and sell crypto with confidence.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn More',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Tablet preview
 */
export const TabletView: Story = {
  args: {
    style: 'light',
    title: 'Start Trading',
    description: 'Buy and sell crypto with confidence.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn More',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

/**
 * Multiple CTAs in sequence (page example)
 */
export const MultipleCTAs: Story = {
  render: () => (
    <div className="flex flex-col">
      <CTASection
        style="light"
        title="Ready to Get Started?"
        description="Create your account in minutes and start trading."
        primaryButtonText="Sign Up Free"
        secondaryButtonText="View Pricing"
      />
      
      <CTASection
        style="gray"
        title="Have Questions?"
        description="Our support team is available 24/7 to help you."
        primaryButtonText="Contact Support"
      />
      
      <CTASection
        style="dark"
        alignment="center"
        title="Subscribe to Newsletter"
        description="Get weekly crypto insights delivered to your inbox."
        customActions={
          <div className="flex justify-center w-full">
            <div className="flex gap-s max-w-[500px]">
              <Input placeholder="Your email" type="email" className="flex-1" />
              <Button variant="secondary" size="sm">Subscribe</Button>
            </div>
          </div>
        }
      />
    </div>
  ),
};

