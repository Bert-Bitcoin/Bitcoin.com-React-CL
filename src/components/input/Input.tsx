import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import type { InputProps, InputShape, InputSize, InputStatus } from './Input.types';

const sizePadding: Record<InputSize, string> = {
  md: 'min-h-[2.1875rem] px-s py-[6px] gap-s',
  lg: 'min-h-[2.375rem] px-m py-2 gap-s'
};

const shapeClass: Record<InputShape, string> = {
  rounded: 'rounded-[8px]',
  pill: 'rounded-[24px]'
};

const borderByStatus: Record<InputStatus, string> = {
  default: 'border-field-border',
  success: 'border-success-100',
  error: 'border-alerts-100'
};

const ringByStatus: Record<InputStatus, string> = {
  default:
    'focus-within:border-field-border-active focus-within:ring-2 focus-within:ring-field-border-active focus-within:ring-opacity-30 focus-within:ring-offset-2',
  success:
    'focus-within:border-success-100 focus-within:ring-2 focus-within:ring-success-100 focus-within:ring-opacity-25 focus-within:ring-offset-2',
  error:
    'focus-within:border-alerts-100 focus-within:ring-2 focus-within:ring-alerts-100 focus-within:ring-opacity-25 focus-within:ring-offset-2'
};

const iconColors: Record<InputStatus, string> = {
  default: 'text-icon',
  success: 'text-success-100',
  error: 'text-alerts-100'
};

const helperColors: Record<InputStatus, string> = {
  default: 'text-text-secondary',
  success: 'text-success-100',
  error: 'text-alerts-100'
};

const inputTextSize: Record<InputSize, string> = {
  md: 'text-label',
  lg: 'text-label-lg'
};

const iconSizes: Record<InputSize, string> = {
  md: 'h-4 w-4',
  lg: 'h-5 w-5'
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      helperText,
      status = 'default',
      size = 'md',
      shape = 'rounded',
      startIcon,
      endIcon,
      disabled,
      fullWidth,
      className,
      inputClassName,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const messageId = helperText ? `${inputId}-helper` : undefined;

    const wrapperClasses = twMerge(
      'group/input flex items-center border bg-field-background text-text-primary transition-colors focus-within:outline-none',
      sizePadding[size],
      shapeClass[shape],
      borderByStatus[status],
      ringByStatus[status],
      disabled && 'pointer-events-none border-border bg-surface-muted text-field-placeholder',
      fullWidth ? 'w-full' : 'w-fit'
    );

    const startIconClass = twMerge(
      'flex items-center justify-center',
      iconSizes[size],
      iconColors[status],
      disabled && 'text-field-placeholder'
    );

    const endIconClass = twMerge(
      'flex items-center justify-center',
      iconSizes[size],
      iconColors[status],
      disabled && 'text-field-placeholder'
    );

    const inputClasses = twMerge(
      'w-full bg-transparent text-text-primary placeholder:text-field-placeholder focus-visible:outline-none',
      inputTextSize[size],
      disabled && 'cursor-not-allowed text-field-placeholder placeholder:text-field-placeholder',
      inputClassName
    );

    const helperClasses = twMerge(
      'text-label-sm',
      helperColors[status],
      disabled && 'text-field-placeholder'
    );

    return (
      <div className={twMerge('flex flex-col gap-[6px]', fullWidth && 'w-full', className)}>
        {label ? (
          <label
            htmlFor={inputId}
            className="text-label-sm font-medium text-text-secondary"
          >
            {label}
          </label>
        ) : null}
        <div className={wrapperClasses} data-status={status} data-disabled={disabled ? '' : undefined}>
          {startIcon ? <span className={startIconClass}>{startIcon}</span> : null}
          <input
            id={inputId}
            ref={ref}
            disabled={disabled}
            aria-invalid={status === 'error' ? true : undefined}
            aria-describedby={messageId}
            className={inputClasses}
            {...props}
          />
          {endIcon ? <span className={endIconClass}>{endIcon}</span> : null}
        </div>
        {helperText ? (
          <p id={messageId} className={helperClasses}>
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';


