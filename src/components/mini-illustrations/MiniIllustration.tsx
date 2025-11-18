import React from 'react';

export interface MiniIllustrationProps {
  illustration: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
  xl: 'w-32 h-32',
};

export const MiniIllustration: React.FC<MiniIllustrationProps> = ({
  illustration: Illustration,
  size = 'md',
  className,
}) => {
  const classes = className 
    ? `${sizeClasses[size]} ${className}` 
    : sizeClasses[size];
  
  return (
    <div className={classes}>
      <Illustration className="w-full h-full" />
    </div>
  );
};

MiniIllustration.displayName = 'MiniIllustration';

