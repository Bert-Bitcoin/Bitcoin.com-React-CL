import type { Meta, StoryObj } from '@storybook/react';
import { LinksSection } from './LinksSection';
import type { LinkItem } from './LinksSection.types';
import {
  BitcoinCreditCardsIllustration,
  BitcoinGambleIllustration,
  BitcoinHandsWalletIllustration,
  BitcoinWalletNoteIllustration,
  SwapFuelCoinsIllustration,
  PoolBitcoinIllustration
} from '../mini-illustrations';

const meta = {
  title: 'Sections/Website/Links',
  component: LinksSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A website section component for displaying a grid of link cards with optional icons.

## Features
- Supports 3, 4, or 6 link items with responsive grid layout
- Three visual styles: light, gray, and dark
- Each link card includes an optional icon, title, description, and "Read More" link
- Optional section description under the heading
- Reuses mini-illustrations from the design system
- Fully responsive with optimized layouts for mobile, tablet, and desktop
- Semantic HTML with proper link/button elements

## Usage

\`\`\`tsx
import { LinksSection } from '@bitcoin-portal/design-system';
import { BitcoinCreditCardsIllustration } from '@bitcoin-portal/design-system/mini-illustrations';

const links = [
  {
    id: '1',
    icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
    title: 'Link Title',
    description: 'A short article summary of an article and why you should read.',
    href: '/link-1'
  }
];

function MyPage() {
  return (
    <LinksSection
      style="light"
      heading="Links"
      description="Explore these helpful resources"
      links={links}
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
      description: 'Theme mode override (auto uses the parent theme)',
      control: 'select',
      options: ['auto', 'light', 'dark']
    },
    style: {
      description: 'Visual style of the section',
      control: 'select',
      options: ['light', 'gray', 'dark']
    },
    heading: {
      description: 'Section heading text',
      control: 'text'
    },
    description: {
      description: 'Optional description text displayed under the heading',
      control: 'text'
    },
    links: {
      description: 'Array of link items to display (3, 4, or 6 recommended)',
      control: false
    },
    className: {
      description: 'Additional CSS classes',
      control: 'text'
    }
  }
} satisfies Meta<typeof LinksSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample link items
const sampleLinks6: LinkItem[] = [
  {
    id: '1',
    icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
    title: 'Bitcoin Credit Cards',
    description: 'A short article summary of an article and why you should read more about this exciting development.',
    href: '#'
  },
  {
    id: '2',
    icon: <BitcoinGambleIllustration className="w-full h-full" />,
    title: 'Gaming & Rewards',
    description: 'Discover how to earn rewards while playing your favorite games with cryptocurrency.',
    href: '#'
  },
  {
    id: '3',
    icon: <BitcoinHandsWalletIllustration className="w-full h-full" />,
    title: 'Secure Wallets',
    description: 'Learn about the best practices for keeping your cryptocurrency safe and secure.',
    href: '#'
  },
  {
    id: '4',
    icon: <BitcoinWalletNoteIllustration className="w-full h-full" />,
    title: 'Trading Guides',
    description: 'Expert guides and tips for successful cryptocurrency trading strategies.',
    href: '#'
  },
  {
    id: '5',
    icon: <SwapFuelCoinsIllustration className="w-full h-full" />,
    title: 'Token Swaps',
    description: 'Quick and easy token swapping with competitive rates and low fees.',
    href: '#'
  },
  {
    id: '6',
    icon: <PoolBitcoinIllustration className="w-full h-full" />,
    title: 'Liquidity Pools',
    description: 'Earn passive income by providing liquidity to decentralized exchanges.',
    href: '#'
  }
];

const sampleLinks4: LinkItem[] = sampleLinks6.slice(0, 4);
const sampleLinks3: LinkItem[] = sampleLinks6.slice(0, 3);

// Links without icons
const linksWithoutIcons6: LinkItem[] = [
  {
    id: '1',
    title: 'Bitcoin Credit Cards',
    description: 'A short article summary of an article and why you should read more about this exciting development.',
    href: '#'
  },
  {
    id: '2',
    title: 'Gaming & Rewards',
    description: 'Discover how to earn rewards while playing your favorite games with cryptocurrency.',
    href: '#'
  },
  {
    id: '3',
    title: 'Secure Wallets',
    description: 'Learn about the best practices for keeping your cryptocurrency safe and secure.',
    href: '#'
  },
  {
    id: '4',
    title: 'Trading Guides',
    description: 'Expert guides and tips for successful cryptocurrency trading strategies.',
    href: '#'
  },
  {
    id: '5',
    title: 'Token Swaps',
    description: 'Quick and easy token swapping with competitive rates and low fees.',
    href: '#'
  },
  {
    id: '6',
    title: 'Liquidity Pools',
    description: 'Earn passive income by providing liquidity to decentralized exchanges.',
    href: '#'
  }
];

const linksWithoutIcons3: LinkItem[] = linksWithoutIcons6.slice(0, 3);

/**
 * Light style with 6 links - most common layout
 */
export const LightStyle6Links: Story = {
  args: {
    style: 'light',
    heading: 'Useful Links',
    links: sampleLinks6
  }
};

/**
 * Gray style with 6 links
 */
export const GrayStyle6Links: Story = {
  args: {
    style: 'gray',
    heading: 'Resources',
    links: sampleLinks6
  }
};

/**
 * Dark style with 6 links
 */
export const DarkStyle6Links: Story = {
  args: {
    style: 'dark',
    heading: 'Learn More',
    links: sampleLinks6
  }
};

/**
 * 4 links layout - displays in 2x2 grid on desktop
 */
export const FourLinks: Story = {
  args: {
    style: 'light',
    heading: 'Featured Resources',
    links: sampleLinks4
  }
};

/**
 * 3 links layout - displays in single row on desktop
 */
export const ThreeLinks: Story = {
  args: {
    style: 'light',
    heading: 'Quick Links',
    links: sampleLinks3
  }
};

/**
 * With click handlers instead of hrefs
 */
export const WithClickHandlers: Story = {
  args: {
    style: 'light',
    heading: 'Interactive Links',
    links: sampleLinks6.map(link => ({
      ...link,
      href: undefined,
      onClick: () => alert(`Clicked: ${link.title}`)
    }))
  }
};

/**
 * With section description
 */
export const WithDescription: Story = {
  args: {
    style: 'light',
    heading: 'Useful Links',
    description: 'Explore these helpful resources to learn more about cryptocurrency and blockchain technology.',
    links: sampleLinks6
  }
};

/**
 * With longer section description
 */
export const WithLongDescription: Story = {
  args: {
    style: 'gray',
    heading: 'Resources & Guides',
    description: 'Comprehensive guides and resources to help you navigate the world of cryptocurrency, from beginner basics to advanced trading strategies.',
    links: sampleLinks6
  }
};

/**
 * Dark style with description
 */
export const DarkStyleWithDescription: Story = {
  args: {
    style: 'dark',
    heading: 'Learn More',
    description: 'Access our complete library of educational content and tools.',
    links: sampleLinks6
  }
};

/**
 * Links without icons
 */
export const WithoutIcons: Story = {
  args: {
    style: 'light',
    heading: 'Simple Links',
    description: 'Links displayed without icons for a cleaner, text-focused layout.',
    links: linksWithoutIcons6
  }
};

/**
 * Links without icons - 3 links
 */
export const WithoutIcons3Links: Story = {
  args: {
    style: 'gray',
    heading: 'Quick Links',
    description: 'Essential resources at your fingertips.',
    links: linksWithoutIcons3
  }
};

/**
 * Dark style without icons
 */
export const DarkStyleWithoutIcons: Story = {
  args: {
    style: 'dark',
    heading: 'Resources',
    links: linksWithoutIcons6
  }
};

/**
 * All three styles side by side
 */
export const AllStyles: Story = {
  render: () => (
    <>
      <LinksSection
        style="light"
        heading="Light Style"
        links={sampleLinks6}
      />
      <LinksSection
        style="gray"
        heading="Gray Style"
        links={sampleLinks6}
      />
      <LinksSection
        style="dark"
        heading="Dark Style"
        links={sampleLinks6}
      />
    </>
  )
};

