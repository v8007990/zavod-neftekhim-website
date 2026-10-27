// Тип данных изделия каталога.
// Все значения демонстрационные и подлежат замене на реальный ассортимент.
// Реальные технические характеристики (стандарты, марки стали, диаметры,
// давления) не указаны — поля содержат нейтральные значения-заполнители.
export type Product = {
  id: string;            // slug для URL
  sku: string;           // артикул (демонстрационный)
  name: string;
  categoryId: string;    // соответствует ProductCategory.slug
  partType: string;      // тип детали
  standard: string;      // нормативный документ
  material: string;      // материал
  diameter: string;      // диаметр (условный)
  pressure: string;      // номинальное давление
  description: string;
  images: string[];      // ссылки на фотографии (демонстрационные)
};

const NA = 'Уточняется по запросу';

// Демонстрационный ассортимент. Замените значения в этом файле на реальную
// номенклатуру без изменения интерфейса.
export const products: Product[] = [
  {
    id: 'otvod-krutoizognutyj-90',
    sku: 'ОТ-90-ДЕМО-001',
    name: 'Отвод крутоизогнутый 90°',
    categoryId: 'otvody',
    partType: 'Отвод крутоизогнутый',
    standard: NA,
    material: NA,
    diameter: NA,
    pressure: NA,
    description:
      'Отвод для изменения направления трубопровода на 90°. Демонстрационная позиция — точные параметры (диаметр, толщина стенки, радиус изгиба, материал) предоставляются по запросу.',
    images: [
      'https://images.pexels.com/photos/36325392/pexels-photo-36325392.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'otvod-krutoizognutyj-45',
    sku: 'ОТ-45-ДЕМО-002',
    name: 'Отвод крутоизогнутый 45°',
    categoryId: 'otvody',
    partType: 'Отвод крутоизогнутый',
    standard: NA,
    material: NA,
    diameter: NA,
    pressure: NA,
    description:
      'Отвод для плавного изменения направления трубопровода на 45°. Параметры предоставляются по запросу.',
    images: [
      'https://images.pexels.com/photos/36325392/pexels-photo-36325392.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'perehod-koncentricheskij',
    sku: 'ПР-К-ДЕМО-001',
    name: 'Переход концентрический',
    categoryId: 'perehody',
    partType: 'Переход концентрический',
    standard: NA,
    material: NA,
    diameter: NA,
    pressure: NA,
    description:
      'Концентрический переход для соединения труб разного диаметра по одной оси. Параметры предоставляются по запросу.',
    images: [
      'https://images.pexels.com/photos/15508177/pexels-photo-15508177.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'perehod-excentricheskij',
    sku: 'ПР-Э-ДЕМО-002',
    name: 'Переход эксцентрический',
    categoryId: 'perehody',
    partType: 'Переход эксцентрический',
    standard: NA,
    material: NA,
    diameter: NA,
    pressure: NA,
    description:
      'Эксцентрический переход для трубопроводов, где требуется смещение осей. Параметры предоставляются по запросу.',
    images: [
      'https://images.pexels.com/photos/15508177/pexels-photo-15508177.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'trojnik-ravnoprohodnoj',
    sku: 'ТР-Р-ДЕМО-001',
    name: 'Тройник равнопроходной',
    categoryId: 'trojniki',
    partType: 'Тройник равнопроходной',
    standard: NA,
    material: NA,
    diameter: NA,
    pressure: NA,
    description:
      'Равнопроходной тройник для разветвления потока в технологических трубопроводах. Параметры предоставляются по запросу.',
    images: [
      'https://images.pexels.com/photos/7937292/pexels-photo-7937292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'trojnik-perehodnoj',
    sku: 'ТР-П-ДЕМО-002',
    name: 'Тройник переходной',
    categoryId: 'trojniki',
    partType: 'Тройник переходной',
    standard: NA,
    material: NA,
    diameter: NA,
    pressure: NA,
    description:
      'Переходной тройник для разветвления потока с изменением диаметра ответвления. Параметры предоставляются по запросу.',
    images: [
      'https://images.pexels.com/photos/7937292/pexels-photo-7937292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'zaglushka-yellipticheskaya',
    sku: 'ЗГ-Э-ДЕМО-001',
    name: 'Заглушка эллиптическая',
    categoryId: 'zaglushki',
    partType: 'Заглушка эллиптическая',
    standard: NA,
    material: NA,
    diameter: NA,
    pressure: NA,
    description:
      'Эллиптическая заглушка для герметизации торцов труб и штуцерных отверстий. Параметры предоставляются по запросу.',
    images: [
      'https://images.pexels.com/photos/36325392/pexels-photo-36325392.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'zaglushka-ploskaya',
    sku: 'ЗГ-П-ДЕМО-002',
    name: 'Заглушка плоская',
    categoryId: 'zaglushki',
    partType: 'Заглушка плоская приварная',
    standard: NA,
    material: NA,
    diameter: NA,
    pressure: NA,
    description:
      'Плоская приварная заглушка для торцевых соединений трубопроводов. Параметры предоставляются по запросу.',
    images: [
      'https://images.pexels.com/photos/36325392/pexels-photo-36325392.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'flanec-vorotnikovyj',
    sku: 'ФЛ-В-ДЕМО-001',
    name: 'Фланец воротниковый',
    categoryId: 'flancy',
    partType: 'Фланец воротниковый',
    standard: NA,
    material: NA,
    diameter: NA,
    pressure: NA,
    description:
      'Воротниковый фланец для разъёмных соединений и присоединения арматуры. Параметры предоставляются по запросу.',
    images: [
      'https://images.pexels.com/photos/36325392/pexels-photo-36325392.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'flanec-ploskij',
    sku: 'ФЛ-П-ДЕМО-002',
    name: 'Фланец плоский приварной',
    categoryId: 'flancy',
    partType: 'Фланец плоский приварной',
    standard: NA,
    material: NA,
    diameter: NA,
    pressure: NA,
    description:
      'Плоский приварной фланец для разъёмных соединений трубопроводов и оборудования. Параметры предоставляются по запросу.',
    images: [
      'https://images.pexels.com/photos/36325392/pexels-photo-36325392.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'dno-elipticheskoe',
    sku: 'ДН-Э-ДЕМО-001',
    name: 'Днище эллиптическое',
    categoryId: 'prochee',
    partType: 'Днище эллиптическое',
    standard: NA,
    material: NA,
    diameter: NA,
    pressure: NA,
    description:
      'Эллиптическое днище для аппаратов и сосудов. Изготавливается по чертежам и техническим условиям. Параметры предоставляются по запросу.',
    images: [
      'https://images.pexels.com/photos/15508177/pexels-photo-15508177.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'shtutser',
    sku: 'ШТ-ДЕМО-001',
    name: 'Штуцер',
    categoryId: 'prochee',
    partType: 'Штуцер',
    standard: NA,
    material: NA,
    diameter: NA,
    pressure: NA,
    description:
      'Штуцер для присоединения трубопроводов к оборудованию и аппаратам. Изготавливается по чертежам заказчика. Параметры предоставляются по запросу.',
    images: [
      'https://images.pexels.com/photos/7937292/pexels-photo-7937292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
];
