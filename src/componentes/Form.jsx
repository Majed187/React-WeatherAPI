import React, { Component } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Form extends Component {
  eventHandler = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    console.log(city);
    this.props.getWeather(city);
  };
  render() {
    return (
      <div className="container">
        <form
          className="form input-group input-group-lg my-5   "
          onSubmit={this.eventHandler}
        >
          <input
            type="text"
            className="form-control h4"
            placeholder="Enter your City "
            name="city"
            required
          />

          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary text-white"
              type="submit"
            >
              <FontAwesomeIcon className=" fa-spin" icon={faSpinner} />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
