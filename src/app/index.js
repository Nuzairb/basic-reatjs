var React = require("react");
var ReactDOM = require("react-dom");

import { header } from "./components/Header";
import { Home } from "./components/Home";

require('./index.css');


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
            <Home/>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
