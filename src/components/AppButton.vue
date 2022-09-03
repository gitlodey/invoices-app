<template>
  <button
    class="app-button"
    :class="classList"
    @click="onClick"
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
import { computed } from "vue";
import AppIcon from "@/components/AppIcon.vue";
import ButtonColors from "@/enums/ButtonColors";

const props = defineProps<{
  text?: string;
  icon?: string;
  color?: ButtonColors;
  wide?: boolean;
  disabled?: boolean;
  iconStyle?: Partial<CSSStyleDeclaration>;
}>();

const emits = defineEmits(["click"]);

const classList = computed(() => {
  const color = props.color || ButtonColors.main;
  return {
    "__has-icon": props.icon !== undefined,
    __main: color === ButtonColors.main,
    __secondary: color === ButtonColors.secondary,
    __dark: color === ButtonColors.dark,
    __warning: color === ButtonColors.warning,
    __wide: props.wide,
    __disabled: props.disabled,
  };
});

const onClick = (event: Event) => {
  if (!props.disabled) {
    emits("click", event);
  }
};
</script>

<style scoped>
.app-button {
  display: flex;
  align-items: center;
  border: none;
  background-color: var(--button-default-color);
  color: var(--button-default-text-color);
  transition: 0.3s ease background-color;
  height: 46px;
  padding: 7px 24px;
  border-radius: 23px;
  cursor: pointer;
  font-weight: 700;
  overflow: hidden;
}
.app-button:hover {
  background-color: var(--button-default-hover-color);
}
.app-button.__has-icon {
  padding: 7px;
}
.app-button--icon {
  margin-right: 7px;
}
.app-button.__secondary {
  background-color: var(--button-secondary-color);
  color: var(--button-secondary-text-color);
}
.app-button.__secondary:hover {
  background-color: var(--button-secondary-hover-color);
}
.app-button.__dark {
  background-color: var(--button-dark-color);
  color: var(--button-dark-text-color);
}
.app-button.__dark:hover {
  background-color: var(--button-dark-hover-color);
}
.app-button.__warning {
  background-color: var(--color-warning);
}
.app-button.__warning:hover {
  background-color: var(--color-warning-hover);
}
.app-button.__wide {
  justify-content: center;
  width: 100%;
}
.app-button.__disabled {
  cursor: not-allowed;
  position: relative;
}
.app-button.__disabled:before {
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
