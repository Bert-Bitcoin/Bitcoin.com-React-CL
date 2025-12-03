export interface BarChartDataPoint {
  /** Category or label for the X-axis */
  category: string;
  /** Value for the Y-axis */
  value: number;
  /** Optional label for custom tooltip display */
  label?: string;
}

export interface BarChartProps {
  /** Data points for the chart */
  data?: BarChartDataPoint[];
  
  /** Custom color for bars (default: primary-100) */
  color?: string;
  
  /** Width of the chart container */
  width?: number | string;
  
  /** Height of the chart container */
  height?: number;
  
  /** Show/hide tooltip on hover */
  showTooltip?: boolean;
  
  /** Show/hide grid lines */
  showGrid?: boolean;
  
  /** Show/hide Y-axis */
  showYAxis?: boolean;
  
  /** Show/hide X-axis */
  showXAxis?: boolean;
  
  /** Show/hide legend */
  showLegend?: boolean;
  
  /** Enable/disable animation */
  animate?: boolean;
  
  /** Custom class name for styling */
  className?: string;
  
  /** Bar radius (rounded corners) */
  barRadius?: number;
  
  /** Enable/disable interactive features */
  enableInteractive?: boolean;
  
  /** Custom formatter for Y-axis values */
  yAxisFormatter?: (value: number) => string;
  
  /** Custom formatter for tooltip values */
  tooltipFormatter?: (value: number) => string;
  
  /** Label for the data series (shown in legend) */
  dataLabel?: string;
  
  /** Horizontal orientation */
  horizontal?: boolean;
  
  /** Stacked bars (for future multi-series support) */
  stacked?: boolean;
}

