import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '../../../components/button';
import { Input } from '../../../components/input';

export interface ResetPasswordScreenProps {
  /**
   * Callback when reset password button is clicked
   */
  onResetPassword?: (data: { password: string; confirmPassword: string }) => void;
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
 * ResetPasswordScreen component - displays new password form
 */
export const ResetPasswordScreen = ({
  onResetPassword,
  onBackToSignIn,
  loading,
  error,
  className
}: ResetPasswordScreenProps) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onResetPassword?.({ password, confirmPassword });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={twMerge('flex w-full flex-col gap-m', className)}
    >
      {/* Header */}
      <div className="flex flex-col gap-s pb-s">
        <h2 className="font-['Elza_Narrow'] text-[24px] font-black uppercase leading-[24px] text-text-primary">
          Create new password
        </h2>
        <p className="text-label text-text-secondary">
          Your new password must be different from your previously used passwords.
        </p>
      </div>

      {/* Error message */}
      {error && (
        <div className="rounded-[8px] bg-alerts-10 px-m py-s text-label text-alerts-100">
          {error}
        </div>
      )}

      {/* New Password field */}
      <Input
        label="New Password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        helperText="Must be at least 8 characters"
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

      {/* Spacer to push actions to bottom */}
      <div className="flex-grow" />

      {/* Reset button */}
      <Button type="submit" variant="secondary" size="md" fullWidth loading={loading}>
        Reset password
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

ResetPasswordScreen.displayName = 'ResetPasswordScreen';

