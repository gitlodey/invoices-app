<template>
  <div class="empty-page">
    <img src="src/assets/illustration-empty.svg" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EmptyPage",
};
</script>

<style scoped>
.empty-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
