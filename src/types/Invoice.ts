import type InvoiceStatuses from "@/enums/InvoiceStatuses";

interface InvoiceAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}
export interface IInvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: InvoiceStatuses;
  senderAddress: InvoiceAddress;
  clientAddress: InvoiceAddress;
  items: IInvoiceItem[];
  total: number;
}

export default Invoice;
