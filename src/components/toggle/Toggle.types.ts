import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ToggleSize = 'md' | 'lg';

export interface ToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /**
   * Controlled checked state.
   */
  checked: boolean;
  /**
   * Called when the toggle requests a state change.
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Visual size.
   * @default "md"
   */
  size?: ToggleSize;
  /**
   * Optional text label placed to the right of the control.
   */
  label?: ReactNode;
  /**
   * Supplementary text rendered underneath the label.
   */
  description?: ReactNode;
  /**
   * Whether the control is disabled.
   */
  disabled?: boolean;
  /**
   * Render the toggle at full width.
   */
  fullWidth?: boolean;
}


