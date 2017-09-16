import * as types from '../constants/actionTypes';

export function addBlueCardSuccess(value) {
    return { type: types.ADD_BLUECARD_SUCCESS, blueCard: value };
}

export function addBlueCard() {
    return dispatch => {
        dispatch(addBlueCardSuccess(1));
    };
}

export function zeroBlueCardSuccess() {
    return { type: types.ZERO_BLUECARD_SUCCESS, blueCard: 0 };
}

export function zeroBlueCard() {
    return dispatch => {
        dispatch(zeroBlueCardSuccess());
    };
}
