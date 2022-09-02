<template>
  <div class="invoice-actions">
    <div class="invoice-actions--left">
      <span>Status </span>
      <InvoiceStatus :status="invoice.status" />
    </div>
    <div class="invoice-actions--right">
      <AppButton
        text="Edit"
        @click="editInvoice"
      />
      <AppButton text="Mark as paid" />
      <AppButton
        text="Delete"
        @click="showConfirmation"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type Invoice from "@/types/Invoice";
import InvoiceStatus from "@/components/InvoiceStatus.vue";
import AppButton from "@/components/AppButton.vue";
import { useRouter } from "vue-router";
import { useUi } from "@/stores/ui";
import { useInvoices } from "@/stores/Invoices";

const router = useRouter();
const uiStore = useUi();
const invoicesStore = useInvoices();

const props = defineProps<{
  invoice: Invoice;
}>();

const editInvoice = () => {
  router.push({
    path: `/invoice/${props.invoice.id}/edit`,
  });
};

const showConfirmation = () => {
  uiStore.setConfirmation({
    title: "Are you sure?",
    description: "You can't rollback invoice deletion",
    handler: deleteInvoice,
  });
};

const deleteInvoice = async () => {
  await invoicesStore.deleteInvoice(props.invoice);
  await router.push({
    path: `/`,
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
  border-radius: 20px;
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
