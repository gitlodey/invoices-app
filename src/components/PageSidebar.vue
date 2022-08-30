<template>
  <div class="sidebar">
    <AppLogo />
    <div class="sidebar--footer">
      <ThemeSwitcher class="sidebar--theme-switcher" />
      <ProfileAvatar class="sidebar--profile" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppLogo from "@/components/AppLogo.vue";
import ProfileAvatar from "@/components/ProfileAvatar.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
</script>
<style>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: var(--color-dark-secondary);
  border-radius: 0 var(--logo-border-radius) var(--logo-border-radius) 0;
}
.sidebar--profile {
  border-top: 1px solid var(--color-gray-dark);
}
.sidebar--theme-switcher {
  margin: 30px 0;
}
</style>
