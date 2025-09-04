import { APIClient } from "./_api";

const endpoint = "/Address";

export function getAll() {
  return APIClient.get(`${endpoint}`);
}

export function create(value) {
  return APIClient.post(`${endpoint}`, value);
}

export function update(value, id) {
  return APIClient.put(`${endpoint}/${id}`, value);
}

export function deleteAddress(id) {
  return APIClient.delete(`${endpoint}/${id}`);
}

export function getAllConstantShipment() {
  return APIClient.get(`/ConstantShipment`);
}
