<template>
  <div
    class="theme_switch__bg"
    :class="{
      sticky: scroll > firstBlock + 30,
      notSticky: scroll < firstBlock + 15,
    }"
  >
    <img
      class="sun_icon"
      :class="{
        sun_off: !theme_flag,
        sun_on: theme_flag,
      }"
      src="../assets/imgs/sun.png"
      alt=""
    />
    <img
      class="moon_icon"
      :class="{
        moon_on: !theme_flag,
        moon_off: theme_flag,
      }"
      src="../assets/imgs/moon.png"
      alt=""
    />
    <div @click="switch_theme_var" class="switcher">
      <svg
        :class="{
          switch_animate_on: !theme_flag,
          switch_animate_off: theme_flag,
        }"
        class="switcher__round"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="white" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scroll: {
      type: Number,
      required: true,
    },
  },

  data() {
    return { theme_flag: false, firstBlock: null }
  },

  methods: {
    switch_theme_var() {
      console.log('here')
      if (this.theme_flag) {
        localStorage.setItem('theme', false)
        this.theme_flag = false
      } else {
        localStorage.setItem('theme', true)
        this.theme_flag = true
      }
      this.switch_theme()
    },
    switch_theme() {
      console.log(this.theme_flag)
      if (!this.theme_flag) {
        document.documentElement.style.setProperty('--white', '#000000')
        document.documentElement.style.setProperty('--white-grey', '#1e1e1e')
        document.documentElement.style.setProperty('--white-blue-grey', '#141515')
        document.documentElement.style.setProperty('--white-light-grey', '#0c0c0c')
        document.documentElement.style.setProperty('--light-grey', '#262626')
        document.documentElement.style.setProperty('--pre-grey', '#3b3b3b')
        document.documentElement.style.setProperty('--grey', '#c0c0c0')
        document.documentElement.style.setProperty('--dark-grey', '#cecece')
        document.documentElement.style.setProperty('--black', '#ffffff')
        document.documentElement.style.setProperty(
          '--black-transparent-hight',
          'rgba(255, 255, 255, 0.7)',
        )
        document.documentElement.style.setProperty(
          '--black-transparent-medium',
          'rgba(245, 245, 245, 0.32)',
        )
        document.documentElement.style.setProperty(
          '--black-transparent-pre-low',
          'rgba(255, 255, 255, 0.2)',
        )
        document.documentElement.style.setProperty(
          '--black-transparent-low',
          'rgba(255,255,255,0.08)',
        )
        document.documentElement.style.setProperty('--coral', '#b52e2e')
        document.documentElement.style.setProperty('--light-coral', '#ff5f56')
        document.documentElement.style.setProperty('--emerald', '#2d835c')
        document.documentElement.style.setProperty('--dark-emerald', '#226547')
        document.documentElement.style.setProperty('--dark-blue', '#494957')
        document.documentElement.style.setProperty('--img', '1')
        document.documentElement.style.setProperty('--img-reverse', '0')
        document.documentElement.style.setProperty('--img-opacity', '0.85')
      } else {
        document.documentElement.style.setProperty('--white', '#ffffff')
        document.documentElement.style.setProperty('--white-grey', '#f4f4f4')
        document.documentElement.style.setProperty('--white-blue-grey', '#e9ecef')
        document.documentElement.style.setProperty('--white-light-grey', '#f8f9fa')
        document.documentElement.style.setProperty('--light-grey', '#ddd')
        document.documentElement.style.setProperty('--pre-grey', '#cccccc')
        document.documentElement.style.setProperty('--grey', '#555')
        document.documentElement.style.setProperty('--dark-grey', '#3e3e3e')
        document.documentElement.style.setProperty('--black', '#000000')
        document.documentElement.style.setProperty(
          '--black-transparent-hight',
          'rgba(0, 0, 0, 0.7)',
        )
        document.documentElement.style.setProperty(
          '--black-transparent-medium',
          'rgba(12, 12, 12, 0.32)',
        )
        document.documentElement.style.setProperty(
          '--black-transparent-pre-low',
          'rgba(0, 0, 0, 0.2)',
        )
        document.documentElement.style.setProperty('--black-transparent-low', 'rgba(0,0,0,0.08)')
        document.documentElement.style.setProperty('--coral', '#ff4444')
        document.documentElement.style.setProperty('--light-coral', '#ff5f56')
        document.documentElement.style.setProperty('--emerald', '#42b983')
        document.documentElement.style.setProperty('--dark-emerald', '#3aa876')
        document.documentElement.style.setProperty('--dark-blue', '#4f5749')
        document.documentElement.style.setProperty('--img', '0')
        document.documentElement.style.setProperty('--img-reverse', '1')
        document.documentElement.style.setProperty('--img-opacity', '1')
      }
    },
  },

  watch: {
    scroll(newScroll) {
      const switcher = document.querySelector('.theme_switch__bg')
      if (newScroll > this.firstBlock + 30) {
        switcher.style.position = 'fixed'
        switcher.style.right = '8%'
        switcher.style.top = '4%'
      } else {
        switcher.style.position = 'absolute'
        switcher.style.right = '3%'
        switcher.style.top = '4%'
      }
    },
  },
  mounted() {
    const theme = localStorage.getItem('theme')
    if (theme != null) {
      if (theme == 'false') {
        this.theme_flag = false
      } else {
        this.theme_flag = true
      }
      this.switch_theme()
    }

    this.firstBlock = document.querySelector('.main-first').clientHeight
  },
  beforeUnmount() {},
}
</script>

<style src="../styles/ThemeToggle.css"></style>
