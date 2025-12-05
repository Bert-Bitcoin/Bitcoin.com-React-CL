import React, { useState } from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Sector
} from 'recharts';
import { twMerge } from 'tailwind-merge';
import type { PieChartProps, PieChartDataPoint } from './PieChart.types';

// Default sample data
const defaultData: PieChartDataPoint[] = [
  { name: 'Bitcoin', value: 40 },
  { name: 'Ethereum', value: 25 },
  { name: 'Bitcoin Cash', value: 15 },
  { name: 'Litecoin', value: 12 },
  { name: 'Other', value: 8 }
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
 * PieChart component - A full-featured pie/donut chart with customizable styling
 * Built with Recharts following the design system
 */
export const PieChart: React.FC<PieChartProps> = ({
  data = defaultData,
  colors = defaultColors,
  width = '100%',
  height = 400,
  showTooltip = true,
  showLegend = true,
  animate = true,
  className,
  innerRadius = 0,
  outerRadius = 120,
  showLabels = false,
  enableInteractive = false,
  tooltipFormatter,
  labelFormatter,
  dataLabel = 'Value',
  paddingAngle = 0,
  showPercentage = false,
  legendPosition = 'bottom',
  legendVerticalAlign = 'middle',
  centerLabel,
  centerValue
}) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const [isLegendVisible, setIsLegendVisible] = useState(showLegend);

  // Calculate total for percentage calculations
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  // Get color for a slice (use custom color if provided, otherwise use palette)
  const getSliceColor = (index: number, entry: PieChartDataPoint): string => {
    if (entry.color) return entry.color;
    return colors[index % colors.length];
  };

  // Format value for display
  const formatValue = (value: number): string => {
    if (showPercentage) {
      const percentage = ((value / total) * 100).toFixed(1);
      return `${percentage}%`;
    }
    if (labelFormatter) return labelFormatter(value);
    return value.toLocaleString();
  };

  // Custom tooltip component with Satoshi font for labels and IBM Plex Sans for numbers
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as PieChartDataPoint;
      const value = tooltipFormatter 
        ? tooltipFormatter(data.value) 
        : data.value.toLocaleString();
      const percentage = ((data.value / total) * 100).toFixed(1);

      return (
        <div className="bg-shades-white border border-shades-light  rounded-sm px-m py-s shadow-md">
          <p className="font-sans text-label-sm text-shades-mid dark:text-shades-black mb-xs">
            {data.label || data.name}
          </p>
          <p 
            className="font-['IBMPlexSans'] text-body-sm dark:text-shades-black font-semiBold"
            style={{ color: payload[0].fill }}
          >
            {dataLabel}: {value}
          </p>
          <p className="font-['IBMPlexSans'] text-label-sm text-shades-mid dark:text-shades-black mt-xs">
            {percentage}%
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom legend component with Satoshi font
  const CustomLegend = ({ payload }: any) => {
    if (!isLegendVisible) return null;
    
    return (
      <div className={twMerge(
        'flex flex-wrap items-center gap-m',
        legendPosition === 'bottom' && 'justify-center mt-m',
        legendPosition === 'top' && 'justify-center mb-m',
        legendPosition === 'left' && 'flex-col items-start',
        legendPosition === 'right' && 'flex-col items-start'
      )}>
        {payload.map((entry: any, index: number) => {
          const dataPoint = data[index];
          const value = formatValue(dataPoint.value);
          
          return (
            <button
              key={`legend-${index}`}
              onClick={() => enableInteractive && setActiveIndex(activeIndex === index ? undefined : index)}
              className={twMerge(
                'flex items-center gap-xs transition-opacity',
                enableInteractive && 'hover:opacity-80 cursor-pointer',
                activeIndex !== undefined && activeIndex !== index && 'opacity-50'
              )}
            >
              <div 
                className="w-m h-xs rounded-xs"
                style={{ backgroundColor: entry.color }}
              />
              <span className="font-sans text-label text-shades-dark ">
                {entry.value}
              </span>
              {showPercentage && (
                <span className="font-['IBMPlexSans'] text-label-sm text-shades-mid">
                  ({value})
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  };

  // Custom label component with IBM Plex Sans for numbers
  const renderCustomLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent < 0.05) return null; // Don't show labels for very small slices

    return (
      <text
        x={x}
        y={y}
        fill="#ffffff"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="font-['IBMPlexSans'] text-sm font-semiBold"
      >
        {showPercentage ? `${(percent * 100).toFixed(0)}%` : props.value}
      </text>
    );
  };

  // Active shape for interactive mode
  const renderActiveShape = (props: any) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill
    } = props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  // Center label for donut charts
  const renderCenterLabel = () => {
    if (!centerLabel && !centerValue) return null;
    if (innerRadius === 0) return null;

    return (
      <>
        <style>{`
          .pie-center-label { fill: rgb(var(--color-text-secondary)); }
          .pie-center-value { fill: rgb(var(--color-text-primary)); }
        `}</style>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="pointer-events-none"
        >
          {centerLabel && (
            <tspan
              x="50%"
              dy="-0.5em"
              className="pie-center-label"
              fontFamily='"Satoshi Variable", "Satoshi", sans-serif'
              fontSize="12"
              fontWeight="500"
            >
              {centerLabel}
            </tspan>
          )}
          {centerValue && (
            <tspan
              x="50%"
              dy="1.5em"
              className="pie-center-value"
              fontFamily='"IBM Plex Sans", sans-serif'
              fontSize="18"
              fontWeight="600"
            >
              {centerValue}
            </tspan>
          )}
        </text>
      </>
    );
  };

  const onPieEnter = (_: any, index: number) => {
    if (enableInteractive) {
      setActiveIndex(index);
    }
  };

  const onPieLeave = () => {
    if (enableInteractive) {
      setActiveIndex(undefined);
    }
  };

  return (
    <div className={twMerge('w-full', className)}>
      {/* Interactive controls */}
      {enableInteractive && (
        <div className="flex items-center gap-m mb-m">
          <button
            onClick={() => setIsLegendVisible(!isLegendVisible)}
            className="px-m py-s bg-shades-extra-light dark:bg-shades-extra-dark rounded-xs font-sans text-label text-shades-dark dark:text-shades-semi-light hover:bg-shades-light dark:hover:bg-shades-dark transition-colors"
          >
            {isLegendVisible ? 'Hide' : 'Show'} Legend
          </button>
          {activeIndex !== undefined && (
            <button
              onClick={() => setActiveIndex(undefined)}
              className="px-m py-s bg-shades-extra-light dark:bg-shades-extra-dark rounded-xs font-sans text-label text-shades-dark dark:text-shades-semi-light hover:bg-shades-light dark:hover:bg-shades-dark transition-colors"
            >
              Clear Selection
            </button>
          )}
        </div>
      )}

      {/* Legend top */}
      {legendPosition === 'top' && isLegendVisible && (
        <CustomLegend payload={data.map((entry, index) => ({
          value: entry.name,
          color: getSliceColor(index, entry)
        }))} />
      )}

      <div className="flex items-center gap-l">
        {/* Legend left */}
        {legendPosition === 'left' && isLegendVisible && (
          <CustomLegend payload={data.map((entry, index) => ({
            value: entry.name,
            color: getSliceColor(index, entry)
          }))} />
        )}

        <ResponsiveContainer width={width as number | `${number}%`} height={height}>
          <RechartsPieChart>
            {showTooltip && (
              <Tooltip content={<CustomTooltip />} />
            )}

            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={showLabels ? renderCustomLabel : false}
              outerRadius={outerRadius}
              innerRadius={innerRadius}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={paddingAngle}
              isAnimationActive={animate}
              {...(enableInteractive && activeIndex !== undefined ? { activeIndex } : {})}
              activeShape={enableInteractive ? renderActiveShape : undefined}
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={getSliceColor(index, entry)}
                />
              ))}
            </Pie>

            {renderCenterLabel()}
          </RechartsPieChart>
        </ResponsiveContainer>

        {/* Legend right */}
        {legendPosition === 'right' && isLegendVisible && (
          <CustomLegend payload={data.map((entry, index) => ({
            value: entry.name,
            color: getSliceColor(index, entry)
          }))} />
        )}
      </div>

      {/* Legend bottom */}
      {legendPosition === 'bottom' && isLegendVisible && (
        <CustomLegend payload={data.map((entry, index) => ({
          value: entry.name,
          color: getSliceColor(index, entry)
        }))} />
      )}
    </div>
  );
};

export default PieChart;

