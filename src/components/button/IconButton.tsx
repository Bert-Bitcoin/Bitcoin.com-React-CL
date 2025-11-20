import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IconButtonProps, IconButtonSize, IconButtonVariant } from './IconButton.types';

const baseClasses =
  'relative inline-flex items-center justify-center rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none flex-shrink-0';

const variantClasses: Record<IconButtonVariant, string> = {
  primary:
    'bg-primary-100 text-white hover:bg-primary-50 focus-visible:ring-primary-100/40 focus-visible:ring-offset-shades-off-white disabled:bg-shades-semi-light disabled:text-white/70',
  secondary:
    'bg-secondary-100 text-white hover:bg-secondary-50 focus-visible:ring-secondary-100/40 focus-visible:ring-offset-shades-off-white disabled:bg-shades-semi-light disabled:text-white/70',
  default:
    'bg-shades-off-white text-shades-extra-dark border border-shades-light hover:bg-shades-white hover:border-shades-extra-light focus-visible:ring-primary-100/30 focus-visible:ring-offset-shades-white disabled:bg-shades-extra-light disabled:text-shades-mid disabled:border-shades-extra-light',
  text:
    'bg-transparent text-shades-extra-dark hover:text-primary-100 focus-visible:ring-primary-100/20 focus-visible:ring-offset-shades-off-white disabled:text-shades-semi-light',
  link:
    'bg-transparent text-primary-100 hover:text-primary-50 focus-visible:ring-primary-100/20 focus-visible:ring-offset-shades-off-white disabled:text-shades-semi-light',
  strong:
    'bg-shades-black text-shades-white hover:bg-shades-almost-black focus-visible:ring-shades-black/40 focus-visible:ring-offset-shades-off-white disabled:bg-shades-semi-dark disabled:text-shades-white/70'
};

const sizeClasses: Record<IconButtonSize, { button: string; icon: string }> = {
  sm: {
    button: 'w-[32px] h-[32px]',
    icon: 'w-4 h-4'
  },
  md: {
    button: 'w-[35px] h-[35px]',
    icon: 'w-4 h-4'
  },
  lg: {
    button: 'w-[38px] h-[38px]',
    icon: 'w-5 h-5'
  }
};

const spinnerSizes: Record<IconButtonSize, string> = {
  sm: 'h-4 w-4 border-[2px]',
  md: 'h-4 w-4 border-[2.5px]',
  lg: 'h-5 w-5 border-[3px]'
};

const loadingColorByVariant: Record<IconButtonVariant, string> = {
  primary: 'text-white/70',
  secondary: 'text-white/70',
  default: 'text-shades-mid',
  text: 'text-shades-semi-light',
  link: 'text-primary-50',
  strong: 'text-shades-white/70'
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled,
      type = 'button',
      'aria-label': ariaLabel,
      ...rest
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const sizeConfig = sizeClasses[size];
    const isDisabled = disabled ?? loading;

    return (
      <button
        ref={ref}
        type={type}
        aria-label={ariaLabel}
        className={twMerge(
          baseClasses,
          variantClasses[variant],
          sizeConfig.button,
          className
        )}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        data-variant={variant}
        data-size={size}
        {...rest}
      >
        {loading ? (
          <Spinner
            sizeClass={spinnerSizes[size]}
            className={loadingColorByVariant[variant]}
            label="Loading"
          />
        ) : (
          <span className={twMerge('pointer-events-none flex-shrink-0 text-current inline-flex items-center justify-center [&_svg]:!w-full [&_svg]:!h-full -mt-0.5 -ml-0.5', sizeConfig.icon)}>
            {icon}
          </span>
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

interface SpinnerProps {
  className?: string;
  sizeClass: string;
  label?: string;
}

const Spinner = ({ className, sizeClass, label = 'Loading' }: SpinnerProps) => (
  <span
    className="inline-flex items-center justify-center"
    role="status"
    aria-label={label}
  >
    <span
      className={twMerge(
        'inline-flex animate-spin rounded-full border-current border-t-transparent',
        sizeClass,
        className
      )}
    />
  </span>
);

export { IconButton };

