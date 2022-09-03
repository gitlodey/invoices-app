<template>
  <div class="form-field">
    <div
      class="form-field--label text-12-400"
      v-if="label"
    >
      {{ label }}
    </div>
    <Field
      class="form-field--input"
      :class="{ '__small-padding': smallPadding }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :name="name"
      :rules="rules"
    />
    <ErrorMessage :name="name" />
  </div>
</template>

<script lang="ts" setup>
import { Field, ErrorMessage } from "vee-validate/dist/vee-validate";

const props = defineProps({
  modelValue: {
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
defineEmits(["update:modelValue"]);
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
}
.form-field--input:focus-visible {
  border-color: var(--color-main);
  outline: none;
}
.form-field--label {
  margin-bottom: 10px;
}
</style>
