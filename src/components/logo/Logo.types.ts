export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type LogoTheme = 'auto' | 'light' | 'dark';

export type LogoAlign = 'left' | 'center' | 'right';

export interface LogoProps {
  /**
   * Size of the logo
   * @default 'md'
   */
  size?: LogoSize;
  /**
   * Theme mode for the logo
   * - 'auto': Follows the current theme (light/dark mode)
   * - 'light': Always shows light version (black text)
   * - 'dark': Always shows dark version (white text)
   * @default 'auto'
   */
  theme?: LogoTheme;
  /**
   * Horizontal alignment of the logo
   * @default 'left'
   */
  align?: LogoAlign;
  /**
   * Custom className for additional styling
   */
  className?: string;
  /**
   * Accessibility label for screen readers
   * @default 'Bitcoin.com'
   */
  ariaLabel?: string;
}

