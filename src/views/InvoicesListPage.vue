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

    <router-view v-slot="{ Component }">
      <PageSlide
        :is-show="!!Component"
        @close="onInvoiceFormClose"
      >
        <component :is="Component" />
      </PageSlide>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import EmptyPage from "@/views/EmptyPage.vue";
import InvoiceListItem from "@/components/InvoiceListItem.vue";
import PageSlide from "@/components/PageSlide.vue";
import { useRouter } from "vue-router";
const router = useRouter();
import data from "@/assets/data/data.json";

const onInvoiceFormClose = () => {
  router.push({
    path: "/",
  });
};
</script>
<style scoped>
.invoice-item:not(:last-child) {
  margin-bottom: 16px;
}
.no-invoices {
  text-align: center;
}
</style>
