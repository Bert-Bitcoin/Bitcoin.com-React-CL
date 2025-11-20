import type { iconNames } from './iconMap';

export type IconName = (typeof iconNames)[number];

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface IconProps {
  /**
   * The icon name/type to display
   */
  type: IconName;
  /**
   * Size of the icon
   * @default 'md'
   */
  size?: IconSize;
  /**
   * Custom className for styling
   */
  className?: string;
  /**
   * Accessibility label
   */
  ariaLabel?: string;
  /**
   * Whether the icon is decorative (hidden from screen readers)
   * @default false
   */
  ariaHidden?: boolean;
}

