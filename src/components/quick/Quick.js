import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as gameActions from '../../actions/gameActions';
import * as roundActions from '../../actions/roundActions';
import * as timerActions from '../../actions/timerActions';
import * as pauseActions from '../../actions/pauseActions';
import * as phaseActions from '../../actions/phaseActions';
import * as deckActions from '../../actions/deckActions';
import * as remainingCardsActions from '../../actions/remainingCardsActions';
import Card from '../card/Card';
import Cards from '../card/Cards';
import CardWrapper from '../core/CardWrapper';
import QuickIntro from './QuickIntro';
import QuickPass from './QuickPass';
import QuickPause from './QuickPause';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';

class Quick extends React.Component {
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
    }

    startRound() {
        this.props.actions.startRound();
        this.props.actions.timerStart();
    }
    render() {
        const card = {
            title: Cards[this.props.remainingCards[0]].title,
            clue: Cards[this.props.remainingCards[0]].clue,
            category: Cards[this.props.remainingCards[0]].category,
            categoryStyle: {color: Cards[this.props.remainingCards[0]].color},
            score: Cards[this.props.remainingCards[0]].score,
            scoreStyle: {background: Cards[this.props.remainingCards[0]].color}
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
                                                <CardWrapper key={'CardWrapper-' + this.props.remainingCards[0]} cardStyle={this.props.style}>
                                                    <Card key={'Card-' + this.props.remainingCards[0]} card={card} />
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
                                                <CardWrapper key={'CardWrapper-' + this.props.remainingCards[0]} cardStyle={this.props.style}>
                                                    <Card key={'Card-' + this.props.remainingCards[0]} card={card} />
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
                                case 2:
                                    return (
                                        <CardWrapper key={'QuickPass'} cardStyle={this.props.style}>
                                            <h1>Deck Empty</h1>
                                        </CardWrapper>
                                    );
                            }
                        }
                    }
                )()
            }
            </Transition>
        );
    }
}

Quick.propTypes = {
    style: PropTypes.object,
    remainingCards: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    inRound: PropTypes.bool.isRequired,
    phase: PropTypes.number.isRequired,
    redTeam: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        remainingCards: state.remainingCards,
        inRound: state.inRound,
        phase: state.phase,
        redTeam: state.redTeam,
        isPaused: state.isPaused
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, gameActions, roundActions, phaseActions, timerActions, pauseActions, deckActions, remainingCardsActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quick);
