import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      imgSrc: "/images/02d.svg",
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row mt-3">
            <div className="col-6">
              <input
                type="search"
                className="form-control form-control-lg"
                placeholder="Enter city name"
                autoComplete="off"
                autoFocus="on"
              />
            </div>
            <div className="col-3 d-grid">
              <button
                type="submit"
                value="search"
                className="search-button btn btn-danger btn-lg"
              >
                Search
              </button>
            </div>
            <div className="col-3 d-grid">
              <button
                type="submit"
                value="search"
                className="current-button btn btn-success btn-lg"
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo info={weatherData} />
      </div>
    );
  } else {
    const apiKey = "833c266388856a77756df0737bbad0be";
    let city = props.defaultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <p>"Loading..."</p>;
  }
}
