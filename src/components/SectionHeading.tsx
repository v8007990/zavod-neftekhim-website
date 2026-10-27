import { type ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  titleClassName = '',
}: SectionHeadingProps) {
  return (
    <div
      className={[
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        'max-w-2xl',
        className,
      ].join(' ')}
    >
      {eyebrow && (
        <div
          className={[
            'mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-steel-600',
            align === 'center' ? 'mx-auto' : '',
          ].join(' ')}
        >
          <span className="h-px w-6 bg-steel-500" aria-hidden />
          {eyebrow}
        </div>
      )}
      <h2
        className={[
          'text-3xl font-semibold leading-[1.12] text-ink-900 sm:text-4xl lg:text-[2.6rem]',
          align === 'center' ? 'mx-auto text-balance' : 'text-balance',
          titleClassName,
        ].join(' ')}
      >
        {title}
      </h2>
      {description && (
        <p
          className={[
            'mt-5 text-base leading-relaxed text-ink-600 sm:text-lg',
            align === 'center' ? 'mx-auto text-pretty' : 'text-pretty',
          ].join(' ')}
        >
          {description}
        </p>
      )}
    </div>
  );
}
