import React from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../icon';
import { Indicator } from '../indicator';
import { MiniIllustration } from '../mini-illustrations';
import { AssetIcon } from '../asset-icons';
import { Avatar } from '../avatar';

import type {
  ListItemAssetIconConfig,
  ListItemAvatarConfig,
  ListItemColorOption,
  ListItemContent,
  ListItemIconConfig,
  ListItemMiniIllustrationConfig,
  ListItemProps,
  ListItemSize
} from './ListItem.types';

// Color mapping for background colors
const backgroundColorMap: Record<ListItemColorOption, string> = {
  'primary-100': 'bg-primary-100',
  'secondary-100': 'bg-secondary-100',
  'success-100': 'bg-success-100',
  'extra-cyan-100': 'bg-extra-cyan-100',
  'extra-navy-100': 'bg-extra-navy-100',
  'extra-violet-100': 'bg-extra-violet-100',
  'extra-gold-100': 'bg-extra-gold-100',
  'extra-pink-100': 'bg-extra-pink-100',
  'extra-green-100': 'bg-extra-green-100',
  'extra-purple-100': 'bg-extra-purple-100'
};

// Color mapping for icon/text colors
const textColorMap: Record<ListItemColorOption, string> = {
  'primary-100': 'text-primary-100',
  'secondary-100': 'text-secondary-100',
  'success-100': 'text-success-100',
  'extra-cyan-100': 'text-extra-cyan-100',
  'extra-navy-100': 'text-extra-navy-100',
  'extra-violet-100': 'text-extra-violet-100',
  'extra-gold-100': 'text-extra-gold-100',
  'extra-pink-100': 'text-extra-pink-100',
  'extra-green-100': 'text-extra-green-100',
  'extra-purple-100': 'text-extra-purple-100'
};

// Size configurations
const sizeConfig: Record<
  ListItemSize,
  {
    container: string;
    numberSize: string;
    numberFontSize: string;
    numberLineHeight: string;
    illustrationSize: string;
    titleFontSize: string;
    descriptionFontSize: string;
    gap: string;
  }
> = {
  default: {
    container: 'p-m',
    numberSize: 'w-[26px] h-[20px]',
    numberFontSize: 'text-[14px]',
    numberLineHeight: 'leading-[16px]',
    illustrationSize: 'size-[40px]',
    titleFontSize: 'text-[16px] leading-snug',
    descriptionFontSize: 'text-[14px] leading-snug',
    gap: 'gap-m'
  },
  compact: {
    container: 'p-s',
    numberSize: 'w-[22px] h-[16px]',
    numberFontSize: 'text-[12px]',
    numberLineHeight: 'leading-[13px]',
    illustrationSize: 'size-[28px]',
    titleFontSize: 'text-[14px] leading-snug mt-[3px]',
    descriptionFontSize: 'text-[12px] leading-snug mb-[3px]',
    gap: 'gap-[12px]'
  }
};

export const ListItem: React.FC<ListItemProps> = ({
  size = 'default',
  number,
  illustration,
  illustrationType,
  leftContent,
  rightContent,
  indicator,
  buttonArea,
  className = '',
  showDivider = true,
  showHover = false,
  onClick
}) => {
  const config = sizeConfig[size];

  return (
    <div className={twMerge('flex flex-col items-start w-full', className)}>
      <div
        className={twMerge(
          'flex items-center w-full overflow-clip',
          config.container,
          config.gap,
          (showHover || onClick) && 'hover:bg-secondary-100/10 dark:hover:bg-secondary-100/20 transition-colors',
          onClick && 'cursor-pointer'
        )}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        {/* Number Badge */}
        {number && (
          <div
            className={twMerge(
              'relative flex-shrink-0 rounded-[53px] overflow-clip flex items-center justify-center',
              config.numberSize,
              backgroundColorMap[number.backgroundColor || 'primary-100']
            )}
          >
            <span
              className={twMerge(
                "font-['IBMPlexSans'] font-semibold text-white text-center leading-none",
                config.numberFontSize,
                config.numberLineHeight
              )}
            >
              {number.value}
            </span>
          </div>
        )}

        {/* Illustration/Icon */}
        {illustration && illustrationType && (
          <div className={twMerge('relative flex-shrink-0 align-middle justify-center flex items-center', config.illustrationSize)}>
            {illustrationType === 'mini-illustration' && (
              <MiniIllustration
                illustration={(illustration as ListItemMiniIllustrationConfig).illustration}
                size={size === 'default' ? 'md' : 'sm'}
                className="w-full h-full"
              />
            )}
            {illustrationType === 'icon' && (
              <Icon
                type={(illustration as ListItemIconConfig).iconName}
                size={size === 'default' ? 'xl' : 'lg'}
                className={
                  (illustration as ListItemIconConfig).color
                    ? textColorMap[(illustration as ListItemIconConfig).color!]
                    : 'text-primary-100'
                }
              />
            )}
            {illustrationType === 'asset-icon' && (
              <AssetIcon
                asset={(illustration as ListItemAssetIconConfig).asset}
                size={size === 'default' ? 'lg' : 'md'}
              />
            )}
            {illustrationType === 'avatar' && (
              <Avatar
                {...(illustration as ListItemAvatarConfig).avatarProps}
                size={size === 'default' ? 'large' : 'small'}
              />
            )}
          </div>
        )}

        {/* Left Content */}
        <div className="flex flex-col items-start flex-grow min-w-0">
          {leftContent.customContent ? (
            leftContent.customContent
          ) : (
            <>
              {leftContent.title && (
                <div
                  className={twMerge(
                    "font-['Satoshi_Variable'] font-medium text-shades-black w-full",
                    config.titleFontSize
                  )}
                >
                  {leftContent.title}
                </div>
              )}
              {leftContent.description && (
                <div
                  className={twMerge(
                    "font-['Satoshi_Variable'] font-medium text-shades-dark w-full mt-[4px]",
                    config.descriptionFontSize
                  )}
                >
                  {leftContent.description}
                </div>
              )}
            </>
          )}
        </div>

        {/* Right Content */}
        {rightContent && (
          <div className="flex flex-col items-end flex-shrink-0 text-right">
            {rightContent.customContent ? (
              rightContent.customContent
            ) : (
              <>
                {rightContent.title && (
                  <div
                    className={twMerge(
                      "font-['Satoshi_Variable'] font-medium text-shades-black",
                      config.titleFontSize
                    )}
                  >
                    {rightContent.title}
                  </div>
                )}
                {rightContent.description && (
                  <div
                    className={twMerge(
                      "font-['Satoshi_Variable'] font-medium text-shades-dark mt-[4px]",
                      config.descriptionFontSize
                    )}
                  >
                    {rightContent.description}
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Indicator */}
        {indicator && (
          <div className="flex-shrink-0">
            <Indicator variant={indicator.variant} label={indicator.label} />
          </div>
        )}

        {/* Button Area */}
        {buttonArea && <div className="flex-shrink-0">{buttonArea}</div>}
      </div>

      {/* Divider */}
      {showDivider && (
        <div className="w-full h-0 border-b border-shades-light dark:border-shades-semi-light" aria-hidden="true" />
      )}
    </div>
  );
};

ListItem.displayName = 'ListItem';

