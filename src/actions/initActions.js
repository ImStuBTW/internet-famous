import * as types from '../constants/actionTypes';

export function initSuccess() {
    return { type: types.INIT };
}

export function init() {
    return dispatch => {
        dispatch(initSuccess());
    };
}
