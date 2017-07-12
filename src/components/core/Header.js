import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pauseActions from '../../actions/pauseActions';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.pauseRound = this.pauseRound.bind(this);
    }

    pauseRound() {
        this.props.actions.pauseRound();
    }

    render() {
        return (
            <div className={'header ' + (this.props.gameOn ? this.props.redTeam ? 'header-red' : 'header-blue' : '')}>
                <div className="header-layout">
                    <div className="app">
                        {!this.props.gameOn ?
                        <h2>Welcome</h2> :
                        <h2>Score: {this.props.redTeam ? this.props.redScore : this.props.blueScore}</h2>}
                    </div>
                    <div className="settings">
                        <h2>{this.props.inRound && <span>{(() => {if(this.props.timerValue === 60) {return '1:00';} else if(this.props.timerValue < 10) {return '0:0' + this.props.timerValue} else {return '0:' + this.props.timerValue}})()}</span>} {this.props.inRound && <a onClick={this.pauseRound} className={'pause ' + (this.props.gameOn ? this.props.redTeam ? 'pause-red' : 'pause-blue' : '')}><span className={'glyphicon glyphicon-' + (this.props.isPaused ? 'play' : 'pause')} aria-hidden="true" /></a>}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    gameOn: PropTypes.bool.isRequired,
    inRound: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
    redTeam: PropTypes.bool.isRequired,
    redScore: PropTypes.number.isRequired,
    blueScore: PropTypes.number.isRequired,
    timerValue: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        gameOn: state.gameOn,
        inRound: state.inRound,
        isPaused: state.isPaused,
        redTeam: state.redTeam,
        redScore: state.redScore,
        blueScore: state.blueScore,
        timerValue: state.timerValue
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, pauseActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
