export type NewsSectionStyle = 'light' | 'gray' | 'dark';

export interface NewsArticle {
  /**
   * Unique identifier for the article
   */
  id: string;
  /**
   * URL of the article image
   */
  imageUrl: string;
  /**
   * Alt text for the article image
   */
  imageAlt?: string;
  /**
   * Article title
   */
  title: string;
  /**
   * Short summary/description of the article
   */
  summary: string;
  /**
   * Optional badge/tag for the article (e.g., "Trending Now")
   */
  badge?: string;
  /**
   * Optional timestamp text (e.g., "23 Minutes ago")
   */
  timestamp?: string;
  /**
   * Click handler for the article
   */
  onClick?: () => void;
  /**
   * URL for the article link
   */
  href?: string;
  /**
   * Author name for structured data
   */
  author?: string;
  /**
   * Publication date (ISO 8601 format) for structured data and time element
   */
  datePublished?: string;
  /**
   * Image width in pixels (for performance/SEO)
   */
  imageWidth?: number;
  /**
   * Image height in pixels (for performance/SEO)
   */
  imageHeight?: number;
}

export interface NewsSectionProps {
  /**
   * Theme mode for the section
   * @default 'auto'
   */
  themeMode?: 'auto' | 'light' | 'dark';
  /**
   * Visual style variant
   * @default 'light'
   */
  style?: NewsSectionStyle;
  /**
   * Section heading
   * @default 'Trending News'
   */
  heading?: string;
  /**
   * Section description/subtitle (optional)
   */
  description?: string;
  /**
   * Array of news articles to display
   * @default []
   */
  articles?: NewsArticle[];
  /**
   * Maximum number of articles to display
   * @default 8
   */
  maxArticles?: number;
  /**
   * Text for the "Read More" button
   * @default 'Read More'
   */
  readMoreText?: string;
  /**
   * Click handler for the "Read More" button
   */
  onReadMoreClick?: () => void;
  /**
   * Custom content to render below the Read More button
   */
  customContent?: React.ReactNode;
  /**
   * Custom className for additional styling
   */
  className?: string;
  /**
   * Optional ID for the section element (useful for anchor links and SEO)
   */
  id?: string;
  /**
   * Enable NewsArticle structured data (Schema.org) for SEO
   * @default true
   */
  enableStructuredData?: boolean;
}

