import React from "react";
import { useSelector } from "react-redux";

const WeatherList = () => {

    const { cities, loading, error } = useSelector((state) => state.weatherReducer)

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {cities.length > 0 ? (
                cities.map((city, idx) => (
                    <div key={idx}>
                        <h3>{city.name}</h3>
                        <p>Temperature: {city.current_condition[0].temp_C}°C</p>
                        <p>Weather: {city.current_condition[0].weatherDesc[0].value}</p>
                    </div>
                ))
            ) : (
                <p>No cities found</p>
            )}
        </div>
    );
};

export default WeatherList
