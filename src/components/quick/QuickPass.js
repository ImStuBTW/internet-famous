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
        let roundText = null;
        if(this.props.phase === 1) {
            roundText = <FitText compressor={2}><p>This is Round 1, so you can use any words, sounds, or gestures except the card name itself. You're free to use any part of the clue text if you'd like.</p></FitText>;
        }
        else if(this.props.phase === 2) {
            roundText = <FitText compressor={2}><p>This is Round 2, so you can use only one word, which can be anything except the name itself. You can repeat that word as many times as you like, but no sounds or gestures.</p></FitText>;
        }
        else {
            roundText = <FitText compressor={2}><p>This is Round 3, so it's just charades. No words period, but sound effects are OK.</p></FitText>;
        }
        return (
            <div className="menu">
                <div className="menu-section intro-top">
                    <FitText compressor={0.8}><h2>Time's Up!</h2></FitText>
                </div>
                <div className="menu-section intro-middle">
                    <FitText compressor={2}><p>Nice going {this.props.redTeam ? <span className="red-team">Red Team</span> : <span className="blue-team">Blue Team</span>}! Now it's the {this.props.redTeam ? <span className="blue-team">Blue Team's</span> : <span className="red-team">Red Team's</span>} turn. Pass the phone to someone on that team now.</p></FitText>
                    <FitText compressor={2}><p>{!this.props.redTeam ? <span className="red-team">Red Team</span> : <span className="blue-team">Blue Team</span>}, you've now got 60 seconds to guess the remaining {this.props.remainingCards.length} cards in the deck. When you're ready to start, press the Go! button.</p></FitText>
                    {roundText}
                </div>
                <div className="menu-section intro-bottom">
                    <FitText compressor={1.6}><a onClick={this.pass} role="button" className="btn btn-primary btn-lg btn-block">{!this.props.redTeam ? <span>Red Team</span> : <span>Blue Team</span>}: Go!</a></FitText>
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
    redTeam: PropTypes.bool.isRequired,
    remainingCards: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        phase: state.phase,
        redScore: state.redScore,
        blueScore: state.blueScore,
        redTeam: state.redTeam,
        remainingCards: state.remainingCards
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, phaseActions, roundActions, timerActions, teamActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickIntro);
