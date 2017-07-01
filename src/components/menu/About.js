import React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FitText from 'react-fittext';
import CardWrapper from '../core/CardWrapper';

class Welcome extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleLink = this.handleLink.bind(this);
    }

    handleLink(path) {
        this.props.push(path);
    }

    render() {
        return (
            <CardWrapper cardStyle={this.props.cardStyle}>
                <div className="menu">
                    <div className="menu-section menu-middle">
                        <FitText compressor={2}><p>Internet Famous is a Creative Commons BY-NC-SA 4.0 derivative of the card game Monikers. The name Monikers is a registered trademarked of Palm Court LLC. Internet Famous is unaffiliated with Monikers and Palm Court LLC.</p></FitText>
                        <FitText compressor={2}><p>Internet Famous is a Creative Commons BY-NC-SA 4.0 derivative of the card game Monikers. The name Monikers is a registered trademarked of Palm Court LLC. Internet Famous is unaffiliated with Monikers and Palm Court LLC.</p></FitText>
                        <FitText compressor={2}><p>Internet Famous is a Creative Commons BY-NC-SA 4.0 derivative of the card game Monikers. The name Monikers is a registered trademarked of Palm Court LLC. Internet Famous is unaffiliated with Monikers and Palm Court LLC.</p></FitText>
                    </div>
                    <div className="menu-section menu-bottom">
                        <FitText compressor={1.6}><a onClick={() => this.handleLink('/')} role="button" className="btn btn-primary btn-lg btn-block">Go Back</a></FitText>
                    </div>
                </div>
            </CardWrapper>
        );
    }
}

Welcome.propTypes = {
    cardStyle: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        push: bindActionCreators(push, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Welcome);
