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
import { ref } from "vue";

const props = defineProps<{
  profile?: { avatar: string };
}>();

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
  transition: 0.3s ease all;
}
.profile-avatar:hover .profile-avatar--image {
  max-width: 100%;
  border-radius: 0;
}
</style>
