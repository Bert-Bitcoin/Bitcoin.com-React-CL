import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../icon';
import type { DatePickerProps } from './DatePicker.types';
import {
  addMonths,
  formatDate,
  formatDateRange,
  generateCalendarDays,
  getMonthYearString,
  isCurrentMonth,
  isDateDisabled,
  isDateInRange,
  isSameDay
} from './DatePicker.utils';

const WEEKDAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const DatePicker = ({
  mode = 'single',
  selectedDate,
  endDate,
  onDateChange,
  onRangeChange,
  minDate,
  maxDate,
  disabled = false,
  placeholder,
  className,
  label,
  helperText,
  dateFormat = 'MMM DD, YYYY'
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const [internalStartDate, setInternalStartDate] = useState<Date | undefined>(selectedDate);
  const [internalEndDate, setInternalEndDate] = useState<Date | undefined>(endDate);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    if (isDateDisabled(date, minDate, maxDate)) return;

    if (mode === 'single') {
      setInternalStartDate(date);
      onDateChange?.(date);
      setIsOpen(false);
    } else {
      // Range mode
      if (!internalStartDate || (internalStartDate && internalEndDate)) {
        // Start new range
        setInternalStartDate(date);
        setInternalEndDate(undefined);
        onRangeChange?.(date, null);
      } else {
        // Complete range
        if (date < internalStartDate) {
          setInternalEndDate(internalStartDate);
          setInternalStartDate(date);
          onRangeChange?.(date, internalStartDate);
        } else {
          setInternalEndDate(date);
          onRangeChange?.(internalStartDate, date);
        }
        setIsOpen(false);
      }
    }
  };

  // Get display value for input
  const getDisplayValue = () => {
    if (mode === 'single') {
      return internalStartDate ? formatDate(internalStartDate, dateFormat) : '';
    } else {
      if (internalStartDate && internalEndDate) {
        return formatDateRange(internalStartDate, internalEndDate, dateFormat);
      } else if (internalStartDate) {
        return formatDate(internalStartDate, dateFormat);
      }
      return '';
    }
  };

  const displayValue = getDisplayValue();

  return (
    <div ref={containerRef} className={twMerge('relative flex flex-col gap-xs', className)}>
      {label && (
        <label className="font-medium text-label text-text-primary">
          {label}
        </label>
      )}

      {/* Input Field */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={twMerge(
          'flex items-center gap-s px-s py-s',
          'min-h-[35px] rounded-s border',
          'bg-field-background border-field-border',
          'text-left transition-colors',
          'hover:border-field-border-active',
          'focus:outline-none focus:border-field-border-active focus:ring-2 focus:ring-field-border-active/30',
          disabled && 'opacity-50 cursor-not-allowed',
          mode === 'range' ? 'min-w-[256px]' : 'min-w-[160px]'
        )}
      >
        <Icon type="icon-calendar" className="w-4 h-4 text-icon flex-shrink-0" />
        <span className={twMerge(
          'flex-1 font-medium text-label',
          displayValue ? 'text-text-primary' : 'text-field-placeholder'
        )}>
          {displayValue || placeholder || (mode === 'single' ? 'Select date' : 'Select date range')}
        </span>
      </button>

      {helperText && (
        <span className="text-label-sm text-text-secondary">
          {helperText}
        </span>
      )}

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className={twMerge(
          'absolute top-full left-0 mt-xs z-50',
          'bg-surface border border-border rounded-s',
          'p-m',
          'w-max' // Allow calendar to be as wide as needed, not constrained by input
        )}>
          <div className={twMerge(
            'flex gap-l',
            mode === 'range' ? 'flex-col sm:flex-row' : 'flex-col'
          )}>
            {/* First Calendar (or only calendar in single mode) */}
            <Calendar
              currentDate={currentMonth}
              selectedDate={internalStartDate}
              endDate={internalEndDate}
              hoveredDate={hoveredDate}
              mode={mode}
              onDateSelect={handleDateSelect}
              onDateHover={setHoveredDate}
              onPrevMonth={() => setCurrentMonth(addMonths(currentMonth, -1))}
              onNextMonth={() => setCurrentMonth(addMonths(currentMonth, 1))}
              minDate={minDate}
              maxDate={maxDate}
              showNavigation={mode === 'range' ? 'left' : 'both'}
            />

            {/* Second Calendar for range mode */}
            {mode === 'range' && (
              <Calendar
                currentDate={addMonths(currentMonth, 1)}
                selectedDate={internalStartDate}
                endDate={internalEndDate}
                hoveredDate={hoveredDate}
                mode={mode}
                onDateSelect={handleDateSelect}
                onDateHover={setHoveredDate}
                onPrevMonth={() => setCurrentMonth(addMonths(currentMonth, -1))}
                onNextMonth={() => setCurrentMonth(addMonths(currentMonth, 1))}
                minDate={minDate}
                maxDate={maxDate}
                showNavigation="right"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

DatePicker.displayName = 'DatePicker';

/**
 * Calendar component - renders a single month view
 */
interface CalendarProps {
  currentDate: Date;
  selectedDate?: Date;
  endDate?: Date;
  hoveredDate: Date | null;
  mode: 'single' | 'range';
  onDateSelect: (date: Date) => void;
  onDateHover: (date: Date | null) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  minDate?: Date;
  maxDate?: Date;
  showNavigation?: 'left' | 'right' | 'both' | 'none';
}

const Calendar = ({
  currentDate,
  selectedDate,
  endDate,
  hoveredDate,
  mode,
  onDateSelect,
  onDateHover,
  onPrevMonth,
  onNextMonth,
  minDate,
  maxDate,
  showNavigation = 'both'
}: CalendarProps) => {
  const days = generateCalendarDays(currentDate);

  return (
    <div className="flex flex-col gap-xs">
      {/* Month/Year Header */}
      <div className="flex items-center justify-between px-0 py-xs">
        {/* Left Arrow */}
        {(showNavigation === 'left' || showNavigation === 'both') ? (
          <button
            type="button"
            onClick={onPrevMonth}
            className="w-6 h-6 flex items-center justify-center text-text-primary hover:text-primary-100 transition-colors"
            aria-label="Previous month"
          >
            <Icon type="icon-arrow-circle-left" className="w-full h-full" />
          </button>
        ) : (
          <div className="w-6 h-6" />
        )}

        {/* Month Year */}
        <div className="font-['Elza_Narrow'] font-black text-[14px] leading-[14px] text-text-primary text-center uppercase">
          {getMonthYearString(currentDate)}
        </div>

        {/* Right Arrow */}
        {(showNavigation === 'right' || showNavigation === 'both') ? (
          <button
            type="button"
            onClick={onNextMonth}
            className="w-6 h-6 flex items-center justify-center text-text-primary hover:text-primary-100 transition-colors"
            aria-label="Next month"
          >
            <Icon type="icon-arrow-circle-right" className="w-full h-full" />
          </button>
        ) : (
          <div className="w-6 h-6" />
        )}
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-xs">
        {WEEKDAY_LABELS.map((day) => (
          <div
            key={day}
            className="w-8 h-6 flex items-center justify-center font-medium text-[12px] text-text-secondary"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-xs">
        {days.map((date, index) => {
          const isInCurrentMonth = isCurrentMonth(date, currentDate);
          const isSelected = isSameDay(date, selectedDate);
          const isEnd = isSameDay(date, endDate);
          const isDisabled = isDateDisabled(date, minDate, maxDate);
          
          // For range mode, determine if date is in range
          let isInRange = false;
          let isRangeStart = false;
          let isRangeEnd = false;
          
          if (mode === 'range' && selectedDate) {
            isRangeStart = isSameDay(date, selectedDate);
            isRangeEnd = isSameDay(date, endDate);
            
            if (endDate) {
              isInRange = isDateInRange(date, selectedDate, endDate);
            } else if (hoveredDate && hoveredDate > selectedDate) {
              isInRange = isDateInRange(date, selectedDate, hoveredDate);
            }
          }

          return (
            <DateCell
              key={index}
              date={date}
              isCurrentMonth={isInCurrentMonth}
              isSelected={isSelected || isEnd}
              isInRange={isInRange && !isRangeStart && !isRangeEnd}
              isRangeStart={isRangeStart}
              isRangeEnd={isRangeEnd}
              isDisabled={isDisabled}
              onClick={() => onDateSelect(date)}
              onHover={() => onDateHover(date)}
              onLeave={() => onDateHover(null)}
            />
          );
        })}
      </div>
    </div>
  );
};

/**
 * DateCell component - renders a single date cell
 */
interface DateCellProps {
  date: Date;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isDisabled: boolean;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
}

const DateCell = ({
  date,
  isCurrentMonth,
  isSelected,
  isInRange,
  isRangeStart,
  isRangeEnd,
  isDisabled,
  onClick,
  onHover,
  onLeave
}: DateCellProps) => {
  const isHighlighted = isSelected || isRangeStart || isRangeEnd;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      disabled={isDisabled}
      className={twMerge(
        'w-8 h-8 flex items-center justify-center',
        'font-medium text-[14px] rounded-xs',
        'transition-colors duration-150',
        'focus:outline-none focus:ring-2 focus:ring-primary-100/30',
        // Background colors
        isHighlighted && 'bg-secondary-100 text-white',
        isInRange && !isHighlighted && 'bg-secondary-10 text-secondary-100 dark:bg-[#663B00]',
        !isHighlighted && !isInRange && 'hover:bg-surface-muted',
        // Text colors
        isCurrentMonth && !isHighlighted && !isInRange && 'text-text-primary',
        !isCurrentMonth && !isHighlighted && !isInRange && 'text-text-secondary opacity-60',
        // Disabled state
        isDisabled && 'opacity-40 cursor-not-allowed hover:bg-transparent'
      )}
      aria-selected={isHighlighted}
      aria-disabled={isDisabled}
    >
      {date.getDate()}
    </button>
  );
};

