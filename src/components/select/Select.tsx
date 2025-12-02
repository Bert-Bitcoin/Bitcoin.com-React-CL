import { forwardRef, useId, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../icon';
import type { SelectProps, SelectSize } from './Select.types';

const selectSizes: Record<SelectSize, { text: string; height: string; iconSize: string }> = {
  md: {
    text: 'text-label',
    height: 'h-[35px]',
    iconSize: 'size-4'
  },
  lg: {
    text: 'text-label-lg',
    height: 'h-[38px]',
    iconSize: 'size-4'
  }
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = 'md',
      error = false,
      complete = false,
      label,
      helperText,
      leadingIcon,
      options,
      disabled,
      className,
      id,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const controlId = id ?? generatedId;
    const sizeConfig = selectSizes[size];
    const [isFocused, setIsFocused] = useState(false);

    const containerClasses = twMerge(
      'relative w-full rounded-sm border transition-colors duration-150',
      sizeConfig.height,
      isFocused && !error && !disabled
        ? 'border-field-border-active'
        : error
          ? 'border-alerts-100'
          : 'border-field-border',
      'bg-field-background',
      disabled && 'opacity-50 cursor-not-allowed'
    );

    const selectClasses = twMerge(
      'w-full h-full bg-transparent font-medium transition-colors duration-150 appearance-none cursor-pointer',
      sizeConfig.text,
      'px-s pr-[32px]',
      leadingIcon && 'pl-[36px]',
      'text-text-primary',
      'focus:outline-none',
      disabled && 'cursor-not-allowed'
    );

    return (
      <div className={twMerge('flex flex-col gap-xs w-full', className)}>
        {label && (
          <label
            htmlFor={controlId}
            className={twMerge(
              'font-medium text-text-primary',
              sizeConfig.text,
              disabled && 'text-field-placeholder'
            )}
          >
            {label}
          </label>
        )}
        <div className={containerClasses}>
          {leadingIcon && (
            <div className="absolute left-s top-1/2 -translate-y-1/2 pointer-events-none">
              {leadingIcon}
            </div>
          )}
          <select
            id={controlId}
            ref={ref}
            className={selectClasses}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...rest}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-s top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon
              type="icon-arrow-down"
              className={twMerge(
                sizeConfig.iconSize,
                'text-text-secondary'
              )}
            />
          </div>
        </div>
        {helperText && (
          <span
            className={twMerge(
              'text-label-sm',
              error
                ? 'text-alerts-100'
                : complete
                  ? 'text-success-100'
                  : 'text-text-secondary',
              disabled && 'text-field-placeholder'
            )}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

