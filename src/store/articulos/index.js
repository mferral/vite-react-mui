import { createSlice } from '@reduxjs/toolkit'
import { articulosList } from './thunk'

const initialState = {
    list: [],    
    loading: true,
}

const articulosSlice = createSlice({
    name: 'articulos',
    initialState,
    extraReducers: {        
        [articulosList.fulfilled]: (state, { payload }) => {
            state.loading = false            
            state.list = payload
        },
        [articulosList.rejected]: (state) => {
            state.loading = false
            console.log('algo salio mal');
        },
    },
})
export default articulosSlice.reducer;