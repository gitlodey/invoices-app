<template>
  <div class="invoice-item">
    <FormInput
      name="itemName"
      v-model="item.name"
      rules="required"
    />
    <FormInput
      name="itemQuantity"
      :model-value.number="item.quantity"
      @update:modelValue="onQuantityUpdated"
      type="number"
      rules="required"
    />
    <FormInput
      name="itemPrice"
      :model-value.number="item.price"
      @update:modelValue="onPriceUpdated"
      type="number"
      rules="required"
    />
    <div>{{ item.total }}</div>
  </div>
</template>

<script lang="ts" setup>
import FormInput from "@/components/FormInput.vue";
import type { IInvoiceItem } from "@/types/Invoice";

const props = defineProps<{
  item: IInvoiceItem;
}>();

const onQuantityUpdated = (quantity: number) => {
  props.item.quantity = quantity;
  props.item.total = quantity * props.item.price;
};
const onPriceUpdated = (price: number) => {
  props.item.price = price;
  props.item.total = price * props.item.quantity;
};
</script>

<style scoped>
.invoice-item {
  display: grid;
  grid-template-columns: 4fr 1fr 2fr 2fr;
  grid-column-gap: 20px;
}
</style>
