<template>
  <div class="invoice-new">
    <div class="text-32-700">New invoice</div>
    <InvoiceForm
      ref="form"
      @submit="addInvoice"
    >
      <div class="form-buttons">
        <AppButton
          text="Discard"
          @click="$router.push('/')"
          color="secondary"
        />
        <div class="form-buttons-right">
          <AppButton
            text="Save as Draft"
            color="dark"
            @click="saveDraft"
          />
          <AppButton
            text="Save & Send"
            type="submit"
          />
        </div>
      </div>
    </InvoiceForm>
  </div>
</template>

<script lang="ts" setup>
import InvoiceForm from "@/components/InvoiceForm.vue";
import AppButton from "@/components/AppButton.vue";
import { ref } from "vue";

const form = ref<InstanceType<typeof InvoiceForm> | null>(InvoiceForm);

const saveDraft = () => {
  form.value?.saveAsDraft();
};
const addInvoice = (form) => {};
</script>

<style scoped>
.form-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 0;
}
.form-buttons-right {
  display: flex;
}

.form-buttons-right .app-button:not(:last-child) {
  margin-right: 10px;
}
</style>
