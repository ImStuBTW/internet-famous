import * as types from '../constants/actionTypes';

export function endRoundSuccess() {
    return { type: types.END_ROUND_SUCCESS };
}

export function tickSuccess(value) {
    return { type: types.TICK_SUCCESS, timerValue: value };
}

export function timerStartSuccess() {
    return { type: types.TIMER_START_SUCCESS};
}

export function timerStopSuccess() {
    return { type: types.TIMER_STOP_SUCCESS};
}

export function timerResetSuccess(value) {
    return { type: types.TIMER_RESET_SUCCESS, timerValue: value};
}

let timer = null;

export function timerStart() {
    return (dispatch, getState) => {
        clearInterval(timer);
        timer = setInterval(() => {
            if(getState().timerValue > 0) {
                dispatch(tickSuccess(1));
            }
            else {
                clearInterval(timer);
                dispatch(timerStopSuccess());
                dispatch(endRoundSuccess());
                dispatch(timerResetSuccess(60));
            }
        }, 1000);
        dispatch(timerStartSuccess());
    };
}

export function timerStop() {
    return dispatch => {
        clearInterval(timer);
        dispatch(timerStopSuccess());
    }
}

export function timerReset() {
    return dispatch => {
        dispatch(timerResetSuccess(60));
    }
}
