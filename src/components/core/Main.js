import React from 'react';
import {PropTypes} from 'prop-types';
import Dimensions from 'react-dimensions';
import Emoji from './Emoji';
import { RouteTransition } from 'react-router-transition';
import { withRouter } from 'react-router';

class Main extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.fit = this.fit.bind(this);
    }

    fit(parentWidth, parentHeight, childWidth, childHeight) {
        const doRatio = childWidth / childHeight;
        const cRatio = parentWidth / parentHeight;
        let width = parentWidth;
        let height = parentHeight;

        if ((doRatio > cRatio)) {
            height = width / doRatio;
        } else {
            width = height * doRatio;
        }

        return {
            width,
            height,
            x: (parentWidth - width) / 2,
            y: (parentHeight - height) / 2
        };
    }

    render() {
        const sizing = this.fit(this.props.containerWidth, this.props.containerHeight, 49, 74);
        const cardStyle = {
            top: sizing.y+15,
            left: sizing.x+15,
            width: sizing.width-30,
            height: sizing.height-30
        };
        return (
                <div className="dimensions-container">
                    <Emoji containerHeight={this.props.containerHeight} containerWidth={this.props.containerWidth} />
                    <RouteTransition
                        component={false}
                        runOnMount
                        pathname={this.props.location.pathname}
                        atEnter={{opacity: 0, translateX: 100, top: cardStyle.top, left: cardStyle.left, width: cardStyle.width, height: cardStyle.height}}
                        atLeave={{opacity: 0, translateX: -100, top: cardStyle.top, left: cardStyle.left, width: cardStyle.width, height: cardStyle.height}}
                        atActive={{opacity: 1, translateX: 0, top: cardStyle.top, left: cardStyle.left, width: cardStyle.width, height: cardStyle.height}}
                        mapStyles={styles => ({ opacity: styles.opacity, transform: `translateX(${styles.translateX}%)`, top: styles.top, left: styles.left, width: styles.width, height: styles.height })}
                        >
                        <div className="card-container" style={cardStyle}>
                            {this.props.children}
                        </div>
                    </RouteTransition>
                </div>
        );
    }
}


Main.propTypes = {
    children: PropTypes.object.isRequired,
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired,
    location: PropTypes.object.isRequired
};

export default withRouter(Dimensions({debounce: 10})(Main));
