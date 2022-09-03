<template>
  <div class="invoice-edit">
    <h2>Edit invoice</h2>
    <InvoiceForm
      v-if="invoicesState.currentInvoice"
      :invoice="invoicesState.currentInvoice"
    >
      <div class="form-buttons">
        <AppButton
          text="Cancel"
          @click="$router.go(-1)"
          color="dark"
        />
        <AppButton
          text="Save changes"
          type="submit"
        />
      </div>
    </InvoiceForm>
  </div>
</template>

<script lang="ts" setup>
import InvoiceForm from "@/components/InvoiceForm.vue";
import { useInvoices } from "@/stores/Invoices";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import AppButton from "@/components/AppButton.vue";

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

<style scoped>
.form-buttons {
  display: flex;
  justify-content: flex-end;
  padding: 35px 0;
}
.form-buttons .app-button:not(:last-child) {
  margin-right: 10px;
}
</style>
