import { configureStore } from '@reduxjs/toolkit'
import generalReducer from './general'
import jsonplaceholderReducer from './jsonplaceholder'
import authReducer from './auth'
import articulosReducer from './articulos'

export const store = configureStore({
    reducer: {
        general: generalReducer,
        jsonplaceholder: jsonplaceholderReducer,
        auth: authReducer,
        articulos: articulosReducer,
    },
})