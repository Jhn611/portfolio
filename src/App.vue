<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MyCard from './components/MyCard.vue'
import StackLikeApps from './components/StackLikeApps.vue'
import MyForm from './components/MyForm.vue'
import LearnWindow from './components/LearnWindow.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import LanguageToggle from './components/LanguageToggle.vue'
import { useTextStore } from './stores/text'

export default {
  data() {
    const store = useTextStore()
    return {
      // fullText: 'ivantimofeev1912@gmail.com',
      // displayedText: '',
      // index: 0,
      // interval: null,
      // opacity: 0.25,
      store,
      isMobile: window.innerWidth < 525,
      scrollTop: 0,
      modelInp: '',
      showVideoModal: false,
    }
  },
  components: {
    //Stacks,
    MyCard,
    StackLikeApps,
    MyForm,
    LearnWindow,
    ThemeToggle,
    LanguageToggle,
  },
  computed: {
    lang() {
      return this.store.chooseLang ? this.store.ru : this.store.en
    },
  },
  methods: {
    copyEmail(event) {
      console.log(event.clientX, event.clientY)
      navigator.clipboard.writeText('ivantimofeev1912@gmail.com')
      let el = document.querySelector('.copy-block')
      el.style.display = 'block'
      el.style.left = event.pageX + 'px'
      el.style.top = event.pageY + 'px'
    },
    checkScreen() {
      this.isMobile = window.innerWidth < 525
    },
    handleModalClose() {
      console.log('Модальное окно закрыто')
    },
    initGSAP() {
      gsap.registerPlugin(ScrollTrigger)

      // 1. Параллакс слоёв (оставляем как тебе нравится)
      const layers = [
        { selector: '.bg-layer.first', multiplier: 0.25 },
        { selector: '.bg-layer.second', multiplier: 0.82 },
        { selector: '.bg-layer.third', multiplier: 0.62 },
        { selector: '.bg-layer.fourth', multiplier: 0.98 },
        { selector: '.bg-layer.fifth', multiplier: 0.58 },
      ]

      layers.forEach(({ selector, multiplier }) => {
        gsap.to(selector, {
          y: () => window.innerHeight * multiplier * 1.8,
          ease: 'none',
          scrollTrigger: {
            trigger: '.main-first',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        })
      })

      // 2. ГЛОБАЛЬНЫЙ scrollTop — реальные пиксели по всей странице
      ScrollTrigger.create({
        trigger: 'body', // следим за всей страницей
        start: 'top top',
        end: () => document.documentElement.scrollHeight, // до самого низа
        scrub: 0.8,
        onUpdate: () => {
          this.scrollTop = Math.round(window.scrollY) // Самый точный способ!
        },
      })

      // Авто-обновление при ресайзе и загрузке
      const refresh = () => ScrollTrigger.refresh()
      window.addEventListener('resize', refresh)
      setTimeout(refresh, 500) // на случай ленивой загрузки изображений
    },
  },
  watch() {},
  created() {},

  mounted() {
    this.initGSAP()
    window.addEventListener('resize', this.checkScreen)
  },

  unmounted() {
    window.removeEventListener('resize', this.checkScreen)
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  },
}
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="main-first">
        <div class="main-first__text-block">
          <h1 class="h1" v-html="lang.block1_H1"></h1>
        </div>
        <div class="toggle-container">
          <ThemeToggle :scroll="scrollTop" />
          <LanguageToggle :scroll="scrollTop" />
        </div>

        <div class="bg">
          <svg class="clip-svg" style="position: absolute; width: 0; height: 0">
            <defs>
              <clipPath id="customShape" clipPathUnits="objectBoundingBox">
                <path
                  v-if="!isMobile"
                  d="
                  M 0,0.06
                  C 0,0.03 0,0 0.025,0
                  H 0.78
                  C 0.79,0 0.8,0 0.8,0.04
                  V 0.1
                  C 0.8,0.20 0.83,0.18 0.88,0.18
                  H 0.98
                  C 1,0.18 1,0.2 1,0.22
                  V 0.95
                  C 1, 0.97 1, 1 0.98, 1
                  H 0.20
                  C 0.20,1 0.18,1 0.18,0.96
                  V 0.88
                  C 0.18,0.86 0.18,0.8 0.15,0.8
                  H 0.02
                  C 0.02,0.8 0,0.8 0,0.75
                  V 0.08
                  Z
                "
                />
                <path
                  v-if="isMobile"
                  d="
                  M 0,0.06
                  C 0,0.03 0,0 0.08,0
                  H 0.52
                  C 0.55,0 0.6,0 0.6,0.04
                  V 0.1
                  C 0.6,0.16 0.63,0.18 0.73,0.18
                  H 0.93
                  C 0.95,0.18 1,0.18 1,0.22
                  V 0.94
                  C 1, 0.96 1, 1 0.93, 1
                  H 0.44
                  C 0.47,1 0.38,1 0.38,0.96
                  V 0.88
                  C 0.38,0.86 0.39,0.8 0.28,0.8
                  H 0.07
                  C 0.08,0.8 0,0.8 0,0.75
                  V 0.08
                  Z
                "
                />
              </clipPath>
            </defs>
          </svg>

          <div class="bg-layer zero"></div>
          <div class="bg-layer first"></div>
          <div class="bg-layer second"></div>
          <div class="bg-layer third"></div>
          <div class="bg-layer fourth"></div>
          <div class="bg-layer fifth"></div>
        </div>
      </div>
      <div class="main-second">
        <div class="main-second__text_block">
          <h2 class="h2">
            <span v-html="lang.block2_H2"></span> <img src="./assets/imgs/stars.png" alt="" />
          </h2>
          <h3 class="h3" v-html="lang.block2_H3_part1"></h3>
          <p class="p" v-html="lang.block2_P_part1"></p>
          <h3 class="h3" v-html="lang.block2_H3_part2"></h3>
          <p class="p" v-html="lang.block2_P_part2"></p>
        </div>
        <MyCard :scroll="scrollTop" />
      </div>

      <div class="main-third" v-if="isMobile">
        <div class="main-third__text_block">
          <h2 class="h2" v-html="lang.block3_H2"></h2>
          <h3 class="h3" v-html="lang.block3_H3_part1"></h3>
          <p class="p" v-html="lang.block3_P_part1"></p>
          <h3 class="h3" v-html="lang.block3_H3_part2"></h3>
          <p class="p" v-html="lang.block3_P_part2"></p>
        </div>
        <div class="main-third__stack-block">
          <StackLikeApps />
          <LearnWindow :scroll="scrollTop" @closed="handleModalClose" />
        </div>
      </div>
      <div class="main-third" v-if="!isMobile">
        <div class="main-third__stack-block">
          <StackLikeApps />
          <LearnWindow :scroll="scrollTop" @closed="handleModalClose" />
        </div>
        <div class="main-third__text_block">
          <h2 class="h2" v-html="lang.block3_H2"></h2>
          <h3 class="h3" v-html="lang.block3_H3_part1"></h3>
          <p class="p" v-html="lang.block3_P_part1"></p>
          <h3 class="h3" v-html="lang.block3_H3_part2"></h3>
          <p class="p" v-html="lang.block3_P_part2"></p>
        </div>
      </div>
      <div class="main-fourth" v-if="isMobile">
        <div class="main-fourth__text_block">
          <h2 class="h2" v-html="lang.block4_H2"></h2>
          <h3 class="h3" v-html="lang.block4_H3"></h3>
          <p class="p" v-html="lang.block4_P"></p>
        </div>
        <div class="main-fourth__img">
          <div class="main-fourth__img-conteiner">
            <img src="./assets/imgs/anime_girl2.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="main-fourth" v-if="!isMobile">
        <div class="main-fourth__img">
          <div class="main-fourth__img-conteiner">
            <img src="./assets/imgs/anime_girl2.jpg" alt="" />
          </div>
        </div>
        <div class="main-fourth__text_block">
          <h2 class="h2" v-html="lang.block4_H2"></h2>
          <h3 class="h3" v-html="lang.block4_H3"></h3>
          <p class="p" v-html="lang.block4_P"></p>
        </div>
      </div>
    </main>

    <div class="copy-block"></div>

    <footer class="footer">
      <MyForm />
    </footer>
  </div>
</template>

<style src="./App.css"></style>
