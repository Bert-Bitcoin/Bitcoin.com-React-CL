import type { AnchorHTMLAttributes } from 'react';

export type AppButtonPlatform = 'appstore' | 'googleplay' | 'qr';
export type AppButtonVariant = 'light' | 'dark' | 'outline-light' | 'outline-dark' | 'color';
export type AppButtonSize = 'sm' | 'md' | 'lg';

export interface AppButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Platform - determines which app button type to display
   * @default "appstore"
   */
  platform?: AppButtonPlatform;
  
  /**
   * Visual variant - light, dark, outline-light, outline-dark, or color style
   * @default "dark"
   */
  variant?: AppButtonVariant;
  
  /**
   * Size of the button
   * @default "md"
   */
  size?: AppButtonSize;
  
  /**
   * The URL to the app store listing or QR code destination
   */
  href: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

