import type { ReactNode } from 'react';
import type { HeaderProps } from '../../components/header/Header';
import type { WebsiteFooterProps } from '../../components/website-footer/WebsiteFooter.types';

export interface WebLayoutProps {
  /**
   * Content to be rendered in the main content area
   */
  children?: ReactNode;

  /**
   * Props to pass to the Header component
   */
  headerProps?: Omit<HeaderProps, 'className'>;

  /**
   * Props to pass to the WebsiteFooter component
   */
  footerProps?: Omit<WebsiteFooterProps, 'className'>;

  /**
   * Additional CSS classes for the layout container
   */
  className?: string;

  /**
   * Additional CSS classes for the content area
   */
  contentClassName?: string;
}

