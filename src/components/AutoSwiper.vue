<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'AutoSwiper',

  components: { Swiper, SwiperSlide },

  props: {
    items: {
      type: Array,
      required: true,
    },
    interval: {
      type: Number,
      default: 2500,
    },
    language: {
      type: String,
      default: 'ru',
    },
  },

  data() {
    return { modules: [A11y, Autoplay, Navigation, Pagination] }
  },

  computed: {
    labels() {
      return this.language === 'ru'
        ? {
            openImage: 'Открыть скриншот',
            previous: 'Предыдущий скриншот',
            next: 'Следующий скриншот',
            slide: 'Открыть скриншот {{index}}',
          }
        : {
            openImage: 'Open screenshot',
            previous: 'Previous screenshot',
            next: 'Next screenshot',
            slide: 'Open screenshot {{index}}',
          }
    },
  },
}
</script>

<template>
  <Swiper
    :key="language"
    class="AutoSwiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :loop="items.length > 1"
    :speed="650"
    :grab-cursor="items.length > 1"
    :navigation="items.length > 1"
    :pagination="items.length > 1 ? { clickable: true } : false"
    :a11y="{
      prevSlideMessage: labels.previous,
      nextSlideMessage: labels.next,
      paginationBulletMessage: labels.slide,
    }"
    :autoplay="
      items.length > 1
        ? { delay: interval, disableOnInteraction: false, pauseOnMouseEnter: true }
        : false
    "
  >
    <SwiperSlide
      v-for="item in items"
      :key="item.value"
      v-slot="{ isActive }"
      class="AutoSwiperSlide"
    >
      <figure class="AutoSwiperItem">
        <a
          v-if="item.image"
          class="AutoSwiperImageLink"
          :href="item.image"
          :title="labels.openImage"
          :aria-label="`${labels.openImage}: ${item.title}`"
          :tabindex="isActive ? 0 : -1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="AutoSwiperImage"
            :src="item.image"
            :alt="item.imageAlt || item.title"
            loading="lazy"
            decoding="async"
          />
        </a>

        <figcaption class="AutoSwiperCaption">
          <p class="AutoSwiperTitle">{{ item.title }}</p>
          <p v-if="item.text" class="AutoSwiperText">{{ item.text }}</p>
          <a
            v-if="item.link"
            class="AutoSwiperLink"
            :href="item.link"
            :tabindex="isActive ? 0 : -1"
          >
            {{ language === 'ru' ? 'Подробнее' : 'Learn more' }}
          </a>
        </figcaption>
      </figure>
    </SwiperSlide>
  </Swiper>
</template>

<style src="../styles/AutoSwiper.css"></style>
