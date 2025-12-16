import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '../../../components/button';
import { Checkbox } from '../../../components/checkbox';
import { Input } from '../../../components/input';

export interface SignInScreenProps {
  /**
   * Callback when sign in button is clicked
   */
  onSignIn?: (data: { email: string; password: string; rememberMe: boolean }) => void;
  /**
   * Callback when "Sign up here" link is clicked
   */
  onSignUpClick?: () => void;
  /**
   * Callback when "Forgot password?" link is clicked
   */
  onForgotPasswordClick?: () => void;
  /**
   * Loading state for the sign in button
   */
  loading?: boolean;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Custom heading text
   * @default "Sign in to your account"
   */
  heading?: string;
  /**
   * Custom description text (e.g., "Not a member? Sign up here")
   * Set to null to hide
   */
  description?: React.ReactNode | null;
  /**
   * Custom email label
   * @default "Email"
   */
  emailLabel?: string;
  /**
   * Custom password label
   * @default "Password"
   */
  passwordLabel?: string;
  /**
   * Custom remember me label
   * @default "Remember me"
   */
  rememberMeLabel?: string;
  /**
   * Custom forgot password text
   * @default "Forget Password?"
   */
  forgotPasswordText?: string;
  /**
   * Custom button label
   * @default "Sign in"
   */
  buttonLabel?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * SignInScreen component - displays a sign in form
 */
export const SignInScreen = ({
  onSignIn,
  onSignUpClick,
  onForgotPasswordClick,
  loading,
  error,
  heading = 'Sign in to your account',
  description,
  emailLabel = 'Email',
  passwordLabel = 'Password',
  rememberMeLabel = 'Remember me',
  forgotPasswordText = 'Forget Password?',
  buttonLabel = 'Sign in',
  className
}: SignInScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const defaultDescription = description === undefined ? (
    <>
      Not a member? <button onClick={onSignUpClick} className="font-bold text-primary-100" type="button">Sign up here</button>
    </>
  ) : description;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn?.({ email, password, rememberMe });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={twMerge('flex w-full flex-col gap-m', className)}
    >
      {/* Header */}
      <div className="flex flex-col gap-s pb-s">
        <h2 className="font-['Elza_Narrow'] text-[24px] font-black uppercase leading-[24px] text-text-primary">
          {heading}
        </h2>
        {defaultDescription && (
          <p className="text-label text-text-secondary">{defaultDescription}</p>
        )}
      </div>

      {/* Error message */}
      {error && (
        <div className="rounded-[8px] bg-alerts-10 px-m py-s text-label text-alerts-100">
          {error}
        </div>
      )}

      {/* Email field */}
      <Input
        label={emailLabel}
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />

      {/* Password field */}
      <div className="flex flex-col gap-s pb-s">
        <Input
          label={passwordLabel}
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        
        {/* Remember me & Forgot password */}
        <div className="flex items-center justify-between">
          <Checkbox
            label={rememberMeLabel}
            checked={rememberMe}
            onCheckedChange={setRememberMe}
          />
          <button
            type="button"
            onClick={onForgotPasswordClick}
            className="rounded-xxl px-xs py-xs text-label-sm font-bold text-primary-100 hover:text-primary-50"
          >
            {forgotPasswordText}
          </button>
        </div>
      </div>

      {/* Sign in button */}
      <Button type="submit" variant="secondary" size="md" fullWidth loading={loading}>
        {buttonLabel}
      </Button>
    </form>
  );
};

SignInScreen.displayName = 'SignInScreen';

