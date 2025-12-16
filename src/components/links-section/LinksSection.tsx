import { twMerge } from 'tailwind-merge';
import { Icon } from '../icon';
import type { LinkItem, LinksSectionProps, LinksSectionStyle } from './LinksSection.types';

const styleClasses: Record<LinksSectionStyle, { 
  bg: string; 
  heading: string; 
  description: string;
  linkCard: string; 
  iconHolder: string;
  linkTitle: string; 
  linkDescription: string;
  readMoreText: string;
}> = {
  light: {
    bg: 'bg-shades-white',
    heading: 'text-shades-black',
    description: 'text-shades-semi-dark',
    linkCard: 'bg-shades-extra-light',
    iconHolder: 'bg-shades-white',
    linkTitle: 'text-shades-black',
    linkDescription: 'text-shades-semi-dark',
    readMoreText: 'text-primary-100'
  },
  gray: {
    bg: 'bg-shades-extra-light',
    heading: 'text-shades-black',
    description: 'text-shades-semi-dark',
    linkCard: 'bg-shades-white',
    iconHolder: 'bg-shades-extra-light',
    linkTitle: 'text-shades-black',
    linkDescription: 'text-shades-semi-dark',
    readMoreText: 'text-primary-100'
  },
  dark: {
    bg: 'bg-shades-black dark:bg-shades-white',
    heading: 'text-shades-white dark:text-shades-black',
    description: 'text-shades-semi-light dark:text-shades-semi-dark',
    linkCard: 'bg-shades-dark dark:bg-shades-light',
    iconHolder: 'bg-shades-semi-dark dark:bg-shades-semi-light',
    linkTitle: 'text-shades-white dark:text-shades-black',
    linkDescription: 'text-shades-semi-light dark:text-shades-semi-dark',
    readMoreText: 'text-secondary-100 dark:text-secondary-100'
  }
};

export const LinksSection = ({
  themeMode = 'auto',
  style = 'light',
  heading = 'Links',
  description,
  links = [],
  className,
  id
}: LinksSectionProps) => {
  const styles = styleClasses[style];

  // Determine grid columns based on number of links
  const getGridClasses = () => {
    const linkCount = links.length;
    
    if (linkCount <= 3) {
      // 3 links: 1 col mobile, 1 col tablet, 3 cols desktop
      return 'grid-cols-1 md:grid-cols-1 lg:grid-cols-3';
    } else if (linkCount === 4) {
      // 4 links: 1 col mobile, 2 cols tablet, 2 cols desktop
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2';
    } else {
      // 6 links: 1 col mobile, 2 cols tablet, 3 cols desktop
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

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
        <div className="flex flex-col gap-m mb-l">
          <h2 className={twMerge(
            'font-["Elza_Narrow"] text-[32px] md:text-[44px] lg:text-[70px] uppercase leading-none',
            styles.heading
          )}>
            {heading}
          </h2>
          
          {description && (
            <p className={twMerge(
              'font-["Satoshi_Variable"] font-medium text-base md:text-xl lg:text-[24px] leading-tight max-w-[800px]',
              styles.description
            )}>
              {description}
            </p>
          )}
        </div>

        {/* Links Grid */}
        <div
          className={twMerge(
            'grid gap-m md:gap-l',
            getGridClasses()
          )}
        >
          {links.map((link) => (
            <LinkCard
              key={link.id}
              link={link}
              styles={styles}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

LinksSection.displayName = 'LinksSection';

interface LinkCardProps {
  link: LinkItem;
  styles: { 
    linkCard: string; 
    iconHolder: string;
    linkTitle: string; 
    linkDescription: string;
    readMoreText: string;
  };
}

const LinkCard = ({ link, styles }: LinkCardProps) => {
  const cardContent = (
    <>
      <div className="flex flex-row gap-m md:gap-l items-start rounded-[24px]">
        {/* Icon Holder (optional) */}
        {link.icon && (
          <div className={twMerge(
            'flex-shrink-0 flex items-center justify-center rounded-[8px] md:rounded-[16px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] ',
            styles.iconHolder
          )}>
            <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] ">
              {link.icon}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col gap-s flex-1">
          {/* Title */}
          <h3 className={twMerge(
            'font-["Elza_Narrow"] text-[18px] md:text-[20px] lg:text-[22px] uppercase leading-none',
            styles.linkTitle
          )}>
            {link.title}
          </h3>

          {/* Description */}
          <p className={twMerge(
            'font-["Satoshi_Variable"] font-medium text-[14px] md:text-[16px] leading-[1.3]',
            styles.linkDescription
          )}>
            {link.description}
          </p>

          {/* Read More Link */}
          <div className="flex items-center gap-xs pt-xs">
            <span className={twMerge(
              'font-["Satoshi_Variable"] font-medium text-[15px] md:text-[16px] leading-normal',
              styles.readMoreText
            )}>
              Read More
            </span>
            <Icon 
              type="icon-right-arrow" 
              size="sm" 
              className={styles.readMoreText}
              ariaHidden 
            />
          </div>
        </div>
      </div>
    </>
  );

  const cardClasses = twMerge(
    'p-m md:p-l rounded-[16px] md:rounded-[24px] transition-all',
    styles.linkCard,
    (link.href || link.onClick) && 'cursor-pointer hover:opacity-80'
  );

  if (link.href) {
    return (
      <a
        href={link.href}
        className={cardClasses}
        onClick={link.onClick}
      >
        {cardContent}
      </a>
    );
  }

  if (link.onClick) {
    return (
      <button
        onClick={link.onClick}
        className={twMerge(cardClasses, 'text-left w-full')}
      >
        {cardContent}
      </button>
    );
  }

  return (
    <div className={cardClasses}>
      {cardContent}
    </div>
  );
};

LinkCard.displayName = 'LinkCard';

