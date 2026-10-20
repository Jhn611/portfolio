<script>
import { useTextStore } from '@/stores/text'
export default {
  data() {
    const store = useTextStore()
    return {
      store,
    }
  },
  props: {
    filterClass: {
      type: String,
      default: 'contacts-switch-filter'
    },
  },
  computed: {
    lang() {
      return this.store.chooseLang ? this.store.ru : this.store.en
    },
  },
}
</script>

<template>
  <p class="contacts-text">
    <img :class="filterClass" src="../../assets/imgs/Map pin.svg" alt=""/>
    <span v-html="lang.card_country"></span>
  </p>
  <p class="contacts-text">
    <img
      :class="filterClass"
      style="padding: 0 3px 0 0"
      src="../../assets/imgs/telegram.png"
      alt=""
    />
    @IvanAkaJohnny
  </p>
  <p class="contacts-text">
    <img
      :class="filterClass"
      style="padding: 1px 4px 0 0"
      src="../../assets/imgs/Mail.svg"
      alt=""
    />
    ivantimofeev1912@gmail.com
  </p>
</template>

<style src="./MyContacts.sass"></style>
