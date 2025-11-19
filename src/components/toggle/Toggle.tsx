import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ToggleProps, ToggleSize } from './Toggle.types';

const trackSizes: Record<
  ToggleSize,
  { track: string; knob: string; translate: string; label: string }
> = {
  md: {
    track: 'w-11 h-6 px-[3px]',
    knob: 'h-4 w-4',
    translate: 'translate-x-[1.25rem]',
    label: 'text-label'
  },
  lg: {
    track: 'w-12 h-7 px-[3px]',
    knob: 'h-5 w-5',
    translate: 'translate-x-[1.5rem]',
    label: 'text-label-lg'
  }
};

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked,
      onCheckedChange,
      size = 'md',
      label,
      description,
      disabled,
      fullWidth,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const controlId = id ?? generatedId;

    const sizeConfig = trackSizes[size];

    const handleClick = () => {
      if (disabled) return;
      onCheckedChange?.(!checked);
    };

    const trackClasses = twMerge(
      'relative flex items-center rounded-full border border-transparent transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-field-border-active focus-visible:ring-opacity-30 focus-visible:ring-offset-2',
      sizeConfig.track,
      checked ? 'bg-primary-100' : 'bg-field-border',
      disabled && 'bg-surface-muted text-field-placeholder cursor-not-allowed opacity-80'
    );

    const knobClasses = twMerge(
      'inline-flex items-center justify-center rounded-full bg-white transition-transform duration-150',
      sizeConfig.knob,
      checked ? sizeConfig.translate : 'translate-x-0',
      disabled && 'bg-shades-extra-light'
    );

    return (
      <div
        className={twMerge('flex items-start gap-s', fullWidth && 'w-full', className)}
        data-disabled={disabled ? '' : undefined}
      >
        <button
          id={controlId}
          type="button"
          ref={ref}
          role="switch"
          aria-checked={checked}
          aria-disabled={disabled}
          onClick={handleClick}
          disabled={disabled}
          className={trackClasses}
          {...props}
        >
          <span className={knobClasses} />
        </button>
        {(label || description) && (
          <label
            htmlFor={controlId}
            className={twMerge(
              'flex min-w-0 flex-col',
              disabled ? 'cursor-not-allowed text-field-placeholder' : 'cursor-pointer'
            )}
          >
            {label ? (
              <span className={twMerge('font-medium text-text-primary', sizeConfig.label)}>
                {label}
              </span>
            ) : null}
            {description ? (
              <span className="text-label-sm text-text-secondary">{description}</span>
            ) : null}
          </label>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';


