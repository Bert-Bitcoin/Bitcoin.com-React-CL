export type LineChartVariant = 'positive' | 'negative' | 'custom';

export interface LineChartDataPoint {
  /** Date or label for the X-axis */
  date: string;
  /** Value for the Y-axis */
  value: number;
  /** Optional label for custom tooltip display */
  label?: string;
}

export interface LineChartProps {
  /** Data points for the chart */
  data?: LineChartDataPoint[];
  
  /** Chart variant - determines color scheme */
  variant?: LineChartVariant;
  
  /** Custom color for line and gradient (overrides variant) */
  customColor?: string;
  
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
  
  /** Enable area fill gradient */
  showArea?: boolean;
  
  /** Stroke width of the line */
  strokeWidth?: number;
  
  /** Enable/disable interactive features (zoom, brush) */
  enableInteractive?: boolean;
  
  /** Custom formatter for Y-axis values */
  yAxisFormatter?: (value: number) => string;
  
  /** Custom formatter for tooltip values */
  tooltipFormatter?: (value: number) => string;
  
  /** Label for the data series (shown in legend) */
  dataLabel?: string;
}

