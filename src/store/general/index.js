import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    snackbar: false,
    snackText: '',
    snackType: '',
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
})

// Action creators are generated for each case reducer function
export const {
    openSnackbar,
    closeSnakbar,    
} = generalSlice.actions

export default generalSlice.reducer