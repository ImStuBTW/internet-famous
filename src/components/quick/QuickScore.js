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
import * as remainingCardsActions from '../../actions/remainingCardsActions';
import * as instructionsActions from '../../actions/instructionsActions';

class QuickScore extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.begin = this.begin.bind(this);
    }

    begin() {
        this.props.actions.switchTeam();
        this.props.actions.loadAndShuffleCards();
        this.props.actions.timerReset();
        this.props.actions.instructionsCleared();
        this.props.actions.nextPhase();
    }

    render() {
        let button = null;
        if(this.props.phase === 3) {
            button = <FitText compressor={1.6}><a onClick={this.begin} role="button" className="btn btn-primary btn-lg btn-block">Return This Phone To Its Owner</a></FitText>;
        }
        else {
            button = <FitText compressor={1.6}><a onClick={this.begin} role="button" className="btn btn-primary btn-lg btn-block">Pass Me To The {!this.props.redTeam ? <span>Red Team</span> : <span>Blue Team</span>}</a></FitText>;
        }
        return (
            <div className="menu">
                <div className="menu-section score-top">
                    <FitText compressor={0.8}><h2>Round Over!</h2></FitText>
                </div>
                <div className="menu-section score-middle">
                    <FitText compressor={2}><p>Eventually some scorecard information will go here.</p></FitText>
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
    phase: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        phase: state.phase,
        redTeam: state.redTeam
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, phaseActions, roundActions, timerActions, remainingCardsActions, instructionsActions, teamActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickScore);
