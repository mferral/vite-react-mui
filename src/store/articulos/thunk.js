import { createAsyncThunk } from '@reduxjs/toolkit'
import { HttpGet, HttpPost, HttpPut, HttpDelete } from '@/core/http'
import env from '@/core/config'

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const articulosList = createAsyncThunk(
    'articulos/articulosList',
    async (data, {dispatch}) => {                    
        const  res = await HttpGet(`articulos?pagination[page]=${data.page}&pagination[pageSize]=${env.pageSize}&sort[0]=id`, {dispatch})   
        return res        
    }
)

export const articulosCreate = createAsyncThunk(
    'articulos/articulosCreate',
    async (data, {dispatch}) => {    
        const params = {
            data: {...data}
        }          
        // await timeout(3000);
        const  res = await HttpPost(`articulos`, params, dispatch)   
        return res        
    }
)

export const articulosUpdate = createAsyncThunk(
    'articulos/articulosUpdate',
    async (data, {dispatch}) => {            
        const params = {
            data: {...data}
        }          
        // await timeout(3000);
        const  res = await HttpPut(`articulos/${data.id}`, params, dispatch)   
        return res        
    }
)

export const articulosGet = createAsyncThunk(
    'articulos/articulosGet',
    async (id, {dispatch}) => {            
        // await timeout(3000);
        const  res = await HttpGet(`articulos/${id}?populate=%2A`, {dispatch})   
        return res        
    }
)

export const articulosDelete = createAsyncThunk(
    'articulos/articulosDelete',
    async (id, {dispatch}) => {            
        // await timeout(3000);
        const  res = await HttpDelete(`articulos/${id}`, {dispatch})   
        return res        
    }
)

