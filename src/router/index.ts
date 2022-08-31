import { createRouter, createWebHistory } from "vue-router";
import InvoicesListPage from "@/views/InvoicesListPage.vue";
import InvoiceNew from "@/views/InvoiceNew.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Invoices list",
      component: InvoicesListPage,
      children: [
        {
          path: "/new",
          name: "New Invoice",
          component: InvoiceNew,
        },
      ],
    },
  ],
});

export default router;
