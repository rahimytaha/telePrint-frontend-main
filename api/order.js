import { APIClient } from "./_api";

const endpoint = "/Order";

export function getAllOrderWithStatus(value) {
  return APIClient.post(`${endpoint}/order/get`, value);
}

export function deleteOrder(id) {
  return APIClient.delete(`${endpoint}/${id}`);
}

export function getStatusOrder() {
  return APIClient.get(`${endpoint}/status/get`);
}

export function getSubmittedOrder(phone) {
  return APIClient.get(`${endpoint}/submitted/${phone}`);
}

export function getCompeleteOrder(phone) {
  return APIClient.get(`${endpoint}/compelete/${phone}`);
}

export function payment(value) {
  return APIClient.post(`${endpoint}`, value);
}

export function paypalStart(value) {
  return APIClient.post(`${endpoint}/paypal/start`, value);
}

export function paypalPayment(value) {
  return APIClient.post(`${endpoint}/paypal/payment`, value);
}

export function confirmPayment(phone) {
  return APIClient.get(`${endpoint}/confirm/${phone}`);
}
