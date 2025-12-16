export type AvatarSize = 'small' | 'default' | 'large' | 'extra-large';

export type AvatarType = 'image' | 'initials' | 'placeholder';

export type AvatarBackgroundColor =
  | 'primary-50'
  | 'secondary-50'
  | 'success-50'
  | 'alerts-50'
  | 'extra-cyan-50'
  | 'extra-violet-50'
  | 'extra-navy-50'
  | 'extra-gold-50'
  | 'extra-yellow-50'
  | 'extra-pink-50'
  | 'extra-green-50'
  | 'extra-purple-50';

export interface AvatarProps {
  /**
   * Size variant of the avatar
   * @default "default"
   */
  size?: AvatarSize;

  /**
   * Type of avatar display
   * @default "placeholder"
   */
  type?: AvatarType;

  /**
   * Image source URL (required when type is 'image')
   */
  src?: string;

  /**
   * Alt text for the image
   * @default "Avatar"
   */
  alt?: string;

  /**
   * Initials to display (required when type is 'initials')
   * @example "JB"
   */
  initials?: string;

  /**
   * Background color for initials and placeholder types
   * @default "primary-50"
   */
  backgroundColor?: AvatarBackgroundColor;

  /**
   * Additional CSS classes
   */
  className?: string;
}

