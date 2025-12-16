# AuthLayout

A flexible authentication layout system with three layout variants, responsive breakpoints, and pre-built screen components for common authentication flows.

## Features

- **Three Layout Types**: 
  - `default`: Simple card layout (form only)
  - `with-illustration`: Card with illustration on the right side
  - `fullscreen`: Split screen with form on left and illustration on right
- **Responsive Breakpoints**:
  - **Mobile** (< 768px): Single column, form only
  - **Tablet** (768px-1024px): Stacked layout, optimized spacing
  - **Desktop** (> 1024px): Full layout with side-by-side or split screen
- **Pre-built Screen Components**: Sign in, sign up, forgot password, and more
- **Custom Logo Support**: Easy logo replacement with automatic dark mode switching
- **Swappable Illustrations**: Use any ReactNode, SVG, or image URL
- **Fully Responsive**: Adapts beautifully across all screen sizes
- **Dark Mode Support**: Automatic theme switching with semantic tokens
- **TypeScript**: Fully typed with comprehensive prop interfaces

## Responsive Behavior

Based on the Figma design specifications ([view design](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18099-8838&t=RzV5vfctX24k6RaF-1)), the component adapts to three breakpoints:

### Mobile (< 768px)
- Single column layout
- Form only (illustration hidden)
- Compact spacing
- Full width up to 370px max

### Tablet (768px - 1024px)
- Stacked vertical layout
- Form on top
- Illustration below form (for `with-illustration` layout)
- Optimized spacing

### Desktop (> 1024px)
- `default`: Centered card (370px)
- `with-illustration`: Side-by-side (740px total)
- `fullscreen`: Split screen (50/50)

## Usage

### Basic Sign In

```tsx
import { AuthLayout, SignInScreen } from '@/layouts/authlayout';

function SignInPage() {
  return (
    <AuthLayout layout="default">
      <SignInScreen
        onSignIn={(data) => {
          // Handle sign in
          console.log(data.email, data.password, data.rememberMe);
        }}
        onSignUpClick={() => {
          // Navigate to sign up
        }}
        onForgotPasswordClick={() => {
          // Navigate to forgot password
        }}
      />
    </AuthLayout>
  );
}
```

### With Illustration (Responsive)

```tsx
import { AuthLayout, SignInScreen } from '@/layouts/authlayout';
import { Illustration } from '@/components/illustration';

function SignInPage() {
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
      <SignInScreen
        onSignIn={(data) => {
          // Handle sign in
        }}
      />
    </AuthLayout>
  );
}
```

**⚠️ IMPORTANT - Illustration Requirements:**
- **Use the `Illustration` component** with full illustrations from `/src/illustrations/` directory (270x270px+)
- **Do NOT use mini-illustrations** from `/src/components/mini-illustrations/` (too small at 62x62px)
- Alternatively, use custom images via URL or any ReactNode that renders appropriately large content

The illustration will automatically:
- Hide on mobile (< 768px)
- Show below form on tablet (768px-1024px)
- Show side-by-side on desktop (> 1024px)

### Fullscreen Layout

```tsx
<AuthLayout 
  layout="fullscreen" 
  illustration={<MyIllustration />}
>
  <SignInScreen onSignIn={handleSignIn} />
</AuthLayout>
```

Responsive behavior:
- Mobile/Tablet: Stacked vertically (60% form, 40% illustration)
- Desktop: Split screen horizontally (50/50)

### Custom Logo

```tsx
<AuthLayout
  layout="with-illustration"
  customLogo={{
    light: '/logo-light.svg',
    dark: '/logo-dark.svg'
  }}
>
  <SignInScreen onSignIn={handleSignIn} />
</AuthLayout>
```

## Available Screen Components

### SignInScreen

Sign in form with email, password, remember me, and forgot password link.

```tsx
<SignInScreen
  onSignIn={(data) => {
    // data: { email, password, rememberMe }
  }}
  onSignUpClick={() => {}}
  onForgotPasswordClick={() => {}}
  loading={false}
  error="Invalid credentials"
/>
```

### SignUpScreen

Sign up form with email, password, confirm password, and terms acceptance.

```tsx
<SignUpScreen
  onSignUp={(data) => {
    // data: { email, password, confirmPassword, agreedToTerms }
  }}
  onSignInClick={() => {}}
  loading={false}
  error="Email already exists"
/>
```

### SignUpSuccessScreen

Success message after sign up with email confirmation prompt.

```tsx
<SignUpSuccessScreen
  email="user@example.com"
  onGoToSignIn={() => {}}
  onResendEmail={() => {}}
/>
```

### ForgotPasswordScreen

Form to request password reset email.

```tsx
<ForgotPasswordScreen
  onResetPassword={(data) => {
    // data: { email }
  }}
  onBackToSignIn={() => {}}
  loading={false}
  error="Email not found"
/>
```

### CheckEmailScreen

Message after password reset request sent.

```tsx
<CheckEmailScreen
  email="user@example.com"
  onBackToSignIn={() => {}}
  onResendEmail={() => {}}
/>
```

### ResetPasswordScreen

Form to create new password.

```tsx
<ResetPasswordScreen
  onResetPassword={(data) => {
    // data: { password, confirmPassword }
  }}
  onBackToSignIn={() => {}}
  loading={false}
  error="Passwords don't match"
/>
```

## Complete Authentication Flow Example

```tsx
import { useState } from 'react';
import { AuthLayout, SignInScreen, SignUpScreen, SignUpSuccessScreen } from '@/layouts/authlayout';

type AuthScreen = 'sign-in' | 'sign-up' | 'sign-up-success';

function AuthPage() {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>('sign-in');
  const [email, setEmail] = useState('');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'sign-in':
        return (
          <SignInScreen
            onSignIn={async (data) => {
              // Call your API
              await signIn(data);
            }}
            onSignUpClick={() => setCurrentScreen('sign-up')}
            onForgotPasswordClick={() => {
              // Navigate to forgot password
            }}
          />
        );
      case 'sign-up':
        return (
          <SignUpScreen
            onSignUp={async (data) => {
              setEmail(data.email);
              await signUp(data);
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
            onResendEmail={async () => {
              await resendConfirmationEmail(email);
            }}
          />
        );
    }
  };

  return (
    <AuthLayout 
      layout="with-illustration"
      illustration={<MyIllustration />}
    >
      {renderScreen()}
    </AuthLayout>
  );
}
```

## Props

### AuthLayout Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `layout` | `'default' \| 'with-illustration' \| 'fullscreen'` | `'default'` | Layout variant |
| `children` | `ReactNode` | - | Content to display in the form area |
| `illustration` | `ReactNode \| string` | - | Illustration component or image URL |
| `customLogo` | `{ light: string, dark: string }` | - | Custom logo URLs |
| `themeMode` | `'light' \| 'dark'` | - | Force specific theme mode |
| `className` | `string` | - | Additional CSS classes |

## Responsive Breakpoints

The component uses Tailwind's responsive breakpoints:

- **Mobile**: `< sm` (< 768px)
- **Tablet**: `sm` to `lg` (768px - 1024px)
- **Desktop**: `lg+` (> 1024px)

These align with the Figma design's Type attribute:
- Type=Mobile → Mobile breakpoint
- Type=Tablet → Tablet breakpoint
- Type=Default → Desktop breakpoint

## Layout Types

### Default
- Simple centered card
- Form only, no illustration
- Perfect for minimal authentication
- **Mobile**: 100% width, max 370px
- **Tablet/Desktop**: Centered card, 370px

### With Illustration
- Form + illustration layout
- **Mobile** (< 768px): Form only
- **Tablet** (768px-1024px): Stacked (form above, illustration below)
- **Desktop** (> 1024px): Side-by-side (370px + 370px = 740px)

### Fullscreen
- Most immersive experience
- **Mobile/Tablet**: Stacked vertically (60/40 split)
- **Desktop**: Split screen horizontally (50/50)

## Customization

### Using Mini Illustrations

The component works seamlessly with the mini-illustration system:

```tsx
import { AuthLayout } from '@/layouts/authlayout';
import { MiniIllustration } from '@/components/mini-illustrations';
import { AccountIllustration } from '@/components/mini-illustrations';

<AuthLayout 
  layout="with-illustration"
  illustration={
    <MiniIllustration 
      illustration={AccountIllustration}
      size="xl"
    />
  }
>
  <SignInScreen />
</AuthLayout>
```

### Custom Content

You can use any custom content inside the layout:

```tsx
<AuthLayout layout="default">
  <div className="flex flex-col gap-m">
    <h2 className="text-heading-lg">Custom Content</h2>
    <p className="text-body">Add your own forms and content here</p>
    <YourCustomForm />
  </div>
</AuthLayout>
```

## Design System Integration

This component follows all design system rules:

- ✅ Uses semantic tokens only (no raw hex values)
- ✅ Proper typography mapping (Elza Narrow for headings, Satoshi for body)
- ✅ Reuses existing components (Input, Button, Checkbox, Logo)
- ✅ Supports light and dark themes automatically
- ✅ No `dark:` utility classes (handled by tokens)
- ✅ Fully responsive with proper spacing tokens
- ✅ Matches Figma design breakpoints exactly

## Accessibility

- Semantic HTML (`form`, `label`, `button`)
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Responsive across all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Related Components

- [Logo](../../components/logo/README.md)
- [Input](../../components/input/README.md)
- [Button](../../components/button/README.md)
- [Checkbox](../../components/checkbox/README.md)
- [Mini Illustrations](../../components/mini-illustrations/README.md)

## Design Reference

Based on the Figma design: [Web Component Library - Account Layout](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18099-8838&t=RzV5vfctX24k6RaF-1)
