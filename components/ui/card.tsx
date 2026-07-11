import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

export function Card({ className, children, ...props }: Props) {
  return (
    <div className={cn('rounded-3xl border border-slate-200 bg-white shadow-soft', className)} {...props}>
      {children}
    </div>
  );
}
