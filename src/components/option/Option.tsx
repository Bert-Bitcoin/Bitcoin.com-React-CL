import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import type { OptionProps, OptionSize } from './Option.types';

const optionSizes: Record<OptionSize, { box: string; dot: string; label: string }> = {
  md: {
    box: 'size-[18px]',
    dot: 'size-[8px]',
    label: 'text-label'
  },
  lg: {
    box: 'size-[18px]',
    dot: 'size-[8px]',
    label: 'text-label-lg'
  }
};

export const Option = forwardRef<HTMLInputElement, OptionProps>(
  (
    {
      checked = false,
      onCheckedChange,
      size = 'md',
      label,
      description,
      disabled,
      className,
      id,
      value,
      name,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const controlId = id ?? generatedId;
    const sizeConfig = optionSizes[size];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onCheckedChange?.(e.target.checked);
    };

    const containerClasses = twMerge(
      'border border-solid rounded-xs transition-colors duration-150 cursor-pointer',
      'bg-field-background border-field-border',
      disabled && 'opacity-50 cursor-not-allowed',
      className
    );

    const boxClasses = twMerge(
      'relative flex items-center justify-center rounded-pill border transition-colors duration-150 shrink-0',
      sizeConfig.box,
      checked
        ? 'bg-primary-100 border-primary-100'
        : 'bg-field-background border-field-border',
      disabled && 'opacity-50'
    );

    const dotClasses = twMerge(
      'rounded-pill bg-white transition-transform duration-150',
      sizeConfig.dot
    );

    return (
      <div className={containerClasses}>
        <input
          id={controlId}
          ref={ref}
          type="radio"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          value={value}
          name={name}
          className="sr-only"
          {...rest}
        />
        <label
          htmlFor={controlId}
          className={twMerge(
            'flex items-center gap-s p-s cursor-pointer',
            disabled && 'cursor-not-allowed'
          )}
        >
          <div className={boxClasses}>{checked && <div className={dotClasses} />}</div>
          <div className="flex flex-col gap-0 flex-1">
            <span
              className={twMerge(
                'font-medium text-text-primary',
                sizeConfig.label,
                disabled && 'text-field-placeholder'
              )}
            >
              {label}
            </span>
            {description && (
              <span
                className={twMerge(
                  'text-[12px] leading-[16px] text-text-secondary',
                  disabled && 'text-field-placeholder'
                )}
              >
                {description}
              </span>
            )}
          </div>
        </label>
      </div>
    );
  }
);

Option.displayName = 'Option';

