"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(107,70,255,0.12),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(8,27,58,0.12),transparent_28%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.92),transparent_38%)]" />
      <div className="absolute inset-0 premium-grid opacity-45" />
      <div className="absolute left-1/2 top-8 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,70,255,0.18),rgba(107,70,255,0.04)_45%,transparent_72%)] blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(8,27,58,0.1),rgba(8,27,58,0.02)_48%,transparent_72%)] blur-3xl" />
      <div className="absolute right-0 top-28 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(107,70,255,0.12),transparent_68%)] blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-24">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#081B3A]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#081B3A] shadow-[0_12px_28px_rgba(8,27,58,0.08)]">
            <Sparkles className="h-3.5 w-3.5 text-purple" />
            A modern digital transformation partner
          </div>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[#081B3A] sm:text-5xl lg:text-7xl">
            Empowering Local Businesses Through Digital Innovation
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#081B3A]/74 sm:text-lg">
            We help local businesses establish a powerful digital presence through modern websites, intelligent automation, AI-powered solutions, and scalable technology that drives measurable business growth.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" className="group">
              Start Your Digital Journey
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" className="group">
              Explore Services
              <ChevronRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
            </ButtonLink>
          </div>
          <div className="mt-10 grid max-w-lg gap-4 text-sm text-slate-600 sm:grid-cols-3">
            {[
              'Local-first strategy',
              'Premium execution',
              'Future-ready systems'
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-[#081B3A]/10 bg-white px-4 py-3 text-sm font-medium text-[#081B3A] shadow-[0_14px_30px_rgba(8,27,58,0.07)]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#081B3A_0%,#6B46FF_100%)] shadow-[0_0_0_4px_rgba(107,70,255,0.08)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 lg:pl-8">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto max-w-[560px]"
          >
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full border border-white/80 bg-purple/10 blur-[1px] animate-float" />
            <div className="absolute -right-6 bottom-20 h-28 w-28 rounded-full border border-white/80 bg-navy/10 blur-[1px] animate-drift" />
            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_30px_90px_rgba(8,27,58,0.14)]">
              <Image
                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=1400&q=80"
                alt="A busy retail storefront showing real local business activity"
                width={900}
                height={1100}
                className="h-[520px] w-full object-cover sm:h-[620px]"
                priority
              />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 left-4 max-w-[260px] rounded-3xl border border-white/80 bg-white/95 p-4 shadow-[0_18px_50px_rgba(8,27,58,0.1)] backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B46FF]">Built for trust</p>
              <p className="mt-2 text-sm leading-6 text-[#081B3A]">
                Premium design, practical automation, and clear systems that help businesses look modern and operate better.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
