import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as testActions from '../../actions/testActions';
import * as gameActions from '../../actions/gameActions';
import * as roundActions from '../../actions/roundActions';
import * as pauseActions from '../../actions/pauseActions';
import * as teamActions from '../../actions/teamActions';
import * as redScoreActions from '../../actions/redScoreActions';
import * as blueScoreActions from '../../actions/blueScoreActions';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router';
import FitText from 'react-fittext';
import CardWrapper from '../core/CardWrapper';

class TestPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.incriment = this.incriment.bind(this);
        this.incrimentScore = this.incrimentScore.bind(this);
        this.toggleGameOn = this.toggleGameOn.bind(this);
        this.toggleRound = this.toggleRound.bind(this);
        this.pauseRound = this.pauseRound.bind(this);
        this.toggleTeam = this.toggleTeam.bind(this);
    }

    incriment() {
        this.props.actions.addTest();
    }

    incrimentScore() {
        if(this.props.redTeam) {
            this.props.actions.addRed();
        }
        else {
            this.props.actions.addBlue();
        }
    }

    toggleGameOn() {
        if(this.props.gameOn) {
            this.props.actions.endGame();
        }
        else {
            this.props.actions.startGame();
        }
    }

    toggleRound() {
        if(this.props.inRound) {
            this.props.actions.endRound();
        }
        else {
            this.props.actions.startRound();
        }
    }

    toggleTeam() {
        this.props.actions.switchTeam();
    }

    pauseRound() {
        this.props.actions.pauseRound();
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-section menu-top">
                    <FitText compressor={0.8}><h1>Test Menu</h1></FitText>
                </div>
                <div className="menu-section menu-middle">
                    <FitText compressor={1.8}><p>testValue: {this.props.testValue} blueScore: {this.props.blueScore} redScore: {this.props.redScore}</p></FitText>
                    <FitText compressor={2}><a onClick={this.incriment} role="button" className="btn btn-primary btn-lg btn-block">Increment testValue</a></FitText>
                    <FitText compressor={2}><a onClick={this.incrimentScore} role="button" className="btn btn-primary btn-lg btn-block">Increment Score</a></FitText>
                    <FitText compressor={1.8}><p>gameOn: {this.props.gameOn.toString()} inRound: {this.props.inRound.toString()}</p></FitText>
                    <FitText compressor={2}><a onClick={this.toggleGameOn} role="button" className="btn btn-primary btn-lg btn-block">Toggle gameOn</a></FitText>
                    <FitText compressor={2}><a onClick={this.toggleRound} role="button" className="btn btn-primary btn-lg btn-block">Toggle inRound</a></FitText>
                    <FitText compressor={1.8}><p>currentTeam: {this.props.redTeam ? 'Red' : 'Blue'}</p></FitText>
                    <FitText compressor={2}><a onClick={this.toggleTeam} role="button" className="btn btn-primary btn-lg btn-block">Toggle currentTeam</a></FitText>
                    <FitText compressor={1.8}><p>isPaused: {this.props.isPaused.toString()}</p></FitText>
                    <FitText compressor={2}><a onClick={this.pauseRound} role="button" className="btn btn-primary btn-lg btn-block">Toggle isPaused</a></FitText>
                </div>
            </div>
        );
    }
}

TestPage.propTypes = {
    redTeam: PropTypes.bool.isRequired,
    testValue: PropTypes.number.isRequired,
    blueScore: PropTypes.number.isRequired,
    redScore: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired,
    containerWidth: PropTypes.number,
    containerHeight: PropTypes.number,
    gameOn: PropTypes.bool.isRequired,
    inRound: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        testValue: state.testValue,
        redTeam: state.redTeam,
        redScore: state.redScore,
        blueScore: state.blueScore,
        gameOn: state.gameOn,
        inRound: state.inRound,
        isPaused: state.isPaused
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, testActions, gameActions, roundActions, pauseActions, teamActions, redScoreActions, blueScoreActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
