import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../icon/Icon';
import type { AccordionItemProps, AccordionProps } from './Accordion.types';

/**
 * AccordionItem - Individual accordion item component
 */
const AccordionItem = ({ item, isExpanded, onToggle, variant = 'default' }: AccordionItemProps) => {
  // Variant-specific text colors
  const titleColorClass = variant === 'dark' ? 'text-shades-white' : 'text-shades-black';
  const contentColorClass = variant === 'dark' ? 'text-shades-mid' : 'text-shades-dark';

  return (
    <div className="w-full max-w-full  min-w-full ">
      {/* Accordion Item */}
      <div
        className={twMerge(
          'flex items-start justify-between w-full',
          'py-m',
          isExpanded ? 'pb-xs' : ''
        )}
      >
        <div className="flex-1 flex flex-col gap-xs min-w-0">
          {/* Title */}
          <div
            className={twMerge(
              "font-['Satoshi_Variable'] font-medium text-[16px] leading-normal cursor-pointer select-none",
              titleColorClass
            )}
            onClick={onToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onToggle();
              }
            }}
          >
            {item.title}
          </div>

          {/* Content - only show when expanded */}
          {isExpanded && (
            <div className={twMerge(
              "font-['Satoshi_Variable'] font-medium text-[12px] mb-3 leading-normal max-w-[600px]",
              contentColorClass
            )}>
              {item.content}
            </div>
          )}
        </div>

        {/* Icon Button */}
        <button
          className="flex-shrink-0 w-6 h-6 bg-secondary-100 rounded-[40px] flex items-center justify-center ml-m focus:outline-none focus:ring-2 focus:ring-secondary-100 focus:ring-offset-2 focus:ring-offset-shades-white"
          onClick={onToggle}
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
          aria-expanded={isExpanded}
        >
          <Icon
            type={isExpanded ? 'icon-remove' : 'icon-add'}
            size="xs"
            className="text-white"
          />
        </button>
      </div>
    </div>
  );
};

/**
 * Accordion - A collapsible content component
 */
export const Accordion = ({
  items,
  variant = 'default',
  defaultExpanded = [],
  allowMultiple = true,
  allowToggle = true,
  className,
  onChange
}: AccordionProps) => {
  const [expandedIds, setExpandedIds] = useState<string[]>(defaultExpanded);

  const handleToggle = (itemId: string) => {
    let newExpandedIds: string[];

    if (expandedIds.includes(itemId)) {
      // Item is currently expanded, collapse it
      if (allowToggle || expandedIds.length > 1) {
        newExpandedIds = expandedIds.filter((id) => id !== itemId);
      } else {
        return;
      }
    } else {
      // Item is collapsed, expand it
      newExpandedIds = allowMultiple
        ? [...expandedIds, itemId]
        : [itemId];
    }

    setExpandedIds(newExpandedIds);
    onChange?.(newExpandedIds);
  };

  // Variant-specific background and divider colors
  const backgroundClass = 
    variant === 'gray' ? 'bg-shades-extra-light' :
    variant === 'dark' ? 'bg-shades-black' :
    '';

  const dividerColorClass = 
    variant === 'gray' ? 'bg-shades-semi-light' :
    variant === 'dark' ? 'bg-shades-semi-dark' :
    'bg-shades-extra-light';

  return (
    <div
      className={twMerge(
        'flex flex-col w-full max-w-full min-w-full',
        backgroundClass,
        className
      )}
    >
      {items.map((item, index) => (
        <div key={item.id} className="w-full max-w-full min-w-full">
          <AccordionItem
            item={item}
            isExpanded={expandedIds.includes(item.id)}
            onToggle={() => handleToggle(item.id)}
            variant={variant}
          />

          {/* Divider - don't show after last item */}
          {index < items.length - 1 && (
            <div className="">
              <div className={twMerge('h-px w-full', dividerColorClass)} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Accordion.displayName = 'Accordion';