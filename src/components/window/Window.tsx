import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../icon';
import type { WindowProps } from './Window.types';

export const Window = ({
  open,
  onClose,
  title,
  children,
  showCloseButton = true,
  closeOnBackdropClick = true,
  className,
  contentClassName
}: WindowProps) => {
  // Handle ESC key to close window
  useEffect(() => {
    if (!open || !onClose) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  // Prevent body scroll when window is open
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-shades-black/50 dark:bg-shades-white/50 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="window-title"
    >
      <div
        className={twMerge(
          'relative bg-shades-white dark:bg-shades-white border border-shades-light dark:border-shades-extra-light rounded-md shadow-xl',
          'animate-bounceIn',
          'flex flex-col',
          'w-full max-w-[800px]',
          'max-h-[90vh]',
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center gap-s p-m border-b border-shades-light dark:border-shades-extra-light shrink-0">
          <h2
            id="window-title"
            className="flex-1 font-['Elza_Narrow'] font-black text-[16px] leading-none text-shades-black uppercase flex items-center"
          >
            {title}
          </h2>

          {/* Close button */}
          {showCloseButton && onClose && (
            <button
              onClick={onClose}
              className="w-4 h-4 flex items-center justify-center text-shades-dark hover:text-shades-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 rounded flex-shrink-0"
              aria-label="Close window"
            >
              <Icon type="icon-close---small" size="sm" ariaHidden />
            </button>
          )}
        </div>

        {/* Content - scrollable */}
        <div
          className={twMerge(
            'flex-1 overflow-y-auto overflow-x-hidden',
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Window.displayName = 'Window';

