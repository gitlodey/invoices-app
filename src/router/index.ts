import { createRouter, createWebHistory } from "vue-router";
import InvoicesListPage from "@/views/InvoicesListPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Invoices list",
      component: InvoicesListPage,
    },
  ],
});

export default router;
