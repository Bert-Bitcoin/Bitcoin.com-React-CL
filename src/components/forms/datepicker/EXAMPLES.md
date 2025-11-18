# DatePicker Component - Usage Examples

## Quick Start

```tsx
import { DatePicker } from '@/components/datepicker';
```

---

## Example 1: Simple Single Date Picker

The most basic usage for selecting a single date.

```tsx
import { DatePicker } from '@/components/datepicker';
import { useState } from 'react';

export function SimpleDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <DatePicker
      mode="single"
      selectedDate={selectedDate || undefined}
      onDateChange={setSelectedDate}
      placeholder="Select a date"
    />
  );
}
```

**Result**: A date picker that lets users select a single date. Displays "Select a date" when empty.

---

## Example 2: Date Range Picker

Select a start and end date with visual range highlighting.

```tsx
import { DatePicker } from '@/components/datepicker';
import { useState } from 'react';

export function DateRangePicker() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <DatePicker
      mode="range"
      selectedDate={startDate || undefined}
      endDate={endDate || undefined}
      onRangeChange={(start, end) => {
        setStartDate(start);
        setEndDate(end);
      }}
      placeholder="Select date range"
    />
  );
}
```

**Result**: Shows two calendars side-by-side (desktop) or stacked (mobile). Users can select a date range with visual feedback.

---

## Example 3: With Label and Helper Text

Add context with labels and helper text.

```tsx
import { DatePicker } from '@/components/datepicker';
import { useState } from 'react';

export function LabeledDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <DatePicker
      mode="single"
      selectedDate={selectedDate || undefined}
      onDateChange={setSelectedDate}
      label="Appointment Date"
      helperText="Select your preferred appointment date"
      placeholder="MM/DD/YYYY"
    />
  );
}
```

**Result**: Shows "Appointment Date" above the input and helper text below.

---

## Example 4: Future Dates Only

Restrict selection to dates from today onwards.

```tsx
import { DatePicker } from '@/components/datepicker';
import { useState } from 'react';

export function FutureDatesOnly() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const today = new Date();

  return (
    <DatePicker
      mode="single"
      selectedDate={selectedDate || undefined}
      onDateChange={setSelectedDate}
      minDate={today}
      label="Future Date"
      helperText="You can only select dates from today onwards"
    />
  );
}
```

**Result**: Past dates are disabled (grayed out and non-clickable).

---

## Example 5: Date Range with Constraints

Allow only dates within the next 3 months.

```tsx
import { DatePicker } from '@/components/datepicker';
import { useState } from 'react';

export function ConstrainedDateRange() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  
  const today = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  return (
    <DatePicker
      mode="range"
      selectedDate={startDate || undefined}
      endDate={endDate || undefined}
      onRangeChange={(start, end) => {
        setStartDate(start);
        setEndDate(end);
      }}
      minDate={today}
      maxDate={maxDate}
      label="Vacation Dates"
      helperText="Select dates within the next 3 months"
    />
  );
}
```

**Result**: Only dates between today and 3 months from now are selectable.

---

## Example 6: Booking Form Integration

Complete booking form with date range selection.

```tsx
import { DatePicker } from '@/components/datepicker';
import { Button } from '@/components/button';
import { useState } from 'react';

export function BookingForm() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const handleSubmit = () => {
    if (checkIn && checkOut) {
      console.log('Booking:', { checkIn, checkOut });
      // Submit booking...
    }
  };

  const today = new Date();

  return (
    <form className="flex flex-col gap-4 max-w-md">
      <h2 className="text-heading-lg font-bold">Book Your Stay</h2>
      
      <DatePicker
        mode="range"
        selectedDate={checkIn || undefined}
        endDate={checkOut || undefined}
        onRangeChange={(start, end) => {
          setCheckIn(start);
          setCheckOut(end);
        }}
        minDate={today}
        label="Check-in / Check-out"
        helperText="Select your stay dates"
      />

      <Button
        variant="primary"
        size="lg"
        fullWidth
        disabled={!checkIn || !checkOut}
        onClick={handleSubmit}
      >
        Book Now
      </Button>
    </form>
  );
}
```

**Result**: A complete booking form with date range selection and submit button.

---

## Example 7: Custom Date Format

Display dates in different formats.

```tsx
import { DatePicker } from '@/components/datepicker';
import { useState } from 'react';

export function CustomFormatPicker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date(2022, 0, 20) // Jan 20, 2022
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Default format */}
      <DatePicker
        mode="single"
        selectedDate={selectedDate || undefined}
        onDateChange={setSelectedDate}
        dateFormat="MMM DD, YYYY"
        label="Default Format (MMM DD, YYYY)"
      />

      {/* Full month format */}
      <DatePicker
        mode="single"
        selectedDate={selectedDate || undefined}
        onDateChange={setSelectedDate}
        dateFormat="MMMM D, YYYY"
        label="Full Month (MMMM D, YYYY)"
      />

      {/* Numeric format */}
      <DatePicker
        mode="single"
        selectedDate={selectedDate || undefined}
        onDateChange={setSelectedDate}
        dateFormat="DD/MM/YYYY"
        label="Numeric (DD/MM/YYYY)"
      />
    </div>
  );
}
```

**Results**:
- Default: "Jan 20, 2022"
- Full: "January 20, 2022"
- Numeric: "20/01/2022"

---

## Example 8: Dark Mode

Automatic dark mode support.

```tsx
import { DatePicker } from '@/components/datepicker';
import { useState } from 'react';

export function DarkModeDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div data-theme="dark" className="p-6 bg-background rounded-lg">
      <DatePicker
        mode="single"
        selectedDate={selectedDate || undefined}
        onDateChange={setSelectedDate}
        label="Select Date (Dark Mode)"
        helperText="This date picker adapts to dark mode automatically"
      />
    </div>
  );
}
```

**Result**: The date picker automatically uses dark theme colors when wrapped in a dark theme container.

---

## Example 9: Controlled vs Uncontrolled

The DatePicker is a controlled component - you must manage the state.

### ✅ Correct (Controlled)

```tsx
export function ControlledDatePicker() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <DatePicker
      mode="single"
      selectedDate={date || undefined}
      onDateChange={setDate}
    />
  );
}
```

### ❌ Incorrect (Missing State)

```tsx
// This won't work - no state management
export function BrokenDatePicker() {
  return (
    <DatePicker
      mode="single"
      onDateChange={(date) => console.log(date)}
    />
  );
}
```

---

## Example 10: Birthday Picker

Select a date of birth with constraints.

```tsx
import { DatePicker } from '@/components/datepicker';
import { useState } from 'react';

export function BirthdayPicker() {
  const [birthday, setBirthday] = useState<Date | null>(null);

  const today = new Date();
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 120); // 120 years ago
  
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18); // 18 years ago (adult)

  return (
    <DatePicker
      mode="single"
      selectedDate={birthday || undefined}
      onDateChange={setBirthday}
      minDate={minDate}
      maxDate={maxDate}
      label="Date of Birth"
      helperText="You must be at least 18 years old"
      placeholder="MM/DD/YYYY"
    />
  );
}
```

**Result**: Only allows dates from 120 years ago to 18 years ago.

---

## Example 11: Disabled State

Show a date picker in a disabled/read-only state.

```tsx
import { DatePicker } from '@/components/datepicker';

export function DisabledDatePicker() {
  const lockedDate = new Date(2022, 0, 20);

  return (
    <DatePicker
      mode="single"
      selectedDate={lockedDate}
      onDateChange={() => {}}
      disabled
      label="Confirmed Appointment"
      helperText="This date is locked and cannot be changed"
    />
  );
}
```

**Result**: The date picker appears disabled with reduced opacity and is not interactive.

---

## Example 12: Form Validation

Integrate with form validation.

```tsx
import { DatePicker } from '@/components/datepicker';
import { Button } from '@/components/button';
import { useState } from 'react';

export function ValidatedDateForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate) {
      setError('Please select a date');
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      setError('Date must be in the future');
      return;
    }

    setError('');
    console.log('Valid date:', selectedDate);
    // Submit form...
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <DatePicker
        mode="single"
        selectedDate={selectedDate || undefined}
        onDateChange={(date) => {
          setSelectedDate(date);
          setError(''); // Clear error on change
        }}
        label="Event Date"
        helperText={error || 'Select a future date for your event'}
      />

      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
}
```

**Result**: Shows validation errors and prevents form submission until a valid date is selected.

---

## Common Patterns

### Get Selected Date as String

```tsx
const [selectedDate, setSelectedDate] = useState<Date | null>(null);

// Format for display
const displayDate = selectedDate 
  ? selectedDate.toLocaleDateString()
  : 'No date selected';

// Format for API (ISO string)
const apiDate = selectedDate?.toISOString();
```

### Calculate Days Between Dates

```tsx
const [startDate, setStartDate] = useState<Date | null>(null);
const [endDate, setEndDate] = useState<Date | null>(null);

const daysBetween = startDate && endDate
  ? Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  : 0;
```

### Preset Common Ranges

```tsx
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const nextWeek = new Date(today);
nextWeek.setDate(nextWeek.getDate() + 7);

// Preset buttons
<div className="flex gap-2 mb-4">
  <Button onClick={() => setSelectedDate(tomorrow)}>
    Tomorrow
  </Button>
  <Button onClick={() => setSelectedDate(nextWeek)}>
    Next Week
  </Button>
</div>
```

---

## Tips & Best Practices

### 1. Always Provide Feedback

```tsx
// ✅ Good - Shows selected value or placeholder
<DatePicker
  selectedDate={date || undefined}
  placeholder="Select a date"
/>

// ❌ Bad - No placeholder
<DatePicker selectedDate={date || undefined} />
```

### 2. Use Appropriate Labels

```tsx
// ✅ Good - Clear labels
<DatePicker
  label="Departure Date"
  helperText="When do you want to leave?"
/>
```

### 3. Set Realistic Constraints

```tsx
// ✅ Good - Prevents impossible selections
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

<DatePicker minDate={tomorrow} />
```

### 4. Handle Loading States

```tsx
const [isLoading, setIsLoading] = useState(false);

<DatePicker
  disabled={isLoading}
  label="Select Date"
  helperText={isLoading ? 'Loading...' : 'Choose your date'}
/>
```

### 5. Responsive Design

```tsx
// Component is responsive by default
// On mobile (<640px), range calendars stack vertically
<DatePicker mode="range" {...props} />
```

---

## TypeScript Types

### Component Props

```typescript
interface DatePickerProps {
  mode?: 'single' | 'range';
  selectedDate?: Date;
  endDate?: Date;
  onDateChange?: (date: Date | null) => void;
  onRangeChange?: (startDate: Date | null, endDate: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  label?: string;
  helperText?: string;
  dateFormat?: string;
}
```

### Usage with TypeScript

```typescript
import type { DatePickerMode } from '@/components/datepicker';

interface FormData {
  date: Date | null;
  mode: DatePickerMode;
}

const [formData, setFormData] = useState<FormData>({
  date: null,
  mode: 'single'
});
```

---

## Questions?

For more details, see:
- [README.md](./README.md) - Full documentation
- [DatePicker.stories.tsx](./DatePicker.stories.tsx) - Interactive examples
- [DatePicker.types.ts](./DatePicker.types.ts) - Type definitions

Run Storybook to see live examples:
```bash
npm run storybook
```

Navigate to: **Form Elements > DatePicker**

