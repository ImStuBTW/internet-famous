import React from 'react';
import {PropTypes} from 'prop-types';
import Dimensions from 'react-dimensions';
import Emoji from './Emoji';

class Main extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="dimensions-container">
                <Emoji containerHeight={this.props.containerHeight} containerWidth={this.props.containerWidth} />
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

export default Dimensions({debounce: 10})(Main);
