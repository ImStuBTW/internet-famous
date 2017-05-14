import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as testActions from '../../actions/testActions';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router';

class TestPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.incriment = this.incriment.bind(this);
    }

    incriment() {
        this.props.actions.addTest();
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>Test Page</h1>
                <p>Oh hey look, its the test page.</p>
                <p>Current Dimensions: {this.props.containerWidth} x {this.props.containerHeight}</p>
                <p>Current testValue: {this.props.testValue}</p>
                <a className="btn btn-primary" onClick={this.incriment}>testValue++</a>
                <IndexLink to="/" className="btn btn-primary btn-large">Go Back</IndexLink>
            </div>
        );
    }
}

TestPage.propTypes = {
    testValue: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired,
    containerWidth: PropTypes.number,
    containerHeight: PropTypes.number
};

function mapStateToProps(state, ownProps) {
    return {
        testValue: state.testValue
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(testActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
