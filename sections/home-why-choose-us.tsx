"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/sections/section-heading';
import { Cpu, Gauge, Handshake, Layers, Puzzle, Target } from 'lucide-react';

const benefits = [
  { title: 'Business-first Thinking', description: 'We optimize for outcomes that matter to owners, not decorative complexity.', icon: Target },
  { title: 'Modern Technologies', description: 'A clean, current stack that remains maintainable and easy to evolve.', icon: Cpu },
  { title: 'Custom Solutions', description: 'No templated shortcuts. Every build is aligned to the brand and business model.', icon: Puzzle },
  { title: 'Scalable Systems', description: 'Solutions that can support growth without rework every few months.', icon: Layers },
  { title: 'Performance Optimized', description: 'Fast, mobile-first experiences with strong accessibility and SEO foundations.', icon: Gauge },
  { title: 'Long-term Partnership', description: 'Aamnivora is structured to support continuous improvement, not one-off delivery.', icon: Handshake }
];

export function HomeWhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A premium delivery model for brands that want consistency, not chaos."
          align="center"
          titleClassName="max-w-4xl"
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                className="group relative overflow-hidden rounded-[1.2rem] border border-[rgba(107,70,255,0.22)] bg-[#F8FAFC] p-8 text-center shadow-[0_18px_45px_rgba(8,27,58,0.08)] transition-[border-color,box-shadow] duration-300 hover:border-[#6B46FF] hover:shadow-[0_26px_64px_rgba(8,27,58,0.14)] sm:p-9"
              >
                <div className="flex justify-center">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,#081B3A_0%,#6B46FF_100%)] text-white shadow-[0_18px_34px_rgba(8,27,58,0.22)]">
                    <span className="absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-18px_24px_rgba(255,255,255,0.05)]" />
                    <span className="absolute -inset-3 rounded-full bg-[radial-gradient(circle_at_center,rgba(107,70,255,0.22),transparent_72%)] opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />
                    <Icon className="relative z-10 h-9 w-9" strokeWidth={1.9} />
                  </div>
                </div>
                <p className="mt-8 text-2xl font-semibold tracking-tight text-[#081B3A]">{item.title}</p>
                <p className="mt-4 text-base leading-8 text-[#081B3A]/72">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
