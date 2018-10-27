import React, { Component } from "react";
import MainApp from "./componentes/App";
import "./styles/main.css";

class App extends Component {
  render() {
    return (
      <div className="App col-xs-12">
        <MainApp />
      </div>
    );
  }
}

export default App;
