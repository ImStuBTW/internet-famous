import React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import * as gameActions from '../../actions/gameActions';
import * as roundActions from '../../actions/roundActions';
import PropTypes from 'prop-types';
import FitText from 'react-fittext';
import CardWrapper from '../core/CardWrapper';

class Welcome extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleLink = this.handleLink.bind(this);
        this.endGame = this.endGame.bind(this);
        this.endRound = this.endRound.bind(this);
    }

    componentDidMount() {
        this.endGame();
        this.endRound();
    }

    endGame() {
        this.props.actions.endGame();
    }

    endRound() {
        this.props.actions.endRound();
    }

    handleLink(path) {
        this.props.push(path);
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-section menu-top">
                    <FitText compressor={0.8}><h1>Internet Famous</h1></FitText>
                    <FitText compressor={1.2}><h2>An Open-Source Monikers App</h2></FitText>
                </div>
                <div className="menu-section menu-middle">
                    <FitText compressor={1.6}><a onClick={() => this.handleLink('/game')} role="button" className="btn btn-primary btn-lg btn-block">Start Full Game</a></FitText>
                    <FitText compressor={1.6}><a onClick={() => this.handleLink('/test')} role="button" className="btn btn-default btn-lg btn-block">Quick Play</a></FitText>
                    <FitText compressor={1.6}><a onClick={() => this.handleLink('/about')} role="button" className="btn btn-default btn-lg btn-block">About Internet Famous</a></FitText>
                </div>
                <div className="menu-section menu-bottom">
                    <FitText compressor={3}><p>Internet Famous is a Creative Commons BY-NC-SA 4.0 derivative of the card game Monikers. The name Monikers is a registered trademarked of Palm Court LLC. Internet Famous is unaffiliated with Monikers and Palm Court LLC.</p></FitText>
                </div>
            </div>
        );
    }
}

Welcome.propTypes = {
    push: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        push: bindActionCreators(push, dispatch),
        actions: bindActionCreators(Object.assign({}, gameActions, roundActions), dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Welcome);
