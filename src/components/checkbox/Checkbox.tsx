import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../icon';
import type { CheckboxProps, CheckboxSize } from './Checkbox.types';

const checkboxSizes: Record<CheckboxSize, { box: string; icon: string; label: string }> = {
  md: {
    box: 'size-[18px]',
    icon: 'size-3',
    label: 'text-label'
  },
  lg: {
    box: 'size-[18px]',
    icon: 'size-3',
    label: 'text-label-lg'
  }
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { checked = false, onCheckedChange, size = 'md', label, disabled, className, id, ...rest },
    ref
  ) => {
    const generatedId = useId();
    const controlId = id ?? generatedId;
    const sizeConfig = checkboxSizes[size];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onCheckedChange?.(e.target.checked);
    };

    const boxClasses = twMerge(
      'relative flex items-center justify-center rounded-xs border transition-colors duration-150 shrink-0',
      sizeConfig.box,
      checked
        ? 'bg-primary-100 border-primary-100'
        : 'bg-field-background border-field-border',
      disabled && 'opacity-50 cursor-not-allowed'
    );

    return (
      <div
        className={twMerge(
          'flex items-center gap-s py-s rounded-s',
          disabled && 'cursor-not-allowed',
          className
        )}
      >
        <div className="relative flex items-center">
          <input
            id={controlId}
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
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
            <div className={boxClasses}>
              {checked && (
                <Icon type="icon-checkmark" className={twMerge(sizeConfig.icon, 'text-white')} aria-hidden />
              )}
            </div>
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

Checkbox.displayName = 'Checkbox';

