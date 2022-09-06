import type InvoiceStatuses from "@/enums/InvoiceStatuses";
import api from "@/services/api";
import type IInvoice from "@/types/IInvoice";
import { defineStore } from "pinia";

interface IInvoicesState {
  invoices: IInvoice[];
  currentInvoice: IInvoice | undefined;
}

export const useInvoices = defineStore("Invoices", {
  state(): IInvoicesState {
    return {
      invoices: [],
      currentInvoice: undefined,
    };
  },
  actions: {
    async getInvoice(id: string) {
      try {
        const invoice = await api.getInvoice(id);
        if (invoice) {
          this.currentInvoice = invoice;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getInvoices(filter?: InvoiceStatuses) {
      try {
        const invoices = await api.getInvoices(filter);
        this.$reset();
        if (invoices) {
          this.invoices.push(...invoices);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async addInvoice(invoice: IInvoice) {
      try {
        await api.addInvoice(invoice);
        this.invoices.unshift(invoice);
      } catch (error) {
        console.error(error);
      }
    },
    async editInvoice(invoice: IInvoice) {
      try {
        await api.editInvoice(invoice);
        const index = this.invoices.map((item) => item.id).indexOf(invoice.id);
        this.invoices[index] = invoice;
        this.currentInvoice = invoice;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteInvoice(invoice: IInvoice) {
      try {
        await api.deleteInvoice(invoice);
        const index = this.invoices.map((item) => item.id).indexOf(invoice.id);
        this.invoices.splice(index, 1);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
