import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { MoonIcon, SunIcon } from '../icons';

export interface ModeToggleProps {
  /**
   * Whether the toggle is checked (dark mode) or unchecked (light mode)
   */
  checked?: boolean;
  /**
   * Callback when the toggle state changes
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Whether the toggle is disabled
   */
  disabled?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * ID for the toggle element
   */
  id?: string;
}

export const ModeToggle = forwardRef<HTMLButtonElement, ModeToggleProps>(
  ({ checked = false, onCheckedChange, disabled, className, id, ...rest }, ref) => {
    const handleClick = () => {
      if (disabled) return;
      onCheckedChange?.(!checked);
    };

    const trackClasses = twMerge(
      'relative w-16 h-8 rounded-pill transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-field-border-active focus-visible:ring-offset-2',
      checked ? 'bg-shades-extra-dark' : 'bg-shades-light',
      disabled && 'opacity-50 cursor-not-allowed'
    );

    const knobClasses = twMerge(
      'absolute top-1 w-6 h-6 rounded-pill shadow-sm transition-all duration-300',
      checked ? 'left-[36px] bg-shades-semi-dark' : 'left-1 bg-white',
      disabled && 'opacity-50'
    );

    const sunIconWrapperClasses = 'absolute left-1 top-1 w-6 h-6 flex items-center justify-center z-10';
    const moonIconWrapperClasses = 'absolute left-[36px] top-1 w-6 h-6 flex items-center justify-center z-10';

    const sunIconClasses = twMerge(
      'w-4 h-4 transition-all duration-300',
      !checked ? 'text-extra-yellow-100 opacity-100' : 'text-shades-mid opacity-40'
    );

    const moonIconClasses = twMerge(
      'w-4 h-4 transition-all duration-300',
      checked ? 'text-white opacity-100' : 'text-shades-mid opacity-40'
    );

    return (
      <button
        id={id}
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        aria-label="Toggle theme"
        onClick={handleClick}
        disabled={disabled}
        className={twMerge(trackClasses, className)}
        {...rest}
      >
        {/* Indicator/knob behind the icons */}
        <span className={knobClasses} aria-hidden />
        
        {/* Icons on top with z-index */}
        <span className={sunIconWrapperClasses}>
          <SunIcon className={sunIconClasses} aria-hidden />
        </span>
        <span className={moonIconWrapperClasses}>
          <MoonIcon className={moonIconClasses} aria-hidden />
        </span>
      </button>
    );
  }
);

ModeToggle.displayName = 'ModeToggle';


