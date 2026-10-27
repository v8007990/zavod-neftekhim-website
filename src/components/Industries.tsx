import { ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { getIcon } from './icons';
import { goToSection } from '@/router';
import { industries } from '@/data/site';

const industryImage =
  'https://images.pexels.com/photos/7937292/pexels-photo-7937292.jpeg?auto=compress&cs=tinysrgb&w=1400';

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 bg-ink-50 py-20 sm:py-28">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-panel">
              <img
                src={industryImage}
                alt="Промышленный трубопровод с соединительными деталями"
                className="h-72 w-full object-cover sm:h-80 lg:h-[460px]"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal>
              <SectionHeading
                eyebrow="Отрасли применения"
                title="Для отраслей с высокими требованиями к надёжности"
                description="Детали трубопроводов применяются на объектах, где отказ недопустим. Подбираем материалы и исполнение под условия эксплуатации каждой отрасли."
              />
            </Reveal>

            <div className="mt-8 space-y-4">
              {industries.map((ind, i) => {
                const Icon = getIcon(ind.icon);
                return (
                  <Reveal key={ind.slug} delay={120 + i * 90}>
                    <div className="group flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:border-steel-200 hover:shadow-panel">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-steel-50 text-steel-700 transition-colors group-hover:bg-steel-900 group-hover:text-white">
                        <Icon size={22} />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-ink-900">{ind.name}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-600">{ind.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={420}>
              <div className="mt-8">
                <Button onClick={() => goToSection('#request')} variant="primary" icon={<ArrowRight size={16} />}>
                  Обсудить ваш проект
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
