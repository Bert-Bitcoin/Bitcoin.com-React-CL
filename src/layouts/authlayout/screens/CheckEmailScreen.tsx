import { twMerge } from 'tailwind-merge';

import { Button } from '../../../components/button';
import { SuccessCoinIllustration } from '../../../components/mini-illustrations';

export interface CheckEmailScreenProps {
  /**
   * Email address where reset link was sent
   */
  email?: string;
  /**
   * Callback when "Back to sign in" button is clicked
   */
  onBackToSignIn?: () => void;
  /**
   * Callback when "Resend email" link is clicked
   */
  onResendEmail?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * CheckEmailScreen component - displays message after password reset request
 */
export const CheckEmailScreen = ({
  email,
  onBackToSignIn,
  onResendEmail,
  className
}: CheckEmailScreenProps) => {
  return (
    <div className={twMerge('flex w-full flex-col gap-m', className)}>
      {/* Header */}
      <div className="flex flex-col items-center gap-m pb-s text-center">
        <div className="flex h-[120px] w-[120px] items-center justify-center">
          <SuccessCoinIllustration className="h-full w-full" />
        </div>
        <div className="flex flex-col gap-s">
          <h2 className="font-['Elza_Narrow'] text-[24px] font-black uppercase leading-[24px] text-text-primary">
            Check your email
          </h2>
          <p className="text-label text-text-secondary">
            We've sent password reset instructions to{' '}
            {email && <span className="font-bold text-text-primary">{email}</span>}
          </p>
          <p className="text-label text-text-secondary">
            Click the link in the email to reset your password.
          </p>
        </div>
      </div>

      {/* Spacer to push actions to bottom */}
      <div className="flex-grow" />

      {/* Actions */}
      <div className="flex flex-col gap-s">
        <Button variant="secondary" size="md" fullWidth onClick={onBackToSignIn}>
          Back to sign in
        </Button>
        <button
          type="button"
          onClick={onResendEmail}
          className="rounded-xxl px-m py-s text-label font-medium text-text-secondary hover:text-primary-100"
        >
          Didn't receive the email? <span className="font-bold">Resend</span>
        </button>
      </div>
    </div>
  );
};

CheckEmailScreen.displayName = 'CheckEmailScreen';

