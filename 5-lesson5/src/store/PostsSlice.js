
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
const postsSlice = createSlice({
    name: "postsSlice",
    initialState: {
        title: 'old title'
    },
    reducers: {
        postsInfo: (state, action) => {
            state.title = "new title";

        },
        withParams:(state, action) => {
            state.title = action.payload
        }
    }

})


export const { postsInfo, withParams } = postsSlice.actions;

export default postsSlice.reducer