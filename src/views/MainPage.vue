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

<style scoped></style>
