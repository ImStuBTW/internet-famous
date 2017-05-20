import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as testActions from '../../actions/testActions';
import * as gameActions from '../../actions/gameActions';
import * as roundActions from '../../actions/roundActions';
import * as pauseActions from '../../actions/pauseActions';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router';
import FitText from 'react-fittext';

class TestPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.incriment = this.incriment.bind(this);
        this.startGameOn = this.startGameOn.bind(this);
        this.endGameOn = this.endGameOn.bind(this);
        this.startRound = this.startRound.bind(this);
        this.endRound = this.endRound.bind(this);
        this.pauseRound = this.pauseRound.bind(this);
    }

    incriment() {
        this.props.actions.addTest();
    }

    startGameOn() {
        this.props.actions.startGame();
    }

    endGameOn() {
        this.props.actions.endGame();
    }

    startRound() {
        this.props.actions.startRound();
    }

    endRound() {
        this.props.actions.endRound();
    }

    pauseRound() {
        this.props.actions.pauseRound();
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-section menu-top">
                    <FitText compressor={0.8}><h1>Super Secret Test Menu</h1></FitText>
                </div>
                <div className="menu-section menu-middle">
                    <FitText compressor={1.8}><p>testValue: {this.props.testValue}</p></FitText>
                    <FitText compressor={2}><a onClick={this.incriment} role="button" className="btn btn-primary btn-lg btn-block">Increment testValue</a></FitText>
                    <FitText compressor={1.8}><p>gameOn: {this.props.gameOn.toString()}</p></FitText>
                    <FitText compressor={2}><a onClick={this.startGameOn} role="button" className="btn btn-primary btn-lg btn-block">Start gameOn</a></FitText>
                    <FitText compressor={2}><a onClick={this.endGameOn} role="button" className="btn btn-primary btn-lg btn-block">End gameOn</a></FitText>
                    <FitText compressor={1.8}><p>inRound: {this.props.inRound.toString()}</p></FitText>
                    <FitText compressor={2}><a onClick={this.startRound} role="button" className="btn btn-primary btn-lg btn-block">Start inRound</a></FitText>
                    <FitText compressor={2}><a onClick={this.endRound} role="button" className="btn btn-primary btn-lg btn-block">End inRound</a></FitText>
                    <FitText compressor={1.8}><p>isPaused: {this.props.isPaused.toString()}</p></FitText>
                    <FitText compressor={2}><a onClick={this.pauseRound} role="button" className="btn btn-primary btn-lg btn-block">Toggle isPaused</a></FitText>
                </div>
            </div>
        );
    }
}

TestPage.propTypes = {
    testValue: PropTypes.number.isRequired,
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
        gameOn: state.gameOn,
        inRound: state.inRound,
        isPaused: state.isPaused
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, testActions, gameActions, roundActions, pauseActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
