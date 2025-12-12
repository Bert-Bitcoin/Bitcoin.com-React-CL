import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesSection } from './ArticlesSection';
import type { Article } from './ArticlesSection.types';

const meta: Meta<typeof ArticlesSection> = {
  title: 'Sections/Website/Articles Section',
  component: ArticlesSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A responsive articles section component for displaying featured articles with a horizontal carousel. Features three visual style variants (light, gray, dark), responsive navigation buttons, and smooth scrolling behavior across different breakpoints. Shows 3 articles on desktop instead of 4 like NewsSection.'
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
type Story = StoryObj<typeof ArticlesSection>;

// Sample articles data
const sampleArticles: Article[] = [
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

/**
 * Light style variant with white background
 */
export const Light: Story = {
  args: {
    style: 'light',
    articles: sampleArticles,
    maxArticles: 6,
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
    maxArticles: 6,
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
    maxArticles: 6,
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
    maxArticles: 6,
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
    maxArticles: 6,
    onReadMoreClick: () => alert('Read more clicked!')
  }
};

/**
 * Section with limited articles (3 articles - desktop layout)
 */
export const LimitedArticles: Story = {
  args: {
    style: 'light',
    articles: sampleArticles.slice(0, 3),
    maxArticles: 3,
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
    maxArticles: 6
  }
};

/**
 * Custom heading and description
 */
export const CustomContent: Story = {
  args: {
    style: 'gray',
    heading: 'Latest Articles',
    description: 'Stay informed with the latest insights and analysis.',
    articles: sampleArticles,
    maxArticles: 6,
    readMoreText: 'View All Articles',
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
    maxArticles: 6,
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
    maxArticles: 6,
    onReadMoreClick: () => alert('Read more clicked!')
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
};

/**
 * Articles without images (placeholder only)
 */
export const WithoutImages: Story = {
  args: {
    style: 'light',
    articles: sampleArticles.map(article => ({
      ...article,
      imageUrl: undefined
    })),
    maxArticles: 6,
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
      <ArticlesSection
        style="light"
        articles={sampleArticles}
        maxArticles={6}
        onReadMoreClick={() => alert('Light - Read more clicked!')}
      />
      <ArticlesSection
        style="gray"
        articles={sampleArticles}
        maxArticles={6}
        onReadMoreClick={() => alert('Gray - Read more clicked!')}
      />
      <ArticlesSection
        style="dark"
        articles={sampleArticles}
        maxArticles={6}
        onReadMoreClick={() => alert('Dark - Read more clicked!')}
      />
    </div>
  )
};
