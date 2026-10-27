import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'catalog' }
  | { name: 'category'; category: string }
  | { name: 'product'; id: string }
  | { name: 'notfound' };

function parseRoute(hash: string): Route {
  // Маршруты начинаются с "#/". Прочие хэши (#products, #request) —
  // это якоря разделов на главной; они обрабатываются как маршрут home,
  // а прокрутка выполняется отдельно (см. ScrollManager).
  if (!hash.startsWith('#/')) return { name: 'home' };

  const clean = hash.replace(/^#\/?/, '').trim();
  const parts = clean.split('/').filter(Boolean);

  if (parts.length === 0) return { name: 'home' };
  if (parts[0] === 'catalog' && parts.length === 1) return { name: 'catalog' };
  if (parts[0] === 'catalog' && parts.length === 2) return { name: 'category', category: parts[1] };
  if (parts[0] === 'product' && parts.length === 2) return { name: 'product', id: parts[1] };
  return { name: 'notfound' };
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.hash));

  useEffect(() => {
    const onChange = () => {
      setRoute(parseRoute(window.location.hash));
      // Прокрутка наверх при смене маршрута (но не для якорей разделов)
      if (window.location.hash.startsWith('#/') || window.location.hash === '') {
        window.scrollTo({ top: 0 });
      }
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export function hrefFor(path: string): string {
  return `#/${path}`;
}

// Переход к разделу-якорю (например, #request) с любой страницы.
// Если мы уже на главной — прокручиваем сразу. Иначе переходим на главную
// и запоминаем цель, чтобы главная страница прокрутилась после отрисовки.
export function goToSection(anchor: string) {
  const id = anchor.startsWith('#') ? anchor.slice(1) : anchor;
  const hash = window.location.hash;
  const onHome =
    hash === '' ||
    (hash.startsWith('#/') &&
      !hash.startsWith('#/catalog') &&
      !hash.startsWith('#/product'));

  if (onHome) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
  }
  sessionStorage.setItem('__scroll_target', id);
  window.location.hash = '#/';
}

