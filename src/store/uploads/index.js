import { createSlice } from '@reduxjs/toolkit'
import { uploadFile } from './thunk'

const initialState = {
    loading: false,
}

const uploadSlice = createSlice({
    name: 'uploads',
    initialState,
    extraReducers: {   
        [uploadFile.pending]: (state) => {
            state.loading = true
        },     
        [uploadFile.fulfilled]: (state, { payload }) => {            
            state.loading = false
        },
    },
})
export default uploadSlice.reducer;