import React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FitText from 'react-fittext';
import CardWrapper from '../core/CardWrapper';
import * as phaseActions from '../../actions/phaseActions';
import * as roundActions from '../../actions/roundActions';
import * as timerActions from '../../actions/timerActions';
import * as instructionsActions from '../../actions/instructionsActions';

class QuickInstructions extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.begin = this.begin.bind(this);
    }

    begin() {
        this.props.actions.instructionsDelivered();
        this.props.actions.startRound();
        this.props.actions.timerStart();
    }

    render() {
        switch(this.props.phase) {
            case 1:
                return (
                    <div className="menu">
                        <div className="menu-section instructions-top">
                            <FitText compressor={0.8}><h2>Round 1</h2></FitText>
                        </div>
                        <div className="menu-section instructions-middle">
                            <FitText compressor={2}><p>You can use any words, sounds, or gestures except the card name itself. You're free to use any part of the clue text if you'd like. If you say any part of the name, you have to skip that card this turn.</p></FitText>
                        </div>
                        <div className="menu-section instructions-bottom">
                            <FitText compressor={1.6}><a onClick={this.begin} role="button" className="btn btn-primary btn-lg btn-block">{this.props.redTeam ? <span>Red Team</span> : <span>Blue Team</span>}: Go!</a></FitText>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="menu">
                        <div className="menu-section instructions-top">
                            <FitText compressor={0.8}><h2>Round 2</h2></FitText>
                        </div>
                        <div className="menu-section instructions-middle">
                            <FitText compressor={2}><p>Use only one word, which can be anything except the name itself. You can repeat that word as many times as you like, but no sounds or gestures.</p></FitText>
                            </div>
                        <div className="menu-section instructions-bottom">
                            <FitText compressor={1.6}><a onClick={this.begin} role="button" className="btn btn-primary btn-lg btn-block">{this.props.redTeam ? <span>Red Team</span> : <span>Blue Team</span>}: Go!</a></FitText>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="menu">
                        <div className="menu-section instructions-top">
                            <FitText compressor={0.8}><h2>Round 3</h2></FitText>
                        </div>
                        <div className="menu-section instructions-middle">
                            <FitText compressor={2}><p>Just charades. No words. Sound effects are OK.</p></FitText>
                            </div>
                        <div className="menu-section instructions-bottom">
                            <FitText compressor={1.6}><a onClick={this.begin} role="button" className="btn btn-primary btn-lg btn-block">{this.props.redTeam ? <span>Red Team</span> : <span>Blue Team</span>}: Go!</a></FitText>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="menu">
                        <div className="menu-section instructions-top">
                            <FitText compressor={0.8}><h2>Something's gone horribly wrong.</h2></FitText>
                        </div>
                        <div className="menu-section instructions-middle">
                            <FitText compressor={2}><p>What did you do.</p></FitText>
                        </div>
                    </div>
                );
        }
    }
}

QuickInstructions.propTypes = {
    actions: PropTypes.object.isRequired,
    phase: PropTypes.number.isRequired,
    redTeam: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        phase: state.phase,
        redTeam: state.redTeam
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, phaseActions, roundActions, timerActions, instructionsActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickInstructions);
