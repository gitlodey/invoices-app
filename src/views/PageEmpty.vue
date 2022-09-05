<template>
  <div class="empty-page">
    <img
      src="@/assets/illustration-empty.svg"
      alt="Empty page"
    />
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.empty-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
