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
import { ref, computed, onMounted } from "vue";

const userTheme = ref(localStorage.getItem("user-theme"));

const isDarkTheme = computed(() => {
  return userTheme.value === "dark-theme";
});
const iconSrc = computed(() => {
  return isDarkTheme.value
    ? "/src/assets/icon-sun.svg"
    : "/src/assets/icon-moon.svg";
});
const iconAlt = computed(() => {
  return isDarkTheme.value ? "Change to light theme" : "Change to dark theme";
});

const toggleTheme = () => {
  if (userTheme.value === "light-theme") {
    setTheme("dark-theme");
  } else {
    setTheme("light-theme");
  }
};

const getTheme = () => {
  return localStorage.getItem("user-theme");
};

const setTheme = (theme: string) => {
  localStorage.setItem("user-theme", theme);
  userTheme.value = theme;
  document.documentElement.className = theme;
};

const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  if (hasDarkPreference) {
    return "dark-theme";
  } else {
    return "light-theme";
  }
};

onMounted(() => {
  const initUserTheme = getTheme() || getMediaPreference();
  setTheme(initUserTheme);
});
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
