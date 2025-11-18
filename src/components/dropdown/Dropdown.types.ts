import type { SelectHTMLAttributes, ReactNode } from 'react';

export type DropdownSize = 'md' | 'lg';

export interface DropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Visual size
   * @default "md"
   */
  size?: DropdownSize;
  /**
   * Whether the dropdown has an error
   */
  error?: boolean;
  /**
   * Whether the dropdown is in a complete/success state
   */
  complete?: boolean;
  /**
   * Optional label text
   */
  label?: string;
  /**
   * Helper text displayed below the dropdown
   */
  helperText?: string;
  /**
   * Optional leading icon
   */
  leadingIcon?: ReactNode;
  /**
   * The options to display in the dropdown
   */
  options: DropdownOption[];
}

