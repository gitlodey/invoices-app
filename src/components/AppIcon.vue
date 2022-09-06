<template>
  <img
    class="app-icon"
    :src="src"
    :alt="alt"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  icon: string;
  alt?: string;
}>();

const src = computed(() => {
  return `icons/icon-${props.icon}.svg`;
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
