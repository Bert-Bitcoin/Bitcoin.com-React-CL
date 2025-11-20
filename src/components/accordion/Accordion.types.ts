import type { ReactNode } from 'react';

export interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  /**
   * Array of accordion items to display
   */
  items: AccordionItemData[];
  /**
   * Optional array of initially expanded item IDs
   */
  defaultExpanded?: string[];
  /**
   * Allow multiple items to be expanded at once
   * @default true
   */
  allowMultiple?: boolean;
  /**
   * Allow all items to be collapsed
   * @default true
   */
  allowToggle?: boolean;
  /**
   * Optional CSS class name
   */
  className?: string;
  /**
   * Callback when an item is expanded/collapsed
   */
  onChange?: (expandedIds: string[]) => void;
}

export interface AccordionItemProps {
  item: AccordionItemData;
  isExpanded: boolean;
  onToggle: () => void;
}

