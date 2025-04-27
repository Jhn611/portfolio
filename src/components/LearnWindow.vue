<template>
  <transition name="macos-modal">
    <!-- <div v-if="wasOpened && !forceClosed" class="macos-modal-overlay" @click.self="handleClose"> -->
    <div
      v-if="wasOpened && !forceClosed"
      class="macos-modal-window"
      @dragstart="handleDragStart"
      @dragenter.prevent="handleDragEnter"
      @dragleave="handleDragLeave"
      @dragend="handleDragEnd"
      @touchstart="handleTouchStart"
      @touchmove.prevent="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div class="macos-titlebar">
        <div class="macos-title">Перетаскивание</div>
        <span class="macos-btn close" @click="handleClose"></span>
      </div>

      <div class="macos-content">
        <slot>
          <video autoplay loop muted playsinline src="../assets/video/learn2.webm"></video>
        </slot>
      </div>
    </div>
    <!-- </div> -->
  </transition>
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
    return {
      wasOpened: false,
      forceClosed: false,
    }
  },

  methods: {
    handleClose() {
      this.wasOpened = false
      this.forceClosed = true
      this.$emit('closed')
    },
    handleDragStart() {},
    handleDragEnter() {},
    handleDragLeave() {},
    handleTouchStart() {},
    handleTouchMove() {},
    handleTouchEnd() {},
  },

  watch: {
    scroll(newScroll) {
      let startBlock = document.querySelector('.main-first').clientHeight
      let firstBlock = document.querySelector('.main-second').clientHeight
      let secondBlock = document.querySelector('.main-third').clientHeight + firstBlock
      firstBlock = firstBlock - firstBlock * 0.2 + startBlock
      secondBlock = secondBlock - secondBlock * 0.2 + startBlock
      if (
        newScroll >= firstBlock &&
        newScroll <= secondBlock &&
        !this.wasOpened &&
        !this.forceClosed
      ) {
        this.wasOpened = true
        this.forceClosed = false
      } else if (
        (newScroll < firstBlock - 120 || newScroll > secondBlock) &&
        (this.wasOpened || this.forceClosed)
      ) {
        this.wasOpened = false
        this.forceClosed = false
      }
    },
  },

  beforeUnmount() {
    document.body.style.overflow = ''
  },
}
</script>

<style src="../styles/LearnWindow.css"></style>
