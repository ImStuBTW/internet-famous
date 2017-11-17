import React from 'react';
import {PropTypes} from 'prop-types';
import objectAssign from 'object-assign';

//import { grinning, sweat_smile, kissing_heart, stuck_out_tongue_winking_eye, nerd, cowboy, sunglasses, neutral_face, dizzy_face, scream, sob, sleeping, thinking, japanese_ogre, ghost, skull, alien, robot, jack_o_lantern, kissing_cat, smile_cat, thumbsup, fist, wave, tongue, footprints, wolf, horse, bird, apple, watermelon, eggplant, croissant, cooking, meat_on_bone, taco, hamburger, ramen, curry, shaved_ice, cake, coffee, beer, beers, wine_glass, tumbler_glass, video_game, iphone, keyboard, dvd, vhs, bomb, heart_eyes_cat, ok_hand, dog, pizza, taxi, heart, avocado, japanese_goblin, boar, sushi, shallow_pan_of_food } from 'react-svg-emojione';

import * as emojiOne from '../../constants/emojiOne';

class Emoji extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.emojis = this.emojis.bind(this);
    }

    emojis(height = this.props.containerHeight, width = this.props.containerWidth) {
        const emojis = [
            React.createElement(emojiOne.grinning),
            React.createElement(emojiOne.sweat_smile),
            React.createElement(emojiOne.kissing_heart),
            React.createElement(emojiOne.stuck_out_tongue_winking_eye),
            React.createElement(emojiOne.nerd),
            React.createElement(emojiOne.cowboy),
            React.createElement(emojiOne.sunglasses),
            React.createElement(emojiOne.neutral_face),
            React.createElement(emojiOne.dizzy_face),
            React.createElement(emojiOne.scream),
            React.createElement(emojiOne.sob),
            React.createElement(emojiOne.sleeping),
            React.createElement(emojiOne.thinking),
            React.createElement(emojiOne.japanese_ogre),
            React.createElement(emojiOne.ghost),
            React.createElement(emojiOne.skull),
            React.createElement(emojiOne.alien),
            React.createElement(emojiOne.robot),
            React.createElement(emojiOne.jack_o_lantern),
            React.createElement(emojiOne.kissing_cat),
            React.createElement(emojiOne.smile_cat),
            React.createElement(emojiOne.thumbsup),
            React.createElement(emojiOne.fist),
            React.createElement(emojiOne.wave),
            React.createElement(emojiOne.tongue),
            React.createElement(emojiOne.footprints),
            React.createElement(emojiOne.wolf),
            React.createElement(emojiOne.horse),
            React.createElement(emojiOne.bird),
            React.createElement(emojiOne.apple),
            React.createElement(emojiOne.watermelon),
            React.createElement(emojiOne.eggplant),
            React.createElement(emojiOne.croissant),
            React.createElement(emojiOne.cooking),
            React.createElement(emojiOne.meat_on_bone),
            React.createElement(emojiOne.taco),
            React.createElement(emojiOne.hamburger),
            React.createElement(emojiOne.ramen),
            React.createElement(emojiOne.curry),
            React.createElement(emojiOne.shaved_ice),
            React.createElement(emojiOne.cake),
            React.createElement(emojiOne.coffee),
            React.createElement(emojiOne.beer),
            React.createElement(emojiOne.beers),
            React.createElement(emojiOne.wine_glass),
            React.createElement(emojiOne.tumbler_glass),
            React.createElement(emojiOne.video_game),
            React.createElement(emojiOne.iphone),
            React.createElement(emojiOne.keyboard),
            React.createElement(emojiOne.dvd),
            React.createElement(emojiOne.vhs),
            React.createElement(emojiOne.bomb),
            React.createElement(emojiOne.heart_eyes_cat),
            React.createElement(emojiOne.ok_hand),
            React.createElement(emojiOne.dog),
            React.createElement(emojiOne.pizza),
            React.createElement(emojiOne.taxi),
            React.createElement(emojiOne.heart),
            React.createElement(emojiOne.avocado),
            React.createElement(emojiOne.japanese_goblin),
            React.createElement(emojiOne.boar),
            React.createElement(emojiOne.sushi),
            React.createElement(emojiOne.shallow_pan_of_food)];

        //Shuffle Array
        emojis.sort(function(a, b) { return 0.5 - Math.random(); } );

        const output = [];

        let count = 0;

        emojis.forEach(function(emoji) {
            const randomX = Math.floor((Math.random() * (height+100))) - 100;
            const randomY= Math.floor((Math.random() * (width+100))) - 100;
            const customStyles = {width: width/5, height: width/5, top: randomX + 'px', left: randomY + 'px'};

            output.push(
                React.createElement('div', {key: 'emoji-'+count, className: 'emoji-one', style: customStyles},
                    emoji
                )
            );

            count++;
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
