import { twMerge } from 'tailwind-merge';

import { Icon } from '../icon/Icon';
import { Logo } from '../logo/Logo';
import { LogoMark } from '../logomark/LogoMark';
import type { SidebarMenuItem, SidebarProps } from './Sidebar.types';

const SidebarMenuItemComponent = ({
  item,
  variant
}: {
  item: SidebarMenuItem;
  variant: 'desktop' | 'tablet' | 'mobile';
}) => {
  const { label, icon, isActive, badgeCount, onClick } = item;

  // Desktop variant - full width with label
  if (variant === 'desktop') {
    return (
      <button
        onClick={onClick}
        className={twMerge(
          'flex items-center gap-2 w-full rounded-sm p-2 overflow-clip',
          'transition-colors duration-200',
          isActive
            ? 'bg-warning-10 dark:bg-warning-100/10'
            : 'bg-shades-off-white dark:bg-shades-off-white text-shades-extra-dark dark:text-shades-extra-dark hover:bg-shades-extra-light dark:hover:bg-shades-extra-light'
        )}
      >
        <Icon
          type={icon}
          size="lg"
          className={twMerge(
            'flex-shrink-0',
            isActive ? 'text-warning-100' : 'text-shades-semi-dark dark:text-shades-semi-dark'
          )}
          ariaHidden
        />
        <span
          className={twMerge(
            'flex-1 text-base font-medium text-[14px] leading-none text-left',
            "font-['Satoshi_Variable']"
          )}
        >
          {label}
        </span>
        {badgeCount !== undefined && badgeCount > 0 && (
          <span
            className={twMerge(
              'flex items-center justify-center h-[18px] px-1 rounded-lg bg-shades-semi-light dark:bg-shades-semi-light min-w-[26px]',
              'font-semibold text-xs leading-none text-white',
              "font-['IBMPlexSans']"
            )}
          >
            {badgeCount}
          </span>
        )}
      </button>
    );
  }

  // Tablet variant - icon only with optional badge dot
  if (variant === 'tablet') {
    return (
      <button
        onClick={onClick}
        className={twMerge(
          'relative flex items-center justify-center w-full rounded-sm p-2 overflow-clip',
          'transition-colors duration-200',
          isActive
            ? 'bg-warning-10 dark:bg-warning-100/10'
            : 'bg-shades-off-white dark:bg-shades-off-white hover:bg-shades-extra-light dark:hover:bg-shades-extra-light'
        )}
      >
        <Icon
          type={icon}
          size="lg"
          className={twMerge(
            isActive ? 'text-warning-100' : 'text-shades-semi-dark dark:text-shades-semi-dark'
          )}
          ariaLabel={label}
        />
        {badgeCount !== undefined && badgeCount > 0 && (
          <span
            className={twMerge(
              'absolute top-1 left-[24px] w-3 h-3 rounded-lg',
              'bg-warning-100 border-2 border-shades-off-white dark:border-shades-off-white'
            )}
            aria-label={`${badgeCount} notifications`}
          />
        )}
      </button>
    );
  }

  // Mobile variant - icon and label stacked vertically
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'relative flex flex-col items-center justify-center flex-1 min-w-0 rounded-sm p-1 overflow-clip',
        'transition-colors duration-200',
        isActive
          ? 'bg-warning-10 dark:bg-warning-100/10'
          : 'bg-shades-off-white dark:bg-shades-off-white'
      )}
    >
      <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0">
        <Icon
          type={icon}
          size="lg"
          className={twMerge(
            isActive ? 'text-warning-100' : 'text-shades-semi-dark dark:text-shades-semi-dark'
          )}
          ariaHidden
        />
        {badgeCount !== undefined && badgeCount > 0 && (
          <span
            className={twMerge(
              'absolute -top-0.5 right-[-3px] w-3 h-3 rounded-lg',
              'bg-warning-100 border-2 border-shades-off-white dark:border-shades-off-white'
            )}
            aria-label={`${badgeCount} notifications`}
          />
        )}
      </div>
      <span
        className={twMerge(
          'text-xs font-medium leading-none text-center w-full min-w-0 mt-0.5',
          "font-['Satoshi_Variable']",
          isActive
            ? 'text-shades-almost-black dark:text-shades-almost-black'
            : 'text-shades-dark dark:text-shades-dark'
        )}
      >
        {label}
      </span>
    </button>
  );
};

export const Sidebar = ({
  variant = 'desktop',
  items,
  className,
  showLogo = true
}: SidebarProps) => {
  // Desktop variant
  if (variant === 'desktop') {
    return (
      <div
        className={twMerge(
          'flex flex-col h-full min-h-full w-[220px] bg-shades-off-white dark:bg-off-white',
          'border-r border-shades-light dark:border-shades-light',
          'p-6',
          className
        )}
      >
        {showLogo && (
          <div className="w-full mb-1">
            <Logo size="lg" theme="auto" />
          </div>
        )}
        <nav className="flex flex-col flex-1 gap-1 py-4">
          {items.map((item) => (
            <SidebarMenuItemComponent key={item.id} item={item} variant="desktop" />
          ))}
        </nav>
      </div>
    );
  }

  // Tablet variant
  if (variant === 'tablet') {
    return (
      <div
        className={twMerge(
          'flex flex-col h-full min-h-full w-[88px] bg-shades-off-white dark:bg-off-white',
          'border-r border-shades-light dark:border-shades-light',
          'p-6 items-center justify-start',
          className
        )}
      >
        {showLogo && (
          <div className="flex-shrink-0">
            <LogoMark size="md" />
          </div>
        )}
        <nav className="flex flex-col flex-1 w-full gap-1 py-4">
          {items.map((item) => (
            <SidebarMenuItemComponent key={item.id} item={item} variant="tablet" />
          ))}
        </nav>
      </div>
    );
  }

  // Mobile variant (bottom tab bar)
  return (
    <div
      className={twMerge(
        'flex items-center justify-center w-full min-w-full h-14 bg-shades-off-white dark:bg-off-white',
        'border-t border-shades-light dark:border-shades-light',
        'px-2 py-1',
        className
      )}
    >
      <nav className="flex items-center justify-center w-full min-w-full h-full gap-0">
        {items.map((item) => (
          <SidebarMenuItemComponent key={item.id} item={item} variant="mobile" />
        ))}
      </nav>
    </div>
  );
};

Sidebar.displayName = 'Sidebar';

