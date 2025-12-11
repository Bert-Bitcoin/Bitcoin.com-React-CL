import type { ReactNode } from 'react';

export type ModalType = 'confirm' | 'alert';
export type ModalStyle = 'portrait' | 'landscape';
export type ModalSize = 'default' | 'compact';

export interface ModalProps {
  /**
   * Whether the modal is open
   */
  open: boolean;
  /**
   * Callback when modal should close
   */
  onClose?: () => void;
  /**
   * Modal type - determines button layout
   * - 'confirm': Shows both Cancel and Confirm buttons
   * - 'alert': Shows only Confirm button
   * @default 'confirm'
   */
  type?: ModalType;
  /**
   * Modal layout style
   * - 'portrait': Vertical layout with illustration on top
   * - 'landscape': Horizontal layout with illustration on the side
   * Note: Automatically switches to portrait on small screens
   * @default 'portrait'
   */
  style?: ModalStyle;
  /**
   * Modal size
   * @default 'default'
   */
  size?: ModalSize;
  /**
   * Modal title (will be displayed in uppercase with Elza font)
   */
  title: string;
  /**
   * Modal description text
   */
  description: string;
  /**
   * Mini illustration component to display
   */
  illustration?: ReactNode;
  /**
   * Text for the confirm button
   * @default 'Confirm'
   */
  confirmText?: string;
  /**
   * Text for the cancel button (only shown when type is 'confirm')
   * @default 'Cancel'
   */
  cancelText?: string;
  /**
   * Callback when confirm button is clicked
   */
  onConfirm?: () => void;
  /**
   * Callback when cancel button is clicked (only shown when type is 'confirm')
   */
  onCancel?: () => void;
  /**
   * Show close button (X) in landscape mode
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * Custom className for the modal container
   */
  className?: string;
  /**
   * Whether clicking the backdrop closes the modal
   * @default true
   */
  closeOnBackdropClick?: boolean;
}


