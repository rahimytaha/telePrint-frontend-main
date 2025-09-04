import { APIClient } from "./_api";

const endpoint = "/Product";

export function getAll(values) {
  return APIClient.post(`${endpoint}/filter`, values);
}

export function getById(productId) {
  return APIClient.get(`${endpoint}/${productId}`);
}
export function getAttribute(productId) {
  return APIClient.get(`/ProductAttributeValue/${productId}`);
}

export function getAttributeContainer(productId) {
  return APIClient.get(`/ProductAttributeValue/depth/${productId}`);
}

export function getProductByShopId(shopId) {
  return APIClient.get(`product/show?id=${shopId}`);
}
