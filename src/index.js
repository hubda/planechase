import CardDisplay from './card-display/CardDisplay.js';
import Controls from './controls/Controls.js';
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Controls-Container Component">
          <Controls/>
        </div>
        <div className="Display-Container Component">
          <CardDisplay/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))