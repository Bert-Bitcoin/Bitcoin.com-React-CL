import { useRef, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../icon/Icon';
import type { TabsProps } from './Tabs.types';

export const Tabs = ({
  tabs,
  activeTab,
  onChange,
  align = 'left',
  className,
  tabClassName,
  ariaLabel
}: TabsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScroll, setShowScroll] = useState(false);

  // Check if horizontal scroll is needed
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowScroll(scrollWidth > clientWidth);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [tabs]);

  // Get alignment classes for the container
  const getAlignmentClasses = () => {
    switch (align) {
      case 'center':
        return 'justify-center';
      case 'stretch':
        return '';
      case 'left':
      default:
        return 'justify-start';
    }
  };

  return (
    <div
      className={twMerge(
        'relative w-full [box-shadow:inset_0_-1px_0_#77777766]',
        className
      )}
    >
      <div
        ref={scrollContainerRef}
        className={twMerge(
          'flex items-center',
          getAlignmentClasses(),
          showScroll && 'overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
        )}
        role="tablist"
        aria-label={ariaLabel}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          const isDisabled = tab.disabled;
          const hasIcon = !!tab.icon;
          const hasBadge = tab.badge !== undefined && tab.badge !== null;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-disabled={isDisabled}
              disabled={isDisabled}
              onClick={() => !isDisabled && onChange(tab.id)}
              className={twMerge(
                // Base styles
                'flex items-center justify-center gap-s',
                'px-m py-3',
                'font-satoshi font-medium text-base leading-none',
                'transition-colors duration-150',
                'whitespace-nowrap',
                'border-b-2 border-transparent',
                'focus:outline-none focus:ring-2 focus:ring-primary-100/30 focus:ring-offset-2',
                // Stretched alignment
                align === 'stretch' && 'flex-1',
                // Active state
                isActive && 'border-primary-100 text-shades-black',
                // Inactive state
                !isActive && 'text-shades-dark',
                // Hover state (inactive only)
                !isActive &&
                  !isDisabled &&
                  'hover:text-text-primary hover:border-shades-semi-light',
                // Disabled state
                isDisabled && 'opacity-50 cursor-not-allowed',
                tabClassName
              )}
            >
              {/* Icon */}
              {hasIcon && tab.icon && (
                <Icon
                  type={tab.icon}
                  size="sm"
                  className={twMerge(
                    'flex-shrink-0',
                    isActive && 'text-primary-100',
                    !isActive && 'text-shades-semi-dark',
                    !isActive && !isDisabled && 'group-hover:text-text-primary'
                  )}
                  ariaHidden
                />
              )}

              {/* Label */}
              <span>{tab.label}</span>

              {/* Badge */}
              {hasBadge && (
                <span
                  className={twMerge(
                    'flex items-center justify-center',
                    'h-4 px-1',
                    'rounded-full',
                    'font-ibm-plex-sans font-semibold text-[10px] leading-[13px]',
                    'text-white',
                    isActive && 'bg-primary-100/50',
                    !isActive && 'bg-shades-semi-light',
                  )}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

Tabs.displayName = 'Tabs';

