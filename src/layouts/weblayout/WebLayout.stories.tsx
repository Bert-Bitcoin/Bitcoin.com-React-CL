import type { Meta, StoryObj } from '@storybook/react';
import { WebLayout } from './WebLayout';
import { NewsSection } from '../../components/news-section/NewsSection';
import type { NewsArticle } from '../../components/news-section/NewsSection.types';

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

/**
 * WebLayout with Section components 
 */
export const WithNewsSection: Story = {
  args: {
    children: (
      <NewsSection
        style="light"
        heading="Trending News"
        description="Never miss an update—keep up with daily crypto headlines and analysis."
        articles={sampleArticles}
        maxArticles={8}
        onReadMoreClick={() => alert('Read more clicked!')}
      />
    )
  }
};

