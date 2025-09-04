import { APIClient } from "./_api";

export function getAllEndFormat() {
  return APIClient.get(`${"/EndFormat_Flyer"}`);
}

export function digiPrintMaterial(value) {
  return APIClient.post(`${"/FlyerRecord/material"}`, value);
}
export function flyerRecord(value, func) {
  let bodyFormData = new FormData();
  for (let key in value) {
    bodyFormData.append(key, value[key]);
  }
  return APIClient.post(`${"/FlyerRecord"}`, bodyFormData, {
    onUploadProgress: function (progress) {
      if (func) {
        func(progress);
      }
    },
  });
}
