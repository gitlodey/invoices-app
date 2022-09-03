<template>
  <div class="invoice-form">
    <div class="invoice-form--section-header">Bill from</div>
    <div class="invoice-form--row-1-item">
      <FormInput
        v-model="form.senderAddress.street"
        name="senderAddressStreet"
        rules="required"
        label="Street Address"
      />
    </div>
    <div class="invoice-form--row-3-item">
      <FormInput
        v-model="form.senderAddress.city"
        name="senderAddressCity"
        rules="required"
        label="City"
      />
      <FormInput
        v-model="form.senderAddress.postCode"
        name="senderAddressPostCode"
        rules="required"
        label="Post code"
      />
      <FormInput
        v-model="form.senderAddress.country"
        name="senderAddressCountry"
        rules="required"
        label="Country"
      />
    </div>

    <div class="invoice-form--section-header">Bill to</div>
    <div class="invoice-form--row-1-item">
      <FormInput
        v-model="form.clientName"
        name="clientName"
        rules="required"
        label="Client's Name"
      />
    </div>
    <div class="invoice-form--row-1-item">
      <FormInput
        v-model="form.clientEmail"
        name="clientEmail"
        rules="required"
        label="Client's Email"
      />
    </div>
    <div class="invoice-form--row-1-item">
      <FormInput
        v-model="form.clientAddress.street"
        name="clientAddressStreet"
        rules="required"
        label="Street Address"
      />
    </div>
    <div class="invoice-form--row-3-item">
      <FormInput
        v-model="form.clientAddress.city"
        name="clientAddressCity"
        rules="required"
        label="City"
      />
      <FormInput
        v-model="form.clientAddress.postCode"
        name="clientAddressPostCode"
        rules="required"
        label="Postcode"
      />
      <FormInput
        v-model="form.clientAddress.country"
        name="clientAddressCountry"
        rules="required"
        label="Country"
      />
    </div>
    <div class="invoice-form--row-2-item">
      <FormInput
        v-model="form.paymentDue"
        name="paymentDue"
        type="date"
        rules="required"
        label="Issue Date"
      />
      <FormSelect
        v-model.number="form.paymentTerms"
        name="paymentTerms"
        rules="required"
        label="Payment Terms"
        :options="[1, 7, 14, 30]"
      />
    </div>
    <div class="invoice-form--row-1-item">
      <FormInput
        v-model="form.description"
        name="description"
        rules="required"
        label="Payment Description"
      />
    </div>

    <InvoiceItems :items="form.items" />
    <AppButton
      text="Add new item"
      icon="plus"
      color="secondary"
      :wide="true"
      @click="addNewItem"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineRule } from "vee-validate";
import { required } from "@vee-validate/rules";
import FormInput from "@/components/FormInput.vue";
import FormSelect from "@/components/FormSelect.vue";
import { onMounted, reactive } from "vue";
import type Invoice from "@/types/Invoice";
import InvoiceStatuses from "@/enums/InvoiceStatuses";
import InvoiceItems from "@/components/InvoiceItems.vue";
import AppButton from "@/components/AppButton.vue";

const props = defineProps<{
  invoice?: Invoice;
}>();
const form = reactive<Invoice>({
  id: "",
  createdAt: "",
  paymentDue: "",
  description: "",
  paymentTerms: 1,
  clientName: "",
  clientEmail: "",
  status: InvoiceStatuses.draft,
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [],
  total: 0,
});
defineRule("required", required);

if (props.invoice) {
  Object.assign(form, props.invoice);
}

const addNewItem = () => {
  form.items.push({
    name: "",
    quantity: 0,
    price: 0,
    total: 0,
  });
};
</script>

<style scoped>
.invoice-form--row-1-item,
.invoice-form--row-2-item,
.invoice-form--row-3-item {
  display: grid;
  grid-column-gap: 20px;
  margin-bottom: 25px;
}
.invoice-form--row-1-item {
  grid-template-columns: 1fr;
}
.invoice-form--row-2-item {
  grid-template-columns: 1fr 1fr;
}
.invoice-form--row-3-item {
  grid-template-columns: 1fr 1fr 1fr;
}

.invoice-form--section-header {
  font-weight: bold;
  color: var(--color-secondary);
  margin: 50px 0 30px 0;
}
</style>
