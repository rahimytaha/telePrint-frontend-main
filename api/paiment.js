import { APIClient } from "./_api";

const endpoint = "/Payment";

export function getOrder() {
  return APIClient.get(`${endpoint}`);
}

export function clearOrder() {
  return APIClient.delete(`${endpoint}`);
}

export function sendInvoice(value = "") {
  return APIClient.post(`/Invoice`, { description: value });
}

export function sendShipment(value) {
  return APIClient.post(`/Shipment`, value);
}

export function sendPayment(value) {
  return APIClient.post(`/Payment`, value);
}
