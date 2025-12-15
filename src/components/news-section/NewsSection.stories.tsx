import type { Meta, StoryObj } from '@storybook/react';
import { NewsSection } from './NewsSection';
import type { NewsArticle } from './NewsSection.types';

const meta: Meta<typeof NewsSection> = {
  title: 'Sections/Website/News',
  component: NewsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A responsive news section component for displaying trending articles with a horizontal carousel. Features three visual style variants (light, gray, dark), responsive navigation buttons, and smooth scrolling behavior across different breakpoints.'
      }
    }
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
      description: 'Visual style variant'
    },
    heading: {
      control: 'text',
      description: 'Section heading text'
    },
    description: {
      control: 'text',
      description: 'Section description/subtitle'
    },
    maxArticles: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Maximum number of articles to display'
    },
    readMoreText: {
      control: 'text',
      description: 'Text for the read more button'
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof NewsSection>;

// Sample articles data
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
 * Light style variant with white background
 */
export const Light: Story = {
  args: {
    style: 'light',
    articles: sampleArticles,
    maxArticles: 8,
    onReadMoreClick: () => alert('Read more clicked!')
  }
};

/**
 * Gray style variant with light gray background
 */
export const Gray: Story = {
  args: {
    style: 'gray',
    articles: sampleArticles,
    maxArticles: 8,
    onReadMoreClick: () => alert('Read more clicked!')
  }
};

/**
 * Dark style variant with black background
 */
export const Dark: Story = {
  args: {
    style: 'dark',
    articles: sampleArticles,
    maxArticles: 8,
    onReadMoreClick: () => alert('Read more clicked!')
  }
};

/**
 * Light theme mode (forces light theme regardless of system preference)
 */
export const LightThemeMode: Story = {
  args: {
    themeMode: 'light',
    style: 'light',
    articles: sampleArticles,
    maxArticles: 8,
    onReadMoreClick: () => alert('Read more clicked!')
  }
};

/**
 * Dark theme mode (forces dark theme regardless of system preference)
 */
export const DarkThemeMode: Story = {
  args: {
    themeMode: 'dark',
    style: 'dark',
    articles: sampleArticles,
    maxArticles: 8,
    onReadMoreClick: () => alert('Read more clicked!')
  }
};

/**
 * Section with limited articles (4 articles)
 */
export const LimitedArticles: Story = {
  args: {
    style: 'light',
    articles: sampleArticles,
    maxArticles: 4,
    onReadMoreClick: () => alert('Read more clicked!')
  }
};

/**
 * Section without Read More button
 */
export const WithoutReadMore: Story = {
  args: {
    style: 'light',
    articles: sampleArticles,
    maxArticles: 8
  }
};

/**
 * Custom heading and description
 */
export const CustomContent: Story = {
  args: {
    style: 'gray',
    heading: 'Latest Crypto News',
    description: 'Stay informed with the latest developments in the cryptocurrency world.',
    articles: sampleArticles,
    maxArticles: 8,
    readMoreText: 'View All News',
    onReadMoreClick: () => alert('View all clicked!')
  }
};

/**
 * Mobile viewport demonstration
 */
export const Mobile: Story = {
  args: {
    style: 'light',
    articles: sampleArticles,
    maxArticles: 8,
    onReadMoreClick: () => alert('Read more clicked!')
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

/**
 * Tablet viewport demonstration
 */
export const Tablet: Story = {
  args: {
    style: 'gray',
    articles: sampleArticles,
    maxArticles: 8,
    onReadMoreClick: () => alert('Read more clicked!')
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
};

/**
 * Articles without badges
 */
export const WithoutBadges: Story = {
  args: {
    style: 'light',
    articles: sampleArticles.map(article => ({
      ...article,
      badge: undefined
    })),
    maxArticles: 8,
    onReadMoreClick: () => alert('Read more clicked!')
  }
};

/**
 * Minimal example with few articles
 */
export const Minimal: Story = {
  args: {
    style: 'light',
    articles: sampleArticles.slice(0, 3),
    maxArticles: 3,
    onReadMoreClick: () => alert('Read more clicked!')
  }
};

/**
 * All three styles side by side
 */
export const AllStyles: Story = {
  render: () => (
    <div className="flex flex-col">
      <NewsSection
        style="light"
        articles={sampleArticles}
        maxArticles={8}
        onReadMoreClick={() => alert('Light - Read more clicked!')}
      />
      <NewsSection
        style="gray"
        articles={sampleArticles}
        maxArticles={8}
        onReadMoreClick={() => alert('Gray - Read more clicked!')}
      />
      <NewsSection
        style="dark"
        articles={sampleArticles}
        maxArticles={8}
        onReadMoreClick={() => alert('Dark - Read more clicked!')}
      />
    </div>
  )
};

/**
 * Section without description text
 */
export const WithoutDescription: Story = {
  args: {
    style: 'light',
    heading: 'Trending News',
    articles: sampleArticles,
    maxArticles: 8,
    onReadMoreClick: () => alert('Read more clicked!')
  }
};

/**
 * Section with custom content below the button
 */
export const WithCustomContent: Story = {
  args: {
    style: 'gray',
    heading: 'Latest Updates',
    description: 'Stay informed with the latest developments in the cryptocurrency world.',
    articles: sampleArticles,
    maxArticles: 8,
    onReadMoreClick: () => alert('Read more clicked!'),
    customContent: (
      <div className="mt-m text-center">
        <p className="font-['Satoshi_Variable'] text-sm text-shades-semi-dark">
          Want to receive daily news updates?{' '}
          <a href="#" className="text-primary-100 hover:underline font-bold">
            Subscribe to our newsletter
          </a>
        </p>
      </div>
    )
  }
};

/**
 * Section without button but with custom content
 */
export const CustomContentOnly: Story = {
  args: {
    style: 'light',
    heading: 'Featured Articles',
    description: 'Hand-picked articles from our editorial team.',
    articles: sampleArticles.slice(0, 4),
    maxArticles: 4,
    customContent: (
      <div className="flex flex-col gap-s items-center justify-center text-center">
        <p className="font-['Satoshi_Variable'] text-base text-shades-semi-dark">
          Looking for more crypto insights?
        </p>
        <div className="flex gap-m">
          <a 
            href="#" 
            className="font-['Satoshi_Variable'] font-bold text-primary-100 hover:underline"
          >
            View Archive
          </a>
          <span className="text-shades-mid">•</span>
          <a 
            href="#" 
            className="font-['Satoshi_Variable'] font-bold text-primary-100 hover:underline"
          >
            Follow Us
          </a>
        </div>
      </div>
    )
  }
};

