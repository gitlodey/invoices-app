<template>
  <div
    class="app-logo"
    @click="$router.push('/')"
  >
    <div class="app-logo--bottom"></div>
    <img
      class="app-logo--image"
      src="@/assets/logo.svg"
      alt="Invoice vue app"
    />
  </div>
</template>

<script>
export default {
  name: "AppLogo",
};
</script>

<style scoped>
.app-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: var(--app-sidebar-width);
  overflow: hidden;
  border-radius: 0 var(--logo-border-radius) var(--logo-border-radius) 0;
  background-color: var(--color-main);
  cursor: pointer;
}
.app-logo--bottom {
  height: 50%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--color-secondary);
  border-radius: var(--logo-border-radius) 0 var(--logo-border-radius) 0;
}
.app-logo:hover .app-logo--bottom {
  height: 100%;
  border-radius: 0;
  transition: 0.3s ease-in height;
}
.app-logo--image {
  width: 40px;
  height: 40px;
  z-index: 1;
}
</style>
