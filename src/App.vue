<script>
import Stacks from './views/MyStacks.vue'
import Page2TextVue from './views/Page2Text.vue'
import MyCard from './views/MyCard.vue'
export default {
  data() {
    return {
      // fullText: 'ivantimofeev1912@gmail.com',
      // displayedText: '',
      // index: 0,
      // interval: null,
      // opacity: 0.25,
      isMobile: window.innerWidth < 525,
      scrollTop: 0,
    }
  },
  components: {
    Stacks,
    Page2TextVue,
    MyCard,
  },
  computed: {},
  methods: {
    handleScroll() {
      this.scrollTop = window.scrollY
      document.body.style.cssText = `--scrollTop: ${this.scrollTop}px`
    },

    copyEmail(event) {
      console.log(event.clientX, event.clientY)
      navigator.clipboard.writeText('ivantimofeev1912@gmail.com')
      let el = document.querySelector('.copy-block')
      el.style.display = 'block'
      el.style.left = event.pageX + 'px'
      el.style.top = event.pageY + 'px'
    },
    // startTyping() {
    //   this.interval = setInterval(() => {
    //     if (this.index < this.fullText.length) {
    //       this.displayedText += this.fullText[this.index]
    //       this.index++
    //     } else {
    //       clearInterval(this.interval)
    //     }
    //   }, 100)
    // },
    checkScreen() {
      this.isMobile = window.innerWidth < 525
    },
  },

  created() {},

  mounted() {
    // this.startTyping()
    window.addEventListener('resize', this.checkScreen)
    window.addEventListener('scroll', this.handleScroll)
  },

  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.checkScreen)
  },
}
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="main-first">
        <div class="main-first__text-block">
          <h1 class="h1 text-gradient">
            Здравствуйте,<br />
            это моё <br />
            портфолио
          </h1>
        </div>
        <div class="bg">
          <div class="bg-first"></div>
          <div class="bg-second"></div>
          <div class="bg-third"></div>
          <div class="bg-fourth"></div>
        </div>
      </div>
      <div class="main-second">
        <div class="main-second__text_block">
          <h2 class="h2">Обо мне</h2>
          <h3 class="h3">Обучение</h3>
          <p class="p">
            Сейчас я учусь на 2м курсе в РТУ МИРЭА<br />
            на направлении “Фуллстек разработка” 2025 г.
          </p>
        </div>
        <MyCard :scroll="scrollTop" />
      </div>

      <div class="main-third" v-if="isMobile">
        <div class="main-third__text_block">
          <Page2TextVue />
        </div>
        <div class="main-third__stack-block">
          <Stacks />
        </div>
      </div>
      <div class="main-third" v-if="!isMobile">
        <div class="main-third__stack-block">
          <Stacks />
        </div>
        <div class="main-third__text_block">
          <Page2TextVue />
        </div>
      </div>
    </main>
    <!-- <div class="background-effect" ref="backgroundEffect"></div> -->
    <div class="copy-block"></div>
  </div>
</template>

<style src="./App.css"></style>
