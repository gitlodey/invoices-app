<template>
  <div class="profile-avatar">
    <img
      class="profile-avatar--image"
      :src="avatarSrc"
      alt="Profile avatar"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

const props = defineProps(["profile"]);
const avatarSrc = ref(props.profile?.avatar || "/src/assets/image-avatar.jpg");
</script>

<style scoped>
.profile-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--app-sidebar-width);
  cursor: pointer;
}
.profile-avatar--image {
  max-width: 40px;
  border-radius: 50%;
}
</style>
