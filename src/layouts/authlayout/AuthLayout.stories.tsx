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

