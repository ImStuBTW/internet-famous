import React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FitText from 'react-fittext';
import CardWrapper from '../core/CardWrapper';

class About extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleLink = this.handleLink.bind(this);
    }

    handleLink(path) {
        this.props.push(path);
    }

    render() {
        return (
            <CardWrapper cardStyle={this.props.style}>
                <div className="menu">
                    <div className="menu-section about-middle">
                        <FitText compressor={2}><p>Internet Famous is an MIT License open source project. It uses React, Redux, and a slew of other JavaScript libraries. To learn more about Internet Famous, please visit its <a href="https://github.com/imstuartjones/internet-famous/">GitHub repository.</a></p></FitText>
                        <FitText compressor={2}><p>Emoji art assets provided by <a href="https://www.emojione.com/emoji/v2">EmojiOne 2.3</a>, a Creative Commons BY 4.0 project. React-friendly SVG library coursety of wilhearts' <a href="https://www.npmjs.com/package/react-svg-emojione">react-svg-emojione</a> NPM package.</p></FitText>
                        <FitText compressor={2}><p>Internet Famous is a Creative Commons BY-NC-SA 4.0 derivative of the card game Monikers. The name Monikers is a registered trademarked of Palm Court LLC. Internet Famous is unaffiliated with Monikers and Palm Court LLC. If you enjoy Internet Famous, why not pick up a physical copy of Monikers at <a href="http://www.monikersgame.com/">monikersgame.com</a>?</p></FitText>
                    </div>
                    <div className="menu-section about-bottom">
                        <FitText compressor={1.6}><a onClick={() => this.handleLink('/')} role="button" className="btn btn-primary btn-lg btn-block">Go Back</a></FitText>
                    </div>
                </div>
            </CardWrapper>
        );
    }
}

About.propTypes = {
    push: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        push: bindActionCreators(push, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(About);
