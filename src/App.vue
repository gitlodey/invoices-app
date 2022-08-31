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
  --column-gap-s: 10px;
  --color-bg: #f8f8fb;
  --color-success: #33d69f;
  --color-success-bg: rgba(51, 214, 159, 0.1);
  --color-pending: #ff9001;
  --color-pending-bg: rgba(255, 143, 0, 0.1);
  --color-draft: #dee3f9;
  --color-draft-bg: rgba(222, 227, 249, 0.1);
  --color-invoice-item-bg: #fff;
  --color-text-main: var(--color-dark);
  --button-default-color: var(--color-main);
  --button-default-hover-color: var(--color-secondary);
}
:root.dark-theme {
  --color-bg: var(--color-dark);
  --color-invoice-item-bg: var(--color-dark-secondary);
  --color-text-main: #fff;
}
body {
  margin: 0;
  background-color: var(--color-bg);
  color: var(--color-text-main);
}
</style>
