<template>
  <div class="page-slide">
    <div
      class="page-slide--overlay"
      v-if="isShow"
      @click="$emit('close')"
    ></div>
    <transition name="slide">
      <div
        class="page-slide--content"
        v-if="isShow"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  isShow: boolean;
}>();
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.75s ease-out;
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-leave-from {
  transform: translateX(0);
}

.page-slide--overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 0;
}

.page-slide--content {
  background-color: var(--color-bg);
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--app-sidebar-width);
  width: 500px;
  z-index: 1;
}
</style>
