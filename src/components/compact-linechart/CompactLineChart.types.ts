export type Trend = 'positive' | 'negative';

export interface DataPoint {
  value: number;
}

export interface CompactLineChartProps {
  /**
   * Trend direction - determines color scheme
   */
  trend?: Trend;
  /**
   * Data points for the chart
   */
  data?: DataPoint[];
  /**
   * Custom width of the chart (in pixels)
   */
  width?: number;
  /**
   * Custom height of the chart (in pixels)
   */
  height?: number;
  /**
   * Additional CSS classes
   */
  className?: string;
}
