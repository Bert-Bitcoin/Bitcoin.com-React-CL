import React, { useState } from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { twMerge } from 'tailwind-merge';
import type { BarChartProps, BarChartDataPoint } from './BarChart.types';

// Default sample data
const defaultData: BarChartDataPoint[] = [
  { category: 'Mon', value: 400 },
  { category: 'Tue', value: 300 },
  { category: 'Wed', value: 600 },
  { category: 'Thu', value: 450 },
  { category: 'Fri', value: 700 },
  { category: 'Sat', value: 350 },
  { category: 'Sun', value: 500 }
];

/**
 * BarChart component - A full-featured bar chart with customizable styling
 * Built with Recharts following the design system
 */
export const BarChart: React.FC<BarChartProps> = ({
  data = defaultData,
  color = '#4169e1', // primary-100 as default
  width = '100%',
  height = 300,
  showTooltip = true,
  showGrid = false,
  showYAxis = true,
  showXAxis = true,
  showLegend = false,
  animate = true,
  className,
  barRadius = 4,
  enableInteractive = false,
  yAxisFormatter,
  tooltipFormatter,
  dataLabel = 'Value',
  horizontal = false,
  stacked = false
}) => {
  const [isLegendVisible, setIsLegendVisible] = useState(showLegend);

  const barColor = color;

  // Custom tooltip component with Satoshi font
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as BarChartDataPoint;
      const value = tooltipFormatter 
        ? tooltipFormatter(data.value) 
        : data.value.toLocaleString();

      return (
        <div className="bg-shades-white  border border-shades-light rounded-sm px-m py-s shadow-md">
          <p className="font-sans text-label-sm text-shades-mi mb-xs text-text-primary">
            {data.label || data.category}
          </p>
          <p 
            className="font-sans text-body-sm font-semiBold"
            style={{ color: barColor }}
          >
            {dataLabel}: {value}
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom legend component with Satoshi font
  const CustomLegend = () => {
    if (!isLegendVisible) return null;
    
    return (
      <div className="flex items-center justify-center gap-m mt-m">
        <button
          onClick={() => setIsLegendVisible(false)}
          className="flex items-center gap-xs hover:opacity-80 transition-opacity"
        >
          <div 
            className="w-m h-xs rounded-xs"
            style={{ backgroundColor: barColor }}
          />
          <span className="font-sans text-label text-shades-dark dark:text-shades-semi-light">
            {dataLabel}
          </span>
        </button>
      </div>
    );
  };

  // Format Y-axis values
  const formatYAxis = (value: number) => {
    if (yAxisFormatter) return yAxisFormatter(value);
    return value.toLocaleString();
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
        </div>
      )}

      <ResponsiveContainer width={width as number | `${number}%`} height={height}>
        <RechartsBarChart
          data={data}
          margin={{ top: 10, right: 10, left: horizontal ? 10 : 0, bottom: 0 }}
          layout={horizontal ? 'vertical' : 'horizontal'}
          barCategoryGap="20%"
        >
          {showGrid && (
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#e7e7ef"
              className="dark:stroke-shades-dark"
            />
          )}

          {showXAxis && (
            <XAxis
              type={horizontal ? 'number' : 'category'}
              dataKey={horizontal ? undefined : 'category'}
              tick={{ 
                fill: '#87858e',
                fontFamily: '"Satoshi Variable", "Satoshi", sans-serif',
                fontSize: 12,
                fontWeight: 500
              }}
              tickLine={false}
              axisLine={false}
              dy={horizontal ? 0 : 10}
              tickFormatter={horizontal ? formatYAxis : undefined}
            />
          )}

          {showYAxis && (
            <YAxis
              type={horizontal ? 'category' : 'number'}
              dataKey={horizontal ? 'category' : undefined}
              tick={{ 
                fill: '#87858e',
                fontFamily: '"Satoshi Variable", "Satoshi", sans-serif',
                fontSize: 12,
                fontWeight: 500
              }}
              tickFormatter={horizontal ? undefined : formatYAxis}
              tickLine={false}
              axisLine={false}
              dx={horizontal ? 0 : -10}
            />
          )}

          {showTooltip && (
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            />
          )}

          {isLegendVisible && !enableInteractive && (
            <Legend content={<CustomLegend />} />
          )}

          <Bar
            dataKey="value"
            fill={barColor}
            fillOpacity={1}
            radius={horizontal ? [0, barRadius, barRadius, 0] : [barRadius, barRadius, 0, 0]}
            isAnimationActive={animate}
            maxBarSize={100}
            minPointSize={5}
          />
        </RechartsBarChart>
      </ResponsiveContainer>

      {/* Custom legend when interactive is enabled */}
      {enableInteractive && <CustomLegend />}
    </div>
  );
};

export default BarChart;

