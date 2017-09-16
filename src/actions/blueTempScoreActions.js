import * as types from '../constants/actionTypes';

export function addBlueTempScoreSuccess(value) {
    return { type: types.ADD_BLUETEMPSCORE_SUCCESS, blueTempScore: value };
}

export function addBlueTempScore(value) {
    return dispatch => {
        dispatch(addBlueTempScoreSuccess(value));
    };
}

export function zeroBlueTempScoreSuccess() {
    return { type: types.ZERO_BLUETEMPSCORE_SUCCESS, blueTempScore: 0 };
}

export function zeroBlueTempScore() {
    return dispatch => {
        dispatch(zeroBlueTempScoreSuccess());
    };
}
