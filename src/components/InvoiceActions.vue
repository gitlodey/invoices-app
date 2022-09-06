<template>
  <div class="invoice-actions">
    <div class="invoice-actions--left">
      <span>Status </span>
      <InvoiceStatus :status="invoice.status" />
    </div>
    <div class="invoice-actions--right">
      <AppButton
        text="Edit"
        :color="ButtonColors.dark"
        @click="editInvoice"
      />
      <AppButton
        text="Delete"
        :color="ButtonColors.warning"
        @click="showConfirmation"
      />
      <AppButton
        text="Mark as paid"
        @click="markAsPaid"
        :disabled="invoice.status !== InvoiceStatuses.pending"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import InvoiceStatus from "@/components/InvoiceStatus.vue";
import AppButton from "@/components/AppButton.vue";
import ButtonColors from "@/enums/ButtonColors";
import InvoiceStatuses from "@/enums/InvoiceStatuses";
import Routes from "@/enums/Routes";
import { useInvoices } from "@/stores/Invoices";
import { useUi } from "@/stores/ui";
import type IInvoice from "@/types/IInvoice";
import { useRouter } from "vue-router";

const router = useRouter();
const uiStore = useUi();
const invoicesStore = useInvoices();

const props = defineProps<{
  invoice: IInvoice;
}>();

const editInvoice = () => {
  router.push({
    name: Routes.edit,
    params: {
      invoiceId: props.invoice.id,
    },
  });
};

const showConfirmation = () => {
  uiStore.setConfirmation({
    title: "Confirm deletion",
    description: `Are you sure you want to delete invoice #${props.invoice.id}? This action can not be undone.`,
    confirmButtonText: "Delete",
    handler: deleteInvoice,
  });
};
const deleteInvoice = async () => {
  await invoicesStore.deleteInvoice(props.invoice);
  await router.push({
    name: Routes.invoicesList,
  });
  uiStore.addSuccessNotification({
    title: `Invoice #${props.invoice.id}`,
    description: "Was successfully deleted",
  });
};
const markAsPaid = async () => {
  const invoice = { ...props.invoice };
  invoice.status = InvoiceStatuses.paid;
  await invoicesStore.editInvoice(invoice);
  uiStore.addSuccessNotification({
    title: `Invoice #${props.invoice.id}`,
    description: "Was marked as paid",
  });
};
</script>

<style scoped>
.invoice-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-invoice-item-bg);
  padding: 20px 30px;
  border-radius: 10px;
}
.invoice-actions--left,
.invoice-actions--right {
  display: flex;
  align-items: center;
}
.invoice-actions--left .invoice-status {
  margin-left: 10px;
}
.invoice-actions--right .app-button:not(:last-child) {
  margin-right: 10px;
}
</style>
