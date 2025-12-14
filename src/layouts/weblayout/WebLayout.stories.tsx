import type { Meta, StoryObj } from '@storybook/react';
import { WebLayout } from './WebLayout';
import { NewsSection } from '../../components/news-section/NewsSection';
import type { NewsArticle } from '../../components/news-section/NewsSection.types';
import { ArticlesSection } from '../../components/articles-section/ArticlesSection';
import type { Article } from '../../components/articles-section/ArticlesSection.types';
import { CardsSection } from '../../components/cards-section/CardsSection';
import type { CardItem } from '../../components/cards-section/CardsSection.types';
import { LinksSection } from '../../components/links-section/LinksSection';
import type { LinkItem } from '../../components/links-section/LinksSection.types';
import { FAQSection } from '../../components/faq-section/FAQSection';
import type { AccordionItemData } from '../../components/accordion';
import { 
  BitcoinCreditCardsIllustration,
  BitcoinGambleIllustration,
  BitcoinHandsWalletIllustration,
  BitcoinWalletNoteIllustration,
  SwapFuelCoinsIllustration,
  PoolBitcoinIllustration
} from '../../components/mini-illustrations';

const meta = {
  title: 'Layouts/Websites',
  component: WebLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A full-page layout component for marketing/website pages with header and footer.

## Features
- Header with navigation and action button
- Flexible content area that grows to fill available space
- Website footer with links and app download badges
- Full viewport height layout
- Responsive design

## Usage
This layout is designed for marketing pages, landing pages, and public-facing website content.
The content area is meant to be filled with section components.

\`\`\`tsx
import { WebLayout } from '@bitcoin-portal/design-system';

function MyPage() {
  return (
    <WebLayout>
      <YourContentSections />
    </WebLayout>
  );
}
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Content to be rendered in the main content area',
      control: false
    },
    headerProps: {
      description: 'Props to pass to the Header component',
      control: 'object'
    },
    footerProps: {
      description: 'Props to pass to the WebsiteFooter component',
      control: 'object'
    },
    className: {
      description: 'Additional CSS classes for the layout container',
      control: 'text'
    },
    contentClassName: {
      description: 'Additional CSS classes for the content area',
      control: 'text'
    }
  }
} satisfies Meta<typeof WebLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample articles data for NewsSection examples
const sampleArticles: NewsArticle[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=420&fit=crop',
    imageAlt: 'Bitcoin cryptocurrency',
    title: 'Bitcoin Reaches New All-Time High',
    summary: 'A short article summary of an article and why you should read more about this exciting development.',
    badge: 'Trending Now',
    timestamp: '23 Minutes ago',
    href: '#'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=420&fit=crop',
    imageAlt: 'Ethereum blockchain',
    title: 'Ethereum Upgrade Brings Major Improvements',
    summary: 'A short article summary of an article and why you should read more about the latest updates.',
    badge: 'Hot Topic',
    timestamp: '1 Hour ago',
    href: '#'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=420&fit=crop',
    imageAlt: 'Cryptocurrency trading',
    title: 'Top 5 Crypto Trading Strategies for 2024',
    summary: 'A short article summary of an article and why you should read more about winning strategies.',
    timestamp: '2 Hours ago',
    href: '#'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=420&fit=crop',
    imageAlt: 'DeFi concept',
    title: 'DeFi Revolution: What You Need to Know',
    summary: 'A short article summary of an article and why you should read more about decentralized finance.',
    badge: 'Expert Analysis',
    timestamp: '3 Hours ago',
    href: '#'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&h=420&fit=crop',
    imageAlt: 'NFT artwork',
    title: 'NFT Market Sees Unprecedented Growth',
    summary: 'A short article summary of an article and why you should read more about the NFT boom.',
    timestamp: '4 Hours ago',
    href: '#'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=420&fit=crop',
    imageAlt: 'Blockchain technology',
    title: 'Understanding Blockchain Technology',
    summary: 'A short article summary of an article and why you should read more about blockchain basics.',
    badge: 'Educational',
    timestamp: '5 Hours ago',
    href: '#'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=420&fit=crop',
    imageAlt: 'Crypto wallet security',
    title: 'How to Secure Your Crypto Wallet',
    summary: 'A short article summary of an article and why you should read more about wallet security.',
    timestamp: '6 Hours ago',
    href: '#'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=420&fit=crop',
    imageAlt: 'Cryptocurrency future',
    title: 'The Future of Cryptocurrency in 2025',
    summary: 'A short article summary of an article and why you should read more about crypto predictions.',
    badge: 'Future Trends',
    timestamp: '7 Hours ago',
    href: '#'
  }
];

/**
 * Default WebLayout with placeholder content
 */
export const Default: Story = {
  args: {
    children: (
      <div className="flex items-center justify-center min-h-[400px] bg-shades-white">
        <p className="text-heading-md text-shades-semi-dark">Content Placeholder</p>
      </div>
    )
  }
};

// Sample articles data for ArticlesSection examples
const sampleSimpleArticles: Article[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=420&fit=crop',
    imageAlt: 'Bitcoin cryptocurrency',
    title: 'A large Article title',
    summary: 'A short article summary of an article and why you should read more',
    href: '#'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=420&fit=crop',
    imageAlt: 'Ethereum blockchain',
    title: 'A large Article title',
    summary: 'A short article summary of an article and why you should read more',
    href: '#'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=420&fit=crop',
    imageAlt: 'Cryptocurrency trading',
    title: 'A large Article title',
    summary: 'A short article summary of an article and why you should read more',
    href: '#'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=420&fit=crop',
    imageAlt: 'DeFi concept',
    title: 'A large Article title',
    summary: 'A short article summary of an article and why you should read more',
    href: '#'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&h=420&fit=crop',
    imageAlt: 'NFT artwork',
    title: 'A large Article title',
    summary: 'A short article summary of an article and why you should read more',
    href: '#'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=420&fit=crop',
    imageAlt: 'Blockchain technology',
    title: 'A large Article title',
    summary: 'A short article summary of an article and why you should read more',
    href: '#'
  }
];

// Sample cards data for CardsSection examples
const sampleCards: CardItem[] = [
  {
    id: '1',
    icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
    title: 'Free Crypto Credit Cards',
    description: 'Discover our range of crypto-backed credit cards with no annual fees and instant rewards.',
    action: {
      label: 'Learn More',
      onClick: () => alert('Card 1 clicked!')
    }
  },
  {
    id: '2',
    icon: <BitcoinGambleIllustration className="w-full h-full" />,
    title: 'The Games You Love The Most',
    description: 'Play your favorite games and earn crypto rewards while having fun.',
    action: {
      label: 'Start Playing',
      onClick: () => alert('Card 2 clicked!')
    }
  },
  {
    id: '3',
    icon: <BitcoinHandsWalletIllustration className="w-full h-full" />,
    title: 'Sharing Is Caring',
    description: 'Refer friends and family to earn rewards when they join our platform.',
    action: {
      label: 'Refer Now',
      onClick: () => alert('Card 3 clicked!')
    }
  },
  {
    id: '4',
    icon: <BitcoinWalletNoteIllustration className="w-full h-full" />,
    title: 'Secure Your Assets',
    description: 'Advanced security features to keep your crypto safe and protected.',
    action: {
      label: 'Learn More',
      onClick: () => alert('Card 4 clicked!')
    }
  },
  {
    id: '5',
    icon: <SwapFuelCoinsIllustration className="w-full h-full" />,
    title: 'Instant Swaps',
    description: 'Exchange cryptocurrencies instantly with the best rates and lowest fees.',
    action: {
      label: 'Swap Now',
      onClick: () => alert('Card 5 clicked!')
    }
  },
  {
    id: '6',
    icon: <PoolBitcoinIllustration className="w-full h-full" />,
    title: 'Earn Passive Income',
    description: 'Stake your crypto and earn rewards with competitive APY rates.',
    action: {
      label: 'Start Earning',
      onClick: () => alert('Card 6 clicked!')
    }
  }
];

// Sample links data for LinksSection examples
const sampleLinks: LinkItem[] = [
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
 * WebLayout with multiple sections components 
 */
export const WithSections: Story = {
  args: {
    children: (
      <>
        <NewsSection
          style="light"
          heading="Trending News"
          description="Never miss an update—keep up with daily crypto headlines and analysis."
          articles={sampleArticles}
          maxArticles={8}
          onReadMoreClick={() => alert('Read more clicked!')}
        />
        <ArticlesSection
          style="dark"
          heading="Featured Articles"
          description="Stay informed with the latest insights and analysis."
          articles={sampleSimpleArticles}
          maxArticles={6}
          onReadMoreClick={() => alert('View all articles!')}
        />
        <CardsSection
          style="gray"
          heading="Our Services"
          cards={sampleCards}
          layout={6}
        />
        <LinksSection
          style="dark"
          heading="Useful Links"
          links={sampleLinks}
        />
        <FAQSection
          style="light"
          heading="FAQ"
          items={sampleFAQItems}
          defaultExpanded={['1']}
        />
      </>
    )
  }
};

