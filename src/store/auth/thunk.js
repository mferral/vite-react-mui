import { createAsyncThunk } from '@reduxjs/toolkit'
import { HTTP } from '@/core/http'
import { openSnackbar } from '@/store/general'

export const login = createAsyncThunk(
    'auth/login',
    async (data, {dispatch}) => {            
        const params = {
                    identifier: data.email,
                    password: data.password,
                }
        localStorage.removeItem('token')
        try {
            const  res = await HTTP.post('auth/local', params)   
            return res.data
        }catch (error){                 
            console.log(error);
            dispatch(openSnackbar())
            return error.response.data
        }        
    }
)
