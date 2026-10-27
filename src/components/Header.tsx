import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';
import { hrefFor, goToSection } from '@/router';
import { companyInfo, navLinks } from '@/data/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Блокируем прокрутку фона при открытом мобильном меню
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-ink-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <div className="container-px">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <a href={hrefFor('')} className="flex items-center gap-3" aria-label={`${companyInfo.shortName} — на главную`}>
            <Logo />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-base font-semibold text-ink-900">
                Завод «Нефтехим»
              </span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-500">
                Омск · детали трубопроводов
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
            {navLinks.map((link) =>
              link.href.startsWith('#/') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-900"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => goToSection(link.href)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-900"
                >
                  {link.label}
                </button>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={companyInfo.phoneHref}
              className="text-sm font-semibold text-ink-800 hover:text-steel-800"
            >
              {companyInfo.phone}
            </a>
            <Button onClick={() => goToSection('#request')} variant="primary" icon={<ArrowRight />}>
              Запросить предложение
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-800 hover:bg-ink-100 lg:hidden"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 top-16 z-40 bg-ink-950/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="relative z-50 animate-fade-up border-b border-ink-100 bg-white shadow-panel-lg">
            <nav className="container-px flex flex-col py-4" aria-label="Мобильная навигация">
              {navLinks.map((link) =>
                link.href.startsWith('#/') ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-100"
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => { setOpen(false); goToSection(link.href); }}
                    className="rounded-md px-3 py-3 text-left text-base font-medium text-ink-800 hover:bg-ink-100"
                  >
                    {link.label}
                  </button>
                )
              )}
              <div className="mt-3 flex flex-col gap-3 border-t border-ink-100 pt-4">
                <a
                  href={companyInfo.phoneHref}
                  className="inline-flex items-center gap-2 px-3 text-base font-semibold text-ink-900"
                >
                  <Phone size={18} className="text-steel-600" />
                  {companyInfo.phone}
                </a>
                <Button onClick={() => { setOpen(false); goToSection('#request'); }} variant="primary" icon={<ArrowRight />}>
                  Запросить предложение
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-steel-900 text-white shadow-sm">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 18V7l8 9V7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M18 7v11" stroke="#d6e4f4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
