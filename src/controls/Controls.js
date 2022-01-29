import React, {Component} from 'react'
import pw from '../img/symbols/PW.png'
import chaos from '../img/symbols/CHAOS.png'
import whitespace from '../img/symbols/whitespace.png'
import './Controls.css'

class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentResult: whitespace,
            count: 0
        };
        this.handleRoll = this.handleRoll.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleRoll() {
        console.log('handleRoll');
        const options = [pw, chaos, whitespace, whitespace, whitespace, whitespace];
        const randomIdx = Math.floor(Math.random() * options.length);
        const newResult = options[randomIdx];
        const newCount = this.state.count + 1;

        this.setState({
            currentResult: newResult,
            count: newCount
        });
    }

    handleReset() {
        console.log('handleReset');
        this.setState({
            count: 0
        });
    }

    render() {
        console.log('rendering buttons');
        const result = this.state.currentResult;
        const count = this.state.count;

        return (
            <div className="Controls">
                <div className="Buttons">
                    <button className="Roll" onClick={this.handleRoll}>Roll</button>
                    <button className="Reset" onClick={this.handleReset}>Reset</button>
                </div>
                <div className="Display">
                    <img key={Date.now()}
                         src={result}
                         className="result-img"
                         alt={whitespace}
                    />
                    <p>
                        <h2>{count}</h2>
                    </p>
                </div>

            </div>
        );
    }
}

export default Controls;