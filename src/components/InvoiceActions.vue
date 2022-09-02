<template>
  <div class="invoice-actions">
    <div class="invoice-actions--left">
      <span>Status </span>
      <InvoiceStatus :status="invoice.status" />
    </div>
    <div class="invoice-actions--right">
      <AppButton text="Edit" />
      <AppButton text="Mark as paid" />
      <AppButton text="Delete" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type Invoice from "@/types/Invoice";
import InvoiceStatus from "@/components/InvoiceStatus.vue";
import AppButton from "@/components/AppButton.vue";

const props = defineProps<{
  invoice: Invoice;
}>();
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
