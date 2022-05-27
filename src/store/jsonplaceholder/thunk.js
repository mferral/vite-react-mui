import { createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
    'jsonplaceholder/getPosts',
    async (thunkAPI) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json())    
        return res
    }
)
