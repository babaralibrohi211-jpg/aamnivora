type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName
}: Props) {
  return (
    <div className={[align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left', className].filter(Boolean).join(' ')}>
      <p className={['mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#6B46FF]', eyebrowClassName].filter(Boolean).join(' ')}>{eyebrow}</p>
      <h2 className={['text-4xl font-semibold tracking-tight text-[#081B3A] sm:text-5xl lg:text-6xl', titleClassName].filter(Boolean).join(' ')}>{title}</h2>
      {description ? <p className={['mt-4 text-base leading-7 text-[#081B3A]/72 sm:text-lg sm:leading-8', descriptionClassName].filter(Boolean).join(' ')}>{description}</p> : null}
    </div>
  );
}
