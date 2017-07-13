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

class QuickIntro extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.pass = this.pass.bind(this);
    }

    pass() {
        this.props.actions.switchTeam();
        this.props.actions.startRound();
        this.props.actions.timerStart();
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-section intro-top">
                    <FitText compressor={0.8}><h2>Time's Up!</h2></FitText>
                </div>
                <div className="menu-section intro-middle">
                    <FitText compressor={2}><p>Nice going {this.props.redTeam ? <span className="red-team">Red Team</span> : <span className="blue-team">Blue Team</span>}! You correctly gussed [Card Number] cards, for a total of {this.props.redTeam ? <span className="red-team">{this.props.redScore} Points</span> : <span className="blue-team">{this.props.blueScore} Points</span>}!</p></FitText>
                    <FitText compressor={2}><p>It's the {this.props.redTeam ? <span className="blue-team">Blue Team's</span> : <span className="red-team">Red Team's</span>} turn. Pass the phone to someone on that team now.</p></FitText>
                    <FitText compressor={2}><p>When you've passed the phone, press the Switch Teams button.</p></FitText>
                </div>
                <div className="menu-section intro-bottom">
                    <FitText compressor={1.6}><a onClick={this.pass} role="button" className="btn btn-primary btn-lg btn-block">Switch Teams</a></FitText>
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
        actions: bindActionCreators(Object.assign({}, phaseActions, roundActions, timerActions, teamActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickIntro);
