import { twMerge } from 'tailwind-merge';
import { Button } from '../button';
import { Illustration } from '../illustration';
import type { HighlightSectionProps, HighlightSectionStyle } from './HighlightSection.types';

const styleClasses: Record<HighlightSectionStyle, { 
  bg: string; 
  heading: string; 
  description: string;
  imageBg: string;
}> = {
  light: {
    bg: 'bg-shades-white',
    heading: 'text-shades-black',
    description: 'text-shades-semi-dark',
    imageBg: 'bg-shades-off-white'
  },
  gray: {
    bg: 'bg-shades-extra-light',
    heading: 'text-shades-black',
    description: 'text-shades-semi-dark',
    imageBg: 'bg-shades-off-white'
  },
  dark: {
    bg: 'bg-shades-black dark:bg-shades-white',
    heading: 'text-shades-white dark:text-shades-black',
    description: 'text-shades-semi-light dark:text-shades-semi-dark',
    imageBg: 'bg-shades-extra-dark dark:bg-shades-extra-light'
  }
};

export const HighlightSection = ({
  themeMode = 'auto',
  style = 'light',
  heading = 'Your all-in-one Bitcoin platform',
  description,
  headerElement,
  footerElement,
  buttonText = 'Learn More',
  buttonHref,
  onButtonClick,
  ctaElement,
  imageElement,
  imageUrl,
  imageAlt = 'Illustration',
  imagePosition = 'left',
  className,
  id
}: HighlightSectionProps) => {
  const styles = styleClasses[style];
  const isImageLeft = imagePosition === 'left';

  // Determine which image to render
  const imageContent = imageElement || (imageUrl ? (
    <Illustration
      src={imageUrl}
      alt={imageAlt || `${heading} - Section illustration`}
      size="full"
      objectFit="contain"
    />
  ) : null);

  return (
    <section
      id={id}
      className={twMerge(
        'px-m md:px-xl py-[32px] sm:py-[40px] md:py-[60px] lg:py-[80px]',
        styles.bg,
        themeMode === 'light' && 'light',
        themeMode === 'dark' && 'dark',
        className
      )}
    >
      <div className="w-full max-w-[1240px] mx-auto">
        <div 
          className={twMerge(
            'flex flex-col-reverse gap-m md:flex-row md:gap-xxl md:items-center w-full',
            !isImageLeft && 'md:flex-row-reverse'
          )}
        >
          {/* Image Holder Container */}
          <div className="flex-1 min-w-0 pt-[24px] md:py-[44px]">
            <div 
              className={twMerge(
                'relative w-full h-[200px] md:h-[300px] lg:h-[470px] rounded-[24px]',
                styles.imageBg
              )}
            >
              {/* Image Content Slot */}
              {imageContent && (
                <div className="absolute h-[256px] md:h-[384px] lg:h-[548px] -top-[56px] md:-top-[84px] lg:-top-[78px] inset-0 flex items-center justify-center p-xl md:p-xxl">
                  {imageContent}
                </div>
              )}
            </div>
          </div>

          {/* Text Content */}
          <div 
            className={twMerge(
              'flex-1 min-w-0 flex flex-col gap-m'
            )}
          >
            {/* Header Element (custom HTML above title) */}
            {headerElement && (
              <div>
                {headerElement}
              </div>
            )}

            <h2 className={twMerge(
              'font-["Elza_Narrow"] text-[32px] md:text-[44px] lg:text-[70px] uppercase leading-[0.94]',
              styles.heading
            )}>
              {heading}
            </h2>
            
            {/* Description (optional) */}
            {description && (
              <p className={twMerge(
                'font-["Satoshi_Variable"] font-medium text-base md:text-[18px] lg:text-[24px] lg:leading-[1.2]',
                styles.description
              )}>
                {description}
              </p>
            )}

            {/* CTA Section */}
            <div className="mt-xs">
              {ctaElement ? (
                ctaElement
              ) : buttonHref ? (
                <Button
                  variant="secondary"
                  size="md"
                  onClick={onButtonClick}
                >
                  {buttonText}
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  size="md"
                  onClick={onButtonClick}
                >
                  {buttonText}
                </Button>
              )}
            </div>

            {/* Footer Element (custom HTML under buttons) */}
            {footerElement && (
              <div>
                {footerElement}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

HighlightSection.displayName = 'HighlightSection';

