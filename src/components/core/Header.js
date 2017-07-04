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
            <div className="header">
                <div className="header-layout">
                    <div className="app">
                        {!this.props.gameOn ?
                        <h2 /> :
                        <h2>Round 1</h2>}
                    </div>
                    <div className="timer">
                        {this.props.inRound && <h2 className="text-center">0:48</h2>}
                    </div>
                    <div className="settings">
                        {this.props.isPaused ? <h2><a onClick={this.pauseRound} className="pause"><span className="glyphicon glyphicon-play" aria-hidden="true" /></a></h2> : <h2><a onClick={this.pauseRound} className="pause"><span className="glyphicon glyphicon-pause" aria-hidden="true" /></a></h2>}
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
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        gameOn: state.gameOn,
        inRound: state.inRound,
        isPaused: state.isPaused
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, pauseActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
