import type IInvoice from "@/types/IInvoice";
import type InvoiceStatuses from "@/enums/InvoiceStatuses";

interface IApi {
  getInvoice(id: string): Promise<IInvoice | undefined>;
  getInvoices(filter?: InvoiceStatuses): Promise<IInvoice[] | undefined>;
  addInvoice(invoice: IInvoice): Promise<void>;
  editInvoice(invoice: IInvoice): Promise<void>;
  deleteInvoice(invoice: IInvoice): Promise<void>;
}

export default IApi;
