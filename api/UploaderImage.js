import { APIClient } from "./_api";

const endpoint = "/Image";

export function addImages(data, func) {
  let bodyFormData = new FormData();
  for (let key in data) {
    bodyFormData.append("Images", data[key]);
  }
  return APIClient.post(`${endpoint}`, bodyFormData, {
    onUploadProgress: function (progress) {
      if (func) {
        func(progress);
      }
    },
  });
}
