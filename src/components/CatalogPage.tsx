import { useMemo, useState } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { ProductCard } from './ProductCard';
import { products } from '@/data/products';
import { productCategories } from '@/data/site';

export function CatalogPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCat = activeCategory === 'all' || p.categoryId === activeCategory;
      const matchesQuery =
        q === '' ||
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.partType.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, activeCategory]);

  const hasFilters = query.trim() !== '' || activeCategory !== 'all';

  function reset() {
    setQuery('');
    setActiveCategory('all');
  }

  return (
    <div className="bg-ink-50">
      {/* Заголовок страницы */}
      <div className="border-b border-ink-100 bg-white">
        <div className="container-px py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: 'Главная', path: '' },
              { label: 'Каталог продукции' },
            ]}
          />
          <h1 className="mt-5 text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl lg:text-[2.6rem]">
            Каталог продукции
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
            Соединительные детали трубопроводов для промышленного применения. Используйте поиск по названию
            или артикулу и фильтр по категории.
          </p>
        </div>
      </div>

      {/* Панель поиска и фильтров */}
      <div className="container-px py-8 sm:py-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Поиск */}
          <div className="relative w-full lg:max-w-md">
            <Search
              size={18}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск по названию или артикулу"
              aria-label="Поиск по каталогу"
              className="w-full rounded-md border border-ink-200 bg-white py-3 pl-11 pr-10 text-sm text-ink-900 shadow-sm transition-colors placeholder:text-ink-400 focus:border-steel-400 focus:outline-none focus:ring-2 focus:ring-steel-500/20"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Очистить поиск"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-ink-400 hover:bg-ink-100 hover:text-ink-700"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Фильтр категорий (горизонтальная прокрутка на мобильных) */}
          <div className="flex items-center gap-3 overflow-x-auto pb-1 lg:overflow-visible lg:pb-0">
            <span className="hidden shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500 lg:inline-flex">
              <SlidersHorizontal size={14} />
              Категория
            </span>
            <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
          </div>
        </div>

        {/* Активные фильтры / счётчик */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-ink-600">
            Найдено: <span className="font-semibold text-ink-900">{filtered.length}</span>{' '}
            {plural(filtered.length, ['изделие', 'изделия', 'изделий'])}
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold text-steel-700 hover:bg-steel-50"
            >
              <X size={14} />
              Сбросить фильтры
            </button>
          )}
        </div>

        {/* Сетка товаров */}
        {filtered.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-ink-200 bg-white py-16 text-center">
            <p className="text-base font-medium text-ink-800">Ничего не найдено</p>
            <p className="mt-2 text-sm text-ink-500">
              Попробуйте изменить поисковый запрос или сбросить фильтры.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-steel-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-steel-800"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (slug: string) => void;
}) {
  const chips = [
    { slug: 'all', name: 'Все категории' },
    ...productCategories.map((c) => ({ slug: c.slug, name: c.name })),
  ];

  return (
    <div className="flex items-center gap-2">
      {chips.map((chip) => {
        const isActive = active === chip.slug;
        return (
          <button
            key={chip.slug}
            type="button"
            onClick={() => onChange(chip.slug)}
            className={[
              'shrink-0 whitespace-nowrap rounded-md px-3.5 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'bg-steel-900 text-white shadow-sm'
                : 'border border-ink-200 bg-white text-ink-700 hover:border-steel-300 hover:text-steel-800',
            ].join(' ')}
            aria-pressed={isActive}
          >
            {chip.name}
          </button>
        );
      })}
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
