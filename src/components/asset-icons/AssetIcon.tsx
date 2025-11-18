import React from 'react';

export interface AssetIconProps {
  asset: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
};

export const AssetIcon: React.FC<AssetIconProps> = ({
  asset: Asset,
  size = 'md',
  className,
}) => {
  const classes = className 
    ? `${sizeClasses[size]} ${className}` 
    : sizeClasses[size];
  
  return (
    <div className={classes}>
      <Asset className="w-full h-full" />
    </div>
  );
};

AssetIcon.displayName = 'AssetIcon';

