<template>
  <button
    class="app-button"
    :class="colorClass"
    @click="$emit('click')"
  >
    <AppIcon
      v-if="icon"
      class="app-button--icon"
      :icon="icon"
      :style="iconStyle"
    />
    <span class="app-button--content">{{ text }}</span>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import AppIcon from "@/components/AppIcon.vue";
import ButtonColors from "@/enums/ButtonColors";

const props = defineProps(["text", "icon", "color", "size", "iconStyle"]);
const colorClass = computed(() => {
  const color = props.color || ButtonColors.main;
  return `__${color}`;
});
</script>

<style scoped>
.app-button {
  display: flex;
  align-items: center;
  border: none;
  background-color: var(--button-default-color);
  transition: 0.3s ease background-color;
  height: 46px;
  padding: 7px 24px;
  border-radius: 23px;
  cursor: pointer;
}
.app-button:hover {
  background-color: var(--button-default-hover-color);
}
.app-button--icon {
  margin-right: 7px;
}
</style>
