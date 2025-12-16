import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '../../../components/button';
import { Input } from '../../../components/input';

export interface ForgotPasswordScreenProps {
  /**
   * Callback when reset password button is clicked
   */
  onResetPassword?: (data: { email: string }) => void;
  /**
   * Callback when "Back to sign in" link is clicked
   */
  onBackToSignIn?: () => void;
  /**
   * Loading state for the reset button
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
 * ForgotPasswordScreen component - displays forgot password form
 */
export const ForgotPasswordScreen = ({
  onResetPassword,
  onBackToSignIn,
  loading,
  error,
  className
}: ForgotPasswordScreenProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onResetPassword?.({ email });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={twMerge('flex w-full flex-col gap-m', className)}
    >
      {/* Header */}
      <div className="flex flex-col gap-s pb-s">
        <h2 className="font-['Elza_Narrow'] text-[24px] font-black uppercase leading-[24px] text-text-primary">
          Reset your password
        </h2>
        <p className="text-label text-text-secondary">
          Enter your email address and we'll send you instructions to reset your password.
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

      {/* Spacer to push actions to bottom */}
      <div className="flex-grow" />

      {/* Reset button */}
      <Button type="submit" variant="secondary" size="md" fullWidth loading={loading}>
        Send reset link
      </Button>

      {/* Back to sign in */}
      <button
        type="button"
        onClick={onBackToSignIn}
        className="rounded-xxl px-m py-s text-label font-medium text-text-secondary hover:text-primary-100"
      >
        Back to <span className="font-bold">sign in</span>
      </button>
    </form>
  );
};

ForgotPasswordScreen.displayName = 'ForgotPasswordScreen';

