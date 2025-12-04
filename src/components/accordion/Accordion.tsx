import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../icon/Icon';
import type { AccordionItemProps, AccordionProps } from './Accordion.types';

/**
 * AccordionItem - Individual accordion item component
 */
const AccordionItem = ({ item, isExpanded, onToggle }: AccordionItemProps) => {
  return (
    <div className="w-full max-w-full  min-w-full ">
      {/* Accordion Item */}
      <div
        className={twMerge(
          'flex items-start justify-between w-full',
          'px-m py-m',
          isExpanded ? 'pb-xs' : ''
        )}
      >
        <div className="flex-1 flex flex-col gap-xs min-w-0">
          {/* Title */}
          <div
            className="font-['Satoshi_Variable'] font-medium text-[16px] leading-normal text-shades-black cursor-pointer select-none"
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
            <div className="font-['Satoshi_Variable'] font-medium text-[12px] mb-3 leading-normal text-shades-dark">
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

  return (
    <div
      className={twMerge(
        'flex flex-col w-full max-w-full min-w-full',
        className
      )}
    >
      {items.map((item, index) => (
        <div key={item.id} className="w-full max-w-full min-w-full">
          <AccordionItem
            item={item}
            isExpanded={expandedIds.includes(item.id)}
            onToggle={() => handleToggle(item.id)}
          />

          {/* Divider - don't show after last item */}
          {index < items.length - 1 && (
            <div className="px-m">
              <div className="h-px w-full bg-shades-extra-light dark:bg-shades-light" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Accordion.displayName = 'Accordion';