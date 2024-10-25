import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'getPosts',
    async function (_, {dispatch}) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        dispatch(postsData(posts))
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        title: 'old title',
        posts: []
    },
    reducers: {
        postsInfo: (state, action) => {
            state.title = 'new title'
        },
        withParams: (state, action) => {
            state.title = action.payload
        },
        postsData: (state, action) => {
            state.posts = action.payload
        }
    }
})

export const { postsInfo, withParams, postsData } = postsSlice.actions

export default postsSlice.reducer
