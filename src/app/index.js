import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

require("./index.css");


// State
// Lifecycle events
// UI

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Nuzair"} age={21} />
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app")
);
