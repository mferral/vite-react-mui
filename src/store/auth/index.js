import { createSlice } from '@reduxjs/toolkit'
import { login } from './thunk'

const initialState = {
    error: false,
    loading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {        
        [login.fulfilled]: (state, { payload }) => {            
            state.loading = false            
            if (payload.jwt) {                
                localStorage.setItem('token', payload.jwt)
                window.location.href ='/admin/dashboard'
            } else state.error = true            
        },
    },
})
export default authSlice.reducer;