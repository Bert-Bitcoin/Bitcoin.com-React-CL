import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type IconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'text'
  | 'link'
  | 'strong';

export type IconButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  /**
   * Visual variant mapped to the Figma component variants.
   * @default "primary"
   */
  variant?: IconButtonVariant;
  /**
   * Size scale connected to the design system.
   * @default "md"
   */
  size?: IconButtonSize;
  /**
   * Icon to display in the button.
   */
  icon: ReactNode;
  /**
   * Display a spinner while preserving layout.
   */
  loading?: boolean;
  /**
   * Accessible label for the button (required for screen readers).
   */
  'aria-label': string;
}

