<template>
  <img
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

<style scoped></style>
