import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { getIcon } from './icons';
import { qualityItems } from '@/data/site';

export function Quality() {
  return (
    <section id="quality" className="relative scroll-mt-20 overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="container-px relative">
        <Reveal>
          <SectionHeading
            eyebrow="Качество и документация"
            title="Контроль на каждом этапе и сопроводительные документы"
            description="Подход к качеству ориентирован на отрасли с повышенными требованиями к надёжности трубопроводов. Мы не публикуем недостоверных данных о сертификатах и достижениях — конкретные документы предоставляются по запросу."
            align="center"
            className="max-w-2xl"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {qualityItems.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="relative flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-panel">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-steel-900 text-white">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
                  <span className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-steel-500">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-2xl rounded-xl border border-ink-100 bg-ink-50 p-5 text-center text-sm text-ink-600">
            Перечень доступных сертификатов, протоколов испытаний и разрешений уточняйте у наших специалистов
            применительно к конкретной номенклатуре.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
