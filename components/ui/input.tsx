import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-navy shadow-sm transition placeholder:text-slate-400 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/20',
        className
      )}
      {...props}
    />
  );
}
