<template>
  <div class="invoice-items">
    Item List

    <div class="item-list-header">
      <div>Item Name</div>
      <div>Qty.</div>
      <div>Price</div>
      <div>total</div>
    </div>
    <div class="items-list-container">
      <InvoiceItem
        v-for="item in items"
        :item="item"
        :key="item.name"
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
}
</style>
