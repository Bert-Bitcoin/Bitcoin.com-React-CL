import { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import type {
  IllustrationAspectRatio,
  IllustrationObjectFit,
  IllustrationPadding,
  IllustrationProps,
  IllustrationSize
} from './Illustration.types';

// ========================================
// Object Fit Mapping
// ========================================

const objectFitClasses: Record<IllustrationObjectFit, string> = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down'
};

// ========================================
// Aspect Ratio Mapping
// ========================================

const aspectRatioClasses: Record<IllustrationAspectRatio, string> = {
  '1/1': 'aspect-square',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-[16/9]',
  '21/9': 'aspect-[21/9]',
  auto: 'aspect-auto'
};

// ========================================
// Size Mapping
// ========================================

const sizeClasses: Record<IllustrationSize, string> = {
  sm: 'w-24 h-24',
  md: 'w-40 h-40',
  lg: 'w-64 h-64',
  xl: 'w-96 h-96',
  full: 'w-full h-full'
};

// ========================================
// Padding Mapping
// ========================================

const paddingClasses: Record<IllustrationPadding, string> = {
  none: 'p-0',
  xs: 'p-xs',
  sm: 'p-s',
  md: 'p-m',
  lg: 'p-l',
  xl: 'p-xl'
};

// ========================================
// Main Illustration Component
// ========================================

export const Illustration = forwardRef<HTMLDivElement, IllustrationProps>(
  (
    {
      src,
      alt,
      objectFit = 'contain',
      aspectRatio = 'auto',
      size,
      width,
      height,
      backgroundColor,
      withBorder = false,
      rounded = false,
      centered = true,
      padding = 'none',
      loading = 'lazy',
      onLoad,
      onError,
      fallback,
      className,
      containerClassName,
      style,
      ...rest
    },
    ref
  ) => {
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
      setHasError(true);
      onError?.();
    };

    const handleLoad = () => {
      setHasError(false);
      onLoad?.();
    };

    // Build container styles
    const containerStyles: React.CSSProperties = {
      ...(backgroundColor && { backgroundColor }),
      ...(width && !size && { width: typeof width === 'number' ? `${width}px` : width }),
      ...(height && !size && { height: typeof height === 'number' ? `${height}px` : height })
    };

    // Determine image size classes based on objectFit
    // For 'fill' and 'cover', image needs to fill container completely
    // For 'contain', 'none', and 'scale-down', image should be constrained
    const needsFullSize = objectFit === 'fill' || objectFit === 'cover';
    const imageClasses = needsFullSize
      ? 'w-full h-full'
      : size
        ? 'w-full h-full'
        : 'max-w-full max-h-full';

    return (
      <div
        ref={ref}
        className={twMerge(
          'overflow-hidden',
          size && sizeClasses[size],
          aspectRatioClasses[aspectRatio],
          withBorder && 'border border-border',
          rounded && 'rounded-md',
          centered && 'flex items-center justify-center',
          paddingClasses[padding],
          containerClassName
        )}
        style={containerStyles}
        {...rest}
      >
        {hasError && fallback ? (
          fallback
        ) : (
          <img
            src={src}
            alt={alt}
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
            className={twMerge(imageClasses, objectFitClasses[objectFit], className)}
            style={style}
          />
        )}
      </div>
    );
  }
);

Illustration.displayName = 'Illustration';

