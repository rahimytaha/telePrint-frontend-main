import { APIClient } from "./_api"

const endpoint = "/Cart"

//new routes

export function getAllOrder(value) {
  return APIClient.post(`${endpoint}/cart/get`, value)
}

export function getPDF(id) {
  return APIClient.get(`${endpoint}/invoice/${id}`)
}

export function getAll(value) {
  return APIClient.post(`${endpoint}/filter`, value)
}
export function getAllMeta(value) {
  return APIClient.post(`${endpoint}/filter/meta`, value)
}

export function getAllOrderWithStatus(value) {
  return APIClient.post(`${endpoint}/order/get`, value)
}

export function deleteOrder(id) {
  return APIClient.delete(`${endpoint}/${id}`)
}

export function deleteAllOrder(id) {
  return APIClient.delete(`${endpoint}/cart/${id}`)
}

export function getStatusOrder() {
  return APIClient.get(`${endpoint}/status/get`)
}

export function getSubmittedOrder(phone) {
  return APIClient.get(`${endpoint}/submitted/${phone}`)
}

export function getCompeleteOrder(phone) {
  return APIClient.get(`${endpoint}/compelete/${phone}`)
}

export function payment(value, id) {
  return APIClient.put(`${endpoint}/cart/${id}`, value)
}

export function spotPayment(value) {
  return APIClient.post(`${endpoint}/spotPayment`, value)
}

export function stripePayment(value) {
  return APIClient.post(`${endpoint}`, value)
}

export function paypalStart(value) {
  return APIClient.post(`${endpoint}/paypal/start`, value)
}

export function paypalPayment(value) {
  return APIClient.post(`${endpoint}/paypal/payment`, value)
}

export function confirmPayment(phone) {
  return APIClient.get(`${endpoint}/confirm/${phone}`)
}
