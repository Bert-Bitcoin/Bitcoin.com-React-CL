import React from 'react';
import type { AssetProps } from './Asset.types';

export const Asset: React.FC<AssetProps> = ({
  icon: IconComponent,
  name,
  ticker,
  size = 'lg',
  networkIcon: NetworkIcon,
  className = '',
}) => {
  // Size-specific configurations
  const sizeConfig = {
    lg: {
      iconSize: 'w-10 h-10', // 40px
      gap: 'gap-s',
      parentLayout: 'flex-row',
      layout: 'flex-col gap-[4px]',
      nameStyle: 'font-display text-label-lg font-black leading-none uppercase text-shades-black dark:text-shades-white',
      tickerStyle: 'font-sans text-label-sm font-medium leading-none text-shades-dark dark:text-shades-semi-light',
      networkIconSize: 'w-4 h-4', // 16px
      networkIconPosition: 'bottom-0 right-0',
    },
    md: {
      iconSize: 'w-8 h-8', // 32px
      gap: 'gap-s',
      parentLayout: 'flex-row',
      layout: 'flex-col gap-[4px]',
      nameStyle: 'font-sans text-body-sm font-medium leading-none text-shades-black dark:text-shades-white',
      tickerStyle: 'font-sans text-label-sm font-medium leading-none text-shades-semi-dark dark:text-shades-semi-light',
      networkIconSize: 'w-[13px] h-[13px]',
      networkIconPosition: 'bottom-0 right-0',
    },
    sm: {
      iconSize: 'w-6 h-6', // 24px
      gap: 'gap-s',
      parentLayout: 'flex-row items-center',
      layout: 'flex-row items-center',
      nameStyle: 'font-sans text-body-sm font-medium leading-none text-shades-black dark:text-shades-white',
      tickerStyle: 'font-sans text-body-sm font-medium leading-none text-shades-semi-dark dark:text-shades-semi-light',
      networkIconSize: 'w-[10px] h-[10px]',
      networkIconPosition: 'bottom-0 right-0',
    },
    xs: {
      iconSize: 'w-5 h-5', // 20px
      gap: 'gap-xs',
      parentLayout: 'flex-row items-center',
      layout: 'flex-row items-center',
      nameStyle: 'font-sans text-label-sm font-medium leading-none text-shades-black dark:text-shades-white',
      tickerStyle: 'font-sans text-label-sm font-medium leading-none text-shades-semi-dark dark:text-shades-semi-light',
      networkIconSize: 'w-2 h-2', // 8px
      networkIconPosition: 'bottom-0 right-0',
    },
  };

  const config = sizeConfig[size];
  const textGap = size === 'sm' || size === 'xs' ? 'gap-xs' : '';

  return (
    <div className={`inline-flex ${config.gap} ${config.parentLayout} ${className}`}>
      {/* Asset Icon with optional Network Icon overlay */}
      <div className={`${config.iconSize} flex-shrink-0 relative`}>
        <IconComponent className="w-full h-full" />
        {NetworkIcon && (
          <div className={`absolute ${config.networkIconPosition} ${config.networkIconSize}`}>
            <NetworkIcon className="w-full h-full" />
          </div>
        )}
      </div>

      {/* Asset Info */}
      <div className={`flex ${config.layout} ${textGap} justify-center`}>
        <div className={config.nameStyle}>
          {name}
        </div>
        {ticker && (
          <div className={config.tickerStyle}>
            {ticker}
          </div>
        )}
      </div>
    </div>
  );
};

Asset.displayName = 'Asset';

export default Asset;

