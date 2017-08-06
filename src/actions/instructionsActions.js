import * as types from '../constants/actionTypes';

export function instructionsDeliveredSuccess(value) {
    return { type: types.INSTRUCTIONS_DELIVERED_SUCCESS, instructions: value };
}

export function instructionsDelivered() {
    return dispatch => {
        dispatch(instructionsDeliveredSuccess(true));
    };
}

export function instructionsClearedSuccess(value) {
    return { type: types.INSTRUCTIONS_CLEARED_SUCCESS, instructions: value };
}

export function instructionsCleared() {
    return dispatch => {
        dispatch(instructionsClearedSuccess(false));
    };
}
