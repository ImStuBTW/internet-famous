import * as types from '../constants/actionTypes';

export function loadCardsSuccess(value) {
    return { type: types.LOAD_CARDS_SUCCESS, remainingCards: value };
}

export function loadCards() {
    return (dispatch, getState) => {
        dispatch(loadCardsSuccess(getState().deck));
    };
}

// Fisher-Yates Shuffle https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(array) {
    let newArray = array;
    let counter = array.length;
    while (counter > 0) { // While there are elements in the array
        let index = Math.floor(Math.random() * counter); // Pick a random index
        counter--; // Decrease counter by 1
        // And swap the last element with it
        let temp = newArray[counter];
        newArray[counter] = newArray[index];
        newArray[index] = temp;
    }
    return newArray;
}

export function loadAndShuffleCardsSuccess(value) {
    return { type: types.LOAD_AND_SHUFFLE_CARDS_SUCCESS, remainingCards: value };
}

export function loadAndShuffleCards() {
    return (dispatch, getState) => {
        dispatch(loadAndShuffleCardsSuccess(shuffle(getState().deck.slice())));
    };
}

export function shiftCardsSuccess() {
    return { type: types.SHIFT_CARDS_SUCCESS };
}

export function shiftCard() {
    return dispatch => {
        dispatch(shiftCardsSuccess());
    };
}

export function scoreCardsSuccess() {
    return { type: types.SCORE_CARDS_SUCCESS };
}

export function scoreCard() {
    return dispatch => {
        dispatch(scoreCardsSuccess());
    };
}
