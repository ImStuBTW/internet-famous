import * as types from '../constants/actionTypes';

export function addBlueSuccess(value) {
    return { type: types.ADD_BLUE_SUCCESS, blueScore: value };
}

export function addBlue() {
    return dispatch => {
        dispatch(addBlueSuccess(1));
    };
}
