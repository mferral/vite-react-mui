import { createAsyncThunk } from '@reduxjs/toolkit'
import { HttpPost } from '@/core/http'
import { openSnackbar } from '@/store/general'

export const login = createAsyncThunk(
    'auth/login',
    async (data, {dispatch}) => {            
        const params = {
                    identifier: data.email,
                    password: data.password,
                }
        localStorage.removeItem('token')        
        const  res = await HttpPost('auth/local', params, dispatch)   
        return res
        
    }
)
