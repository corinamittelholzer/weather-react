import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className=" WeatherInfo">
      <div className="card mt-3 mb-3">
        <div className="row">
          <div className="col-5">
            <div className="card-body info">
              <h1>{props.info.city}</h1>
              <FormattedDate date={props.info.date} />
              <p className="card-text">
                <br />
                <span>Humidity: {props.info.humidity} %</span>
                <br />
                <span>Wind: {props.info.windspeed} Km/h</span>
              </p>
            </div>
          </div>
          <div className="col-7">
            <div className="card-body">
              <p className="current-weather-description">
                {props.info.description}
              </p>
              <img
                className="current-icon"
                src={props.info.imgSrc}
                alt={props.info.description}
              />
              <p className="temperature">
                <span className="current-temperature">
                  {Math.round(props.info.temperature)}
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
}
