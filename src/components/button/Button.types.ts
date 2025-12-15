import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'text'
  | 'link'
  | 'strong';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  /**
   * Visual variant mapped to the Figma component variants.
   * @default "primary"
   */
  variant?: ButtonVariant;
  /**
   * Size scale connected to the typography tokens.
   * @default "md"
   */
  size?: ButtonSize;
  /**
   * Render a leading icon aligned to the text baseline.
   */
  leadingIcon?: ReactNode;
  /**
   * Render a trailing icon aligned to the text baseline.
   */
  trailingIcon?: ReactNode;
  /**
   * Display a spinner while preserving layout.
   */
  loading?: boolean;
  /**
   * Expand the button to occupy the full container width.
   */
  fullWidth?: boolean;
}


