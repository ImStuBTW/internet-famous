import React from 'react';
import {PropTypes} from 'prop-types';
import objectAssign from 'object-assign';
import * as EmojiOne from 'react-svg-emojione';

class Emoji extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.emojis = this.emojis.bind(this);
    }

    emojis(height = this.props.containerHeight, width = this.props.containerWidth) {
        const emojis = [
            "heart_eyes_cat",
            "sweat_smile",
            "ok_hand",
            "dog",
            "pizza",
            "taxi",
            "heart",
            "avocado",
            "japanese_goblin",
            "boar",
            "sushi",
            "shallow_pan_of_food"
        ];
        const output = [];

        emojis.forEach(function(emoji) {
            const randomX = Math.floor((Math.random() * height));
            const randomY= Math.floor((Math.random() * width));
            const customStyles = {top: randomX + 'px', left: randomY + 'px'};

            output.push(
                React.createElement('div', {key: emoji, className: 'emoji-one', style: customStyles},
                    React.createElement(EmojiOne[emoji])
                )
            );
        });
        return output;
    }

    render() {
        const emojis = this.emojis(this.props.containerHeight, this.props.containerWidth);

        return (
            <div className="emoji-container">
                {emojis}
            </div>
        );
    }
}

Emoji.propTypes = {
    containerWidth: PropTypes.number,
    containerHeight: PropTypes.number
};

export default Emoji;
