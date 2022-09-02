<template>
  <div class="invoice-edit">
    <h2>Edit invoice</h2>
    <InvoiceForm
      v-if="invoicesState.currentInvoice"
      :invoice="invoicesState.currentInvoice"
    />
  </div>
</template>

<script lang="ts" setup>
import InvoiceForm from "@/components/InvoiceForm.vue";
import { useInvoices } from "@/stores/Invoices";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();

const invoicesState = useInvoices();

onMounted(() => {
  if (
    !invoicesState.currentInvoice ||
    invoicesState.currentInvoice.id !== route.params.invoiceId
  ) {
    const id = route.params.invoiceId as string;
    invoicesState.getInvoice(id);
  }
});
</script>

<style scoped></style>
