import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    id: "",
    apiTocken: "",
    auth: false
}

export const fetchUserById = createAsyncThunk(
    'auth/fetchAuthStatus',
    async (values, thunkAPI) => {
        const response = await axios.get(`https://api.green-api.com/waInstance${values.id}/getStateInstance/${values.apiToken}`)
        return response.data
    }
)
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            console.log("da");
            console.log(action);
            state.id = action.meta.arg.id
            state.apiTocken = action.meta.arg.apiToken
            state.auth = true
        })
        builder.addCase(fetchUserById.pending, (state, action) => {
            console.log("wait", action);
            state.auth = false
        })
        builder.addCase(fetchUserById.rejected, (state, action) => {
            console.log("error");
            state.auth = false
        })
    }
})
export const { } = authSlice.actions

export default authSlice.reducer