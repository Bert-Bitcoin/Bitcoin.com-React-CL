import type { InputHTMLAttributes } from 'react';

export type CheckboxSize = 'md' | 'lg';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Whether the checkbox is checked
   */
  checked?: boolean;
  /**
   * Called when the checkbox state changes
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Visual size
   * @default "md"
   */
  size?: CheckboxSize;
  /**
   * Optional label text
   */
  label?: string;
  /**
   * Whether the control is disabled
   */
  disabled?: boolean;
}

