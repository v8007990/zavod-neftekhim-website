import { useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { ProductCard } from './ProductCard';
import { getIcon } from './icons';
import { Button } from './Button';
import { goToSection } from '@/router';
import { products } from '@/data/products';
import { productCategories } from '@/data/site';

export function CategoryPage({ categorySlug }: { categorySlug: string }) {
  const category = productCategories.find((c) => c.slug === categorySlug);
  const items = useMemo(
    () => products.filter((p) => p.categoryId === categorySlug),
    [categorySlug]
  );

  // Несуществующая категория — показываем 404-состояние
  if (!category) {
    return (
      <div className="container-px py-24 text-center">
        <h1 className="text-2xl font-semibold text-ink-900">Категория не найдена</h1>
        <p className="mt-3 text-ink-600">Запрошенная категория не существует.</p>
        <div className="mt-8">
          <Button href="#/catalog" variant="primary" icon={<ArrowRight size={16} />}>
            В каталог
          </Button>
        </div>
      </div>
    );
  }

  const Icon = getIcon(category.icon);

  return (
    <div className="bg-ink-50">
      <div className="border-b border-ink-100 bg-white">
        <div className="container-px py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: 'Главная', path: '' },
              { label: 'Каталог продукции', path: 'catalog' },
              { label: category.name },
            ]}
          />
          <div className="mt-6 flex items-start gap-5">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-steel-900 text-white sm:inline-flex">
              <Icon size={26} />
            </span>
            <div>
              <h1 className="text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl lg:text-[2.6rem]">
                {category.name}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-px py-10">
        <p className="text-sm text-ink-600">
          Найдено: <span className="font-semibold text-ink-900">{items.length}</span>{' '}
          {plural(items.length, ['изделие', 'изделия', 'изделий'])}
        </p>

        {items.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-ink-200 bg-white py-16 text-center">
            <p className="text-base font-medium text-ink-800">В этой категории пока нет изделий</p>
            <p className="mt-2 text-sm text-ink-500">
              Это демонстрационный каталог. Реальные позиции появятся после наполнения ассортимента.
            </p>
          </div>
        )}

        <div className="mt-12 rounded-2xl border border-ink-100 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-ink-900">Нужно нестандартное изделие?</h2>
          <p className="mt-2 max-w-xl text-sm text-ink-600">
            Изготовим детали по чертежам и техническим условиям. Отправьте параметры — подготовим расчёт.
          </p>
          <div className="mt-5">
            <Button onClick={() => goToSection('#request')} variant="primary" icon={<ArrowRight size={16} />}>
              Запросить предложение
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function plural(n: number, forms: [string, string, string]): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
  return forms[2];
}
