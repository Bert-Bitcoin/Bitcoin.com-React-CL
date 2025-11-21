export type IndicatorVariant =
  | 'approved'
  | 'pending'
  | 'rejected'
  | 'viewed'
  | 'new'
  | 'neutral'
  | 'featured';

export interface IndicatorProps {
  /**
   * The variant of the indicator
   * @default 'approved'
   */
  variant?: IndicatorVariant;

  /**
   * Custom label text to display
   * If not provided, default label based on variant will be used
   */
  label?: string;

  /**
   * Custom icon name to display
   * If not provided, default icon based on variant will be used
   */
  icon?: string;

  /**
   * Optional CSS class name
   */
  className?: string;
}

