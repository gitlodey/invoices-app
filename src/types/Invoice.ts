import type InvoiceStatuses from "@/enums/InvoiceStatuses";

interface InvoiceAddress {
  street: String;
  city: String;
  postCode: String;
  country: String;
}
interface InvoiceItem {
  name: String;
  quantity: Number;
  price: Number;
  total: Number;
}
interface Invoice {
  id: String;
  createdAt: String;
  paymentDue: String;
  description: String;
  paymentTerms: Number;
  clientName: String;
  clientEmail: String;
  status: InvoiceStatuses;
  senderAddress: InvoiceAddress;
  clientAddress: InvoiceAddress;
  items: InvoiceItem[];
  total: Number;
}

export default Invoice;
