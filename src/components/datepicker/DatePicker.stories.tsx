import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { DatePicker } from './DatePicker';
import type { DatePickerProps } from './DatePicker.types';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Forms/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A comprehensive date picker component supporting both single date selection and date range selection. Features include min/max date constraints, disabled states, and full dark mode support.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'range'],
      description: 'Selection mode - single date or date range'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the date picker is disabled'
    },
    dateFormat: {
      control: 'text',
      description: 'Date format string (e.g., "MMM DD, YYYY")'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input'
    },
    label: {
      control: 'text',
      description: 'Label text displayed above the input'
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input'
    }
  }
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

/**
 * Default single date picker
 */
export const Default: Story = {
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2022, 0, 20));

    return (
      <div className="w-full max-w-md">
        <DatePicker
          {...args}
          selectedDate={selectedDate || undefined}
          onDateChange={setSelectedDate}
        />
      </div>
    );
  },
  args: {
    mode: 'single',
    placeholder: 'Select a date'
  }
};

/**
 * Date range picker - allows selecting a start and end date
 */
export const DateRange: Story = {
  render: (args) => {
    const [startDate, setStartDate] = useState<Date | null>(new Date(2026, 0, 20));
    const [endDate, setEndDate] = useState<Date | null>(new Date(2026, 1, 9));

    return (
      <div className="w-full max-w-md">
        <DatePicker
          {...args}
          selectedDate={startDate || undefined}
          endDate={endDate || undefined}
          onRangeChange={(start, end) => {
            setStartDate(start);
            setEndDate(end);
          }}
        />
      </div>
    );
  },
  args: {
    mode: 'range',
    placeholder: 'Select date range'
  }
};

/**
 * Date picker with label and helper text
 */
export const WithLabelAndHelper: Story = {
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
      <div className="w-full max-w-md">
        <DatePicker
          {...args}
          selectedDate={selectedDate || undefined}
          onDateChange={setSelectedDate}
        />
      </div>
    );
  },
  args: {
    mode: 'single',
    label: 'Select Date',
    helperText: 'Choose a date for your appointment',
    placeholder: 'MM/DD/YYYY'
  }
};

/**
 * Date picker with minimum and maximum date constraints
 */
export const WithMinMaxDates: Story = {
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2);

    return (
      <div className="w-full max-w-md">
        <DatePicker
          {...args}
          selectedDate={selectedDate || undefined}
          onDateChange={setSelectedDate}
          minDate={today}
          maxDate={maxDate}
        />
      </div>
    );
  },
  args: {
    mode: 'single',
    label: 'Select Future Date',
    helperText: 'You can only select dates within the next 2 months',
    placeholder: 'Select a date'
  }
};

/**
 * Disabled date picker
 */
export const Disabled: Story = {
  render: (args) => {
    const [selectedDate] = useState<Date | null>(new Date(2022, 0, 20));

    return (
      <div className="w-full max-w-md">
        <DatePicker
          {...args}
          selectedDate={selectedDate || undefined}
          onDateChange={() => {}}
        />
      </div>
    );
  },
  args: {
    mode: 'single',
    disabled: true,
    label: 'Disabled Date Picker',
    helperText: 'This date picker is disabled'
  }
};

/**
 * Custom date format
 */
export const CustomFormat: Story = {
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2022, 0, 20));

    return (
      <div className="w-full max-w-md">
        <DatePicker
          {...args}
          selectedDate={selectedDate || undefined}
          onDateChange={setSelectedDate}
        />
      </div>
    );
  },
  args: {
    mode: 'single',
    dateFormat: 'MMMM D, YYYY',
    label: 'Custom Date Format',
    helperText: 'Date displayed as "Month Day, Year"'
  }
};

/**
 * Interactive playground with both themes
 */
export const ThemeComparison: Story = {
  render: () => {
    const [selectedDate1, setSelectedDate1] = useState<Date | null>(new Date(2022, 0, 20));
    const [startDate, setStartDate] = useState<Date | null>(new Date(2026, 0, 20));
    const [endDate, setEndDate] = useState<Date | null>(new Date(2026, 1, 9));

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 w-full">
        {/* Light Theme */}
        <div className="flex flex-col gap-6">
          <h3 className="text-heading-sm font-bold text-text-primary">Light Theme</h3>
          <DatePicker
            mode="single"
            selectedDate={selectedDate1 || undefined}
            onDateChange={setSelectedDate1}
            label="Single Date"
          />
          <DatePicker
            mode="range"
            selectedDate={startDate || undefined}
            endDate={endDate || undefined}
            onRangeChange={(start, end) => {
              setStartDate(start);
              setEndDate(end);
            }}
            label="Date Range"
          />
        </div>

        {/* Dark Theme */}
        <div data-theme="dark" className="flex flex-col gap-6 bg-background p-6 rounded-md">
          <h3 className="text-heading-sm font-bold text-text-primary">Dark Theme</h3>
          <DatePicker
            mode="single"
            selectedDate={selectedDate1 || undefined}
            onDateChange={setSelectedDate1}
            label="Single Date"
          />
          <DatePicker
            mode="range"
            selectedDate={startDate || undefined}
            endDate={endDate || undefined}
            onRangeChange={(start, end) => {
              setStartDate(start);
              setEndDate(end);
            }}
            label="Date Range"
          />
        </div>
      </div>
    );
  }
};

/**
 * Mobile responsive view
 */
export const MobileView: Story = {
  render: (args) => {
    const [startDate, setStartDate] = useState<Date | null>(new Date(2026, 0, 20));
    const [endDate, setEndDate] = useState<Date | null>(new Date(2026, 1, 9));

    return (
      <div className="w-full max-w-[375px]">
        <DatePicker
          {...args}
          selectedDate={startDate || undefined}
          endDate={endDate || undefined}
          onRangeChange={(start, end) => {
            setStartDate(start);
            setEndDate(end);
          }}
        />
      </div>
    );
  },
  args: {
    mode: 'range',
    label: 'Mobile Date Range',
    helperText: 'Calendars stack vertically on mobile'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

