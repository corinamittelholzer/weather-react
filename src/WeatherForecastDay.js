import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="Forecast-day">{day()}</div>
      <img
        className="Forecast-icon"
        src={`/images/${props.data.weather[0].icon}.svg`}
        alt={props.data.weather[0].description}
      />
      <div className="ForecastTemperature">
        <span className="ForecastTemperature-max">
          {Math.round(props.data.temp.max)}°{" "}
        </span>
        <span className="ForecastTemperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
