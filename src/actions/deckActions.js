import * as types from '../constants/actionTypes';

export function randomDeckSuccess(value) {
    return { type: types.RANDOM_DECK_SUCCESS, deck: value};
}

export function randomDeck() {
    return dispatch => {
        dispatch(randomDeckSuccess(['b1', 'b2', 'b3', 'b4']));
    };
}
