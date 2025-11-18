import type { InputHTMLAttributes } from 'react';

export type RadioButtonSize = 'md' | 'lg';

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Whether the radio button is selected
   */
  checked?: boolean;
  /**
   * Called when the radio button state changes
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Visual size
   * @default "md"
   */
  size?: RadioButtonSize;
  /**
   * Optional label text
   */
  label?: string;
  /**
   * Whether the control is disabled
   */
  disabled?: boolean;
  /**
   * The value of the radio button
   */
  value?: string;
  /**
   * The name of the radio button group
   */
  name?: string;
}

