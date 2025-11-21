import React from 'react';
import { twMerge } from 'tailwind-merge';

import { IconButton } from '../button';
import { Icon } from '../icon';
import type { PaginationProps } from './Pagination.types';

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  size = 'default',
  maxPageButtons = 7,
  showArrows = true,
  className
}) => {
  // Calculate which page numbers to show
  const getPageNumbers = (): number[] => {
    if (totalPages <= maxPageButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const halfMax = Math.floor(maxPageButtons / 2);
    let start = Math.max(1, currentPage - halfMax);
    let end = Math.min(totalPages, start + maxPageButtons - 1);

    if (end - start + 1 < maxPageButtons) {
      start = Math.max(1, end - maxPageButtons + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumbers = getPageNumbers();
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // Size configurations
  const sizeConfig = {
    default: {
      buttonSize: 'size-[35px]',
      fontSize: 'text-[16px]',
      iconSize: 'md' as const
    },
    small: {
      buttonSize: 'size-[24px]',
      fontSize: 'text-[12px]',
      iconSize: 'sm' as const
    }
  };

  const config = sizeConfig[size];

  const handlePageClick = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={twMerge('flex items-center gap-xs', className)}>
      {/* Previous Button */}
      {showArrows && (
        <IconButton
          icon={<Icon type={size === 'small' ? 'icon-arrow-left-3' : 'icon-left-arrow'} size={size === 'small' ? 'xs' : 'sm'} />}
          variant="default"
          size={config.iconSize}
          disabled={isFirstPage}
          onClick={() => handlePageClick(currentPage - 1)}
          aria-label="Previous page"
          className={size === 'small' ? 'w-[24px] h-[24px]' : undefined}
        />
      )}

      {/* Page Numbers */}
      {pageNumbers.map((page) => {
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            disabled={isActive}
            className={twMerge(
              'flex items-center justify-center',
              'font-[\'Satoshi_Variable\'] font-medium leading-none',
              'text-shades-dark',
              'rounded-[38px]',
              'transition-colors',
              config.buttonSize,
              config.fontSize,
              isActive
                ? 'bg-shades-off-white border border-shades-light cursor-default'
                : 'border border-transparent hover:bg-shades-extra-light cursor-pointer'
            )}
            aria-label={`Page ${page}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      {showArrows && (
        <IconButton
          icon={<Icon type={size === 'small' ? 'icon-arrow-right-2' : 'icon-right-arrow'} size={size === 'small' ? 'xs' : 'sm'} />}
          variant="default"
          size={config.iconSize}
          disabled={isLastPage}
          onClick={() => handlePageClick(currentPage + 1)}
          aria-label="Next page"
          className={size === 'small' ? 'w-[24px] h-[24px]' : undefined}
        />
      )}
    </div>
  );
};

Pagination.displayName = 'Pagination';

