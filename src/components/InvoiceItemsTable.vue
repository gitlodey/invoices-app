<template>
  <div class="invoice-items-table">
    <div class="invoice-items-table--content">
      <div class="invoice-items-table--header">
        <div>Item Name</div>
        <div>QTY.</div>
        <div>Price</div>
        <div>Total</div>
      </div>
      <div
        class="invoice-items-table--item"
        v-for="item in items"
        :key="item.name"
      >
        <div>{{ item.name }}</div>
        <div>{{ item.quantity }}</div>
        <div class="invoice-items-table--price">{{ item.price }}</div>
        <div class="invoice-items-table--total">{{ item.total }}</div>
      </div>
    </div>
    <div class="invoice-items-table--total">
      <div>Amount Due</div>
      <div>{{ total }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IInvoiceItem } from "@/types/Invoice";

const props = defineProps<{
  items: IInvoiceItem[];
  total: number;
}>();
</script>

<style scoped>
.invoice-items-table--header,
.invoice-items-table--item {
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 4fr 1fr 2fr 2fr;
}

.invoice-items-table--price,
.invoice-items-table--total {
  text-align: right;
}

.invoice-items-table--total {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
