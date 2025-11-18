import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputStatus = 'default' | 'success' | 'error';
export type InputSize = 'md' | 'lg';
export type InputShape = 'rounded' | 'pill';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Visual size of the control.
   * @default "md"
   */
  size?: InputSize;
  /**
   * Status styles that map to the Figma variants.
   * @default "default"
   */
  status?: InputStatus;
  /**
   * Optional label rendered above the control.
   */
  label?: ReactNode;
  /**
   * Helper or validation text displayed below the control.
   */
  helperText?: ReactNode;
  /**
   * Optional icon rendered before the input value.
   */
  startIcon?: ReactNode;
  /**
   * Optional icon rendered after the input value.
   */
  endIcon?: ReactNode;
  /**
   * Whether the control should stretch to the container width.
   */
  fullWidth?: boolean;
  /**
   * Shape override for the control container.
   * @default "rounded"
   */
  shape?: InputShape;
  /**
   * Additional class applied directly to the input element.
   */
  inputClassName?: string;
}


