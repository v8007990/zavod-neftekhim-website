import { hrefFor } from '@/router';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="container-px flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-6xl font-semibold text-ink-200 sm:text-7xl">404</span>
      <h1 className="mt-4 text-2xl font-semibold text-ink-900 sm:text-3xl">Страница не найдена</h1>
      <p className="mt-3 max-w-md text-ink-600">
        Запрошенная страница не существует или была перемещена. Вернитесь на главную или откройте каталог
        продукции.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="#/" variant="secondary">
          На главную
        </Button>
        <Button href={hrefFor('catalog')} variant="primary" icon={<ArrowRight size={16} />}>
          В каталог
        </Button>
      </div>
    </div>
  );
}
