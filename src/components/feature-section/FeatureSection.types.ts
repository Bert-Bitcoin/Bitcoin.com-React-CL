import type { ReactNode } from 'react';

export type FeatureSectionStyle = 'light' | 'gray' | 'dark';

export interface Feature {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  imageElement?: ReactNode;
  imagePosition?: 'left' | 'right';
}

export interface FeatureSectionProps {
  /**
   * Theme mode for the section
   * @default 'auto'
   */
  themeMode?: 'auto' | 'light' | 'dark';
  
  /**
   * Style variant of the section
   * @default 'light'
   */
  style?: FeatureSectionStyle;
  
  /**
   * Main heading for the section
   * @default 'Features'
   */
  heading?: string;
  
  /**
   * Array of feature items to display
   */
  features: Feature[];
  
  /**
   * Additional CSS classes
   */
  className?: string;
}
