<template>
  <div class="invoice-edit">
    <div class="invoice-edit--title text-28-700">
      Edit <span>#</span>{{ route.params.invoiceId }}
    </div>
    <InvoiceForm
      v-if="invoicesStore.currentInvoice"
      :invoice="invoicesStore.currentInvoice"
      :on-submit="editInvoice"
    >
      <div class="form-buttons">
        <AppButton
          text="Cancel"
          @click="goBack"
          :color="ButtonColors.dark"
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
import AppButton from "@/components/AppButton.vue";
import InvoiceForm from "@/components/InvoiceForm.vue";
import ButtonColors from "@/enums/ButtonColors";
import InvoiceStatuses from "@/enums/InvoiceStatuses";
import Routes from "@/enums/Routes";
import { useInvoices } from "@/stores/Invoices";
import { useUi } from "@/stores/ui";
import type IInvoice from "@/types/IInvoice";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const invoicesStore = useInvoices();
const uiStore = useUi();

onMounted(() => {
  if (
    !invoicesStore.currentInvoice ||
    invoicesStore.currentInvoice.id !== route.params.invoiceId
  ) {
    const id = route.params.invoiceId as string;
    invoicesStore.getInvoice(id);
  }
});

const editInvoice = async (form: IInvoice) => {
  try {
    form.status = InvoiceStatuses.pending;
    await invoicesStore.editInvoice(form);
    uiStore.addSuccessNotification({
      title: `Invoice #${form.id}`,
      description: "Was successfully edited",
    });
  } finally {
    goBack();
  }
};
const goBack = () => {
  router.push({
    name: Routes.invoice,
    params: {
      invoiceId: route.params.invoiceId,
    },
  });
};
</script>

<style scoped>
.invoice-edit--title > span {
  color: var(--color-text-secondary);
}
.form-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 0;
}
.form-buttons .app-button:not(:last-child) {
  margin-right: 10px;
}
</style>
