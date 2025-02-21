<script>
export default {
  data() {
    return {
      stackSrc: [
        new URL('@/assets/imgs/vue.jpg', import.meta.url).href,
        new URL('@/assets/imgs/js.png', import.meta.url).href,
        new URL('@/assets/imgs/css.jpg', import.meta.url).href,
        new URL('@/assets/imgs/html.jpg', import.meta.url).href,
        new URL('@/assets/imgs/Axios.jpg', import.meta.url).href,
      ],
      tiltX: 0, // Угол наклона по X
      tiltY: 0, // Угол наклона по Y
    }
  },
  methods: {
    handleMouseMove(event) {
      let bgMouseEffect = document.querySelector('.background-effect')
      if (window.screen.width < 525) {
        bgMouseEffect.style.display = 'none'
        let elements = document.getElementsByClassName('tilt-img')
        if (!elements.classList.contains('icon')) {
          for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add('icon')
          }
        }
      }
      if (window.screen.width > 525) {
        bgMouseEffect.style.display = 'block'
        bgMouseEffect.style.left = event.pageX + 'px'
        bgMouseEffect.style.top = event.pageY + 'px'

        this.mouseX = event.pageX
        this.mouseY = event.pageY
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
  mounted() {
    document.addEventListener('mousemove', this.handleMouseMove)
    if (window.screen.width < 525) {
      let elements = document.getElementsByClassName('tilt-img')
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('icon')
      }
    }
  },

  unmounted() {
    document.removeEventListener('mousemove', this.handleMouseMove)
  },
}
</script>

<template>
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
</template>

<style></style>
