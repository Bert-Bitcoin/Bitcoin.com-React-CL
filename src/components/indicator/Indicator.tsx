import React from 'react';

import { Icon } from '../icon';

import type { IndicatorProps, IndicatorVariant } from './Indicator.types';

// Variant configuration with light and dark mode support
// Note: Semantic color backgrounds (success, warning, etc.) remain consistent across themes
// Text colors use shade system which automatically inverts in dark mode via CSS variables
const variantConfig: Record<
  IndicatorVariant,
  {
    bgColor: string;
    textColor: string;
    iconName: string;
    iconColor: string;
    defaultLabel: string;
  }
> = {
  approved: {
    bgColor: 'bg-success-10 dark:bg-success-100/40',
    textColor: 'text-shades-almost-black',
    iconName: 'icon-circular-checkmark',
    iconColor: 'text-success-100',
    defaultLabel: 'Approved'
  },
  pending: {
    bgColor: 'bg-warning-10 dark:bg-warning-100/40',
    textColor: 'text-shades-almost-black',
    iconName: 'icon-pending',
    iconColor: 'text-warning-100',
    defaultLabel: 'Pending'
  },
  rejected: {
    bgColor: 'bg-alerts-10 dark:bg-alerts-100/40',
    textColor: 'text-shades-almost-black',
    iconName: 'icon-circular-close',
    iconColor: 'text-alerts-100',
    defaultLabel: 'Rejected'
  },
  viewed: {
    bgColor: 'bg-extra-gray-10 dark:bg-extra-gray-100/40',
    textColor: 'text-shades-almost-black',
    iconName: 'icon-show',
    iconColor: 'text-shades-extra-dark',
    defaultLabel: 'Viewed'
  },
  new: {
    bgColor: 'bg-extra-purple-10 dark:bg-extra-purple-100/40',
    textColor: 'text-shades-almost-black',
    iconName: 'icon-star',
    iconColor: 'text-extra-purple-100',
    defaultLabel: 'New'
  },
  neutral: {
    bgColor: 'bg-primary-10 dark:bg-primary-100/40',
    textColor: 'text-shades-almost-black',
    iconName: 'icon-send',
    iconColor: 'text-primary-100',
    defaultLabel: 'Incoming'
  },
  featured: {
    bgColor: 'bg-secondary-100',
    textColor: 'text-shades-white dark:text-shades-black',
    iconName: 'icon-flash',
    iconColor: 'text-shades-white dark:text-shades-black',
    defaultLabel: 'Featured'
  }
};

export const Indicator: React.FC<IndicatorProps> = ({
  variant = 'approved',
  label,
  icon,
  className = ''
}) => {
  const config = variantConfig[variant];
  const displayLabel = label || config.defaultLabel;
  const displayIcon = icon || config.iconName || 'icon-circle';

  return (
    <div
      className={`
        flex items-center gap-[4px]
        px-s py-xs pl-[4px]
        rounded-xs
        ${config.bgColor}
        ${className}
      `.trim()}
    >
      <Icon
        type={displayIcon}
        size="sm"
        className={config.iconColor}
      />
      <span
        className={`
          font-['Satoshi_Variable'] font-medium
          text-[14px] leading-none
          whitespace-nowrap
          ${config.textColor}
        `.trim()}
      >
        {displayLabel}
      </span>
    </div>
  );
};

Indicator.displayName = 'Indicator';

