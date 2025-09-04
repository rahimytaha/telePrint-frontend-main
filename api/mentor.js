import { APIClient } from "./_api";

const endpoint = "/Mentor";

export function getAll() {
  return APIClient.get(`${endpoint}`);
}

export function sendInfo(value) {
  return APIClient.post(`${endpoint}`, value);
}

export function getById(mentorId) {
  return APIClient.get(`${endpoint}/${mentorId}`);
}
