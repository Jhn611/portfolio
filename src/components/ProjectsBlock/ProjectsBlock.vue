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
    return {
      store: useTextStore(),
      projectItems: [
        {
          id: 'online-editor',
          url: 'https://onlineeditor.ivanjhn.ru/',
          images: [editorDefault, editorConsole],
        },
        {
          id: 'prime-seller',
          url: 'https://primeseller.ivanjhn.ru/',
          images: [primeHome, primeAnalytics, primePricing, primeYearly, primeAi, primeContacts],
        },
        {
          id: 'doverhu',
          url: 'https://doverkhu.ru/',
          images: [
            doverhuHome,
            doverhuCatalog,
            doverhuBenefits,
            doverhuWholesale,
            doverhuRequest,
            doverhuContacts,
          ],
        },
      ],
    }
  },

  computed: {
    lang() {
      return this.store.chooseLang ? this.store.ru : this.store.en
    },

    projects() {
      return this.projectItems.map((project) => {
        const text = this.lang.projects[project.id]

        return {
          id: project.id,
          url: project.url,
          title: text.title,
          description: text.description,
          items: this.makeSlides(project.images, text.slides),
        }
      })
    },
  },

  methods: {
    makeSlides(images, captions) {
      return images.map((image, index) => ({
        value: image,
        image,
        ...captions[index],
      }))
    },
  },
}
</script>

<template>
  <section id="projects" class="main-fourth projects" aria-labelledby="projects-title">
    <div class="projects__inner">
      <h2 id="projects-title" class="h2 projects__heading">
        {{ lang.block4_H2 }}
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
            {{ lang.block4_link }}
          </a>
        </div>

        <AutoSwiper
          :items="project.items"
          :interval="2500"
          :language="store.chooseLang ? 'ru' : 'en'"
          :labels="lang.swiper"
          :aria-label="project.title"
        />
      </article>
    </div>
  </section>
</template>

<style lang="sass" src="./ProjectsBlock.sass" scoped></style>
