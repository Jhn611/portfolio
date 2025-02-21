<script>
export default {
  data() {
    return {
      fullText: 'ivantimofeev1912@gmail.com',
      displayedText: '',
      index: 0,
      interval: null,
      opacity: 0.25,
      stackSrc: [
        new URL('@/assets/imgs/vue.jpg', import.meta.url).href,
        new URL('@/assets/imgs/js.png', import.meta.url).href,
        new URL('@/assets/imgs/css.jpg', import.meta.url).href,
        new URL('@/assets/imgs/html.jpg', import.meta.url).href,
        new URL('@/assets/imgs/Axios.jpg', import.meta.url).href,
      ],
      isFlipped: true,
      tiltX: 0, // Угол наклона по X
      tiltY: 0, // Угол наклона по Y
    }
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
    handleMouseMove(event) {
      if (window.screen.width > 625) {
        let el = document.querySelector('.background-effect')
        if (window.screen.width < 625) {
          el.style.display = 'none'
        } else {
          el.style.display = 'block'
          el.style.left = event.pageX + 'px'
          el.style.top = event.pageY + 'px'
          this.mouseX = event.pageX
          this.mouseY = event.pageY
        }
        // Получаем центр экрана
        const centerX = window.innerWidth / 2 - 100
        const centerY = window.innerHeight / 2

        // Определяем смещение мыши относительно центра экрана
        const offsetX = event.clientX - centerX
        const offsetY = event.clientY - centerY

        // Нормализуем координаты (-1 до 1)
        const percentX = offsetX / centerX
        const percentY = offsetY / centerY

        // Максимальный угол наклона
        const maxTilt = 30

        // Вычисляем углы поворота
        this.tiltX = percentY * maxTilt * -1 // Инверсия, чтобы движение было естественным
        this.tiltY = percentX * maxTilt

        const { innerWidth, innerHeight } = window
        const x = (event.clientX / innerWidth - 0.5) * 30 // От -20 до 20 градусов
        const y = (event.clientY / innerHeight - 0.5) * 30

        // Применяем трансформацию к объекту
        let elements = document.getElementsByClassName('tilt-img')
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.transform = `rotateX(${this.tiltX}deg) rotateY(${this.tiltY}deg)`
          elements[i].style.boxShadow = `${-x}px ${-y}px 20px rgba(0, 0, 0, 0.9)`
        }
        //document.querySelector('.tilt-img')
      }
    },
  },

  created() {},

  mounted() {
    this.startTyping()

    document.addEventListener('mousemove', this.handleMouseMove)
    if (window.screen.width < 525) {
      let elements = document.getElementsByClassName('tilt-img')
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('icon')
      }
    }

    setTimeout(() => {
      this.isFlipped = false
    }, 2000)
  },

  unmounted() {
    window.removeEventListener('scroll', this.mouseMove)
    document.removeEventListener('mousemove', this.handleMouseMove)
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
              <img class="card-back-img" src="./assets/imgs/card_back.svg" alt="" />
            </div>
            <div class="card">
              <img class="card-img" src="./assets/imgs/my_photo.jpg" alt="" />
              <h4 class="card-text">Тимофеев Иван Михайлович</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="main-second">
        <div class="main-second__stack-block">
          <div class="stacks">
            <img
              class="tilt-img"
              v-for="(path, index) in stackSrc"
              :key="path"
              :src="path"
              alt="img"
              :class="{
                stack_left_up: index === 0,
                stack_center: index === 1,
                stack_left_down: index === 2,
                stack_right_up: index === 3,
                stack_right_down: index === 4,
              }"
            />
          </div>
        </div>
        <div class="main-second__text_block">
          <h2 class="h2">Обо мне</h2>
          <h3 class="h3">Обучение</h3>
          <p class="p">
            Сейчас я учусь на 2м курсе в РТУ МИРЭА<br />
            на направлении “Фуллстек разработка” 2025 г.
          </p>
          <h3 class="h3">Стеки</h3>
          <p class="p">
            В основном я работаю на фреймворке Vue.js,<br />
            Для стилей использую препроцессор Sass,<br />
            Страницы верстаю на Html,<br />
            Так как работаю с Vue.js, использую Axios для подключений,<br />
            Скрипты и функциональную часть на JS.
          </p>
        </div>
      </div>
      <footer>
        <p class="p-footer text-gradient pointer" @click="copyEmail">
          напишите мне - {{ displayedText }}
        </p>
      </footer>
    </main>
    <div class="background-effect" ref="backgroundEffect"></div>
    <div class="copy-block"></div>
  </div>
</template>

<style src="./App.css"></style>
