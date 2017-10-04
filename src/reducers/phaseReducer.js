import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function phaseReducer(state = initialState.phase, action) {
    switch(action.type) {
        case types.INIT :
            return 0;
        case types.NEXT_PHASE_SUCCESS :
            return state+1;
        case types.RESET_PHASE_SUCCESS :
            return 0;
        default :
            return state;
    }
}
