import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Indicator } from '../indicator';
import { Table } from './Table';
import type { TableColumn, SortState } from './Table.types';

const meta = {
  title: 'Components/Content/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible data table component for displaying tabular data with customizable columns and styling. Features intelligent responsive breakpoints that automatically adjust based on column count, using container queries for optimal layout in any context. Based on the Bitcoin.com design system.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      description: 'Array of column definitions',
      control: { type: 'object' }
    },
    data: {
      description: 'Array of data rows',
      control: { type: 'object' }
    },
    variant: {
      description: 'Table variant',
      control: { type: 'select' },
      options: ['default', 'bordered']
    },
    enableSorting: {
      description: 'Enable sorting functionality',
      control: { type: 'boolean' }
    },
    responsive: {
      description: 'Enable responsive stacked layout based on container width',
      control: { type: 'boolean' }
    },
    responsiveBreakpoint: {
      description: 'Breakpoint for stacking. Use "auto" to calculate based on column count, or a number in pixels',
      control: { type: 'text' }
    },
    getRowKey: {
      description: 'Optional function to get unique key for each row'
    },
    className: {
      description: 'Optional CSS class name',
      control: { type: 'text' }
    },
    onRowClick: {
      description: 'Callback when a row is clicked',
      action: 'row-clicked'
    }
  }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data types
interface Employee {
  id: number;
  name: string;
  title: string;
  email: string;
  salary: string;
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: string;
}

interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  balance: string;
  value: string;
}

// Sample data
const employeeData: Employee[] = [
  {
    id: 1,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    salary: '82,896.56 USD'
  },
  {
    id: 2,
    name: 'Courtney Henry',
    title: 'Director of Product',
    email: 'floyd.miles@example.com',
    salary: '82,896.56 USD'
  },
  {
    id: 3,
    name: 'Tom Cook',
    title: 'Copywriter',
    email: 'tom.cook@example.com',
    salary: '82,896.56 USD'
  },
  {
    id: 4,
    name: 'Floyd Miles',
    title: 'Principal Designer',
    email: 'leonard.krasr@example.com',
    salary: '82,896.56 USD'
  }
];

const transactionData: Transaction[] = [
  {
    id: 'TXN-001',
    date: '2024-01-15',
    description: 'Bitcoin Purchase',
    amount: '0.025 BTC',
    status: 'Completed'
  },
  {
    id: 'TXN-002',
    date: '2024-01-14',
    description: 'Ethereum Transfer',
    amount: '1.5 ETH',
    status: 'Pending'
  },
  {
    id: 'TXN-003',
    date: '2024-01-13',
    description: 'USD Deposit',
    amount: '$5,000.00',
    status: 'Completed'
  }
];

const cryptoData: CryptoAsset[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: '0.125',
    value: '$5,234.50'
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    balance: '2.5',
    value: '$4,250.00'
  },
  {
    id: '3',
    name: 'USD Coin',
    symbol: 'USDC',
    balance: '10,000',
    value: '$10,000.00'
  }
];

// Column definitions
const employeeColumns: TableColumn<Employee>[] = [
  {
    id: 'name',
    label: 'Full name',
    accessor: 'name',
    sortable: true
  },
  {
    id: 'title',
    label: 'Title',
    accessor: 'title',
    sortable: true
  },
  {
    id: 'email',
    label: 'Email',
    accessor: 'email'
  },
  {
    id: 'salary',
    label: 'Salary',
    accessor: 'salary',
    type: 'numeric'
  },
  {
    id: 'actions',
    label: '',
    accessor: () => (
      <button
        className="px-m py-s rounded-2xl font-['Satoshi_Variable'] font-medium text-[14px] leading-none text-primary-100 hover:bg-primary-10 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          alert('Edit clicked');
        }}
      >
        Edit
      </button>
    ),
    width: '80px',
    align: 'right'
  }
];

const employeeColumnsNoActions: TableColumn<Employee>[] = [
  {
    id: 'name',
    label: 'Full name',
    accessor: 'name',
    sortable: true
  },
  {
    id: 'title',
    label: 'Title',
    accessor: 'title',
    sortable: true
  },
  {
    id: 'email',
    label: 'Email',
    accessor: 'email',
    sortable: true
  },
  {
    id: 'salary',
    label: 'Salary',
    accessor: 'salary',
    type: 'numeric',
    sortable: true
  }
];

const transactionColumns: TableColumn<Transaction>[] = [
  {
    id: 'id',
    label: 'Transaction ID',
    accessor: 'id'
  },
  {
    id: 'date',
    label: 'Date',
    accessor: 'date'
  },
  {
    id: 'description',
    label: 'Description',
    accessor: 'description'
  },
  {
    id: 'amount',
    label: 'Amount',
    accessor: 'amount',
    type: 'numeric'
  },
  {
    id: 'status',
    label: 'Status',
    accessor: (row) => (
      <Indicator
        variant={row.status === 'Completed' ? 'approved' : 'pending'}
        label={row.status}
      />
    ),
    align: 'center'
  }
];

const cryptoColumns: TableColumn<CryptoAsset>[] = [
  {
    id: 'name',
    label: 'Asset',
    accessor: 'name'
  },
  {
    id: 'symbol',
    label: 'Symbol',
    accessor: 'symbol'
  },
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

/**
 * Default table with employee data matching the Figma design
 */
export const Default: Story = {
  args: {
    columns: employeeColumns,
    data: employeeData,
    getRowKey: (row) => row.id
  },
  decorators: [
    (Story) => (
      <div style={{ width: '966px', minWidth: '966px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Transaction history table
 */
export const Transactions: Story = {
  args: {
    columns: transactionColumns,
    data: transactionData,
    getRowKey: (row) => row.id
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px', minWidth: 0 }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Crypto portfolio table with numeric alignment
 */
export const CryptoPortfolio: Story = {
  args: {
    columns: cryptoColumns,
    data: cryptoData,
    getRowKey: (row) => row.id
  },
  decorators: [
    (Story) => (
      <div style={{ width: '700px', minWidth: 0 }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Simple table with minimal data
 */
export const SimpleTable: Story = {
  args: {
    columns: [
      { id: 'name', label: 'Name', accessor: 'name' },
      { id: 'value', label: 'Value', accessor: 'value', type: 'numeric' }
    ],
    data: [
      { name: 'Item 1', value: '100' },
      { name: 'Item 2', value: '200' },
      { name: 'Item 3', value: '300' }
    ]
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', minWidth: '400px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Table with row click handler
 */
export const ClickableRows: Story = {
  args: {
    columns: employeeColumnsNoActions,
    data: employeeData,
    getRowKey: (row) => row.id,
    onRowClick: (row) => {
      alert(`Clicked on ${row.name}`);
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Empty table
 */
export const Empty: Story = {
  args: {
    columns: employeeColumns,
    data: []
  },
  decorators: [
    (Story) => (
      <div style={{ width: '966px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Full width table
 */
export const FullWidth: Story = {
  args: {
    columns: employeeColumns,
    data: employeeData,
    getRowKey: (row) => row.id,
    className: 'min-w-full'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Custom column widths
 */
export const CustomColumnWidths: Story = {
  args: {
    columns: [
      { id: 'name', label: 'Name', accessor: 'name', width: '200px' },
      { id: 'title', label: 'Title', accessor: 'title' },
      { id: 'salary', label: 'Salary', accessor: 'salary', type: 'numeric', width: '150px' }
    ],
    data: employeeData,
    getRowKey: (row) => row.id
  },
  decorators: [
    (Story) => (
      <div style={{ width: '800px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Bordered variant - table with border around it
 */
export const Bordered: Story = {
  args: {
    columns: employeeColumns,
    data: employeeData,
    variant: 'bordered',
    getRowKey: (row) => row.id
  },
  decorators: [
    (Story) => (
      <div style={{ width: '966px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Bordered variant with transactions
 */
export const BorderedTransactions: Story = {
  args: {
    columns: transactionColumns,
    data: transactionData,
    variant: 'bordered',
    getRowKey: (row) => row.id
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px', minWidth: 0 }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Bordered variant with crypto portfolio
 */
export const BorderedCrypto: Story = {
  args: {
    columns: cryptoColumns,
    data: cryptoData,
    variant: 'bordered',
    getRowKey: (row) => row.id
  },
  decorators: [
    (Story) => (
      <div style={{ width: '700px', minWidth: 0 }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Sortable table with client-side sorting
 */
export const Sortable: StoryObj = {
  render: () => {
    const [sortState, setSortState] = useState<SortState | null>(null);
    const [sortedData, setSortedData] = useState(employeeData);

    const handleSort = (columnId: string, direction: 'asc' | 'desc') => {
      setSortState({ columnId, direction });

      const sorted = [...employeeData].sort((a, b) => {
        const aValue = a[columnId as keyof Employee];
        const bValue = b[columnId as keyof Employee];

        if (aValue < bValue) return direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return direction === 'asc' ? 1 : -1;
        return 0;
      });

      setSortedData(sorted);
    };

    return (
      <div style={{ width: '900px' }}>
        <Table
          columns={employeeColumnsNoActions}
          data={sortedData}
          getRowKey={(row) => row.id}
          sortState={sortState}
          onSort={handleSort}
        />
      </div>
    );
  }
};

/**
 * Sortable bordered table
 */
export const SortableBordered: StoryObj = {
  render: () => {
    const [sortState, setSortState] = useState<SortState | null>({ columnId: 'name', direction: 'asc' });
    const [sortedData, setSortedData] = useState(
      [...employeeData].sort((a, b) => a.name.localeCompare(b.name))
    );

    const handleSort = (columnId: string, direction: 'asc' | 'desc') => {
      setSortState({ columnId, direction });

      const sorted = [...employeeData].sort((a, b) => {
        const aValue = a[columnId as keyof Employee];
        const bValue = b[columnId as keyof Employee];

        if (aValue < bValue) return direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return direction === 'asc' ? 1 : -1;
        return 0;
      });

      setSortedData(sorted);
    };

    return (
      <div style={{ width: '900px' }}>
        <Table
          columns={employeeColumnsNoActions}
          data={sortedData}
          variant="bordered"
          getRowKey={(row) => row.id}
          sortState={sortState}
          onSort={handleSort}
        />
      </div>
    );
  }
};

/**
 * Sorting disabled - columns marked as sortable but sorting is turned off at table level
 */
export const SortingDisabled: Story = {
  args: {
    columns: employeeColumnsNoActions,
    data: employeeData,
    getRowKey: (row) => row.id,
    enableSorting: false
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Table with pagination - default variant
 */
export const WithPagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;
    const totalResults = employeeData.length;
    const totalPages = Math.ceil(totalResults / pageSize);
    
    // Get data for current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = employeeData.slice(startIndex, endIndex);

    return (
      <div style={{ width: '900px' }}>
        <Table
          columns={employeeColumnsNoActions}
          data={currentData}
          getRowKey={(row) => row.id}
          pagination={{
            currentPage,
            totalPages,
            totalResults,
            pageSize,
            onPageChange: setCurrentPage
          }}
        />
      </div>
    );
  }
};

/**
 * Table with pagination - bordered variant
 */
export const WithPaginationBordered: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;
    const totalResults = employeeData.length;
    const totalPages = Math.ceil(totalResults / pageSize);
    
    // Get data for current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = employeeData.slice(startIndex, endIndex);

    return (
      <div style={{ width: '900px' }}>
        <Table
          columns={employeeColumnsNoActions}
          data={currentData}
          variant="bordered"
          getRowKey={(row) => row.id}
          pagination={{
            currentPage,
            totalPages,
            totalResults,
            pageSize,
            onPageChange: setCurrentPage
          }}
        />
      </div>
    );
  }
};

/**
 * Table with pagination and sorting
 */
export const WithPaginationAndSorting: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortState, setSortState] = useState<SortState | null>(null);
    const pageSize = 4;
    
    // Sort data
    let sortedData = [...employeeData];
    if (sortState) {
      sortedData.sort((a, b) => {
        const aVal = a[sortState.columnId as keyof Employee];
        const bVal = b[sortState.columnId as keyof Employee];
        const comparison = String(aVal).localeCompare(String(bVal));
        return sortState.direction === 'asc' ? comparison : -comparison;
      });
    }
    
    const totalResults = sortedData.length;
    const totalPages = Math.ceil(totalResults / pageSize);
    
    // Get data for current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = sortedData.slice(startIndex, endIndex);

    const handleSort = (columnId: string, direction: 'asc' | 'desc') => {
      setSortState({ columnId, direction });
      setCurrentPage(1); // Reset to first page when sorting
    };

    return (
      <div style={{ width: '900px' }}>
        <Table
          columns={employeeColumnsNoActions}
          data={currentData}
          variant="bordered"
          getRowKey={(row) => row.id}
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
      </div>
    );
  }
};

/**
 * Responsive table with auto breakpoint - automatically calculates breakpoint based on column count
 * 2 columns = ~380px, 3 columns = ~520px, 4 columns = ~660px, etc.
 */
export const ResponsiveAuto: Story = {
  args: {
    columns: cryptoColumns, // 4 columns, so breakpoint ~660px
    data: cryptoData,
    variant: 'bordered',
    getRowKey: (row) => row.id,
    responsive: true,
    responsiveBreakpoint: 'auto' // Default - calculates based on column count
  },
  parameters: {
    docs: {
      description: {
        story:
          'This table automatically calculates its breakpoint based on the number of columns. With 4 columns, the breakpoint is ~660px. Tables with more columns get higher breakpoints, and tables with fewer columns get lower breakpoints. This ensures optimal layout for any number of columns.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px', minWidth: '300px', resize: 'horizontal', overflow: 'auto', border: '2px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Responsive table - automatically switches to stacked layout when container is narrow
 * Uses container queries, so it responds to the container size, not the screen size
 */
export const ResponsiveLayout: Story = {
  args: {
    columns: cryptoColumns,
    data: cryptoData,
    variant: 'bordered',
    getRowKey: (row) => row.id,
    responsive: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'This table uses container queries to automatically adapt based on its container width. The breakpoint is calculated automatically based on column count. Try resizing the story container to see the responsive behavior.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '700px', minWidth: 0 }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Few columns with auto breakpoint - shows how a 2-column table gets a lower breakpoint (~380px)
 */
export const FewColumnsAuto: Story = {
  args: {
    columns: [
      { id: 'name', label: 'Name', accessor: 'name' },
      { id: 'value', label: 'Value', accessor: 'value', type: 'numeric', align: 'right' }
    ],
    data: [
      { name: 'Bitcoin', value: '$42,150' },
      { name: 'Ethereum', value: '$2,250' },
      { name: 'USD Coin', value: '$1.00' }
    ],
    variant: 'bordered',
    responsive: true,
    responsiveBreakpoint: 'auto'
  },
  parameters: {
    docs: {
      description: {
        story:
          'With only 2 columns, the auto breakpoint is ~380px. This table stays in traditional layout down to narrower widths than tables with more columns.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px', minWidth: '300px', resize: 'horizontal', overflow: 'auto', border: '2px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Many columns with auto breakpoint - shows how a 6-column table gets a higher breakpoint (~940px)
 */
export const ManyColumnsAuto: Story = {
  args: {
    columns: [
      { id: 'id', label: 'ID', accessor: 'id', width: '60px' },
      { id: 'name', label: 'Name', accessor: 'name' },
      { id: 'email', label: 'Email', accessor: 'email' },
      { id: 'title', label: 'Title', accessor: 'title' },
      { id: 'department', label: 'Department', accessor: 'title' },
      { id: 'salary', label: 'Salary', accessor: 'salary', type: 'numeric', align: 'right' }
    ],
    data: employeeData.map(emp => ({ ...emp, department: 'Engineering' })),
    variant: 'bordered',
    responsive: true,
    responsiveBreakpoint: 'auto',
    getRowKey: (row) => row.id
  },
  parameters: {
    docs: {
      description: {
        story:
          'With 6 columns, the auto breakpoint is ~940px. This table switches to stacked layout earlier than tables with fewer columns, ensuring readability.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '1000px', minWidth: '300px', resize: 'horizontal', overflow: 'auto', border: '2px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Fixed breakpoint - override auto calculation with a specific pixel value
 */
export const FixedBreakpoint: Story = {
  args: {
    columns: cryptoColumns,
    data: cryptoData,
    variant: 'bordered',
    getRowKey: (row) => row.id,
    responsive: true,
    responsiveBreakpoint: 500 // Fixed at 500px
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can override the auto calculation by setting a specific breakpoint in pixels. This table will stack when the container is less than 500px wide, regardless of column count.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '700px', minWidth: '300px', resize: 'horizontal', overflow: 'auto', border: '2px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Narrow container - Shows the stacked layout that appears in narrow containers
 * This demonstrates what users will see when the table is in a narrow container
 */
export const NarrowContainer: Story = {
  args: {
    columns: transactionColumns,
    data: transactionData,
    variant: 'bordered',
    getRowKey: (row) => row.id,
    responsive: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story shows the table in a narrow container (400px) to demonstrate the stacked layout. Each row displays column labels next to their values for better readability in narrow spaces.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    )
  ]
};

/**
 * Non-responsive table - Maintains traditional layout regardless of container size
 * Set responsive={false} to disable the automatic stacking behavior
 */
export const NonResponsive: Story = {
  args: {
    columns: cryptoColumns,
    data: cryptoData,
    variant: 'bordered',
    getRowKey: (row) => row.id,
    responsive: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'When responsive is set to false, the table maintains its traditional columnar layout regardless of container width. This may require horizontal scrolling in narrow containers.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '700px', minWidth: 0 }}>
        <Story />
      </div>
    )
  ]
};

