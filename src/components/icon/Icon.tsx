import { twMerge } from 'tailwind-merge';

import { iconMap } from './iconMap';
import type { IconName, IconProps, IconSize } from './Icon.types';

const sizeConfig: Record<IconSize, string> = {
  xs: 'w-3 h-3', // 12px
  sm: 'w-4 h-4', // 16px
  md: 'w-5 h-5', // 20px
  lg: 'w-6 h-6', // 24px
  xl: 'w-8 h-8', // 32px
  '2xl': 'w-10 h-10' // 40px
};

export const Icon = ({
  type,
  size = 'md',
  className,
  ariaLabel,
  ariaHidden = false
}: IconProps) => {
  const iconData = iconMap[type];

  if (!iconData) {
    console.warn(`Icon "${type}" not found in icon map`);
    return null;
  }

  const { viewBox, content } = iconData;

  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('inline-block flex-shrink-0', sizeConfig[size], className)}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden || !ariaLabel}
      role={ariaLabel ? 'img' : undefined}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

Icon.displayName = 'Icon';

// Export a helper to get all available icon names
export const getAvailableIcons = (): IconName[] => Object.keys(iconMap) as IconName[];

