import React, { useState } from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
  Brush
} from 'recharts';
import { twMerge } from 'tailwind-merge';
import type { LineChartProps, LineChartDataPoint } from './LineChart.types';

// Default sample data matching Figma design
const defaultData: LineChartDataPoint[] = [
  { date: 'Jun.5', value: 20 },
  { date: 'Jun.6', value: 35 },
  { date: 'Jun.7', value: 25 },
  { date: 'Jun.8', value: 45 },
  { date: 'Jun.9', value: 30 },
  { date: 'Jun.10', value: 50 },
  { date: 'Jun.12', value: 40 }
];

/**
 * LineChart component - A full-featured line chart with gradient area fill
 * Based on Figma design with enhanced recharts functionality
 */
export const LineChart: React.FC<LineChartProps> = ({
  data = defaultData,
  variant = 'positive',
  customColor,
  width = '100%',
  height = 260,
  showTooltip = true,
  showGrid = false,
  showYAxis = false,
  showXAxis = true,
  showLegend = false,
  animate = true,
  className,
  showArea = true,
  strokeWidth = 2,
  enableInteractive = false,
  yAxisFormatter,
  tooltipFormatter,
  dataLabel = 'Value'
}) => {
  const [isLegendVisible, setIsLegendVisible] = useState(showLegend);

  // Determine line color based on variant or custom color
  const getLineColor = () => {
    if (customColor) return customColor;
    
    switch (variant) {
      case 'positive':
        return '#2fb790'; // success-100
      case 'negative':
        return '#e84142'; // alerts-100
      case 'custom':
        return '#ff9500'; // warning-100 / secondary-100
      default:
        return '#2fb790';
    }
  };

  const lineColor = getLineColor();
  const gradientId = `gradient-${variant}-${Math.random().toString(36).substr(2, 9)}`;

  // Custom tooltip component with Satoshi font
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as LineChartDataPoint;
      const value = tooltipFormatter 
        ? tooltipFormatter(data.value) 
        : data.value.toLocaleString();

      return (
        <div className="bg-shades-white dark:bg-shades-almost-black border border-shades-light dark:border-shades-dark rounded-sm px-m py-s shadow-md">
          <p className="font-sans text-label-sm text-shades-mid dark:text-shades-semi-light mb-xs">
            {data.label || data.date}
          </p>
          <p 
            className="font-sans text-body-sm font-semiBold"
            style={{ color: lineColor }}
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
            style={{ backgroundColor: lineColor }}
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

  const ChartComponent = showArea ? AreaChart : RechartsLineChart;

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
        <ChartComponent
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={lineColor} stopOpacity={0.3} />
              <stop offset="95%" stopColor={lineColor} stopOpacity={0} />
            </linearGradient>
          </defs>

          {showGrid && (
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#e7e7ef"
              className="dark:stroke-shades-dark"
            />
          )}

          {showXAxis && (
            <XAxis
              dataKey="date"
              tick={{ 
                fill: '#87858e',
                fontFamily: '"Satoshi Variable", "Satoshi", sans-serif',
                fontSize: 12,
                fontWeight: 500
              }}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
          )}

          {showYAxis && (
            <YAxis
              tick={{ 
                fill: '#87858e',
                fontFamily: '"Satoshi Variable", "Satoshi", sans-serif',
                fontSize: 12,
                fontWeight: 500
              }}
              tickFormatter={formatYAxis}
              tickLine={false}
              axisLine={false}
              dx={-10}
            />
          )}

          {showTooltip && (
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ stroke: lineColor, strokeWidth: 1, strokeDasharray: '3 3' }}
            />
          )}

          {isLegendVisible && !enableInteractive && (
            <Legend content={<CustomLegend />} />
          )}

          {showArea ? (
            <Area
              type="monotone"
              dataKey="value"
              stroke={lineColor}
              strokeWidth={strokeWidth}
              fill={`url(#${gradientId})`}
              isAnimationActive={animate}
              dot={{ fill: lineColor, r: 4 }}
              activeDot={{ r: 6, fill: lineColor, strokeWidth: 2, stroke: '#ffffff' }}
            />
          ) : (
            <Line
              type="monotone"
              dataKey="value"
              stroke={lineColor}
              strokeWidth={strokeWidth}
              isAnimationActive={animate}
              dot={{ fill: lineColor, r: 4 }}
              activeDot={{ r: 6, fill: lineColor, strokeWidth: 2, stroke: '#ffffff' }}
            />
          )}

          {enableInteractive && (
            <Brush
              dataKey="date"
              height={30}
              stroke={lineColor}
              fill="#f0f0f5"
              className="dark:fill-shades-extra-dark"
              travellerWidth={8}
            />
          )}
        </ChartComponent>
      </ResponsiveContainer>

      {/* Custom legend when interactive is enabled */}
      {enableInteractive && <CustomLegend />}
    </div>
  );
};

export default LineChart;

