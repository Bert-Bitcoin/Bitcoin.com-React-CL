import type { ReactNode } from 'react';

/**
 * Style variants for the Cards Section
 */
export type CardsSectionStyle = 'light' | 'gray' | 'black';

/**
 * Card layout options
 */
export type CardsSectionLayout = 3 | 6;

/**
 * Individual card data structure
 */
export interface CardItem {
  /** Unique identifier for the card */
  id: string;
  /** Icon/illustration component to display */
  icon: ReactNode;
  /** Card title (will be displayed in uppercase using Elza Narrow) */
  title: string;
  /** Optional card description */
  description?: string;
  /** Optional action button configuration */
  action?: {
    /** Button text */
    label: string;
    /** Click handler */
    onClick: () => void;
  };
}

/**
 * Props for the CardsSection component
 */
export interface CardsSectionProps {
  /** Theme mode override for the section wrapper */
  themeMode?: 'auto' | 'light' | 'dark';
  /** Visual style of the section */
  style?: CardsSectionStyle;
  /** Section heading (displayed in uppercase) */
  heading?: string;
  /** Array of cards to display */
  cards: CardItem[];
  /** Layout configuration - number of cards per row on desktop */
  layout?: CardsSectionLayout;
  /** Additional CSS classes */
  className?: string;
}
