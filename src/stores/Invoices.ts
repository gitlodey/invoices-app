import { defineStore } from "pinia";
import api from "@/services/api";
import type Invoice from "@/types/Invoice";
import type InvoiceStatuses from "@/enums/InvoiceStatuses";

interface IInvoicesState {
  invoices: Invoice[];
  currentInvoice: Invoice | undefined;
  filter?: InvoiceStatuses;
}

export const useInvoices = defineStore("Invoices", {
  state(): IInvoicesState {
    return {
      invoices: [],
      filter: undefined,
      currentInvoice: undefined,
    };
  },
  actions: {
    async getInvoice(id: string) {
      const invoice = await api.getInvoice(id);
      if (invoice) {
        this.currentInvoice = invoice;
      }
    },
    async getInvoices(filter?: InvoiceStatuses) {
      const invoices = await api.getInvoices(filter);
      if (invoices) {
        this.invoices.push(...invoices);
      }
    },
    async addInvoice(invoice: Invoice) {
      try {
        await api.addInvoice(invoice);
        this.invoices.push(invoice);
      } catch (error) {
        console.error(error);
      }
    },
    async editInvoice(invoice: Invoice) {
      await api.editInvoice(invoice);
      const index = this.invoices.map((item) => item.id).indexOf(invoice.id);
      this.invoices[index] = invoice;
    },
    async deleteInvoice(invoice: Invoice) {
      await api.deleteInvoice(invoice);
      const index = this.invoices.map((item) => item.id).indexOf(invoice.id);
      this.invoices.splice(index, 1);
    },
  },
});
