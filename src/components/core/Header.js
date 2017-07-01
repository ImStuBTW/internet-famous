import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="header">
                <div className="header-layout">
                    <div className="app">
                        {!this.props.gameOn ?
                        <h2>Internet Famous</h2> :
                        <h2>Round 1</h2>}
                    </div>
                    <div className="timer">
                        {this.props.inRound && <h2>0:48</h2>}
                    </div>
                    <div className="settings">
                        <h2><span className="glyphicon glyphicon-pause" aria-hidden="true" /></h2>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    gameOn: PropTypes.bool.isRequired,
    inRound: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        gameOn: state.gameOn,
        inRound: state.inRound,
        isPaused: state.isPaused
    };
}

export default connect(mapStateToProps)(Header);
