import type { ReactNode } from 'react';

export type CTASectionStyle = 'light' | 'gray' | 'dark' | 'highlight';
export type CTAHighlightColor = 
  | 'primary-100'
  | 'secondary-100'
  | 'success-100'
  | 'extra-cyan-100'
  | 'extra-navy-100'
  | 'extra-violet-100'
  | 'extra-gold-100'
  | 'extra-pink-100'
  | 'extra-green-100'
  | 'extra-purple-100';

export interface CTASectionProps {
  /**
   * Theme mode for the section
   * @default 'auto'
   */
  themeMode?: 'auto' | 'light' | 'dark';
  
  /**
   * Style variant of the CTA section
   * @default 'light'
   */
  style?: CTASectionStyle;
  
  /**
   * Background color for the "highlight" style variant
   * Only applies when style="highlight"
   * @default 'primary-100'
   */
  highlightColor?: CTAHighlightColor;
  
  /**
   * Custom HTML/React content to display above the title
   * Use this for badges, labels, eyebrows, or any content that should appear before the title
   */
  aboveTitle?: ReactNode;
  
  /**
   * Main heading text (will be displayed in uppercase with Elza Narrow font)
   * Optional - can be omitted if you want a CTA section without a title
   */
  title?: string;
  
  /**
   * Description text (optional)
   */
  description?: string;
  
  /**
   * Text for the primary CTA button
   * Optional - can be omitted if using customActions or no button needed
   */
  primaryButtonText?: string;
  
  /**
   * Click handler for the primary button
   */
  onPrimaryClick?: () => void;
  
  /**
   * Text for the secondary CTA button (optional)
   */
  secondaryButtonText?: string;
  
  /**
   * Click handler for the secondary button
   */
  onSecondaryClick?: () => void;
  
  /**
   * Custom HTML/React content to replace the default button group
   * Use this for custom CTAs like email inputs, app store badges, or other actions
   * When provided, primaryButtonText, secondaryButtonText, and click handlers are ignored
   */
  customActions?: ReactNode;
  
  /**
   * Custom HTML/React content to display below the buttons/actions
   * Use this for additional information, disclaimers, trust signals, or supplementary content
   */
  belowActions?: ReactNode;
  
  /**
   * Text alignment (left, center, or right)
   * @default 'center'
   */
  alignment?: 'left' | 'center' | 'right';
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Optional ID for the section element (useful for anchor links and SEO)
   */
  id?: string;
}


