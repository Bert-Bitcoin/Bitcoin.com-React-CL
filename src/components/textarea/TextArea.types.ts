import type { TextareaHTMLAttributes } from 'react';

export type TextAreaSize = 'md' | 'lg';

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * Visual size
   * @default "md"
   */
  size?: TextAreaSize;
  /**
   * Whether the textarea has an error
   */
  error?: boolean;
  /**
   * Whether the textarea is in a complete/success state
   */
  complete?: boolean;
  /**
   * Optional label text
   */
  label?: string;
  /**
   * Helper text displayed below the textarea
   */
  helperText?: string;
}

