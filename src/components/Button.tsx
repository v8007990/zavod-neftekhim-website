import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light';

type ButtonLinkProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  'aria-label'?: string;
};

const base =
  'group inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-steel-900 px-5 py-3 text-white shadow-sm hover:bg-steel-800 hover:shadow-panel active:scale-[0.98]',
  secondary:
    'border border-ink-200 bg-white px-5 py-3 text-ink-800 hover:border-steel-300 hover:text-steel-800 hover:shadow-sm active:scale-[0.98]',
  ghost:
    'px-3 py-2 text-ink-700 hover:bg-ink-100 hover:text-ink-900',
  light:
    'bg-white px-5 py-3 text-steel-900 shadow-sm hover:bg-steel-50 hover:shadow-panel active:scale-[0.98]',
};

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  icon,
  type = 'button',
  onClick,
  'aria-label': ariaLabel,
}: ButtonLinkProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {icon && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {content}
    </button>
  );
}

// Tiny helper to keep icon import discipline
export type { ButtonHTMLAttributes };
