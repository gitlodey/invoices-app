<template>
  <div class="invoices-list-page">
    <InvoiceListItem
      v-if="invoicesStore.invoices && invoicesStore.invoices.length"
      v-for="invoice in invoicesStore.invoices"
      class="invoice-item"
      :invoice="invoice"
      :key="invoice.id"
      @click="goToInvoicePage(invoice)"
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
import type Invoice from "@/types/Invoice";
import { onMounted } from "vue";
import { useInvoices } from "@/stores/Invoices";

const invoicesStore = useInvoices();

onMounted(async () => {
  await invoicesStore.getInvoices();
  if (invoicesStore.invoices.length === 0) {
    // I'm adding mock data to the DB for the first visit just for the page not to be empty.
    data.forEach((invoice) => {
      const i = invoice as Invoice;
      invoicesStore.addInvoice(i);
    });
  }
});

const onInvoiceFormClose = () => {
  router.push({
    path: "/",
  });
};

const goToInvoicePage = (invoice: Invoice) => {
  router.push({
    path: `/view/${invoice.id}`,
    params: {
      invoiceId: invoice.id,
    },
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
