<template>
  <div
    class="notification-item"
    :class="notification.type"
  >
    <div class="notification-item--emoji">{{ emoji }}</div>
    <div class="notification-item--text">
      <div class="notification-item--title text-14-700">
        {{ notification.title }}
      </div>
      <div class="text-12-400">{{ notification.description }}</div>
    </div>
    <div class="notification-item--action">
      <AppIcon
        class="notification-item--delete"
        icon="delete"
        @click="$emit('click', notification)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppIcon from "@/components/AppIcon.vue";
import type { INotification } from "@/stores/ui";
import { computed } from "vue";

const props = defineProps<{
  notification: INotification;
}>();

const emoji = computed(() =>
  props.notification.type === "success" ? "🔔" : "⚠️",
);
</script>
<style scoped>
.notification-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: 0.3s ease all;
}
.notification-item.success {
  background-color: var(--color-success-bg);
  color: var(--color-success);
}
.notification-item.warning {
  background-color: var(--color-warning-bg);
  color: var(--color-warning);
}
.notification-item--emoji {
  margin-right: 20px;
}
.notification-item--title {
  margin-bottom: 5px;
}
.notification-item--action {
  box-sizing: border-box;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transform: translateX(100%);
  transition: 0.3s ease all;
  filter: brightness(0.8);
  cursor: pointer;
}
.notification-item:hover {
  filter: brightness(1.2);
}
.notification-item:hover .notification-item--action {
  transform: translateX(0);
  filter: brightness(1.3);
}
.notification-item--delete {
  height: 16px;
}
</style>
