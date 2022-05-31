import { createAsyncThunk } from '@reduxjs/toolkit'
import { HttpGet } from '@/core/http'
import env from '@/core/config'
export const articulosList = createAsyncThunk(
    'articulos/articulosList',
    async (data, {dispatch}) => {                    
        const  res = await HttpGet(`articulos?pagination[page]=${data.page}&pagination[pageSize]=${env.pageSize}`)   
        return res        
    }
)
