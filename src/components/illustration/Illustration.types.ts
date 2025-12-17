import type { CSSProperties, ReactNode } from 'react';

export type IllustrationObjectFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
export type IllustrationAspectRatio = '1/1' | '4/3' | '16/9' | '21/9' | 'auto';
export type IllustrationSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type IllustrationPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IllustrationProps {
  /**
   * Image source URL or path
   */
  src: string;
  /**
   * Alt text for accessibility
   */
  alt: string;
  /**
   * How the image should fit within its container
   * - 'cover': Image covers entire container, may be cropped
   * - 'contain': Image fits completely within container, may have empty space
   * - 'fill': Image fills container, may be stretched
   * - 'none': Image maintains original size
   * - 'scale-down': Uses smaller of 'none' or 'contain' (prevents upscaling)
   * @default 'contain'
   */
  objectFit?: IllustrationObjectFit;
  /**
   * Aspect ratio of the container
   * @default 'auto'
   */
  aspectRatio?: IllustrationAspectRatio;
  /**
   * Predefined size (overrides width/height if set)
   */
  size?: IllustrationSize;
  /**
   * Custom width (CSS value)
   */
  width?: string | number;
  /**
   * Custom height (CSS value)
   */
  height?: string | number;
  /**
   * Background color of the container (useful for transparent images)
   */
  backgroundColor?: string;
  /**
   * Whether to add a border
   * @default false
   */
  withBorder?: boolean;
  /**
   * Whether to add rounded corners
   * @default false
   */
  rounded?: boolean;
  /**
   * Whether to center the image within its container
   * @default true
   */
  centered?: boolean;
  /**
   * Internal padding around the image
   * @default 'none'
   */
  padding?: IllustrationPadding;
  /**
   * Loading behavior
   * @default 'lazy'
   */
  loading?: 'lazy' | 'eager';
  /**
   * Callback when image loads successfully
   */
  onLoad?: () => void;
  /**
   * Callback when image fails to load
   */
  onError?: () => void;
  /**
   * Fallback content to display if image fails to load
   */
  fallback?: ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Additional container CSS classes
   */
  containerClassName?: string;
  /**
   * Custom inline styles for the image
   */
  style?: CSSProperties;
}

