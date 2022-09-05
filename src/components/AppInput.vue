<template>
  <div class="form-field">
    <div
      class="form-field--label text-12-400"
      v-if="label && hideLabel !== true"
    >
      {{ label }}
    </div>
    <Field
      v-model="value"
      :name="name"
      :rules="rules"
      :label="label"
      :minValue="min"
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
import { Field, ErrorMessage } from "vee-validate/dist/vee-validate";
import { ref, watch } from "vue";

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
  hideLabel: {
    type: Boolean,
    default: undefined,
  },
});
const emits = defineEmits(["update:modelValue"]);

const value = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => (value.value = newValue),
);

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};
</script>

<style>
.form-field {
  padding-bottom: 20px;
  position: relative;
}
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
.form-field:hover .form-field--input {
  border-color: var(--color-accent);
}
.form-field .form-field--input:focus-visible {
  border-color: var(--color-main);
  outline: none;
}
.form-field--label {
  margin-bottom: 8px;
}

.form-field--error {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 20px;
  line-height: 10px;
  overflow: hidden;
  color: var(--color-warning);
}
</style>
