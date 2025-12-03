# Table Component

A flexible data table component for displaying tabular data, based on the Bitcoin.com design system.

## Features

- ✅ Customizable columns with different types (text, numeric, custom)
- ✅ Support for column alignment (left, center, right)
- ✅ Fixed or flexible column widths
- ✅ Numeric value styling with IBM Plex Sans font
- ✅ Row click handlers
- ✅ Custom cell renderers
- ✅ Light dividers between rows
- ✅ Bordered variant with rounded corners
- ✅ **Sortable columns** with visual indicators
- ✅ **Built-in pagination** with results display
- ✅ **Responsive stacked layout** based on container width (uses container queries)
- ✅ TypeScript support
- ✅ Design system aligned

## Usage

```tsx
import { Table } from '@bitcoin-com/react-component-library';
import type { TableColumn } from '@bitcoin-com/react-component-library';

interface Employee {
  id: number;
  name: string;
  title: string;
  salary: string;
}

const columns: TableColumn<Employee>[] = [
  {
    id: 'name',
    label: 'Full name',
    accessor: 'name'
  },
  {
    id: 'title',
    label: 'Title',
    accessor: 'title'
  },
  {
    id: 'salary',
    label: 'Salary',
    accessor: 'salary',
    type: 'numeric'
  }
];

const data: Employee[] = [
  { id: 1, name: 'John Doe', title: 'Developer', salary: '80,000 USD' },
  { id: 2, name: 'Jane Smith', title: 'Designer', salary: '75,000 USD' }
];

function MyComponent() {
  return (
    <Table 
      columns={columns}
      data={data}
      getRowKey={(row) => row.id}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `TableColumn<T>[]` | required | Array of column definitions |
| `data` | `T[]` | required | Array of data rows |
| `variant` | `'default' \| 'bordered'` | `'default'` | Table variant - bordered adds border and rounded corners |
| `getRowKey` | `(row: T, index: number) => string \| number` | `(_, index) => index` | Function to get unique key for each row |
| `className` | `string` | - | Optional CSS class name |
| `onRowClick` | `(row: T, index: number) => void` | - | Callback when a row is clicked |
| `enableSorting` | `boolean` | `true` | Enable/disable sorting functionality at table level |
| `sortState` | `SortState \| null` | - | Current sort state (columnId and direction) |
| `onSort` | `(columnId: string, direction: 'asc' \| 'desc') => void` | - | Callback when sort is requested |
| `pagination` | `TablePaginationConfig` | - | Optional pagination configuration |
| `responsive` | `boolean` | `true` | Enable responsive stacked layout based on container width |
| `responsiveBreakpoint` | `'auto' \| number` | `'auto'` | Breakpoint for stacking. `'auto'` calculates based on column count, or provide pixels |

## TableColumn

```tsx
interface TableColumn<T> {
  id: string;
  label: string;
  accessor: keyof T | ((row: T) => ReactNode);
  type?: 'text' | 'numeric' | 'custom';
  align?: 'left' | 'center' | 'right';
  width?: string;
  sortable?: boolean;
  sortKey?: keyof T; // Required if accessor is a function and sortable is true
}

interface SortState {
  columnId: string;
  direction: 'asc' | 'desc';
}
```

### Column Properties

- **id**: Unique identifier for the column
- **label**: Column header text (displayed in uppercase)
- **accessor**: Key name for simple data access, or function for custom rendering
- **type**: Column type affecting styling
  - `'text'` (default) - Regular text with Satoshi Variable Medium
  - `'numeric'` - Numeric data with IBM Plex Sans SemiBold
  - `'custom'` - Same as text, use with custom render function
- **align**: Column alignment (`'left'`, `'center'`, `'right'`)
- **width**: Fixed column width (e.g., `'80px'`, `'200px'`). Omit for flexible width.
- **sortable**: Enable sorting for this column (default: `false`)
- **sortKey**: Key to use for sorting when accessor is a function. Required if `sortable` is `true` and `accessor` is a function.

## Examples

### Basic Table

```tsx
const columns: TableColumn<User>[] = [
  { id: 'name', label: 'Name', accessor: 'name' },
  { id: 'email', label: 'Email', accessor: 'email' }
];

<Table columns={columns} data={users} />
```

### Numeric Columns

```tsx
const columns: TableColumn<Transaction>[] = [
  { id: 'description', label: 'Description', accessor: 'description' },
  { 
    id: 'amount', 
    label: 'Amount', 
    accessor: 'amount',
    type: 'numeric',
    align: 'right'
  }
];
```

### Custom Cell Renderer

```tsx
const columns: TableColumn<Employee>[] = [
  { id: 'name', label: 'Name', accessor: 'name' },
  {
    id: 'actions',
    label: '',
    accessor: (row) => (
      <button onClick={() => handleEdit(row)}>Edit</button>
    ),
    width: '80px',
    align: 'right'
  }
];
```

### Action Column with Button

```tsx
const columns: TableColumn<Employee>[] = [
  { id: 'name', label: 'Name', accessor: 'name' },
  {
    id: 'actions',
    label: '',
    accessor: () => (
      <button className="px-m py-s rounded-2xl text-primary-100">
        Edit
      </button>
    ),
    width: '80px'
  }
];
```

### Clickable Rows

```tsx
<Table 
  columns={columns}
  data={data}
  onRowClick={(row) => console.log('Clicked:', row)}
/>
```

### Bordered Variant

```tsx
<Table 
  columns={columns}
  data={data}
  variant="bordered"
/>
```

### Sortable Columns

```tsx
import { useState } from 'react';

const columns: TableColumn<Employee>[] = [
  {
    id: 'name',
    label: 'Name',
    accessor: 'name',
    sortable: true // Enable sorting
  },
  {
    id: 'salary',
    label: 'Salary',
    accessor: 'salary',
    type: 'numeric',
    sortable: true
  }
];

function SortableTable() {
  const [sortState, setSortState] = useState<SortState | null>(null);
  const [sortedData, setSortedData] = useState(data);

  const handleSort = (columnId: string, direction: 'asc' | 'desc') => {
    setSortState({ columnId, direction });

    const sorted = [...data].sort((a, b) => {
      const aValue = a[columnId];
      const bValue = b[columnId];
      
      if (aValue < bValue) return direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setSortedData(sorted);
  };

  return (
    <Table
      columns={columns}
      data={sortedData}
      sortState={sortState}
      onSort={handleSort}
    />
  );
}
```

### Fixed Column Widths

```tsx
const columns: TableColumn<Data>[] = [
  { id: 'id', label: 'ID', accessor: 'id', width: '100px' },
  { id: 'name', label: 'Name', accessor: 'name' }, // Flexible
  { id: 'status', label: 'Status', accessor: 'status', width: '120px' }
];
```

## Variants

### Default
Standard table without border.

### Bordered
Table with border and rounded corners:
- Border: Off-white (#f9f9fb)
- Border radius: 8px (s)
- Overflow: clipped to maintain rounded corners

## Design System Integration

This component follows the Bitcoin.com design system:

**Header**:
- Font: Satoshi Variable Bold 12px uppercase
- Color: Dark (#504e55)
- Padding: 8px vertical, 16px horizontal

**Data Cells**:
- Font: Satoshi Variable Medium 14px (text)
- Font: IBM Plex Sans SemiBold 14px (numeric)
- Color: Black (#000000) for first column, Dark (#504e55) for others
- Padding: 8px vertical, 16px horizontal

**Layout**:
- Column gap: 24px (l)
- Row dividers: Extra light (#f0f0f5)
- Background: White (#ffffff)

## Column Types

### Text Column
Default type for text data. Uses Satoshi Variable Medium font.

```tsx
{ id: 'name', label: 'Name', accessor: 'name' }
```

### Numeric Column
For numbers, prices, percentages. Uses IBM Plex Sans SemiBold font.

```tsx
{ id: 'salary', label: 'Salary', accessor: 'salary', type: 'numeric' }
```

### Custom Column
For custom renderers like buttons, badges, or formatted content.

```tsx
{ 
  id: 'status', 
  label: 'Status', 
  accessor: (row) => <Badge>{row.status}</Badge>
}
```

## Alignment

Control column alignment with the `align` property:

```tsx
// Left aligned (default)
{ id: 'name', label: 'Name', accessor: 'name', align: 'left' }

// Center aligned
{ id: 'status', label: 'Status', accessor: 'status', align: 'center' }

// Right aligned (common for numbers)
{ id: 'amount', label: 'Amount', accessor: 'amount', align: 'right' }
```

## Sorting

### How It Works

1. Mark columns as `sortable: true`
2. Provide `sortState` to track current sort
3. Implement `onSort` callback to handle sorting logic
4. Update your data array based on sort parameters

### Visual Indicators

- **Inactive sortable columns**: Show arrow on hover
- **Active sorted column**: Shows up/down arrow based on direction
- **Clickable headers**: Cursor changes to pointer
- **Hover effect**: Text color changes to darker shade

### Features

- Click header to sort ascending
- Click again to toggle to descending
- Automatic visual feedback
- Supports both text and numeric sorting
- Works with custom render functions (use `sortKey` property)
- Can be disabled at table level with `enableSorting={false}`

### Disabling Sorting

Even if columns are marked as `sortable: true`, you can disable sorting for the entire table:

```tsx
<Table
  columns={columns}  // Some columns have sortable: true
  data={data}
  enableSorting={false}  // ✅ Disables all sorting
/>
```

## Pagination

The Table component includes optional built-in pagination support, displaying results information and page controls at the bottom of the table.

### Features

- ✅ Shows "Showing X to Y of Z results" text
- ✅ Integrates with existing Pagination component
- ✅ Matches Figma design specification
- ✅ Works with both default and bordered variants
- ✅ Compatible with sorting functionality
- ✅ Responsive small size for compact display

### Usage

```tsx
import { useState } from 'react';
import { Table, TablePaginationConfig } from '@bitcoin-com/react-component-library';

function PaginatedTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalResults = data.length;
  const totalPages = Math.ceil(totalResults / pageSize);
  
  // Calculate data for current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <Table
      columns={columns}
      data={currentData}
      pagination={{
        currentPage,
        totalPages,
        totalResults,
        pageSize,
        onPageChange: setCurrentPage
      }}
    />
  );
}
```

### Pagination Config

```tsx
interface TablePaginationConfig {
  currentPage: number;      // Current page (1-indexed)
  totalPages: number;        // Total number of pages
  totalResults: number;      // Total number of results
  pageSize: number;          // Number of items per page
  onPageChange: (page: number) => void;  // Callback when page changes
}
```

### With Sorting

Pagination works seamlessly with sorting. Remember to reset the page when sorting changes:

```tsx
function SortableAndPaginatedTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortState, setSortState] = useState<SortState | null>(null);
  const pageSize = 10;
  
  // Sort data first
  let sortedData = [...data];
  if (sortState) {
    sortedData.sort((a, b) => {
      const aVal = a[sortState.columnId];
      const bVal = b[sortState.columnId];
      const comparison = String(aVal).localeCompare(String(bVal));
      return sortState.direction === 'asc' ? comparison : -comparison;
    });
  }
  
  // Then paginate
  const totalResults = sortedData.length;
  const totalPages = Math.ceil(totalResults / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = sortedData.slice(startIndex, startIndex + pageSize);

  const handleSort = (columnId: string, direction: 'asc' | 'desc') => {
    setSortState({ columnId, direction });
    setCurrentPage(1); // Reset to first page on sort
  };

  return (
    <Table
      columns={columns}
      data={currentData}
      sortState={sortState}
      onSort={handleSort}
      pagination={{
        currentPage,
        totalPages,
        totalResults,
        pageSize,
        onPageChange: setCurrentPage
      }}
    />
  );
}
```

### Design

The pagination footer follows the Figma design:
- **Font**: Satoshi Variable Medium 12px for results text
- **Color**: Semi-dark (#67666b) for results text
- **Spacing**: 8px top padding, 16px bottom padding, 16px horizontal padding
- **Layout**: Results text on left, pagination controls on right
- **Size**: Small pagination size (24px buttons) for compact display
- **Divider**: Light divider (#f0f0f5) separates pagination from table rows

## Responsive Layout

The Table component automatically adapts to narrow containers using **CSS Container Queries**, providing an optimal viewing experience regardless of screen size.

### Features

- ✅ **Container-based**: Uses container queries instead of media queries
- ✅ **Smart breakpoints**: Automatically calculates breakpoint based on column count
- ✅ **Stacked cards**: Each row becomes a vertical card with label-value pairs
- ✅ **Label visibility**: Column labels appear next to each value for context
- ✅ **Better readability**: Optimized layout for narrow containers
- ✅ **Configurable**: Can be disabled with `responsive={false}` or set custom breakpoints
- ✅ **Works with all features**: Compatible with sorting, pagination, and all variants
- ✅ **Works in sidebars**: Perfect for tables in narrow sidebars or panels

### Auto Breakpoint Calculation

By default (`responsiveBreakpoint="auto"`), the table automatically calculates the optimal breakpoint based on the number of columns:

**Formula**: `100px (base) + (columnCount × 140px)`

**Examples**:
- **2 columns**: ~380px breakpoint
- **3 columns**: ~520px breakpoint
- **4 columns**: ~660px breakpoint
- **5 columns**: ~800px breakpoint
- **6 columns**: ~940px breakpoint
- **7+ columns**: Capped at 1024px

This ensures that tables with more columns switch to stacked layout earlier, while tables with fewer columns can remain in traditional layout at narrower widths.

### How It Works

**Container queries** respond to the table's container width, not the viewport width. This means:
- A table in a narrow sidebar will stack even on a wide screen
- A full-width table on a mobile device will stack when narrow
- Multiple tables on the same page can have different layouts based on their container
- Each table instance calculates its own optimal breakpoint

When container is **narrower than breakpoint**:
- Traditional table header is hidden
- Each row displays as a stacked card
- Column labels appear next to their values
- All values are right-aligned for consistency

When container is **wider than breakpoint**:
- Traditional table layout is displayed
- Normal column headers and rows
- Standard horizontal layout

### Usage

```tsx
// Default - auto breakpoint based on column count (recommended)
<Table
  columns={columns}  // e.g., 4 columns
  data={data}
  responsive={true}
  responsiveBreakpoint="auto"  // ✅ Calculates ~660px for 4 columns
/>

// Fixed breakpoint - override auto calculation
<Table
  columns={columns}
  data={data}
  responsive={true}
  responsiveBreakpoint={500}  // ✅ Always stacks below 500px
/>

// Disable responsive layout
<Table
  columns={columns}
  data={data}
  responsive={false}  // ✅ Always shows traditional layout
/>
```

### When to Use Auto vs Fixed Breakpoint

**Use `responsiveBreakpoint="auto"` (default)** when:
- ✅ You want optimal breakpoints for any column count
- ✅ The number of columns might change dynamically
- ✅ You're building reusable components
- ✅ You want consistent behavior across different tables

**Use a fixed number (e.g., `responsiveBreakpoint={600}`)** when:
- ✅ You have specific design requirements
- ✅ You want all tables to stack at the same width
- ✅ You're matching a specific container size
- ✅ You need precise control over the breakpoint

### Example: Crypto Portfolio with Auto Breakpoint

```tsx
const cryptoColumns: TableColumn<CryptoAsset>[] = [
  { id: 'name', label: 'Asset', accessor: 'name' },
  { id: 'symbol', label: 'Symbol', accessor: 'symbol' },
  { 
    id: 'balance', 
    label: 'Balance', 
    accessor: 'balance',
    type: 'numeric',
    align: 'right'
  },
  { 
    id: 'value', 
    label: 'USD Value', 
    accessor: 'value',
    type: 'numeric',
    align: 'right'
  }
];

// With 4 columns, auto breakpoint = ~660px
// Container > 660px: Shows as traditional table
// Container < 660px: Each row shows:
//   ASSET          Bitcoin
//   SYMBOL         BTC
//   BALANCE        0.125
//   USD VALUE      $5,234.50

<Table
  columns={cryptoColumns}
  data={cryptoData}
  variant="bordered"
  responsive={true}
  responsiveBreakpoint="auto"  // Calculates ~660px for 4 columns
/>
```

### Example: Simple 2-Column Table

```tsx
// With only 2 columns, auto breakpoint = ~380px
// This table can remain in traditional layout at much narrower widths!

const columns: TableColumn<Data>[] = [
  { id: 'label', label: 'Item', accessor: 'label' },
  { id: 'value', label: 'Value', accessor: 'value', type: 'numeric', align: 'right' }
];

<Table
  columns={columns}
  data={data}
  responsive={true}
  responsiveBreakpoint="auto"  // Only ~380px - stays traditional longer
/>
```

### Example: Wide Table with Many Columns

```tsx
// With 6 columns, auto breakpoint = ~940px
// This table switches to stacked layout earlier to ensure readability

const columns: TableColumn<Employee>[] = [
  { id: 'id', label: 'ID', accessor: 'id' },
  { id: 'name', label: 'Name', accessor: 'name' },
  { id: 'email', label: 'Email', accessor: 'email' },
  { id: 'title', label: 'Title', accessor: 'title' },
  { id: 'department', label: 'Department', accessor: 'department' },
  { id: 'salary', label: 'Salary', accessor: 'salary', type: 'numeric' }
];

<Table
  columns={columns}
  data={employees}
  responsive={true}
  responsiveBreakpoint="auto"  // Calculates ~940px for 6 columns
/>
```

### Design Specifications

**Stacked Layout (Container < 768px)**:
- **Row gap**: Extra small (xs) spacing between label-value pairs
- **Row padding**: Standard 16px (m) horizontal, 8px (s) vertical
- **Label styling**: Satoshi Variable Bold 12px uppercase, Dark color
- **Value styling**: Matches column type (text/numeric), Black color
- **Layout**: Labels on left, values on right, space-between
- **Dividers**: Light dividers (#f0f0f5) between row cards

**Table Layout (Container ≥ 768px)**:
- Standard table layout as described in other sections
- Visible column headers
- Horizontal row layout

### When to Disable Responsive

Consider disabling the responsive layout (`responsive={false}`) when:
- You have very few columns (2-3) that fit well in narrow containers
- Your table has horizontal scrolling implemented separately
- You're embedding the table in a container that will always be wide
- You need consistent layout for screenshots or exports

### Testing Responsive Behavior

To test the responsive layout:
1. **Resize the container**: Change the width of the table's parent container
2. **Use Storybook**: View the `NarrowContainer` story to see stacked layout
3. **Test in sidebars**: Place table in a narrow sidebar to verify automatic stacking
4. **Set container width**: Use a container < 768px wide to see stacked layout

### Browser Support

Container queries are supported in:
- Chrome/Edge 105+
- Safari 16+
- Firefox 110+

For older browsers, the table will display in traditional layout mode.

## Storybook

View examples in Storybook under `Components/Content/Table`

## TypeScript

The Table component is fully typed with generics:

```tsx
// Define your data type
interface Employee {
  id: number;
  name: string;
  title: string;
}

// TypeScript will infer and check column accessors
const columns: TableColumn<Employee>[] = [
  { id: 'name', label: 'Name', accessor: 'name' }, // ✓ Valid
  { id: 'invalid', label: 'Invalid', accessor: 'invalid' } // ✗ Type error
];

<Table<Employee> columns={columns} data={employees} />
```

