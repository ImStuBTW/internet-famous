import * as types from '../constants/actionTypes';

export function startGameSuccess() {
    return { type: types.START_GAME_SUCCESS };
}

export function endGameSuccess() {
    return { type: types.END_GAME_SUCCESS };
}

export function startGame() {
    return dispatch => {
        dispatch(startGameSuccess());
    };
}

export function endGame() {
    return dispatch => {
        dispatch(endGameSuccess());
    };
}
