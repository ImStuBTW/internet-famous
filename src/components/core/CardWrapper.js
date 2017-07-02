import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router';

class CardWrapper extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (

                <div className="card-container" style={this.props.cardStyle}>
                    {this.props.children}
                </div>
        );
    }
}

CardWrapper.propTypes = {
    cardStyle: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
};

export default CardWrapper;
