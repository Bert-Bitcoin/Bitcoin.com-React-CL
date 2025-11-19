export type LogoMarkSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface LogoMarkProps {
  /**
   * Size of the logo mark
   * @default 'md'
   */
  size?: LogoMarkSize;
  /**
   * Custom className for additional styling
   */
  className?: string;
  /**
   * Accessibility label for screen readers
   * @default 'Bitcoin.com Logo'
   */
  ariaLabel?: string;
}

