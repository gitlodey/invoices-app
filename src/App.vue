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
  --color-accent: #7e88c3;
  --color-coal: #0c0316;
  --color-warning: #ec5757;
  --color-warning-hover: #ff9797;
  --column-gap-m: 20px;
  --column-gap-s: 10px;
  --color-light: #f8f8fb;
  --color-bg: var(--color-light);
  --color-success: #33d69f;
  --color-success-bg: rgba(51, 214, 159, 0.1);
  --color-pending: #ff9001;
  --color-pending-bg: rgba(255, 143, 0, 0.1);
  --color-draft: #dee3f9;
  --color-draft-bg: rgba(222, 227, 249, 0.1);
  --color-invoice-item-bg: #fff;
  --color-text-main: var(--color-dark);
  --color-text-secondary: var(--color-gray-dark);
  --color-text-hover: var(--color-main);
  --button-default-color: var(--color-main);
  --button-default-hover-color: var(--color-secondary);
  --button-default-text-color: var(--color-light);
  --button-secondary-color: var(--color-dark-secondary);
  --button-secondary-hover-color: #fff;
  --button-secondary-text-color: var(--color-gray-light);
  --button-dark-color: #373b54;
  --button-dark-hover-color: var(--color-coal);
  --button-dark-text-color: var(--color-gray-light);
  --input-border-color: transparent;
}
:root.dark-theme {
  --color-bg: #141625;
  --color-invoice-item-bg: var(--color-dark);
  --button-secondary-color: var(--color-light);
  --button-secondary-hover-color: var(--color-gray-light);
  --button-secondary-text-color: var(--color-accent);
  --button-dark-text-color: var(--color-light);
  --input-border-color: #21233a;
  --color-text-main: #ddd;
}
body {
  margin: 0;
  background-color: var(--color-bg);
  color: var(--color-text-main);
  font-family: "League Spartan", sans-serif;
}
input,
select {
  color: var(--color-text-main);
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
