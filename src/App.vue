<script setup lang="ts">
import MainPage from "@/views/MainPage.vue";
</script>

<template>
  <MainPage />
</template>

<style>
:root {
  --logo-border-radius: 15px;
  --app-sidebar-width: 100px;
  --color-main: #7c7dfa;
  --color-secondary: #9277ff;
  --color-dark: #1e2139;
  --color-dark-secondary: #252945;
  --color-gray-light: #dfe3fa;
  --color-gray-dark: #888eb0;
  --column-gap-m: 20px;
}
body {
  margin: 0;
  background-color: var(--color-dark);
}
</style>
