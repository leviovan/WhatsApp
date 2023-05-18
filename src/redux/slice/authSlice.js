import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    id: "",
    apiTocken: "",
}

export const fetchUserById = createAsyncThunk(
    'users/fetchAuthStatus',
    async (values, thunkAPI) => {
        console.log(values);
        const response = await axios.get('https://api.green-api.com/waInstance{va}/getStateInstance/3c3951fdc67a420b8b7e8a5ce7f657c3aa2d45e3951343e28d')
        return response.data
    }
)
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            console.log("da");
        })
        builder.addCase(fetchUserById.pending, (state, action) => {
            console.log("wait");
        })
        builder.addCase(fetchUserById.rejected, (state, action) => {
            console.log("error");
        })
    }
})

// Action creators are generated for each case reducer function
export const { } = authSlice.actions

export default authSlice.reducer