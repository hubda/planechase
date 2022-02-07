import React, {Component} from 'react'
import blank from '../img/symbols/WHITESPACE.png'
import './CardDisplay.css'

class CardDisplay extends Component {
    constructor(props) {
        super(props);
        const stateVars = this.makeDecks();

        this.state = {
            cardList: stateVars.cardList,
            shuffledCardList: stateVars.shuffledCardList,
            shownCards: stateVars.shownCards
        };

        this.handleClick = this.handleClick.bind(this);
    }

    importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('../img/planes', '')] = r(item); });
        return images;
    }

    shuffleDeck(deck) {
        console.log('shuffleDeck');
        for (var i = deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
    }

    handleClick() {
        console.log('handleClick');
        const discardPile = this.state.shownCards;
        const shuffledCardList = this.state.shuffledCardList;
        discardPile.push(shuffledCardList.pop());

        this.setState({
            shownCards: discardPile
        });
    }

    makeDecks() {
        console.log('making decks');
        const images = this.importAll(require.context('../img/planes', false, /\.(png|jpe?g|svg)$/));
        const cardImages = [];
        const tempDeck = cardImages;
        const shownCards = [];

        Object.keys(images).forEach(key => {
            cardImages.push(images[key]);
        });

        this.shuffleDeck(tempDeck);
        shownCards.push(tempDeck.pop());

        return {
            cardList: cardImages,
            shuffledCardList: tempDeck,
            shownCards: shownCards
        };
    }

    render() {
        console.log('rendering card');
        const cardToShow = this.state.shownCards[this.state.shownCards.length - 1];

        return (
            <div className="Card">
                <img key={Date.now()}
                     src={cardToShow}
                     className="card-img"
                     alt={blank}
                     onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default CardDisplay;