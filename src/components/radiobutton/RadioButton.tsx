import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import type { RadioButtonProps, RadioButtonSize } from './RadioButton.types';

const radioSizes: Record<RadioButtonSize, { box: string; dot: string; label: string }> = {
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

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      checked = false,
      onCheckedChange,
      size = 'md',
      label,
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
    const sizeConfig = radioSizes[size];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onCheckedChange?.(e.target.checked);
    };

    const boxClasses = twMerge(
      'relative flex items-center justify-center rounded-pill border transition-colors duration-150 shrink-0',
      sizeConfig.box,
      checked
        ? 'bg-primary-100 border-primary-100'
        : 'bg-field-background border-field-border',
      disabled && 'opacity-50 cursor-not-allowed'
    );

    const dotClasses = twMerge(
      'rounded-pill bg-white transition-transform duration-150',
      sizeConfig.dot
    );

    return (
      <div
        className={twMerge(
          'flex items-center gap-s py-s rounded-sm',
          disabled && 'cursor-not-allowed',
          className
        )}
      >
        <div className="relative flex items-center">
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
              'flex items-center gap-s cursor-pointer',
              disabled && 'cursor-not-allowed'
            )}
          >
            <div className={boxClasses}>{checked && <div className={dotClasses} />}</div>
            {label && (
              <span
                className={twMerge(
                  'font-medium text-text-primary',
                  sizeConfig.label,
                  disabled && 'text-field-placeholder'
                )}
              >
                {label}
              </span>
            )}
          </label>
        </div>
      </div>
    );
  }
);

RadioButton.displayName = 'RadioButton';

