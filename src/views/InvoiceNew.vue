<template>
  <div class="invoice-new">
    <div class="text-32-700">New invoice</div>
    <InvoiceForm
      ref="form"
      :on-submit="addInvoice"
    >
      <div class="form-buttons">
        <AppButton
          text="Discard"
          @click="goBack"
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
import AppButton from "@/components/AppButton.vue";
import InvoiceForm from "@/components/InvoiceForm.vue";
import InvoiceStatuses from "@/enums/InvoiceStatuses";
import Routes from "@/enums/Routes";
import { useInvoices } from "@/stores/Invoices";
import { useUi } from "@/stores/ui";
import type Invoice from "@/types/Invoice";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const invoicesStore = useInvoices();
const uiStore = useUi();

const form = ref<InstanceType<typeof InvoiceForm> | null>(InvoiceForm);

const saveDraft = () => {
  form.value?.saveAsDraft();
};
const addInvoice = async (form: Invoice) => {
  try {
    form.status = InvoiceStatuses.pending;
    await invoicesStore.addInvoice(form);
    uiStore.addSuccessNotification({
      title: `Invoice #${form.id}`,
      description: "Saved and send to the client",
    });
  } finally {
    goBack();
  }
};
const goBack = () => {
  router.push({
    name: Routes.invoicesList,
  });
};
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
