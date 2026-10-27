import { useEffect } from 'react';
import { useRouter } from '@/router';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductCategories } from '@/components/ProductCategories';
import { Capabilities } from '@/components/Capabilities';
import { Quality } from '@/components/Quality';
import { Industries } from '@/components/Industries';
import { CtaBand } from '@/components/CtaBand';
import { RequestSection } from '@/components/RequestSection';
import { Footer } from '@/components/Footer';
import { CatalogPage } from '@/components/CatalogPage';
import { CategoryPage } from '@/components/CategoryPage';
import { ProductPage } from '@/components/ProductPage';
import { NotFoundPage } from '@/components/NotFoundPage';

function App() {
  const route = useRouter();

  // Прокрутка к разделу при клике на якорь вида #request, #products и т.п.,
  // когда пользователь находится на главной странице.
  useSectionAnchorScroll();

  return (
    <div className="min-h-screen bg-ink-50">
      <Header />
      <main>{renderRoute(route)}</main>
      <Footer />
    </div>
  );
}

function renderRoute(route: ReturnType<typeof useRouter>) {
  switch (route.name) {
    case 'home':
      return (
        <>
          <Hero />
          <ProductCategories />
          <Capabilities />
          <Quality />
          <Industries />
          <CtaBand />
          <RequestSection />
        </>
      );
    case 'catalog':
      return <CatalogPage />;
    case 'category':
      return <CategoryPage categorySlug={route.category} />;
    case 'product':
      return <ProductPage id={route.id} />;
    default:
      return <NotFoundPage />;
  }
}

function useSectionAnchorScroll() {
  const route = useRouter();
  useEffect(() => {
    // Если вернулись на главную с запомненной целью прокрутки
    if (route.name === 'home') {
      const target = sessionStorage.getItem('__scroll_target');
      if (target) {
        sessionStorage.removeItem('__scroll_target');
        // Небольшая задержка, чтобы главная успела отрисоваться
        requestAnimationFrame(() => {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return;
      }
    }
    // Обычный якорь на главной
    const hash = window.location.hash;
    if (!hash || hash.startsWith('#/')) return;
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [route]);
}

export default App;
