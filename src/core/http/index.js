import axios from 'axios'
import env from '@/core/config'

export const HTTP = axios.create({
  baseURL: env.baseURL,
})

HTTP.interceptors.request.use((request) => {
  if (localStorage.getItem('token')) request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`  
  return request
})

HTTP.interceptors.response.use((response) => {
    // store.dispatch(openSnackbar)
    return response
})
