<template>
  <div class="main-page">
    <PageSidebar />
    <div class="content">
      <RouterView class="content--route" />
    </div>
    <AppOverlay />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import PageSidebar from "@/components/PageSidebar.vue";
import AppOverlay from "@/components/AppOverlay.vue";
</script>

<style scoped>
.main-page {
  display: grid;
  grid-template-columns: var(--app-sidebar-width) 1fr;
  grid-column-gap: var(--column-gap-m);
  position: relative;
}
.content {
  width: 1020px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.content--route {
  flex: 1 0 auto;
}
</style>
