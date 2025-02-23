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
      const upperImage = document.querySelector('.card-img-upper')
      const lowerImage = document.querySelector('.card-img')
      if (!this.isFlipped) {
        upperImage.style.transform = `translate(-100px, 50px) scale(1.25)`
        lowerImage.style.transform = `scale(1.5)`
        setTimeout(() => {
          upperImage.style.transform = `translate(0, 0) scale(1.05)` // Возвращаем на место
          lowerImage.style.transform = `scale(1)`
        }, 50)
        setTimeout(() => {
          document.addEventListener('mousemove', this.handleParallax)
        }, 800)
      } else {
        document.removeEventListener('mousemove', this.handleParallax)
        upperImage.style.transform = `translate(-100px, 50px) scale(1.25)`
        lowerImage.style.transform = `scale(1.5)`
      }
    },
    handleParallax(event) {
      if (this.isFlipped) {
        const upperImage = document.querySelector('.card-img-upper')
        const lowerImage = document.querySelector('.card-img')
        upperImage.style.transform = 'translate(0, 0)'
        lowerImage.style.transform = 'translate(0, 0)'
        return
      }

      const cardBlock = document.querySelector('.card-img-block')
      const upperImage = document.querySelector('.card-img-upper')
      const { left, top, width, height } = cardBlock.getBoundingClientRect()
      const x = (event.clientX - (left + width / 2)) / 200
      const y = (event.clientY - (top + height / 2)) / 200

      upperImage.style.transform = `translate(${x}px, ${y}px) scale(1.05)`
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
      this.toggleFlip()
    }, 1000)

    window.addEventListener('resize', this.checkScreen)
  },

  unmounted() {
    window.removeEventListener('scroll', this.mouseMove)
    window.removeEventListener('resize', this.checkScreen)
    document.removeEventListener('mousemove', this.handleParallax)
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
              <div class="card-img-block">
                <img class="card-img-upper" src="./assets/imgs/my_photo_v2.png" alt="" />
                <img class="card-img" src="./assets/imgs/my_photo_v2_bg.jpg" alt="" />
              </div>
              <h4 class="card-text">Тимофеев Иван</h4>
              <p class="card-text-p">
                <img class="card-text-p-img" src="./assets/imgs/Map pin.svg" alt="" /> Москва
              </p>
              <p class="card-text-p">
                <img
                  class="card-text-p-img"
                  style="padding: 0 3px 0 0"
                  src="./assets/imgs/telegram.png"
                  alt=""
                />
                @IvanAkaJohnny
              </p>
              <p class="card-text-p">
                <img
                  style="padding: 1px 4px 0 0"
                  class="card-text-p-img"
                  src="./assets/imgs/Mail.svg"
                  alt=""
                />
                ivantimofeev1912@gmail.com
              </p>
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
