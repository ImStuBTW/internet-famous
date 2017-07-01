import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router';

class Footer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-layout">
                    <div className="pass">
                        {this.props.inRound ?
                        <a className="btn btn-success btn-lg" href="#" role="button">Score</a> :
                        <a className="btn btn-success btn-lg disabled" href="#" role="button">Score</a>}
                    </div>
                    <div className="fail">
                        {this.props.inRound ?
                        <a className="btn btn-danger btn-lg" href="#" role="button">Skip</a> :
                        <a className="btn btn-danger btn-lg disabled" href="#" role="button">Skip</a>}
                    </div>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
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

export default connect(mapStateToProps)(Footer);
