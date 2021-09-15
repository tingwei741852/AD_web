import axios from 'axios'

export const userRequest = axios.create({
  baseURL: 'http://120.0.0.1:8000',
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json'
})

// 可以統一管理 API Call
// const postFunc = data => userRequest.post('accounts/logout_api/', data)
// const getFunc = url => userRequest.get(url)
