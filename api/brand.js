import { APIClient } from "./_api";

const endpoint = "/Brand";

export function getAll() {
  return APIClient.get(`${endpoint}`);
}
