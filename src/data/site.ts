export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
  icon: string; // lucide icon name
};

export const productCategories: ProductCategory[] = [
  {
    slug: 'otvody',
    name: 'Отводы',
    description:
      'Крутоизогнутые и гнутые отводы для изменения направления трубопровода под углами 15°, 30°, 45°, 60°, 90° и 180°.',
    icon: 'CornerDownRight',
  },
  {
    slug: 'perehody',
    name: 'Переходы',
    description:
      'Концентрические и эксцентрические переходы для соединения труб разного диаметра в один трубопровод.',
    icon: 'Shrink',
  },
  {
    slug: 'trojniki',
    name: 'Тройники',
    description:
      'Равнопроходные и переходные тройники для разветвления потока в магистральных и технологических трубопроводах.',
    icon: 'Split',
  },
  {
    slug: 'zaglushki',
    name: 'Заглушки',
    description:
      'Эллиптические, плоские и сферические заглушки для герметизации торцов труб и отверстий оборудования.',
    icon: 'CircleStop',
  },
  {
    slug: 'flancy',
    name: 'Фланцы',
    description:
      'Плоские, воротниковые и свободные фланцы для разъёмных соединений трубопроводов и присоединения арматуры.',
    icon: 'Disc',
  },
  {
    slug: 'prochee',
    name: 'Прочие соединительные детали',
    description:
      'Днища, штуцеры, отводы-секции и нестандартные детали по чертежам и техническим условиям заказчика.',
    icon: 'Shapes',
  },
];

export type Capability = {
  title: string;
  description: string;
  icon: string;
};

export const capabilities: Capability[] = [
  {
    title: 'Производство по стандартам',
    description:
      'Изготовление деталей по ГОСТ, ОСТ, ТУ и международным стандартам, а также по чертежам заказчика.',
    icon: 'Ruler',
  },
  {
    title: 'Широкий диапазон диаметров',
    description:
      'Детали трубопроводов наружным диаметром от малых до больших значений с различной толщиной стенки.',
    icon: 'CircleGauge',
  },
  {
    title: 'Различные материалы',
    description:
      'Углеродистые, легированные и нержавеющие стали, а также сплавы, соответствующие условиям эксплуатации.',
    icon: 'Layers',
  },
  {
    title: 'Нестандартные изделия',
    description:
      'Проектирование и изготовление нестандартных деталей по техническим требованиям и рабочим чертежам.',
    icon: 'PencilRuler',
  },
];

export type QualityItem = {
  title: string;
  description: string;
  icon: string;
};

export const qualityItems: QualityItem[] = [
  {
    title: 'Контроль качества',
    description:
      'Входной контроль материалов, контроль геометрии и размеров готовых деталей на каждом этапе производства.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Сопроводительная документация',
    description:
      'Каждая партия поставляется с паспортом качества и сертификатами на применённые материалы.',
    icon: 'FileText',
  },
  {
    title: 'Прослеживаемость',
    description:
      'Маркировка и идентификация деталей обеспечивают прослеживаемость от плавки до готового изделия.',
    icon: 'ScanLine',
  },
];

export type Industry = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export const industries: Industry[] = [
  {
    slug: 'neftegaz',
    name: 'Нефтегазовая промышленность',
    description:
      'Оборудование для добычи, транспортировки и переработки углеводородов в магистральных и технологических трубопроводах.',
    icon: 'Flame',
  },
  {
    slug: 'himicheskaya',
    name: 'Химическая промышленность',
    description:
      'Детали из коррозионно-стойких сталей для агрессивных сред и технологических установок химических производств.',
    icon: 'FlaskConical',
  },
  {
    slug: 'atomnaya',
    name: 'Атомная промышленность',
    description:
      'Изделия для трубопроводов объектов использования атомной энергии с повышенными требованиями к надёжности.',
    icon: 'Atom',
  },
];

export const companyInfo = {
  name: 'ООО «Завод «Нефтехим»',
  shortName: 'Завод «Нефтехим»',
  city: 'Омск',
  phone: '+7 (3812) 00-00-00',
  phoneHref: 'tel:+73812000000',
  email: 'info@example.ru',
  emailHref: 'mailto:info@example.ru',
  address: 'г. Омск, Россия',
};

export const navLinks = [
  { href: '#/catalog', label: 'Каталог' },
  { href: '#products', label: 'О продукции' },
  { href: '#capabilities', label: 'Производство' },
  { href: '#quality', label: 'Качество' },
  { href: '#industries', label: 'Отрасли' },
  { href: '#contacts', label: 'Контакты' },
];
