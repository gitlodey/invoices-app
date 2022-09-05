<template>
  <div class="invoice-edit">
    <h2>Edit invoice</h2>
    <InvoiceForm
      v-if="invoicesStore.currentInvoice"
      :invoice="invoicesStore.currentInvoice"
      :on-submit="editInvoice"
    >
      <div class="form-buttons">
        <AppButton
          text="Cancel"
          @click="goBack"
          color="dark"
        />
        <AppButton
          text="Save changes"
          type="submit"
        />
      </div>
    </InvoiceForm>
  </div>
</template>

<script lang="ts" setup>
import InvoiceForm from "@/components/InvoiceForm.vue";
import { useInvoices } from "@/stores/Invoices";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
import AppButton from "@/components/AppButton.vue";
import type Invoice from "@/types/Invoice";
import Routes from "@/enums/Routes";
import { useUi } from "@/stores/ui";
import InvoiceStatuses from "@/enums/InvoiceStatuses";

const route = useRoute();
const router = useRouter();

const invoicesStore = useInvoices();
const uiStore = useUi();

onMounted(() => {
  if (
    !invoicesStore.currentInvoice ||
    invoicesStore.currentInvoice.id !== route.params.invoiceId
  ) {
    const id = route.params.invoiceId as string;
    invoicesStore.getInvoice(id);
  }
});

const editInvoice = async (form: Invoice) => {
  try {
    form.status = InvoiceStatuses.pending;
    await invoicesStore.editInvoice(form);
    uiStore.addSuccessNotification({
      title: `Invoice #${form.id}`,
      description: "Successfully edited",
    });
  } finally {
    goBack();
  }
};

const goBack = () => {
  router.push({
    name: Routes.invoice,
    params: {
      invoiceId: route.params.invoiceId,
    },
  });
};
</script>

<style scoped>
.form-buttons {
  display: flex;
  justify-content: flex-end;
  padding: 35px 0;
}
.form-buttons .app-button:not(:last-child) {
  margin-right: 10px;
}
</style>
