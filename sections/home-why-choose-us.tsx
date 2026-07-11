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
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A premium delivery model for brands that want consistency, not chaos."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="p-6 transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-purple">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-6 text-xl font-semibold tracking-tight text-navy">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
