import { APIClient } from "./_api";

export function getAllEndFormat() {
  return APIClient.get(`${"/FolderEin_EndFormat"}`);
}

export function digiPrintMaterial(value) {
  return APIClient.post(`${"/FolderEin_Record/material"}`, value);
}
export function record(value, func) {
  let bodyFormData = new FormData();
  for (let key in value) {
    bodyFormData.append(key, value[key]);
  }
  return APIClient.post(`${"/FolderEin_Record"}`, bodyFormData, {
    onUploadProgress: function (progress) {
      if (func) {
        func(progress);
      }
    },
  });
}
