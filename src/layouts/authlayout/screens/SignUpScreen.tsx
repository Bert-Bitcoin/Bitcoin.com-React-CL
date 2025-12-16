import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '../../../components/button';
import { Checkbox } from '../../../components/checkbox';
import { Input } from '../../../components/input';

export interface SignUpScreenProps {
  /**
   * Callback when sign up button is clicked
   */
  onSignUp?: (data: { email: string; password: string; confirmPassword: string; agreedToTerms: boolean }) => void;
  /**
   * Callback when "Sign in here" link is clicked
   */
  onSignInClick?: () => void;
  /**
   * Loading state for the sign up button
   */
  loading?: boolean;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Custom heading text
   * @default "Create your account"
   */
  heading?: string;
  /**
   * Custom description text
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
   * Custom confirm password label
   * @default "Confirm Password"
   */
  confirmPasswordLabel?: string;
  /**
   * Custom terms checkbox label
   * @default "I agree to the Terms & Conditions"
   */
  termsLabel?: string;
  /**
   * Custom button label
   * @default "Create account"
   */
  buttonLabel?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * SignUpScreen component - displays a sign up form
 */
export const SignUpScreen = ({
  onSignUp,
  onSignInClick,
  loading,
  error,
  heading = 'Create your account',
  description,
  emailLabel = 'Email',
  passwordLabel = 'Password',
  confirmPasswordLabel = 'Confirm Password',
  termsLabel,
  buttonLabel = 'Create account',
  className
}: SignUpScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const defaultDescription = description === undefined ? (
    <>
      Already a member?{' '}
      <button type="button" onClick={onSignInClick} className="font-bold text-primary-100 hover:text-primary-50">
        Sign in here
      </button>
    </>
  ) : description;

  const defaultTermsLabel = termsLabel ?? 'I agree to the Terms & Conditions';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignUp?.({ email, password, confirmPassword, agreedToTerms });
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
      <Input
        label={passwordLabel}
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
      />

      {/* Confirm Password field */}
      <div className="flex flex-col gap-s pb-s">
        <Input
          label={confirmPasswordLabel}
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          required
        />
      </div>

      {/* Terms and conditions */}
      <Checkbox
        label={defaultTermsLabel}
        checked={agreedToTerms}
        onCheckedChange={setAgreedToTerms}
      />

      {/* Sign up button */}
      <Button
        type="submit"
        variant="secondary"
        size="md"
        fullWidth
        loading={loading}
        disabled={!agreedToTerms}
      >
        {buttonLabel}
      </Button>
    </form>
  );
};

SignUpScreen.displayName = 'SignUpScreen';

