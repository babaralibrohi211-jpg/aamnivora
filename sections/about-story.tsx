import Image from 'next/image';
import { SectionHeading } from '@/sections/section-heading';
import { Card } from '@/components/ui/card';
import { Compass, Eye, Heart, Layers, Map, Rocket, Store } from 'lucide-react';

const roadmap = [
  { icon: Map, text: 'Define a sharper digital identity for local businesses.' },
  { icon: Rocket, text: 'Replace fragmented tools with practical automated workflows.' },
  { icon: Layers, text: 'Build scalable web systems that support growth without complexity.' },
  { icon: Compass, text: 'Expand into ongoing strategic support for long-term clients.' }
];

const values = [
  'Clarity over noise',
  'Craft over shortcuts',
  'Systems over guesswork',
  'Partnership over transactions'
];

export function AboutStory() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="absolute inset-0 premium-grid opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-purple">About Aamnivora</p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-7xl">
              A digital transformation partner built for local businesses.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Aamnivora exists to help small and mid-sized businesses project a more premium digital presence while building the systems they need to operate with less friction and more confidence.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
              alt="A professional team meeting in a modern office environment"
              width={1200}
              height={900}
              className="h-full w-full rounded-[2rem] object-cover shadow-premium"
            />
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mission, Vision, Values"
            title="Clear principles that shape every engagement and every line of code."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <Card className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple"><Compass className="h-4 w-4" />Mission</div>
              <p className="mt-4 text-lg leading-8 text-ink">
                Help local businesses modernize their digital presence and adopt systems that improve efficiency, trust, and growth.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple"><Eye className="h-4 w-4" />Vision</div>
              <p className="mt-4 text-lg leading-8 text-ink">
                Become the most trusted partner for businesses that want to evolve from outdated online setups into scalable digital operations.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple"><Heart className="h-4 w-4" />Core Values</div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {values.map((value) => (
                  <div key={value} className="rounded-2xl bg-mist px-4 py-3">{value}</div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple"><Layers className="h-4 w-4" />Technology Stack</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Next.js, React 19, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod, and modern UI primitives built for performance and longevity.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple"><Store className="h-4 w-4" />Why Local Businesses</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Local businesses need practical digital systems that create trust, improve discoverability, and reduce manual work without overwhelming the team.
              </p>
            </Card>
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow="Future Roadmap" title="A phased plan for deeper services as the company and client base grow." />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {roadmap.map((item, index) => {
                const Icon = item.icon;
                return (
                <Card key={item.text} className="p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple"><Icon className="h-4 w-4" />Step 0{index + 1}</div>
                  <p className="mt-4 text-sm leading-7 text-ink">{item.text}</p>
                </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
