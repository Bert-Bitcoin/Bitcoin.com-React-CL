import { twMerge } from 'tailwind-merge';

import type { TabsProps } from './Tabs.types';

export const Tabs = ({
  tabs,
  activeTab,
  onChange,
  className,
  tabClassName,
  fullWidth = false
}: TabsProps) => {
  return (
    <div
      className={twMerge(
        'flex gap-s items-center',
        'px-m py-0 h-6',
        fullWidth && 'w-full',
        className
      )}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        const isDisabled = tab.disabled;

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
              'flex items-center justify-center gap-xs',
              'py-xs',
              'rounded-pill',
              'font-medium text-[12px] leading-none',
              'transition-colors duration-150',
              'whitespace-nowrap',
              'focus:outline-none focus:ring-2 focus:ring-primary-100/30',
              // Active state (extra 1px padding to compensate for no border)
              isActive && 'bg-primary-100 text-white px-[9px]',
              // Inactive state
              !isActive && 'bg-surface border border-shades-light text-shades-extra-dark px-s',
              // Hover state (inactive only)
              !isActive && !isDisabled && 'hover:bg-shades-extra-light hover:border-shades-mid',
              // Dark mode
              !isActive && 'dark:bg-shades-light dark:border-shades-extra-light dark:text-shades-almost-black',
              !isActive && !isDisabled && 'dark:hover:bg-shades-extra-dark dark:hover:text-shades-white',
              // Disabled state
              isDisabled && 'opacity-50 cursor-not-allowed',
              // Full width
              fullWidth && 'flex-1',
              tabClassName
            )}
          >
            {tab.icon && <span className="flex items-center justify-center">{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

Tabs.displayName = 'Tabs';

