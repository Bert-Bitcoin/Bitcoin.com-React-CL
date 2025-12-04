import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../icon/Icon';
import { Pagination } from '../pagination';
import type { TableProps } from './Table.types';

/**
 * Table - A flexible data table component
 * 
 * Displays tabular data with customizable columns and styling.
 * Based on the Bitcoin.com design system.
 * 
 * Responsive: Automatically calculates optimal breakpoint based on column count.
 * - 2 columns: ~380px breakpoint
 * - 3 columns: ~520px breakpoint
 * - 4 columns: ~660px breakpoint
 * - 5+ columns: scales up to 1024px max
 * 
 * Uses container queries to respond to container width, not screen size.
 */
export const Table = <T extends Record<string, any>>({
  columns,
  data,
  variant = 'default',
  getRowKey = (_, index) => index,
  className,
  onRowClick,
  enableSorting = true,
  sortState,
  onSort,
  pagination,
  responsive = true,
  responsiveBreakpoint = 'auto'
}: TableProps<T>) => {
  // Calculate breakpoint based on column count
  const calculateBreakpoint = (): number => {
    if (responsiveBreakpoint !== 'auto') {
      return responsiveBreakpoint;
    }
    
    // Dynamic calculation based on column count
    // Formula: Each column needs ~140px minimum + 100px base padding/margins
    // 2 cols: 380px, 3 cols: 520px, 4 cols: 660px, 5 cols: 800px, etc.
    const baseWidth = 32; // Base padding and spacing
    const columnWidth = 80; // Approximate minimum width per column
    const calculatedWidth = baseWidth + (columns.length * columnWidth);
    
    // Ensure minimum breakpoint of 400px and maximum of 1024px
    return Math.max(400, Math.min(1024, calculatedWidth));
  };

  const breakpoint = calculateBreakpoint();

  // Generate unique ID for this table instance
  const tableId = useMemo(() => `table-${Math.random().toString(36).substr(2, 9)}`, []);

  const getCellValue = (row: T, column: typeof columns[0]): ReactNode => {
    if (typeof column.accessor === 'function') {
      return column.accessor(row);
    }
    return row[column.accessor];
  };

  const getCellClassName = (column: typeof columns[0]) => {
    const baseClass = "flex flex-col justify-center leading-none";
    const typeClass =
      column.type === 'numeric'
        ? "font-['IBMPlexSans'] font-semibold text-[14px] leading-4"
        : "font-['Satoshi_Variable'] font-medium text-[14px]";
    
    const alignClass = column.align === 'right' ? 'items-end' : column.align === 'center' ? 'items-center' : 'items-start';

    return twMerge(baseClass, typeClass, alignClass);
  };

  const handleSort = (column: typeof columns[0]) => {
    if (!enableSorting || !column.sortable || !onSort) return;

    const currentDirection = sortState?.columnId === column.id ? sortState.direction : null;
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    
    onSort(column.id, newDirection);
  };

  const getSortIcon = (column: typeof columns[0]) => {
    if (!enableSorting || !column.sortable) return null;

    const isActive = sortState?.columnId === column.id;
    const direction = isActive ? sortState?.direction : null;

    if (!isActive) {
      return (
        <Icon
          type="icon-arrow-up-1"
          size="xs"
          className="text-shades-semi-light opacity-0 group-hover:opacity-100 transition-opacity"
        />
      );
    }

    return (
      <Icon
        type={direction === 'asc' ? 'icon-arrow-up-1' : 'icon-arrow-down'}
        size="xs"
        className="text-primary-100"
      />
    );
  };

  // Calculate pagination display text
  const getPaginationText = () => {
    if (!pagination) return '';
    const start = (pagination.currentPage - 1) * pagination.pageSize + 1;
    const end = Math.min(pagination.currentPage * pagination.pageSize, pagination.totalResults);
    return `Showing ${start} to ${end} of ${pagination.totalResults} results`;
  };

  // Desktop table layout
  const desktopTableContent = (
    <>
      {/* Header Row */}
      <div className="flex gap-l items-center px-m py-s w-full min-h-[35px]">
        {columns.map((column) => {
          const headerAlignClass = column.align === 'right' ? 'justify-end' : column.align === 'center' ? 'justify-center' : 'justify-start';
          
          return (
            <div
              key={column.id}
              className={twMerge(
                "flex items-center gap-1 leading-none whitespace-nowrap group",
                "font-['Satoshi_Variable'] font-bold text-[12px] uppercase text-shades-dark",
                headerAlignClass,
                column.width ? '' : 'flex-1 min-w-0',
                enableSorting && column.sortable && onSort ? 'cursor-pointer select-none hover:text-shades-black' : ''
              )}
              style={{ width: column.width }}
              onClick={() => handleSort(column)}
            >
              <span>{column.label}</span>
              {getSortIcon(column)}
            </div>
          );
        })}
      </div>

      {/* Divider after header */}
      <div className={variant === 'bordered' ? '' : 'px-m'}>
        <div className="h-px w-full bg-shades-extra-light dark:bg-border" />
      </div>

      {/* Data Rows */}
      {data.map((row, rowIndex) => (
        <div key={getRowKey(row, rowIndex)}>
          <div
            className={twMerge(
              'flex gap-l items-center px-m py-s w-full min-h-[35px]',
              onRowClick && 'cursor-pointer hover:bg-shades-extra-light transition-colors'
            )}
            onClick={() => onRowClick?.(row, rowIndex)}
          >
            {columns.map((column, colIndex) => (
              <div
                key={column.id}
                className={twMerge(
                  getCellClassName(column),
                  colIndex === 0 ? 'text-shades-black' : 'text-shades-dark',
                  column.width ? '' : 'flex-1 min-w-0',
                  'break-words'
                )}
                style={{ width: column.width }}
              >
                {getCellValue(row, column)}
              </div>
            ))}
          </div>

          {/* Divider between rows - don't show after last row */}
          {rowIndex < data.length - 1 && (
            <div className="px-m">
              <div className="h-px w-full bg-shades-extra-light dark:bg-border" />
            </div>
          )}
        </div>
      ))}
    </>
  );

  // Mobile stacked layout
  const mobileTableContent = (
    <>
      {/* Data Rows - Stacked Cards */}
      {data.map((row, rowIndex) => (
        <div key={getRowKey(row, rowIndex)}>
          <div
            className={twMerge(
              'flex flex-col gap-xs px-m py-s w-full',
              onRowClick && 'cursor-pointer hover:bg-shades-extra-light transition-colors'
            )}
            onClick={() => onRowClick?.(row, rowIndex)}
          >
            {columns.map((column) => (
              <div
                key={column.id}
                className="flex items-center justify-between gap-m min-h-[24px]"
              >
                {/* Label */}
                <div className="font-['Satoshi_Variable'] font-bold text-[12px] uppercase text-shades-dark whitespace-nowrap text-right">
                  {column.label}
                </div>
                
                {/* Value */}
                <div
                  className={twMerge(
                    getCellClassName(column),
                    'text-shades-black flex-1 text-right items-end'
                  )}
                >
                  {getCellValue(row, column)}
                </div>
              </div>
            ))}
          </div>

          {/* Divider between rows - don't show after last row */}
          {rowIndex < data.length - 1 && (
            <div className="px-m">
              <div className="h-px w-full bg-shades-extra-light dark:bg-border" />
            </div>
          )}
        </div>
      ))}
    </>
  );

  const tableContent = responsive ? (
    <>
      {/* Inject dynamic container query CSS */}
      <style>
        {`
          .${tableId}-desktop {
            display: none;
          }
          .${tableId}-mobile {
            display: block;
          }
          @container (min-width: ${breakpoint}px) {
            .${tableId}-desktop {
              display: block;
            }
            .${tableId}-mobile {
              display: none;
            }
          }
        `}
      </style>

      {/* Desktop view - hidden on narrow containers */}
      <div className={`${tableId}-desktop`}>
        {desktopTableContent}
      </div>
      
      {/* Mobile view - hidden on wide containers */}
      <div className={`${tableId}-mobile`}>
        {mobileTableContent}
      </div>

      {/* Pagination Footer - shared between layouts */}
      {pagination && (
        <>
          {/* Divider before pagination */}
          <div className={variant === 'bordered' ? '' : 'px-m'}>
            <div className="h-px w-full bg-shades-extra-light dark:bg-border" />
          </div>

          {/* Pagination Row */}
          <div className="flex items-center justify-between px-m pt-s pb-m w-full">
            <div className="font-['Satoshi_Variable'] font-medium text-[12px] text-shades-semi-dark leading-none">
              {getPaginationText()}
            </div>
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={pagination.onPageChange}
              size="small"
            />
          </div>
        </>
      )}
    </>
  ) : (
    <>
      {desktopTableContent}
      
      {/* Pagination Footer */}
      {pagination && (
        <>
          {/* Divider before pagination */}
          <div className={variant === 'bordered' ? '' : 'px-m'}>
            <div className="h-px w-full bg-shades-extra-light dark:bg-border" />
          </div>

          {/* Pagination Row */}
          <div className="flex items-center justify-between px-m pt-s pb-m w-full">
            <div className="font-['Satoshi_Variable'] font-medium text-[12px] text-shades-semi-dark leading-none">
              {getPaginationText()}
            </div>
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={pagination.onPageChange}
              size="small"
            />
          </div>
        </>
      )}
    </>
  );

  if (variant === 'bordered') {
    return (
      <div
        className={twMerge(
          ' bg-surface dark:bg-surface-muted border border-border rounded-sm w-full',
          responsive && '@container',
          className
        )}
      >
        <div className="flex flex-col w-full overflow-clip rounded-[inherit]">
          {tableContent}
        </div>
      </div>
    );
  }

  return (
    <div className={twMerge('flex flex-col w-full', responsive && '@container', className)}>
      {tableContent}
    </div>
  );
};

Table.displayName = 'Table';

