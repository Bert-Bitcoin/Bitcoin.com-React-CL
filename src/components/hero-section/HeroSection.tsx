import { twMerge } from 'tailwind-merge';
import { Button } from '../button';
import { Illustration } from '../illustration';
import type { HeroSectionLayout, HeroSectionProps, HeroSectionStyle } from './HeroSection.types';

const styleClasses: Record<HeroSectionStyle, {
  bg: string;
  heading: string;
  description: string;
}> = {
  light: {
    bg: 'bg-shades-white',
    heading: 'text-shades-black',
    description: 'text-shades-semi-dark'
  },
  gray: {
    bg: 'bg-shades-extra-light',
    heading: 'text-shades-black',
    description: 'text-shades-semi-dark'
  },
  dark: {
    bg: 'bg-shades-black',
    heading: 'text-shades-white',
    description: 'text-shades-semi-light'
  }
};

export const HeroSection = ({
  themeMode = 'auto',
  style = 'light',
  layout = 'left',
  aboveTitle,
  heading,
  description,
  primaryButtonText = 'Get Started',
  onPrimaryClick,
  secondaryButtonText = 'Learn more',
  onSecondaryClick,
  illustrationName = 'Illustration-Platform-Alt.svg',
  reducedTopPadding = false,
  customActions,
  belowActions,
  className,
  id
}: HeroSectionProps) => {
  const hasIllustration = layout === 'left-illustration' || layout === 'right-illustration';
  const isCentered = layout === 'centered';
  const isRightIllustration = layout === 'right-illustration';
  const styles = styleClasses[style];

  // Top padding values - full or reduced by half
  const topPaddingClasses = reducedTopPadding
    ? 'pt-[16px] sm:pt-[20px] md:pt-[30px] lg:pt-[40px]'
    : 'pt-[32px] sm:pt-[40px] md:pt-[60px] lg:pt-[80px]';

  return (
    <section
      id={id}
      className={twMerge(
        'px-m md:px-xl pb-[0px] md:pb-[60px] lg:pb-[80px]',
        hasIllustration ? '' : 'pb-[40px]',
        topPaddingClasses,
        'lg:min-h-[70vh] flex items-center',
        styles.bg,
        themeMode === 'light' && 'light',
        themeMode === 'dark' && 'dark',
        className
      )}
    >
      <div className="w-full max-w-[1240px] mx-auto">
        {hasIllustration ? (
          <HeroWithIllustration
            aboveTitle={aboveTitle}
            heading={heading}
            description={description}
            primaryButtonText={primaryButtonText}
            onPrimaryClick={onPrimaryClick}
            secondaryButtonText={secondaryButtonText}
            onSecondaryClick={onSecondaryClick}
            illustrationName={illustrationName}
            isRightIllustration={isRightIllustration}
            customActions={customActions}
            belowActions={belowActions}
            styles={styles}
          />
        ) : (
          <HeroTextOnly
            aboveTitle={aboveTitle}
            heading={heading}
            description={description}
            primaryButtonText={primaryButtonText}
            onPrimaryClick={onPrimaryClick}
            secondaryButtonText={secondaryButtonText}
            onSecondaryClick={onSecondaryClick}
            isCentered={isCentered}
            customActions={customActions}
            belowActions={belowActions}
            styles={styles}
          />
        )}
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';

interface HeroTextOnlyProps {
  aboveTitle?: React.ReactNode;
  heading: string;
  description?: string;
  primaryButtonText: string;
  onPrimaryClick?: () => void;
  secondaryButtonText: string;
  onSecondaryClick?: () => void;
  isCentered: boolean;
  customActions?: React.ReactNode;
  belowActions?: React.ReactNode;
  styles: typeof styleClasses[HeroSectionStyle];
}

const HeroTextOnly = ({
  aboveTitle,
  heading,
  description,
  primaryButtonText,
  onPrimaryClick,
  secondaryButtonText,
  onSecondaryClick,
  isCentered,
  customActions,
  belowActions,
  styles
}: HeroTextOnlyProps) => {
  return (
    <div className={twMerge(
      'flex flex-col gap-l',
      isCentered ? 'items-center text-center' : 'items-start text-left'
    )}>
      {aboveTitle && (
        <div className="w-full">
          {aboveTitle}
        </div>
      )}
      
      <h1 className={twMerge(
        'font-["Elza_Narrow"]',
        'text-[44px] sm:text-[54px] md:text-[70px] lg:text-[94px]',
        'uppercase leading-[0.90]',
        styles.heading,
        isCentered ? 'max-w-[1000px]' : 'max-w-[900px]'
      )}>
        {heading}
      </h1>

      <div className={twMerge(
        'flex flex-col gap-l',
        isCentered ? 'items-center' : 'items-start',
        isCentered ? 'max-w-[800px]' : 'max-w-[800px]'
      )}>
        {description && (
          <p className={twMerge(
            'font-["Satoshi_Variable"] font-medium',
            'text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px]',
            'leading-[1.23]',
            'max-w-[600px]',
            styles.description
          )}>
            {description}
          </p>
        )}

        {customActions ? (
          // Custom actions provided - render them
          <div className="w-full">{customActions}</div>
        ) : (
          <>
            {/* Mobile buttons (md size) */}
            <div className="flex gap-m flex-wrap md:hidden">
              <Button 
                variant="secondary" 
                size="md"
                onClick={onPrimaryClick}
              >
                {primaryButtonText}
              </Button>
              <Button 
                variant="default" 
                size="md"
                onClick={onSecondaryClick}
              >
                {secondaryButtonText}
              </Button>
            </div>

            {/* Tablet and above buttons (lg size) */}
            <div className="hidden md:flex gap-m flex-wrap">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={onPrimaryClick}
              >
                {primaryButtonText}
              </Button>
              <Button 
                variant="default" 
                size="lg"
                onClick={onSecondaryClick}
              >
                {secondaryButtonText}
              </Button>
            </div>
          </>
        )}
        
        {belowActions && (
          <div className="w-full">
            {belowActions}
          </div>
        )}
      </div>
    </div>
  );
};

interface HeroWithIllustrationProps {
  aboveTitle?: React.ReactNode;
  heading: string;
  description?: string;
  primaryButtonText: string;
  onPrimaryClick?: () => void;
  secondaryButtonText: string;
  onSecondaryClick?: () => void;
  illustrationName: string;
  isRightIllustration: boolean;
  customActions?: React.ReactNode;
  belowActions?: React.ReactNode;
  styles: typeof styleClasses[HeroSectionStyle];
}

const HeroWithIllustration = ({
  aboveTitle,
  heading,
  description,
  primaryButtonText,
  onPrimaryClick,
  secondaryButtonText,
  onSecondaryClick,
  illustrationName,
  isRightIllustration,
  customActions,
  belowActions,
  styles
}: HeroWithIllustrationProps) => {
  const illustrationSrc = `/src/illustrations/${illustrationName}`;

  return (
    <div className={twMerge(
      'flex flex-col md:flex-row gap-l md:gap-xxl items-center',
      isRightIllustration && 'md:flex-row-reverse'
    )}>
      {/* Text Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-s md:gap-l w-full md:w-auto">
        {aboveTitle && (
          <div className="w-full">
            {aboveTitle}
          </div>
        )}
        
        <h1 className={twMerge(
          'font-["Elza_Narrow"]',
          'text-[44px] sm:text-[54px] md:text-[70px] lg:text-[94px]',
          'uppercase leading-[0.90]',
          styles.heading
        )}>
          {heading}
        </h1>

        <div className="flex flex-col gap-l max-w-[800px]">
          {description && (
            <p className={twMerge(
              'font-["Satoshi_Variable"] font-medium',
              'text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px]',
              'leading-[1.23]',
              'max-w-[600px]',
              styles.description
            )}>
              {description}
            </p>
          )}

          {customActions ? (
            // Custom actions provided - render them
            <div className="w-full">{customActions}</div>
          ) : (
            <>
              {/* Mobile buttons (md size) */}
              <div className="flex gap-m flex-wrap md:hidden">
                <Button 
                  variant="secondary" 
                  size="md"
                  onClick={onPrimaryClick}
                >
                  {primaryButtonText}
                </Button>
                <Button 
                  variant="default" 
                  size="md"
                  onClick={onSecondaryClick}
                >
                  {secondaryButtonText}
                </Button>
              </div>

              {/* Tablet and above buttons (lg size) */}
              <div className="hidden md:flex gap-m flex-wrap">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={onPrimaryClick}
                >
                  {primaryButtonText}
                </Button>
                <Button 
                  variant="default" 
                  size="lg"
                  onClick={onSecondaryClick}
                >
                  {secondaryButtonText}
                </Button>
              </div>
            </>
          )}
          
          {belowActions && (
            <div className="w-full">
              {belowActions}
            </div>
          )}
        </div>
      </div>

      {/* Illustration */}
      <div className="flex-1 min-w-0 w-full max-w-[576px] max-h-[50vw] sm:max-h-[40vw] md:max-h-auto overflow-hidden md:overflow-visible">
        <Illustration
          src={illustrationSrc}
          alt={`${heading} - Hero illustration`}
          aspectRatio="1/1"
          objectFit="contain"
          className="w-full"
        />
      </div>
    </div>
  );
};

