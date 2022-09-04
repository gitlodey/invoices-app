<template>
  <img
    class="app-icon"
    :src="src"
    :alt="alt"
  />
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";

const props = defineProps(["icon", "alt"]);

const src = computed(() => {
  return `/src/assets/icons/icon-${props.icon}.svg`;
});
</script>

<style scoped>
.app-icon {
  transition: 0.3s ease all;
}
.app-icon:hover {
  filter: brightness(1.4);
}
</style>
