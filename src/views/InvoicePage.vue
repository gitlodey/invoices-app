<template>
  <div class="invoice-page">
    <button
      class="go-back"
      @click="goBack"
    >
      <AppIcon icon="arrow-left" />
      Go back
    </button>
    <template v-if="invoicesStore.currentInvoice">
      <InvoiceActions :invoice="invoicesStore.currentInvoice" />
      <InvoiceCard :invoice="invoicesStore.currentInvoice" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import InvoiceActions from "@/components/InvoiceActions.vue";
import InvoiceCard from "@/components/InvoiceCard.vue";

import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";
import { useInvoices } from "@/stores/Invoices";
import AppIcon from "@/components/AppIcon.vue";

const router = useRouter();
const route = useRoute();

const invoicesStore = useInvoices();

onMounted(async () => {
  const id = route.params.invoiceId as string;
  await invoicesStore.getInvoice(id);
});

const goBack = () => {
  invoicesStore.$reset();
  router.push({
    path: "/",
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
