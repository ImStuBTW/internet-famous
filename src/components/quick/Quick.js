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
import * as instructionsActions from '../../actions/instructionsActions';
import * as remainingCardsActions from '../../actions/remainingCardsActions';
import Card from '../card/Card';
import Cards from '../card/Cards';
import CardWrapper from '../core/CardWrapper';
import QuickIntro from './QuickIntro';
import QuickOutro from './QuickOutro';
import QuickInstructions from './QuickInstructions';
import QuickScore from './QuickScore';
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
        let card = {};
        if(this.props.remainingCards.length != 0) {
        card = {
            title: Cards[this.props.remainingCards[0]].title,
            clue: Cards[this.props.remainingCards[0]].clue,
            category: Cards[this.props.remainingCards[0]].category,
            categoryStyle: {color: Cards[this.props.remainingCards[0]].color},
            score: Cards[this.props.remainingCards[0]].score,
            scoreStyle: {background: Cards[this.props.remainingCards[0]].color}
        };
        }

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
                        // Always show the pause screen if the game is paused.
                        if(this.props.isPaused) {
                            return (
                                <CardWrapper key={'Pause'} cardStyle={this.props.style}>
                                    <QuickPause />
                                </CardWrapper>
                            );
                        }
                        // Otherwise, show the phase-specific cards.
                        else {
                            switch(this.props.phase) {
                                // Game Rules
                                case 0 :
                                    return (
                                        <CardWrapper key={'QuickIntro'} cardStyle={this.props.style}>
                                            <QuickIntro />
                                        </CardWrapper>
                                    );
                                case 1 :
                                case 2 :
                                case 3 :
                                    if(!this.props.instructions) {
                                        // Show Initial Round Instruction Card
                                        return (
                                            <CardWrapper key={'QuickPass'} cardStyle={this.props.style}>
                                                <QuickInstructions />
                                            </CardWrapper>
                                        );
                                    }
                                    else {
                                        // Otherwise, it's in the game.
                                        if(this.props.inRound) {
                                            // If it's in round, show a card.
                                            return (
                                                <CardWrapper key={'CardWrapper-' + this.props.remainingCards[0]} cardStyle={this.props.style}>
                                                    <Card key={'Card-' + this.props.remainingCards[0]} card={card} />
                                                </CardWrapper>
                                            );
                                        }
                                        else {
                                            if(this.props.remainingCards.length != 0) {
                                                // If it's out of a round but there are cards left, show the pass screen.
                                                return (
                                                    <CardWrapper key={'QuickPass'} cardStyle={this.props.style}>
                                                        <QuickPass />
                                                    </CardWrapper>
                                                );
                                            }
                                            else {
                                                // If the time's up and there's no cards left, show the end score screen.
                                                return (
                                                    <CardWrapper key={'QuickScore'} cardStyle={this.props.style}>
                                                        <QuickScore />
                                                    </CardWrapper>
                                                );
                                            }
                                        }
                                    }
                                default :
                                    // End game card.
                                    return (
                                        <CardWrapper key={'QuickOutro'} cardStyle={this.props.style}>
                                            <QuickOutro />
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
    isPaused: PropTypes.bool.isRequired,
    instructions: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        remainingCards: state.remainingCards,
        inRound: state.inRound,
        phase: state.phase,
        redTeam: state.redTeam,
        isPaused: state.isPaused,
        instructions: state.instructions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, gameActions, roundActions, phaseActions, timerActions, pauseActions, deckActions, remainingCardsActions, instructionsActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quick);
