export type ArticlesSectionStyle = 'light' | 'gray' | 'dark';

export interface Article {
  /**
   * Unique identifier for the article
   */
  id: string;
  /**
   * URL of the article image
   */
  imageUrl?: string;
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
   * Click handler for the article
   */
  onClick?: () => void;
  /**
   * URL for the article link
   */
  href?: string;
}

export interface ArticlesSectionProps {
  /**
   * Theme mode for the section
   * @default 'auto'
   */
  themeMode?: 'auto' | 'light' | 'dark';
  /**
   * Visual style variant
   * @default 'light'
   */
  style?: ArticlesSectionStyle;
  /**
   * Section heading
   * @default 'Articles'
   */
  heading?: string;
  /**
   * Section description/subtitle (optional)
   */
  description?: string;
  /**
   * Array of articles to display
   * @default []
   */
  articles?: Article[];
  /**
   * Maximum number of articles to display
   * @default 6
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

