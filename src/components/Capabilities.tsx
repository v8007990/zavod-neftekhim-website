import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { getIcon } from './icons';
import { capabilities } from '@/data/site';

const aboutImage =
  'https://images.pexels.com/photos/15508177/pexels-photo-15508177.jpeg?auto=compress&cs=tinysrgb&w=1400';

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20 bg-ink-50 py-20 sm:py-28">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Левая часть — о предприятии + изображение */}
          <div id="about" className="scroll-mt-24">
            <Reveal>
              <SectionHeading
                eyebrow="О предприятии"
                title="Производство деталей трубопроводов по требованиям отрасли"
                description="Завод специализируется на изготовлении соединительных деталей трубопроводов для промышленных объектов с повышенными требованиями к надёжности и безопасности."
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-panel">
                <img
                  src={aboutImage}
                  alt="Стальные трубы на производственном складе завода"
                  className="h-64 w-full object-cover sm:h-72"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* Правая часть — возможности */}
          <div className="lg:pt-2">
            <Reveal delay={80}>
              <h3 className="text-xl font-semibold text-ink-900">Производственные возможности</h3>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {capabilities.map((cap, i) => {
                const Icon = getIcon(cap.icon);
                return (
                  <Reveal key={cap.title} delay={120 + i * 80}>
                    <div className="group h-full rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-steel-200 hover:shadow-panel">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-steel-50 text-steel-700 transition-colors group-hover:bg-steel-900 group-hover:text-white">
                        <Icon size={22} />
                      </span>
                      <h4 className="mt-4 text-base font-semibold text-ink-900">{cap.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">{cap.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
