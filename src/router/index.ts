import InvoiceEdit from "@/views/InvoiceEdit.vue";
import InvoicesListPage from "@/views/InvoicesListPage.vue";
import InvoiceNew from "@/views/InvoiceNew.vue";
import InvoicePage from "@/views/InvoicePage.vue";
import { createRouter, createWebHistory } from "vue-router";

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
    {
      path: "/invoice/:invoiceId",
      name: "Invoice page",
      component: InvoicePage,
      children: [
        {
          path: "edit",
          name: "Edit invoice",
          component: InvoiceEdit,
        },
      ],
    },
  ],
});

export default router;
