import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faThumbtack,
  faThermometer,
  faFeatherAlt
} from "@fortawesome/free-solid-svg-icons";

const Weather = props => (
  <div className="pl-5">
    {props.city && (
      <p className="text h1 pl-5 pt-5 ">
        <FontAwesomeIcon className="icon h1 " icon={faThumbtack} />
        Location:.... <span className="h1 text">{props.city}</span>
      </p>
    )}
    {props.temp && (
      <p className="text h1 pl-5  pt-5">
        <FontAwesomeIcon className="icon h1 " icon={faThermometer} />
        Temperature:....<span className="h1 text">{props.temp}°C </span>
      </p>
    )}

    {props.humidity && (
      <p className="text h1 pl-5  pt-5">
        <FontAwesomeIcon className="icon h1 " icon={faFeatherAlt} />
        Humidity:.... <span className=" h1 text ml-3">{props.humidity}%</span>
      </p>
    )}
    {props.description && (
      <p className="text h1 pl-4  pt-5">
        <FontAwesomeIcon className="icon h1" icon={faCloud} />
        Conditions:.... <span className=" h1 text">{props.description}</span>
      </p>
    )}
  </div>
);

export default Weather;
