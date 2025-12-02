import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '../button';
import { Icon } from '../icon';
import { IconButton } from '../button/IconButton';
import type {
  NotificationAnimation,
  NotificationPosition,
  NotificationProps,
  NotificationVariant
} from './Notification.types';

const baseClasses =
  'bg-surface border border-border shadow-md overflow-hidden transition-all duration-300';

const variantClasses: Record<NotificationVariant, string> = {
  basic: 'p-m rounded-[8px]',
  condensed: 'p-m rounded-[8px]',
  actions: 'p-m rounded-[8px]',
  full: 'p-m rounded-[8px]'
};

const positionClasses: Record<NotificationPosition, string> = {
  'top-right': 'fixed top-m right-m max-sm:left-m max-sm:right-m max-sm:top-m',
  'bottom-left': 'fixed bottom-m left-m max-sm:left-m max-sm:right-m max-sm:top-m',
  'top-center': 'fixed top-m left-[calc(50%-185px)] max-sm:left-m max-sm:right-m'
};

const animationClasses: Record<NotificationAnimation, { enter: string; exit: string }> = {
  slide: {
    enter: 'animate-[slideIn_0.3s_ease-out_forwards]',
    exit: 'animate-[slideOut_0.3s_ease-in_forwards]'
  },
  fade: {
    enter: 'animate-[fadeIn_0.4s_ease-out_forwards]',
    exit: 'animate-[fadeOut_0.3s_ease-in_forwards]'
  },
  bounce: {
    enter: 'animate-[bounceIn_0.5s_cubic-bezier(0.68,-0.55,0.265,1.55)_forwards]',
    exit: 'animate-[bounceOut_0.3s_ease-in_forwards]'
  }
};

export const Notification = ({
  variant = 'basic',
  title,
  description,
  icon,
  iconColor = 'text-primary-100',
  position = 'top-right',
  animation = 'slide',
  visible = true,
  onClose,
  primaryAction,
  secondaryAction,
  autoHideDuration = 0,
  className,
  testId = 'notification'
}: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setIsVisible(visible);
    if (visible) {
      setIsExiting(false);
    }
  }, [visible]);

  useEffect(() => {
    if (autoHideDuration > 0 && isVisible && !isExiting) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [autoHideDuration, isVisible, isExiting]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  if (!isVisible && !isExiting) {
    return null;
  }

  const animationClass = isExiting ? animationClasses[animation].exit : animationClasses[animation].enter;

  return (
    <div
      className={twMerge(
        baseClasses,
        variantClasses[variant],
        positionClasses[position],
        animationClass,
        'w-[370px] max-sm:w-auto z-50',
        className
      )}
      data-testid={testId}
      role="alert"
      aria-live="polite"
    >
      <div className="flex gap-m items-start">
        {/* Icon */}
        {icon && variant !== 'condensed' && (
          <div className="shrink-0">
            <Icon type={icon} size="md" className={iconColor} />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <h4 className="font-display font-black text-heading-sm uppercase text-text-primary leading-normal mb-0">
            {title}
          </h4>

          {/* Description */}
          {description && variant !== 'condensed' && (
            <p className="text-label-sm font-medium text-text-secondary mt-0 leading-normal">
              {description}
            </p>
          )}

          {/* Actions */}
          {renderActions(variant, primaryAction, secondaryAction)}
        </div>

        {/* Condensed inline action */}
        {variant === 'condensed' && primaryAction && (
          <button
            onClick={primaryAction.onClick}
            className="shrink-0 text-label font-medium text-primary-100 hover:text-primary-50 transition-colors px-m"
          >
            {primaryAction.label}
          </button>
        )}

        {/* Close button */}
        {onClose && (
          <div className="shrink-0">
            <IconButton
              icon={<Icon type="icon-close---small" size="sm" />}
              size="sm"
              variant="text"
              onClick={handleClose}
              aria-label="Close notification"
              className="text-shades-dark hover:text-shades-extra-dark -mr-xs -mt-xs"
            />
          </div>
        )}
      </div>
    </div>
  );
};

function renderActions(
  variant: NotificationVariant,
  primaryAction?: NotificationProps['primaryAction'],
  secondaryAction?: NotificationProps['secondaryAction']
) {
  if (variant === 'condensed' || (!primaryAction && !secondaryAction)) {
    return null;
  }

  return (
    <div className="flex gap-s mt-2 items-center pt-xs">
      {primaryAction && (
        <Button
          variant={variant === 'full' ? 'primary' : 'text'}
          size="sm"
          onClick={primaryAction.onClick}
          className="min-h-0 py-xs"
        >
          {primaryAction.label}
        </Button>
      )}
      {secondaryAction && (
        <Button
          variant="text"
          size="sm"
          onClick={secondaryAction.onClick}
          className="min-h-0 py-xs text-shades-extra-dark"
        >
          {secondaryAction.label}
        </Button>
      )}
    </div>
  );
}

Notification.displayName = 'Notification';

