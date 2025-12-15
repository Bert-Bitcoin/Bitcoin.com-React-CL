import type { ReactNode } from 'react';

export type HeroSectionLayout = 'left' | 'centered' | 'left-illustration' | 'right-illustration';
export type HeroSectionStyle = 'light' | 'gray' | 'dark';

export interface HeroSectionProps {
  /**
   * Theme mode for the section
   * @default 'auto'
   */
  themeMode?: 'auto' | 'light' | 'dark';
  
  /**
   * Style variant of the section
   * @default 'light'
   */
  style?: HeroSectionStyle;
  
  /**
   * Layout variant of the hero section
   * @default 'left'
   */
  layout?: HeroSectionLayout;
  
  /**
   * Custom HTML/React content to display above the main heading
   * Use this for badges, labels, or any content that should appear before the title
   */
  aboveTitle?: ReactNode;
  
  /**
   * Main heading text (will be displayed in uppercase with Elza Narrow font)
   */
  heading: string;
  
  /**
   * Subheading or description text (optional)
   */
  description?: string;
  
  /**
   * Text for the primary CTA button
   * @default 'Get Started'
   */
  primaryButtonText?: string;
  
  /**
   * Click handler for the primary button
   */
  onPrimaryClick?: () => void;
  
  /**
   * Text for the secondary CTA button
   * @default 'Learn more'
   */
  secondaryButtonText?: string;
  
  /**
   * Click handler for the secondary button
   */
  onSecondaryClick?: () => void;
  
  /**
   * Name of the illustration to display (for layout variants with illustrations)
   * References files from src/illustrations/
   * @default 'Illustration-Platform-Alt.svg'
   */
  illustrationName?: string;
  
  /**
   * Reduce top padding by half (useful when placed directly below header navigation)
   * When true: 16px → 20px → 30px → 40px
   * When false: 32px → 40px → 60px → 80px
   * @default false
   */
  reducedTopPadding?: boolean;
  
  /**
   * Custom HTML/React content to replace the default button group
   * Use this for custom CTAs like email inputs, app store badges, or other actions
   * When provided, primaryButtonText, secondaryButtonText, and click handlers are ignored
   */
  customActions?: ReactNode;
  
  /**
   * Custom HTML/React content to display below the action buttons
   * Use this for additional information, disclaimers, trust signals, or supplementary content
   */
  belowActions?: ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

