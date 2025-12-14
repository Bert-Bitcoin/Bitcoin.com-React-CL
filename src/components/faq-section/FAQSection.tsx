'use client';

import { twMerge } from 'tailwind-merge';
import { Accordion } from '../accordion';
import type { FAQSectionProps, FAQSectionStyle } from './FAQSection.types';

const styleClasses: Record<FAQSectionStyle, { bg: string; heading: string }> = {
  light: {
    bg: 'bg-shades-white',
    heading: 'text-shades-black'
  },
  gray: {
    bg: 'bg-shades-extra-light',
    heading: 'text-shades-black'
  },
  dark: {
    bg: 'bg-shades-black',
    heading: 'text-shades-white'
  }
};

export const FAQSection = ({
  themeMode = 'auto',
  style = 'light',
  heading = 'FAQ',
  items = [],
  defaultExpanded = [],
  allowMultiple = true,
  className
}: FAQSectionProps) => {
  const styles = styleClasses[style];
  
  // Map section style to accordion variant
  const accordionVariant = style === 'light' ? 'default' : style;

  return (
    <section
      className={twMerge(
        'px-m md:px-xl py-[32px] sm:py-[40px] md:py-[60px] lg:py-[80px]',
        styles.bg,
        themeMode === 'light' && 'light',
        themeMode === 'dark' && 'dark',
        className
      )}
    >
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-m lg:gap-xl">
          {/* Heading */}
          <h2
            className={twMerge(
              'font-["Elza_Narrow"] text-[32px] md:text-[44px] lg:text-[70px] lg:min-w-[40%] uppercase leading-none',
              styles.heading
            )}
          >
            {heading}
          </h2>

          {/* Accordion */}
          <div className="w-full lg:max-w-[800px] lg:min-w-[400px]">
            <Accordion
              items={items}
              variant={accordionVariant}
              defaultExpanded={defaultExpanded}
              allowMultiple={allowMultiple}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FAQSection.displayName = 'FAQSection';
