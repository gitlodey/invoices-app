<template>
  <div class="notifications-container">
    <NotificationItem
      v-for="notification in uiStore.notifications"
      :key="notification.id"
      :notification="notification"
      @click="onClick"
    />
    <div class="notification-item"></div>
  </div>
</template>

<script lang="ts" setup>
import type { INotification } from "@/stores/ui";
import { useUi } from "@/stores/ui";
import NotificationItem from "@/components/NotificationItem.vue";

const uiStore = useUi();

const onClick = (notification: INotification) => {
  uiStore.deleteNotification(notification);
};
</script>

<style scoped>
.notifications-container {
  position: fixed;
  bottom: 0;
  left: calc(50% - 100px + (var(--app-sidebar-width) / 2));
  width: 200px;
}
</style>
