var React = require("react");
var ReactDOM = require("react-dom");
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
            <h1>Hello world!</h1>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
