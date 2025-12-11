export interface TreeMapDataPoint {
  /** Name/label for the tree node */
  name: string;
  /** Value/size of the node */
  size?: number;
  /** Value (alternative to size) */
  value?: number;
  /** Children nodes (for nested treemaps) */
  children?: TreeMapDataPoint[];
  /** Optional custom color for this node */
  color?: string;
  /** Optional label for custom tooltip display */
  label?: string;
  /** Index signature for Recharts compatibility */
  [key: string]: string | number | TreeMapDataPoint[] | undefined;
}

export interface TreeMapProps {
  /** Data points for the chart */
  data?: TreeMapDataPoint[];
  
  /** Array of colors to use for nodes (default: design system palette) */
  colors?: string[];
  
  /** Width of the chart container */
  width?: number | string;
  
  /** Height of the chart container */
  height?: number;
  
  /** Show/hide tooltip on hover */
  showTooltip?: boolean;
  
  /** Enable/disable animation */
  animate?: boolean;
  
  /** Custom class name for styling */
  className?: string;
  
  /** Aspect ratio of rectangles (width/height) */
  aspectRatio?: number;
  
  /** Stroke color for borders */
  strokeColor?: string;
  
  /** Stroke width for borders */
  strokeWidth?: number;
  
  /** Custom formatter for tooltip values */
  tooltipFormatter?: (value: number) => string;
  
  /** Custom formatter for label values */
  labelFormatter?: (value: number) => string;
  
  /** Label for the data series (shown in tooltip) */
  dataLabel?: string;
  
  /** Show labels on nodes */
  showLabels?: boolean;
  
  /** Minimum size to show label */
  minLabelSize?: number;
  
  /** Nesting depth to display (for hierarchical data) */
  nestingDepth?: number;
  
  /** Custom content renderer for nodes */
  customContent?: (props: any) => React.ReactElement;
}


