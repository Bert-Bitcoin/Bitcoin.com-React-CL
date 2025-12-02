import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '../button';
import { Icon } from '../icon';
import type { ModalProps } from './Modal.types';

export const Modal = ({
  open,
  onClose,
  type = 'confirm',
  style = 'portrait',
  size = 'default',
  title,
  description,
  illustration,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  showCloseButton = true,
  className,
  closeOnBackdropClick = true
}: ModalProps) => {
  // Handle ESC key to close modal
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

  // Prevent body scroll when modal is open
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

  const handleConfirm = () => {
    onConfirm?.();
    onClose?.();
  };

  const handleCancel = () => {
    onCancel?.();
    onClose?.();
  };

  const isPortrait = style === 'portrait';
  const isCompact = size === 'compact';
  const isConfirm = type === 'confirm';

  // Modal container classes based on style and size
  const modalClasses = twMerge(
    'relative bg-shades-white border border-shades-light rounded-md shadow-xl',
    'animate-bounceIn', // Add bounce animation
    isPortrait
      ? twMerge(
          'flex flex-col items-center gap-m p-l',
          isCompact ? 'w-full max-w-[280px] gap-s' : 'w-full max-w-[370px]'
        )
      : twMerge(
          'flex gap-l p-l',
          // On small screens, switch to portrait layout
          'flex-col items-center sm:flex-row sm:items-start',
          isCompact
            ? 'w-full max-w-[280px] sm:max-w-[434px]'
            : 'w-full max-w-[370px] sm:max-w-[471px]'
        ),
    className
  );

  // Illustration size based on style and size
  const illustrationSize = isPortrait
    ? isCompact
      ? 'w-16 h-16'
      : 'w-20 h-20'
    : isCompact
      ? 'w-12 h-12'
      : 'w-[54px] h-[54px]';

  // Content container for landscape mode
  const contentContainerClasses = isPortrait
    ? 'flex flex-col items-center text-center gap-s w-full'
    : 'flex flex-col gap-m w-full sm:flex-1';

  // Title classes
  const titleClasses = twMerge(
    'text-[20px] font-display font-black text-heading-md text-shades-black uppercase w-full',
    isCompact
      ? 'text-[16px]'
      : 'text-[20px]',
    isPortrait ? 'text-center  -mb-2' : 'text-center sm:text-left  -mb-3'
  );

  // Description classes
  const descriptionClasses = twMerge(
    'text-[13px] leading-normal font-medium text-shades-dark w-full',
    isCompact
      ? 'text-[12px]'
      : 'text-[13px]',
    isPortrait ? 'text-center' : 'text-center sm:text-left'
  );

  // Button container classes
  const buttonContainerClasses = isPortrait
    ? 'flex gap-m w-full'
    : 'flex gap-s w-full sm:gap-s';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-shades-black/50 dark:bg-shades-white/50 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className={modalClasses}>
        {/* Illustration */}
        {illustration && (
          <div className={twMerge('flex-shrink-0', illustrationSize)}>{illustration}</div>
        )}

        {/* Close button for landscape mode - positioned absolutely */}
        {!isPortrait && showCloseButton && onClose && (
          <button
            onClick={onClose}
            className="absolute top-l right-l hidden sm:block w-4 h-4 text-shades-dark dark:text-shades-mid hover:text-shades-black dark:hover:text-shades-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 rounded"
            aria-label="Close modal"
          >
            <Icon type="icon-close---small" size="sm" ariaHidden />
          </button>
        )}

        {/* Content area */}
        <div
          className={
            isPortrait
              ? 'flex flex-col items-center gap-m w-full'
              : 'flex flex-col gap-s w-full sm:flex-1'
        }>
          {/* Text content and buttons container */}
          <div className={contentContainerClasses}>
            <h2 id="modal-title" className={titleClasses}>
              {title}
            </h2>
            <p id="modal-description" className={descriptionClasses}>
              {description}
            </p>

            {/* Buttons - shown for landscape on desktop */}
            {!isPortrait && (
              <div className={twMerge(buttonContainerClasses, 'hidden sm:flex')}>
                {isConfirm && (
                  <Button variant="default" size={isCompact ? "sm" : "md"} onClick={handleCancel}>
                    {cancelText}
                  </Button>
                )}
                <Button variant="primary"  size={isCompact ? "sm" : "md"} onClick={handleConfirm}>
                  {confirmText}
                </Button>
              </div>
            )}
          </div>

          {/* Buttons for portrait mode */}
          {isPortrait && (
            <div className={buttonContainerClasses}>
              {isConfirm && (
                <Button
                  variant="default"
                  size={isCompact ? "sm" : "md"}
                  onClick={handleCancel}
                  className="flex-1"
                  fullWidth
                >
                  {cancelText}
                </Button>
              )}
              <Button
                variant="primary"
                size={isCompact ? "sm" : "md"}
                onClick={handleConfirm}
                className="flex-1"
                fullWidth
              >
                {confirmText}
              </Button>
            </div>
          )}

          {/* Mobile: Show buttons for landscape on small screens */}
          {!isPortrait && (
            <div className="sm:hidden w-full flex flex-col gap-s">
              <Button
                variant="primary"
                size={isCompact ? "sm" : "md"}
                onClick={handleConfirm}
                fullWidth
                className="w-full"
              >
                {confirmText}
              </Button>
              {isConfirm && (
                <Button
                  variant="default"
                  size={isCompact ? "sm" : "md"}
                  onClick={handleCancel}
                  fullWidth
                  className="w-full"
                >
                  {cancelText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';

