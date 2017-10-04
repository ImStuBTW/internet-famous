import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function timerReducer(state = initialState.timerValue, action) {
    switch(action.type) {
        case types.INIT :
            return 10;
        case types.TICK_SUCCESS :
            return state-action.timerValue;
        case types.TIMER_RESET_SUCCESS :
            return action.timerValue;
        case types.TIMER_START_SUCCESS :
            return state;
        case types.TIMER_STOP_SUCCESS :
            return state;
        default :
            return state;
    }
}
