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
        class="invoice-items-table--item text-14-700"
        v-for="item in items"
        :key="item.name"
      >
        <div>{{ item.name }}</div>
        <div class="invoice-items-table--quantity">{{ item.quantity }}</div>
        <div class="invoice-items-table--price">£ {{ item.price }}</div>
        <div class="invoice-items-table--total">
          £ {{ useFormatNumber(item.total) }}
        </div>
      </div>
    </div>
    <div class="invoice-items-table--footer">
      <div>Amount Due</div>
      <div class="text-32-700">£ {{ total }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFormatNumber } from "@/composables/useFormatNumber";
import type { IInvoiceItem } from "@/types/Invoice";

const props = defineProps<{
  items: IInvoiceItem[];
  total: number;
}>();
</script>

<style scoped>
.invoice-items-table {
  background-color: var(--color-bg);
  border-radius: 10px;
}
.invoice-items-table--header,
.invoice-items-table--item {
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 4fr 1fr 2fr 2fr;
}
.invoice-items-table--header > div:nth-child(2),
.invoice-items-table--quantity {
  text-align: center;
}
.invoice-items-table--header > div:nth-child(3),
.invoice-items-table--header > div:nth-child(4),
.invoice-items-table--price,
.invoice-items-table--total {
  text-align: right;
}
.invoice-items-table--footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-coal);
  color: #fff;
  border-radius: 0 0 10px 10px;
}
.invoice-items-table--content {
  padding: 33px;
}
.invoice-items-table--footer {
  padding: 20px 33px;
}
.invoice-items-table--header {
  margin-bottom: 30px;
}
</style>
