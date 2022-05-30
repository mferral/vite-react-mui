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

// HTTP.interceptors.response.use(
//   response => response,
//   error => {
//     console.log(error);    
// });

function generateSnackOptions (error){
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
  return {
    message: error.message,    
    type
  }
}

export const HttpPost = async (url, params, dispatch) => {
  try {
    const  res = await HTTP.post(url, params)   
    console.log(res);
    return res.data
  }catch (error){                 
    console.log(error.response)    
    dispatch(openSnackbar(generateSnackOptions(error)))
    return error.response.data
  }
}

export const HttpPut = async (url, params, dispatch) => {
  try {
    const  res = await HTTP.put(url, params)   
    return res.data
  }catch (error){              
    console.log(error.response.status)  
    dispatch(openSnackbar({message:error.message}))
    return error.response.data
  }
}

export const HttpDelete = async (url, params, dispatch) => {
  try {
    const  res = await HTTP.delete(url, params)   
    return res.data
  }catch (error){
    console.log(error.response.status)
    dispatch(openSnackbar({message:error.message}))
    return error.response.data
  }
}

export const HttpGet = async (url, params, dispatch) => {
  try {
    const  res = await HTTP.get(url, params)   
    return res.data
  }catch (error){
    console.log(error.response.status)
    dispatch(openSnackbar({message:error.message}))
    return error.response.data
  }
}