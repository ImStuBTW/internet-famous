import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import Cards from '../card/Cards';
import CardWrapper from '../core/CardWrapper';

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const page = "ab";
        const pageLetter = page[Math.floor(Math.random() * page.length)];
        const cardNumber = Math.floor(Math.random() * 9) + 1;

        const card = {
            title: Cards[pageLetter + cardNumber].title,
            clue: Cards[pageLetter + cardNumber].clue,
            category: Cards[pageLetter + cardNumber].category,
            categoryStyle: {color: Cards[pageLetter + cardNumber].color},
            score: Cards[pageLetter + cardNumber].score,
            scoreStyle: {background: Cards[pageLetter + cardNumber].color}
        };

        return (
            <Card key={pageLetter + cardNumber} card={card} />
        );
    }
}

Game.propTypes = {
    cardStyle: PropTypes.object
};

export default Game;
