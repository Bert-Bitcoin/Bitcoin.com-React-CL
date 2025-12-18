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
   * Custom URL for the Google Play Store button
   * @default 'https://play.google.com/store/apps/details?id=com.bitcoin.mwallet&pli=1'
   */
  googlePlayHref?: string;
  /**
   * Custom URL for the App Store button
   * @default 'https://apps.apple.com/us/app/bitcoin-com-wallet-buy-sell/id1252903728?ls=1'
   */
  appStoreHref?: string;
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
  /**
   * Background color for the top curved element that overlaps the footer.
   * Use this to match the background color of the previous section.
   * @default 'bg-shades-white'
   * @example 'bg-surface' | 'bg-primary-100' | 'bg-shades-canvas'
   */
  topBackgroundColor?: string;
  /**
   * Accessibility label for the logo
   * @default 'Bitcoin.com'
   */
  logoAriaLabel?: string;
}


