import type { IconName } from '../icon/Icon.types';

export type SidebarVariant = 'desktop' | 'tablet' | 'mobile';

export interface SidebarMenuItem {
  /**
   * Unique identifier for the menu item
   */
  id: string;
  /**
   * Label text for the menu item
   */
  label: string;
  /**
   * Icon name from the icon library
   */
  icon: IconName;
  /**
   * Whether this menu item is currently active
   * @default false
   */
  isActive?: boolean;
  /**
   * Optional badge count to display (desktop only shows number, tablet/mobile show dot)
   */
  badgeCount?: number;
  /**
   * Click handler for the menu item
   */
  onClick?: () => void;
}

export interface SidebarProps {
  /**
   * Variant of the sidebar
   * - desktop: Full sidebar with logo and labels
   * - tablet: Narrow sidebar with logo mark and icons only
   * - mobile: Bottom navigation bar with icons and labels
   * @default 'desktop'
   */
  variant?: SidebarVariant;
  /**
   * Menu items to display
   */
  items: SidebarMenuItem[];
  /**
   * Custom className for styling
   */
  className?: string;
  /**
   * Whether to show the logo/logomark
   * @default true
   */
  showLogo?: boolean;
}

