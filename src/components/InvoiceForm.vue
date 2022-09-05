<template>
  <Form
    class="invoice-form"
    @submit="submitHandler"
  >
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
        rules="required|email"
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
        label="Post Code"
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
        :model-value="form.paymentDue"
        name="paymentDue"
        type="date"
        rules="required"
        label="Issue Date"
        :min="minDate"
        @update:modelValue="updatePaymentDue"
      />
      <FormSelect
        :model-value="form.paymentTerms"
        name="paymentTerms"
        rules="required"
        label="Payment Terms"
        :options="paymentTermsOptions"
        @update:modelValue="updatePaymentTerms"
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

    <InvoiceItems
      :items="itemsWithIds"
      @delete="onDeleteItem"
      @update="onUpdateItems"
    />
    <AppButton
      text="Add new item"
      icon="plus"
      :color="ButtonColors.dark"
      :wide="true"
      :icon-style="{ width: '8px', height: '8px' }"
      @click="addNewItem"
    />

    <slot></slot>
  </Form>
</template>

<script lang="ts" setup>
import AppButton from "@/components/AppButton.vue";
import InvoiceItems from "@/components/InvoiceItems.vue";
import FormInput from "@/components/AppInput.vue";
import FormSelect from "@/components/AppSelect.vue";
import { useInvoiceId } from "@/composables/useInvoiceId";
import {
  useAddDays,
  useCurrentDate,
  useDifference,
} from "@/composables/useDayJs";
import ButtonColors from "@/enums/ButtonColors";
import InvoiceStatuses from "@/enums/InvoiceStatuses";
import { useInvoices } from "@/stores/Invoices";
import { useUi } from "@/stores/ui";
import type { IInvoiceItem } from "@/types/Invoice";
import type Invoice from "@/types/Invoice";
import { configure, defineRule, Form } from "vee-validate";
import { email, min_value, required } from "@vee-validate/rules";
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";
import Routes from "@/enums/Routes";
import { localize } from "@vee-validate/i18n";

const invoiceStore = useInvoices();
const uiStore = useUi();
const router = useRouter();

const props = defineProps<{
  invoice?: Invoice;
  onSubmit?: (form: Invoice) => Promise<void>;
}>();

const form = reactive<Invoice>({
  id: useInvoiceId(),
  createdAt: useCurrentDate(),
  paymentDue: useAddDays(useCurrentDate(), 1),
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
defineRule("email", email);
defineRule("minValue", min_value);
configure({
  generateMessage: localize("en", {
    messages: {
      required: "{field} is required",
      email: "{field} is not valid",
      minValue: "{field} must be greater",
    },
  }),
});

if (props.invoice) {
  Object.assign(form, JSON.parse(JSON.stringify(props.invoice)));
}

const paymentTermsOptions = computed(() => {
  return [...new Set([1, 7, 14, 30, form.paymentTerms])]
    .sort((a, b) => a - b)
    .map((i) => {
      return {
        label: `Net ${i} ${i > 1 ? "Days" : "Day"}`,
        value: i,
      };
    });
});
const minDate = computed(() => {
  return useAddDays(form.createdAt, 1);
});
const itemsWithIds = computed(() => {
  return form.items.map((item) => {
    item.id = Math.random();
    return item;
  });
});

const updatePaymentTerms = (days: string) => {
  form.paymentTerms = Number(days);
  form.paymentDue = useAddDays(form.createdAt, form.paymentTerms);
};
const updatePaymentDue = (date: string) => {
  form.paymentDue = date;
  if (date && useDifference(form.createdAt, date) > 0) {
    form.paymentTerms = useDifference(form.createdAt, date);
  }
};
const addNewItem = () => {
  form.items.push({
    name: "",
    quantity: 0,
    price: 0,
    total: 0,
  });
};
const onDeleteItem = (index: number) => {
  if (index > -1) {
    form.items.splice(index, 1);
  }
};
const onUpdateItems = ({
  index,
  data,
}: {
  index: number;
  data: IInvoiceItem;
}) => {
  Object.assign(form.items[index], data);
};
const updateInvoiceTotal = () => {
  form.total = form.items.reduce((total, item) => {
    total += item.total;
    return total;
  }, 0);
};
const saveAsDraft = async () => {
  updateInvoiceTotal();
  await invoiceStore.addInvoice(form);
  await router.push({
    name: Routes.invoicesList,
  });
  uiStore.addSuccessNotification({
    title: `Notification ${form.id}`,
    description: "Successfully sawed as draft",
  });
};
const submitHandler = () => {
  updateInvoiceTotal();
  if (props.onSubmit) {
    props.onSubmit(form);
  }
};

defineExpose({
  saveAsDraft,
});
</script>

<style scoped>
.invoice-form--row-1-item,
.invoice-form--row-2-item,
.invoice-form--row-3-item {
  display: grid;
  grid-column-gap: 20px;
  margin-bottom: 5px;
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
  margin: 45px 0 25px 0;
}
</style>
