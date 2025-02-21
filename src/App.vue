<script>
import Stacks from './views/MyStacks.vue'
import Page2TextVue from './views/Page2Text.vue'
export default {
  data() {
    return {
      fullText: 'ivantimofeev1912@gmail.com',
      displayedText: '',
      index: 0,
      interval: null,
      opacity: 0.25,
      isFlipped: true,
      isMobile: window.innerWidth < 525,
    }
  },
  components: {
    Stacks,
    Page2TextVue,
  },
  computed: {},
  methods: {
    toggleFlip() {
      this.isFlipped = !this.isFlipped
    },
    copyEmail(event) {
      console.log(event.clientX, event.clientY)
      navigator.clipboard.writeText('ivantimofeev1912@gmail.com')
      let el = document.querySelector('.copy-block')
      el.style.display = 'block'
      el.style.left = event.pageX + 'px'
      el.style.top = event.pageY + 'px'
    },
    startTyping() {
      this.interval = setInterval(() => {
        if (this.index < this.fullText.length) {
          this.displayedText += this.fullText[this.index]
          this.index++
        } else {
          clearInterval(this.interval)
        }
      }, 100)
    },
    checkScreen() {
      this.isMobile = window.innerWidth < 525
    },
  },

  created() {},

  mounted() {
    this.startTyping()

    setTimeout(() => {
      this.isFlipped = false
    }, 1000)

    window.addEventListener('resize', this.checkScreen)
  },

  unmounted() {
    window.removeEventListener('scroll', this.mouseMove)
    window.removeEventListener('resize', this.checkScreen)
  },
}
</script>

<template>
  <div class="page">
    <header class="header"></header>
    <main class="main">
      <div class="main-first">
        <div class="main-first__text-block">
          <h1 class="h1 text-gradient">
            Здравствуйте,<br />
            это моё <br />
            портфолио
          </h1>
        </div>
        <div class="main-first__card-block" @click="toggleFlip" :class="{ flipped: isFlipped }">
          <div class="card-container">
            <div class="card-back">
              <img class="card-back-img" src="./assets/imgs/Card_back.svg" alt="" />
            </div>
            <div class="card">
              <img class="card-img" src="./assets/imgs/my_photo.jpg" alt="" />
              <h4 class="card-text">Тимофеев Иван</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="main-second" v-if="isMobile">
        <div class="main-second__text_block">
          <Page2TextVue />
        </div>
        <div class="main-second__stack-block">
          <Stacks />
        </div>
      </div>
      <div class="main-second" v-if="!isMobile">
        <div class="main-second__stack-block">
          <Stacks />
        </div>
        <div class="main-second__text_block">
          <Page2TextVue />
        </div>
      </div>
      <!-- <footer>
        <p class="p-footer text-gradient pointer" @click="copyEmail">
          напишите мне - {{ displayedText }}
        </p>
      </footer> -->
    </main>
    <div class="background-effect" ref="backgroundEffect"></div>
    <div class="copy-block"></div>
  </div>
</template>

<style src="./App.css"></style>
