import { MapPin, Phone, Mail } from 'lucide-react';
import { goToSection } from '@/router';
import { companyInfo, navLinks } from '@/data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacts" className="scroll-mt-20 border-t border-ink-100 bg-white">
      <div className="container-px py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-steel-900 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 18V7l8 9V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 7v11" stroke="#d6e4f4" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="font-display text-base font-semibold text-ink-900">Завод «Нефтехим»</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-600">
              Производство деталей и соединительных элементов трубопроводов для нефтегазовой, химической и
              атомной промышленности. {companyInfo.city}.
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Разделы</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) =>
                link.href.startsWith('#/') ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-700 transition-colors hover:text-steel-800"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => goToSection(link.href)}
                      className="text-sm text-ink-700 transition-colors hover:text-steel-800"
                    >
                      {link.label}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Контакты</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3 text-ink-700">
                <MapPin size={18} className="mt-0.5 shrink-0 text-steel-600" />
                <span>{companyInfo.address}</span>
              </li>
              <li>
                <a href={companyInfo.phoneHref} className="flex items-start gap-3 text-ink-700 hover:text-steel-800">
                  <Phone size={18} className="mt-0.5 shrink-0 text-steel-600" />
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={companyInfo.emailHref} className="flex items-start gap-3 text-ink-700 hover:text-steel-800">
                  <Mail size={18} className="mt-0.5 shrink-0 text-steel-600" />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => goToSection('#request')}
              className="mt-5 inline-flex items-center justify-center rounded-md bg-steel-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-steel-800"
            >
              Запросить предложение
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-500">
            © {year} {companyInfo.name}. Все права защищены.
          </p>
          <p className="text-xs text-ink-400">
            Сайт носит информационный характер. Технические характеристики уточняются при запросе.
          </p>
        </div>
      </div>
    </footer>
  );
}
