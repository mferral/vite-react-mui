import { configureStore } from '@reduxjs/toolkit'
import jsonplaceholderReducer from './jsonplaceholder'
import authReducer from './auth'
import articulosReducer from './articulos'

export const store = configureStore({
    reducer: {
        jsonplaceholder: jsonplaceholderReducer,
        auth: authReducer,
        articulos: articulosReducer,
    },
})