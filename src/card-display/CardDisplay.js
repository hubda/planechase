import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './CardDisplay.css'

class CardDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardList: [],
            shuffledCardList: [],
            shownCards: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.makeDecks();
    }

    importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('../img/cards', '')] = r(item); });
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
        const images = this.importAll(require.context('../img/cards', false, /\.(png|jpe?g|svg)$/));
        const cardImages = [];

        Object.keys(images).forEach(key => {
            cardImages.push(images[key]);
        });

        const tempDeck = cardImages;
        const shownCards = this.state.shownCards;
        shownCards.push(tempDeck.pop());
        this.shuffleDeck(tempDeck);

        this.state.cardList = cardImages;
        this.state.shuffledCardList = tempDeck;
        // this.setState({
        //     cardList: cardImages,
        //     shuffledCardList: tempDeck
        // });
    }

    render() {
        console.log('rendering card');
        const cardToShow = this.state.shownCards[this.state.shownCards.length - 1];

        return (
            <div className="Card">
                {/*<img src={this.state.shownCards}*/}
                     {/*className="card-img"*/}
                     {/*alt="pic"*/}
                     {/*onClick={this.handleClick()}*/}
                {/*/>*/}
                <img key={Date.now()}
                     src={cardToShow}
                     className="card-img"
                     alt="pic"
                     onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default CardDisplay;