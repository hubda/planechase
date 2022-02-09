import React, {Component} from 'react'
import blank from '../img/symbols/WHITESPACE.png'
import './CardDisplay.css'

class CardDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardToShow: props.cardToShow,
      handleCardClick: props.handleCardClick
    };
  }

  render() {
    return (
      <div className="Card">
        <img key={Date.now()}
           src={this.state.cardToShow}
           className="card-img"
           alt={blank}
           onClick={this.state.handleCardClick}
        />
      </div>
    );
  }
}

export default CardDisplay;