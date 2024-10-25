import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city) => {
        const response = await axios.get(`https://wttr.in/${city}?format=j1`);
        return {city, data: response.data}
    }
)

const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState: {
        cities: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.cities.push({
                    name: action.payload.city,
                    ...action.payload.data
                })
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.loading = false;
                state.error = 'Failed to fetch weather data'
            })
    }
})

export default weatherSlice.reducer
