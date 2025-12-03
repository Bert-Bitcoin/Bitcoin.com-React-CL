import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import type { CompactLineChartProps } from './CompactLineChart.types';
import { twMerge } from 'tailwind-merge';

// Default sample data to match Figma design
const defaultPositiveData = [
  { value: 20 },
  { value: 35 },
  { value: 25 },
  { value: 45 },
  { value: 30 },
  { value: 50 },
  { value: 40 },
  { value: 60 },
  { value: 55 },
  { value: 70 }
];

const defaultNegativeData = [
  { value: 70 },
  { value: 55 },
  { value: 60 },
  { value: 40 },
  { value: 50 },
  { value: 30 },
  { value: 45 },
  { value: 25 },
  { value: 35 },
  { value: 20 }
];

/**
 * CompactLineChart component - A compact sparkline chart for displaying trends
 * Used as decoration on cards and other UI elements
 */
export const CompactLineChart: React.FC<CompactLineChartProps> = ({
  trend = 'positive',
  data,
  width = 220,
  height = 50,
  className
}) => {
  // Use provided data or default based on trend
  const chartData = data || (trend === 'positive' ? defaultPositiveData : defaultNegativeData);
  
  // Color tokens from design system
  const lineColor = trend === 'positive' ? '#2fb790' : '#e84142'; // success-100 : alerts-100
  const gradientId = `gradient-${trend}`;

  return (
    <div 
      className={twMerge('inline-block pointer-events-none', className)}
      style={{ width, height }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={lineColor} stopOpacity={0.3} />
              <stop offset="95%" stopColor={lineColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={lineColor}
            strokeWidth={2}
            fill={`url(#${gradientId})`}
            isAnimationActive={false}
            activeDot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompactLineChart;
