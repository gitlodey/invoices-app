<template>
  <div class="page-header">
    <div class="page-header--left">
      <h1>Invoices</h1>
      <p v-if="quantity && quantity > 0">
        There are {{ quantity }} total invoices
      </p>
      <p v-else>No invoices</p>
    </div>

    <InvoicesFilter class="page-header--filter" />

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
const router = useRouter();

const props = defineProps<{
  quantity: number;
}>();

const openNewInvoicePage = () => {
  router.push({
    path: "/new",
  });
};
</script>
<style scoped>
.page-header {
  display: flex;
  align-items: center;
}
.page-header--left {
  flex: 1 0 auto;
}
.page-header--filter {
  margin-right: 30px;
}
</style>
