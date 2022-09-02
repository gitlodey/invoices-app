<template>
  <div class="modal-confirmation">
    <h3>{{ uiStore.confirmationTitle }}</h3>
    <div>{{ uiStore.confirmationDescription }}</div>

    <AppButton
      text="Cancel"
      @click="cancel"
    />
    <AppButton
      text="Confirm"
      @click="confirm"
    />
  </div>
</template>

<script lang="ts" setup>
import { useUi } from "@/stores/ui";
import AppButton from "@/components/AppButton.vue";
const uiStore = useUi();

const cancel = () => {
  uiStore.closeConfirmation();
};

const confirm = () => {
  if (uiStore.confirmationHandler) {
    uiStore.confirmationHandler();
  }
  uiStore.closeConfirmation();
};
</script>

<style scoped>
.modal-confirmation {
  padding: 50px;
  border-radius: 20px;
  background-color: var(--color-invoice-item-bg);
}
</style>
