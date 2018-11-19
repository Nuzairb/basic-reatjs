var React = require("react");
var ReactDOM = require("react-dom");
require('./index.css');

// State
// Lifecycle events
// UI

class App extends React.Component {
  render() {
    return (
      <div>
        Hellow World!
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
