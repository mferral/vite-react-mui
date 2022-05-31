import { createSlice } from '@reduxjs/toolkit'
import { articulosList } from './thunk'

const initialState = {
    list: [],
    pagination: {
        page: 1,
        total: 0,
        pageSize: 0
    },
    page: 1,
    loading: true,
}

const articulosSlice = createSlice({
    name: 'articulos',
    initialState,
    extraReducers: {        
        [articulosList.fulfilled]: (state, { payload }) => {
            state.loading = false
            console.log(payload.meta.pagination);
            state.list = payload.data
            state.pagination = payload.meta.pagination
        },
        [articulosList.rejected]: (state) => {
            state.loading = false
            console.log('algo salio mal');
        },
    },
})
export default articulosSlice.reducer;