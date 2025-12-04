import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import type { DescriptionListProps } from './DescriptionList.types';

/**
 * DescriptionList - A component for displaying labeled data in key-value pairs
 * 
 * Automatically switches between large (side-by-side) and compact (stacked) layouts
 * based on container width. Based on the Bitcoin.com design system.
 */
export const DescriptionList = ({
  items,
  variant = 'responsive',
  breakpoint = 500,
  className
}: DescriptionListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    if (variant !== 'responsive') {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        setIsCompact(width < breakpoint);
      }
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [variant, breakpoint]);

  // Determine the actual layout to use
  const isCompactLayout = variant === 'compact' || (variant === 'responsive' && isCompact);

  return (
    <div
      ref={containerRef}
      className={twMerge(
        'flex flex-col w-full',
        className
      )}
    >
      {items.map((item, index) => (
        <div key={item.id}>
          {/* Description List Item */}
          <div className="flex items-start justify-center p-m w-full">
            <div
              className={twMerge(
                'flex gap-xs w-full',
                isCompactLayout ? 'flex-col' : 'flex-row'
              )}
            >
              {/* Label */}
              <div
                className={twMerge(
                  "font-['Satoshi_Variable'] font-medium text-[14px] leading-none text-shades-black",
                  isCompactLayout ? 'w-full' : 'w-[220px] flex-shrink-0'
                )}
              >
                {item.label}
              </div>

              {/* Value */}
              <div
                className={twMerge(
                  "font-medium text-[14px] leading-normal text-shades-dark",
                  item.isNumeric
                    ? "font-['IBMPlexSans'] font-semibold leading-4"
                    : "font-['Satoshi_Variable']",
                  isCompactLayout ? 'w-full' : 'flex-1'
                )}
              >
                {item.value}
              </div>
            </div>
          </div>

          {/* Divider - don't show after last item */}
          {index < items.length - 1 && (
            <div className="px-m">
              <div className="h-px w-full bg-shades-extra-light dark:bg-shades-light" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

DescriptionList.displayName = 'DescriptionList';

