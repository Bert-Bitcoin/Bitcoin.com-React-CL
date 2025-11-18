export type DatePickerMode = 'single' | 'range';

export interface DatePickerProps {
  /**
   * The selection mode - 'single' for single date, 'range' for date range
   * @default 'single'
   */
  mode?: DatePickerMode;

  /**
   * The selected date (for single mode) or start date (for range mode)
   */
  selectedDate?: Date;

  /**
   * The end date (for range mode only)
   */
  endDate?: Date;

  /**
   * Callback fired when a date is selected
   */
  onDateChange?: (date: Date | null) => void;

  /**
   * Callback fired when a date range is selected (range mode only)
   */
  onRangeChange?: (startDate: Date | null, endDate: Date | null) => void;

  /**
   * Minimum selectable date
   */
  minDate?: Date;

  /**
   * Maximum selectable date
   */
  maxDate?: Date;

  /**
   * Whether the datepicker is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Placeholder text for the input
   */
  placeholder?: string;

  /**
   * Custom className for the container
   */
  className?: string;

  /**
   * Label for the input field
   */
  label?: string;

  /**
   * Helper text shown below the input
   */
  helperText?: string;

  /**
   * Format string for displaying dates (e.g., 'MMM DD, YYYY')
   * @default 'MMM DD, YYYY'
   */
  dateFormat?: string;
}

export interface CalendarProps {
  currentDate: Date;
  selectedDate?: Date;
  endDate?: Date;
  hoveredDate?: Date | null;
  mode: DatePickerMode;
  onDateSelect: (date: Date) => void;
  onDateHover: (date: Date | null) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  minDate?: Date;
  maxDate?: Date;
  showNavigation?: 'left' | 'right' | 'both' | 'none';
}

export interface DateCellProps {
  date: Date;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isDisabled: boolean;
  onClick: () => void;
  onHover: () => void;
}

