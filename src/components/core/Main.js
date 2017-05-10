import React from 'react';
import {PropTypes} from 'prop-types';
import Dimensions from 'react-dimensions';

class Main extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="main">
                {React.cloneElement(this.props.children, {containerWidth: this.props.containerWidth, containerHeight: this.props.containerHeight})}
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.object.isRequired,
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
};

export default Dimensions()(Main);
