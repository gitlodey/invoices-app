<template>
  <select>
    <option>Filter by status</option>
    <option
      v-for="period in periods"
      :key="period.value"
    >
      {{ period.label }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import InvoicePeriods from "@/enums/InvoicePeriods";
const periods = [
  {
    value: InvoicePeriods.day,
    label: `Net ${InvoicePeriods.day} Day`,
  },
  {
    value: InvoicePeriods.week,
    label: `Net ${InvoicePeriods.week} Days`,
  },
  {
    value: InvoicePeriods.twoWeeks,
    label: `Net ${InvoicePeriods.twoWeeks} Days`,
  },
  {
    value: InvoicePeriods.month,
    label: `Net ${InvoicePeriods.month} Days`,
  },
];
</script>

<style scoped></style>
