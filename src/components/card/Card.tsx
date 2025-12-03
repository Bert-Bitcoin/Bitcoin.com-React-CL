import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type {
  CardAmountProps,
  CardContentProps,
  CardDescriptionProps,
  CardDividerProps,
  CardFooterProps,
  CardHeaderProps,
  CardIconProps,
  CardMediaProps,
  CardPadding,
  CardProps,
  CardTitleProps,
  CardVariant
} from './Card.types';

// ========================================
// Main Card Component
// ========================================

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-surface  dark:bg-surface-muted border border-border',
  outlined: 'bg-surface  dark:bg-surface-muted border-2 border-primary-100',
  interactive:
    'bg-surface  dark:bg-surface-muted border border-border hover:border-border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100/30 focus-visible:ring-offset-2'
};

const paddingClasses: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-s',
  md: 'p-m',
  lg: 'p-l'
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      padding = 'md',
      fullWidth = false,
      className,
      onClick,
      interactive = false,
      role,
      tabIndex,
      ...rest
    },
    ref
  ) => {
    const isInteractive = interactive || !!onClick;
    const effectiveVariant = isInteractive && variant === 'default' ? 'interactive' : variant;

    return (
      <div
        ref={ref}
        role={role}
        tabIndex={isInteractive ? tabIndex ?? 0 : tabIndex}
        onClick={onClick}
        onKeyDown={
          onClick
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onClick();
                }
              }
            : undefined
        }
        className={twMerge(
          'rounded-md overflow-hidden',
          variantClasses[effectiveVariant],
          paddingClasses[padding],
          fullWidth && 'w-full',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// ========================================
// Card.Header - For title, description, and optional actions
// ========================================

const CardHeader = ({ children, className, action }: CardHeaderProps) => {
  return (
    <div
      className={twMerge(
        'flex items-start justify-between gap-m',
        action ? 'flex-row' : 'flex-col',
        className
      )}
    >
      <div className="flex flex-col gap-xs min-w-0 flex-1">{children}</div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
};

CardHeader.displayName = 'Card.Header';

// ========================================
// Card.Title - Heading text with proper typography
// ========================================

const CardTitle = ({ children, as = 'h3', variant = 'heading-sm', className }: CardTitleProps) => {
  const Component = as;
  const isHeading = variant.startsWith('heading-');
  const textClass = `text-${variant}`;

  return (
    <Component
      className={twMerge(
        'text-text-primary',
        textClass,
        isHeading && 'font-display font-black uppercase',
        className
      )}
    >
      {children}
    </Component>
  );
};

CardTitle.displayName = 'Card.Title';

// ========================================
// Card.Description - Secondary descriptive text
// ========================================

const CardDescription = ({ children, size = 'xs', className }: CardDescriptionProps) => {
  return (
    <p className={twMerge('text-text-secondary', className)}>
      {children}
    </p>
  );
};

CardDescription.displayName = 'Card.Description';

// ========================================
// Card.Content - Main content area
// ========================================

const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={twMerge('flex flex-col', className)}>{children}</div>;
};

CardContent.displayName = 'Card.Content';

// ========================================
// Card.Footer - Bottom area for actions
// ========================================

const CardFooter = ({ children, className, spaceBetween = false }: CardFooterProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center gap-s pt-2',
        spaceBetween ? 'justify-between' : 'justify-start',
        className
      )}
    >
      {children}
    </div>
  );
};

CardFooter.displayName = 'Card.Footer';

// ========================================
// Card.Media - Image/media display
// ========================================

const aspectRatioClasses = {
  '1/1': 'aspect-square',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-[16/9]',
  '21/9': 'aspect-[21/9]',
  auto: 'aspect-auto'
};

const objectFitClasses = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  none: 'object-none'
};

const CardMedia = ({
  src,
  alt,
  aspectRatio = '16/9',
  objectFit = 'cover',
  position = 'top',
  className
}: CardMediaProps) => {
  return (
    <div
      className={twMerge(
        'overflow-hidden',
        aspectRatioClasses[aspectRatio],
        position === 'top' && '-mt-m -mx-m mb-m rounded-t-md',
        position === 'bottom' && '-mb-m -mx-m mt-m rounded-b-md',
        position === 'left' && '-ml-m -my-m mr-m rounded-l-md',
        position === 'right' && '-mr-m -my-m ml-m rounded-r-md',
        className
      )}
    >
      <img src={src} alt={alt} className={twMerge('w-full h-full', objectFitClasses[objectFit])} />
    </div>
  );
};

CardMedia.displayName = 'Card.Media';

// ========================================
// Card.Amount - Display monetary amounts
// ========================================

const CardAmount = ({
  amount,
  currency = '$',
  secondaryAmount,
  secondaryIcon,
  className
}: CardAmountProps) => {
  const formattedAmount =
    typeof amount === 'number' ? amount.toLocaleString('en-US', { minimumFractionDigits: 2 }) : amount;

  return (
    <div className={twMerge('flex flex-col gap-0', className)}>
      <div className="flex items-baseline gap-xs">
        <span className="text-label text-text-secondary font-bold">{currency}</span>
        <span className="text-numeric-lg text-text-primary font-bold">
          {formattedAmount}
        </span>
      </div>
      {secondaryAmount && (
        <div className="flex items-center gap-xs text-body-xs text-text-secondary">
          {secondaryIcon && <span className="inline-flex items-center">{secondaryIcon}</span>}
          <span className="text-numeric-xs font-medium">{secondaryAmount}</span>
        </div>
      )}
    </div>
  );
};

CardAmount.displayName = 'Card.Amount';

// ========================================
// Card.Icon - Display icons with optional background
// ========================================

const iconSizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20'
};

const CardIcon = ({
  children,
  size = 'md',
  withBackground = false,
  backgroundColor,
  className
}: CardIconProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center justify-center flex-shrink-0',
        iconSizeClasses[size],
        withBackground && 'rounded-sm bg-surface-muted',
        className
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {children}
    </div>
  );
};

CardIcon.displayName = 'Card.Icon';

// ========================================
// Card.Divider - Visual separator
// ========================================

const CardDivider = ({ className }: CardDividerProps) => {
  return <hr className={twMerge('border-t border-border my-xs -mx-m border-shades-light', className)} />;
};

CardDivider.displayName = 'Card.Divider';

// ========================================
// Attach sub-components to Card
// ========================================

export const CardWithSubComponents = Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
  Media: CardMedia,
  Amount: CardAmount,
  Icon: CardIcon,
  Divider: CardDivider
});

