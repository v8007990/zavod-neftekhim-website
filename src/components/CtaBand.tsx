import { ArrowRight, FileText } from 'lucide-react';
import { Reveal } from './Reveal';
import { goToSection } from '@/router';

const ctaImage =
  'https://images.pexels.com/photos/30211159/pexels-photo-30211159.jpeg?auto=compress&cs=tinysrgb&w=1600';

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-steel-900 py-16 text-white sm:py-20">
      <div className="absolute inset-0">
        <img src={ctaImage} alt="" className="h-full w-full object-cover opacity-20" loading="lazy" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-900/85 to-steel-900/60" aria-hidden />
      </div>

      <div className="relative container-px">
        <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <h2 className="max-w-2xl text-2xl font-semibold leading-snug text-white text-balance sm:text-3xl lg:text-4xl">
              Изготовим стандартные и нестандартные изделия по вашим чертежам
            </h2>
            <p className="mt-4 max-w-xl text-steel-100 text-pretty">
              Отправьте параметры или технические условия — подготовим расчёт и сроки производства. Работаем
              как по ГОСТ и ОСТ, так и по конструкторской документации заказчика.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <button
                type="button"
                onClick={() => goToSection('#request')}
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3.5 text-sm font-semibold text-steel-950 shadow-sm transition-all hover:bg-steel-50 hover:shadow-panel active:scale-[0.99]"
              >
                <FileText size={16} />
                Подготовить запрос
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
