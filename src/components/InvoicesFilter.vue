<template>
  <select @change="onChange">
    <option
      hidden
      selected
      value=""
    >
      Filter by status
    </option>
    <option value="">All statuses</option>
    <option
      v-for="status in statuses"
      :key="status.value"
      :value="status.value"
      :selected="status.value === selectedFilter"
    >
      {{ status.label }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import { useCapitalize } from "@/composables/useCapitalize";
import InvoiceStatuses from "@/enums/InvoiceStatuses";
import type IInvoiceStatuses from "@/enums/InvoiceStatuses";

defineProps<{
  selectedFilter?: IInvoiceStatuses;
}>();

const emits = defineEmits(["change"]);

const statuses = [
  {
    value: InvoiceStatuses.draft,
    label: useCapitalize(InvoiceStatuses.draft),
  },
  {
    value: InvoiceStatuses.pending,
    label: useCapitalize(InvoiceStatuses.pending),
  },
  {
    value: InvoiceStatuses.paid,
    label: useCapitalize(InvoiceStatuses.paid),
  },
];

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emits("change", target.value ? target.value : undefined);
};
</script>

<style scoped></style>
