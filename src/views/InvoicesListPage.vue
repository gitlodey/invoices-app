<template>
  <div class="invoices-list-page">
    <InvoiceListHeader
      :quantity="invoicesStore?.invoices?.length"
      :selected-filter="selectedFilter"
      @filter="onFilter"
    />
    <InvoiceListItem
      v-if="invoicesStore.invoices && invoicesStore.invoices.length"
      v-for="invoice in invoicesStore.invoices"
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
import data from "@/assets/data/data.json";
import InvoiceListItem from "@/components/InvoiceListItem.vue";
import InvoiceListHeader from "@/components/InvoiceListHeader.vue";
import PageSlide from "@/views/PageSlide.vue";
import InvoiceStatusesEnum from "@/enums/InvoiceStatuses";
import type InvoiceStatuses from "@/enums/InvoiceStatuses";
import { useInvoices } from "@/stores/Invoices";
import type Invoice from "@/types/Invoice";
import EmptyPage from "@/views/PageEmpty.vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const invoicesStore = useInvoices();

const selectedFilter = ref<InvoiceStatuses | undefined>();

onMounted(async () => {
  const statuses = Object.keys(InvoiceStatusesEnum);
  const queryStatus = route.query.status as string;
  const filter = statuses.includes(queryStatus)
    ? (queryStatus as InvoiceStatuses)
    : undefined;
  selectedFilter.value = filter;
  await invoicesStore.getInvoices(filter);

  // I'm adding mock data to the DB for the first visit just for the page not to be empty.
  const mockDataAdded = localStorage.getItem("mockDataAdded");
  if (mockDataAdded !== "true") {
    data.forEach((invoice) => {
      const i = invoice as Invoice;
      invoicesStore.addInvoice(i);
    });
    localStorage.setItem("mockDataAdded", "true");
  }
});

const onInvoiceFormClose = () => {
  router.push({
    path: "/",
  });
};
const onFilter = async (filter?: InvoiceStatuses) => {
  await invoicesStore.getInvoices(filter);
  await router.push({ query: { status: filter } });
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
