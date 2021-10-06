import axios from 'axios'

export const baseURL = 'http://127.0.0.1:8000'
export const userRequest = axios.create({
  baseURL: baseURL,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json'
})

// 可以統一管理 API Call
// const postFunc = data => userRequest.post('accounts/logout_api/', data)
// const getFunc = url => userRequest.get(url)
