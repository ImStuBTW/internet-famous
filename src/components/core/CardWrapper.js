import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router';

class CardWrapper extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let newStyle = {};
        if(this.props.style) {
            newStyle = {
                opacity: this.props.style.opacity,
                transform: this.props.style.transform,
                top: this.props.cardStyle.top,
                left: this.props.cardStyle.left,
                width: this.props.cardStyle.width,
                height: this.props.cardStyle.height
            };
        }
        else {
            newStyle = this.props.cardStyle;
        }
        return (
            <div className="card-container" style={newStyle}>
                {this.props.children}
            </div>
        );
    }
}

CardWrapper.propTypes = {
    cardStyle: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    style: PropTypes.object
};

export default CardWrapper;
