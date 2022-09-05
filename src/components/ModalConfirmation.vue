<template>
  <div class="modal-confirmation">
    <div class="modal-confirmation--title text-30-700">
      {{ uiStore.confirmationTitle }}
    </div>
    <div class="modal-confirmation--description">
      {{ uiStore.confirmationDescription }}
    </div>

    <div class="modal-confirmation--buttons">
      <AppButton
        text="Cancel"
        color="dark"
        @click="cancel"
      />
      <AppButton
        :text="confirmButtonText"
        color="warning"
        @click="confirm"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppButton from "@/components/AppButton.vue";
import { useUi } from "@/stores/ui";
import { computed } from "vue";

const uiStore = useUi();

const confirmButtonText = computed(
  () => uiStore.confirmButtonText || "Confirm",
);

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
  box-sizing: border-box;
  width: 480px;
  max-width: 90%;
  padding: 50px;
  border-radius: 10px;
  background-color: var(--color-invoice-item-bg);
}
.modal-confirmation--title {
  margin-bottom: 10px;
}
.modal-confirmation--description {
  line-height: 1.5;
}
.modal-confirmation--buttons {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.modal-confirmation--buttons .app-button:not(:last-child) {
  margin-right: 10px;
}
</style>
