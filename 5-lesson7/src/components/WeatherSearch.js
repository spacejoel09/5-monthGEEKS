
import React from 'react';
import {useDispatch} from "react-redux";
import {fetchWeather} from "../redux/weatherSlice";


const WeatherSearch = () => {
    const [city,setCity] = React.useState('');
    const dispatch = useDispatch();

    console.log(city, "")

    const handleSearch = () => {
        if(city){
            dispatch(fetchWeather(city));
        }
    }

    return(
        <div>
            <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}></input>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default WeatherSearch