import axios from 'axios'
import env from '@/core/config'

export const HTTP = axios.create({
  baseURL: env.baseURL,
})

HTTP.interceptors.request.use((request) => {
  if (localStorage.getItem('token') !== null) request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`  
  return request
})

HTTP.interceptors.response.use((response) => {
    return response
})
