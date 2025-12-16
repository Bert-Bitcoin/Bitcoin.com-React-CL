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
  className
}: SignUpScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

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
          Create your account
        </h2>
        <p className="text-label text-text-secondary">
          Already a member?{' '}
          <button
            type="button"
            onClick={onSignInClick}
            className="font-bold text-primary-100 hover:text-primary-50"
          >
            Sign in here
          </button>
        </p>
      </div>

      {/* Error message */}
      {error && (
        <div className="rounded-[8px] bg-alerts-10 px-m py-s text-label text-alerts-100">
          {error}
        </div>
      )}

      {/* Email field */}
      <Input
        label="Email"
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />

      {/* Password field */}
      <Input
        label="Password"
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
          label="Confirm Password"
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
        label="I agree to the Terms and Conditions"
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
        Sign up
      </Button>
    </form>
  );
};

SignUpScreen.displayName = 'SignUpScreen';

