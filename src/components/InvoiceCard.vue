<template>
  <div class="invoice-card">
    <div class="invoice-card--row __two-col">
      <div class="invoice-card--cell">
        <div class="invoice-card--id text-20-700">
          <span class="invoice-card--id-sign">#</span>{{ invoice.id }}
        </div>
        <div>{{ invoice.description }}</div>
      </div>
      <div
        class="invoice-card--sender-address invoice-card--cell __align-right"
      >
        <div v-for="key in invoice.senderAddress">
          {{ key }}
        </div>
      </div>
    </div>

    <div class="invoice-card--row __three-col">
      <div class="invoice-card--dates invoice-card--cell">
        <div>
          <div class="invoice-card--block-title">Invoice Date</div>
          <div class="text-20-700">{{ invoice.createdAt }}</div>
        </div>

        <div>
          <div class="invoice-card--block-title">Payment due</div>
          <div class="text-20-700">{{ invoice.paymentDue }}</div>
        </div>
      </div>
      <div class="invoice-card--cell">
        <div class="invoice-card--block-title">Bill to</div>
        <div class="text-20-700">{{ invoice.clientName }}</div>

        <div v-for="key in invoice.clientAddress">
          {{ key }}
        </div>
      </div>
      <div class="invoice-card--cell">
        <div class="invoice-card--block-title">Send to</div>
        <div class="text-20-700">{{ invoice.clientEmail }}</div>
      </div>
    </div>

    <InvoiceItemsTable
      :items="invoice.items"
      :total="total"
    />
  </div>
</template>

<script lang="ts" setup>
import type Invoice from "@/types/Invoice";
import InvoiceItemsTable from "@/components/InvoiceItemsTable.vue";
import { computed } from "vue";
import { useFormatNumber } from "@/composables/useFormatNumber";

const props = defineProps<{
  invoice: Invoice;
}>();

const total = computed(() => useFormatNumber(props.invoice.total));
</script>

<style scoped>
.invoice-card {
  background-color: var(--color-invoice-item-bg);
  padding: 50px;
  border-radius: 20px;
}
.invoice-card--id-sign {
  color: var(--color-text-secondary);
}
.invoice-card--id {
  margin-bottom: 15px;
}
.invoice-card--row {
  display: grid;
  grid-column-gap: 20px;
  margin-bottom: 30px;
}
.invoice-card--row.__two-col {
  grid-template-columns: 1fr 1fr;
}
.invoice-card--row.__three-col {
  grid-template-columns: 2fr 2fr 3fr;
}
.invoice-card--cell.__align-right {
  text-align: right;
}
.invoice-card--cell > div,
.invoice-card--sender-address > div {
  margin-bottom: 10px;
}
.invoice-card--block-title {
  font-size: 16px;
  margin-bottom: 15px;
}
.invoice-card--dates {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
