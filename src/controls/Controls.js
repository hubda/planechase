import React, {Component} from 'react'
import Planeswalk from '../img/symbols/PW.png'
import Chaos from '../img/symbols/CHAOS.png'
import Blank from '../img/symbols/BLANK.png'
import Whitespace from '../img/symbols/WHITESPACE.png'
import './Controls.css'

class Controls extends Component {
  constructor(props) {
    super(props);

    this.options = [
      {
        name: 'Blank',
        image: Blank
      }, {
        name: 'Blank',
        image: Blank
      }, {
        name: 'Blank',
        image: Blank
      }, {
        name: 'Blank',
        image: Blank
      }, {
        name: 'Planeswalk',
        image: Planeswalk
      }, {
        name: 'Chaos',
        image: Chaos
      }
    ];

    this.state = {
      currentResult: this.options[0],
      count: 0
    };

    this.handleRoll = this.handleRoll.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleRoll() {
    console.log('handleRoll');
    const randomIdx = Math.floor(Math.random() * this.options.length);
    const newResult = this.options[randomIdx];
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

    return (
      <div className="Controls">
        <div className="Buttons">
          <button className="Button Roll" onClick={this.handleRoll}>Roll</button>
          <button className="Button Reset" onClick={this.handleReset}>Reset</button>
        </div>
        <div className="Display">
          <img key={Date.now()}
             src={this.state.currentResult.image}
             className="result-img"
             alt={Whitespace}
          />
          <p>
            <h4>Result: {this.state.currentResult.name}</h4>
          </p>
          <p>
            <h4># Rolls this turn</h4>
            <h4>Your next roll costs this much mana</h4>
            <h4>{this.state.count}</h4>
          </p>
        </div>
      </div>
    );
  }
}

export default Controls;