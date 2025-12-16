import { twMerge } from 'tailwind-merge';

import { Sidebar } from '../../components/sidebar/Sidebar';
import { Footer } from '../../components/footer/Footer';
import type { WebAppLayoutProps } from './WebAppLayout.types';

/**
 * WebAppLayout Component
 *
 * A responsive web application layout with sidebar navigation and footer.
 * Adapts to different screen sizes:
 * - Desktop (lg+): Full sidebar with labels on the left
 * - Tablet (md-lg): Collapsed sidebar with icons only
 * - Mobile (<md): Fixed bottom tab bar
 *
 * The layout uses full viewport height and provides a content area
 * that can be used for page content.
 */
export const WebAppLayout = ({
  children,
  menuItems,
  footerLinks,
  copyrightText,
  showLogo = true,
  className,
  contentClassName
}: WebAppLayoutProps) => {
  return (
    <div
      className={twMerge(
        'flex w-full h-screen overflow-hidden bg-background',
        className
      )}
    >
      {/* Desktop Sidebar - hidden on mobile and tablet */}
      <aside className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar variant="desktop" items={menuItems} showLogo={showLogo} />
      </aside>

      {/* Tablet Sidebar - hidden on mobile and desktop */}
      <aside className="hidden md:flex lg:hidden md:flex-shrink-0">
        <Sidebar variant="tablet" items={menuItems} showLogo={showLogo} />
      </aside>

      {/* Main Content Area */}
      <main className="flex flex-col flex-1 min-w-0 h-full overflow-hidden">
        {/* Content Holder - Scrollable Area */}
        <div
          className={twMerge(
            'flex-1 overflow-y-auto bg-surface',
            // Add padding bottom on mobile to account for fixed bottom nav
            'pb-14 md:pb-0',
            contentClassName
          )}
        >
          {children}
        </div>

        {/* Divider - matches sidebar border color */}
        <div className="w-full h-px bg-shades-light hidden md:block" />

        {/* Footer - hidden on mobile, sticky to bottom */}
        <div className="hidden md:block bg-surface flex-shrink-0">
          <Footer 
            links={footerLinks} 
            copyrightText={copyrightText}
            className="bg-surface"
          />
        </div>
      </main>

      {/* Mobile Bottom Tab Bar - fixed to bottom, only visible on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <Sidebar variant="mobile" items={menuItems} showLogo={false} />
      </div>
    </div>
  );
};

WebAppLayout.displayName = 'WebAppLayout';

