import type { ReactNode } from 'react';

export interface MenuDropdownItem {
  /**
   * Unique identifier for the menu item
   */
  id: string;

  /**
   * Label text to display
   */
  label: string;

  /**
   * Optional icon to display before the label
   */
  icon?: string;

  /**
   * Whether the item is disabled
   */
  disabled?: boolean;

  /**
   * Click handler for the menu item
   */
  onClick?: () => void;

  /**
   * Variant for special styling (e.g., danger for delete actions)
   */
  variant?: 'default' | 'danger';
}

export interface MenuDropdownSection {
  /**
   * Items in this section
   */
  items: MenuDropdownItem[];
}

export type MenuDropdownPosition =
  | 'bottom-left'
  | 'bottom-right'
  | 'top-left'
  | 'top-right'
  | 'auto';

export interface MenuDropdownProps {
  /**
   * The trigger button or element
   * If not provided, a default "Options" button will be rendered
   */
  trigger?: ReactNode;

  /**
   * Array of menu sections. Each section will be separated by a divider.
   */
  sections: MenuDropdownSection[];

  /**
   * Position of the menu relative to the trigger
   * @default 'auto'
   */
  position?: MenuDropdownPosition;

  /**
   * Optional CSS class name for the trigger container
   */
  className?: string;

  /**
   * Optional CSS class name for the menu
   */
  menuClassName?: string;

  /**
   * Callback when the menu is opened
   */
  onOpen?: () => void;

  /**
   * Callback when the menu is closed
   */
  onClose?: () => void;
}

