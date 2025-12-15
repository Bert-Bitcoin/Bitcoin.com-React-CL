import type { ForwardedRef } from 'react';
import { forwardRef, Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ButtonProps, ButtonSize, ButtonVariant } from './Button.types';

const baseClasses =
  'relative inline-flex items-center justify-center font-sans font-medium rounded-[40px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none';

const variantClasses: Record<ButtonVariant, string> = {
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

const sizeLayout: Record<ButtonSize, string> = {
  sm: 'gap-xs px-s py-xs min-h-[1.5rem]',
  md: 'gap-s px-m py-s min-h-[2.1875rem]',
  lg: 'gap-s px-m py-s min-h-[2.375rem]',
  xl: 'gap-s px-m py-s min-h-[2.6875rem]'
};

const textClasses: Record<ButtonSize, string> = {
  sm: 'text-label-sm',
  md: 'text-label',
  lg: 'text-label-lg',
  xl: 'text-[20px] font-medium'
};

const iconSizes: Record<ButtonSize, string> = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
  xl: 'h-[2.6875rem] w-[2.6875rem]'
};

const spinnerSizes: Record<ButtonSize, string> = {
  sm: 'h-3 w-3 border-[2px]',
  md: 'h-4 w-4 border-[2.5px]',
  lg: 'h-5 w-5 border-[3px]',
  xl: 'h-[2.6875rem] w-[2.6875rem] border-[3px]'
};

const loadingColorByVariant: Record<ButtonVariant, string> = {
  primary: 'text-white/70',
  secondary: 'text-white/70',
  default: 'text-shades-mid',
  text: 'text-shades-semi-light',
  link: 'text-primary-50',
  strong: 'text-shades-white/70'
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      leadingIcon,
      trailingIcon,
      loading = false,
      disabled,
      fullWidth,
      type = 'button',
      ...rest
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const iconClass = twMerge(
      'pointer-events-none flex-shrink-0 text-current inline-flex items-center justify-center [&_svg]:!w-full [&_svg]:!h-full',
      iconSizes[size]
    );
    const isDisabled = disabled ?? loading;

    const content = (
      <Fragment>
        {renderLeading(size, variant, loading, iconClass, leadingIcon)}
        <span className={twMerge('truncate', textClasses[size])}>{children}</span>
        {renderTrailing(size, loading, iconClass, trailingIcon)}
      </Fragment>
    );

    return (
      <button
        ref={ref}
        type={type}
        className={twMerge(
          baseClasses,
          variantClasses[variant],
          sizeLayout[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        data-variant={variant}
        data-size={size}
        {...rest}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

function renderLeading(
  size: ButtonSize,
  variant: ButtonVariant,
  loading: boolean,
  iconClass: string,
  leadingIcon?: ButtonProps['leadingIcon']
) {
  if (loading) {
    return (
      <Spinner
        sizeClass={spinnerSizes[size]}
        className={loadingColorByVariant[variant]}
        label="Loading"
      />
    );
  }

  if (!leadingIcon) {
    return null;
  }

  return <span className={iconClass}>{leadingIcon}</span>;
}

function renderTrailing(
  size: ButtonSize,
  loading: boolean,
  iconClass: string,
  trailingIcon?: ButtonProps['trailingIcon']
) {
  if (loading) {
    return null;
  }

  if (!trailingIcon) {
    return null;
  }

  return <span className={iconClass}>{trailingIcon}</span>;
}

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

export { Button };


