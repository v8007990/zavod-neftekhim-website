import { ArrowRight, ChevronRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { getIcon } from './icons';
import { hrefFor, goToSection } from '@/router';
import { productCategories } from '@/data/site';

export function ProductCategories() {
  return (
    <section id="products" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="container-px">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Продукция"
              title="Категории соединительных деталей трубопроводов"
              description="Стандартный ассортимент деталей для монтажа и ремонта промышленных трубопроводов. Нестандартные изделия изготавливаем по чертежам и техническим условиям заказчика."
            />
          </Reveal>
          <Reveal delay={120}>
            <button
              type="button"
              onClick={() => goToSection('#request')}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-steel-700 hover:text-steel-900"
            >
              Запросить нестандартное изделие
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat, i) => {
            const Icon = getIcon(cat.icon);
            return (
              <Reveal key={cat.slug} delay={i * 70}>
                <a
                  href={hrefFor(`catalog/${cat.slug}`)}
                  className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-steel-200 hover:shadow-panel"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-steel-50 text-steel-700 transition-colors group-hover:bg-steel-900 group-hover:text-white">
                      <Icon size={24} />
                    </span>
                    <ChevronRight
                      size={18}
                      className="text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-steel-600"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">{cat.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{cat.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-steel-600">
                    Подготовим расчёт
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={hrefFor('catalog')}
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-ink-200 bg-white px-5 py-3 text-sm font-semibold text-ink-800 transition-all hover:border-steel-300 hover:text-steel-800 hover:shadow-sm"
          >
            Открыть полный каталог
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
