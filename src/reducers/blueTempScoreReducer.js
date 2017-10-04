import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function blueTempScoreReducer(state = initialState.blueTempScore, action) {
    switch(action.type) {
        case types.INIT :
            return 0;
        case types.ADD_BLUETEMPSCORE_SUCCESS :
            return state+action.blueTempScore;
        case types.ZERO_BLUETEMPSCORE_SUCCESS :
            return action.blueTempScore;
        default :
            return state;
    }
}
