import { APIClient } from "./_api";

export function getAllEndFormat() {
  return APIClient.get(`${"/PrintyDatumstempel_EndFormat"}`);
}

export function digiPrintArt(value) {
  return APIClient.post(`${"/PrintyDatumstempel_Record/art"}`, value);
}
export function record(value, func) {
  let bodyFormData = new FormData();
  for (let key in value) {
    bodyFormData.append(key, value[key]);
  }
  return APIClient.post(`${"/PrintyDatumstempel_Record"}`, bodyFormData, {
    onUploadProgress: function (progress) {
      if (func) {
        func(progress);
      }
    },
  });
}

export function getAllPillowColor() {
  return APIClient.get(`${"/PrintyDatumstempel_PillowColor"}`);
}
