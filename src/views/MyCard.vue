<script>
export default {
  data() {
    return {
      isFlipped: true,
      startFlip: true,
    }
  },
  props: {
    scroll: Number,
  },
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
  },
  watch: {
    scroll(newScroll) {
      let firstBlock = document.querySelector('.main-first').clientHeight
      let secondBlock = document.querySelector('.main-second').clientHeight + firstBlock
      firstBlock = firstBlock - firstBlock * 0.2
      secondBlock = secondBlock - secondBlock * 0.2
      if (newScroll >= firstBlock && newScroll <= secondBlock && this.startFlip) {
        this.toggleFlip()
        this.startFlip = false
      } else if ((newScroll < firstBlock - 120 || newScroll > secondBlock) && !this.startFlip) {
        this.toggleFlip()
        this.startFlip = true
      }
    },
  },
  mounted() {
    // setTimeout(() => {
    //   this.toggleFlip()
    // }, 1000)
  },

  unmounted() {
    document.removeEventListener('mousemove', this.handleParallax)
  },
}
</script>

<template>
  <div class="main-first__card-block" @click="toggleFlip" :class="{ flipped: isFlipped }">
    <div class="card-container">
      <div class="card-back">
        <img class="card-back-img" src="../assets/imgs/Card_back.svg" alt="" />
      </div>
      <div class="card">
        <div class="card-img-block">
          <img class="card-img-upper" src="../assets/imgs/my_photo_v2.png" alt="" />
          <img class="card-img" src="../assets/imgs/my_photo_v2_bg.jpg" alt="" />
        </div>
        <h4 class="card-text">Тимофеев Иван</h4>
        <p class="card-text-p">
          <img class="card-text-p-img" src="../assets/imgs/Map pin.svg" alt="" /> Москва
        </p>
        <p class="card-text-p">
          <img
            class="card-text-p-img"
            style="padding: 0 3px 0 0"
            src="../assets/imgs/telegram.png"
            alt=""
          />
          @IvanAkaJohnny
        </p>
        <p class="card-text-p">
          <img
            style="padding: 1px 4px 0 0"
            class="card-text-p-img"
            src="../assets/imgs/Mail.svg"
            alt=""
          />
          ivantimofeev1912@gmail.com
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
