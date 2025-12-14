import type { Meta, StoryObj } from '@storybook/react';
import { FAQSection } from './FAQSection';
import type { AccordionItemData } from '../accordion';

const meta = {
  title: 'Sections/Website/FAQ Section',
  component: FAQSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A FAQ section component that displays frequently asked questions in an accordion layout.

## Features
- Responsive layout with desktop side-by-side and mobile stacked heading
- Uses existing Accordion component for FAQ items
- Three style variants: light, gray, and dark
- Theme mode support for automatic, light, or dark theming
- Follows website section padding rules
- Customizable heading text

## Usage

\`\`\`tsx
import { FAQSection } from '@bitcoin-portal/design-system';

const faqItems = [
  {
    id: '1',
    title: 'How do I buy Bitcoin?',
    content: 'You can buy Bitcoin through our platform...'
  },
  // ... more items
];

function MyPage() {
  return (
    <FAQSection
      style="light"
      heading="Frequently Asked Questions"
      items={faqItems}
    />
  );
}
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    themeMode: {
      description: 'Theme mode for the section',
      control: 'select',
      options: ['auto', 'light', 'dark']
    },
    style: {
      description: 'Visual style variant',
      control: 'select',
      options: ['light', 'gray', 'dark']
    },
    heading: {
      description: 'Section heading text',
      control: 'text'
    },
    items: {
      description: 'Array of FAQ items to display',
      control: 'object'
    },
    defaultExpanded: {
      description: 'Array of initially expanded item IDs',
      control: 'object'
    },
    allowMultiple: {
      description: 'Allow multiple items to be expanded at once',
      control: 'boolean'
    },
    className: {
      description: 'Additional CSS classes for the section',
      control: 'text'
    }
  }
} satisfies Meta<typeof FAQSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample FAQ data
const sampleFAQItems: AccordionItemData[] = [
  {
    id: '1',
    title: 'Buy Bitcoin',
    content:
      'Bitcoin tends to crash when BOTH unemployment spikes AND yields jump, creating a "risk-off" environment. Historical examples include the COVID shock (March 2020: UNRATE hit 14.8%) and Fed tightening cycle (Oct 2022: DGS10 peaked at 4.2%). The data is updated monthly for UNRATE and daily for DGS10, sourced from Federal Reserve Economic Data (FRED).'
  },
  {
    id: '2',
    title: 'Self-Custody',
    content:
      'Self-custody means you control your own Bitcoin private keys. This gives you complete control over your funds without relying on third-party custodians. We provide secure wallet solutions that make self-custody easy and safe.'
  },
  {
    id: '3',
    title: 'Earn Rewards',
    content:
      'Earn rewards by staking your cryptocurrency, participating in liquidity pools, or using our Bitcoin credit card. Rewards are automatically credited to your account and can be withdrawn at any time.'
  },
  {
    id: '4',
    title: 'Swap Crypto',
    content:
      'Our crypto swap feature allows you to instantly exchange between different cryptocurrencies at competitive rates. Swaps are processed on-chain with transparent fees and no hidden charges.'
  }
];

/**
 * Default FAQSection with light style
 */
export const Default: Story = {
  args: {
    style: 'light',
    heading: 'FAQ',
    items: sampleFAQItems,
    defaultExpanded: ['1']
  }
};

/**
 * FAQSection with gray background style
 */
export const GrayStyle: Story = {
  args: {
    style: 'gray',
    heading: 'FAQ',
    items: sampleFAQItems
  }
};

/**
 * FAQSection with dark background style
 */
export const DarkStyle: Story = {
  args: {
    style: 'dark',
    heading: 'FAQ',
    items: sampleFAQItems
  }
};

/**
 * FAQSection with custom heading
 */
export const CustomHeading: Story = {
  args: {
    style: 'light',
    heading: 'Frequently Asked Questions',
    items: sampleFAQItems
  }
};

/**
 * FAQSection with single item expansion (accordion mode)
 */
export const SingleExpansion: Story = {
  args: {
    style: 'light',
    heading: 'FAQ',
    items: sampleFAQItems,
    allowMultiple: false,
    defaultExpanded: ['1']
  }
};

/**
 * FAQSection with all items collapsed initially
 */
export const AllCollapsed: Story = {
  args: {
    style: 'gray',
    heading: 'FAQ',
    items: sampleFAQItems,
    defaultExpanded: []
  }
};

/**
 * FAQSection with light theme mode (forces light theme)
 */
export const LightThemeMode: Story = {
  args: {
    themeMode: 'light',
    style: 'light',
    heading: 'FAQ',
    items: sampleFAQItems
  }
};

/**
 * FAQSection with dark theme mode (forces dark theme)
 */
export const DarkThemeMode: Story = {
  args: {
    themeMode: 'dark',
    style: 'dark',
    heading: 'FAQ',
    items: sampleFAQItems
  }
};
