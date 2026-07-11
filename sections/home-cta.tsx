import { ArrowRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';

export function HomeCta() {
  return (
    <section className="relative overflow-hidden bg-[#081B3A] py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(107,70,255,0.24),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 premium-grid opacity-20" />
      <div className="absolute -left-28 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,70,255,0.2),transparent_70%)] blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(248,250,252,0.12),transparent_68%)] blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,27,58,0.96),rgba(8,27,58,0.88))] px-6 py-12 text-center shadow-[0_30px_90px_rgba(8,27,58,0.34)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">Ready to elevate your digital presence?</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s build something that moves your business forward.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            Aamnivora creates the websites, systems, and automation foundations that help local businesses look more established and grow with confidence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" className="group min-w-[14rem]">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" className="group min-w-[14rem]">
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
            </ButtonLink>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
            {['Strategy-first planning', 'Premium execution', 'Scalable systems'].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-medium text-white/82 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
