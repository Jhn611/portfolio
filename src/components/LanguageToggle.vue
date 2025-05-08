<script>
import { useTextStore } from '@/stores/text'
import { useClientRequestStore } from '@/stores/form'
export default {
  props: {
    scroll: {
      type: Number,
      required: true,
    },
  },

  data() {
    const store = useTextStore()
    const clientRequestStore = useClientRequestStore()
    return {
      store,
      clientRequestStore,
      firstBlock: null,
    }
  },
  computed: {
    lang_flag() {
      return this.store.chooseLang
    },
  },
  methods: {
    switchLanguage() {
      this.store.switchLanguage()
      this.clientRequestStore.revalidateAllFields()
    },
  },

  watch: {
    scroll(newScroll) {
      const switcher = document.querySelector('.language_switch__bg')
      if (newScroll > this.firstBlock + 40) {
        switcher.style.position = 'fixed'
        switcher.style.left = '8%'
        switcher.style.top = '4%'
      } else if (newScroll < this.firstBlock - 40) {
        switcher.style.position = 'absolute'
        switcher.style.left = '3%'
        switcher.style.top = '88%'
      }
    },
  },
  mounted() {
    this.firstBlock = document.querySelector('.main-first').clientHeight
  },
  beforeUnmount() {},
}
</script>

<template>
  <div
    class="language_switch__bg"
    :class="{
      sticky: scroll >= firstBlock + 40,
      notSticky: scroll < firstBlock + 40 && scroll > firstBlock - 40,
    }"
  >
    <p
      class="ru_lang"
      :class="{
        ru_off: !lang_flag,
        ru_on: lang_flag,
      }"
    >
      RU
    </p>
    <p
      class="en_lang"
      :class="{
        en_on: !lang_flag,
        en_off: lang_flag,
      }"
    >
      EN
    </p>
    <div @click="switchLanguage" class="switcher">
      <svg
        :class="{
          switch_animate_on: !lang_flag,
          switch_animate_off: lang_flag,
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

<style src="../styles/LanguageToggle.css"></style>
