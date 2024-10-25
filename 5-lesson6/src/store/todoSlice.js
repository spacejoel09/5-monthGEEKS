import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        agents:[],
        filter: 'all'
    },
    reducers: {
    }
})

export const {addTask, setFilter, toggleTask, deleteTask} = todoSlice.actions

export default todoSlice.reducer