import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../icon/Icon';
import type { TableProps } from './Table.types';

/**
 * Table - A flexible data table component
 * 
 * Displays tabular data with customizable columns and styling.
 * Based on the Bitcoin.com design system.
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
  onSort
}: TableProps<T>) => {
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

  const tableContent = (
    <>
      {/* Header Row */}
      <div className="bg-shades-white flex gap-l items-center px-m py-s w-full min-h-[35px]">
        {columns.map((column) => (
          <div
            key={column.id}
            className={twMerge(
              "flex items-center gap-1 leading-none whitespace-nowrap group",
              "font-['Satoshi_Variable'] font-bold text-[12px] uppercase text-shades-dark",
              column.width ? '' : 'flex-1 min-w-0',
              enableSorting && column.sortable && onSort ? 'cursor-pointer select-none hover:text-shades-black' : ''
            )}
            style={{ width: column.width }}
            onClick={() => handleSort(column)}
          >
            <span>{column.label}</span>
            {getSortIcon(column)}
          </div>
        ))}
      </div>

      {/* Divider after header */}
      <div className={variant === 'bordered' ? '' : 'px-m'}>
        <div className="h-px w-full bg-shades-extra-light" />
      </div>

      {/* Data Rows */}
      {data.map((row, rowIndex) => (
        <div key={getRowKey(row, rowIndex)}>
          <div
            className={twMerge(
              'bg-shades-white flex gap-l items-center px-m py-s w-full min-h-[35px]',
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
              <div className="h-px w-full bg-shades-extra-light" />
            </div>
          )}
        </div>
      ))}
    </>
  );

  if (variant === 'bordered') {
    return (
      <div
        className={twMerge(
          'border border-shades-off-white rounded-s w-full',
          className
        )}
      >
        <div className="flex flex-col w-full bg-shades-white overflow-clip rounded-[inherit]">
          {tableContent}
        </div>
      </div>
    );
  }

  return (
    <div className={twMerge('flex flex-col w-full bg-shades-white', className)}>
      {tableContent}
    </div>
  );
};

Table.displayName = 'Table';

