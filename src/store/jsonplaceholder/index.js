import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from './thunk'

const initialState = {
    list: [],
    counter: 0,
    loading: false,
}

const jsonplaceholderSlice = createSlice({
    name: 'jsonplaceholder',
    initialState,
    extraReducers: {        
        [getPosts.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.list = payload
        },
    },
})
export default jsonplaceholderSlice.reducer;