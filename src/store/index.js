import { configureStore } from '@reduxjs/toolkit'
import generalReducer from './general'
import jsonplaceholderReducer from './jsonplaceholder'
import authReducer from './auth'
import articulosReducer from './articulos'
import uploadsReducer from './uploads'
export const store = configureStore({
    reducer: {
        general: generalReducer,
        jsonplaceholder: jsonplaceholderReducer,
        auth: authReducer,
        articulos: articulosReducer,
        uploads: uploadsReducer
    },
})