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
        new URL('@/assets/imgs/axios.jpg', import.meta.url).href,
      ],
      // mouseX: 0,
      // mouseY: 0,
      // smoothX: 0,
      // smoothY: 0,
      // animationFrame: null,
      tiltX: 0, // Угол наклона по X
      tiltY: 0, // Угол наклона по Y
    }
  },
  computed: {
    // styleObject() {
    //   return {
    //     transform: `translate(${this.smoothX}px, ${this.smoothY}px)`,
    //   }
    // },
  },
  methods: {
    mouseMove(event) {
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
      console.log(event)
    },
    // animate() {
    //   this.smoothX += (this.mouseX - this.smoothX) * 0.1
    //   this.smoothY += (this.mouseY - this.smoothY) * 0.1
    //   this.animationFrame = requestAnimationFrame(this.animate)
    // },
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
  created() {
    //window.addEventListener('scroll', this.mouseMove)
  },
  mounted() {
    this.startTyping()
    document.addEventListener('mousemove', this.handleMouseMove)
    if (window.screen.width < 625) {
      let elements = document.getElementsByClassName('tilt-img')
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('icon')
      }
    }
    // this.animate()
  },
  unmounted() {
    window.removeEventListener('scroll', this.mouseMove)
    document.removeEventListener('mousemove', this.handleMouseMove)
    // cancelAnimationFrame(this.animationFrame)
  },
}
</script>

<template>
  <div class="page" @mouseenter="mouseMove" @mousemove="mouseMove" @mouseleave="mouseMove">
    <header class="header"></header>
    <main class="main">
      <div class="main-left">
        <div class="main-left__text-block">
          <h1 class="h1-y2k text-gradient">
            <img class="h1-img" src="./assets/imgs/stars.png" alt="" />Иван Тимофеев
          </h1>
          <h3 class="h3-header text-gradient">Фронтэнд разработчик</h3>
          <p class="p-read text-gradient">
            Я создаю веб сайты и веб приложения с максималной точностью.
          </p>
        </div>
        <div class="nav-block">
          <nav class="nav-block__bar">
            <div class="nav-block__bar-element">
              <img
                class="a-nav-img-uncheck"
                src="./assets/imgs/radio_button_unchecked.svg"
                alt=""
              />
              <img class="a-nav-img-check" src="./assets/imgs/radio_button_checked.svg" alt="" />
              <a class="a-nav pointer" href="#AboutMe" @click="mouseMove">Обо мне</a>
            </div>
            <div>
              <a class="a-nav pointer text-gradient" href="#Projects" @click="mouseMove">Проекты</a>
            </div>
          </nav>
          <!-- <img class="nav-block__img" src=".\assets\imgs\bg_obj1.png" alt="" /> -->
          <div class="stack-block">
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
            <!-- <img class="test" src="./assets/imgs/vue.jpg" alt="" /> -->
          </div>
        </div>
        <footer>
          <p class="p-footer text-gradient pointer" @click="copyEmail">
            напишите мне - {{ displayedText }}
          </p>
        </footer>
        <!-- <div class="img-block-main">
          <img class="img-block-main__img" src="./assets/imgs/Pointing Up Left Hand.png" alt="" />
        </div> -->
      </div>
      <div class="main-right">
        <div class="main-right__text-block">
          <h3 id="AboutMe" class="h3-header text-default-color">Обо мне</h3>
          <p class="p-read text-default-color">
            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов обеспечивает
            широкому кругу (специалистов) участие в формировании переосмысления внешнеэкономических
            политик. Сложно сказать, почему независимые государства лишь добавляют фракционных
            разногласий и призваны к ответу.
          </p>
          <p class="p-read text-default-color">
            Для современного мира глубокий уровень погружения является качественно новой ступенью
            направлений прогрессивного развития. Каждый из нас понимает очевидную вещь: сплочённость
            команды профессионалов требует от нас анализа инновационных методов управления
            процессами.
          </p>
          <p class="p-read text-default-color">
            Картельные сговоры не допускают ситуации, при которой диаграммы связей будут
            ассоциативно распределены по отраслям. А также базовые сценарии поведения пользователей
            заблокированы в рамках своих собственных рациональных ограничений. А также некоторые
            особенности внутренней политики и по сей день остаются уделом либералов, которые жаждут
            быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего
            возрастает их статус бесполезности.
          </p>
          <p class="p-read text-default-color">
            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов обеспечивает
            широкому кругу (специалистов) участие в формировании переосмысления внешнеэкономических
            политик. Сложно сказать, почему независимые государства лишь добавляют фракционных
            разногласий и призваны к ответу.
          </p>
          <p class="p-read text-default-color">
            Для современного мира глубокий уровень погружения является качественно новой ступенью
            направлений прогрессивного развития. Каждый из нас понимает очевидную вещь: сплочённость
            команды профессионалов требует от нас анализа инновационных методов управления
            процессами.
          </p>
          <p class="p-read text-default-color">
            Картельные сговоры не допускают ситуации, при которой диаграммы связей будут
            ассоциативно распределены по отраслям. А также базовые сценарии поведения пользователей
            заблокированы в рамках своих собственных рациональных ограничений. А также некоторые
            особенности внутренней политики и по сей день остаются уделом либералов, которые жаждут
            быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего
            возрастает их статус бесполезности.
          </p>
          <p class="p-read text-default-color">
            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов обеспечивает
            широкому кругу (специалистов) участие в формировании переосмысления внешнеэкономических
            политик. Сложно сказать, почему независимые государства лишь добавляют фракционных
            разногласий и призваны к ответу.
          </p>
          <p class="p-read text-default-color">
            Для современного мира глубокий уровень погружения является качественно новой ступенью
            направлений прогрессивного развития. Каждый из нас понимает очевидную вещь: сплочённость
            команды профессионалов требует от нас анализа инновационных методов управления
            процессами.
          </p>
          <p class="p-read text-default-color">
            Картельные сговоры не допускают ситуации, при которой диаграммы связей будут
            ассоциативно распределены по отраслям. А также базовые сценарии поведения пользователей
            заблокированы в рамках своих собственных рациональных ограничений. А также некоторые
            особенности внутренней политики и по сей день остаются уделом либералов, которые жаждут
            быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего
            возрастает их статус бесполезности.
          </p>
        </div>
        <div class="main-right__text-block">
          <h3 id="Projects" class="h3-header text-default-color">Проекты</h3>
          <p class="p-read text-default-color">
            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов обеспечивает
            широкому кругу (специалистов) участие в формировании переосмысления внешнеэкономических
            политик. Сложно сказать, почему независимые государства лишь добавляют фракционных
            разногласий и призваны к ответу.
          </p>
          <p class="p-read text-default-color">
            Для современного мира глубокий уровень погружения является качественно новой ступенью
            направлений прогрессивного развития. Каждый из нас понимает очевидную вещь: сплочённость
            команды профессионалов требует от нас анализа инновационных методов управления
            процессами.
          </p>
          <p class="p-read text-default-color">
            Картельные сговоры не допускают ситуации, при которой диаграммы связей будут
            ассоциативно распределены по отраслям. А также базовые сценарии поведения пользователей
            заблокированы в рамках своих собственных рациональных ограничений. А также некоторые
            особенности внутренней политики и по сей день остаются уделом либералов, которые жаждут
            быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего
            возрастает их статус бесполезности.
          </p>
          <p class="p-read text-default-color">
            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов обеспечивает
            широкому кругу (специалистов) участие в формировании переосмысления внешнеэкономических
            политик. Сложно сказать, почему независимые государства лишь добавляют фракционных
            разногласий и призваны к ответу.
          </p>
          <p class="p-read text-default-color">
            Для современного мира глубокий уровень погружения является качественно новой ступенью
            направлений прогрессивного развития. Каждый из нас понимает очевидную вещь: сплочённость
            команды профессионалов требует от нас анализа инновационных методов управления
            процессами.
          </p>
          <p class="p-read text-default-color">
            Картельные сговоры не допускают ситуации, при которой диаграммы связей будут
            ассоциативно распределены по отраслям. А также базовые сценарии поведения пользователей
            заблокированы в рамках своих собственных рациональных ограничений. А также некоторые
            особенности внутренней политики и по сей день остаются уделом либералов, которые жаждут
            быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего
            возрастает их статус бесполезности.
          </p>
          <p class="p-read text-default-color">
            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов обеспечивает
            широкому кругу (специалистов) участие в формировании переосмысления внешнеэкономических
            политик. Сложно сказать, почему независимые государства лишь добавляют фракционных
            разногласий и призваны к ответу.
          </p>
          <p class="p-read text-default-color">
            Для современного мира глубокий уровень погружения является качественно новой ступенью
            направлений прогрессивного развития. Каждый из нас понимает очевидную вещь: сплочённость
            команды профессионалов требует от нас анализа инновационных методов управления
            процессами.
          </p>
          <p class="p-read text-default-color">
            Картельные сговоры не допускают ситуации, при которой диаграммы связей будут
            ассоциативно распределены по отраслям. А также базовые сценарии поведения пользователей
            заблокированы в рамках своих собственных рациональных ограничений. А также некоторые
            особенности внутренней политики и по сей день остаются уделом либералов, которые жаждут
            быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего
            возрастает их статус бесполезности.
          </p>
        </div>
      </div>
    </main>
    <div class="background-effect" ref="backgroundEffect"></div>
    <div class="copy-block"></div>
  </div>
</template>

<style src="./App.css"></style>
