export type PaginationSize = 'default' | 'small';

export interface PaginationProps {
  /**
   * Current active page (1-indexed)
   */
  currentPage: number;

  /**
   * Total number of pages
   */
  totalPages: number;

  /**
   * Callback when page changes
   */
  onPageChange: (page: number) => void;

  /**
   * Size variant
   * @default 'default'
   */
  size?: PaginationSize;

  /**
   * Maximum number of page buttons to show
   * @default 7
   */
  maxPageButtons?: number;

  /**
   * Whether to show previous/next buttons
   * @default true
   */
  showArrows?: boolean;

  /**
   * Optional CSS class name
   */
  className?: string;
}

