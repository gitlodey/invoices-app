<template>
  <div class="invoice-list-item">
    <div
      class="invoice-list-item--id"
      @click="goToInvoicePage"
    >
      <span class="invoice-list-item--id-prefix">#</span>{{ invoice.id }}
    </div>
    <div class="invoice-list-item--due">Due {{ paymentDue }}</div>
    <div class="invoice-list-item--name">{{ invoice.clientName }}</div>
    <div class="invoice-list-item--total">£{{ total }}</div>
    <div class="invoice-list-item--status">
      <InvoiceStatus :status="invoice.status" />
      <AppIcon
        icon="arrow-right"
        class="invoice-list-item--arrow"
        @click="goToInvoicePage"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type Invoice from "@/types/Invoice";
import InvoiceStatus from "@/components/InvoiceStatus.vue";
import AppIcon from "@/components/AppIcon.vue";
import { useRouter } from "vue-router";
import Routes from "@/enums/Routes";
import { computed } from "vue";
import { useFormatNumber } from "@/composables/useFormatNumber";
import { useFormatDate } from "@/composables/useDayJs";

const props = defineProps<{
  invoice: Invoice;
}>();

const router = useRouter();

const total = computed(() => useFormatNumber(props.invoice.total));
const paymentDue = computed(() => useFormatDate(props.invoice.paymentDue));

const goToInvoicePage = () => {
  router.push({
    name: Routes.invoice,
    params: {
      invoiceId: props.invoice.id,
    },
  });
};
</script>

<style scoped>
.invoice-list-item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: var(--column-gap-s);
  background-color: var(--color-invoice-item-bg);
  align-items: center;
  border-radius: 10px;
  padding: 15px 33px;
  transition: 0.3s ease background-color;
}
.invoice-list-item--id {
  cursor: pointer;
  padding: 5px 0;
  transition: 0.3s ease color;
}
.invoice-list-item--id:hover {
  color: var(--color-text-hover);
}
.invoice-list-item--id,
.invoice-list-item--total {
  font-weight: bold;
}
.invoice-list-item--id-prefix {
  color: var(--color-accent);
}
.invoice-list-item--total {
  text-align: right;
}
.invoice-list-item--status {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.invoice-list-item--arrow {
  padding: 10px 0 10px 10px;
  width: 7px;
  height: 10px;
  margin-left: 10px;
  cursor: pointer;
}
</style>
