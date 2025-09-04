import { APIClient } from "./_api"

export function Support(value, func) {
  let bodyFormData = new FormData()
  for (let key in value) {
    bodyFormData.append(key, value[key])
  }
  return APIClient.post(`${"/Support"}`, bodyFormData, {
    onUploadProgress: function (progress) {
      if (func) {
        func(progress)
      }
    }
  })
}
export function getAll(value) {
  return APIClient.post(`/Support/filter`, value)
}
export function getAllMeta(value) {
  return APIClient.post(`/Support/filter/meta`, value)
}
export function Complaint(value, func) {
  let bodyFormData = new FormData()
  for (let key in value) {
    bodyFormData.append(key, value[key])
  }
  return APIClient.post(`${"/Complaint"}`, bodyFormData, {
    onUploadProgress: function (progress) {
      if (func) {
        func(progress)
      }
    }
  })
}
