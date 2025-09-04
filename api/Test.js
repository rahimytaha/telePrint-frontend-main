import { APIClient } from "./_api";

export function testRecord(value, func) {
  return APIClient.post(`${"/Test_Record"}`, value, {
    onUploadProgress: function (progress) {
      if (func) {
        func(progress);
      }
    },
  });
}
