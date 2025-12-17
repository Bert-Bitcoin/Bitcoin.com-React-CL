import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../button';
import { Icon } from '../icon';
import type { Article, ArticlesSectionProps, ArticlesSectionStyle } from './ArticlesSection.types';

const styleClasses: Record<ArticlesSectionStyle, { bg: string; heading: string; description: string }> = {
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
    bg: 'bg-shades-black dark:bg-shades-white',
    heading: 'text-shades-white dark:text-shades-black',
    description: 'text-shades-semi-light dark:text-shades-semi-dark'
  }
};

const articleTextClasses: Record<ArticlesSectionStyle, { title: string; summary: string }> = {
  light: {
    title: 'text-shades-black',
    summary: 'text-shades-semi-dark'
  },
  gray: {
    title: 'text-shades-black',
    summary: 'text-shades-semi-dark'
  },
  dark: {
    title: 'text-shades-white dark:text-shades-black',
    summary: 'text-shades-semi-light dark:text-shades-semi-dark'
  }
};

export const ArticlesSection = ({
  themeMode = 'auto',
  style = 'light',
  heading = 'Articles',
  description,
  articles = [],
  maxArticles = 6,
  readMoreText = 'Read More',
  onReadMoreClick,
  className,
  id,
  enableStructuredData = true
}: ArticlesSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const displayedArticles = articles.slice(0, maxArticles);
  const styles = styleClasses[style];
  const textStyles = articleTextClasses[style];

  // Generate Article structured data (Schema.org)
  const structuredData = enableStructuredData && displayedArticles.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": displayedArticles
      .filter(article => article.href)
      .map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "headline": article.title,
          "description": article.summary,
          ...(article.imageUrl && { "image": article.imageUrl }),
          ...(article.href && { "url": article.href }),
          ...(article.author && { "author": { "@type": "Person", "name": article.author } }),
          ...(article.datePublished && { "datePublished": article.datePublished })
        }
      }))
  } : null;

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scrollByOneArticle = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth / 3; // Approximate width of one article on desktop (3 articles)
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    setTimeout(checkScrollButtons, 300);
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
      {/* Structured Data for SEO */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* Header */}
      <div className="w-full max-w-[1240px] mx-auto">
        {description ? (
          // Layout with description: heading above, description + buttons below
          <div className="flex flex-col gap-m">
            <h2 className={twMerge('font-["Elza_Narrow"] text-[32px] md:text-[44px] lg:text-[70px] uppercase leading-[0.94]', styles.heading)}>
              {heading}
            </h2>

            <div className="flex items-end justify-between gap-m">
              <p className={twMerge('font-["Satoshi_Variable"] font-medium text-base md:text-xl lg:text-[26px] leading-tight max-w-[800px]', styles.description)}>
                {description}
              </p>

              {/* Navigation buttons - hidden on mobile */}
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={() => scrollByOneArticle('left')}
                  disabled={!canScrollLeft}
                  className="w-[38px] h-[38px] rounded-full bg-primary-100 flex items-center justify-center hover:bg-primary-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Scroll left"
                >
                  <Icon type="icon-left-arrow" size="md" className="text-white" ariaHidden />
                </button>
                <button
                  onClick={() => scrollByOneArticle('right')}
                  disabled={!canScrollRight}
                  className="w-[38px] h-[38px] rounded-full bg-primary-100 flex items-center justify-center hover:bg-primary-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Scroll right"
                >
                  <Icon type="icon-right-arrow" size="md" className="text-white" ariaHidden />
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Layout without description: heading + buttons on same row for desktop/tablet
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-m">
            <h2 className={twMerge('font-["Elza_Narrow"] text-[32px] md:text-[44px] lg:text-[70px] uppercase leading-[0.94]', styles.heading)}>
              {heading}
            </h2>

            {/* Navigation buttons - hidden on mobile */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scrollByOneArticle('left')}
                disabled={!canScrollLeft}
                className="w-[38px] h-[38px] rounded-full bg-primary-100 flex items-center justify-center hover:bg-primary-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Scroll left"
              >
                <Icon type="icon-left-arrow" size="md" className="text-white" ariaHidden />
              </button>
              <button
                onClick={() => scrollByOneArticle('right')}
                disabled={!canScrollRight}
                className="w-[38px] h-[38px] rounded-full bg-primary-100 flex items-center justify-center hover:bg-primary-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Scroll right"
              >
                <Icon type="icon-right-arrow" size="md" className="text-white" ariaHidden />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Articles carousel - full width on mobile */}
      <div className="relative py-l -ml-m -mr-m md:ml-0 md:mr-0">
        <div className="w-full max-w-[1240px] mx-auto">
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="overflow-x-auto snap-x snap-mandatory scroll-pl-m md:scroll-pl-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-5 md:px-0 whitespace-nowrap md:whitespace-normal md:flex md:gap-l"
          >
            {displayedArticles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                style={style}
                textStyles={textStyles}
                isFirst={index === 0}
                isLast={index === displayedArticles.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Read More button */}
      <div className="w-full max-w-[1240px] mx-auto">
        {onReadMoreClick && (
          <Button
            variant={style === 'dark' ? 'default' : 'strong'}
            size="md"
            onClick={onReadMoreClick}
          >
            {readMoreText}
          </Button>
        )}
      </div>
    </section>
  );
};

ArticlesSection.displayName = 'ArticlesSection';

interface ArticleCardProps {
  article: Article;
  style: ArticlesSectionStyle;
  textStyles: { title: string; summary: string };
  isFirst?: boolean;
  isLast?: boolean;
}

const ArticleCard = ({ article, style, textStyles, isFirst, isLast }: ArticleCardProps) => {
  const cardContent = (
    <>
      {/* Article image */}
      {article.imageUrl && (
        <div className="relative w-full aspect-[450.667/280] rounded-s overflow-hidden mb-m">
          <img
            src={article.imageUrl}
            alt={article.imageAlt || `${article.title} - Article image`}
            width={article.imageWidth || 451}
            height={article.imageHeight || 280}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
          />
        </div>
      )}

      {/* Article text */}
      <div className="flex flex-col gap-xs">
        <h3 className={twMerge('font-["Satoshi_Variable"] font-bold text-xl leading-normal', textStyles.title)}>
          {article.title}
        </h3>
        <p className={twMerge('font-["Satoshi_Variable"] font-medium text-sm leading-normal', textStyles.summary)}>
          {article.summary}
        </p>
        {article.datePublished && (
          <time dateTime={article.datePublished} className={twMerge('font-["Satoshi_Variable"] font-medium text-xs', textStyles.summary)}>
            {new Date(article.datePublished).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
        )}
      </div>
    </>
  );

  const cardClasses = twMerge(
    'inline-block md:flex-none w-[280px] md:w-[calc((100%-48px)/3)] align-top md:flex md:flex-col gap-m snap-start whitespace-normal',
    !isFirst && 'ml-l md:ml-0',
    isLast && 'mr-0'
  );

  if (article.href) {
    return (
      <article className={cardClasses}>
        <a
          href={article.href}
          className="flex flex-col gap-m h-full"
          onClick={article.onClick}
        >
          {cardContent}
        </a>
      </article>
    );
  }

  if (article.onClick) {
    return (
      <article className={cardClasses}>
        <button
          onClick={article.onClick}
          className="text-left flex flex-col gap-m h-full w-full"
        >
          {cardContent}
        </button>
      </article>
    );
  }

  return (
    <article className={cardClasses}>
      <div className="flex flex-col gap-m">
        {cardContent}
      </div>
    </article>
  );
};

