import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    number: "",
    message: "",
    status: false
}

export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    async (values, thunkAPI) => {
        const auth = thunkAPI.getState().auth
        console.log(auth);
        const response = await axios.post(`https://api.green-api.com/waInstance${auth.id}/sendMessage/${auth.apiTocken}`, {
            chatId: `${values.number}@c.us`,
            message: `${values.message}`,
        }
        )
        return response.data
    }
)

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addCase(sendMessage.fulfilled, (state, action) => {
            console.log("da");
            state.status = true;
        })
        builder.addCase(sendMessage.pending, (state, action) => {
            console.log("wait", action.payload);
        })
        builder.addCase(sendMessage.rejected, (state, action) => {
            console.log("error", action);
            state.status = false;

        })
    }
})
export const { } = chatSlice.actions

export default chatSlice.reducer