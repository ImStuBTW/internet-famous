import React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FitText from 'react-fittext';
import CardWrapper from '../core/CardWrapper';
import * as emojiOne from '../../constants/emojiOne';
import * as initActions from '../../actions/initActions';
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
        this.props.actions.init();
        this.props.push(path);
    }

    render() {
        let title = '';
        let body = '';
        if(this.props.redScore === this.props.blueScore){
            title = <h2>It's a Tie!</h2>;
            body = <FitText compressor={0.8}><h3 className="text-center">¯\_(ツ)_/¯</h3></FitText>;
        }
        else if(this.props.redScore > this.props.blueScore) {
            title = <h2 className="red-team">Congradulations Red Team!</h2>;
            body = <emojiOne.cake />;
        }
        else {
            title = <h2 className="blue-team">Congradulations Blue Team!</h2>;
            body = <emojiOne.cake />;
        }
        return (
            <div className="menu">
                <div className="menu-section outro-top">
                    <FitText compressor={0.8}>{title}</FitText>
                </div>
                <div className="menu-section outro-middle">
                    {body}
                </div>
                <div className="menu-section outro-bottom">
                    <FitText compressor={1.6}><a onClick={() => this.handleLink('/quick')} role="button" className="btn btn-default btn-lg btn-block">Start A New Quick Play</a></FitText>
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
        actions: bindActionCreators(Object.assign({}, initActions, phaseActions, roundActions, timerActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickOutro);
