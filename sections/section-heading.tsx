type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-purple">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
