import axios from "axios"

const { NEXT_PUBLIC_API_URL } = process.env
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
let baseURL = `${NEXT_PUBLIC_API_URL}/client/v1`

const APIClient = axios.create({ baseURL })

function setAuthToken(token) {
  APIClient.defaults.headers["Cache-Control"] = "no-cache"
  APIClient.defaults.headers.Pragma = "no-cache"
  APIClient.defaults.headers.Authorization = `Bearer ${token}`
}

function unsetAuthToken() {
  APIClient.defaults.headers.Authorization = ""
}

export { APIClient, setAuthToken, unsetAuthToken, baseURL }
