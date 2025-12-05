import React from 'react';
import {
  Treemap as RechartsTreemap,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { twMerge } from 'tailwind-merge';
import type { TreeMapProps, TreeMapDataPoint } from './TreeMap.types';

// Default sample data
const defaultData: TreeMapDataPoint[] = [
  { name: 'Bitcoin', size: 40000 },
  { name: 'Ethereum', size: 25000 },
  { name: 'Bitcoin Cash', size: 15000 },
  { name: 'Litecoin', size: 12000 },
  { name: 'Ripple', size: 8000 },
  { name: 'Cardano', size: 6000 },
  { name: 'Polkadot', size: 4500 },
  { name: 'Chainlink', size: 3500 },
  { name: 'Stellar', size: 2000 },
  { name: 'Others', size: 1500 }
];

// Default color palette from design system
const defaultColors = [
  '#4169e1', // primary-100
  '#ff9500', // secondary-100 (orange)
  '#2fb790', // success-100 (green)
  '#5b3de2', // extra-violet-100
  '#4c9de5', // extra-cyan-100
  '#fac431', // extra-yellow-100
  '#e5527a', // extra-pink-100
  '#5f66dd', // extra-navy-100
  '#2aa5a5', // extra-green-100
  '#a395cc'  // extra-purple-100
];

/**
 * TreeMap component - A hierarchical data visualization using rectangles
 * Built with Recharts following the design system
 */
export const TreeMap: React.FC<TreeMapProps> = ({
  data = defaultData,
  colors = defaultColors,
  width = '100%',
  height = 400,
  showTooltip = true,
  animate = true,
  className,
  aspectRatio = 4 / 3,
  strokeColor = '#ffffff',
  strokeWidth = 1,
  tooltipFormatter,
  labelFormatter,
  dataLabel = 'Value',
  showLabels = true,
  minLabelSize = 1000,
  nestingDepth = 1
}) => {
  // Get color for a node
  const getNodeColor = (index: number, entry: TreeMapDataPoint): string => {
    if (entry.color) return entry.color;
    return colors[index % colors.length];
  };

  // Calculate total for percentage calculations
  const calculateTotal = (items: TreeMapDataPoint[]): number => {
    return items.reduce((sum, item) => {
      const value = item.size || item.value || 0;
      return sum + value;
    }, 0);
  };

  const total = calculateTotal(data);

  // Custom tooltip component with Satoshi font for labels and IBM Plex Sans for numbers
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as TreeMapDataPoint;
      const value = data.size || data.value || 0;
      const formattedValue = tooltipFormatter 
        ? tooltipFormatter(value) 
        : value.toLocaleString();
      const percentage = ((value / total) * 100).toFixed(1);

      return (
        <div className="bg-shades-white border border-shades-light rounded-sm px-m py-s shadow-md">
          <p className="font-sans text-label-sm text-shades-mid dark:text-shades-black mb-xs">
            {data.label || data.name}
          </p>
          <p 
            className="font-['IBMPlexSans'] text-body-sm font-semiBold  dark:text-shades-black"
            style={{ color: payload[0].fill }}
          >
            {dataLabel}: {formattedValue}
          </p>
          <p className="font-['IBMPlexSans'] text-label-sm text-shades-mid  dark:text-shades-black mt-xs">
            {percentage}% of total
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom content renderer for tree nodes
  const CustomContent = (props: any) => {
    const { x, y, width, height, index, name, value, size } = props;
    const nodeValue = size || value || 0;
    const nodeColor = getNodeColor(index, props);

    // Don't render labels for very small nodes
    const showLabel = showLabels && nodeValue >= minLabelSize;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={nodeColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          className="transition-opacity hover:opacity-90"
        />
        {showLabel && width > 40 && height > 30 && (
          <>
            <text
              x={x + width / 2}
              y={y + height / 2 - 8}
              textAnchor="middle"
              fill="#ffffff"
              stroke="none"
              fontFamily='"Satoshi Variable", "Satoshi", sans-serif'
              fontSize="12"
              fontWeight="600"
              className="pointer-events-none"
            >
              {name}
            </text>
            <text
              x={x + width / 2}
              y={y + height / 2 + 8}
              textAnchor="middle"
              fill="#ffffff"
              stroke="none"
              fontFamily='"IBM Plex Sans", sans-serif'
              fontSize="11"
              fontWeight="500"
              className="pointer-events-none"
            >
              {labelFormatter ? labelFormatter(nodeValue) : nodeValue.toLocaleString()}
            </text>
          </>
        )}
      </g>
    );
  };

  return (
    <div className={twMerge('w-full', className)}>
      <ResponsiveContainer width={width as number | `${number}%`} height={height}>
        <RechartsTreemap
          data={data}
          dataKey="size"
          aspectRatio={aspectRatio}
          stroke={strokeColor}
          fill="#8884d8"
          content={<CustomContent />}
          isAnimationActive={animate}
        >
          {showTooltip && (
            <Tooltip content={<CustomTooltip />} />
          )}
        </RechartsTreemap>
      </ResponsiveContainer>
    </div>
  );
};

export default TreeMap;

