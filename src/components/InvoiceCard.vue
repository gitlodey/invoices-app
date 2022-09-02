<template>
  <div class="invoice-card">
    <div class="invoice-card--row">
      <div class="invoice-card--cell">
        <div># {{ invoice.id }}</div>
        <div>{{ invoice.description }}</div>
      </div>
      <div class="invoice-card--cell">
        <div>{{ invoice.senderAddress.street }}</div>
        <div>{{ invoice.senderAddress.city }}</div>
        <div>{{ invoice.senderAddress.postCode }}</div>
        <div>{{ invoice.senderAddress.country }}</div>
      </div>
    </div>

    <div class="invoice-card--row">
      <div class="invoice-card--cell">
        <div>Invoice Date</div>
        {{ invoice.createdAt }}

        <div>Payment due</div>
        {{ invoice.paymentDue }}
      </div>
      <div class="invoice-card--cell">
        <div>Bill to</div>
        <div>{{ invoice.clientName }}</div>

        <div>{{ invoice.clientAddress.street }}</div>
        <div>{{ invoice.clientAddress.city }}</div>
        <div>{{ invoice.clientAddress.postCode }}</div>
        <div>{{ invoice.clientAddress.country }}</div>
      </div>
      <div class="invoice-card--cell">
        <div>Send to</div>
        <div>{{ invoice.clientEmail }}</div>
      </div>
    </div>

    <InvoiceItemsTable
      :items="invoice.items"
      :total="invoice.total"
    />
  </div>
</template>

<script lang="ts" setup>
import type Invoice from "@/types/Invoice";
import InvoiceItemsTable from "@/components/InvoiceItemsTable.vue";

const props = defineProps<{
  invoice: Invoice;
}>();
</script>

<style scoped>
.invoice-card {
  background-color: var(--color-invoice-item-bg);
  padding: 50px;
  border-radius: 20px;
}
.invoice-card--row {
  display: flex;
}
</style>
