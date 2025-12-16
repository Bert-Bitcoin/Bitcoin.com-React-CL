import { twMerge } from 'tailwind-merge';

import { Logo } from '../../components/logo';
import type { AuthLayoutProps } from './AuthLayout.types';

/**
 * AuthLayout component provides a flexible authentication layout system
 * with three layout variants: default (card), with-illustration (side-by-side),
 * and fullscreen (split screen).
 *
 * Responsive breakpoints:
 * - Mobile: < 768px (sm) - Single column, stacked layout
 * - Tablet: 768px - 1024px (sm to lg) - Optimized spacing
 * - Desktop: > 1024px (lg+) - Full layout with illustrations
 *
 * **ILLUSTRATION REQUIREMENTS:**
 * - Only use FULL illustrations from `/src/illustrations/` directory (270x270px+)
 * - Do NOT use mini-illustrations from `/src/components/mini-illustrations/` (62x62px - too small)
 * - Can also use custom images via URL or any ReactNode
 *
 * @example
 * ```tsx
 * import { Illustration } from '@/components/illustration';
 * 
 * <AuthLayout 
 *   layout="with-illustration" 
 *   illustration={
 *     <Illustration 
 *       src="/src/illustrations/Illustration-Account.svg" 
 *       alt="Account" 
 *       size="full" 
 *       objectFit="contain" 
 *     />
 *   }
 * >
 *   <SignInForm />
 * </AuthLayout>
 * ```
 */
export const AuthLayout = ({
  layout = 'default',
  children,
  illustration,
  customLogo,
  themeMode,
  className
}: AuthLayoutProps) => {
  // Development warning for mini-illustrations
  if (process.env.NODE_ENV === 'development' && illustration) {
    const illustrationString = illustration.toString();
    if (
      illustrationString.includes('MiniIllustration') ||
      illustrationString.includes('mini-illustrations')
    ) {
      console.warn(
        '⚠️ AuthLayout: Mini-illustrations (62x62px) are too small for this layout. ' +
        'Please use full illustrations from /src/illustrations/ directory instead. ' +
        'See AuthLayout documentation for details.'
      );
    }
  }
  // Render custom logo with automatic dark mode switching
  const renderLogo = () => {
    if (!customLogo) {
      return <Logo size="md" theme={themeMode || 'auto'} className="h-[34px] w-[163px]" />;
    }

    // If themeMode is explicitly set, use it to determine which logo to show
    if (themeMode) {
      return (
        <img
          src={themeMode === 'dark' ? customLogo.dark : customLogo.light}
          alt="Logo"
          className="h-[34px] w-[163px] object-contain"
        />
      );
    }

    // Otherwise, render both logos and use CSS to show/hide based on dark mode
    return (
      <>
        <img
          src={customLogo.light}
          alt="Logo"
          className="block h-[34px] w-[163px] object-contain dark:hidden"
        />
        <img
          src={customLogo.dark}
          alt="Logo"
          className="hidden h-[34px] w-[163px] object-contain dark:block"
        />
      </>
    );
  };

  // Render illustration
  const renderIllustration = () => {
    if (!illustration) return null;

    // If illustration is a string (URL), render as image
    if (typeof illustration === 'string') {
      return (
        <img
          src={illustration}
          alt="Illustration"
          className="h-full w-full object-contain"
        />
      );
    }

    // Otherwise, render as ReactNode
    return illustration;
  };

  // Default layout - simple card
  if (layout === 'default') {
    return (
      <div className={twMerge('flex min-h-screen items-start sm:items-center justify-center p-0 sm:p-l bg-surface sm:bg-transparent', className)}>
        <div className="flex w-full h-full sm:h-auto max-w-[370px] flex-col gap-xl overflow-hidden sm:rounded-[24px] sm:border sm:border-shades-light dark:sm:border-shades-semi-light bg-surface p-l">
          <div className="relative h-[34px] w-full">{renderLogo()}</div>
          <div className="flex w-full flex-grow flex-col gap-m">{children}</div>
        </div>
      </div>
    );
  }

  // With illustration layout - side by side on desktop, stacked on mobile/tablet
  if (layout === 'with-illustration') {
    return (
      <div className={twMerge('flex min-h-screen items-start sm:items-center justify-center p-0 sm:p-l bg-surface sm:bg-transparent', className)}>
        {/* Mobile & Tablet: Stacked layout */}
        <div className="flex w-full h-full sm:h-auto max-w-[370px] flex-col overflow-hidden sm:rounded-[24px] sm:border sm:border-shades-light dark:sm:border-shades-semi-light bg-surface lg:hidden">
          {/* Form section */}
          <div className="flex w-full flex-col gap-xl bg-surface p-l flex-grow">
            <div className="relative h-[34px] w-full">{renderLogo()}</div>
            <div className="flex w-full flex-grow flex-col gap-m">{children}</div>
          </div>

          {/* Illustration section - only show on tablet */}
          {illustration && (
            <div className="hidden w-full items-center justify-center bg-secondary-10 dark:bg-shades-light px-[45px] py-[60px] sm:flex lg:hidden">
              <div className="h-[200px] w-[200px] overflow-hidden sm:h-[240px] sm:w-[240px]">
                {renderIllustration()}
              </div>
            </div>
          )}
        </div>

        {/* Desktop: Side by side layout */}
        <div className="hidden w-full h-full lg:h-auto max-w-[740px] overflow-hidden rounded-[24px] border border-shades-light dark:border-shades-semi-light bg-surface lg:flex">
          {/* Form section */}
          <div className="flex w-full max-w-[370px] flex-col gap-xl bg-surface p-l">
            <div className="relative h-[34px] w-full">{renderLogo()}</div>
            <div className="flex w-full flex-grow flex-col gap-m">{children}</div>
          </div>

          {/* Illustration section */}
          {illustration && (
            <div className="flex w-full max-w-[370px] items-center justify-center bg-secondary-10 dark:bg-shades-light  px-[45px] py-[85px]">
              <div className="h-[270px] w-[270px] overflow-hidden">
                {renderIllustration()}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Fullscreen layout - split screen on desktop, stacked on mobile/tablet
  if (layout === 'fullscreen') {
    return (
      <div className={twMerge('flex min-h-screen w-full overflow-hidden', className)}>
        {/* Mobile & Tablet: Stacked layout */}
        <div className="flex min-h-screen w-full flex-col lg:hidden">
          {/* Form section */}
          <div className="flex min-h-[60vh] w-full flex-col items-center justify-center bg-surface p-m sm:p-l">
            <div className="flex w-full max-w-[400px] flex-col gap-l sm:gap-xxl">
              <div className="px-0 sm:px-xl">
                <div className="relative h-[34px] w-full">{renderLogo()}</div>
              </div>
              <div className="flex w-full flex-col gap-m px-0 sm:px-xl">{children}</div>
            </div>
          </div>

          {/* Illustration section */}
          {illustration && (
            <div className="flex min-h-[40vh] w-full items-center justify-center bg-secondary-10 dark:bg-shades-light px-[30px] py-[40px] sm:px-[45px] sm:py-[60px]">
              <div className="h-[200px] w-[200px] overflow-hidden sm:h-[300px] sm:w-[300px]">
                {renderIllustration()}
              </div>
            </div>
          )}
        </div>

        {/* Desktop: Split screen layout */}
        <div className="hidden min-h-screen w-full lg:flex">
          {/* Form section */}
          <div className="flex min-h-screen w-full flex-col items-center justify-center bg-surface p-l">
            <div className="flex w-full max-w-[400px] flex-col gap-xxl">
              <div className="px-xl">
                <div className="relative h-[34px] w-full">{renderLogo()}</div>
              </div>
              <div className="flex w-full flex-col gap-m px-xl">{children}</div>
            </div>
          </div>

          {/* Illustration section */}
          {illustration && (
            <div className="flex min-h-screen w-full items-center justify-center bg-secondary-10 dark:bg-shades-light  px-[45px] py-[85px]">
              <div className="h-[446px] w-[446px] overflow-hidden">
                {renderIllustration()}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

AuthLayout.displayName = 'AuthLayout';

