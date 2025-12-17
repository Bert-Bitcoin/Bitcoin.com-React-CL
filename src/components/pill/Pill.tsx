import { twMerge } from 'tailwind-merge';
import type { PillProps, PillType, PillStyle } from './Pill.types';

const baseClasses =
  'inline-flex items-center justify-center px-s py-xs rounded-md font-sans font-bold text-[9px] uppercase leading-[13px] whitespace-nowrap';

const fillClasses: Record<PillType, string> = {
  default: 'bg-shades-extra-dark text-shades-extra-light',
  primary: 'bg-primary-100 text-white',
  secondary: 'bg-secondary-100 text-[#FFFFFF]',
  green: 'bg-extra-green-100 text-extra-green-10',
  purple: 'bg-extra-purple-100 text-extra-purple-10',
  red: 'bg-alerts-100 text-alerts-10'
};

const outlineClasses: Record<PillType, string> = {
  default: 'border-[1.4px] border-shades-dark text-shades-extra-dark',
  primary: 'border-[1.4px] border-primary-100 text-shades-extra-dark',
  secondary: 'border-[1.4px] border-secondary-100 text-shades-extra-dark',
  green: 'border-[1.4px] border-extra-green-100 text-shades-extra-dark',
  purple: 'border-[1.4px] border-extra-purple-100 text-shades-extra-dark',
  red: 'border-[1.4px] border-alerts-100 text-shades-extra-dark'
};

export const Pill = ({
  type = 'default',
  style = 'fill',
  children,
  className
}: PillProps) => {
  const styleClasses = style === 'fill' ? fillClasses[type] : outlineClasses[type];

  return (
    <span className={twMerge(baseClasses, styleClasses, className)}>
      {children}
    </span>
  );
};

Pill.displayName = 'Pill';


