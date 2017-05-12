import React from 'react';
import PropTypes from 'prop-types';
import FitText from 'react-fittext';

class Card extends React.Component {
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

        const lincoln = {
            title: 'Abraham Lincoln',
            clue: 'The 16th President of the US, who abolished slavery and led the North to victory in the Civil War. He is often depicted wearing a top hat with his signiture chin curtain beard. He was assassinated by the actor John Wilkes Booth while attending a party at Fords Theatre.',
            category: 'HISTORICAL FIGURE',
            score: '1',
            color: '#50b595'
        };

        const horses = {
            title: '100 Duck-Sized Horses',
            clue: 'From a hypothetical scenario that poses the question of who would win in a fight: a single equine-sized fowl or fivescore fowl-sized equines. The question was made famous in a 2012 Reddit AMA with President Barack Obama. The comment recieved over 1,000 upvotes.',
            category: 'ET CETERA',
            score: '4',
            color: '#e14644'
        };

        const furby = {
            title: 'A Furby',
            clue: 'A fuzzy interactive toy that became popular in the late 90s. Vaguely resembling an owl, it speaks a unique language, learning English over time through interacting with its owner. When held upside down it says things like "me scared" and begins crying.',
            category: 'FICTIONAL CHARACTER',
            score: '2',
            color: '#00afd9'
        };

        const nyan = {
            title: 'Nyan Cat',
            clue: 'A cartoon feline with a body of a Pop-Tart. It is depicted flying in space with a rainbow trail, accompanied by an upbeat song with the Japanese word for "Meow" as its lyrics. A popular variation has users syncing the video to Slipnot\s song "Psychosocial."',
            category: 'FICTIONAL CHARACTER',
            score: '3',
            color: '#7e6299'
        };

        const categoryStyle = {color: horses.color};
        const pointsStyle = {background: horses.color};

        return (
            <div className="card-container" style={cardStyle}>
                <div className="card">
                    <div className="card-section card-top">
                        <FitText compressor={0.8}><h1 className="title">{horses.title}</h1></FitText>
                    </div>
                    <div className="card-section card-middle">
                        <FitText compressor={1.6}><p className="clue">{horses.clue}</p></FitText>
                    </div>
                    <div className="card-section card-bottom">
                        <hr className="line" />

                        <FitText compressor={2}><p className="category" style={categoryStyle}>{nyan.category}</p></FitText>

                        <div className="points" style={pointsStyle}>
                            <FitText compressor={0.4}><p className="score">{horses.score}</p></FitText>
                            <FitText compressor={0.7}><p className="point">POINT</p></FitText>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    containerWidth: PropTypes.number,
    containerHeight: PropTypes.number
};

export default Card;
