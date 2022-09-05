<template>
  <div
    class="overlay"
    v-if="uiStore.overlay"
    @click="onClick"
  >
    <component :is="uiStore.overlayComponent" />
  </div>
</template>

<script lang="ts" setup>
import { useUi } from "@/stores/ui";

const uiStore = useUi();

const onClick = (event: MouseEvent) => {
  if (event.currentTarget === event.target) {
    uiStore.hideOverlay();
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
</style>
