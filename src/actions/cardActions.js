import * as types from '../constants/actionTypes';

export function nextCardSuccess(value) {
    return { type: types.NEXT_CARD_SUCCESS, card: value };
}

export function nextCard() {
    return dispatch => {
        const page = "ab";
        const pageLetter = page[Math.floor(Math.random() * page.length)];
        const cardNumber = Math.floor(Math.random() * 9) + 1;
        dispatch(nextCardSuccess(pageLetter + cardNumber));
    };
}
