import { APIClient } from "./_api";

const endpoint = "/Category";

export function getAll() {
  return APIClient.get(`${endpoint}`);
}
