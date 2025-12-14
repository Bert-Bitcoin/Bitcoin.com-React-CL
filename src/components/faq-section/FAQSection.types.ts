import type { AccordionItemData } from '../accordion';

export type FAQSectionStyle = 'light' | 'gray' | 'dark';

export interface FAQSectionProps {
  /**
   * Theme mode for the section
   * @default 'auto'
   */
  themeMode?: 'auto' | 'light' | 'dark';
  /**
   * Visual style variant
   * @default 'light'
   */
  style?: FAQSectionStyle;
  /**
   * Section heading text
   * @default 'FAQ'
   */
  heading?: string;
  /**
   * Array of FAQ items to display
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
   * Additional CSS classes for the section
   */
  className?: string;
}
