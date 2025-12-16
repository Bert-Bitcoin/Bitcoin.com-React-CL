import { ReactNode } from 'react';

/**
 * Layout variants for the AuthLayout
 * - default: Simple card layout (form only)
 * - with-illustration: Card with illustration on the right side
 * - fullscreen: Split screen with form on left and illustration on right
 */
export type AuthLayoutType = 'default' | 'with-illustration' | 'fullscreen';

/**
 * Props for custom logos
 */
export interface CustomLogo {
  /**
   * Logo to display in light mode
   */
  light: string;
  /**
   * Logo to display in dark mode
   */
  dark: string;
}

/**
 * Props for the AuthLayout component
 */
export interface AuthLayoutProps {
  /**
   * Layout variant
   * @default 'default'
   */
  layout?: AuthLayoutType;
  /**
   * Content to display in the form area
   */
  children: ReactNode;
  /**
   * Illustration component to display (ReactNode, SVG, or image URL)
   * 
   * **IMPORTANT:** Only use full illustrations from `/src/illustrations/` directory
   * or custom images via URL. Do NOT use mini-illustrations from 
   * `/src/components/mini-illustrations/` - they are too small for this layout.
   * 
   * @example
   * // Using the Illustration component (recommended)
   * import { Illustration } from '@/components/illustration';
   * <AuthLayout illustration={
   *   <Illustration src="/src/illustrations/Illustration-Account.svg" alt="Account" size="full" objectFit="contain" />
   * } />
   * 
   * // Using an image URL string
   * <AuthLayout illustration="https://example.com/large-illustration.svg" />
   */
  illustration?: ReactNode | string;
  /**
   * Custom logo (light and dark versions)
   * If not provided, uses the default Bitcoin.com logo
   */
  customLogo?: CustomLogo;
  /**
   * Current theme mode for logo switching
   * If not provided, auto-switches based on system theme
   */
  themeMode?: 'light' | 'dark';
  /**
   * Additional CSS classes for the container
   */
  className?: string;
}

