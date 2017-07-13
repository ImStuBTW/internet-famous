import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as gameActions from '../../actions/gameActions';
import * as roundActions from '../../actions/roundActions';
import * as timerActions from '../../actions/timerActions';
import * as pauseActions from '../../actions/pauseActions';
import * as deckActions from '../../actions/deckActions';
import * as cardActions from '../../actions/cardActions';
import Card from '../card/Card';
import Cards from '../card/Cards';
import CardWrapper from '../core/CardWrapper';
import QuickIntro from './QuickIntro';
import QuickPass from './QuickPass';
import QuickPause from './QuickPause';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            instructions: true
        };

        this.startGame = this.startGame.bind(this);
        this.startRound = this.startRound.bind(this);
    }

    componentDidMount() {
        this.startGame();
    }

    startGame() {
        this.props.actions.startGame();
        this.props.actions.randomDeck();
        this.props.actions.nextCard();
    }

    startRound() {
        this.props.actions.startRound();
        this.props.actions.timerStart();
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
                runOnMount
                component="span"
                appear={{opacity: 0, translateX: 100}}
                enter={{opacity: spring(1, { stiffness: 330, damping: 30 }), translateX: spring(0, { stiffness: 330, damping: 30 })}}
                leave={{opacity: spring(0, { stiffness: 330, damping: 30 }), translateX: spring(-100, { stiffness: 330, damping: 30 })}}
            >
            {
                (
                    () => {
                        if(this.props.isPaused) {
                            return (
                                <CardWrapper key={'Pause'} cardStyle={this.props.style}>
                                    <QuickPause />
                                </CardWrapper>
                            );
                        }
                        else {
                            switch(this.props.phase) {
                                case 0 :
                                    return (
                                        <CardWrapper key={'QuickIntro'} cardStyle={this.props.style}>
                                            <QuickIntro />
                                        </CardWrapper>
                                    );
                                case 1 :
                                    if(this.props.redTeam) {
                                        if(this.props.inRound) {
                                            return (
                                                <CardWrapper key={'CardWrapper-' + pageLetter + cardNumber} cardStyle={this.props.style}>
                                                    <Card key={'Card-' + pageLetter + cardNumber} card={card} />
                                                </CardWrapper>
                                            );
                                        }
                                        else {
                                            return (
                                                <CardWrapper key={'QuickPass'} cardStyle={this.props.style}>
                                                    <QuickPass />
                                                </CardWrapper>
                                            );
                                        }
                                    }
                                    else {
                                        if(this.props.inRound) {
                                            return (
                                                <CardWrapper key={'CardWrapper-' + pageLetter + cardNumber} cardStyle={this.props.style}>
                                                    <Card key={'Card-' + pageLetter + cardNumber} card={card} />
                                                </CardWrapper>
                                            );
                                        }
                                        else {
                                            return (
                                                <CardWrapper key={'QuickPass'} cardStyle={this.props.style}>
                                                    <QuickPass />
                                                </CardWrapper>
                                            );
                                        }
                                    }
                            }
                        }
                    }
                )()
            }
            </Transition>
        );
    }
}

Game.propTypes = {
    style: PropTypes.object,
    card: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    inRound: PropTypes.bool.isRequired,
    phase: PropTypes.number.isRequired,
    redTeam: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        card: state.card,
        inRound: state.inRound,
        phase: state.phase,
        redTeam: state.redTeam,
        isPaused: state.isPaused
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, gameActions, roundActions, timerActions, pauseActions, deckActions, cardActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
