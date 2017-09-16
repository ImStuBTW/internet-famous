import * as types from '../constants/actionTypes';

export function addRedCardSuccess(value) {
    return { type: types.ADD_REDCARD_SUCCESS, redCard: value };
}

export function addRedCard() {
    return dispatch => {
        dispatch(addRedCardSuccess(1));
    };
}

export function zeroRedCardSuccess() {
    return { type: types.ZERO_REDCARD_SUCCESS, redCard: 0 };
}

export function zeroRedCard() {
    return dispatch => {
        dispatch(zeroRedCardSuccess());
    };
}
