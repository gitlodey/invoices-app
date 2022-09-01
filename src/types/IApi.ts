import type Invoice from "@/types/Invoice";
import type InvoiceStatuses from "@/enums/InvoiceStatuses";

interface IApi {
  getInvoice(id: string): Promise<Invoice | undefined>;
  getInvoices(filter?: InvoiceStatuses): Promise<Invoice[] | undefined>;
  addInvoice(invoice: Invoice): Promise<void>;
  editInvoice(invoice: Invoice): Promise<void>;
  deleteInvoice(invoice: Invoice): Promise<void>;
}

export default IApi;
