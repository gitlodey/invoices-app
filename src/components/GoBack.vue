<template>
  <button
    class="go-back"
    @click="onClick"
  >
    <AppIcon icon="arrow-left" />
    <p class="text-13-700">Go back</p>
  </button>
</template>

<script lang="ts" setup>
import AppIcon from "@/components/AppIcon.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{
  name: string;
}>();

const onClick = () => {
  if (props.name) {
    router.push({
      name: props.name,
    });
  } else {
    router.go(-1);
  }
};
</script>

<style scoped>
.go-back {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  border: none;
  background-color: transparent;
  color: var(--color-text-main);
  cursor: pointer;
  transition: 0.3s ease all;
}
.go-back:hover {
  color: var(--color-text-hover);
}

.go-back .app-icon {
  margin-right: 23px;
}
</style>
