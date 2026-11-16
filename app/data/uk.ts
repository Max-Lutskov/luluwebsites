// Copy for /uk/: the Ukrainian page for local clients (people who ask for a portfolio in Threads,
// word of mouth). It is its own page, not a translation of the homepage: that one is written for
// US owners who got a cold email.
// Prices and the Telegram handle: Max, 2026-11-17. No invented social proof (see CLAUDE.md).

export const uk = {
  url: 'https://lulustudio.dev/uk/',
  title: 'LuLu Studio: сайти для малого бізнесу',
  description:
    'LuLu Studio робить сайти для малого бізнесу. Сайт до 7 сторінок — $200, інтернет-магазин — від $600. Вінниця.',
  telegram: 'Lutskov',
  telegramUrl: 'https://t.me/Lutskov'
}

export const ukFacts: { value: string; label: string }[] = [
  { value: '6 років', label: 'робимо сайти' },
  { value: '$200', label: 'сайт до 7 сторінок' },
  // Max, 2026-11-17: domains so far are registered on his email, he hands them over on request
  { value: 'Сайт і домен ваші', label: 'передаємо на ваш акаунт' },
  { value: 'Ціна наперед', label: 'фіксуємо до початку роботи' }
]

export interface UkWork {
  /** Same slugs as in site.ts: the screenshots are shared */
  slug: string
  name: string
  kind: string
  niche: string
  location: string
  text: string
  url: string
  host: string
}

export const ukWorks: UkWork[] = [
  {
    slug: 'protskov',
    name: 'Процков Буд',
    kind: 'Сайт клієнта',
    niche: 'Будматеріали та оренда техніки',
    location: 'Вінниця',
    text: 'Ціни, техніка і фото прямо від власника. Великий номер телефону, який можна натиснути, і форма заявки, що приходить йому на телефон.',
    url: 'https://protskovbud.vn.ua/',
    host: 'protskovbud.vn.ua'
  },
  {
    slug: 'buketi',
    name: 'Солодкі букети',
    kind: 'Сайт-каталог',
    niche: 'Букети з цукерок на замовлення',
    location: 'Вінниця та Жмеринка',
    text: 'Галерея робіт із реальною ціною біля кожної, підбір букета за бюджетом і святом, умови доставки та відповіді на часті питання.',
    url: 'https://solodki-buketi.vn.ua/',
    host: 'solodki-buketi.vn.ua'
  },
  {
    slug: 'sadovi',
    name: 'Садові Мрії',
    kind: 'Редизайн',
    niche: 'Ландшафтний дизайн',
    location: 'Київ',
    text: 'Переробили старий сайт компанії: їхні власні фото проєктів, повний прайс у відкритому доступі та швидка форма заявки.',
    url: 'https://sadovi-mrii.com.ua/',
    host: 'sadovi-mrii.com.ua'
  }
]

export const ukPrices: { name: string; price: string; text: string; points: string[] }[] = [
  {
    name: 'Сайт для бізнесу',
    price: '$200',
    text: 'До 7 сторінок: наприклад, головна, послуги, ціни, роботи й контакти.',
    points: [
      'Швидко відкривається з телефона',
      'Номер телефону в один дотик',
      'Форма заявки, що приходить одразу вам',
      'Заголовки й описи для Google'
    ]
  },
  {
    name: 'Інтернет-магазин',
    price: 'від $600',
    text: 'Каталог товарів, сторінка товару й оформлення замовлення.',
    points: [
      'Усе, що в сайті за $200',
      'Точну ціну називаємо після розмови',
      'Ціну фіксуємо до початку роботи'
    ]
  }
]

export const ukSteps: { title: string; text: string }[] = [
  { title: 'Ви пишете', text: 'Розповідаєте, чим займаєтесь і який сайт потрібен. Якщо сайт уже є, надішліть посилання.' },
  { title: 'Називаємо ціну', text: 'Фіксовану, до початку роботи. Не підходить — на цьому й закінчуємо.' },
  { title: 'Робимо сайт', text: 'Показуємо, вносимо правки і запускаємо.' }
]
