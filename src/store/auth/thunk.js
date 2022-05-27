import { createAsyncThunk } from '@reduxjs/toolkit'
import { HTTP } from '@/core/http'

export const login = createAsyncThunk(
    'auth/login',
    async (data, thunkAPI) => {            
        const params = {
                    identifier: data.email,
                    password: data.password,
                }
        const  res = await HTTP.post('auth/local', params)            
        return res.data
    }
)
