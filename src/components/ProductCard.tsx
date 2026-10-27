import { type Product } from '@/data/products';
import { getIcon } from './icons';
import { productCategories } from '@/data/site';
import { hrefFor } from '@/router';
import { ArrowRight } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const category = productCategories.find((c) => c.slug === product.categoryId);
  const Icon = getIcon(category?.icon ?? 'Shapes');

  return (
    <a
      href={hrefFor(`product/${product.id}`)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-steel-200 hover:shadow-panel"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 to-transparent" aria-hidden />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-steel-700 backdrop-blur-sm">
          <Icon size={12} />
          {category?.name ?? 'Прочее'}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug text-ink-900 group-hover:text-steel-900">
            {product.name}
          </h3>
        </div>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-ink-400">
          Арт. {product.sku}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600 line-clamp-3">
          {product.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-steel-600">
          Подробнее
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}
