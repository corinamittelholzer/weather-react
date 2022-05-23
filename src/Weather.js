import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      day: "Monday",
      time: "10:00",
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
        <div className="card mt-3 mb-3">
          <div className="row">
            <div className="col-5">
              <div className="card-body info">
                <h1>{weatherData.city}</h1>
                <h2>{weatherData.day}</h2>
                <p className="card-text">
                  <span>last updated {weatherData.time}</span>
                  <br />
                  <br />
                  <span>Humidity: {weatherData.humidity} %</span>
                  <br />
                  <span>Wind: {weatherData.windspeed} Km/h</span>
                </p>
              </div>
            </div>
            <div className="col-7">
              <div className="card-body">
                <p className="current-weather-description">
                  {weatherData.description}
                </p>
                <img
                  className="current-icon"
                  src={weatherData.imgSrc}
                  alt={weatherData.description}
                />
                <p className="temperature">
                  <span className="current-temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="units">
                    <a href="/" className="change-unit active">
                      °C{" "}
                    </a>
                    |
                    <a href="/" className="change-unit">
                      °F
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "833c266388856a77756df0737bbad0be";
    let city = "Porto";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <p>"Loading..."</p>;
  }
}
