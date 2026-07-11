"use client";

import { useState } from 'react';
import { Globe2, MessageSquareMore, Workflow, ShieldCheck } from 'lucide-react';
import { FannedCard } from '@/components/fanned-card';
import { SectionHeading } from '@/sections/section-heading';

const items = [
  {
    icon: Globe2,
    title: 'Local businesses are still losing first impressions online',
    description: 'Outdated websites and inconsistent systems make strong businesses feel smaller and less trustworthy than they are.'
  },
  {
    icon: MessageSquareMore,
    title: 'Customers expect clarity before they contact you',
    description: 'If a site is slow, unclear, or hard to use on mobile, people leave before a business even gets a chance to respond.'
  },
  {
    icon: Workflow,
    title: 'Digital transformation creates leverage',
    description: 'Automation, AI, and better workflows reduce friction so owners can spend more time on the work that matters.'
  },
  {
    icon: ShieldCheck,
    title: 'Aamnivora makes growth feel structured',
    description: 'We combine branding, systems, and modern engineering into one premium delivery model that scales with the business.'
  }
];

const rotations = [-8, -4, 0, 4];

export function HomeWhyAamnivora() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F8FAFC] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Aamnivora"
          title="Digital clarity for businesses that want to look more established and operate more efficiently."
          description="Aamnivora helps local businesses replace scattered digital touchpoints with a polished, reliable, and scalable online foundation."
        />

        <div className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:justify-center lg:overflow-visible lg:pb-0">
          {items.map((item, index) => (
            <FannedCard
              key={item.title}
              icon={<item.icon />}
              number={`0${index + 1}`}
              title={item.title}
              description={item.description}
              rotation={rotations[index]}
              index={index}
              total={items.length}
              activeIndex={activeIndex}
              onHoverStart={setActiveIndex}
              onHoverEnd={() => setActiveIndex(null)}
              className="lg:first:ml-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
