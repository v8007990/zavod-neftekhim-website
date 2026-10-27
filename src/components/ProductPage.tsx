import { useState } from 'react';
import { ArrowRight, ArrowLeft, FileText, AlertCircle, Send } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { Button } from './Button';
import { getIcon } from './icons';
import { goToSection } from '@/router';
import { products } from '@/data/products';
import { productCategories } from '@/data/site';

export function ProductPage({ id }: { id: string }) {
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container-px py-24 text-center">
        <h1 className="text-2xl font-semibold text-ink-900">Изделие не найдено</h1>
        <p className="mt-3 text-ink-600">
          Возможно, ссылка устарела или изделие удалено из каталога.
        </p>
        <div className="mt-8">
          <Button href="#/catalog" variant="primary" icon={<ArrowRight size={16} />}>
            В каталог
          </Button>
        </div>
      </div>
    );
  }

  const category = productCategories.find((c) => c.slug === product.categoryId);
  const Icon = getIcon(category?.icon ?? 'Shapes');

  return (
    <div className="bg-ink-50">
      <div className="border-b border-ink-100 bg-white">
        <div className="container-px py-8">
          <Breadcrumbs
            items={[
              { label: 'Главная', path: '' },
              { label: 'Каталог продукции', path: 'catalog' },
              { label: category?.name ?? 'Прочее', path: `catalog/${product.categoryId}` },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      <div className="container-px py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* Галерея */}
          <Gallery images={product.images} alt={product.name} categoryLabel={category?.name} Icon={Icon} />

          {/* Информация */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-steel-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-steel-700">
                <Icon size={13} />
                {category?.name ?? 'Прочее'}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-ink-400">
                Арт. {product.sku}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
              {product.name}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-ink-700">{product.description}</p>

            {/* Характеристики */}
            <dl className="mt-8 overflow-hidden rounded-2xl border border-ink-100 bg-white">
              <SpecRow label="Тип детали" value={product.partType} />
              <SpecRow label="Нормативный документ" value={product.standard} />
              <SpecRow label="Материал" value={product.material} />
              <SpecRow label="Диаметр" value={product.diameter} />
              <SpecRow label="Номинальное давление" value={product.pressure} last />
            </dl>

            <p className="mt-4 flex items-start gap-2 text-xs text-ink-500">
              <AlertCircle size={14} className="mt-0.5 shrink-0" />
              Характеристики приведены демонстрационно и уточняются под конкретный запрос. Отправьте
              параметры — подготовим расчёт.
            </p>

            {/* Кнопка запроса КП */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button onClick={() => goToSection('#request')} variant="primary" icon={<ArrowRight size={16} />}>
                Запросить коммерческое предложение
              </Button>
              <a
                href="#/catalog"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-ink-200 bg-white px-5 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-steel-300 hover:text-steel-800"
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
                В каталог
              </a>
            </div>
          </div>
        </div>

        {/* Документация */}
        <div className="mt-14 rounded-2xl border border-ink-100 bg-white p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-steel-50 text-steel-700">
              <FileText size={22} />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-ink-900">Документация и расчёт</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600">
                Каждая партия поставляется с паспортом качества и сертификатами на применённые материалы.
                Чертежи, спецификации и технические условия можно направить на нашу почту — это ускорит
                подготовку коммерческого предложения.
              </p>
              <div className="mt-5">
                <Button onClick={() => goToSection('#request')} variant="secondary" icon={<Send size={15} />}>
                  Отправить запрос
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Gallery({
  images,
  alt,
  categoryLabel,
  Icon,
}: {
  images: string[];
  alt: string;
  categoryLabel?: string;
  Icon: ReturnType<typeof getIcon>;
}) {
  const [active, setActive] = useState(0);
  const hasMultiple = images.length > 1;
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm">
        <img src={current} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-steel-700 backdrop-blur-sm">
          <Icon size={12} />
          {categoryLabel ?? 'Прочее'}
        </span>
      </div>
      {hasMultiple && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={[
                'aspect-square overflow-hidden rounded-lg border-2 transition-colors',
                i === active ? 'border-steel-600' : 'border-transparent hover:border-steel-300',
              ].join(' ')}
              aria-label={`Фото ${i + 1}`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function SpecRow({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div
      className={[
        'grid grid-cols-[1fr_1.4fr] gap-4 px-5 py-3.5 sm:grid-cols-[180px_1fr]',
        last ? '' : 'border-b border-ink-100',
      ].join(' ')}
    >
      <dt className="text-sm font-medium text-ink-500">{label}</dt>
      <dd className="text-sm font-semibold text-ink-900">{value}</dd>
    </div>
  );
}
