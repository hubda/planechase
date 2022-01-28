import CardDisplay from './card-display/CardDisplay.js';
import Controls from './controls/Controls.js';
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Controls/>
                <CardDisplay/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))