import { twMerge } from 'tailwind-merge';
import { Button } from '../button';
import type { CardItem, CardsSectionProps, CardsSectionStyle } from './CardsSection.types';

const styleClasses: Record<CardsSectionStyle, { bg: string; heading: string; description: string; card: string; cardTitle: string; cardDescription: string }> = {
  light: {
    bg: 'bg-shades-white',
    heading: 'text-shades-black',
    description: 'text-shades-semi-dark',
    card: 'bg-shades-extra-light',
    cardTitle: 'text-shades-black',
    cardDescription: 'text-shades-semi-dark'
  },
  gray: {
    bg: 'bg-shades-extra-light',
    heading: 'text-shades-black',
    description: 'text-shades-semi-dark',
    card: 'bg-shades-white',
    cardTitle: 'text-shades-black',
    cardDescription: 'text-shades-semi-dark'
  },
  black: {
    bg: 'bg-shades-black dark:bg-shades-white',
    heading: 'text-shades-white dark:text-shades-black',
    description: 'text-shades-semi-light dark:text-shades-semi-dark',
    card: 'bg-shades-white dark:bg-shades-light',
    cardTitle: 'text-shades-black',
    cardDescription: 'text-shades-semi-dark'
  }
};

export const CardsSection = ({
  themeMode = 'auto',
  style = 'light',
  heading = 'Cards',
  description,
  cards = [],
  layout = 3,
  className,
  id,
  removeTopPadding = false
}: CardsSectionProps) => {
  const styles = styleClasses[style];

  return (
    <section
      id={id}
      className={twMerge(
        'px-m md:px-xl',
        removeTopPadding 
          ? 'pb-[32px] sm:pb-[40px] md:pb-[60px] lg:pb-[80px]'
          : 'py-[32px] sm:py-[40px] md:py-[60px] lg:py-[80px]',
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
            'font-["Elza_Narrow"] text-[32px] md:text-[44px] lg:text-[70px] uppercase leading-[0.94]',
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

        {/* Cards Grid */}
        <div
          className={twMerge(
            'grid gap-l',
            // Mobile: 1 column
            'grid-cols-1',
            // Tablet: 2 columns for both layouts (creates 2+1 pattern for 3-card, 2+2+2 for 6-card)
            'md:grid-cols-2',
            // Desktop: 3 columns for both layouts
            'lg:grid-cols-3'
          )}
        >
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              style={style}
              styles={styles}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

CardsSection.displayName = 'CardsSection';

interface CardProps {
  card: CardItem;
  style: CardsSectionStyle;
  styles: { card: string; cardTitle: string; cardDescription: string };
}

const Card = ({ card, styles }: CardProps) => {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-m md:gap-l p-m md:p-l rounded-[16px] h-full',
        styles.card
      )}
    >
      {/* Custom Content Start (optional) */}
      {card.customContentStart && (
        <div className="w-full">
          {card.customContentStart}
        </div>
      )}

      {/* Mobile & Desktop: Icon above, Tablet: Icon to the left */}
      <div className="flex flex-col md:flex-row lg:flex-col gap-s md:gap-m lg:gap-s items-start flex-1">
        {/* Icon (optional) */}
        {card.icon && (
          <div className="flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] flex items-center justify-center mb-0 lg:mb-[8px]">
            {card.icon}
          </div>
        )}

        {/* Title and Description Container - aligned together */}
        <div className="flex flex-col gap-s flex-1 w-full">
          {/* Title */}
          <h3 className={twMerge(
            'font-["Elza_Narrow"] text-[24px] md:text-[28px] lg:text-[32px] uppercase leading-[0.94]',
            styles.cardTitle
          )}>
            {card.title}
          </h3>

          {/* Description (optional) */}
          {card.description && (
            <p className={twMerge(
              'font-["Satoshi_Variable"] font-medium text-[14px] md:text-[16px] lg:text-[16px] leading-normal',
              styles.cardDescription
            )}>
              {card.description}
            </p>
          )}
        </div>
      </div>

      {/* Action Button (optional) - always at bottom */}
      {card.action && (
        <div className="w-full mt-auto">
          <Button
            variant={card.action.variant || 'secondary'}
            size="md"
            fullWidth
            onClick={card.action.onClick}
          >
            {card.action.label}
          </Button>
        </div>
      )}

      {/* Custom Content End (optional) */}
      {card.customContentEnd && (
        <div className="w-full">
          {card.customContentEnd}
        </div>
      )}
    </div>
  );
};

Card.displayName = 'Card';

