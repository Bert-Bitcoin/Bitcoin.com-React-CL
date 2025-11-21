import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { SliderProps } from './Slider.types';

/**
 * Slider - A range input component
 * 
 * Displays a horizontal slider for selecting a value within a range.
 * Based on the Bitcoin.com design system.
 */
export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  className,
  ariaLabel
}) => {
  // Calculate percentage for the filled portion
  const percentage = ((value - min) / (max - min)) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(Number(e.target.value));
    }
  };

  return (
    <div className={twMerge('relative w-full h-[35px] flex items-center', className)}>
      {/* Track Background */}
      <div className="absolute w-full h-[4px] bg-shades-semi-light rounded-[22px]" />
      
      {/* Filled Track */}
      <div
        className="absolute h-[4px] bg-primary-50 rounded-[22px] pointer-events-none transition-all duration-150"
        style={{ width: `${percentage}%` }}
      />

      {/* Thumb */}
      <div
        className="absolute size-[16px] rounded-full bg-primary-100 pointer-events-none transition-all duration-150 -translate-x-1/2"
        style={{ left: `${percentage}%` }}
      />

      {/* Input (invisible but functional) */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        aria-label={ariaLabel}
        className={twMerge(
          'absolute w-full h-full appearance-none bg-transparent cursor-pointer',
          'focus:outline-none focus-visible:outline-none',
          // Hide the default track
          '[&::-webkit-slider-track]:appearance-none [&::-webkit-slider-track]:bg-transparent',
          '[&::-moz-range-track]:appearance-none [&::-moz-range-track]:bg-transparent',
          // Hide the default thumb
          '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-[16px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-transparent [&::-webkit-slider-thumb]:cursor-pointer',
          '[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:size-[16px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-transparent [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer',
          // Disabled state
          disabled && 'opacity-50 cursor-not-allowed [&::-webkit-slider-thumb]:cursor-not-allowed [&::-moz-range-thumb]:cursor-not-allowed'
        )}
      />
    </div>
  );
};

Slider.displayName = 'Slider';

