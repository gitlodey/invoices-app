<template>
  <div class="invoice-list-item">
    <div class="invoice-list-item--id">
      <span class="invoice-list-item--id-prefix">#</span>
      {{ invoice.id }}
    </div>
    <div class="invoice-list-item--due">Due {{ invoice.paymentDue }}</div>
    <div class="invoice-list-item--name">{{ invoice.clientName }}</div>
    <div class="invoice-list-item--total">£{{ invoice.total }}</div>
    <div class="invoice-list-item--status">
      <InvoiceStatus :status="invoice.status" />
      <AppIcon
        icon="arrow-right"
        class="invoice-list-item--arrow"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type Invoice from "@/types/Invoice";
import InvoiceStatus from "@/components/InvoiceStatus.vue";
import AppIcon from "@/components/AppIcon.vue";

const props = defineProps<{
  invoice: Invoice;
}>();
</script>

<style scoped>
.invoice-list-item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: var(--column-gap-s);
  background-color: var(--color-invoice-item-bg);
  align-items: center;
  border-radius: 10px;
  padding: 16px 30px;
  transition: 0.3s ease background-color;
  cursor: pointer;
}
.invoice-list-item--id,
.invoice-list-item--total {
  font-weight: bold;
}
.invoice-list-item--id-prefix {
  color: var(--color-main);
}
.invoice-list-item--total {
  text-align: right;
}
.invoice-list-item--status {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.invoice-list-item--arrow {
  width: 7px;
  height: 10px;
  margin-left: 20px;
}
</style>
