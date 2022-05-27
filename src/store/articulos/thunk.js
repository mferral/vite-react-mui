import { createAsyncThunk } from '@reduxjs/toolkit'

export const articulosList = createAsyncThunk(
    'articulos/articulosList',
    async () => {        
        const res = await fetch(`${import.meta.env.VITE_HOST}articulos`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },            
            }).then((data) => {
                if (data.status == 401) window.location.href ='/login'
                return data.json()
            })               
        
        return res
    }
)
