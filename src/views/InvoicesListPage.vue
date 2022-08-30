<template>
  <div class="invoices-list-page">
    <EmptyPage class="no-invoices">
      <h2>There is nothing here</h2>
      <p>
        Create an new invoice <br />by clicking an <b>New invoice</b> button
      </p>
    </EmptyPage>
  </div>
</template>

<script lang="ts" setup>
import EmptyPage from "@/views/EmptyPage.vue";
</script>
<style>
.no-invoices {
  text-align: center;
}
</style>
