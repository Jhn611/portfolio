import { defineStore } from 'pinia'

export const useTextStore = defineStore('textStore', {
  state: () => ({
    en: {
      block1_H1: `Hello,<br /> this is my <br /> portfolio`,
      block2_H2: `About me`,
      block2_H3_part1: `Education`,
      block2_P_part1: `I am currently a 3nd year student at RTU MIREA<br />
        majoring in "Fullstack Development" (2026).`,
      block2_H3_part2: `Goals`,
      block2_P_part2: `Gain work experience, more knowledge and skills in my field.<br />
        Currently looking for an internship<br />
        where I can work while studying at the university.<br />
I'm happy to participate in one-off projects and hackathons.`,
      block3_H2: `Skills`,
      block3_H3_part1: `General knowledge`,
      block3_P_part1: `I have experience with Vue.js, React.js, <br />
      JavaScript, TypeScript, SASS, SCSS, <br />
      CSS, HTML, Python, C++, C#,<br />
      PostgreSQL, Flutter + Dart<br />`,
      block3_H3_part2: `Tech stacks`,
      block3_P_part2: `My main stacks are React and Vue.<br />
I most often write using JavaScript for the functional part of the project,<br />
"complex" animations, backend integration, etc.<br />
I prefer the SASS preprocessor for comfortable and concise<br />
style writing,<br />
and classic HTML for markup.`,
      block4_H2: `Projects`,
      block4_link: 'Visit website',
      projects: {
        'online-editor': {
          title: 'Online code editor',
          description:
            'A JavaScript editor for small tasks and code experiments. It displays objects and lists, handles promises and timeouts, and lets you move the console to arrange your workspace.',
          slides: [
            {
              title: 'Editor workspace',
              text: 'Editor appearance and usage',
            },
            {
              title: 'Adjustable console',
              text: 'Workspace with the console moved',
            },
          ],
        },
        'prime-seller': {
          title: 'Prime Seller',
          description:
            'A commissioned commercial website for a real client: a marketplace analytics service. Interactive charts, product features, pricing plans and subscription periods, with a dedicated contact window.',
          slides: [
            {
              title: 'Home page',
              text: 'The service and its key features',
            },
            {
              title: 'Analytics and charts',
              text: 'Sales metrics and product reports',
            },
            {
              title: 'Pricing plans',
              text: 'Plans based on store turnover',
            },
            {
              title: 'Annual subscription',
              text: 'Pricing for annual billing',
            },
            {
              title: 'AI assistant',
              text: 'Insights and metric breakdowns',
            },
            {
              title: 'Contact window',
              text: 'Get in touch with the team',
            },
          ],
        },
        doverhu: {
          title: 'Doverhu',
          description:
            'A commissioned full-stack project for a real client: a wholesale Kinder gift-set website. A photo catalog, gift sets for different budgets and an inquiry form. The backend processes requests and sends them to the manager through a VK bot.',
          slides: [
            {
              title: 'Home page',
              text: 'Gift sets for wholesale orders',
            },
            {
              title: 'Gift-set catalog',
              text: 'Example sets and their contents',
            },
            {
              title: 'Contents and benefits',
              text: 'Kinder products and gift options',
            },
            {
              title: 'Wholesale orders',
              text: 'Terms for different order volumes',
            },
            {
              title: 'Inquiry form',
              text: 'Price list and sets for your budget',
            },
            {
              title: 'Contacts',
              text: 'Get in touch with the manager',
            },
          ],
        },
      },
      swiper: {
        openImage: 'Open screenshot',
        previous: 'Previous screenshot',
        next: 'Next screenshot',
        slide: 'Open screenshot {{index}}',
        learnMore: 'Learn more',
      },
      block5_H2: `Me`,
      block5_H3: `My interests`,
      block5_P: `In my free time I enjoy<br />
    drawing, gaming<br />
    and studying interesting animations and frontend tricks.`,
      form_H2: `Write to me`,
      form_label1: `Your email address`,
      form_label2: `How to address you`,
      form_label3: `Describe what you need`,
      form_button_text: `Submit request`,
      form_button_status: `Sending...`,
      form_reset_button: `Submit new request`,
      form_success_msg: `Thank you for your request! I'll contact you shortly.`,
      form_errors: {
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email format',
        emailTooLong: 'Email is too long',
        nameRequired: 'Please provide your name',
        nameTooShort: 'Name is too short',
        nameTooLong: 'Name is too long',
        descriptionRequired: 'Please describe your project',
        descriptionTooShort: 'Please provide more details (min 15 characters)',
        descriptionTooLong: 'Is too long description (max 400 characters)',
        submitError: 'Request submission failed',
      },
      card_name: `Timofeev Ivan`,
      card_country: `Moscow`,
      modal_window: `Drag`,
    },
    ru: {
      block1_H1: `Здравствуйте,<br /> это моё <br /> портфолио`,
      block2_H2: `Обо мне`,
      block2_H3_part1: `Обучение`,
      block2_P_part1: `Сейчас я учусь на 3м курсе в РТУ МИРЭА<br />
            на направлении “Фуллстек разработка” 2026 г.`,
      block2_H3_part2: `Цели`,
      block2_P_part2: ` Получить опыт работы, больше знаний и навыков в своей области.<br />
            На данный момент ищу стажировку,<br />
            на которой смогу работать параллельно учёбе в вузе.<br />
            Я буду рад принять участие в разовых проектах и хакатонах`,
      block3_H2: `Навыки`,
      block3_H3_part1: `Общие знания`,
      block3_P_part1: `У меня есть опыт работы с Vue.js, React.js, <br />
      JavaScript, TypeScript, SASS, SCSS, <br />
      CSS, HTML, Python, C++, C#,<br />
      PostgreSQL, Flutter + Dart<br />
    `,
      block3_H3_part2: `Стеки`,
      block3_P_part2: `Мои основные стеки - React и Vue.<br />
    Чаще всего пишу используя JavaScript для функциональной части проекта,<br />
    "сложных" анимаций, связки с бекэндом и т.д.,<br />
    Предпочитаю препроцессор SASS для комфортного и лаконичного<br />
    написания стилей,<br />
    И классический HTML для разметки.`,
      block4_H2: `Проекты`,
      block4_link: 'Открыть проект',
      projects: {
        'online-editor': {
          title: 'Онлайн-редактор кода',
          description:
            'Редактор JavaScript для небольших задач и экспериментов с кодом. Показывает объекты и списки, обрабатывает промисы и таймауты. Консоль можно перемещать, подстраивая рабочее пространство под себя.',
          slides: [
            {
              title: 'Визуал редактора',
              text: 'Пример работы и визуала редактора',
            },
            {
              title: 'Подстройка консоли',
              text: 'Вариант со сдвинутой консолью',
            },
          ],
        },
        'prime-seller': {
          title: 'Prime Seller',
          description:
            'Реальный коммерческий проект, выполненный на заказ: сайт сервиса аналитики для продавцов на маркетплейсах. Интерактивные графики, разделы с возможностями продукта, переключение тарифов и сроков подписки. Кнопки связи открывают отдельное окно с контактами.',
          slides: [
            {
              title: 'Главная страница',
              text: 'Презентация сервиса и его возможностей',
            },
            {
              title: 'Аналитика и графики',
              text: 'Показатели продаж и отчёты по товарам',
            },
            {
              title: 'Тарифы',
              text: 'Выбор плана по обороту магазина',
            },
            {
              title: 'Годовая подписка',
              text: 'Стоимость при оплате за год',
            },
            {
              title: 'ИИ-помощник',
              text: 'Подсказки и разбор показателей',
            },
            {
              title: 'Окно связи',
              text: 'Связь с командой сервиса',
            },
          ],
        },
        doverhu: {
          title: 'Доверху',
          description:
            'Реальный коммерческий фуллстек-проект, выполненный на заказ: сайт оптовых подарочных наборов с продукцией Kinder. Каталог с фотографиями, подбор наборов под бюджет и форма заявки. Серверная часть обрабатывает заявки и передаёт их менеджеру через бота ВКонтакте.',
          slides: [
            {
              title: 'Главная страница',
              text: 'Подарочные наборы для оптовых заказов',
            },
            {
              title: 'Каталог наборов',
              text: 'Примеры наборов и их состав',
            },
            {
              title: 'Состав и преимущества',
              text: 'Продукция Kinder и варианты наполнения',
            },
            {
              title: 'Оптовые заказы',
              text: 'Условия для разных объёмов закупки',
            },
            {
              title: 'Форма заявки',
              text: 'Запрос прайс-листа и подбор под бюджет',
            },
            {
              title: 'Контакты',
              text: 'Обратная связь с менеджером',
            },
          ],
        },
      },
      swiper: {
        openImage: 'Открыть скриншот',
        previous: 'Предыдущий скриншот',
        next: 'Следующий скриншот',
        slide: 'Открыть скриншот {{index}}',
        learnMore: 'Подробнее',
      },
      block5_H2: `Я`,
      block5_H3: `Мои интересы`,
      block5_P: `Свободное время я люблю проводить за<br />
    рисованием, играми<br />
    и изучением интересных анимаций и фишек во фронтенде.`,
      form_H2: `Напишите мне`,
      form_label1: `Напишите ваш email`,
      form_label2: `Как к вам обращаться`,
      form_label3: `Опишите что вам нужно`,
      form_button_text: `Отправить запрос`,
      form_button_status: `Отправка...`,
      form_reset_button: `Отправить новый запрос`,
      form_success_msg: `Спасибо за вашу заявку! Я свяжусь с вами в ближайшее время.`,
      form_errors: {
        emailRequired: 'Email обязателен',
        emailInvalid: 'Некорректный email',
        emailTooLong: 'Слишком длинный email',
        nameRequired: 'Укажите, как к вам обращаться',
        nameTooShort: 'Слишком короткое имя',
        nameTooLong: 'Слишком длинное имя',
        descriptionRequired: 'Опишите ваш проект',
        descriptionTooShort: 'Опишите подробнее (минимум 15 символов)',
        descriptionTooLong: 'Слишком длинное описание (максимум 400 символов)',
        submitError: 'Ошибка при отправке запроса',
      },
      card_name: `Тимофеев Иван`,
      card_country: `Москва`,
      modal_window: `Перетаскивание`,
    },
    chooseLang: true,
  }),
  persist: {
    pick: ['chooseLang'],
  },
  getters: {},

  actions: {
    switchLanguage() {
      this.chooseLang = !this.chooseLang
    },
  },
})
