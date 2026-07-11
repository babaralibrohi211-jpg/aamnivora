import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type CommonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const baseClass =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants = {
  primary:
    'bg-[linear-gradient(135deg,#081B3A_0%,#6B46FF_100%)] text-white shadow-[0_18px_36px_rgba(107,70,255,0.24),0_6px_18px_rgba(8,27,58,0.12)] hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(107,70,255,0.3),0_10px_24px_rgba(8,27,58,0.14)]',
  secondary: 'bg-white text-navy border border-slate-200 hover:border-purple/30 hover:bg-mist',
  ghost: 'bg-transparent text-navy hover:bg-slate-100'
};

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(baseClass, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ variant = 'primary', className, children, ...props }: AnchorProps) {
  return (
    <a className={cn(baseClass, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
