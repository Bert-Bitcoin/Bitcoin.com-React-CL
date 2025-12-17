import { twMerge } from 'tailwind-merge';
import { Button } from '../button';
import type { CTAHighlightColor, CTASectionProps, CTASectionStyle } from './CTASection.types';

const styleClasses: Record<CTASectionStyle, {
  bg: string;
  title: string;
  description: string;
}> = {
  light: {
    bg: 'bg-shades-white',
    title: 'text-shades-black',
    description: 'text-shades-semi-dark'
  },
  gray: {
    bg: 'bg-shades-extra-light',
    title: 'text-shades-black',
    description: 'text-shades-semi-dark'
  },
  dark: {
    bg: 'bg-shades-black',
    title: 'text-shades-white',
    description: 'text-shades-semi-light'
  },
  highlight: {
    bg: '', // Will be set dynamically based on highlightColor
    title: 'text-shades-white',
    description: 'text-shades-white'
  }
};

const highlightColorClasses: Record<CTAHighlightColor, string> = {
  'primary-100': 'bg-primary-100',
  'secondary-100': 'bg-secondary-100',
  'success-100': 'bg-success-100',
  'extra-cyan-100': 'bg-extra-cyan-100',
  'extra-navy-100': 'bg-extra-navy-100',
  'extra-violet-100': 'bg-extra-violet-100',
  'extra-gold-100': 'bg-extra-gold-100',
  'extra-pink-100': 'bg-extra-pink-100',
  'extra-green-100': 'bg-extra-green-100',
  'extra-purple-100': 'bg-extra-purple-100'
};

export const CTASection = ({
  themeMode = 'auto',
  style = 'light',
  highlightColor = 'primary-100',
  aboveTitle,
  title,
  description,
  primaryButtonText,
  onPrimaryClick,
  secondaryButtonText,
  onSecondaryClick,
  customActions,
  belowActions,
  alignment = 'center',
  className,
  id
}: CTASectionProps) => {
  const styles = styleClasses[style];
  
  // Determine background color
  const bgClass = style === 'highlight' 
    ? highlightColorClasses[highlightColor]
    : styles.bg;

  // Determine alignment classes
  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right'
  };

  // Determine if any content exists
  const hasContent = title || description || primaryButtonText || secondaryButtonText || customActions;

  return (
    <section
      id={id}
      className={twMerge(
        'px-m md:px-xl py-[32px] sm:py-[40px] md:py-[60px] lg:py-[80px]',
        bgClass,
        themeMode === 'light' && 'light',
        themeMode === 'dark' && 'dark',
        className
      )}
    >
      <div className="w-full max-w-[1240px] mx-auto">
        <div className={twMerge(
          'flex flex-col gap-m lg:gap-l',
          alignmentClasses[alignment]
        )}>
          {/* Custom content above title */}
          {aboveTitle && (
            <div className="w-full">
              {aboveTitle}
            </div>
          )}
          
          {/* Title */}
          {title && (
            <h2 className={twMerge(
              'font-["Elza_Narrow"]',
              'text-[32px] md:text-[44px] lg:text-[70px]',
              'uppercase leading-[0.94]',
              styles.title,
              alignment === 'center' ? 'max-w-[900px]' : 'max-w-[800px]'
            )}>
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className={twMerge(
              'font-["Satoshi_Variable"] font-medium',
              'text-[18px] md:text-[22px] lg:text-[24px]',
              'leading-[1.2]',
              styles.description,
              alignment === 'center' ? 'max-w-[700px]' : 'max-w-[600px]'
            )}>
              {description}
            </p>
          )}

          {/* Actions - Custom or default buttons */}
          {hasContent && (
            <>
              {customActions ? (
                <div className="w-full">
                  {customActions}
                </div>
              ) : (primaryButtonText || secondaryButtonText) && (
                <>
                  {/* Mobile buttons (md size) */}
                  <div className="flex gap-m flex-wrap md:hidden">
                    {primaryButtonText && (
                      <Button 
                        variant={style === 'dark' || style === 'highlight' ? 'default' : 'secondary'}
                        size="md"
                        onClick={onPrimaryClick}
                      >
                        {primaryButtonText}
                      </Button>
                    )}
                    {secondaryButtonText && (
                      <Button 
                        variant="default" 
                        size="md"
                        onClick={onSecondaryClick}
                      >
                        {secondaryButtonText}
                      </Button>
                    )}
                  </div>

                  {/* Tablet and above buttons (lg size) */}
                  <div className="hidden md:flex gap-m flex-wrap">
                    {primaryButtonText && (
                      <Button 
                        variant={style === 'dark' || style === 'highlight' ? 'default' : 'secondary'}
                        size="lg"
                        onClick={onPrimaryClick}
                      >
                        {primaryButtonText}
                      </Button>
                    )}
                    {secondaryButtonText && (
                      <Button 
                        variant="default" 
                        size="lg"
                        onClick={onSecondaryClick}
                      >
                        {secondaryButtonText}
                      </Button>
                    )}
                  </div>
                </>
              )}
              
              {/* Custom content below actions */}
              {belowActions && (
                <div className="w-full">
                  {belowActions}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

CTASection.displayName = 'CTASection';

