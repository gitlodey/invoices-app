<template>
  <div class="form-field">
    <div
      class="form-field--label text-12-400"
      v-if="label"
    >
      {{ label }}
    </div>
    <Field
      v-model="value"
      :name="name"
      :rules="rules"
      v-slot="{ field }"
    >
      <input
        v-bind="field"
        class="form-field--input"
        :class="{ '__small-padding': smallPadding }"
        :type="type"
        :min="min"
        :max="max"
        @change="onChange"
      />
      <ErrorMessage
        class="form-field--error text-11-400"
        :name="name"
      />
    </Field>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { Field, ErrorMessage } from "vee-validate/dist/vee-validate";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: undefined,
  },
  min: {
    type: [String, Number],
    default: undefined,
  },
  max: {
    type: [String, Number],
    default: undefined,
  },
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: undefined,
  },
  rules: {
    type: String,
    default: undefined,
  },
  smallPadding: {
    type: Boolean,
    default: undefined,
  },
});
const emits = defineEmits(["update:modelValue"]);

const value = ref(props.modelValue);

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};

watch(
  () => props.modelValue,
  (newValue) => (value.value = newValue),
);
</script>

<style>
.form-field--input {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  padding: 0 15px;
  background-color: var(--color-invoice-item-bg);
  border: 1px solid var(--input-border-color);
  transition: 0.3s ease border-color;
}
.form-field--input.__small-padding {
  padding: 0 3px;
  text-align: center;
}
.form-field--input:focus-visible {
  border-color: var(--color-main);
  outline: none;
}
.form-field--label {
  margin-bottom: 10px;
}

.form-field--error {
  color: var(--color-warning);
  margin-top: 5px;
}
</style>
