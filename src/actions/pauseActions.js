import * as types from '../constants/actionTypes';

export function pauseRoundSuccess() {
    return { type: types.PAUSE_ROUND_SUCCESS };
}

export function pauseRound() {
    return dispatch => {
        dispatch(pauseRoundSuccess());
    };
}
