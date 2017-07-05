import * as types from '../constants/actionTypes';

export function nextPhaseSuccess() {
    return { type: types.NEXT_PHASE_SUCCESS};
}

export function nextPhase() {
    return dispatch => {
        dispatch(nextPhaseSuccess());
    };
}

export function phaseResetSuccess() {
    return { type: types.RESET_PHASE_SUCCESS };
}

export function phaseResetPhase() {
    return dispatch => {
        dispatch(phaseResetSuccess());
    };
}
