import { twMerge } from 'tailwind-merge';

import { Icon } from '../icon/Icon';
import type { IconSize } from '../icon/Icon.types';
import type { AvatarBackgroundColor, AvatarProps, AvatarSize } from './Avatar.types';

// Size configuration based on Figma design
const sizeConfig: Record<AvatarSize, { container: string; text: string; icon: IconSize }> = {
  small: {
    container: 'size-[24px] rounded-[58px]',
    text: 'text-[11px]',
    icon: 'xs'
  },
  default: {
    container: 'size-[35px] rounded-[58px]',
    text: 'text-[14px]',
    icon: 'sm'
  },
  large: {
    container: 'size-[38px] rounded-[58px]',
    text: 'text-[16px]',
    icon: 'md'
  },
  'extra-large': {
    container: 'size-[43px] rounded-[58px]',
    text: 'text-[19px]',
    icon: 'lg'
  }
};

// Background color mapping for proper Tailwind class generation
const backgroundColorMap: Record<AvatarBackgroundColor, string> = {
  'primary-50': 'bg-primary-50',
  'secondary-50': 'bg-secondary-50',
  'success-50': 'bg-success-50',
  'alerts-50': 'bg-alerts-50',
  'extra-cyan-50': 'bg-extra-cyan-50',
  'extra-violet-50': 'bg-extra-violet-50',
  'extra-navy-50': 'bg-extra-navy-50',
  'extra-gold-50': 'bg-extra-gold-50',
  'extra-yellow-50': 'bg-extra-yellow-50',
  'extra-pink-50': 'bg-extra-pink-50',
  'extra-green-50': 'bg-extra-green-50',
  'extra-purple-50': 'bg-extra-purple-50'
};

export const Avatar = ({
  size = 'default',
  type = 'placeholder',
  src,
  alt = 'Avatar',
  initials,
  backgroundColor = 'primary-50',
  className
}: AvatarProps) => {
  const { container, text, icon } = sizeConfig[size];

  // Base classes for all avatar types
  const baseClasses = twMerge(
    'relative flex items-center justify-center overflow-clip',
    container,
    className
  );

  // Image type
  if (type === 'image' && src) {
    return (
      <div className={baseClasses}>
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 size-full object-cover object-center pointer-events-none"
        />
      </div>
    );
  }

  // Initials type
  if (type === 'initials' && initials) {
    return (
      <div
        className={twMerge(
          baseClasses,
          backgroundColorMap[backgroundColor]
        )}
      >
        <span
          className={twMerge(
            'font-sans font-medium text-white leading-none text-center',
            text
          )}
        >
          {initials}
        </span>
      </div>
    );
  }

  // Placeholder type (default)
  return (
    <div
      className={twMerge(
        baseClasses,
        backgroundColorMap[backgroundColor]
      )}
    >
      <div className={twMerge('flex items-center justify-center')}>
        <Icon
          type="icon-user"
          className="text-white"
          ariaLabel="User placeholder"
          size={icon}
        />
      </div>
    </div>
  );
};

Avatar.displayName = 'Avatar';

