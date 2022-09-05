<template>
  <div class="invoice-page">
    <GoBack name="Invoices list" />
    <template v-if="invoicesStore.currentInvoice">
      <InvoiceActions :invoice="invoicesStore.currentInvoice" />
      <InvoiceCard :invoice="invoicesStore.currentInvoice" />
    </template>

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
import InvoiceActions from "@/components/InvoiceActions.vue";
import InvoiceCard from "@/components/InvoiceCard.vue";

import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";
import { useInvoices } from "@/stores/Invoices";
import PageSlide from "@/components/PageSlide.vue";
import GoBack from "@/components/GoBack.vue";
import Routes from "@/enums/Routes";

const router = useRouter();
const route = useRoute();

const invoicesStore = useInvoices();

onMounted(async () => {
  const id = route.params.invoiceId as string;
  await invoicesStore.getInvoice(id);
});

const onInvoiceFormClose = () => {
  router.push({
    name: Routes.invoice,
    params: {
      invoiceId: route.params.invoiceId,
    },
  });
};
</script>

<style scoped>
.go-back {
  margin-bottom: 30px;
}
.invoice-page .invoice-actions {
  margin-bottom: 25px;
}
</style>
