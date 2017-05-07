import * as types from '../constants/actionTypes';

export function addTestSuccess(value) {
    return { type: types.ADD_TEST_SUCCESS, testValue: value };
}

export function addTest() {
    return dispatch => {
        dispatch(addTestSuccess(1));
    };
}
