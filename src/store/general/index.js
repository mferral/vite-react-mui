import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    snackbar: true,
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        openSnackbar: (state) => {            
            state.snackbar = true            
        },
        closeSnakbar: (state) => {
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