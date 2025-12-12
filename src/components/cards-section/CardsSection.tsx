'use client';

import { twMerge } from 'tailwind-merge';
import { Button } from '../button';
import type { CardItem, CardsSectionProps, CardsSectionStyle } from './CardsSection.types';

const styleClasses: Record<CardsSectionStyle, { bg: string; heading: string; card: string; cardTitle: string; cardDescription: string }> = {
  light: {
    bg: 'bg-shades-white',
    heading: 'text-shades-black',
    card: 'bg-shades-extra-light',
    cardTitle: 'text-shades-black',
    cardDescription: 'text-shades-semi-dark'
  },
  gray: {
    bg: 'bg-shades-extra-light',
    heading: 'text-shades-black',
    card: 'bg-shades-white',
    cardTitle: 'text-shades-black',
    cardDescription: 'text-shades-semi-dark'
  },
  black: {
    bg: 'bg-shades-black',
    heading: 'text-shades-white',
    card: 'bg-shades-white',
    cardTitle: 'text-shades-black',
    cardDescription: 'text-shades-semi-dark'
  }
};

export const CardsSection = ({
  themeMode = 'auto',
  style = 'light',
  heading = 'Cards',
  cards = [],
  layout = 3,
  className
}: CardsSectionProps) => {
  const styles = styleClasses[style];

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
        {/* Section Heading */}
        <div className="flex flex-col mb-l">
          <h2 className={twMerge(
            'font-["Elza_Narrow"] text-[32px] md:text-[44px] lg:text-[70px] uppercase leading-none',
            styles.heading
          )}>
            {heading}
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          className={twMerge(
            'grid gap-l',
            // Mobile: 1 column
            'grid-cols-1',
            // Tablet: 2 columns for 6-card layout, 1 column for 3-card layout
            layout === 6 ? 'md:grid-cols-2' : 'md:grid-cols-1',
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
      {/* Mobile & Desktop: Icon above, Tablet: Icon to the left */}
      <div className="flex flex-col md:flex-row lg:flex-col gap-s md:gap-m lg:gap-s items-start flex-1">
        {/* Icon */}
        <div className="flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] flex items-center justify-center mb-0 lg:mb-[8px]">
          {card.icon}
        </div>

        {/* Title and Description Container - aligned together */}
        <div className="flex flex-col gap-s flex-1 w-full">
          {/* Title */}
          <h3 className={twMerge(
            'font-["Elza_Narrow"] text-[24px] md:text-[28px] lg:text-[32px] uppercase leading-none',
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
            variant="secondary"
            size="md"
            fullWidth
            onClick={card.action.onClick}
          >
            {card.action.label}
          </Button>
        </div>
      )}
    </div>
  );
};

Card.displayName = 'Card';
