import type IApi from "@/types/IApi";
import type InvoiceStatuses from "@/enums/InvoiceStatuses";
import type Invoice from "@/types/Invoice";

const LOCAL_STORAGE_KEY = "invoices-db";

export default class LocalStorageApi implements IApi {
  private getAllInvoicesFromDb(): Invoice[] {
    const invoicesStr = localStorage.getItem(LOCAL_STORAGE_KEY) || "[]";
    return JSON.parse(invoicesStr) as Invoice[];
  }
  private setInvoicesToDb(invoices: Invoice[]) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(invoices));
  }
  async getInvoice(id: string) {
    const invoices = this.getAllInvoicesFromDb();
    return invoices.find((invoice) => invoice.id === id);
  }
  async getInvoices(filter: InvoiceStatuses | undefined) {
    const invoices = this.getAllInvoicesFromDb();
    if (filter) {
      return invoices.filter((invoice) => invoice.status === filter);
    }
    return invoices;
  }
  async addInvoice(invoice: Invoice) {
    const invoices = this.getAllInvoicesFromDb();
    invoices.unshift(invoice);
    this.setInvoicesToDb(invoices);
  }
  async editInvoice(invoice: Invoice) {
    const invoices = this.getAllInvoicesFromDb().map((item) => {
      if (item.id === invoice.id) {
        return invoice;
      }
      return item;
    });
    this.setInvoicesToDb(invoices);
  }
  async deleteInvoice(invoice: Invoice) {
    const invoices = this.getAllInvoicesFromDb().filter(
      (item) => item.id !== invoice.id,
    );
    this.setInvoicesToDb(invoices);
  }
}
