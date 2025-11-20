import { twMerge } from 'tailwind-merge';

export interface FooterLink {
  label: string;
  href: string;
  onClick?: () => void;
}

export interface FooterProps {
  /**
   * Array of links to display in the footer
   */
  links?: FooterLink[];
  /**
   * Copyright text to display
   */
  copyrightText?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const Footer = ({
  links = [
    { label: 'Label', href: '#' },
    { label: 'Label', href: '#' },
    { label: 'Label', href: '#' },
    { label: 'Label', href: '#' }
  ],
  copyrightText = `© ${new Date().getFullYear()} Bitcoin.com. All rights reserved.`,
  className
}: FooterProps) => {
  return (
    <footer
      className={twMerge(
        'w-full bg-background box-border transition-all duration-300',
        // Mobile (Default)
        'flex flex-col items-start justify-center gap-s p-m',
        // Desktop (lg)
        'lg:flex-row lg:items-center lg:justify-between lg:gap-l lg:p-l',
        className
      )}
    >
      {/* Links Section */}
      <nav
        className={twMerge(
          'flex items-center flex-wrap',
          'gap-s', // Mobile gap
          'md:gap-m', // Tablet gap
          'lg:gap-m' // Desktop gap
        )}
        aria-label="Footer Navigation"
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={link.onClick}
            className={twMerge(
              'font-medium text-shades-almost-black transition-colors hover:text-primary-100',
              // Mobile: 12px
              'text-label-sm',
              // Tablet: 12px (md breakpoint) - already set by default
              // Desktop: 14px (lg breakpoint)
              'md:text-label'
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Copyright Section */}
      <div
        className={twMerge(
          'font-medium text-shades-semi-dark',
          // Mobile: 12px, Left aligned
          'text-label-sm text-left w-full',
          // Desktop: right aligned
          'lg:w-auto lg:text-right'
        )}
      >
        {copyrightText}
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
