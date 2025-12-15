import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../button';
import { Logo } from '../logo';
import { LogoMark } from '../logomark';
import { Icon } from '../icon';
import { IconButton } from '../button';

export type HeaderStyle = 'light' | 'gray' | 'dark';

export interface HeaderMenuItem {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

export interface HeaderProps {
  /**
   * Style variant of the header
   * @default 'light'
   */
  style?: HeaderStyle;
  /**
   * Menu items to display in the navigation pill
   */
  menuItems?: HeaderMenuItem[];
  /**
   * Callback when the action button is clicked
   */
  onActionClick?: () => void;
  /**
   * Label for the action button
   */
  actionLabel?: string;
  /**
   * Callback when the mobile menu toggle is clicked
   */
  onMenuToggle?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

const styleClasses: Record<HeaderStyle, {
  bg: string;
  navBg: string;
  navActiveText: string;
  navInactiveText: string;
  navHoverBg: string;
  mobileMenuText: string;
  mobileMenuActiveText: string;
}> = {
  light: {
    bg: 'bg-shades-white',
    navBg: 'bg-shades-almost-black dark:bg-shades-light',
    navActiveText: 'text-shades-almost-black dark:text-shades-white',
    navInactiveText: 'text-white dark:text-shades-almost-black',
    navHoverBg: 'hover:bg-shades-dark dark:hover:bg-shades-mid',
    mobileMenuText: 'text-shades-almost-black dark:text-shades-white',
    mobileMenuActiveText: 'text-primary-100'
  },
  gray: {
    bg: 'bg-shades-extra-light',
    navBg: 'bg-shades-almost-black dark:bg-shades-white',
    navActiveText: 'text-shades-almost-black dark:text-shades-white',
    navInactiveText: 'text-white dark:text-shades-almost-black',
    navHoverBg: 'hover:bg-shades-dark dark:hover:bg-shades-mid',
    mobileMenuText: 'text-shades-almost-black dark:text-shades-white',
    mobileMenuActiveText: 'text-primary-100'
  },
  dark: {
    bg: 'bg-shades-black dark:bg-shades-white',
    navBg: 'bg-shades-extra-dark dark:bg-shades-light',
    navActiveText: 'text-shades-black dark:text-shades-white',
    navInactiveText: 'text-shades-light dark:text-shades-black',
    navHoverBg: 'hover:bg-shades-mid dark:hover:bg-shades-dark',
    mobileMenuText: 'text-white dark:text-shades-almost-black',
    mobileMenuActiveText: 'text-primary-100'
  }
};

export const Header = ({
  style = 'light',
  menuItems = [
    { label: 'Label', href: '#', active: true },
    { label: 'Label', href: '#' },
    { label: 'Label', href: '#' },
    { label: 'Label', href: '#' },
    { label: 'Label', href: '#' },
    { label: 'Label', href: '#' }
  ],
  onActionClick,
  actionLabel = 'Action',
  onMenuToggle,
  className
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const styles = styleClasses[style];

  // Determine breakpoint based on number of menu items
  // 1-4 items: md breakpoint (768px)
  // 5-6 items: lg breakpoint (1024px)
  // 7+ items: xl breakpoint (1280px)
  const getBreakpointClasses = () => {
    const itemCount = menuItems.length;
    if (itemCount <= 4) {
      return {
        desktop: 'md:flex',
        hideOnDesktop: 'md:hidden',
        tablet: 'sm:flex md:hidden',
        hideOnTablet: 'sm:hidden',
        mobile: 'sm:hidden'
      };
    } else if (itemCount <= 6) {
      return {
        desktop: 'lg:flex',
        hideOnDesktop: 'lg:hidden',
        tablet: 'md:flex lg:hidden',
        hideOnTablet: 'md:hidden',
        mobile: 'md:hidden'
      };
    } else {
      return {
        desktop: 'xl:flex',
        hideOnDesktop: 'xl:hidden',
        tablet: 'lg:flex xl:hidden',
        hideOnTablet: 'lg:hidden',
        mobile: 'lg:hidden'
      };
    }
  };

  const breakpoints = getBreakpointClasses();

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
    onMenuToggle?.();
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={twMerge('relative w-full transition-all duration-300', styles.bg, className)}>
      {/* Desktop Layout */}
      <div className={twMerge('hidden items-center justify-center px-xl py-l w-full', breakpoints.desktop)}>
        <div className="flex items-center justify-between w-full max-w-[1240px] relative">
          {/* Left: Logo */}
          <div className="w-[167px] h-[35px]">
            <Logo theme={(style === 'dark') ? 'dark' : 'auto'} size="md" className="w-full h-full" />
          </div>

          {/* Center: Navigation Pill */}
          <nav className={twMerge('absolute left-1/2 -translate-x-1/2 rounded-[40px] flex items-center gap-xs h-[35px] px-xs', styles.navBg)}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className={twMerge(
                  'px-s h-[27px] flex items-center rounded-[16px] font-medium text-[13px] leading-tight transition-colors duration-200',
                  item.active
                    ? `bg-white ${styles.navActiveText}`
                    : `${styles.navInactiveText} ${styles.navHoverBg}`
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-s">
            <Button variant="secondary" size="md" onClick={onActionClick}>
              {actionLabel}
            </Button>
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className={twMerge('hidden flex-col items-center py-l w-full', breakpoints.tablet)}>
        <div className="flex items-start justify-between w-full px-m">
          {/* Left: Logo Mark */}
          <LogoMark size="md" className="w-[35px] h-[35px]" />

          {/* Center: Navigation Pill */}
          <nav className={twMerge('rounded-[40px] flex items-center justify-center gap-xs flex-wrap h-[35px] px-xs ml-[24px]', styles.navBg)}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className={twMerge(
                  'px-s h-[27px] flex items-center rounded-[16px] font-medium text-[13px] leading-tight transition-colors duration-200',
                  item.active
                    ? `bg-white ${styles.navActiveText}`
                    : `${styles.navInactiveText} ${styles.navHoverBg}`
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-s">
            <Button variant="secondary" size="md" onClick={onActionClick}>
              {actionLabel}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className={twMerge('flex items-center justify-between px-m py-m w-full', breakpoints.mobile)}>
        {/* Left: Logo */}
        <div className="w-[167px] h-[35px]">
        <Logo theme="auto" size="md" className="w-full h-full" />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-s">
          <div className="w-[35px] h-[35px] rounded-full bg-primary-100 flex items-center justify-center">
            <IconButton
              icon={<Icon type="icon-menu-2" className="text-white" />}
              variant="secondary"
              size="md"
              onClick={handleMenuToggle}
              aria-label="Menu"
              className="bg-secondary-100 hover:bg-secondary-50 border-none"
            />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={twMerge('fixed inset-0 z-50 px-m py-m flex flex-col', breakpoints.mobile, styles.bg)}>
          {/* Header */}
          <div className="flex items-center justify-between shrink-0 mb-m">
            <div className="w-[167px] h-[35px]">
              <Logo theme="auto" size="md" className="w-full h-full" />
            </div>
            <div className="w-[35px] h-[35px] rounded-full bg-secondary-100 flex items-center justify-center">
              <IconButton
                icon={<Icon type="icon-close---small" className="text-white" />}
                variant="secondary"
                size="md"
                onClick={handleCloseMenu}
                aria-label="Close Menu"
                className="bg-secondary-100 hover:bg-secondary-50 border-none"
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="flex-1 flex flex-col">
            {/* Nav Items */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-s">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                    handleCloseMenu();
                  }}
                  className={twMerge(
                    'font-medium text-heading-sm text-center transition-colors duration-200 text-[20px]',
                    item.active
                      ? styles.mobileMenuActiveText
                      : `${styles.mobileMenuText} hover:${styles.mobileMenuActiveText}`
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Action Button */}
            <div className="shrink-0 w-full mt-m">
              <Button variant="secondary" size="md" fullWidth onClick={() => { onActionClick?.(); handleCloseMenu(); }}>
                {actionLabel}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

Header.displayName = 'Header';

