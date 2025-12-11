import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../button';
import { Logo } from '../logo';
import { LogoMark } from '../logomark';
import { Icon } from '../icon';
import { IconButton } from '../button';

export interface HeaderMenuItem {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

export interface HeaderProps {
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

export const Header = ({
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

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
    onMenuToggle?.();
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={twMerge('relative w-full bg-background transition-all duration-300', className)}>
      {/* Desktop Layout (lg breakpoint) */}
      <div className="hidden md:flex items-center justify-center px-xl py-l w-full">
        <div className="flex items-center justify-between w-full max-w-[1240px] relative">
          {/* Left: Logo */}
          <div className="w-[167px] h-[35px]">
            <Logo theme="auto" size="md" className="w-full h-full" />
          </div>

          {/* Center: Navigation Pill */}
          <nav className="absolute left-1/2 -translate-x-1/2 bg-shades-almost-black rounded-[40px] flex items-center gap-xs h-[35px] px-xs">
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
                    ? 'bg-white text-shades-almost-black dark:bg-shades-light dark:text-white'
                    : 'text-white hover:bg-shades-dark dark:text-black dark:hover:bg-shades-mid'
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

      {/* Tablet Layout (md breakpoint) */}
      <div className="hidden sm:flex md:hidden flex-col items-center py-l w-full">
        <div className="flex items-start justify-between w-full px-m">
          {/* Left: Logo Mark */}
          <LogoMark size="md" className="w-[35px] h-[35px]" />

          {/* Center: Navigation Pill */}
          <nav className="bg-shades-almost-black rounded-[40px] flex items-center justify-center gap-xs flex-wrap max-w-[400px] h-[35px] px-xs ml-[24px]">
            {menuItems.slice(0, 6).map((item, index) => (
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
                    ? 'bg-white text-shades-almost-black dark:bg-shades-light dark:text-white'
                    : 'text-white hover:bg-shades-dark dark:text-black dark:hover:bg-shades-extra-dark'
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

      {/* Mobile Layout (default) */}
      <div className="flex items-center justify-between px-m py-m w-full sm:hidden">
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
        <div className="fixed inset-0 z-50 bg-background px-m py-m flex flex-col sm:hidden">
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
                      ? 'text-primary-100 dark:text-primary-100'
                      : 'text-shades-almost-black hover:text-primary-100 dark:text-white dark:hover:text-primary-100'
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

