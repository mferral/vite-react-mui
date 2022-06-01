import { createSlice } from '@reduxjs/toolkit'
import { articulosList, articulosCreate, articulosGet, articulosUpdate } from './thunk'

const initialState = {
    list: [],
    pagination: {
        page: 1,
        total: 0,
        pageSize: 0
    },
    page: 1,
    result: {},
    loading: true,
}

const articulosSlice = createSlice({
    name: 'articulos',
    initialState,
    extraReducers: {        
        [articulosList.fulfilled]: (state, { payload }) => {
            state.loading = false            
            state.list = payload.data
            state.pagination = payload.meta.pagination
        },
        [articulosList.rejected]: (state) => {
            state.loading = false
        },
        [articulosGet.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.result = payload.data
        },
        [articulosGet.pending]: (state) => {
            state.loading = true
        },  
        // [articulosCreate.fulfilled]: (state, { payload }) => {
        //     state.loading = false                        
        // },
        // [articulosCreate.pending]: (state) => {
        //     state.loading = true
        // },     
    },
})
export default articulosSlice.reducer;