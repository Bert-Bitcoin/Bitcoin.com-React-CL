import { twMerge } from 'tailwind-merge';
import { Button } from '../button';
import { Icon } from '../icon';
import type { Feature, FeaturesSectionProps, FeaturesSectionStyle } from './FeaturesSection.types';

const styleClasses: Record<FeaturesSectionStyle, { 
  bg: string; 
  heading: string; 
  featureTitle: string; 
  featureDescription: string;
  imageBg: string;
}> = {
  light: {
    bg: 'bg-shades-white',
    heading: 'text-shades-black',
    featureTitle: 'text-shades-black',
    featureDescription: 'text-shades-semi-dark',
    imageBg: 'bg-shades-off-white'
  },
  gray: {
    bg: 'bg-shades-extra-light',
    heading: 'text-shades-black',
    featureTitle: 'text-shades-black',
    featureDescription: 'text-shades-semi-dark',
    imageBg: 'bg-shades-off-white'
  },
  dark: {
    bg: 'bg-shades-black dark:bg-shades-white',
    heading: 'text-shades-white dark:text-shades-black',
    featureTitle: 'text-shades-white dark:text-shades-black',
    featureDescription: 'text-shades-semi-light dark:text-shades-semi-dark',
    imageBg: 'bg-shades-extra-dark dark:bg-shades-extra-light'
  }
};

export const FeaturesSection = ({
  themeMode = 'auto',
  style = 'light',
  heading = 'Features',
  features = [],
  className,
  id
}: FeaturesSectionProps) => {
  const styles = styleClasses[style];

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
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-m md:mb-[40px]">
          <h2 className={twMerge(
            'font-["Elza_Narrow"] text-[32px] md:text-[44px] lg:text-[70px] uppercase leading-[0.94] text-center',
            styles.heading
          )}>
            {heading}
          </h2>
        </div>

        {/* Features List */}
        <div className="max-w-[980px] mx-auto w-full pt-[24px] lg:pt-[44px]">
          {features.map((feature, index) => {
            const imagePosition = feature.imagePosition || (index % 2 === 0 ? 'left' : 'right');
            
            return (
              <FeatureItem
                key={feature.id}
                feature={feature}
                imagePosition={imagePosition}
                styles={styles}
                isLast={index === features.length - 1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

FeaturesSection.displayName = 'FeaturesSection';

interface FeatureItemProps {
  feature: Feature;
  imagePosition: 'left' | 'right';
  styles: typeof styleClasses[FeaturesSectionStyle];
  isLast?: boolean;
}

const FeatureItem = ({ feature, imagePosition, styles, isLast }: FeatureItemProps) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div 
      className={twMerge(
        'flex flex-col gap-m md:flex-row md:gap-xxl md:items-center w-full max-w-[980px] mx-auto',
        !isImageLeft && 'md:flex-row-reverse',
        !isLast && 'mb-xxl md:mb-[80px]'
      )}
    >
      {/* Image Holder Container */}
      <div className="flex-1 min-w-0 pt-[24px] md:py-[44px]">
        <div 
          className={twMerge(
            'relative w-full h-[200px] md:h-[300px] rounded-[24px]',
            feature.imageExtendToBottom && 'overflow-visible',
            feature.imageBgColor || styles.imageBg
          )}
        >
          {/* Image Content Slot */}
          {feature.imageElement && (
            <div 
              className={twMerge(
                'absolute flex items-center justify-center',
                feature.imageExtendToBottom 
                  ? 'inset-x-0 -top-[56px] md:-top-[84px] bottom-0 pt-xl md:pt-xxl px-xl md:px-xxl pb-0'
                  : 'inset-0 h-[256px] md:h-[384px] -top-[56px] md:-top-[84px] p-xl md:p-xxl'
              )}
            >
              {feature.imageElement}
            </div>
          )}
        </div>
      </div>

      {/* Text Content */}
      <div 
        className={twMerge(
          'flex-1 min-w-0 flex flex-col gap-m',
          isImageLeft ? 'md:pl-0 md:pr-xxl' : 'md:pl-xxl md:pr-0'
        )}
      >
        <h3 className={twMerge(
          'font-["Elza_Narrow"] text-[24px] md:text-[40px] uppercase leading-[0.94]',
          styles.featureTitle
        )}>
          {feature.title}
        </h3>
        
        <p className={twMerge(
          'font-["Satoshi_Variable"] font-medium text-base md:text-[18px]',
          styles.featureDescription
        )}>
          {feature.description}
        </p>

        {/* CTA Button */}
        <div className="mt-xs">
          {feature.buttonHref ? (
            <Button
              variant="secondary"
              size="md"
              trailingIcon={<Icon type="icon-right-arrow" size="sm" ariaHidden />}
              onClick={feature.onButtonClick}
            >
              {feature.buttonText}
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="md"
              trailingIcon={<Icon type="icon-right-arrow" size="sm" ariaHidden />}
              onClick={feature.onButtonClick}
            >
              {feature.buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
