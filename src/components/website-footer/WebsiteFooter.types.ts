import type { HTMLAttributes } from 'react';

export interface WebsiteFooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
}

export interface WebsiteFooterLinkGroup {
  heading: string;
  links: WebsiteFooterLink[];
}

export interface WebsiteFooterBadge {
  id: string;
  href: string;
  alt: string;
  imageSrc: string;
}

export interface WebsiteFooterProps extends HTMLAttributes<HTMLElement> {
  /**
   * Whether to show the download app section
   * @default true
   */
  showDownloadSection?: boolean;
  /**
   * Title for the download app section
   * @default 'Download the app'
   */
  downloadTitle?: string;
  /**
   * App download badges to display
   */
  badges?: WebsiteFooterBadge[];
  /**
   * Groups of links to display in the footer
   */
  linkGroups?: WebsiteFooterLinkGroup[];
  /**
   * Legal text to display at the bottom of the footer
   * @default '© {currentYear} Saint Bitts LLC Bitcoin.com. All rights reserved.'
   */
  legalText?: string;
  /**
   * Additional CSS classes for the content wrapper
   */
  contentClassName?: string;
}


