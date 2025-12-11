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
   * Section description/subtitle
   * @default 'Never miss an update—keep up with daily crypto headlines and analysis.'
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
   * Custom className for additional styling
   */
  className?: string;
}
