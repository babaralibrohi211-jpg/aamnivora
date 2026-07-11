"use client";

import { useMemo, useRef, useState } from 'react';
import { SectionHeading } from '@/sections/section-heading';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ChartColumnIncreasing, Code2, Compass, ChevronRight, Rocket, Search, PenTool } from 'lucide-react';

const steps = ['Discover', 'Strategy', 'Design', 'Develop', 'Launch', 'Grow'];
const stepIcons = [Search, Compass, PenTool, Code2, Rocket, ChartColumnIncreasing];

export function HomeProcess() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const stepDelays = useMemo(() => steps.map((_, index) => index * 0.18), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 78%', 'end 30%'] });
  const activeProgress = useTransform(scrollYProgress, (value) => Math.min(steps.length - 1, Math.max(0, value * (steps.length - 1))));

  useMotionValueEvent(activeProgress, 'change', (latest) => {
    if (shouldReduceMotion) {
      return;
    }

    setActiveIndex((current) => {
      const nextIndex = Math.round(latest);
      return current === nextIndex ? current : nextIndex;
    });
  });

  const visualActiveIndex = hoveredIndex ?? activeIndex;

  return (
    <section ref={sectionRef} className="bg-[#F8FAFC] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="A clear delivery sequence that keeps the work premium, predictable, and low-friction."
          description="The process is intentionally simple so clients always know what happens next and why it matters."
        />

        <div className="relative mt-16">
          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? { opacity: 1 } : { scaleX: 0, opacity: 0.9 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.05, ease: 'easeInOut' }}
            className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-[linear-gradient(90deg,rgba(107,70,255,0.08),rgba(107,70,255,0.38),rgba(8,27,58,0.12))] lg:block"
          />
          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? { opacity: 1 } : { scaleY: 0, opacity: 0.9 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { scaleY: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.05, ease: 'easeInOut' }}
            className="absolute bottom-0 left-7 top-7 w-px origin-top bg-[linear-gradient(180deg,rgba(107,70,255,0.08),rgba(107,70,255,0.35),rgba(8,27,58,0.12))] lg:hidden"
          />

          <div className="relative grid gap-4 lg:grid-cols-6 lg:gap-0">
            {steps.map((step, index) => {
              const Icon = stepIcons[index];
              const isActive = visualActiveIndex === index;
              const isCompleted = visualActiveIndex > index;
              const isMuted = visualActiveIndex < index;
              return (
                <motion.div
                  key={step}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18, scale: 0.98 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.56, delay: stepDelays[index] + 0.08, ease: 'easeOut' }}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group relative rounded-[1.35rem] border border-slate-200/80 bg-white p-6 text-left shadow-[0_18px_45px_rgba(8,27,58,0.08)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(8,27,58,0.12)] sm:p-7 lg:min-h-[11.5rem] lg:p-6"
                >
                  <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
                    <div className="flex flex-col items-center">
                      <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#081B3A]/38">
                        0{index + 1}
                      </div>

                      <div className="relative">
                        {!shouldReduceMotion && isActive ? (
                          <motion.span
                            layoutId="process-active-ring"
                            className="absolute inset-[-0.45rem] rounded-full bg-[linear-gradient(135deg,rgba(8,27,58,0.34),rgba(107,70,255,0.34))] blur-[1px]"
                            transition={{ type: 'spring', stiffness: 220, damping: 26, mass: 0.7 }}
                          />
                        ) : null}
                        <motion.div
                          initial={false}
                          animate={
                            shouldReduceMotion
                              ? { scale: 1 }
                              : isActive
                                ? { scale: 1.08 }
                                : isCompleted
                                  ? { scale: 1.03 }
                                  : { scale: 1 }
                          }
                          transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 20, mass: 0.7 }}
                          className={[
                            'relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow-[0_14px_30px_rgba(8,27,58,0.08)]',
                            isActive
                              ? 'border-[#6B46FF]/35 text-[#081B3A]'
                              : 'border-[#6B46FF]/16 text-[#081B3A]/72'
                          ].join(' ')}
                        >
                          <Icon className="h-6 w-6" strokeWidth={1.9} />
                        </motion.div>
                      </div>

                      {index < steps.length - 1 ? (
                        <div className="mt-3 flex items-center justify-center">
                          <motion.span
                            aria-hidden="true"
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.24, delay: stepDelays[index] + 0.12 }}
                            className="hidden h-2 w-2 rounded-full bg-[linear-gradient(135deg,#6B46FF_0%,rgba(107,70,255,0.55)_100%)] shadow-[0_0_0_5px_rgba(107,70,255,0.08)] lg:block"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div className="min-w-0 flex-1 lg:mt-5 lg:flex-none">
                      <p
                        className={[
                          'font-semibold',
                          isActive ? 'text-[#081B3A]' : isMuted ? 'text-[#081B3A]/58' : 'text-[#081B3A]/80'
                        ].join(' ')}
                      >
                        {step}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 ? (
                    <div className="mt-4 flex items-center gap-2 text-[#6B46FF] lg:hidden">
                      <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(107,70,255,0.12),rgba(107,70,255,0.34))]" />
                      <span className="h-2 w-2 rounded-full bg-[linear-gradient(135deg,#6B46FF_0%,rgba(107,70,255,0.55)_100%)] shadow-[0_0_0_5px_rgba(107,70,255,0.08)]" />
                    </div>
                  ) : null}

                  {index < steps.length - 1 ? (
                    <ChevronRight className="absolute right-4 top-6 hidden h-4 w-4 text-[#6B46FF]/38 transition duration-300 group-hover:text-[#6B46FF]/65 lg:block" />
                  ) : null}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
