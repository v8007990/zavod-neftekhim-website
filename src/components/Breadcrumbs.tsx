import { ChevronRight } from 'lucide-react';
import { hrefFor } from '@/router';

export type Crumb = {
  label: string;
  path?: string; // если нет, текущая страница (не кликабельна)
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Хлебные крошки" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-ink-500">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.path && !last ? (
                <a
                  href={hrefFor(item.path)}
                  className="rounded text-ink-600 transition-colors hover:text-steel-800"
                >
                  {item.label}
                </a>
              ) : (
                <span className="font-medium text-ink-800" aria-current={last ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight size={14} className="text-ink-300" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
