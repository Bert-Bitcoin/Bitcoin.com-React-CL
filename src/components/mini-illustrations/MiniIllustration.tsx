import type { ComponentType, SVGProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type MiniIllustrationSize = 'sm' | 'md' | 'lg' | 'xl';

export interface MiniIllustrationProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  /**
   * The illustration component to render
   */
  illustration: ComponentType<SVGProps<SVGSVGElement>>;
  /**
   * Size of the illustration
   * @default "md"
   */
  size?: MiniIllustrationSize;
  /**
   * Additional CSS classes
   */
  className?: string;
}

const sizeClasses: Record<MiniIllustrationSize, string> = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-40 h-40'
};

export const MiniIllustration = forwardRef<SVGSVGElement, MiniIllustrationProps>(
  ({ illustration: Illustration, size = 'md', className, ...props }, ref) => {
    return (
      <Illustration
        ref={ref}
        className={twMerge(sizeClasses[size], className)}
        {...props}
      />
    );
  }
);

MiniIllustration.displayName = 'MiniIllustration';
