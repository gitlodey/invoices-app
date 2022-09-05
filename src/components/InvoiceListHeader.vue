<template>
  <div class="invoice-list-header">
    <div class="invoice-list-header--left">
      <div class="invoice-list-header--title text-38-700">Invoices</div>
      <div class="text-15-400">
        <span v-if="quantity && quantity > 0">
          There are {{ quantity }} total invoices
        </span>
        <span v-else> No invoices </span>
      </div>
    </div>

    <InvoicesFilter
      class="invoice-list-header--filter text-13-700"
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
  margin-bottom: 65px;
}
.invoice-list-header--left {
  flex: 1 0 auto;
}
.invoice-list-header--filter {
  border: none;
  background-color: var(--color-bg);
  color: var(--color-text-main);
  padding-right: 20px;
  margin-right: 30px;
  cursor: pointer;
  transition: 0.3s ease color;
}
.invoice-list-header--filter:hover {
  color: var(--color-text-hover);
}
.invoice-list-header--filter:focus-visible {
  outline: none;
}
.invoice-list-header--title {
  margin-bottom: 5px;
}
</style>
