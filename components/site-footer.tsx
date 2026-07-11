"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Home, Info, Instagram, Linkedin, Mail } from 'lucide-react';

const footerNav = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: Info },
  { label: 'Contact', href: '/contact', icon: Mail }
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aamnivora' },
  { label: 'Instagram', href: 'https://www.instagram.com/aamnivora' },
  { label: 'GitHub', href: 'https://github.com/aamnivora' }
];

function FooterIconCircle({ icon: Icon }: { icon: typeof Home }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#081B3A_0%,#6B46FF_100%)] text-white shadow-[0_10px_22px_rgba(8,27,58,0.16)]">
      <Icon className="h-4 w-4" strokeWidth={1.8} />
    </span>
  );
}

export function SiteFooter() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-10 lg:px-8">
        <div className="col-span-2 lg:col-span-1">
          <div className="mb-4 flex items-center gap-3 font-semibold tracking-[0.2em] text-navy">
            <Image src="/logo.jpg" alt="Aamnivora logo" width={260} height={90} className="h-20 w-auto object-contain sm:h-24" />
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600">
            Digital transformation for local businesses that need a stronger web presence, better systems, and tools that scale.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink sm:mb-4 sm:text-sm">Navigation</h2>
          <div className="flex flex-col gap-2 text-[13px] text-slate-600 sm:gap-3 sm:text-sm">
            {footerNav.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex items-center gap-1.5 text-slate-600 transition hover:text-navy sm:gap-2">
                <FooterIconCircle icon={item.icon} />
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink sm:mb-4 sm:text-sm">Connect</h2>
          <div className="flex flex-col gap-2 text-[13px] text-slate-600 sm:gap-3 sm:text-sm">
            <a href="mailto:contact.aamnivora@gmail.com" className="inline-flex items-center gap-1.5 break-words transition hover:text-navy sm:gap-2">
              <FooterIconCircle icon={Mail} />
              contact.aamnivora@gmail.com
            </a>
            <div className="flex items-center gap-2 pt-1.5 sm:gap-3 sm:pt-2">
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aamnivora', icon: Linkedin },
                { label: 'Instagram', href: 'https://www.instagram.com/aamnivora', icon: Instagram },
                { label: 'GitHub', href: 'https://github.com/aamnivora', icon: Github }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    aria-label={item.label}
                    href={item.href}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.1, y: -1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#081B3A_0%,#6B46FF_100%)] text-white shadow-[0_10px_22px_rgba(8,27,58,0.16)] transition hover:bg-[linear-gradient(135deg,#6B46FF_0%,#6B46FF_100%)] hover:shadow-[0_14px_28px_rgba(107,70,255,0.22)]"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
