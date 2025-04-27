<template>
  <transition name="macos-modal">
    <!-- <div v-if="wasOpened && !forceClosed" class="macos-modal-overlay" @click.self="handleClose"> -->
    <div
      v-if="wasOpened && !forceClosed"
      class="macos-modal-window"
      @dragstart="handleDragStart"
      @drag="handleDrag"
      @dragend="handleDragEnd"
      @touchstart="handleTouchStart"
      @touchmove.prevent="handleTouchMove"
      @touchend="handleTouchEnd"
      draggable="true"
      :style="{
        left: `${currentX}px`,
        top: `${currentY}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }"
    >
      <div class="macos-titlebar">
        <div class="macos-title">Перетаскивание</div>
        <span class="macos-btn close" @click="handleClose"></span>
      </div>

      <video
        class="macos-content"
        autoplay
        loop
        muted
        playsinline
        src="../assets/video/learn2.webm"
      ></video>
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
      currentX: window.innerWidth <= 525 ? window.innerWidth / 2 : window.innerWidth * 0.16,
      currentY: window.innerWidth <= 525 ? window.innerHeight * 0.15 : window.innerHeight * 0.18,

      dragOffsetX: 0,
      dragOffsetY: 0,
      isDragging: false,
    }
  },

  methods: {
    handleClose() {
      this.wasOpened = false
      this.forceClosed = true
      this.$emit('closed')
    },
    handleDragStart(e) {
      const rect = e.target.getBoundingClientRect()

      this.dragOffsetX = e.clientX - rect.left
      this.dragOffsetY = e.clientY - rect.top

      e.dataTransfer.setData('text/plain', '')

      const dragIcon = document.createElement('div')
      dragIcon.style.display = 'none'
      e.dataTransfer.setDragImage(dragIcon, 0, 0)
    },

    handleDrag(e) {
      if (e.clientX === 0 && e.clientY === 0) return

      this.currentX = e.clientX - this.dragOffsetX
      this.currentY = e.clientY - this.dragOffsetY
    },

    handleDragEnd() {
      this.isDragging = false
    },

    handleTouchStart(e) {
      this.isDragging = true
      const touch = e.touches[0]
      this.dragOffsetX = touch.clientX - this.currentX
      this.dragOffsetY = touch.clientY - this.currentY
    },

    handleTouchMove(e) {
      if (!this.isDragging) return
      const touch = e.touches[0]
      this.currentX = touch.clientX - this.dragOffsetX
      this.currentY = touch.clientY - this.dragOffsetY
    },

    handleTouchEnd() {
      this.isDragging = false
    },
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
