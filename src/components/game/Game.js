import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as gameActions from '../../actions/gameActions';
import * as roundActions from '../../actions/roundActions';
import Card from '../card/Card';
import Cards from '../card/Cards';
import CardWrapper from '../core/CardWrapper';
import Transition from 'react-motion-ui-pack';

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.startGame = this.startGame.bind(this);
        this.startRound = this.startRound.bind(this);
    }

    componentDidMount() {
        this.startGame();
        this.startRound();
    }

    startGame() {
        this.props.actions.startGame();
    }

    startRound() {
        this.props.actions.startRound();
    }

    render() {
        const pageLetter = this.props.card[0];
        const cardNumber = this.props.card[1];

        const card = {
            title: Cards[pageLetter + cardNumber].title,
            clue: Cards[pageLetter + cardNumber].clue,
            category: Cards[pageLetter + cardNumber].category,
            categoryStyle: {color: Cards[pageLetter + cardNumber].color},
            score: Cards[pageLetter + cardNumber].score,
            scoreStyle: {background: Cards[pageLetter + cardNumber].color}
        };

        return (
            <Transition
                component={false}
                appear={{
                    opacity: 0,
                    translateX: 100
                }}
                enter={{
                    opacity: 1,
                    translateX: 0
                }}
                leave={{
                    opacity: 0,
                    translateX: -100
                }}
                >
                <Card key={pageLetter + cardNumber} card={card} />
            </Transition>
        );
    }
}

Game.propTypes = {
    cardStyle: PropTypes.object,
    card: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        card: state.card
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, gameActions, roundActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
