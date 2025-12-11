import type { ReactNode } from 'react';

export type NotificationVariant = 'basic' | 'condensed' | 'actions' | 'full';

export type NotificationPosition = 'top-right' | 'bottom-left' | 'top-center';

export type NotificationAnimation = 'slide' | 'fade' | 'bounce';

export interface NotificationAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'text';
}

export interface NotificationProps {
  /**
   * The variant style of the notification
   * - basic: Icon, title, and description
   * - condensed: Title only with optional action
   * - actions: Basic with action buttons (Undo/Dismiss)
   * - full: Basic with primary action button and dismiss
   */
  variant?: NotificationVariant;

  /**
   * The title of the notification (always shown, uppercase for headings)
   */
  title: string;

  /**
   * Optional description text (not shown in condensed variant)
   */
  description?: string;

  /**
   * Optional icon name from the icon library
   */
  icon?: string;

  /**
   * Optional icon color (defaults to primary-100)
   */
  iconColor?: string;

  /**
   * Position of the notification on screen
   * - top-right: Desktop/tablet only
   * - bottom-left: Desktop/tablet only
   * - top-center: Mobile default, but can be used on desktop
   * @default 'top-right'
   */
  position?: NotificationPosition;

  /**
   * Animation type for showing the notification
   * - slide: Slides in from the side
   * - fade: Fades in with slight movement
   * - bounce: Bounces in with spring effect
   * @default 'slide'
   */
  animation?: NotificationAnimation;

  /**
   * Whether the notification is currently visible
   */
  visible?: boolean;

  /**
   * Callback when close button is clicked
   */
  onClose?: () => void;

  /**
   * Optional primary action (used in 'actions' and 'full' variants)
   */
  primaryAction?: NotificationAction;

  /**
   * Optional secondary action (used in 'actions' and 'full' variants)
   */
  secondaryAction?: NotificationAction;

  /**
   * Auto-dismiss timeout in milliseconds (0 = no auto-dismiss)
   * @default 0
   */
  autoHideDuration?: number;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Test ID for testing
   */
  testId?: string;
}


