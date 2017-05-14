import React from 'react';
import PropTypes from 'prop-types';
import FitText from 'react-fittext';
import Cards from './Cards';

class Card extends React.Component {
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
            <div className="card">
                <div className="card-section card-top">
                    <FitText compressor={0.8}><h1 className="title">{card.title}</h1></FitText>
                </div>
                <div className="card-section card-middle">
                    <FitText compressor={1.6}><p className="clue">{card.clue}</p></FitText>
                </div>
                <div className="card-section card-bottom">
                    <hr className="line" />

                    <FitText compressor={2}><p className="category" style={card.categoryStyle}>{card.category}</p></FitText>

                    <div className="points" style={card.scoreStyle}>
                        <FitText compressor={0.4}><p className="score">{card.score}</p></FitText>
                        <FitText compressor={0.7}><p className="point">POINT</p></FitText>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
};

export default Card;
