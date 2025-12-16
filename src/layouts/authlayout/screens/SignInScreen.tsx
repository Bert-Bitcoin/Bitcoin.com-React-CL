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
  className
}: SignInScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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
          Sign in to your account
        </h2>
        <p className="text-label text-text-secondary">
          Not a member?{' '}
          <button
            type="button"
            onClick={onSignUpClick}
            className="font-bold text-primary-100 hover:text-primary-50"
          >
            Sign up here
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
      <div className="flex flex-col gap-s pb-s">
        <Input
          label="Password"
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
            label="Remember me"
            checked={rememberMe}
            onCheckedChange={setRememberMe}
          />
          <button
            type="button"
            onClick={onForgotPasswordClick}
            className="rounded-xxl px-xs py-xs text-label-sm font-bold text-primary-100 hover:text-primary-50"
          >
            Forgot Password?
          </button>
        </div>
      </div>

      {/* Sign in button */}
      <Button type="submit" variant="secondary" size="md" fullWidth loading={loading}>
        Sign in
      </Button>
    </form>
  );
};

SignInScreen.displayName = 'SignInScreen';

