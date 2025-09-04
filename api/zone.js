import { APIClient } from "./_api";

const endpoint = "/Zone";

export function getAllZone() {
  return APIClient.get(`${endpoint}`);
}
