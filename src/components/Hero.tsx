import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { hrefFor, goToSection } from '@/router';
import { companyInfo } from '@/data/site';

const heroImage =
  'https://images.pexels.com/photos/36325392/pexels-photo-36325392.jpeg?auto=compress&cs=tinysrgb&w=1600';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-50">
      {/* Фоновое изображение производства */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Производство стальных деталей трубопроводов: фланцы и отводы"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/70 to-ink-950/40"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" aria-hidden />
      </div>

      <div className="relative container-px pb-20 pt-28 sm:pt-36 lg:pb-32 lg:pt-44">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-steel-100 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-steel-300" />
              {companyInfo.city} · промышленное производство
            </span>
          </div>

          <h1 className="mt-6 animate-fade-up text-4xl font-semibold leading-[1.08] tracking-tighter2 text-white text-balance [animation-delay:80ms] sm:text-5xl lg:text-6xl">
            Детали трубопроводов для промышленности высокого уровня ответственности
          </h1>

          <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-ink-200 text-pretty [animation-delay:160ms]">
            ООО «Завод «Нефтехим» производит соединительные детали трубопроводов — отводы, переходы, тройники,
            заглушки и фланцы — для нефтегазовой, химической и атомной промышленности по стандартам и чертежам
            заказчика.
          </p>

          <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center">
            <Button onClick={() => goToSection('#request')} variant="light" icon={<ArrowRight size={16} />}>
              Запросить предложение
            </Button>
            <Button href={hrefFor('catalog')} variant="ghost" className="text-ink-100 hover:bg-white/10 hover:text-white">
              Смотреть продукцию
            </Button>
          </div>

          <div className="mt-12 flex animate-fade-up items-center gap-3 [animation-delay:320ms]">
            <ShieldCheck size={18} className="text-steel-200" />
            <p className="text-sm text-ink-300">
              Изготовление по чертежам и техническим требованиям заказчика
            </p>
          </div>
        </div>
      </div>

      {/* Указатель скролла */}
      <button
        type="button"
        onClick={() => goToSection('#about')}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-fade-in items-center gap-2 text-ink-300 transition-colors hover:text-white sm:flex [animation-delay:600ms]"
        aria-label="Перейти к описанию"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
