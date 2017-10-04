import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function redReducer(state = initialState.redScore, action) {
    switch(action.type) {
        case types.INIT :
            return 0;
        case types.ADD_RED_SUCCESS :
            return state+action.redScore;
        default :
            return state;
    }
}
