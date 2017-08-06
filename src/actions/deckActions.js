import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import Cards from '../components/card/Cards';

export function randomDeckSuccess(value) {
    return { type: types.RANDOM_DECK_SUCCESS, deck: value};
}

export function randomDeck() {
    return dispatch => {
        let keys = Object.keys(Cards);
        let newDeck = [];
        for(let i=0; i<40; i++) {
            // Push a random card onto newDeck by splicing one card at random from between 0 and the length of keys.
            newDeck.push(keys.splice(Math.random()*keys.length, 1)[0]);
        }
        dispatch(randomDeckSuccess(newDeck));
        //dispatch(randomDeckSuccess(['b1', 'b2', 'b3', 'b4']));
    };
}
