# DatePicker Component

A fully-featured date picker component supporting both single date selection and date range selection. Built with React, TypeScript, and Tailwind CSS, following the Bitcoin.com design system.

## Features

- ✅ **Single Date Selection** - Pick a single date
- ✅ **Date Range Selection** - Select a start and end date
- ✅ **Min/Max Date Constraints** - Restrict selectable dates
- ✅ **Dark Mode Support** - Fully themed for light and dark modes
- ✅ **Responsive Design** - Mobile-friendly with stacked calendars on small screens
- ✅ **Keyboard Accessible** - Full keyboard navigation support
- ✅ **TypeScript** - Fully typed with comprehensive type definitions
- ✅ **Custom Date Formats** - Flexible date display formatting
- ✅ **Disabled State** - Support for disabled date pickers
- ✅ **Label & Helper Text** - Optional label and helper text

## Usage

### Basic Single Date Picker

```tsx
import { DatePicker } from '@/components/datepicker';
import { useState } from 'react';

function MyComponent() {
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

### Date Range Picker

```tsx
import { DatePicker } from '@/components/datepicker';
import { useState } from 'react';

function MyComponent() {
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

### With Label and Helper Text

```tsx
<DatePicker
  mode="single"
  selectedDate={selectedDate || undefined}
  onDateChange={setSelectedDate}
  label="Appointment Date"
  helperText="Select your preferred appointment date"
  placeholder="MM/DD/YYYY"
/>
```

### With Min/Max Date Constraints

```tsx
const today = new Date();
const maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 2);

<DatePicker
  mode="single"
  selectedDate={selectedDate || undefined}
  onDateChange={setSelectedDate}
  minDate={today}
  maxDate={maxDate}
  label="Select Future Date"
  helperText="You can only select dates within the next 2 months"
/>
```

### Custom Date Format

```tsx
<DatePicker
  mode="single"
  selectedDate={selectedDate || undefined}
  onDateChange={setSelectedDate}
  dateFormat="MMMM D, YYYY" // e.g., "January 20, 2022"
/>
```

## Props

### DatePickerProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'single' \| 'range'` | `'single'` | Selection mode - single date or date range |
| `selectedDate` | `Date \| undefined` | - | The selected date (single mode) or start date (range mode) |
| `endDate` | `Date \| undefined` | - | The end date (range mode only) |
| `onDateChange` | `(date: Date \| null) => void` | - | Callback fired when a date is selected (single mode) |
| `onRangeChange` | `(startDate: Date \| null, endDate: Date \| null) => void` | - | Callback fired when a date range is selected (range mode) |
| `minDate` | `Date \| undefined` | - | Minimum selectable date |
| `maxDate` | `Date \| undefined` | - | Maximum selectable date |
| `disabled` | `boolean` | `false` | Whether the date picker is disabled |
| `placeholder` | `string` | - | Placeholder text for the input |
| `className` | `string` | - | Custom className for the container |
| `label` | `string` | - | Label text displayed above the input |
| `helperText` | `string` | - | Helper text displayed below the input |
| `dateFormat` | `string` | `'MMM DD, YYYY'` | Format string for displaying dates |

## Date Format Tokens

The `dateFormat` prop accepts the following tokens:

- `YYYY` - 4-digit year (e.g., 2022)
- `MMMM` - Full month name (e.g., January)
- `MMM` - Abbreviated month name (e.g., Jan)
- `DD` - 2-digit day with leading zero (e.g., 01, 20)
- `D` - Day without leading zero (e.g., 1, 20)

Examples:
- `'MMM DD, YYYY'` → "Jan 20, 2022"
- `'MMMM D, YYYY'` → "January 20, 2022"
- `'DD/MM/YYYY'` → "20/01/2022"

## Responsive Behavior

The DatePicker component is fully responsive:

- **Desktop**: Date range picker shows two calendars side by side
- **Mobile/Tablet**: Date range picker stacks calendars vertically
- **Breakpoint**: Uses Tailwind's `sm:` breakpoint (640px)

## Dark Mode

The component automatically adapts to dark mode when the `data-theme="dark"` attribute is present on a parent element:

```tsx
<div data-theme="dark">
  <DatePicker mode="single" {...props} />
</div>
```

## Keyboard Navigation

- **Tab**: Navigate between interactive elements
- **Enter/Space**: Open/close calendar, select date
- **Arrow Keys**: Navigate between dates in calendar
- **Escape**: Close calendar (when implemented)

## Accessibility

- Semantic HTML with proper ARIA attributes
- `aria-selected` on selected dates
- `aria-disabled` on disabled dates
- `aria-label` on navigation buttons
- Keyboard navigation support
- Focus management

## Design Tokens

The component uses the following design tokens from the Bitcoin.com design system:

### Colors
- `field-background` - Input background
- `field-border` - Input border
- `field-border-active` - Active input border
- `text-primary` - Primary text color
- `text-secondary` - Secondary text color (weekday labels, outside month dates)
- `icon` - Icon color
- `secondary-100` - Selected date background (#ff9500)
- `warning-10` - Range highlight background (#faf2e8)

### Spacing
- `xs` - Extra small spacing (4px)
- `s` - Small spacing (8px)
- `m` - Medium spacing (16px)
- `l` - Large spacing (24px)

### Typography
- `text-label` - Label text (14px, medium)
- `text-label-sm` - Small label text (12px, medium)
- `font-['Elza_Narrow']` - Month/year header font (uppercase)

### Border Radius
- `rounded-s` - Small border radius (8px)
- `rounded-xs` - Extra small border radius (4px)

## Component Architecture

```
datepicker/
├── DatePicker.tsx          # Main component
├── DatePicker.types.ts     # TypeScript type definitions
├── DatePicker.utils.ts     # Utility functions (date calculations, formatting)
├── DatePicker.stories.tsx  # Storybook stories
├── index.ts                # Barrel export
└── README.md               # This file
```

### Sub-components

1. **DatePicker** - Main wrapper component handling state and dropdown
2. **Calendar** - Individual month view with navigation
3. **DateCell** - Single date cell with selection states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Related Components

- [Input](../input) - Base input component
- [Dropdown](../dropdown) - Dropdown component pattern
- [Button](../button) - Button component used for navigation

## Examples in Storybook

View the component in Storybook:

```bash
npm run storybook
```

Navigate to: **Components > DatePicker**

## Contributing

When making changes to this component:

1. Update types in `DatePicker.types.ts`
2. Add utility functions to `DatePicker.utils.ts`
3. Update stories in `DatePicker.stories.tsx`
4. Test in both light and dark modes
5. Test on mobile breakpoints
6. Update this README with new features

## Design Reference

[Figma Design File](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18010-1177)

