import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Zürich",
    day: "Monday",
    time: "10:00",
    humidity: 80,
    windspeed: 3,
    description: "cloudy",
    imgSrc: "/images/02d.svg",
    temperature: 19,
  };

  return (
    <div className="Weather">
      <form>
        <div className="row mt-3">
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter city name"
              id="cityname-input"
              autoComplete="off"
            />
          </div>
          <div className="col-3 d-grid">
            <button
              type="submit"
              className="search-button btn btn-danger btn-lg"
            >
              Search
            </button>
          </div>
          <div className="col-3 d-grid">
            <button
              type="submit"
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
                alt="Illustration of current weather"
              />
              <p className="temperature">
                <span className="current-temperature">
                  {weatherData.temperature}
                </span>
                <span className="units">
                  <a href="#" className="change-unit active">
                    °C{" "}
                  </a>
                  |
                  <a href="#" className="change-unit">
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
}
