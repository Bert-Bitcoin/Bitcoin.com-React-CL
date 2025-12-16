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
   * Custom heading text
   * @default "Check your email"
   */
  heading?: string;
  /**
   * Custom primary description text
   */
  description?: string;
  /**
   * Custom secondary description text
   */
  secondaryDescription?: string;
  /**
   * Custom button label
   * @default "Back to sign in"
   */
  buttonLabel?: string;
  /**
   * Custom resend link text
   * @default "Didn't receive the email? Resend"
   */
  resendText?: string;
  /**
   * Custom illustration component (ReactNode)
   * If not provided, uses SuccessCoinIllustration
   */
  illustration?: React.ReactNode;
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
  heading = 'Check your email',
  description,
  secondaryDescription = 'Click the link in the email to reset your password.',
  buttonLabel = 'Back to sign in',
  resendText,
  illustration,
  className
}: CheckEmailScreenProps) => {
  const defaultDescription = description ?? (
    <>
      We've sent password reset instructions to{' '}
      {email && <span className="font-bold text-text-primary">{email}</span>}
    </>
  );

  const defaultResendText = resendText ?? (
    <>
      Didn't receive the email? <span className="font-bold">Resend</span>
    </>
  );

  return (
    <div className={twMerge('flex w-full flex-col gap-m', className)}>
      {/* Header */}
      <div className="flex flex-col items-center gap-m pb-s text-center">
        <div className="flex h-[120px] w-[120px] items-center justify-center">
          {illustration || <SuccessCoinIllustration className="h-full w-full" />}
        </div>
        <div className="flex flex-col gap-s">
          <h2 className="font-['Elza_Narrow'] text-[24px] font-black uppercase leading-[24px] text-text-primary">
            {heading}
          </h2>
          <p className="text-label text-text-secondary">{defaultDescription}</p>
          {secondaryDescription && (
            <p className="text-label text-text-secondary">{secondaryDescription}</p>
          )}
        </div>
      </div>

      {/* Spacer to push actions to bottom */}
      <div className="flex-grow" />

      {/* Actions */}
      <div className="flex flex-col gap-s">
        <Button variant="secondary" size="md" fullWidth onClick={onBackToSignIn}>
          {buttonLabel}
        </Button>
        <button
          type="button"
          onClick={onResendEmail}
          className="rounded-xxl px-m py-s text-label font-medium text-text-secondary hover:text-primary-100"
        >
          {defaultResendText}
        </button>
      </div>
    </div>
  );
};

CheckEmailScreen.displayName = 'CheckEmailScreen';

