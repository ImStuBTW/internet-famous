import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as redScoreActions from '../../actions/redScoreActions';
import * as blueScoreActions from '../../actions/blueScoreActions';
import * as cardActions from '../../actions/cardActions';
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
            this.props.actions.addRed(parseInt(Cards[this.props.card].score));
            this.props.actions.nextCard();
        }
        else {
            this.props.actions.addBlue(parseInt(Cards[this.props.card].score));
            this.props.actions.nextCard();
        }
    }

    fail() {
        this.props.actions.nextCard();
    }

    render() {
        return (
            <div className={'footer ' + (this.props.gameOn ? this.props.redTeam ? 'footer-red' : 'footer-blue' : '')}>
                <div className="footer-layout">
                    <div className="pass">
                        {this.props.inRound ?
                        <a onClick={this.pass} className="btn btn-success btn-lg btn-block" role="button">Score</a> :
                        <a className="btn btn-success btn-lg btn-block disabled" role="button">Score</a>}
                    </div>
                    <div className="fail">
                        {this.props.inRound ?
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
    card: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        gameOn: state.gameOn,
        inRound: state.inRound,
        isPaused: state.isPaused,
        redTeam: state.redTeam,
        card: state.card
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, redScoreActions, blueScoreActions, cardActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
