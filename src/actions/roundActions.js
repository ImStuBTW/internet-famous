import * as types from '../constants/actionTypes';

export function startRoundSuccess() {
    return { type: types.START_ROUND_SUCCESS };
}

export function endRoundSuccess() {
    return { type: types.END_ROUND_SUCCESS };
}

export function startRound() {
    return dispatch => {
        dispatch(startRoundSuccess());
    };
}

export function endRound() {
    return dispatch => {
        dispatch(endRoundSuccess());
    };
}
