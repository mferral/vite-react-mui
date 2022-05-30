import { createAsyncThunk } from '@reduxjs/toolkit'
import { HttpGet } from '@/core/http'
export const articulosList = createAsyncThunk(
    'articulos/articulosList',
    async (data, {dispatch}) => {                    
        const  res = await HttpGet('articulos', {}, dispatch)   
        return res        
    }
)
