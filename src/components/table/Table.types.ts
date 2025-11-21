import type { ReactNode } from 'react';

export type ColumnAlignment = 'left' | 'center' | 'right';

export type ColumnType = 'text' | 'numeric' | 'custom';

export type TableVariant = 'default' | 'bordered';

export type SortDirection = 'asc' | 'desc' | null;

export interface SortState {
  columnId: string;
  direction: 'asc' | 'desc';
}

export interface TableColumn<T = any> {
  /**
   * Unique identifier for the column
   */
  id: string;
  /**
   * Column header label
   */
  label: string;
  /**
   * Accessor key for the data object, or render function
   */
  accessor: keyof T | ((row: T) => ReactNode);
  /**
   * Column type - affects styling
   * @default 'text'
   */
  type?: ColumnType;
  /**
   * Column alignment
   * @default 'left'
   */
  align?: ColumnAlignment;
  /**
   * Column width (e.g., '80px', '200px', or undefined for flexible)
   */
  width?: string;
  /**
   * Whether this column is sortable
   * @default false
   */
  sortable?: boolean;
  /**
   * Key to use for sorting when accessor is a function
   * Required if accessor is a function and sortable is true
   */
  sortKey?: keyof T;
}

export interface TablePaginationConfig {
  /**
   * Current page (1-indexed)
   */
  currentPage: number;
  /**
   * Total number of pages
   */
  totalPages: number;
  /**
   * Total number of results
   */
  totalResults: number;
  /**
   * Number of items per page
   */
  pageSize: number;
  /**
   * Callback when page changes
   */
  onPageChange: (page: number) => void;
}

export interface TableProps<T = any> {
  /**
   * Array of column definitions
   */
  columns: TableColumn<T>[];
  /**
   * Array of data rows
   */
  data: T[];
  /**
   * Table variant
   * @default 'default'
   */
  variant?: TableVariant;
  /**
   * Optional function to get unique key for each row
   * @default (row, index) => index
   */
  getRowKey?: (row: T, index: number) => string | number;
  /**
   * Optional CSS class name
   */
  className?: string;
  /**
   * Callback when a row is clicked
   */
  onRowClick?: (row: T, index: number) => void;
  /**
   * Enable sorting functionality
   * @default true
   */
  enableSorting?: boolean;
  /**
   * Current sort state
   */
  sortState?: SortState | null;
  /**
   * Callback when sort is requested
   */
  onSort?: (columnId: string, direction: 'asc' | 'desc') => void;
  /**
   * Optional pagination configuration
   */
  pagination?: TablePaginationConfig;
}

