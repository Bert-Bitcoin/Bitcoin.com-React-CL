import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { AuthLayout } from './AuthLayout';
import { CheckEmailScreen } from './screens/CheckEmailScreen';
import { ForgotPasswordScreen } from './screens/ForgotPasswordScreen';
import { ResetPasswordScreen } from './screens/ResetPasswordScreen';
import { SignInScreen } from './screens/SignInScreen';
import { SignUpScreen } from './screens/SignUpScreen';
import { SignUpSuccessScreen } from './screens/SignUpSuccessScreen';
import { Illustration } from '../../components/illustration';
import { Button } from '../../components/button';

/**
 * IMPORTANT: Illustration Usage Rule
 * 
 * Only use FULL illustrations from `/src/illustrations/` directory or custom 
 * images via URL. Do NOT use mini-illustrations from `/src/components/mini-illustrations/` 
 * as they are too small (62x62px) for the AuthLayout which requires larger 
 * illustrations (270x270px minimum).
 * 
 * ✅ Correct: Use Illustration component with full illustration paths
 * ❌ Wrong:   import { SecureWalletIllustration } from '/src/components/mini-illustrations'
 */

// Full illustration path
const illustrationAccountPath = '/src/illustrations/Illustration-Account.svg';

const meta: Meta<typeof AuthLayout> = {
  title: 'Layouts/AuthLayout',
  component: AuthLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'AuthLayout provides a flexible authentication layout system with three variants: default (card), with-illustration (side-by-side), and fullscreen (split screen). Includes responsive breakpoints for mobile (< 768px), tablet (768px-1024px), and desktop (> 1024px). Supports custom logos with automatic dark mode switching and swappable illustrations.',
      },
    },
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['default', 'with-illustration', 'fullscreen'],
      description: 'Layout variant',
    },
    themeMode: {
      control: 'select',
      options: [undefined, 'light', 'dark'],
      description: 'Theme mode for logo switching (optional)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AuthLayout>;

// =============================================================================
// Overview & Getting Started
// =============================================================================

export const Overview = {
  name: 'Docs',
  render: () => (
    <div className="p-xl max-w-[1200px] mx-auto ">
      <div className="mb-xl">
        <h1 className="text-display mb-m">AuthLayout Component</h1>
        <p className="text-body text-text-secondary mb-l">
          A comprehensive authentication layout system with pre-built screen components for all common authentication flows.
          Fully responsive with automatic dark mode support.
        </p>
      </div>

      {/* Available Screens */}
      <div className="mb-2xl pb-xl">
        <h2 className="text-heading-lg mb-l">📱 Available Screen Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-l">
          {/* Sign In Screen */}
          <div className="border border-border rounded-l p-l bg-surface">
            <h3 className="text-heading-sm mb-s">SignInScreen</h3>
            <p className="text-body-sm text-text-secondary mb-m">
              Email and password authentication with "Remember me" checkbox and links to sign up and forgot password flows.
            </p>
            <code className="block bg-shades-extra-light dark:bg-shades-dark p-s rounded text-label-sm overflow-x-auto">
              {`<SignInScreen
  onSignIn={(data) => {}}
  onSignUpClick={() => {}}
  onForgotPasswordClick={() => {}}
/>`}
            </code>
          </div>

          {/* Sign Up Screen */}
          <div className="border border-border rounded-l p-l bg-surface">
            <h3 className="text-heading-sm mb-s">SignUpScreen</h3>
            <p className="text-body-sm text-text-secondary mb-m">
              User registration form with email, password, confirm password, and terms acceptance checkbox.
            </p>
            <code className="block bg-shades-extra-light dark:bg-shades-dark p-s rounded text-label-sm overflow-x-auto">
              {`<SignUpScreen
  onSignUp={(data) => {}}
  onSignInClick={() => {}}
/>`}
            </code>
          </div>

          {/* Sign Up Success */}
          <div className="border border-border rounded-l p-l bg-surface">
            <h3 className="text-heading-sm mb-s">SignUpSuccessScreen</h3>
            <p className="text-body-sm text-text-secondary mb-m">
              Confirmation screen shown after successful sign up. Displays SuccessCoinIllustration and instructions to check email.
            </p>
            <code className="block bg-shades-extra-light dark:bg-shades-dark p-s rounded text-label-sm overflow-x-auto">
              {`<SignUpSuccessScreen
  email="user@example.com"
  onGoToSignIn={() => {}}
  onResendEmail={() => {}}
/>`}
            </code>
          </div>

          {/* Forgot Password */}
          <div className="border border-border rounded-l p-l bg-surface">
            <h3 className="text-heading-sm mb-s">ForgotPasswordScreen</h3>
            <p className="text-body-sm text-text-secondary mb-m">
              Password reset request form. User enters email to receive reset instructions.
            </p>
            <code className="block bg-shades-extra-light dark:bg-shades-dark p-s rounded text-label-sm overflow-x-auto">
              {`<ForgotPasswordScreen
  onResetPassword={(data) => {}}
  onBackToSignIn={() => {}}
  loading={false}
  error=""
/>`}
            </code>
          </div>

          {/* Check Email */}
          <div className="border border-border rounded-l p-l bg-surface">
            <h3 className="text-heading-sm mb-s">CheckEmailScreen</h3>
            <p className="text-body-sm text-text-secondary mb-m">
              Confirmation screen after password reset request. Displays SuccessCoinIllustration and email sent message.
            </p>
            <code className="block bg-shades-extra-light dark:bg-shades-dark p-s rounded text-label-sm overflow-x-auto">
              {`<CheckEmailScreen
  email="user@example.com"
  onBackToSignIn={() => {}}
  onResendEmail={() => {}}
/>`}
            </code>
          </div>

          {/* Reset Password */}
          <div className="border border-border rounded-l p-l bg-surface">
            <h3 className="text-heading-sm mb-s">ResetPasswordScreen</h3>
            <p className="text-body-sm text-text-secondary mb-m">
              New password creation form with password confirmation validation.
            </p>
            <code className="block bg-shades-extra-light dark:bg-shades-dark p-s rounded text-label-sm overflow-x-auto">
              {`<ResetPasswordScreen
  onResetPassword={(data) => {}}
  onBackToSignIn={() => {}}
  loading={false}
  error=""
/>`}
            </code>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="mb-2xl pb-xl">
        <h2 className="text-heading-lg mb-l">🚀 Quick Start</h2>
        <div className="bg-surface border border-border rounded-l p-l">
          <h3 className="text-heading-sm mb-m">Basic Usage</h3>
          <code className="block bg-shades-extra-light dark:bg-shades-dark p-m rounded text-label-sm overflow-x-auto mb-l whitespace-pre">
{`import { AuthLayout, SignInScreen } from '@/layouts/authlayout';

function LoginPage() {
  return (
    <AuthLayout layout="default">
      <SignInScreen
        onSignIn={(data) => {
          console.log('Email:', data.email);
          console.log('Password:', data.password);
          console.log('Remember:', data.rememberMe);
        }}
        onSignUpClick={() => navigate('/signup')}
        onForgotPasswordClick={() => navigate('/forgot-password')}
      />
    </AuthLayout>
  );
}`}
          </code>

          <h3 className="text-heading-sm mb-m mt-l">With Illustration</h3>
          <code className="block bg-shades-extra-light dark:bg-shades-dark p-m rounded text-label-sm overflow-x-auto mb-l whitespace-pre">
{`import { AuthLayout, SignInScreen } from '@/layouts/authlayout';
import { Illustration } from '@/components/illustration';

function LoginPage() {
  return (
    <AuthLayout 
      layout="with-illustration"
      illustration={
        <Illustration 
          src="/src/illustrations/Illustration-Account.svg" 
          alt="Account" 
          size="full" 
          objectFit="contain" 
        />
      }
    >
      <SignInScreen onSignIn={(data) => handleSignIn(data)} />
    </AuthLayout>
  );
}`}
          </code>

          <h3 className="text-heading-sm mb-m mt-l">Custom Logo</h3>
          <code className="block bg-shades-extra-light dark:bg-shades-dark p-m rounded text-label-sm overflow-x-auto whitespace-pre">
{`<AuthLayout
  layout="with-illustration"
  customLogo={{
    light: '/src/images/Logo-Light.svg',
    dark: '/src/images/Logo-Dark.svg'
  }}
>
  <SignInScreen onSignIn={(data) => handleSignIn(data)} />
</AuthLayout>`}
          </code>
        </div>
      </div>

      {/* Layout Variants */}
      <div className="mb-2xl pb-xl">
        <h2 className="text-heading-lg mb-l">🎨 Layout Variants</h2>
        <div className="grid grid-cols-1 gap-l">
          <div className="border border-border rounded-l p-l bg-surface">
            <h3 className="text-heading-sm mb-s">default</h3>
            <p className="text-body-sm text-text-secondary">
              Simple centered card layout. Best for minimal, focused authentication.
            </p>
          </div>
          <div className="border border-border rounded-l p-l bg-surface">
            <h3 className="text-heading-sm mb-s">with-illustration</h3>
            <p className="text-body-sm text-text-secondary">
              Card with illustration side panel on desktop. Illustration shows below form on tablet, hidden on mobile.
            </p>
          </div>
          <div className="border border-border rounded-l p-l bg-surface">
            <h3 className="text-heading-sm mb-s">fullscreen</h3>
            <p className="text-body-sm text-text-secondary">
              Full-height split screen layout with form on left and illustration on right (desktop only).
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mb-2xl pb-xl">
        <h2 className="text-heading-lg mb-l">✨ Key Features</h2>
        <ul className="space-y-m text-body">
          <li className="flex items-start gap-s">
            <span className="text-success-100">✓</span>
            <span><strong>Responsive Design:</strong> Adapts seamlessly across mobile, tablet, and desktop</span>
          </li>
          <li className="flex items-start gap-s">
            <span className="text-success-100">✓</span>
            <span><strong>Dark Mode:</strong> Automatic theme switching with semantic tokens</span>
          </li>
          <li className="flex items-start gap-s">
            <span className="text-success-100">✓</span>
            <span><strong>Pre-built Screens:</strong> Complete authentication flow components included</span>
          </li>
          <li className="flex items-start gap-s">
            <span className="text-success-100">✓</span>
            <span><strong>Custom Branding:</strong> Easy logo replacement with light/dark variants</span>
          </li>
          <li className="flex items-start gap-s">
            <span className="text-success-100">✓</span>
            <span><strong>Flexible Illustrations:</strong> Swap illustrations or use custom images</span>
          </li>
          <li className="flex items-start gap-s">
            <span className="text-success-100">✓</span>
            <span><strong>Sticky Buttons:</strong> Action buttons align to bottom in card mode</span>
          </li>
          <li className="flex items-start gap-s">
            <span className="text-success-100">✓</span>
            <span><strong>TypeScript:</strong> Full type safety with comprehensive prop interfaces</span>
          </li>
        </ul>
      </div>

      {/* Note */}
      <div className="bg-primary-10 border border-primary-100 rounded-l p-l">
        <p className="text-body-sm text-text-primary">
          <strong>💡 Tip:</strong> Explore the stories below to see each screen in action and interactive demos of complete authentication flows.
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
    docs: {
      page: null,
      source: {
        code: null,
      },
    },
  },
};

// =============================================================================
// Sign In Flow
// =============================================================================

export const SignInDefault: Story = {
  args: {
    layout: 'default',
    children: (
      <SignInScreen
        onSignIn={(data) => console.log('Sign in:', data)}
        onSignUpClick={() => console.log('Go to sign up')}
        onForgotPasswordClick={() => console.log('Go to forgot password')}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Default sign in layout - simple card centered on the page. Responsive across all breakpoints.',
      },
    },
  },
};

export const SignInWithIllustration: Story = {
  args: {
    layout: 'with-illustration',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    children: (
      <SignInScreen
        onSignIn={(data) => console.log('Sign in:', data)}
        onSignUpClick={() => console.log('Go to sign up')}
        onForgotPasswordClick={() => console.log('Go to forgot password')}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Sign in layout with illustration. Desktop: side-by-side, Tablet: illustration below form, Mobile: form only.',
      },
    },
  },
};

export const SignInFullscreen: Story = {
  args: {
    layout: 'fullscreen',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    children: (
      <SignInScreen
        onSignIn={(data) => console.log('Sign in:', data)}
        onSignUpClick={() => console.log('Go to sign up')}
        onForgotPasswordClick={() => console.log('Go to forgot password')}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Sign in fullscreen split layout. Desktop: split screen, Mobile/Tablet: stacked vertically.',
      },
    },
  },
};

export const SignInLoading: Story = {
  args: {
    layout: 'with-illustration',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    children: (
      <SignInScreen
        onSignIn={(data) => console.log('Sign in:', data)}
        onSignUpClick={() => console.log('Go to sign up')}
        onForgotPasswordClick={() => console.log('Go to forgot password')}
        loading={true}
      />
    ),
  },
};

export const SignInWithError: Story = {
  args: {
    layout: 'with-illustration',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    children: (
      <SignInScreen
        onSignIn={(data) => console.log('Sign in:', data)}
        onSignUpClick={() => console.log('Go to sign up')}
        onForgotPasswordClick={() => console.log('Go to forgot password')}
        error="Invalid email or password. Please try again."
      />
    ),
  },
};

// =============================================================================
// Sign Up Flow
// =============================================================================

export const SignUpDefault: Story = {
  args: {
    layout: 'default',
    children: (
      <SignUpScreen
        onSignUp={(data) => console.log('Sign up:', data)}
        onSignInClick={() => console.log('Go to sign in')}
      />
    ),
  },
};

export const SignUpWithIllustration: Story = {
  args: {
    layout: 'with-illustration',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    children: (
      <SignUpScreen
        onSignUp={(data) => console.log('Sign up:', data)}
        onSignInClick={() => console.log('Go to sign in')}
      />
    ),
  },
};

export const SignUpFullscreen: Story = {
  args: {
    layout: 'fullscreen',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    children: (
      <SignUpScreen
        onSignUp={(data) => console.log('Sign up:', data)}
        onSignInClick={() => console.log('Go to sign in')}
      />
    ),
  },
};

export const SignUpSuccess: Story = {
  args: {
    layout: 'with-illustration',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    children: (
      <SignUpSuccessScreen
        email="user@example.com"
        onGoToSignIn={() => console.log('Go to sign in')}
        onResendEmail={() => console.log('Resend email')}
      />
    ),
  },
};

// =============================================================================
// Forgot Password Flow
// =============================================================================

export const ForgotPassword: Story = {
  args: {
    layout: 'default',
    children: (
      <ForgotPasswordScreen
        onResetPassword={(data) => console.log('Reset password:', data)}
        onBackToSignIn={() => console.log('Back to sign in')}
      />
    ),
  },
};

export const ForgotPasswordWithIllustration: Story = {
  args: {
    layout: 'with-illustration',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    children: (
      <ForgotPasswordScreen
        onResetPassword={(data) => console.log('Reset password:', data)}
        onBackToSignIn={() => console.log('Back to sign in')}
      />
    ),
  },
};

export const CheckEmail: Story = {
  args: {
    layout: 'with-illustration',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    children: (
      <CheckEmailScreen
        email="user@example.com"
        onBackToSignIn={() => console.log('Back to sign in')}
        onResendEmail={() => console.log('Resend email')}
      />
    ),
  },
};

export const ResetPassword: Story = {
  args: {
    layout: 'with-illustration',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    children: (
      <ResetPasswordScreen
        onResetPassword={(data) => console.log('Reset password:', data)}
        onBackToSignIn={() => console.log('Back to sign in')}
      />
    ),
  },
};

// =============================================================================
// Custom Logo Examples
// =============================================================================

export const WithCustomLogo: Story = {
  args: {
    layout: 'with-illustration',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    customLogo: {
      light: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="163" height="34" viewBox="0 0 163 34"%3E%3Crect width="163" height="34" rx="4" fill="%234A90E2"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold"%3ECustom Brand%3C/text%3E%3C/svg%3E',
      dark: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="163" height="34" viewBox="0 0 163 34"%3E%3Crect width="163" height="34" rx="4" fill="%232C3E50"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold"%3ECustom Brand%3C/text%3E%3C/svg%3E'
    },
    children: (
      <SignInScreen
        onSignIn={(data) => console.log('Sign in:', data)}
        onSignUpClick={() => console.log('Go to sign up')}
        onForgotPasswordClick={() => console.log('Go to forgot password')}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'AuthLayout with custom logo using inline SVG data URIs that automatically switch between light and dark versions.',
      },
    },
  },
};

export const WithCustomLogoFiles: Story = {
  args: {
    layout: 'with-illustration',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    customLogo: {
      light: '/src/images/Logo-Light.svg',
      dark: '/src/images/Logo-Dark.svg'
    },
    children: (
      <SignInScreen
        onSignIn={(data) => console.log('Sign in:', data)}
        onSignUpClick={() => console.log('Go to sign up')}
        onForgotPasswordClick={() => console.log('Go to forgot password')}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'AuthLayout with custom logo using image file paths. This approach is useful when you have existing logo files in your project.',
      },
    },
  },
};

// =============================================================================
// Responsive Breakpoint Examples
// =============================================================================

export const ResponsiveMobile: Story = {
  args: {
    layout: 'with-illustration',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    children: (
      <SignInScreen
        onSignIn={(data) => console.log('Sign in:', data)}
        onSignUpClick={() => console.log('Go to sign up')}
        onForgotPasswordClick={() => console.log('Go to forgot password')}
      />
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile breakpoint (< 768px): Form only, no illustration visible.',
      },
    },
  },
};

export const ResponsiveTablet: Story = {
  args: {
    layout: 'with-illustration',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    children: (
      <SignInScreen
        onSignIn={(data) => console.log('Sign in:', data)}
        onSignUpClick={() => console.log('Go to sign up')}
        onForgotPasswordClick={() => console.log('Go to forgot password')}
      />
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Tablet breakpoint (768px-1024px): Stacked layout with illustration below form.',
      },
    },
  },
};

export const ResponsiveDesktop: Story = {
  args: {
    layout: 'with-illustration',
    illustration: <Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />,
    children: (
      <SignInScreen
        onSignIn={(data) => console.log('Sign in:', data)}
        onSignUpClick={() => console.log('Go to sign up')}
        onForgotPasswordClick={() => console.log('Go to forgot password')}
      />
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    docs: {
      description: {
        story: 'Desktop breakpoint (> 1024px): Side-by-side layout with form and illustration.',
      },
    },
  },
};

// =============================================================================
// Interactive Full Flow Demo
// =============================================================================

type AuthScreen =
  | 'sign-in'
  | 'sign-up'
  | 'sign-up-success'
  | 'forgot-password'
  | 'check-email'
  | 'reset-password';

const FullFlowDemo = () => {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>('sign-in');
  const [email, setEmail] = useState('');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'sign-in':
        return (
          <SignInScreen
            onSignIn={(data) => {
              console.log('Sign in:', data);
              alert('Signed in successfully!');
            }}
            onSignUpClick={() => setCurrentScreen('sign-up')}
            onForgotPasswordClick={() => setCurrentScreen('forgot-password')}
          />
        );
      case 'sign-up':
        return (
          <SignUpScreen
            onSignUp={(data) => {
              console.log('Sign up:', data);
              setEmail(data.email);
              setCurrentScreen('sign-up-success');
            }}
            onSignInClick={() => setCurrentScreen('sign-in')}
          />
        );
      case 'sign-up-success':
        return (
          <SignUpSuccessScreen
            email={email}
            onGoToSignIn={() => setCurrentScreen('sign-in')}
            onResendEmail={() => {
              console.log('Resend email');
              alert('Confirmation email resent!');
            }}
          />
        );
      case 'forgot-password':
        return (
          <ForgotPasswordScreen
            onResetPassword={(data) => {
              console.log('Reset password:', data);
              setEmail(data.email);
              setCurrentScreen('check-email');
            }}
            onBackToSignIn={() => setCurrentScreen('sign-in')}
          />
        );
      case 'check-email':
        return (
          <CheckEmailScreen
            email={email}
            onBackToSignIn={() => setCurrentScreen('sign-in')}
            onResendEmail={() => {
              console.log('Resend email');
              alert('Reset email resent!');
            }}
          />
        );
      case 'reset-password':
        return (
          <ResetPasswordScreen
            onResetPassword={(data) => {
              console.log('Reset password:', data);
              alert('Password reset successfully!');
              setCurrentScreen('sign-in');
            }}
            onBackToSignIn={() => setCurrentScreen('sign-in')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="fixed left-0 right-0 top-0 z-50 flex gap-s border-b border-border bg-surface p-m">
        <Button
          onClick={() => setCurrentScreen('sign-in')}
          variant="primary"
          size="sm"
        >
          Sign In
        </Button>
        <Button
          onClick={() => setCurrentScreen('sign-up')}
          variant="primary"
          size="sm"
        >
          Sign Up
        </Button>
        <Button
          onClick={() => setCurrentScreen('forgot-password')}
          variant="primary"
          size="sm"
        >
          Forgot Password
        </Button>
        <Button
          onClick={() => setCurrentScreen('reset-password')}
          variant="primary"
          size="sm"
        >
          Reset Password
        </Button>
      </div>
      <div className="pt-[60px]">
        <AuthLayout layout="with-illustration" illustration={<Illustration src={illustrationAccountPath} alt="Account" size="full" objectFit="contain" />}>
          {renderScreen()}
        </AuthLayout>
      </div>
    </div>
  );
};

export const InteractiveFullFlow: Story = {
  render: () => <FullFlowDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demo showing all authentication flows with responsive behavior. Use the buttons at the top to switch between screens, or use the links within the forms to navigate naturally. Resize your browser to see responsive breakpoints in action.',
      },
    },
  },
};

