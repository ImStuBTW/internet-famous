import * as types from '../constants/actionTypes';

export function addRedPassSuccess(value) {
    return { type: types.ADD_REDPASS_SUCCESS, redPass: value };
}

export function addRedPass() {
    return dispatch => {
        dispatch(addRedPassSuccess(1));
    };
}

export function zeroRedPassSuccess() {
    return { type: types.ZERO_REDPASS_SUCCESS, redPass: 0 };
}

export function zeroRedPass() {
    return dispatch => {
        dispatch(zeroRedPassSuccess());
    };
}
