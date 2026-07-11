"use client";

import type { HTMLAttributes, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type FannedCardProps = HTMLAttributes<HTMLElement> & {
  icon: ReactNode;
  number: string;
  title: string;
  description: string;
  rotation: number;
  index: number;
  total: number;
  activeIndex: number | null;
  onHoverStart?: (index: number) => void;
  onHoverEnd?: () => void;
};

export function FannedCard({
  className,
  icon,
  number,
  title,
  description,
  rotation,
  index,
  total,
  activeIndex,
  onHoverStart,
  onHoverEnd,
  ...props
}: FannedCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isActive = activeIndex === index;
  const hasHoverFocus = activeIndex !== null;
  const direction = activeIndex === null ? 0 : index < activeIndex ? -1 : 1;
  const settledRotation = shouldReduceMotion ? 0 : rotation + (hasHoverFocus && !isActive ? direction * 2 : 0);
  const settledX = shouldReduceMotion ? 0 : hasHoverFocus && !isActive ? direction * 18 : 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20, rotate: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: settledRotation,
        x: settledX
      }}
      animate={
        isActive
          ? {
              y: shouldReduceMotion ? 0 : -22,
              rotate: 0,
              scale: shouldReduceMotion ? 1 : 1.08,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 320,
                damping: 20,
                mass: 0.7
              }
            }
          : {
              y: 0,
              rotate: settledRotation,
              scale: 1,
              x: settledX,
              transition: {
                type: 'spring',
                stiffness: 240,
                damping: 26,
                mass: 0.8
              }
            }
      }
      whileHover={shouldReduceMotion ? undefined : { y: -24, scale: 1.08, rotate: 0 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 1.02 }}
      viewport={{ once: true, margin: '-80px' }}
      onHoverStart={onHoverStart ? () => onHoverStart(index) : undefined}
      onHoverEnd={onHoverEnd}
      onFocusCapture={onHoverStart ? () => onHoverStart(index) : undefined}
      onBlurCapture={onHoverEnd}
      style={{ zIndex: isActive ? total + 10 : total - index }}
      className={cn(
        'group relative flex-none overflow-hidden rounded-[1.25rem] border border-[#081B3A]/10 bg-[#F8FAFC] shadow-[0_28px_70px_rgba(8,27,58,0.12)] outline-none',
        'w-[84vw] snap-center sm:w-[68vw] md:w-[48vw] lg:w-[18.5rem] lg:-ml-12 lg:first:ml-0 xl:w-[19.5rem] xl:-ml-14',
        'transform-gpu will-change-transform',
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.98)_0%,rgba(248,250,252,0.88)_44%,rgba(248,250,252,1)_100%)]"
        animate={isActive && !shouldReduceMotion ? { opacity: 1.05 } : { opacity: 1 }}
      />
      <motion.div
        className="absolute -left-8 top-0 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(107,70,255,0.45),rgba(8,27,58,0.82)_55%,rgba(248,250,252,0.12)_72%,transparent_100%)] blur-2xl"
        animate={isActive && !shouldReduceMotion ? { x: 12, y: -8, scale: 1.12 } : { x: 0, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 160, damping: 18 }}
      />
      <motion.div
        className="absolute right-[-3rem] top-8 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_center,rgba(8,27,58,0.26),rgba(107,70,255,0.24)_52%,transparent_78%)] blur-2xl"
        animate={isActive && !shouldReduceMotion ? { x: -12, y: 8, scale: 1.15 } : { x: 0, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 18 }}
      />

      <div className="relative z-10 flex h-full flex-col p-6 sm:p-7">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#081B3A]/10 bg-white/80 text-[#6B46FF] shadow-[0_10px_24px_rgba(8,27,58,0.08)]">
          <span className="text-[#6B46FF] [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
        </div>
        <div className="mt-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-[10px] font-bold tracking-[0.26em] text-[#081B3A]/50 shadow-[0_8px_18px_rgba(8,27,58,0.05)]">
          {number}
        </div>

        <div className="mt-5 h-28 overflow-hidden rounded-[1.35rem] border border-white/70 bg-[linear-gradient(135deg,rgba(107,70,255,0.16),rgba(8,27,58,0.08)_52%,rgba(248,250,252,0.92))]">
          <motion.div
            className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_25%_20%,rgba(248,250,252,0.92),transparent_34%),radial-gradient(circle_at_78%_12%,rgba(107,70,255,0.34),transparent_32%),radial-gradient(circle_at_52%_84%,rgba(8,27,58,0.24),transparent_38%)]"
            animate={isActive && !shouldReduceMotion ? { y: [0, -4, 0], scale: 1.03 } : { y: 0, scale: 1 }}
            transition={{ duration: 5, repeat: isActive && !shouldReduceMotion ? Infinity : 0, ease: 'easeInOut' }}
          />
        </div>

        <div className="mt-6 flex flex-1 flex-col">
          <p className="max-w-[15ch] text-xl font-semibold tracking-tight text-[#081B3A] sm:text-2xl">
            {title}
          </p>
          <p className="mt-3 text-sm leading-7 text-[#081B3A]/72">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}