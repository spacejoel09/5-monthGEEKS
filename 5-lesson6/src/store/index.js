import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './PostsSlice'
import todoReducer from './todoSlice'

export const store = configureStore({
    reducer: {
        postsReducer,
        todoReducer
    },
})