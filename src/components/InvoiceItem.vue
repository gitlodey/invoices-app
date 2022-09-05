<template>
  <div class="invoice-item">
    <FormInput
      :name="`${item.id}--itemName`"
      v-model="item.name"
      label="Item name"
      rules="required"
      :hide-label="true"
    />
    <FormInput
      :name="`${item.id}--itemQuantity`"
      :model-value.number="item.quantity"
      @update:modelValue="onQuantityUpdated"
      type="number"
      rules="required|minValue:1"
      label="Quantity"
      :small-padding="true"
      :min="1"
      :hide-label="true"
    />
    <FormInput
      :name="`${item.id}--itemPrice`"
      :model-value.number="item.price"
      @update:modelValue="onPriceUpdated"
      type="number"
      rules="required|minValue:0.01"
      label="Price"
      :min="0.01"
      :hide-label="true"
    />
    <div class="invoice-item--total">
      {{ total }}
      <AppIcon
        class="invoice-item--delete"
        icon="delete"
        @click="$emit('delete', item)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import FormInput from "@/components/FormInput.vue";
import type { IInvoiceItem } from "@/types/Invoice";
import AppIcon from "@/components/AppIcon.vue";
import { useFormatNumber } from "@/composables/useFormatNumber";
import { computed } from "vue";

const props = defineProps<{
  item: IInvoiceItem;
}>();

const total = computed(() => useFormatNumber(props.item.total));

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
.invoice-item--total {
  display: flex;
  padding-top: 17px;
  justify-content: space-between;
}
.invoice-item--delete {
  height: 16px;
  cursor: pointer;
}
</style>
