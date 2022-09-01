<template>
  <div class="invoice-page">
    <button @click="goBack">Go back</button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";
import { useInvoices } from "@/stores/Invoices";

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

<style scoped></style>
