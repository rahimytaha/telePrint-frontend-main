import { APIClient } from "./_api"

const endpoint = "/user"

function checkEmail(value) {
  return APIClient.post(`${endpoint}/checkEmail`, value)
}

function checkEmailLogin(value) {
  return APIClient.post(`${endpoint}/checkEmailLogin`, value)
}

function verify(value) {
  return APIClient.post(`${endpoint}/confirm`, value)
}

function register(value) {
  return APIClient.post(`${endpoint}/register`, value)
}

function login(value) {
  return APIClient.post(`${endpoint}/login`, value)
}

function getMe() {
  return APIClient.get(`${endpoint}`)
}

function update(value) {
  return APIClient.put(`${endpoint}`, value)
}

export { login, checkEmail, verify, getMe, update, register, checkEmailLogin }
