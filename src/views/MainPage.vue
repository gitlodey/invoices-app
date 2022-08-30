<template>
  <div class="main-page">
    <PageSidebar />
    <div class="content">
      <PageHeader />
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import PageSidebar from "@/components/PageSidebar.vue";
import PageHeader from "@/components/PageHeader.vue";
</script>

<style scoped>
.main-page {
  display: grid;
  grid-template-columns: var(--app-sidebar-width) 1fr;
  grid-column-gap: var(--column-gap-m);
  position: relative;
}
</style>
