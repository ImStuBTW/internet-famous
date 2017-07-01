import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router';
import {CSSTransitionGroup} from 'react-transition-group';

class CardWrapper extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <CSSTransitionGroup
                transitionName="example"
                transitionAppear
                transitionAppearTimeout={500}
                transitionEnter
                transitionEnterTimeout={500}
                transitionLeave
                transitionLeaveTimeout={300}>
                <div className="card-container" style={this.props.cardStyle}>
                    {this.props.children}
                </div>
            </CSSTransitionGroup>
        );
    }
}

CardWrapper.propTypes = {
    cardStyle: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
};

export default CardWrapper;
