import { createAsyncThunk } from '@reduxjs/toolkit'
import { HTTP } from '@/core/http'

export const login = createAsyncThunk(
    'auth/login',
    async (data, thunkAPI) => {            
        const params = {
                    identifier: data.email,
                    password: data.password,
                }
        localStorage.removeItem('token')
        const  res = await HTTP.post('auth/local', params)   
        console.log(res);         
        return res.data
    }
)
