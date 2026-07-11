"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '@/sections/section-heading';
import { ArrowRight, Brain, Briefcase, Globe, LineChart, Workflow } from 'lucide-react';

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
          titleClassName="max-w-4xl"
          descriptionClassName="max-w-3xl"
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                className="group relative overflow-hidden rounded-[1.2rem] border border-[rgba(107,70,255,0.22)] bg-[#F8FAFC] p-8 shadow-[0_18px_50px_rgba(8,27,58,0.08)] transition-[border-color,box-shadow] duration-300 hover:border-[#6B46FF] hover:shadow-[0_28px_72px_rgba(8,27,58,0.14)] sm:p-10"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(107,70,255,0.04),transparent_45%,rgba(8,27,58,0.02))] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(107,70,255,0.2),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col text-center">
                  <div className="flex justify-center">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                      className={`relative flex h-20 w-20 items-center justify-center rounded-full ${service.badgeClassName}`}
                    >
                      <span className="absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-18px_24px_rgba(255,255,255,0.05),0_16px_32px_rgba(8,27,58,0.2)]" />
                      <span className="absolute -inset-3 rounded-full bg-[radial-gradient(circle_at_center,rgba(107,70,255,0.22),transparent_72%)] opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />
                      <Icon className="relative z-10 h-9 w-9" strokeWidth={1.9} />
                    </motion.div>
                  </div>

                  <p className="mt-8 text-2xl font-semibold tracking-tight text-[#081B3A]">{service.title}</p>
                  <p className="mt-4 text-base leading-8 text-[#081B3A]/72">{service.description}</p>

                  <div className="mt-8 flex justify-center">
                    <motion.a
                      href="/contact"
                      whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B46FF] transition hover:text-[#6B46FF]"
                    >
                      <span className="relative pb-1 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#6B46FF] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                        Learn More
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.a>
                  </div>

                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-[#081B3A]/30">0{index + 1}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
