<template>
  <div class="invoice-item">
    <FormInput
      :name="`${item.id}--itemName`"
      :model-value="item.name"
      @update:modelValue="onNameUpdated"
      label="Item name"
      rules="required"
      :hide-label="true"
    />
    <FormInput
      :name="`${item.id}--itemQuantity`"
      :model-value="item.quantity"
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
      :model-value="item.price"
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
import AppIcon from "@/components/AppIcon.vue";
import FormInput from "@/components/AppInput.vue";
import { useFormatNumber } from "@/composables/useFormatNumber";
import type { IInvoiceItem } from "@/types/IInvoice";
import { computed } from "vue";

const props = defineProps<{
  item: IInvoiceItem;
}>();

const emits = defineEmits(["update", "delete"]);

const total = computed(() => useFormatNumber(props.item.total));

const onQuantityUpdated = (quantity: string) => {
  emits("update", {
    quantity: Number(quantity),
    total: Number(quantity) * props.item.price,
    price: props.item.price,
    name: props.item.name,
  });
};
const onPriceUpdated = (price: string) => {
  emits("update", {
    price: Number(price),
    total: Number(price) * props.item.quantity,
    quantity: props.item.quantity,
    name: props.item.name,
  });
};
const onNameUpdated = (name: string) => {
  emits("update", {
    name,
    price: props.item.price,
    total: props.item.total,
    quantity: props.item.quantity,
  });
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
