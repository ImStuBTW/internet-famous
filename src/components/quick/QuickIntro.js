import React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FitText from 'react-fittext';
import CardWrapper from '../core/CardWrapper';
import * as phaseActions from '../../actions/phaseActions';
import * as roundActions from '../../actions/roundActions';

class QuickIntro extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.begin = this.begin.bind(this);
    }

    begin() {
        this.props.actions.nextPhase();
        this.props.actions.startRound();
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-section intro-top">
                    <FitText compressor={0.8}><h2>Quick Play</h2></FitText>
                </div>
                <div className="menu-section intro-middle">
                    <FitText compressor={2}><p>Divide your friends into two groups: The <span className="red-team">Red Team</span> and the <span className="blue-team">Blue Team</span>. <span className="red-team">Red</span>'s going first.</p></FitText>
                    <FitText compressor={2}><p>Give a person on the <span className="red-team">Red Team</span> the phone. When they press go, they'll have sixty seconds to get their team to guess as many card names as possible from the deck by giving clues to the person or thing's identity. There's no limit to the number of guesses, but they can't say any part of the card's name. Skipping cards is encouraged.</p></FitText>
                    <FitText compressor={2}><p>After 60 seconds, the <span className="red-team">Red Team</span> will pass the phone over to the <span className="blue-team">Blue Team</span>, and they'll have 60 seconds to guess the remaining cards. This process will continue until there are no cards left.</p></FitText>
                </div>
                <div className="menu-section intro-bottom">
                    <FitText compressor={1.6}><a onClick={this.begin} role="button" className="btn btn-primary btn-lg btn-block">Red Team: Go!</a></FitText>
                </div>
            </div>
        );
    }
}

QuickIntro.propTypes = {
    actions: PropTypes.object.isRequired,
    phase: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        phase: state.phase
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, phaseActions, roundActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickIntro);
