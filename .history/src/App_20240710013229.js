import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import Navbar from './Components/Navbar';
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar title="AshWea☂her"/>
      <div className="container col-xs-12 col-sm-6 col-md-8">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        | Developed by{" "}
        <a target="_blank" href="https://www.google.com/">
         Ashar Azeem Ali
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.openai.com/">
          WeatherAPI
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;