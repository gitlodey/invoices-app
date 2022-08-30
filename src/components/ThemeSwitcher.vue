<template>
  <div class="theme-switcher">
    <img
      class="theme-switcher--image"
      :src="iconSrc"
      :alt="iconAlt"
      @click="toggleTheme"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const isDarkTheme = ref(true);
const iconSrc = computed(() => {
  return isDarkTheme.value
    ? "/src/assets/icon-sun.svg"
    : "/src/assets/icon-moon.svg";
});
const iconAlt = computed(() => {
  return isDarkTheme.value ? "Change to light theme" : "Change to dark theme";
});

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};
</script>

<style scoped>
.theme-switcher {
  display: flex;
  justify-content: center;
}
.theme-switcher--image {
  cursor: pointer;
}
</style>
