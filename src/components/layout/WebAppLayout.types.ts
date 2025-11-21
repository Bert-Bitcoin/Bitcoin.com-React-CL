import type { ReactNode } from 'react';

import type { SidebarMenuItem } from '../sidebar/Sidebar.types';
import type { FooterLink } from '../footer/Footer';

export interface WebAppLayoutProps {
  /**
   * Page content to be rendered in the main content area
   */
  children: ReactNode;
  /**
   * Navigation items for the sidebar/tab bar
   */
  menuItems: SidebarMenuItem[];
  /**
   * Footer links
   */
  footerLinks?: FooterLink[];
  /**
   * Copyright text for the footer
   */
  copyrightText?: string;
  /**
   * Whether to show the logo in the sidebar
   * @default true
   */
  showLogo?: boolean;
  /**
   * Custom className for the layout wrapper
   */
  className?: string;
  /**
   * Custom className for the content area
   */
  contentClassName?: string;
}

