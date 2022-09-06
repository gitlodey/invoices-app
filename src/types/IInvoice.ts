import type InvoiceStatuses from "@/enums/InvoiceStatuses";

interface IInvoiceAddress {
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
  id?: number;
}
interface IInvoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: InvoiceStatuses;
  senderAddress: IInvoiceAddress;
  clientAddress: IInvoiceAddress;
  items: IInvoiceItem[];
  total: number;
}

export default IInvoice;
