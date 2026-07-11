"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/82 shadow-[0_10px_30px_rgba(8,27,58,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-[0.2em] text-navy">
          <Image src="/logo.jpg" alt="Aamnivora logo" width={260} height={90} priority className="h-20 w-auto object-contain sm:h-24" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-[#081B3A]/82 transition hover:text-[#081B3A]">
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="group">
            Start a Project
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#081B3A]/10 bg-white/90 text-[#081B3A] shadow-[0_10px_24px_rgba(8,27,58,0.08)] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="border-t border-white/70 bg-white/92 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn('rounded-2xl px-4 py-3 text-sm font-semibold text-[#081B3A] transition hover:bg-mist')}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="/contact" className="group mt-2 w-full">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
              </ButtonLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
