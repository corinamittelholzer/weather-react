import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <p className="temperature">
          <span className="current-temperature">
            {Math.round(props.celsius)}
          </span>
          <span className="units">
            <a href="/" className="change-unit active">
              °C{" "}
            </a>
            |
            <a href="/" onClick={convertToFahrenheit} className="change-unit">
              °F
            </a>
          </span>
        </p>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <p className="temperature">
          <span className="current-temperature">{Math.round(fahrenheit)}</span>
          <span className="units">
            <a
              href="/"
              onClick={convertToCelsius}
              className="change-unit"
              title="change to celsius"
            >
              °C{" "}
            </a>
            |
            <a
              href="/"
              className="change-unit active"
              title="change to fahrenheit"
            >
              °F
            </a>
          </span>
        </p>
      </div>
    );
  }
}
