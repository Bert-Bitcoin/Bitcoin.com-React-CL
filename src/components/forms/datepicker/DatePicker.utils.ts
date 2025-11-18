/**
 * Utility functions for DatePicker component
 */

/**
 * Get the days in a month
 */
export function getDaysInMonth(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

/**
 * Get the first day of the month (0 = Sunday, 6 = Saturday)
 */
export function getFirstDayOfMonth(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

/**
 * Generate calendar grid for a month (including prev/next month days)
 */
export function generateCalendarDays(date: Date): Date[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  
  const firstDay = getFirstDayOfMonth(date);
  const daysInMonth = getDaysInMonth(date);
  const daysInPrevMonth = getDaysInMonth(new Date(year, month - 1, 1));
  
  const days: Date[] = [];
  
  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push(new Date(year, month - 1, daysInPrevMonth - i));
  }
  
  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }
  
  // Next month days to complete the grid (always show 6 weeks = 42 days)
  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    days.push(new Date(year, month + 1, i));
  }
  
  return days;
}

/**
 * Check if two dates are the same day
 */
export function isSameDay(date1: Date | null | undefined, date2: Date | null | undefined): boolean {
  if (!date1 || !date2) return false;
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

/**
 * Check if a date is in the current month
 */
export function isCurrentMonth(date: Date, referenceDate: Date): boolean {
  return (
    date.getFullYear() === referenceDate.getFullYear() &&
    date.getMonth() === referenceDate.getMonth()
  );
}

/**
 * Check if a date is between two dates (inclusive)
 */
export function isDateInRange(
  date: Date,
  startDate: Date | null | undefined,
  endDate: Date | null | undefined
): boolean {
  if (!startDate || !endDate) return false;
  const time = date.getTime();
  return time >= startDate.getTime() && time <= endDate.getTime();
}

/**
 * Format a date to a string
 */
export function formatDate(date: Date | null | undefined, format: string = 'MMM DD, YYYY'): string {
  if (!date) return '';
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthsFull = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  
  return format
    .replace('YYYY', year.toString())
    .replace('MMM', months[month])
    .replace('MMMM', monthsFull[month])
    .replace('DD', day.toString().padStart(2, '0'))
    .replace('D', day.toString());
}

/**
 * Format a date range to a string
 */
export function formatDateRange(
  startDate: Date | null | undefined,
  endDate: Date | null | undefined,
  format: string = 'MMM DD, YYYY'
): string {
  if (!startDate && !endDate) return '';
  if (!endDate) return formatDate(startDate, format);
  return `${formatDate(startDate, format)} - ${formatDate(endDate, format)}`;
}

/**
 * Check if a date is disabled based on min/max constraints
 */
export function isDateDisabled(
  date: Date,
  minDate?: Date,
  maxDate?: Date
): boolean {
  const time = date.getTime();
  
  if (minDate && time < minDate.getTime()) return true;
  if (maxDate && time > maxDate.getTime()) return true;
  
  return false;
}

/**
 * Add months to a date
 */
export function addMonths(date: Date, months: number): Date {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
}

/**
 * Get month and year string for display
 */
export function getMonthYearString(date: Date): string {
  const monthsFull = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];
  
  return `${monthsFull[date.getMonth()]} ${date.getFullYear()}`;
}

