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
      :name="name"
      :rules="rules"
      as="select"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </Field>
    <ErrorMessage :name="name" />
  </div>
</template>

<script lang="ts" setup>
import { Field, ErrorMessage } from "vee-validate";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: undefined,
  },
  options: {
    type: Array,
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

const emits = defineEmits(["change", "update:modelValue"]);

const onChange = (event: InputEvent) => {
  const target = event.target as HTMLSelectElement;
  emits("change", target.value);
};
</script>

<style scoped>
.form-field--input {
  width: 100%;
}
</style>
