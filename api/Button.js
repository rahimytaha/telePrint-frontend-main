import { APIClient } from "./_api";

export function getAllEndFormat() {
  return APIClient.get(`${"Button_EndFormat"}`);
}

export function digiPrintMaterial(value) {
  return APIClient.post(`${"Button_Record"}`, value);
}

export function getPrice(value) {
  return APIClient.post(`${"Button_Record/price"}`, value);
}
export function record(value, func) {
  let bodyFormData = new FormData();
  for (let key in value) {
    bodyFormData.append(key, value[key]);
  }
  return APIClient.post(`${"Button_Record"}`, bodyFormData, {
    onUploadProgress: function (progress) {
      if (func) {
        func(progress);
      }
    },
  });
}
