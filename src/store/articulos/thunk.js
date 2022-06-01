import { createAsyncThunk } from '@reduxjs/toolkit'
import { HttpGet, HttpPost } from '@/core/http'
import env from '@/core/config'
export const articulosList = createAsyncThunk(
    'articulos/articulosList',
    async (data, {dispatch}) => {                    
        const  res = await HttpGet(`articulos?pagination[page]=${data.page}&pagination[pageSize]=${env.pageSize}`)   
        return res        
    }
)

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const articulosCreate = createAsyncThunk(
    'articulos/articulosCreate',
    async (data, {dispatch}) => {    
        const params = {
            data: {...data}
        }          
        await timeout(3000);
        const  res = await HttpPost(`articulos`, params, dispatch)   
        return res        
    }
)
