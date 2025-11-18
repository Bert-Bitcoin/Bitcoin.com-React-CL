import type { InputHTMLAttributes } from 'react';

export type OptionSize = 'md' | 'lg';

export interface OptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Whether the option is selected
   */
  checked?: boolean;
  /**
   * Called when the option state changes
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Visual size
   * @default "md"
   */
  size?: OptionSize;
  /**
   * Label text
   */
  label: string;
  /**
   * Optional description text
   */
  description?: string;
  /**
   * Whether the control is disabled
   */
  disabled?: boolean;
  /**
   * The value of the option
   */
  value?: string;
  /**
   * The name of the option group
   */
  name?: string;
}

