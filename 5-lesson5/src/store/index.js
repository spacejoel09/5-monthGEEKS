import {configureStore} from "@reduxjs/toolkit";
import {postsInfo} from "./PostsSlice";

export const store = configureStore({
  reducer: {
    postsInfo
  }



 })

    
