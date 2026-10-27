// Тип данных изделия каталога.
// Демонстрационные значения помечены и должны быть заменены реальным ассортиментом.
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

// Демонстрационный ассортимент. Реальные технические характеристики не указаны —
// поля содержат обобщённые описания и пометки «демонстрационный артикул».
// Замените значения в этом файле на реальную номенклатуру без изменения интерфейса.
export const products: Product[] = [
  {
    id: 'otvod-krutoizognutyj-90',
    sku: 'ОТ-90-ДЕМО-001',
    name: 'Отвод крутоизогнутый 90°',
    categoryId: 'otvody',
    partType: 'Отвод крутоизогнутый',
    standard: 'ГОСТ (демонстрационно)',
    material: 'Сталь углеродистая / легированная',
    diameter: 'Демонстрационный',
    pressure: 'Демонстрационное',
    description:
      'Крутоизогнутый отвод для изменения направления трубопровода на 90°. Демонстрационная позиция — точные параметры (диаметр, толщина стенки, радиус изгиба, материал) уточняются по запросу.',
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
    standard: 'ГОСТ (демонстрационно)',
    material: 'Сталь углеродистая / легированная',
    diameter: 'Демонстрационный',
    pressure: 'Демонстрационное',
    description:
      'Крутоизогнутый отвод для плавного изменения направления трубопровода на 45°. Параметры уточняются по запросу.',
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
    standard: 'ГОСТ (демонстрационно)',
    material: 'Сталь углеродистая / нержавеющая',
    diameter: 'Демонстрационный',
    pressure: 'Демонстрационное',
    description:
      'Концентрический переход для соединения труб разного диаметра по одной оси. Параметры уточняются по запросу.',
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
    standard: 'ГОСТ (демонстрационно)',
    material: 'Сталь углеродистая / нержавеющая',
    diameter: 'Демонстрационный',
    pressure: 'Демонстрационное',
    description:
      'Эксцентрический переход для трубопроводов, где требуется смещение осей (например, в насосных линиях). Параметры уточняются по запросу.',
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
    standard: 'ГОСТ (демонстрационно)',
    material: 'Сталь углеродистая / легированная',
    diameter: 'Демонстрационный',
    pressure: 'Демонстрационное',
    description:
      'Равнопроходной тройник для разветвления потока в магистральных и технологических трубопроводах. Параметры уточняются по запросу.',
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
    standard: 'ГОСТ (демонстрационно)',
    material: 'Сталь углеродистая / легированная',
    diameter: 'Демонстрационный',
    pressure: 'Демонстрационное',
    description:
      'Переходной тройник для разветвления потока с изменением диаметра ответвления. Параметры уточняются по запросу.',
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
    standard: 'ГОСТ (демонстрационно)',
    material: 'Сталь углеродистая / легированная',
    diameter: 'Демонстрационный',
    pressure: 'Демонстрационное',
    description:
      'Эллиптическая заглушка для герметизации торцов труб и штуцерных отверстий. Параметры уточняются по запросу.',
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
    standard: 'ГОСТ (демонстрационно)',
    material: 'Сталь углеродистая',
    diameter: 'Демонстрационный',
    pressure: 'Демонстрационное',
    description:
      'Плоская приварная заглушка для торцевых соединений трубопроводов. Параметры уточняются по запросу.',
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
    standard: 'ГОСТ (демонстрационно)',
    material: 'Сталь конструкционная / нержавеющая',
    diameter: 'Демонстрационный',
    pressure: 'Демонстрационное',
    description:
      'Воротниковый фланец для ответственных разъёмных соединений и присоединения арматуры. Параметры уточняются по запросу.',
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
    standard: 'ГОСТ (демонстрационно)',
    material: 'Сталь конструкционная',
    diameter: 'Демонстрационный',
    pressure: 'Демонстрационное',
    description:
      'Плоский приварной фланец для разъёмных соединений трубопроводов и оборудования. Параметры уточняются по запросу.',
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
    standard: 'ГОСТ (демонстрационно)',
    material: 'Сталь углеродистая / легированная',
    diameter: 'Демонстрационный',
    pressure: 'Демонстрационное',
    description:
      'Эллиптическое днище для аппаратов и сосудов. Изготавливается по чертежам и техническим условиям. Параметры уточняются по запросу.',
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
    standard: 'ТУ / по чертежу (демонстрационно)',
    material: 'Сталь углеродистая / нержавеющая',
    diameter: 'Демонстрационный',
    pressure: 'Демонстрационное',
    description:
      'Штуцер для присоединения трубопроводов к оборудованию и аппаратам. Изготавливается по чертежам заказчика. Параметры уточняются по запросу.',
    images: [
      'https://images.pexels.com/photos/7937292/pexels-photo-7937292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
];
