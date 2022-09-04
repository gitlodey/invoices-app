<template>
  <div class="invoice-items">
    <div class="invoice-items--title text-16-700">Item List</div>

    <div class="item-list-header">
      <div>Item Name</div>
      <div>Qty.</div>
      <div>Price</div>
      <div>Total</div>
    </div>
    <div class="items-list-container">
      <InvoiceItem
        v-for="item in items"
        :item="item"
        :key="item.id"
        @delete="$emit('delete', items.indexOf(item))"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import InvoiceItem from "@/components/InvoiceItem.vue";
import type { IInvoiceItem } from "@/types/Invoice";

const props = defineProps<{
  items: IInvoiceItem[];
}>();
</script>

<style scoped>
.item-list-header {
  display: grid;
  grid-template-columns: 4fr 1fr 2fr 2fr;
  grid-column-gap: 20px;
  margin-bottom: 16px;
}
.invoice-items--title {
  margin: 30px 0 20px 0;
  color: var(--color-text-secondary);
}
.invoice-item {
  margin-bottom: 20px;
}
</style>
