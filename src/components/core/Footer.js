import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as redScoreActions from '../../actions/redScoreActions';
import * as blueScoreActions from '../../actions/blueScoreActions';
import * as deckActions from '../../actions/deckActions';
import * as phaseActions from '../../actions/phaseActions';
import * as roundActions from '../../actions/roundActions';
import * as timerActions from '../../actions/timerActions';
import * as remainingCards from '../../actions/remainingCardsActions';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router';
import Cards from '../card/Cards';

class Footer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.pass = this.pass.bind(this);
        this.fail = this.fail.bind(this);
    }

    pass() {
        if(this.props.redTeam) {
            this.props.actions.addRed(parseInt(Cards[this.props.remainingCards[0]].score));
        }
        else {
            this.props.actions.addBlue(parseInt(Cards[this.props.remainingCards[0]].score));
        }
        this.props.actions.scoreCard();
        if(this.props.remainingCards.length === 1) {
            this.props.actions.loadAndShuffleCards();
            this.props.actions.timerStop();
            this.props.actions.timerReset();
            this.props.actions.nextPhase();
            this.props.actions.endRound();
        }
    }

    fail() {
        this.props.actions.shiftCard();
    }

    render() {
        return (
            <div className={'footer ' + (this.props.gameOn ? this.props.redTeam ? 'footer-red' : 'footer-blue' : '')}>
                <div className="footer-layout">
                    <div className="pass">
                        {(this.props.inRound && !this.props.isPaused) ?
                        <a onClick={this.pass} className="btn btn-success btn-lg btn-block" role="button">Score</a> :
                        <a className="btn btn-success btn-lg btn-block disabled" role="button">Score</a>}
                    </div>
                    <div className="fail">
                        {(this.props.inRound && !this.props.isPaused)?
                        <a onClick={this.fail} className="btn btn-danger btn-lg btn-block" role="button">Skip</a> :
                        <a className="btn btn-danger btn-lg btn-block disabled" role="button">Skip</a>}
                    </div>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    gameOn: PropTypes.bool.isRequired,
    inRound: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired,
    redTeam: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
    remainingCards: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        gameOn: state.gameOn,
        inRound: state.inRound,
        isPaused: state.isPaused,
        redTeam: state.redTeam,
        remainingCards: state.remainingCards
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, redScoreActions, blueScoreActions, deckActions, phaseActions, remainingCards, timerActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
