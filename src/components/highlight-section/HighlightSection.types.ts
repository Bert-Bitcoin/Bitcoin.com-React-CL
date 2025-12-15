import type { ReactNode } from 'react';

export type HighlightSectionStyle = 'light' | 'gray' | 'dark';

export interface HighlightSectionProps {
  /**
   * Theme mode for the section
   * @default 'auto'
   */
  themeMode?: 'auto' | 'light' | 'dark';
  
  /**
   * Style variant of the section
   * @default 'light'
   */
  style?: HighlightSectionStyle;
  
  /**
   * Main heading for the section
   * @default 'Your all-in-one Bitcoin platform'
   */
  heading?: string;
  
  /**
   * Description text (optional)
   */
  description?: string;
  
  /**
   * Custom HTML element to place above the main title
   */
  headerElement?: ReactNode;
  
  /**
   * Custom HTML element to place under the buttons
   */
  footerElement?: ReactNode;
  
  /**
   * CTA button text
   * @default 'Learn More'
   */
  buttonText?: string;
  
  /**
   * CTA button href (optional)
   */
  buttonHref?: string;
  
  /**
   * CTA button click handler
   */
  onButtonClick?: () => void;
  
  /**
   * Custom CTA element (overrides default button)
   */
  ctaElement?: ReactNode;
  
  /**
   * Image element to display (use either this or imageUrl)
   */
  imageElement?: ReactNode;
  
  /**
   * Image URL to display (automatically wrapped in Illustration component)
   */
  imageUrl?: string;
  
  /**
   * Alt text for image (used when imageUrl is provided)
   */
  imageAlt?: string;
  
  /**
   * Position of the image
   * @default 'left'
   */
  imagePosition?: 'left' | 'right';
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

