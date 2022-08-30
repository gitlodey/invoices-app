<template>
  <div class="page-header">
    <div class="page-header--left">
      <h1>Invoices</h1>
      <p>No invoice</p>
    </div>

    <InvoicesFilter class="page-header--filter" />

    <AppButton
      icon="plus"
      text="New invoice"
      :icon-style="{
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '20px',
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import AppButton from "@/components/AppButton.vue";
import InvoicesFilter from "@/components/InvoicesFilter.vue";
</script>
<style scoped>
.page-header {
  display: flex;
  align-items: center;
}
.page-header--left {
  flex: 1 0 auto;
}
.page-header--filter {
  margin-right: 30px;
}
</style>
