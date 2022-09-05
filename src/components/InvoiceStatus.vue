<template>
  <div
    class="invoice-status"
    :class="`__${status}`"
  >
    <div class="invoice-status--dot"></div>
    {{ statusString }}
  </div>
</template>

<script lang="ts" setup>
import { useCapitalize } from "@/composables/useCapitalize";
import type InvoiceStatuses from "@/enums/InvoiceStatuses";
import { computed } from "vue";

const props = defineProps<{
  status: InvoiceStatuses;
}>();

const statusString = computed(() => useCapitalize(props.status));
</script>

<style scoped>
.invoice-status {
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: bold;
}
.invoice-status.__paid {
  background-color: var(--color-success-bg);
  color: var(--color-success);
}
.invoice-status.__pending {
  background-color: var(--color-pending-bg);
  color: var(--color-pending);
}
.invoice-status.__draft {
  background-color: var(--color-draft-bg);
  color: var(--color-draft);
}
.invoice-status--dot {
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin-right: 5px;
}

.__paid .invoice-status--dot {
  background-color: var(--color-success);
}
.__pending .invoice-status--dot {
  background-color: var(--color-pending);
}
.__draft .invoice-status--dot {
  background-color: var(--color-draft);
}
</style>
