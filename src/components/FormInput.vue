<template>
  <div class="form-field">
    <div
      class="label"
      v-if="label"
    >
      {{ label }}
    </div>
    <Field
      class="form-field--input"
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
import { defineEmits, defineProps } from "vue";

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
});
defineEmits(["update:modelValue"]);
</script>

<style scoped>
.form-field--input {
  width: 100%;
}
</style>
