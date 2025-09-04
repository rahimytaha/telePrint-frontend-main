/** @format */

import { APIClient, baseURL } from "./_api"

const endpoint = "/FrontPages"

export function getAll() {
  return APIClient.get(`${endpoint}`)
}

export function getById(productId) {
  return APIClient.get(`${endpoint}/${productId}`)
}

export async function getAllFetch() {
  const res = await fetch(`${baseURL}/${endpoint}`)
  const json = await res.json()

  return json
}

export async function getByIdFetch(productId) {
  const res = await fetch(`${baseURL}${endpoint}/${productId}`)
  if (!res.ok || res.status !== 200) {
    throw new Error(`Error fetching product with ID ${productId}: ${res.statusText}`)
  }

  const json = await res.json()
  return json
}
