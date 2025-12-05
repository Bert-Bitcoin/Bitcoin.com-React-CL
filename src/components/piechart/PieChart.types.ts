export interface PieChartDataPoint {
  /** Name/label for the pie slice */
  name: string;
  /** Value for the slice */
  value: number;
  /** Optional custom color for this slice */
  color?: string;
  /** Optional label for custom tooltip display */
  label?: string;
  /** Index signature for Recharts compatibility */
  [key: string]: string | number | undefined;
}

export interface PieChartProps {
  /** Data points for the chart */
  data?: PieChartDataPoint[];
  
  /** Array of colors to use for slices (default: design system palette) */
  colors?: string[];
  
  /** Width of the chart container */
  width?: number | string;
  
  /** Height of the chart container */
  height?: number;
  
  /** Show/hide tooltip on hover */
  showTooltip?: boolean;
  
  /** Show/hide legend */
  showLegend?: boolean;
  
  /** Enable/disable animation */
  animate?: boolean;
  
  /** Custom class name for styling */
  className?: string;
  
  /** Inner radius (0 = full pie, > 0 = donut chart) */
  innerRadius?: number;
  
  /** Outer radius */
  outerRadius?: number;
  
  /** Show/hide labels on slices */
  showLabels?: boolean;
  
  /** Enable/disable interactive features */
  enableInteractive?: boolean;
  
  /** Custom formatter for tooltip values */
  tooltipFormatter?: (value: number) => string;
  
  /** Custom formatter for label values */
  labelFormatter?: (value: number) => string;
  
  /** Label for the data series (shown in legend) */
  dataLabel?: string;
  
  /** Padding angle between slices in degrees */
  paddingAngle?: number;
  
  /** Show percentage values instead of raw values */
  showPercentage?: boolean;
  
  /** Position of the legend (default: 'bottom') */
  legendPosition?: 'top' | 'bottom' | 'left' | 'right';
  
  /** Vertical alignment of legend content */
  legendVerticalAlign?: 'top' | 'middle' | 'bottom';
  
  /** Custom center label (for donut charts) */
  centerLabel?: string;
  
  /** Custom center value (for donut charts) */
  centerValue?: string;
}

