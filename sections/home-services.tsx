"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '@/sections/section-heading';
import { ArrowUpRight, Brain, Briefcase, Globe, LineChart, Workflow } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    description: 'Premium websites built to look credible, load quickly, and convert consistently.',
    icon: Globe,
    badgeClassName: 'bg-[#081B3A] text-white shadow-[0_14px_30px_rgba(8,27,58,0.18)]'
  },
  {
    title: 'Business Automation',
    description: 'Reduce manual work with practical workflows that improve day-to-day operations.',
    icon: Workflow,
    badgeClassName: 'bg-[#6B46FF] text-white shadow-[0_14px_30px_rgba(107,70,255,0.22)]'
  },
  {
    title: 'AI Solutions',
    description: 'Use AI thoughtfully for customer handling, content support, and internal efficiency.',
    icon: Brain,
    badgeClassName: 'bg-[linear-gradient(135deg,#081B3A_0%,#6B46FF_100%)] text-white shadow-[0_16px_34px_rgba(8,27,58,0.18)]'
  },
  {
    title: 'Digital Growth Strategy',
    description: 'Turn a good online presence into a measurable growth system.',
    icon: LineChart,
    badgeClassName: 'bg-[linear-gradient(135deg,rgba(107,70,255,0.18),rgba(248,250,252,1))] text-[#6B46FF] shadow-[0_14px_30px_rgba(107,70,255,0.12)]'
  },
  {
    title: 'Business Consulting',
    description: 'Bridge the gap between technology decisions and commercial outcomes.',
    icon: Briefcase,
    badgeClassName: 'bg-[linear-gradient(135deg,#081B3A_0%,#081B3A_42%,#6B46FF_100%)] text-white shadow-[0_16px_34px_rgba(8,27,58,0.18)]'
  }
];

export function HomeServices() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F8FAFC] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="A focused service suite built around how local businesses actually grow."
          description="Every engagement is designed to create a stronger brand presence, better workflows, and a more scalable operating foundation."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-7 shadow-[0_18px_50px_rgba(8,27,58,0.08)] transition-shadow duration-300 hover:border-[#6B46FF]/15 hover:shadow-[0_26px_65px_rgba(8,27,58,0.12)] sm:p-8"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(107,70,255,0.04),transparent_45%,rgba(8,27,58,0.02))] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(107,70,255,0.18),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                      className={`relative flex h-14 w-14 items-center justify-center rounded-[1.15rem] ${service.badgeClassName}`}
                    >
                      <span className="absolute inset-0 rounded-[1.15rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-14px_20px_rgba(255,255,255,0.04)]" />
                      <span className="absolute -inset-2 rounded-[1.35rem] bg-[radial-gradient(circle_at_center,rgba(107,70,255,0.18),transparent_70%)] opacity-0 blur-lg transition duration-300 group-hover:opacity-100" />
                      <Icon className="relative z-10 h-6 w-6" strokeWidth={1.9} />
                    </motion.div>
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { x: 3, y: -3 }}
                      transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                    >
                      <ArrowUpRight className="h-5 w-5 text-slate-300 transition duration-300 group-hover:text-[#6B46FF]" />
                    </motion.div>
                  </div>

                  <p className="mt-10 text-xl font-semibold tracking-tight text-[#081B3A]">{service.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">0{index + 1}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
