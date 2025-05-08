<script>
export default {
  data() {
    return {
      apps: [
        new URL('@/assets/imgs/vue.jpg', import.meta.url).href,
        new URL('@/assets/imgs/js.png', import.meta.url).href,
        new URL('@/assets/imgs/css.jpg', import.meta.url).href,
        new URL('@/assets/imgs/html.jpg', import.meta.url).href,
        new URL('@/assets/imgs/Axios.jpg', import.meta.url).href,
      ],
      draggingIndex: null,
      dropTargetIndex: null,
      currentX: 0,
      currentY: 0,
      touchStartX: 0,
      touchStartY: 0,
    }
  },
  methods: {
    handleDragStart(e, index) {
      this.draggingIndex = index
      this.currentX = e.clientX
      this.currentY = e.clientY

      if (e.dataTransfer) {
        const dragImg = new Image()
        dragImg.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>'
        e.dataTransfer.setDragImage(dragImg, 0, 0)
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('text/plain', '')
      }
    },

    handleContainerDragOver(e) {
      if (this.draggingIndex === null) return

      this.currentX = e.clientX
      this.currentY = e.clientY

      const elements = document.elementsFromPoint(e.clientX, e.clientY)
      const appElement = elements.find((el) => el.classList.contains('app-item'))
      this.dropTargetIndex = appElement ? parseInt(appElement.dataset.index) : null
    },

    handleDragEnter(index) {
      if (this.draggingIndex !== null && this.draggingIndex !== index) {
        this.dropTargetIndex = index
      }
    },

    handleDragLeave(index) {
      if (this.dropTargetIndex === index) {
        this.dropTargetIndex = null
      }
    },

    handleContainerDragLeave(e) {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        this.dropTargetIndex = null
      }
    },

    handleDragEnd() {
      if (this.dropTargetIndex !== null && this.draggingIndex !== null) {
        const newApps = [...this.apps]
        const movedApp = newApps.splice(this.draggingIndex, 1)
        newApps.splice(this.dropTargetIndex, 0, movedApp)
        this.apps = newApps
      }

      this.draggingIndex = null
      this.dropTargetIndex = null
    },

    handleTouchStart(e, index) {
      this.handleDragStart(e, index)
      this.touchStartX = e.touches[0].clientX
      this.touchStartY = e.touches[0].clientY
    },

    handleTouchMove(e) {
      if (this.draggingIndex === null) return

      this.currentX = e.touches[0].clientX
      this.currentY = e.touches[0].clientY

      const elements = document.elementsFromPoint(this.currentX, this.currentY)
      const appElement = elements.find((el) => el.classList.contains('app-item'))
      this.dropTargetIndex = appElement ? parseInt(appElement.dataset.index) : null
    },

    handleTouchEnd() {
      this.handleDragEnd()
    },
  },
}
</script>

<template>
  <div
    class="home-screen"
    @dragover.prevent="handleContainerDragOver"
    @dragleave="handleContainerDragLeave"
  >
    <div
      v-for="(app, index) in apps"
      :key="index"
      class="app-item icon"
      :class="{
        dragging: draggingIndex === index,
        'drop-target': dropTargetIndex === index,
      }"
      draggable="true"
      @dragstart="handleDragStart($event, index)"
      @dragenter.prevent="handleDragEnter(index)"
      @dragleave="handleDragLeave(index)"
      @dragend="handleDragEnd"
      @touchstart="handleTouchStart($event, index)"
      @touchmove.prevent="handleTouchMove"
      @touchend="handleTouchEnd"
      :data-index="index"
    >
      <img :src="app" class="app-icon" />
    </div>

    <div
      v-if="draggingIndex !== null"
      class="drag-preview"
      :style="{
        left: `${currentX - 30}px`,
        top: `${currentY - 30}px`,
      }"
    >
      <img :src="apps[draggingIndex]" class="app-icon" />
    </div>
  </div>
</template>

<style></style>
