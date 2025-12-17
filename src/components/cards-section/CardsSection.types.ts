import type { ReactNode } from 'react';
import type { ButtonVariant } from '../button/Button.types';

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
  /** Optional icon/illustration component to display */
  icon?: ReactNode;
  /** Card title (will be displayed in uppercase using Elza Narrow) */
  title: string;
  /** Optional card description */
  description?: string;
  /** Optional custom content to inject at the start of the card (before icon) */
  customContentStart?: ReactNode;
  /** Optional custom content to inject at the end of the card (after button) */
  customContentEnd?: ReactNode;
  /** Optional action button configuration */
  action?: {
    /** Button text */
    label: string;
    /** Click handler */
    onClick: () => void;
    /** Button variant (defaults to 'secondary') */
    variant?: ButtonVariant;
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
  /** Optional description text displayed under the heading */
  description?: string;
  /** Array of cards to display */
  cards: CardItem[];
  /** Layout configuration - number of cards per row on desktop */
  layout?: CardsSectionLayout;
  /** Additional CSS classes */
  className?: string;
  /** Optional ID for the section element (useful for anchor links and SEO) */
  id?: string;
  /** Remove top padding - useful when stacking sections with the same style */
  removeTopPadding?: boolean;
}

