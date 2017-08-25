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

class QuickOutro extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.begin = this.begin.bind(this);
    }

    begin() {
        this.props.actions.nextPhase();
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-section intro-top">
                    <FitText compressor={0.8}><h2>It's over!</h2></FitText>
                </div>
                <div className="menu-section intro-middle">
                    <FitText compressor={2}><p>Gasp!</p></FitText>
                </div>
                <div className="menu-section intro-bottom">
                    <FitText compressor={1.6}><a onClick={this.begin} role="button" className="btn btn-primary btn-lg btn-block">Go Home.</a></FitText>
                </div>
            </div>
        );
    }
}

QuickOutro.propTypes = {
    actions: PropTypes.object.isRequired,
    phase: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        phase: state.phase
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, phaseActions, roundActions, timerActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickOutro);
