import { createAsyncThunk } from '@reduxjs/toolkit'
import { HttpPostMedia } from '@/core/http'

export const uploadFile = createAsyncThunk(
    'uploads/uploadFile',
    async (data, {dispatch}) => {                    
        let formData = new FormData();
        formData.append('files', data);
        const  res = await HttpPostMedia('upload', formData, dispatch)   
        return res
        
    }
)
