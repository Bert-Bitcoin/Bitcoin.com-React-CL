import type { ReactNode } from 'react';

export interface DescriptionListItem {
  id: string;
  label: string;
  value: ReactNode;
  /**
   * Whether the value is numeric (uses IBM Plex Sans font)
   */
  isNumeric?: boolean;
}

export interface DescriptionListProps {
  /**
   * Array of description list items to display
   */
  items: DescriptionListItem[];
  /**
   * Layout variant - 'large' for side-by-side, 'compact' for stacked
   * If 'responsive', will automatically switch based on container width
   * @default 'responsive'
   */
  variant?: 'large' | 'compact' | 'responsive';
  /**
   * Breakpoint width (in pixels) for responsive mode to switch from large to compact
   * @default 500
   */
  breakpoint?: number;
  /**
   * Optional CSS class name
   */
  className?: string;
}

