import { ArrowRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';

export function HomeCta() {
  return (
    <section className="bg-navy py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Ready to elevate your digital presence?</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Let&apos;s Build Something That Moves Your Business Forward
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
          Aamnivora creates the digital systems, websites, and automation foundations that help local businesses grow with confidence.
        </p>
        <div className="mt-10">
          <ButtonLink href="/contact" className="group">
            Book a Free Consultation
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
