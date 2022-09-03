<script setup lang="ts">
import MainPage from "@/views/MainPage.vue";
</script>

<template>
  <MainPage />
</template>

<style>
/*
  Spartan font was de-listed from Google fonts.
  League Spartan is the upgraded version of Spartan
  that is offering a broader glyphset and fixing former Spartan’s issues.
*/
@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap");

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
  font-family: "League Spartan", sans-serif;
}
.text-32-700 {
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
}
.text-20-700 {
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
}
.text-16-700 {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.text-12-700 {
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
}
.text-12-400 {
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
}
.text-11-400 {
  font-size: 11px;
  font-weight: 400;
  line-height: 18px;
}
</style>
