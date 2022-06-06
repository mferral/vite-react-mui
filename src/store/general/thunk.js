import { createAsyncThunk } from '@reduxjs/toolkit'
import { HttpGet } from '@/core/http'

export const landing = createAsyncThunk(
    'auth/landing',
    async () => {            
        const  res = await HttpGet('landing')   
        return res
        
    }
)
