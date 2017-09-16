import * as types from '../constants/actionTypes';

export function addRedTempScoreSuccess(value) {
    return { type: types.ADD_REDTEMPSCORE_SUCCESS, redTempScore: value };
}

export function addRedTempScore(value) {
    return dispatch => {
        dispatch(addRedTempScoreSuccess(value));
    };
}

export function zeroRedTempScoreSuccess() {
    return { type: types.ZERO_REDTEMPSCORE_SUCCESS, redTempScore: 0 };
}

export function zeroRedTempScore() {
    return dispatch => {
        dispatch(zeroRedTempScoreSuccess());
    };
}
