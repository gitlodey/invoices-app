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
      <select
        v-bind="field"
        class="form-field--input"
        :name="name"
        @change="onChange"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :selected="option.value === value"
        >
          {{ option.label }}
        </option>
      </select>
    </Field>
    <ErrorMessage
      class="form-field--error text-11-400"
      :name="name"
    />
  </div>
</template>

<script lang="ts" setup>
import { Field, ErrorMessage } from "vee-validate";
import { defineProps, defineEmits, watch, ref } from "vue";

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

const value = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => (value.value = newValue),
);

const onChange = (event: InputEvent) => {
  const target = event.target as HTMLSelectElement;
  emits("update:modelValue", target.value);
};
</script>

<style scoped>
.form-field--input {
  width: 100%;
}
</style>
