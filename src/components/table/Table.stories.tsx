import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Indicator } from '../indicator';
import { Table } from './Table';
import type { TableColumn, SortState } from './Table.types';

const meta = {
  title: 'Components/Content/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible data table component for displaying tabular data with customizable columns and styling. Based on the Bitcoin.com design system.'
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
      <div style={{ width: '966px' }}>
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
      <div style={{ width: '100%', maxWidth: '900px' }}>
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
      <div style={{ width: '100%', maxWidth: '700px' }}>
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
      <div style={{ width: '400px' }}>
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
      <div style={{ width: '100%', maxWidth: '900px' }}>
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
      <div style={{ width: '100%', maxWidth: '700px' }}>
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

