import { forwardRef, useId, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import type { TextAreaProps, TextAreaSize } from './TextArea.types';

const textareaSizes: Record<TextAreaSize, { text: string; padding: string; minHeight: string }> =
  {
    md: {
      text: 'text-label',
      padding: 'p-s px-s',
      minHeight: 'min-h-[48px]'
    },
    lg: {
      text: 'text-label-lg',
      padding: 'p-s px-s',
      minHeight: 'min-h-[56px]'
    }
  };

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      size = 'md',
      error = false,
      complete = false,
      label,
      helperText,
      disabled,
      className,
      id,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const controlId = id ?? generatedId;
    const sizeConfig = textareaSizes[size];
    const [isFocused, setIsFocused] = useState(false);

    const containerClasses = twMerge(
      'w-full rounded-sm border transition-colors duration-150',
      sizeConfig.minHeight,
      isFocused && !error && !disabled
        ? 'border-field-border-active'
        : error
          ? 'border-alerts-100'
          : 'border-field-border',
      'bg-field-background',
      disabled && 'opacity-50 cursor-not-allowed'
    );

    const textareaClasses = twMerge(
      'w-full bg-transparent resize-none font-medium transition-colors duration-150',
      sizeConfig.text,
      sizeConfig.padding,
      sizeConfig.minHeight,
      'text-text-primary',
      'placeholder:text-field-placeholder',
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
          <textarea
            id={controlId}
            ref={ref}
            className={textareaClasses}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...rest}
          />
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

TextArea.displayName = 'TextArea';

