<script>
import AutoSwiper from '../AutoSwiper.vue'
import { useTextStore } from '../../stores/text'
import editorDefault from '../../assets/imgs/onlineEditor1.jpg'
import editorConsole from '../../assets/imgs/onlineEditor2.jpg'
import primeHome from '../../assets/imgs/projects/prime-seller-home.webp'
import primeAnalytics from '../../assets/imgs/projects/prime-seller-analytics.webp'
import primeContacts from '../../assets/imgs/projects/prime-seller-contacts.webp'
import primeAi from '../../assets/imgs/projects/prime-seller-ai.webp'
import primePricing from '../../assets/imgs/projects/prime-seller-pricing.webp'
import primeYearly from '../../assets/imgs/projects/prime-seller-yearly.webp'
import doverhuHome from '../../assets/imgs/projects/doverhu-home.webp'
import doverhuRequest from '../../assets/imgs/projects/doverhu-request.webp'
import doverhuBenefits from '../../assets/imgs/projects/doverhu-benefits.webp'
import doverhuCatalog from '../../assets/imgs/projects/doverhu-catalog.webp'
import doverhuWholesale from '../../assets/imgs/projects/doverhu-wholesale.webp'
import doverhuContacts from '../../assets/imgs/projects/doverhu-contacts.webp'

export default {
  name: 'ProjectsBlock',

  components: { AutoSwiper },

  data() {
    return { store: useTextStore() }
  },

  computed: {
    isRussian() {
      return this.store.chooseLang
    },

    projects() {
      return [
        {
          id: 'online-editor',
          title: this.isRussian ? 'Онлайн-редактор кода' : 'Online code editor',
          description: this.isRussian
            ? 'Редактор JavaScript для небольших задач и экспериментов с кодом. Показывает объекты и списки, обрабатывает промисы и таймауты. Консоль можно перемещать, подстраивая рабочее пространство под себя.'
            : 'A JavaScript editor for small tasks and code experiments. It displays objects and lists, handles promises and timeouts, and lets you move the console to arrange your workspace.',
          url: 'https://onlineeditor.ivanjhn.ru/',
          linkLabel: this.isRussian ? 'Открыть проект' : 'Visit website',
          items: this.makeSlides(
            [editorDefault, editorConsole],
            this.isRussian
              ? ['Визуал редактора', 'Подстройка консоли']
              : ['Editor workspace', 'Adjustable console'],
            this.isRussian
              ? ['Пример работы и визуала редактора', 'Вариант со сдвинутой консолью']
              : ['Editor appearance and usage', 'Workspace with the console moved'],
          ),
        },
        {
          id: 'prime-seller',
          title: 'Prime Seller',
          description: this.isRussian
            ? 'Реальный коммерческий проект, выполненный на заказ: сайт сервиса аналитики для продавцов на маркетплейсах. Интерактивные графики, разделы с возможностями продукта, переключение тарифов и сроков подписки. Кнопки связи открывают отдельное окно с контактами.'
            : 'A commissioned commercial website for a real client: a marketplace analytics service. Interactive charts, product features, pricing plans and subscription periods, with a dedicated contact window.',
          url: 'https://primeseller.ivanjhn.ru/',
          linkLabel: this.isRussian ? 'Открыть проект' : 'Visit website',
          items: this.makeSlides(
            [primeHome, primeAnalytics, primePricing, primeYearly, primeAi, primeContacts],
            this.isRussian
              ? [
                  'Главная страница',
                  'Аналитика и графики',
                  'Тарифы',
                  'Годовая подписка',
                  'ИИ-помощник',
                  'Окно связи',
                ]
              : [
                  'Home page',
                  'Analytics and charts',
                  'Pricing plans',
                  'Annual subscription',
                  'AI assistant',
                  'Contact window',
                ],
            this.isRussian
              ? [
                  'Презентация сервиса и его возможностей',
                  'Показатели продаж и отчёты по товарам',
                  'Выбор плана по обороту магазина',
                  'Стоимость при оплате за год',
                  'Подсказки и разбор показателей',
                  'Связь с командой сервиса',
                ]
              : [
                  'The service and its key features',
                  'Sales metrics and product reports',
                  'Plans based on store turnover',
                  'Pricing for annual billing',
                  'Insights and metric breakdowns',
                  'Get in touch with the team',
                ],
          ),
        },
        {
          id: 'doverhu',
          title: this.isRussian ? 'Доверху' : 'Doverhu',
          description: this.isRussian
            ? 'Реальный коммерческий фуллстек-проект, выполненный на заказ: сайт оптовых подарочных наборов с продукцией Kinder. Каталог с фотографиями, подбор наборов под бюджет и форма заявки. Серверная часть обрабатывает заявки и передаёт их менеджеру через бота ВКонтакте.'
            : 'A commissioned full-stack project for a real client: a wholesale Kinder gift-set website. A photo catalog, gift sets for different budgets and an inquiry form. The backend processes requests and sends them to the manager through a VK bot.',
          url: 'https://sladkiydar.ivanjhn.ru/',
          linkLabel: this.isRussian ? 'Открыть проект' : 'Visit website',
          items: this.makeSlides(
            [
              doverhuHome,
              doverhuCatalog,
              doverhuBenefits,
              doverhuWholesale,
              doverhuRequest,
              doverhuContacts,
            ],
            this.isRussian
              ? [
                  'Главная страница',
                  'Каталог наборов',
                  'Состав и преимущества',
                  'Оптовые заказы',
                  'Форма заявки',
                  'Контакты',
                ]
              : [
                  'Home page',
                  'Gift-set catalog',
                  'Contents and benefits',
                  'Wholesale orders',
                  'Inquiry form',
                  'Contacts',
                ],
            this.isRussian
              ? [
                  'Подарочные наборы для оптовых заказов',
                  'Примеры наборов и их состав',
                  'Продукция Kinder и варианты наполнения',
                  'Условия для разных объёмов закупки',
                  'Запрос прайс-листа и подбор под бюджет',
                  'Обратная связь с менеджером',
                ]
              : [
                  'Gift sets for wholesale orders',
                  'Example sets and their contents',
                  'Kinder products and gift options',
                  'Terms for different order volumes',
                  'Price list and sets for your budget',
                  'Get in touch with the manager',
                ],
          ),
        },
      ]
    },
  },

  methods: {
    makeSlides(images, titles, texts = []) {
      return images.map((image, index) => ({
        value: image,
        image,
        title: titles[index],
        text: texts[index],
      }))
    },
  },
}
</script>

<template>
  <section id="projects" class="main-fourth projects" aria-labelledby="projects-title">
    <div class="projects__inner">
      <h2 id="projects-title" class="h2 projects__heading">
        {{ isRussian ? 'Проекты' : 'Projects' }}
      </h2>

      <article
        v-for="(project, index) in projects"
        :key="project.id"
        class="projects__project"
        :class="{ 'projects__project--reverse': index % 2 === 1 }"
        :aria-labelledby="`${project.id}-title`"
      >
        <div class="projects__text">
          <span class="projects__number" aria-hidden="true">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <h3 :id="`${project.id}-title`" class="h3 projects__title">{{ project.title }}</h3>
          <p class="p projects__description">{{ project.description }}</p>
          <a class="a projects__link" :href="project.url" target="_blank" rel="noopener noreferrer">
            {{ project.linkLabel }}
          </a>
        </div>

        <AutoSwiper
          :items="project.items"
          :interval="2500"
          :language="isRussian ? 'ru' : 'en'"
          :aria-label="project.title"
        />
      </article>
    </div>
  </section>
</template>

<style lang="sass" src="./ProjectsBlock.sass" scoped></style>
