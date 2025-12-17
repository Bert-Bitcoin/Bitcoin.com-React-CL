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
    bg: 'bg-shades-black dark:bg-shades-white',
    heading: 'text-shades-white dark:text-shades-black'
  }
};

export const FAQSection = ({
  themeMode = 'auto',
  style = 'light',
  heading = 'FAQ',
  items = [],
  defaultExpanded = [],
  allowMultiple = true,
  className,
  id,
  enableStructuredData = true
}: FAQSectionProps) => {
  const styles = styleClasses[style];
  
  // Map section style to accordion variant
  const accordionVariant = style === 'light' ? 'default' : style;

  // Generate FAQ structured data (Schema.org)
  const structuredData = enableStructuredData && items.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof item.content === 'string' ? item.content : item.title
      }
    }))
  } : null;

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
      {/* Structured Data for SEO */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-m lg:gap-xl">
          {/* Heading */}
          <h2
            className={twMerge(
              'font-["Elza_Narrow"] text-[32px] md:text-[44px] lg:text-[70px] lg:min-w-[40%] uppercase leading-[0.94]',
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

