import { createSlice } from '@reduxjs/toolkit'
import { landing } from './thunk'
const initialState = {
    snackbar: false,
    snackText: '',
    snackType: '',
    loadingLanding: false,
    landing: {}
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        openSnackbar: (state, { payload }) => {
            state.snackText = payload.message
            state.snackType = payload.type
            state.snackbar = true            
        },
        closeSnakbar: (state) => {            
            state.snackText = ''
            state.snackbar = false
        },        
    },
    extraReducers: {   
        [landing.pending]: (state) => {
            state.loadingLanding = true
        },     
        [landing.fulfilled]: (state, { payload }) => {            
            state.loadingLanding = false            
            state.landing = payload.data.attributes
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    openSnackbar,
    closeSnakbar,    
} = generalSlice.actions

export default generalSlice.reducer