import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function redTempScoreReducer(state = initialState.redTempScore, action) {
    switch(action.type) {
        case types.ADD_REDTEMPSCORE_SUCCESS :
            return state+action.redTempScore;
        case types.ZERO_REDTEMPSCORE_SUCCESS :
            return action.redTempScore;
        default :
            return state;
    }
}
