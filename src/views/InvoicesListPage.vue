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
import EmptyPage from "@/views/EmptyPage.vue";
import InvoiceListItem from "@/components/InvoiceListItem.vue";
import PageSlide from "@/components/PageSlide.vue";
import { useRoute, useRouter } from "vue-router";
import data from "@/assets/data/data.json";
import type Invoice from "@/types/Invoice";
import { onMounted, ref } from "vue";
import { useInvoices } from "@/stores/Invoices";
import InvoiceListHeader from "@/components/InvoiceListHeader.vue";
import type InvoiceStatuses from "@/enums/InvoiceStatuses";
import InvoiceStatusesEnum from "@/enums/InvoiceStatuses";

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
