import React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FitText from 'react-fittext';
import CardWrapper from '../core/CardWrapper';
import * as EmojiOne from 'react-svg-emojione';
import * as phaseActions from '../../actions/phaseActions';
import * as roundActions from '../../actions/roundActions';
import * as timerActions from '../../actions/timerActions';

class QuickOutro extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.begin = this.begin.bind(this);
        this.handleLink = this.handleLink.bind(this);
    }

    begin() {
        this.props.actions.nextPhase();
    }

    handleLink(path) {
        this.props.push(path);
    }

    render() {
        let title = '';
        if(this.props.redScore === this.props.blueScore){
            title = <h2>It's a Tie!</h2>;
        }
        else if(this.props.redScore > this.props.blueScore) {
            title = <h2 className="red-team">Congradulations Red Team!</h2>;
        }
        else {
            title = <h2 className="blue-team">Congradulations Blue Team!</h2>;
        }
        return (
            <div className="menu">
                <div className="menu-section intro-top">
                    <FitText compressor={0.8}>{title}</FitText>
                </div>
                <div className="menu-section intro-middle">
                    <EmojiOne.cake />
                </div>
                <div className="menu-section intro-bottom">
                    <FitText compressor={1.6}><a onClick={() => this.handleLink('/')} role="button" className="btn btn-default btn-lg btn-block">Quick Play With Same Deck</a></FitText>
                    <FitText compressor={1.6}><a onClick={() => this.handleLink('/')} role="button" className="btn btn-default btn-lg btn-block">Quick Play With New Deck</a></FitText>
                    <FitText compressor={1.6}><a onClick={() => this.handleLink('/')} role="button" className="btn btn-primary btn-lg btn-block">Go Home</a></FitText>
                </div>
            </div>
        );
    }
}

QuickOutro.propTypes = {
    push: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    phase: PropTypes.number.isRequired,
    redScore: PropTypes.number.isRequired,
    blueScore: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        phase: state.phase,
        redScore: state.redScore,
        blueScore: state.blueScore,
    };
}


function mapDispatchToProps(dispatch) {
    return {
        push: bindActionCreators(push, dispatch),
        actions: bindActionCreators(Object.assign({}, phaseActions, roundActions, timerActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickOutro);
