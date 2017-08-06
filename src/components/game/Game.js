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
import { spring } from 'react-motion';

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
        const card = {
            title: Cards[this.props.deck[0]].title,
            clue: Cards[this.props.deck[0]].clue,
            category: Cards[this.props.deck[0]].category,
            categoryStyle: {color: Cards[this.props.deck[0]].color},
            score: Cards[this.props.deck[0]].score,
            scoreStyle: {background: Cards[this.props.deck[0]].color}
        };

        return (
            <Transition
                runOnMount
                component="span"
                appear={{opacity: 0, translateX: 100}}
                enter={{opacity: spring(1, { stiffness: 330, damping: 30 }), translateX: spring(0, { stiffness: 330, damping: 30 })}}
                leave={{opacity: spring(0, { stiffness: 330, damping: 30 }), translateX: spring(-100, { stiffness: 330, damping: 30 })}}
            >

                <CardWrapper key={'CardWrapper-' + this.props.deck[0]} cardStyle={this.props.style}>
                    <Card key={'Card-' + this.props.deck[0]} card={card} />
                </CardWrapper>

            </Transition>
        );
    }
}

Game.propTypes = {
    style: PropTypes.object,
    deck: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        deck: state.deck
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, gameActions, roundActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
