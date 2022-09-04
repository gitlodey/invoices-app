<template>
  <div class="invoice-list-header">
    <div class="invoice-list-header--left">
      <h1>Invoices</h1>
      <p v-if="quantity && quantity > 0">
        There are {{ quantity }} total invoices
      </p>
      <p v-else>No invoices</p>
    </div>

    <InvoicesFilter
      class="invoice-list-header--filter text-16-700"
      :selected-filter="selectedFilter"
      @change="$emit('filter', $event)"
    />

    <AppButton
      icon="plus"
      text="New invoice"
      :icon-style="{
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '20px',
      }"
      @click="openNewInvoicePage"
    />
  </div>
</template>

<script lang="ts" setup>
import AppButton from "@/components/AppButton.vue";
import InvoicesFilter from "@/components/InvoicesFilter.vue";
import { useRouter } from "vue-router";
import type InvoiceStatuses from "@/enums/InvoiceStatuses";
import Routes from "@/enums/Routes";
const router = useRouter();

const props = defineProps<{
  quantity: number;
  selectedFilter?: InvoiceStatuses;
}>();

const openNewInvoicePage = () => {
  router.push({
    name: Routes.new,
  });
};
</script>
<style scoped>
.invoice-list-header {
  display: flex;
  align-items: center;
}
.invoice-list-header--left {
  flex: 1 0 auto;
}
.invoice-list-header--filter {
  position: relative;
  border: none;
  background-color: var(--color-bg);
  color: var(--color-text-main);
  padding-right: 20px;
  margin-right: 30px;
}
.invoice-list-header--filter:focus-visible {
  outline: none;
}
</style>
