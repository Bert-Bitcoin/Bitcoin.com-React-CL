import type { SelectHTMLAttributes, ReactNode } from 'react';

export type SelectSize = 'md' | 'lg';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Visual size
   * @default "md"
   */
  size?: SelectSize;
  /**
   * Whether the select has an error
   */
  error?: boolean;
  /**
   * Whether the select is in a complete/success state
   */
  complete?: boolean;
  /**
   * Optional label text
   */
  label?: string;
  /**
   * Helper text displayed below the select
   */
  helperText?: string;
  /**
   * Optional leading icon
   */
  leadingIcon?: ReactNode;
  /**
   * The options to display in the select
   */
  options: SelectOption[];
}

