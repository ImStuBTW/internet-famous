import * as types from '../constants/actionTypes';

export function nextCardSuccess(value) {
    return { type: types.NEXT_CARD_SUCCESS, card: value };
}

export function shiftDeckSuccess() {
    return { type: types.SHIFT_DECK_SUCCESS };
}

export function nextCard() {
    return (dispatch, getState) => {
        /*const page = "abcd";
        const pageLetter = page[Math.floor(Math.random() * page.length)];
        const cardNumber = Math.floor(Math.random() * 9) + 1;*/
        dispatch(nextCardSuccess(getState().deck[0]));
        dispatch(shiftDeckSuccess());
    };
}
