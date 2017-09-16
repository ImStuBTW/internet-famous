import * as types from '../constants/actionTypes';

export function addBluePassSuccess(value) {
    return { type: types.ADD_BLUEPASS_SUCCESS, bluePass: value };
}

export function addBluePass() {
    return dispatch => {
        dispatch(addBluePassSuccess(1));
    };
}

export function zeroBluePassSuccess() {
    return { type: types.ZERO_BLUEPASS_SUCCESS, bluePass: 0 };
}

export function zeroBluePass() {
    return dispatch => {
        dispatch(zeroBluePassSuccess());
    };
}
