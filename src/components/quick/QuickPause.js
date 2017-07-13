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
import * as teamActions from '../../actions/teamActions';
import * as pauseActions from '../../actions/pauseActions';

class QuickIntro extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.resume = this.resume.bind(this);
    }

    resume() {
        this.props.actions.pauseRound();
        this.props.actions.timerStart();
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-section intro-top">
                    <FitText compressor={0.8}><h2>Pause!</h2></FitText>
                </div>
                <div className="menu-section intro-middle">
                    <FitText compressor={2}><p>Need a breather {this.props.redTeam ? <span className="red-team">Red Team</span> : <span className="blue-team">Blue Team</span>}? The game's paused, just click the Resume button to start where you left off.</p></FitText>
                </div>
                <div className="menu-section intro-bottom">
                    <FitText compressor={1.6}><a onClick={this.resume} role="button" className="btn btn-primary btn-lg btn-block">Resume</a></FitText>
                </div>
            </div>
        );
    }
}

QuickIntro.propTypes = {
    actions: PropTypes.object.isRequired,
    phase: PropTypes.number.isRequired,
    redScore: PropTypes.number.isRequired,
    blueScore: PropTypes.number.isRequired,
    redTeam: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        phase: state.phase,
        redScore: state.redScore,
        blueScore: state.blueScore,
        redTeam: state.redTeam
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, phaseActions, roundActions, timerActions, teamActions, pauseActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickIntro);
