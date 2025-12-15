export type LinksSectionStyle = 'light' | 'gray' | 'dark';

export interface LinkItem {
  id: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
}

export interface LinksSectionProps {
  /** Theme mode override */
  themeMode?: 'auto' | 'light' | 'dark';
  /** Visual style of the section */
  style?: LinksSectionStyle;
  /** Section heading text */
  heading?: string;
  /** Optional description text displayed under the heading */
  description?: string;
  /** Array of link items to display */
  links?: LinkItem[];
  /** Additional CSS classes */
  className?: string;
}

