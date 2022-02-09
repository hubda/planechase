import CardDisplay from './card-display/CardDisplay.js';
import Controls from './controls/Controls.js';
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {

  constructor(props) {
    super(props);

    const stateVars = this.makeDecks();

    this.state = {
      fullCardList: stateVars.fullCardList,
      shuffledDeck: stateVars.shuffledDeck,
      discardDeck: stateVars.discardDeck
    };

    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handlePutOnBottom = this.handlePutOnBottom.bind(this);
  }

  makeDecks() {
    console.log('making decks');
    const images = this.importAll(require.context('./img/planes', false, /\.(png|jpe?g|svg)$/));
    const fullCardList = [];
    const discardDeck = [];

    Object.keys(images).forEach(key => {
      fullCardList.push(images[key]);
    });

    const shuffledDeck = this.shuffleDeck(fullCardList.slice());

    return {
      fullCardList: fullCardList,
      shuffledDeck: shuffledDeck,
      discardDeck: discardDeck
    };
  }

  importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./img/planes', '')] = r(item); });
    return images;
  }

  handleCardClick() {
    console.log('handleCardClick');
    const discardDeck = this.state.discardDeck.splice(0, this.state.discardDeck.length);
    const shuffledDeck = this.state.shuffledDeck.splice(0, this.state.shuffledDeck.length);
    discardDeck.push(shuffledDeck.pop());

    this.setState({
      discardDeck: discardDeck,
      shuffledDeck: shuffledDeck
    });
  }

  shuffleDeck(deck) {
    console.log('shuffleDeck');
    for (var i = deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }

    return deck;
  }

  handleBack() {
    console.log('handleBack');
    // put card from discard pile back on top of shuffled deck
    const discardDeck = this.state.discardDeck.splice(0, this.state.discardDeck.length);
    const shuffledDeck = this.state.shuffledDeck.splice(0, this.state.shuffledDeck.length);

    shuffledDeck.push(discardDeck.pop());
    this.setState({
      discardDeck: discardDeck,
      shuffledDeck: shuffledDeck
    });
  }

  handlePutOnBottom() {
    console.log('handlePutOnBottom');
    // put card from top of shuffled deck on bottom
    const shuffledDeck = this.state.shuffledDeck.splice(0, this.state.shuffledDeck.length);
    const newShuffledDeck = [shuffledDeck.pop()];

    shuffledDeck.forEach(card => {
      newShuffledDeck.push(card);
    });

    this.setState({
      shuffledDeck: newShuffledDeck
    });
  }

  render() {
    return (
      <div className="Container">
        <div className="Controls-Container Component">
          <Controls
            handleCardClick={this.handleCardClick}
            handleBack={this.handleBack}
            handlePutOnBottom={this.handlePutOnBottom}/>
        </div>
        <div className="Display-Container Component">
          <CardDisplay
            key={Date.now()}
            cardToShow={this.state.shuffledDeck[this.state.shuffledDeck.length - 1]}
            handleCardClick={this.handleCardClick}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))