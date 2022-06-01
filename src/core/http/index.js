import axios from 'axios'
  import env from '@/core/config'
import { openSnackbar } from '@/store/general'

const HTTP = axios.create({
  baseURL: env.baseURL,
})

HTTP.interceptors.request.use((request) => {
  if (localStorage.getItem('token')) request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`  
  return request
})

HTTP.interceptors.response.use((response) => {  
  return response;
}, (error) => {
  // if error.response.status == 401 Unauthorized send to login
  return Promise.reject(error)
});

function generateSnackOptions (error, dispatch){

  // if (error.response.status == 401) window.location.href = '/login'

  let type;
  switch (error.response.status) {
    case 400:
      type = 'warning'
      break;
    case 404:
        type = 'warning'
        break;
    case 500:
      type = 'error'
      break;
    default:
      break;
  }
  const data = {
    message: error.message,    
    type
  }
  if(dispatch) dispatch(openSnackbar(data))
}

export const HttpPost = async (url, params, dispatch) => {
  console.log(params);
  try {
    const  res = await HTTP.post(url, params)       
    return res.data
  }catch (error){                 
    generateSnackOptions(error, dispatch)
    return error.response.data
  }
}

export const HttpPut = async (url, params, dispatch) => {
  try {
    const  res = await HTTP.put(url, params)   
    return res.data
  }catch (error){              
    generateSnackOptions(error, dispatch)
    return error.response.data
  }
}

export const HttpDelete = async (url, params, dispatch) => {
  try {
    const  res = await HTTP.delete(url, params)   
    return res.data
  }catch (error){
    generateSnackOptions(error, dispatch)
    return error.response.data
  }
}

export const HttpGet = async (url, params, dispatch) => {
  try {
    const  res = await HTTP.get(url, params)   
    return res.data
  }catch (error){
    generateSnackOptions(error, dispatch)
    return error.response.data
  }
}