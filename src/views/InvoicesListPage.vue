<template>
  <div class="invoices-list-page">
    <InvoiceListItem
      v-if="data && data.length"
      v-for="invoice in data"
      class="invoice-item"
      :invoice="invoice"
      :key="invoice.id"
    />
    <EmptyPage
      v-else
      class="no-invoices"
    >
      <h2>There is nothing here</h2>
      <p>
        Create an new invoice <br />by clicking an <b>New invoice</b> button
      </p>
    </EmptyPage>
  </div>
</template>

<script lang="ts" setup>
import EmptyPage from "@/views/EmptyPage.vue";
import InvoiceListItem from "@/components/InvoiceListItem.vue";
import data from "@/assets/data/data.json";
</script>
<style scoped>
.invoice-item:not(:last-child) {
  margin-bottom: 16px;
}
.no-invoices {
  text-align: center;
}
</style>
