<template>
  <div class="home-screen">
    <div
      v-for="(app, index) in apps"
      :key="index"
      class="app-item icon"
      :class="{ dragging: draggingIndex === index }"
      draggable="true"
      @dragstart="handleDragStart($event, index)"
      @dragover.prevent="handleDragOver"
      @dragend="handleDragEnd"
      @touchstart="handleTouchStart($event, index)"
      @touchmove.prevent="handleTouchMove"
      @touchend="handleTouchEnd"
      :data-index="index"
    >
      <img :src="`${app}`" alt="" />
    </div>
  </div>
</template>

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
      touchStartX: 0,
      touchStartY: 0,
      currentTouchElement: null,
    }
  },
  methods: {
    handleDragStart(e, index) {
      this.draggingIndex = index
      e.dataTransfer.effectAllowed = 'move'
    },
    handleDragOver(e) {
      if (this.draggingIndex === null) return

      const elements = document.elementsFromPoint(e.clientX, e.clientY)
      const appElement = elements.find((el) => el.classList.contains('app-item'))
      if (!appElement) return

      const overIndex = parseInt(appElement.dataset.index)
      if (overIndex === this.draggingIndex) return

      const newApps = [...this.apps]
      const [movedApp] = newApps.splice(this.draggingIndex, 1)
      newApps.splice(overIndex, 0, movedApp)
      this.apps = newApps
      this.draggingIndex = overIndex
    },
    handleDragEnd() {
      this.draggingIndex = null
    },

    handleTouchStart(e, index) {
      this.draggingIndex = index
      this.touchStartX = e.touches[0].clientX
      this.touchStartY = e.touches[0].clientY
      this.currentTouchElement = e.target
    },

    handleTouchMove(e) {
      if (this.draggingIndex === null) return

      const touchX = e.touches[0].clientX
      const touchY = e.touches[0].clientY

      // Имитация drag-события для мобильных устройств
      const elements = document.elementsFromPoint(touchX, touchY)
      const appElement = elements.find((el) => el.classList.contains('app-item'))
      if (!appElement) return

      const overIndex = parseInt(appElement.dataset.index)
      if (overIndex === this.draggingIndex) return

      const newApps = [...this.apps]
      const [movedApp] = newApps.splice(this.draggingIndex, 1)
      newApps.splice(overIndex, 0, movedApp)
      this.apps = newApps
      this.draggingIndex = overIndex
    },

    handleTouchEnd() {
      this.draggingIndex = null
      this.currentTouchElement = null
    },
  },
}
</script>

<style></style>
