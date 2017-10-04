import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function roundReducer(state = initialState.inRound, action) {
    switch(action.type) {
        case types.INIT :
            return false;
        case types.START_ROUND_SUCCESS :
            return true;
        case types.END_ROUND_SUCCESS :
            return false;
        default :
            return state;
    }
}
