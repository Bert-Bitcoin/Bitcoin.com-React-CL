import React, { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '../button';
import { Icon } from '../icon';
import type { MenuDropdownProps, MenuDropdownPosition } from './MenuDropdown.types';

export const MenuDropdown: React.FC<MenuDropdownProps> = ({
  trigger,
  sections,
  position = 'auto',
  className,
  menuClassName,
  onOpen,
  onClose
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [computedPosition, setComputedPosition] = useState<MenuDropdownPosition>(position);
  const [isPositioned, setIsPositioned] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Calculate best position based on available space
  useEffect(() => {
    if (!isOpen || position !== 'auto' || !triggerRef.current || !menuRef.current) {
      if (position !== 'auto' && isOpen) {
        // For fixed positions, mark as positioned immediately
        setIsPositioned(true);
      }
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    // Check available space
    const spaceBelow = viewportHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;
    const spaceRight = viewportWidth - triggerRect.right;
    const spaceLeft = triggerRect.left;

    // Determine vertical position
    const preferBottom = spaceBelow >= menuRect.height || spaceBelow > spaceAbove;

    // Determine horizontal position (mobile-first: prefer right-aligned)
    const preferRight = viewportWidth < 768 || spaceRight >= menuRect.width || spaceRight > spaceLeft;

    const newPosition: MenuDropdownPosition = `${preferBottom ? 'bottom' : 'top'}-${preferRight ? 'right' : 'left'}`;
    setComputedPosition(newPosition);
    setIsPositioned(true);
  }, [isOpen, position]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        triggerRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsPositioned(false);
      onClose?.();
    } else {
      setIsOpen(true);
      setIsPositioned(false);
      onOpen?.();
    }
  };

  const handleItemClick = (onClick?: () => void) => {
    onClick?.();
    setIsOpen(false);
    setIsPositioned(false);
    onClose?.();
  };

  const activePosition = position === 'auto' ? computedPosition : position;

  // Position classes based on menu position
  const positionClasses = {
    'bottom-left': 'top-full mt-xs left-0',
    'bottom-right': 'top-full mt-xs right-0',
    'top-left': 'bottom-full mb-xs left-0',
    'top-right': 'bottom-full mb-xs right-0'
  };

  return (
    <div className={twMerge('relative inline-block', className)}>
      {/* Trigger */}
      <div ref={triggerRef} onClick={handleToggle}>
        {trigger || (
          <Button variant="primary" size="md">
            Options
            <Icon type="icon-arrow-down" size="xs" />
          </Button>
        )}
      </div>

      {/* Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className={twMerge(
            'absolute z-50',
            'min-w-[200px]',
            'bg-shades-off-white border border-shades-extra-light',
            'rounded-s',
            'py-xs',
            'transition-all duration-200 ease-out',
            isPositioned
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-1',
            positionClasses[activePosition as keyof typeof positionClasses],
            menuClassName
          )}
        >
          {sections.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              {sectionIndex > 0 && (
                <div className="px-0 py-xs">
                  <div className="h-0 border-t border-shades-extra-light" />
                </div>
              )}
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => !item.disabled && handleItemClick(item.onClick)}
                  disabled={item.disabled}
                  className={twMerge(
                    'flex items-center gap-s',
                    'w-full px-m py-s',
                    'bg-shades-off-white',
                    'font-[\'Satoshi_Variable\'] font-medium text-[14px] leading-none',
                    'text-left',
                    'transition-colors',
                    item.variant === 'danger'
                      ? 'text-alerts-100'
                      : 'text-shades-almost-black',
                    item.disabled
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-shades-extra-light cursor-pointer'
                  )}
                >
                  {item.icon && (
                    <Icon
                      type={item.icon}
                      size="xs"
                      className={item.variant === 'danger' ? 'text-alerts-100' : 'text-shades-mid'}
                    />
                  )}
                  <span>{item.label}</span>
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

MenuDropdown.displayName = 'MenuDropdown';

