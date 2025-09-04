import { APIClient } from "./_api";

const endpoint = "/UIPosition";

export function getAll() {
  return APIClient.get(`${endpoint}`);
}

export function getContentByUiId(uiPositionId) {
  return APIClient.get(
    `/ContentUIPosition/filter?uiPositionId=${uiPositionId}`
  );
}
