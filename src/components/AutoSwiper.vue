<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'AutoSwiper',

  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
    interval: {
      type: Number,
      default: 2500,
    },
  },

  data() {
    return {
      modules: [Autoplay, Navigation, Pagination],
    }
  },
}
</script>

<template>
  <Swiper
    class="AutoSwiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :loop="items.length > 1"
    :speed="650"
    :grab-cursor="true"
    :navigation="items.length > 1"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: interval,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
  >
    <SwiperSlide v-for="item in items" :key="item.value" class="AutoSwiperSlide">
      <article class="AutoSwiperItem">
        <img
          v-if="item.image"
          class="AutoSwiperImage"
          :src="item.image"
          :alt="item.imageAlt || item.title"
          loading="lazy"
        />

        <div class="AutoSwiperCaption">
          <h3 class="AutoSwiperTitle">
            {{ item.title }}
          </h3>

          <p v-if="item.text" class="AutoSwiperText">
            {{ item.text }}
          </p>

          <a v-if="item.link" class="AutoSwiperLink" :href="item.link">Подробнее</a>
        </div>
      </article>
    </SwiperSlide>
  </Swiper>
</template>

<style src="../styles/AutoSwiper.css"></style>
