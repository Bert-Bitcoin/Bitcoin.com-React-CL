'use client';

import { twMerge } from 'tailwind-merge';
import { Button } from '../button';
import { Illustration } from '../illustration';
import type { HeroSectionLayout, HeroSectionProps } from './HeroSection.types';

export const HeroSection = ({
  themeMode = 'auto',
  layout = 'left',
  heading,
  description,
  primaryButtonText = 'Get Started',
  onPrimaryClick,
  secondaryButtonText = 'Learn more',
  onSecondaryClick,
  illustrationName = 'Illustration-Platform-Alt.svg',
  reducedTopPadding = false,
  className
}: HeroSectionProps) => {
  const hasIllustration = layout === 'left-illustration' || layout === 'right-illustration';
  const isCentered = layout === 'centered';
  const isRightIllustration = layout === 'right-illustration';

  // Top padding values - full or reduced by half
  const topPaddingClasses = reducedTopPadding
    ? 'pt-[16px] sm:pt-[20px] md:pt-[30px] lg:pt-[40px]'
    : 'pt-[32px] sm:pt-[40px] md:pt-[60px] lg:pt-[80px]';

  return (
    <section
      className={twMerge(
        'px-m md:px-xl pb-[0px] md:pb-[60px] lg:pb-[80px]',
        topPaddingClasses,
        'lg:min-h-[70vh] flex items-center',
        themeMode === 'light' && 'light',
        themeMode === 'dark' && 'dark',
        className
      )}
    >
      <div className="w-full max-w-[1240px] mx-auto">
        {hasIllustration ? (
          <HeroWithIllustration
            heading={heading}
            description={description}
            primaryButtonText={primaryButtonText}
            onPrimaryClick={onPrimaryClick}
            secondaryButtonText={secondaryButtonText}
            onSecondaryClick={onSecondaryClick}
            illustrationName={illustrationName}
            isRightIllustration={isRightIllustration}
          />
        ) : (
          <HeroTextOnly
            heading={heading}
            description={description}
            primaryButtonText={primaryButtonText}
            onPrimaryClick={onPrimaryClick}
            secondaryButtonText={secondaryButtonText}
            onSecondaryClick={onSecondaryClick}
            isCentered={isCentered}
          />
        )}
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';

interface HeroTextOnlyProps {
  heading: string;
  description: string;
  primaryButtonText: string;
  onPrimaryClick?: () => void;
  secondaryButtonText: string;
  onSecondaryClick?: () => void;
  isCentered: boolean;
}

const HeroTextOnly = ({
  heading,
  description,
  primaryButtonText,
  onPrimaryClick,
  secondaryButtonText,
  onSecondaryClick,
  isCentered
}: HeroTextOnlyProps) => {
  return (
    <div className={twMerge(
      'flex flex-col gap-l',
      isCentered ? 'items-center text-center' : 'items-start text-left'
    )}>
      <h1 className={twMerge(
        'font-["Elza_Narrow"]',
        'text-[44px] sm:text-[54px] md:text-[70px] lg:text-[94px]',
        'text-shades-black uppercase leading-[0.90]',
        isCentered ? 'max-w-[1000px]' : 'max-w-[900px]'
      )}>
        {heading}
      </h1>

      <div className={twMerge(
        'flex flex-col gap-l',
        isCentered ? 'items-center' : 'items-start',
        isCentered ? 'max-w-[800px]' : 'max-w-[800px]'
      )}>
        <p className={twMerge(
          'font-["Satoshi_Variable"] font-medium',
          'text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px]',
          'leading-[1.23]',
          'text-shades-semi-dark max-w-[600px]'
        )}>
          {description}
        </p>

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
      </div>
    </div>
  );
};

interface HeroWithIllustrationProps {
  heading: string;
  description: string;
  primaryButtonText: string;
  onPrimaryClick?: () => void;
  secondaryButtonText: string;
  onSecondaryClick?: () => void;
  illustrationName: string;
  isRightIllustration: boolean;
}

const HeroWithIllustration = ({
  heading,
  description,
  primaryButtonText,
  onPrimaryClick,
  secondaryButtonText,
  onSecondaryClick,
  illustrationName,
  isRightIllustration
}: HeroWithIllustrationProps) => {
  const illustrationSrc = `/src/illustrations/${illustrationName}`;

  return (
    <div className={twMerge(
      'flex flex-col md:flex-row gap-l md:gap-xxl items-center',
      isRightIllustration && 'md:flex-row-reverse'
    )}>
      {/* Text Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-s md:gap-l w-full md:w-auto">
        <h1 className={twMerge(
          'font-["Elza_Narrow"]',
          'text-[44px] sm:text-[54px] md:text-[70px] lg:text-[94px]',
          'text-shades-black uppercase leading-[0.90]'
        )}>
          {heading}
        </h1>

        <div className="flex flex-col gap-l max-w-[800px]">
          <p className={twMerge(
            'font-["Satoshi_Variable"] font-medium',
            'text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px]',
            'leading-[1.23]',
            'text-shades-semi-dark max-w-[600px]'
          )}>
            {description}
          </p>

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
        </div>
      </div>

      {/* Illustration */}
      <div className="flex-1 min-w-0 w-full max-w-[576px] max-h-[50vw] sm:max-h-[40vw] md:max-h-auto overflow-hidden md:overflow-visible">
        <Illustration
          src={illustrationSrc}
          alt={heading}
          aspectRatio="1/1"
          objectFit="contain"
          className="w-full"
        />
      </div>
    </div>
  );
};

