import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      imgSrc: `/images/${response.data.weather[0].icon}.svg`,
      coord: response.data.coord,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "833c266388856a77756df0737bbad0be";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row mt-3">
            <div className="col-8">
              <input
                type="search"
                className="form-control form-control-lg"
                placeholder="Enter city name"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-4 d-grid">
              <button
                type="submit"
                value="search"
                className="search-button btn btn-danger btn-lg"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo info={weatherData} />
      </div>
    );
  } else {
    search();
    return <p>"Loading..."</p>;
  }
}
