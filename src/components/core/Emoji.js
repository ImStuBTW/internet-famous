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
            "grinning",
            "sweat_smile",
            "kissing_heart",
            "stuck_out_tongue_winking_eye",
            "nerd",
            "cowboy",
            "sunglasses",
            "neutral_face",
            "dizzy_face",
            "scream",
            "sob",
            "sleeping",
            "thinking",
            "japanese_ogre",
            "ghost",
            "skull",
            "alien",
            "robot",
            "jack_o_lantern",
            "kissing_cat",
            "smile_cat",
            "thumbsup",
            "fist",
            "wave",
            "tongue",
            "footprints",
            "wolf",
            "horse",
            "bird",
            "apple",
            "watermelon",
            "eggplant",
            "croissant",
            "cooking",
            "meat_on_bone",
            "taco",
            "hamburger",
            "ramen",
            "curry",
            "shaved_ice",
            "cake",
            "coffee",
            "beer",
            "beers",
            "wine_glass",
            "tumbler_glass",
            "video_game",
            "iphone",
            "keyboard",
            "dvd",
            "vhs",
            "bomb",
            "heart_eyes_cat",
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

        //Shuffle Array
        emojis.sort(function(a, b) { return 0.5 - Math.random(); } );

        const output = [];

        emojis.forEach(function(emoji) {
            const randomX = Math.floor((Math.random() * (height+100))) - 100;
            const randomY= Math.floor((Math.random() * (width+100))) - 100;
            const customStyles = {width: width/5, height: width/5, top: randomX + 'px', left: randomY + 'px'};

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
