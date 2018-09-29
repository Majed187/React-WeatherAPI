import React, { Component } from "react";
import Form from "./Form";
import Weather from "./Weather";

// Get the Api key and the base URL
const apiKey = "638df99df6885ac7bc3b947ac52d7719";
const baseURL = `http://api.openweathermap.org/data/2.5/`;

class App extends Component {
  state = {
    temp: null,
    ctiy: null,
    humidity: null,
    description: null,
    error: undefined
  };

  getWeather = async city => {
    const endPoint = `weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const data = await fetch(baseURL + endPoint);
      const parseData = await data.json();
      this.setState({
        temp: parseData.main.temp,
        city: parseData.name,
        humidity: parseData.main.humidity,
        description: parseData.weather.map(item => {
          return item.description;
        })
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="app col-sm-6 container">
        <h2 className=" h1 text-center text-white my-5">React Weather App</h2>
        <Form getWeather={this.getWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          humidity={this.state.humidity}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
