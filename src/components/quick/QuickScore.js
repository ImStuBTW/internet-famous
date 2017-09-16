import React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FitText from 'react-fittext';
import CardWrapper from '../core/CardWrapper';
import * as gameActions from '../../actions/gameActions';
import * as phaseActions from '../../actions/phaseActions';
import * as roundActions from '../../actions/roundActions';
import * as timerActions from '../../actions/timerActions';
import * as teamActions from '../../actions/teamActions';
import * as redScoreActions from '../../actions/redScoreActions';
import * as blueScoreActions from '../../actions/blueScoreActions';
import * as remainingCardsActions from '../../actions/remainingCardsActions';
import * as instructionsActions from '../../actions/instructionsActions';
import * as blueCardActions from '../../actions/blueCardActions';
import * as bluePassActions from '../../actions/bluePassActions';
import * as blueTempScoreActions from '../../actions/blueTempScoreActions';
import * as redCardActions from '../../actions/redCardActions';
import * as redPassActions from '../../actions/redPassActions';
import * as redTempScoreActions from '../../actions/redTempScoreActions';

class QuickScore extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.begin = this.begin.bind(this);
    }

    begin() {
        if(this.props.phase === 3) {
            this.props.actions.endGame();
            this.props.actions.nextPhase();
        }
        else {
            this.props.actions.zeroBlueCard();
            this.props.actions.zeroBluePass();
            this.props.actions.zeroBlueTempScore();
            this.props.actions.zeroRedCard();
            this.props.actions.zeroRedPass();
            this.props.actions.zeroRedTempScore();
            this.props.actions.switchTeam();
            this.props.actions.loadAndShuffleCards();
            this.props.actions.timerReset();
            this.props.actions.instructionsCleared();
            this.props.actions.nextPhase();
        }
    }

    render() {
        let button = null;
        let firstBlock = '';
        let secondBlock = '';
        let thirdBlock = '';

        if(this.props.redTeam){
            firstBlock = <p>Well done <span className="red-team">Red Team</span>! You correctly guessed {this.props.redCard} cards for a total of {this.props.redTempScore} points this round! It looks like you only had to pass on {this.props.redPass} cards.</p>;
            secondBlock = <p>Meanwile, the <span className="blue-team">Blue Team</span> correctly guessed {this.props.blueCard} cards for a total of {this.props.blueTempScore} points. They had to pass on {this.props.bluePass} cards this round.</p>;
        }
        else {
            firstBlock = <p>Well done <span className="blue-team">Blue Team</span>! You correctly guessed {this.props.blueCard} cards for a total of {this.props.blueTempScore} points this round! It looks like you only had to pass on {this.props.bluePass} cards.</p>;
            secondBlock = <p>Meanwile, the <span className="red-team">Red Team</span> correctly guessed {this.props.redCard} cards for a total of {this.props.redTempScore} points. They had to pass on {this.props.redPass} cards this round.</p>;
        }

        if(this.props.phase === 3) {
            thirdBlock = <p><strong>Good game!</strong></p>;
            button = <FitText compressor={1.6}><a onClick={this.begin} role="button" className="btn btn-primary btn-lg btn-block">Return This Phone To Its Owner</a></FitText>;
        }
        else {
            thirdBlock = <p><strong>Ready for the next round?</strong></p>;
            button = <FitText compressor={1.6}><a onClick={this.begin} role="button" className="btn btn-primary btn-lg btn-block">Pass Me To The {!this.props.redTeam ? <span>Red Team</span> : <span>Blue Team</span>}</a></FitText>;
        }

        return (
            <div className="menu">
                <div className="menu-section score-top">
                    <FitText compressor={0.8}><h2>Round Over!</h2></FitText>
                </div>
                <div className="menu-section score-middle">
                    <div className="scoreboard">
                        <FitText compressor={1.5}>
                            <div className="scoreboard-row">
                                <div className="scoreboard-header scoreboard-red-header">Red</div>
                                <div className="scoreboard-header scoreboard-blue-header">Blue</div>
                            </div>
                        </FitText>
                        <FitText compressor={0.5}>
                            <div className="scoreboard-row">
                                <div className="scoreboard-score scoreboard-red-score">{this.props.redScore}</div>
                                <div className="scoreboard-score scoreboard-blue-score">{this.props.blueScore}</div>
                            </div>
                        </FitText>
                    </div>
                    <FitText compressor={2}>{firstBlock}</FitText>
                    <FitText compressor={2}>{secondBlock}</FitText>
                    <FitText compressor={1.5}>{thirdBlock}</FitText>
                </div>
                <div className="menu-section score-bottom">
                    {button}
                </div>
            </div>
        );
    }
}

QuickScore.propTypes = {
    actions: PropTypes.object.isRequired,
    phase: PropTypes.number.isRequired,
    redTeam: PropTypes.bool.isRequired,
    redScore: PropTypes.number.isRequired,
    blueScore: PropTypes.number.isRequired,
    blueCard: PropTypes.number.isRequired,
    bluePass: PropTypes.number.isRequired,
    blueTempScore: PropTypes.number.isRequired,
    redCard: PropTypes.number.isRequired,
    redPass: PropTypes.number.isRequired,
    redTempScore: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        phase: state.phase,
        redTeam: state.redTeam,
        redScore: state.redScore,
        blueScore: state.blueScore,
        blueCard: state.blueCard,
        bluePass: state.bluePass,
        blueTempScore: state.blueTempScore,
        redCard: state.redCard,
        redPass: state.redPass,
        redTempScore: state.redTempScore
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, gameActions, phaseActions, roundActions, timerActions, remainingCardsActions, instructionsActions, teamActions, redScoreActions, blueScoreActions, bluePassActions, blueCardActions, blueTempScoreActions, redPassActions, redCardActions, redTempScoreActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickScore);
