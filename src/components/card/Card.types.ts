import type { ReactNode } from 'react';

export type CardVariant = 'default' | 'outlined' | 'interactive';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps {
  /**
   * Child elements - use Card sub-components for best results
   */
  children: ReactNode;
  /**
   * Visual variant of the card
   * @default 'default'
   */
  variant?: CardVariant;
  /**
   * Padding size inside the card
   * @default 'md'
   */
  padding?: CardPadding;
  /**
   * Whether the card should span full width
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Click handler - makes card interactive
   */
  onClick?: () => void;
  /**
   * Whether card is clickable/hoverable
   * @default false
   */
  interactive?: boolean;
  /**
   * ARIA role for accessibility
   */
  role?: string;
  /**
   * Tab index for keyboard navigation
   */
  tabIndex?: number;
}

export interface CardHeaderProps {
  /**
   * Child elements (typically title and optional description)
   */
  children: ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Optional action element (button, link, etc.)
   */
  action?: ReactNode;
}

export interface CardContentProps {
  /**
   * Child elements
   */
  children: ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface CardFooterProps {
  /**
   * Child elements
   */
  children: ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Whether footer content should be arranged horizontally with space between
   * @default false
   */
  spaceBetween?: boolean;
}

export interface CardMediaProps {
  /**
   * Image source URL
   */
  src: string;
  /**
   * Alt text for image
   */
  alt: string;
  /**
   * Image aspect ratio
   * @default '16/9'
   */
  aspectRatio?: '1/1' | '4/3' | '16/9' | '21/9' | 'auto';
  /**
   * Object fit property for image
   * @default 'cover'
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  /**
   * Position of media in card
   * @default 'top'
   */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface CardTitleProps {
  /**
   * Title text or element
   */
  children: ReactNode;
  /**
   * Semantic HTML heading level
   * @default 'h3'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  /**
   * Typography variant
   * @default 'heading-sm'
   */
  variant?: 'heading-xl' | 'heading-lg' | 'heading-md' | 'heading-sm' | 'body-lg' | 'body';
  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface CardDescriptionProps {
  /**
   * Description text
   */
  children: ReactNode;
  /**
   * Text size variant
   * @default 'xs'
   */
  size?: 'xs' | 'sm';
  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface CardAmountProps {
  /**
   * Primary amount (typically fiat value)
   */
  amount: string | number;
  /**
   * Currency or asset symbol
   * @default '$'
   */
  currency?: string;
  /**
   * Secondary amount (typically crypto value)
   */
  secondaryAmount?: string;
  /**
   * Icon to display next to secondary amount
   */
  secondaryIcon?: ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface CardIconProps {
  /**
   * Icon element (Icon, AssetIcon, or MiniIllustration component)
   */
  children: ReactNode;
  /**
   * Size of the icon container
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Whether to add a background shape
   * @default false
   */
  withBackground?: boolean;
  /**
   * Background color when withBackground is true
   */
  backgroundColor?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface CardDividerProps {
  /**
   * Additional CSS classes
   */
  className?: string;
}

