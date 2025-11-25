import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { Header } from '../../components/header/Header';
import { WebsiteFooter } from '../../components/website-footer/WebsiteFooter';
import type { WebLayoutProps } from './WebLayout.types';

/**
 * WebLayout Component
 *
 * A full-page layout for marketing/website pages with header and footer.
 * The layout stretches over the full width and height of the screen.
 * The content area is designed to be replaced with section components.
 *
 * Features:
 * - Fixed header at the top with navigation
 * - Flexible content area that grows to fill available space
 * - Footer at the bottom
 * - Full viewport height layout
 * - Responsive design with proper spacing
 */
export const WebLayout = forwardRef<HTMLDivElement, WebLayoutProps>(
  (
    {
      children,
      headerProps,
      footerProps,
      className,
      contentClassName
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          'flex flex-col min-h-screen w-full bg-shades-white',
          className
        )}
      >
        {/* Header Section - Sticky */}
        <Header
          className="sticky top-0 z-50 flex-shrink-0 w-full bg-shades-white"
          {...headerProps}
        />

        {/* Main Content Area - grows to fill available space */}
        <main
          className={twMerge(
            'flex-1 w-full bg-shades-white',
            contentClassName
          )}
        >
          {children}
        </main>

        {/* Footer Section */}
        <WebsiteFooter
          className="flex-shrink-0 w-full"
          {...footerProps}
        />
      </div>
    );
  }
);

WebLayout.displayName = 'WebLayout';

