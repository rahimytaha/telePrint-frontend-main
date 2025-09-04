/** @format */

import { APIClient, baseURL } from "./_api"

const endpoint = "/blogPost"

export function getAll() {
  return APIClient.get(`${endpoint}`)
}

export function getAllMostVisited() {
  return APIClient.get(`${endpoint}?sort=-visit`)
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
  const res = await fetch(`${baseURL}/${endpoint}/${productId}`)
  const json = await res.json()
  return json
}
export async function getAllMostVisitedFetch() {
  const res = await fetch(`${baseURL}/${endpoint}?sort=-visit`)
  const json = await res.json()
  return json
}
