import type { ReactNode } from 'react';

export interface WindowProps {
  /**
   * Controls whether the window is visible
   */
  open: boolean;

  /**
   * Callback function when the window should close
   */
  onClose?: () => void;

  /**
   * The title text displayed in the window header
   */
  title: string;

  /**
   * The content to be displayed in the scrollable content area
   */
  children: ReactNode;

  /**
   * Whether to show the close button in the header
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * Whether clicking the backdrop should close the window
   * @default true
   */
  closeOnBackdropClick?: boolean;

  /**
   * Additional CSS classes for the window container
   */
  className?: string;

  /**
   * Additional CSS classes for the content area
   */
  contentClassName?: string;
}

