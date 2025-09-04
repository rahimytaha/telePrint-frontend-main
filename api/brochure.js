import { APIClient } from "./_api"

export function Brochure_EndFormat() {
  return APIClient.get(`${"/Brochure_EndFormat"}`)
}

export function BrochureMaterial_Kern(value) {
  return APIClient.post(`${"/Brochure_Record/material/kern"}`, value)
}
export function BrochureMaterial_Umschlag(value) {
  return APIClient.post(`${"/Brochure_Record/material/umschlag"}`, value)
}
export function Brochure_Record(value, func) {
  let bodyFormData = new FormData()
  for (let key in value) {
    bodyFormData.append(key, value[key])
  }
  return APIClient.post(`${"/Brochure_Record"}`, bodyFormData, {
    onUploadProgress: function (progress) {
      if (func) {
        func(progress)
      }
    }
  })
}
