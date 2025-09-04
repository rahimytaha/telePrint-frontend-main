import { APIClient } from "./_api";

const endpoint = "/Invoice";

export function sendInvoice(value = "") {
  return APIClient.post(`${endpoint}`, { description: value });
}

export function getInvoices() {
  return APIClient.get(`${endpoint}/Invoices`);
}

export function getShipment(invoiceId) {
  return APIClient.get(`/Shipment/${invoiceId}`);
}
